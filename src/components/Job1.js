

import React, { Component } from 'react';
import { connect } from 'react-redux';



class Job1 extends Component {
    
    

      
    
    render() {
        const { job } = this.props;
        const {menu } = this.props;
        const {user} = this.props.auth;

        const { isLoggedIn } = this.props.auth;
        return (
          
            <div className="post" key={menu.restname} style={{width:'50vw',marginLeft:'50px'}}>
              {1>0? 
            <div className="post-header">
              


                  <div >
                <h4 style={{display:'inline-block',marginTop:'-12px'}}>Dish : </h4> 
                <span style={{marginLeft:'10px'}}>{menu.menuname}</span>
                  </div>

                  <div >
                    
                <h4 style={{display:'inline-block',marginTop:'-12px'}}>Price : </h4> 
                <span style={{marginLeft:'10px'}}>{menu.costmenu}</span>
                  </div>

                  
                  
                  <div >
                    <h4 style={{display:'inline-block',marginTop:'-12px'}}>Ingredients</h4> 
                  <div className='ingredient_container'>
                  <div className='ingredient_tab'>
                  <div className='field'>
                            <span style={{marginLeft:'10px',fontWeight:"bold"}}>No</span>
                          </div>
                          <div className='field'>
                            <span style={{marginLeft:'10px',fontWeight:"bold"}}>Name</span>
                          </div>
                          <div className='field'>
                            <span style={{marginLeft:'10px',fontWeight:"bold"}}>Quantity</span>
                          </div>
                        </div>
                  {
                    menu && menu.ingredients.map((ingredient,index)=>{
                      return(
                        <div className='ingredient_tab'>
                          <div key={index} className='field'>
                            <span style={{marginLeft:'10px'}}>{index+1}</span>
                          </div>
                          <div key={index} className='field'>
                            <span style={{marginLeft:'10px'}}>{ingredient.inventory_id.itemname}</span>
                          </div>
                          <div key={index} className='field'>
                            <span style={{marginLeft:'10px'}}>{ingredient.quantity}</span>
                          </div>
                        </div>
                      )
                    })
                  }
                  </div>
                  </div> 
                
                
              
            
            </div> : []}
          </div>
        );
    }
}

function mapStateToProps({ auth, job,application }) {
    return {
      auth,
      application,
    
      
    };
  }
  
  export default connect(mapStateToProps)(Job1);


