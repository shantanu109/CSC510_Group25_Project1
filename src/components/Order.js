import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchUsers } from '../actions/search';
import {clearAuthState,editItem} from '../actions/auth';
import {clearsearchstate} from '../actions/search';



import Widgets from './Widgets.js';
import {createJob, fetchMenus} from '../actions/job';
import { fetchJobs,createMenu,fetchOrder,createOrder} from '../actions/job';
import Job1 from './Job1';
import { toast } from 'react-toastify';
import Job2 from './Job2';


class Order extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          items: [{ id: '', quantity: '' ,cost:''}],
          editMode: false,
          totalCost:0
        };

        this.formRef = React.createRef(null)
      }
    

    handleSearch = (e) => {
        const searchText = e.target.value;
        console.log(searchText)
         
        this.props.dispatch(searchUsers(searchText));
        
      };
      
    
   

    clearSearch = () => {
        this.props.dispatch(clearsearchstate([]))
        console.log("UNMOUNT")

    }

    handleInputChange = (fieldName,val) => {

        this.setState({
            [fieldName]: val
        })

        
    
      }

      addMoreIngredient = () => {
        if(this.state.items.length === this.props.menu.length){
          toast.error("No more Menu Item Left to Add")
          return
        }
        this.setState((prevState) => ({
            items: [...prevState.items, { id: '', quantity: '' }],
        }));
      }

    
  handleSave = (e) => {
    e.preventDefault()

    const {items} = this.state;

    const {user} = this.props.auth;

    this.props.dispatch(createOrder(items))

    this.formRef.current.reset()

    this.setState({
      items: [{ id: '', quantity: '',cost:'' }],
      editMode: false,
    })

  }

  componentDidMount() {
    this.props.dispatch(fetchMenus());
    this.props.dispatch(fetchOrder());
  }


    
    
    render() {
       
      const {error} = this.props.auth;
      
      const {menu} = this.props;
      const {job} = this.props;
      const {order} = this.props;

      const {items} = this.state
        
      
        return (
            <div>
              
           <form className="goal-form" style={{width:'650px',height:'fit-content',marginLeft:'100px'}} onSubmit={this.handleSave} ref={this.formRef}>
           <span className="login-signup-header" style={{margin:"20px 0px"}}>Add Order</span>
            {error && <div className="alert error-dailog">{error}</div>}
            

          {/* <div className="field">
            <label>Item Price</label>
            <input
              placeholder="Price"
              type="text"
              required
              onChange={(e) => this.handleInputChange('costmenu', e.target.value)}
            />
          </div> */}

          <span className='login-signup-header' style={{fontSize:"22px",marginBottom:"20px"}}>Item Ordered</span>

          <div className='ingredient_used_container' style={{width:"100%"}}>
              {
                items.map((odr,index)=>{
                  return(
                    <div className='ingredient_used'>
                      <div key={index} className='field'>
                        <label>Ingredient Name</label>
                        <select onChange={(e) => {
                          const newIngredients = [...this.state.items];
                          newIngredients[index].id = e.target.value;
                          this.setState({ items: newIngredients });

                          if(newIngredients[index].quantity){
                            newIngredients[index].cost = newIngredients[index].quantity * this.props.menu.find((ing)=>ing._id===newIngredients[index].id).costmenu
                            this.setState({
                                items: newIngredients
                            })
                        }
                        }
                        }>
                          <option value="">Select Item</option>
                          {menu.length>0 && menu.map((jb) => {
                            return (
                              <option value={jb._id} disabled={this.state.items.findIndex((ing)=>ing.id===jb._id)>-1?true:false}>{jb.menuname}</option>
                            )
                          })}
                        </select>
                        </div>
                        <div key={index} className='field'>
                        <label>Quantity</label>
                        <input
                          placeholder="Quantity"
                          type="number"
                          required
                          min="1"
                          onChange={(e) => {
                            const newIngredients = [...this.state.items];
                            newIngredients[index].quantity = e.target.value;
                            this.setState({ items: newIngredients });

                            if(newIngredients[index].id){
                                newIngredients[index].cost = e.target.value * this.props.menu.find((ing)=>ing._id===newIngredients[index].id).costmenu
                                this.setState({
                                    items: newIngredients
                                })
                            }
                            

                          }}
                        />
                      </div>
                    </div>
                  )
                })
              }
              
            
          </div>
          <div className="field">
                  <label>Total Cost</label>
                  <input
                    placeholder="Quantity"
                    type="text"
                    value={`$ ${this.state.items.reduce((total, item) => {
                        return total +item.cost;
                      }, 0)}`}
                    required
                    disabled
                    // onChange={(e) => this.handleInputChange('quantity', e.target.value)}
                  />
                </div>
          <div className="field">
           <button onClick={this.addMoreIngredient} className='button save-btn' type="button" style={{width: "30%",fontSize: '16px',borderRadius: "8px"}}>Add More Item</button>
          </div>


        
       
        
        <div className="field">
        <button className="button save-btn" type="submit" >Place Order</button>
        </div>
        
        
        

        </form>

         
              <div style={{marginLeft:'57px',width:'650px'}}>
        {order.map((ord) => (
          <Job2 order={ord} />
        ))}
        </div>  
        
        </div>
        
           
        );
    }
}



function mapStateToProps(state) {
    return {
      auth: state.auth,
      results: state.search.results,
      job:state.job,
      menu:state.menu,
      order:state.order
    };
  }
  
  export default connect(mapStateToProps)(Order);


