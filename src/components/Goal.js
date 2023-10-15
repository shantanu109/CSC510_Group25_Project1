import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchUsers } from '../actions/search';
import {editItem} from '../actions/auth';
import {clearsearchstate} from '../actions/search';

import 'react-datepicker/dist/react-datepicker.css';

import {createJob} from '../actions/job';
import { fetchJobs } from '../actions/job';
import { toast } from 'react-toastify';



class Goal extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          restname:'',
          restid: '',
          itemname:'',
          quantity:'0',
          costperitem:'',
          datebought:'',
          dateexpired:'',
          editMode: false,
          itemname_id:'',
        };


        this.createForm = React.createRef(null);
        this.updateForm = React.createRef(null);
      }
    

      handleSave1 = (e) => {
        e.preventDefault()

        const {itemname,quantity,itemname_id,datebought,dateexpired,costperitem} = this.state;
    
        console.log(itemname)

        let bought = new Date(datebought).getTime()
        let expired = new Date(dateexpired).getTime()
        let today = new Date(new Date().toLocaleDateString()).getTime()

        if(today < bought || today > expired){
          toast.error("Invalid Bought or Expiration Date")
          return;
        }

        if(bought >= expired){
          toast.error("Expiration Date should be greater than Bought Date")
          return;
        }
    
    
        this.props.dispatch(editItem(itemname,quantity,itemname_id,datebought,dateexpired,costperitem))
    
        this.setState({
          itemname: '',     // Reset itemname to an empty string
        })
        this.updateForm.current.reset()
       
        
      }
    
   

    clearSearch = () => {
        this.props.dispatch(clearsearchstate([]))
        console.log("UNMOUNT")

    }

    handleInputChange = (fieldName,val) => {

        this.setState({
            [fieldName]: val
        })

        
    
      }

    
  handleSave = (e) => {
    e.preventDefault()

    const {restname,restid,itemname,quantity,costperitem,datebought,dateexpired} = this.state;

    const {user} = this.props.auth;

    let bought = new Date(datebought).getTime()
    let expired = new Date(dateexpired).getTime()
    let today = new Date(new Date().toLocaleDateString()).getTime()

    if(today < bought || today > expired){
      toast.error("Invalid Bought or Expiration Date")
      return;
    }

    if(bought >= expired){
      toast.error("Expiration Date should be greater than Bought Date")
      return;
    }

    this.setState({
      restname: user.restname,
      restid:user._id
    })

    this.props.dispatch(createJob(user.restname,user._id,itemname,quantity,costperitem,datebought,dateexpired))

    this.setState({
      itemname: '',     // Reset itemname to an empty string
    })
    console.log(this.createForm.current.reset())
    
  }

  componentDidMount() {
    this.props.dispatch(fetchJobs());
  }


    
    
    render() {
       
      const {error} = this.props.auth;
      const {user} = this.props.auth;
      const {job} = this.props;
        
        return (
            <div>
              
           <form className="goal-form" style={{width:'600px',height:'600px',marginLeft:'100px'}} onSubmit={this.handleSave}  ref={this.createForm}>
           <span className="login-signup-header" style={{margin:"20px 0px"}}>Add Inventory</span>
            {error && <div className="alert error-dailog">{error}</div>}
            

            <div className="field">
              <label>Item Name</label>
              <input
                placeholder="Item Name"
                type="text"
                required
                onChange={(e) => this.handleInputChange('itemname', e.target.value)}
              />
            </div>

        <div className="field">
          <label>Item Quantity</label>
          <input
            placeholder="Quantity"
            type="number"
            required
            min="1"
            onChange={(e) => this.handleInputChange('quantity', e.target.value)}
          />
        </div>

        <div className="field">
          <label>Item Cost</label>
          <input
            placeholder="Cost per item"
            type="number"
            required
            min="1"
            onChange={(e) => this.handleInputChange('costperitem', e.target.value)}
          />
        </div>
        <div className="field">
          <label>Item Bought</label>
          <input
            placeholder="Date Bought"
            type="date"
            required
            onChange={(e) => this.handleInputChange('datebought', e.target.value)}
          />
        </div>

        <div className="field">
          <label>Item Expiration</label>
          <input
            placeholder="Expiration Date"
            type="date"
            required
            onChange={(e) => this.handleInputChange('dateexpired', e.target.value)}
          />
        </div>

        
        
        <div className="field">
          <button className="button save-btn" type="submit">Add Item</button>
        </div>
        
        

        </form>

         
        <form className="goal-form" style={{width:'600px',height:'fit-content',marginLeft:'100px'}} onSubmit={this.handleSave1} ref={this.updateForm}>
           <span className="login-signup-header" style={{margin:"20px 0px"}}>Update Item</span>
            {error && <div className="alert error-dailog">{error}</div>}
            
            

            <div className="field">
              <label>Select Inventory Item</label>
              <select onChange={(e) => {
                this.handleInputChange('itemname_id', e.target.value)}
              }>
                <option value="">Select Item</option>
                {job.length>0 && job.map((jb) => (
                  <option value={jb._id}>{jb.itemname}</option>
                ))}
              </select>
              {/* <input
                placeholder="Item Name"
                type="text"
                required
                onChange={(e) => this.handleInputChange('itemname', e.target.value)}
              /> */}
            </div>

            {
              this.state.itemname_id && (
                <div className="field">
                  <label>Current Quantity</label>
                  <input
                    placeholder="Quantity"
                    type="number"
                    min="1"
                    value={job.find((jb)=> jb._id === this.state.itemname_id).quantity}
                    required
                    disabled
                    // onChange={(e) => this.handleInputChange('quantity', e.target.value)}
                  />
                </div>
              )
            }

        <div className="field">
          <label>Added Quantity</label>
          <input
            placeholder="Quantity"
            type="number"
            required
            onChange={(e) => this.handleInputChange('quantity', e.target.value)}
            style={{marginBottom:"0px"}}
          />
          <div style={{color:"#a1a197",fontSize:"14px",marginBottom:"20px"}}>If you want to Decrement Quantity add it with '-'. for eg:-2</div>
        </div>

        <div className="field">
          <label>Item Cost</label>
          <input
            placeholder="Cost per item"
            type="number"
            required
            min = "1"
            onChange={(e) => this.handleInputChange('costperitem', e.target.value)}
          />
        </div>

        <div className="field">
          <label>Item Bought</label>
          <input
            placeholder="Date Bought"
            type="date"
            required
            onChange={(e) => this.handleInputChange('datebought', e.target.value)}
          />
        </div>

        <div className="field">
          <label>Item Expiration</label>
          <input
            placeholder="Expiration Date"
            type="date"
            required
            onChange={(e) => this.handleInputChange('dateexpired', e.target.value)}
          />
        </div>
   
        
        <div className="field">
        <button className="button save-btn" type="submit">Save</button>
        </div>
        
        

        </form>
        
        
        
               
        
        </div>
        
           
        );
    }
}



function mapStateToProps(state) {
    return {
      auth: state.auth,
      results: state.search.results,
      job:state.job,
    };
  }
  
  export default connect(mapStateToProps)(Goal);