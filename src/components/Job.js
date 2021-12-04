import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createApplication , closeJob} from '../actions/job';

class Job extends Component {
    
    

      
    
    render() {
        const { job } = this.props;
        const {user} = this.props.auth;
        console.log('lalallaalaxxxx')
        
        return (
          
            <div className="post" key={job._id} style={{width:'50vw',marginLeft:'50px'}}>
              {user.restname == job.restname? 
            <div className="post-header">
              
              <div >
                <h4 style={{display:'inline-block'}}>Restaurant Name : </h4> 
                <span style={{marginLeft:'10px'}}>{job.restname}</span>
                  </div>


                  <div >
                <h4 style={{display:'inline-block',marginTop:'-12px'}}>Item : </h4> 
                <span style={{marginLeft:'10px'}}>{job.itemname}</span>
                  </div>

                  <div >
                    
                <h4 style={{display:'inline-block',marginTop:'-12px'}}>Cost Per Item : </h4> 
                <span style={{marginLeft:'10px'}}>{job.costperitem}</span>
                  </div>

                  <div >
                <h4 style={{display:'inline-block',marginTop:'-12px'}}>Expiration Date : </h4> 
                <span style={{marginLeft:'10px'}}>{job.dateexpired}</span>
                  </div>

                  <div >
                <h4 style={{display:'inline-block',marginTop:'-12px'}}>Date Bought : </h4> 
                <span style={{marginLeft:'10px'}}>{job.datebought}</span>
                  </div>
                  <div >
                <h4 style={{display:'inline-block',marginTop:'-12px'}}>Quantity : </h4> 
                <span style={{marginLeft:'10px'}}>{job.quantity}</span>
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
  
  export default connect(mapStateToProps)(Job);