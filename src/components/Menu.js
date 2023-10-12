import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchUsers } from '../actions/search';
import {clearAuthState,editItem} from '../actions/auth';
import {clearsearchstate} from '../actions/search';



import Widgets from './Widgets.js';
import {createJob, fetchMenus} from '../actions/job';
import { fetchJobs,createMenu} from '../actions/job';
import Job1 from './Job1';
import { toast } from 'react-toastify';


class Menu extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          restname:'',
          restid: '',
          menuname:'',
          quantity:'0',
          costmenu:'',
          ingredients: [{ inventory_id: '', quantity: '' }],
          editMode: false,
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
        if(this.state.ingredients.length === this.props.job.length){
          toast.error("No more Ingredients Left to Add")
          return
        }
        this.setState((prevState) => ({
          ingredients: [...prevState.ingredients, { inventory_id: '', quantity: '' }],
        }));
      }

    
  handleSave = (e) => {
    e.preventDefault()

    const {menuname,ingredients,costmenu} = this.state;

    const {user} = this.props.auth;

    this.props.dispatch(createMenu(menuname,ingredients,costmenu))

    this.formRef.current.reset()

    this.setState({
      restname:'',
      restid: '',
      menuname:'',
      quantity:'0',
      costmenu:'',
      ingredients: [{ inventory_id: '', quantity: '' }],
      editMode: false,
    })

  }

  componentDidMount() {
    this.props.dispatch(fetchJobs());
    this.props.dispatch(fetchMenus());
  }


    
    
    render() {
       
      const {error} = this.props.auth;
      
      const {menu} = this.props;
      const {job} = this.props;

      const {ingredients} = this.state
        
      
        return (
            <div>
              
           <form className="goal-form" style={{width:'650px',height:'fit-content',marginLeft:'100px'}} onSubmit={this.handleSave} ref={this.formRef}>
           <span className="login-signup-header" style={{margin:"20px 0px"}}>Add Menu Item</span>
            {error && <div className="alert error-dailog">{error}</div>}
            
            

            <div className="field">
              <label>Menu Item Name</label>
              <input
                placeholder="Item Name"
                type="text"
                required
                onChange={(e) => this.handleInputChange('menuname', e.target.value)}
              />
            </div>

          <div className="field">
            <label>Item Price</label>
            <input
              placeholder="Price"
              type="text"
              required
              onChange={(e) => this.handleInputChange('costmenu', e.target.value)}
            />
          </div>

          <span className='login-signup-header' style={{fontSize:"22px",marginBottom:"20px"}}>Ingredient Used</span>

          <div className='ingredient_used_container' style={{width:"100%"}}>
              {
                ingredients.map((ingredient,index)=>{
                  return(
                    <div className='ingredient_used'>
                      <div key={index} className='field'>
                        <label>Ingredient Name</label>
                        <select onChange={(e) => {
                          const newIngredients = [...this.state.ingredients];
                          newIngredients[index].inventory_id = e.target.value;
                          this.setState({ ingredients: newIngredients });  
                        }
                        }>
                          <option value="">Select Item</option>
                          {job.length>0 && job.map((jb) => {
                            return (
                              <option value={jb._id} disabled={this.state.ingredients.findIndex((ing)=>ing.inventory_id===jb._id)>-1?true:false}>{jb.itemname}</option>
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
                          onChange={(e) => {
                            const newIngredients = [...this.state.ingredients];
                            newIngredients[index].quantity = e.target.value;
                            this.setState({ ingredients: newIngredients });
                          }}
                        />
                      </div>
                    </div>
                  )
                })
              }
              
            
          </div>
          <div className="field">
           <button onClick={this.addMoreIngredient} className='button save-btn' type="button" style={{width: "30%",fontSize: '16px',borderRadius: "8px"}}>Add More Ingredient</button>
          </div>


        
       
        
        <div className="field">
        <button className="button save-btn" type="submit" >Save</button>
        </div>
        
        
        

        </form>

         
              <div style={{marginLeft:'57px',width:'650px'}}>
        {menu.map((menu) => (
          <Job1 menu={menu} />
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
    };
  }
  
  export default connect(mapStateToProps)(Menu);


