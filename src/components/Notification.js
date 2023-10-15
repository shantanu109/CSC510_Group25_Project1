import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchUsers } from '../actions/search';
import {editItem} from '../actions/auth';
import {clearsearchstate} from '../actions/search';

import 'react-datepicker/dist/react-datepicker.css';

import { fetchJobs } from '../actions/job';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    root: {
      maxWidth: 800,
      marginLeft: 20,
      marginTop: 50,
      justifyContent: 'center',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  


class Notification extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          itemnam:'',
          restid: '',
          itemname:'',
          quantity:'0',
          costperitem:'',
          datebought:'',
          dateexpired:'',
          editMode: false,
        };
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

    
  handleSave = () => {

    const {restname,restid,itemname,quantity,costperitem,datebought,dateexpired} = this.state;

    const {user} = this.props.auth;
    const {job} = this.props;
    console.log(itemname)

    
    this.props.dispatch(editItem(itemname,quantity))

    this.setState({
      itemname:''
    })

   
    
  }

  componentDidMount() {
    this.props.dispatch(fetchJobs());
  }


    
    
    render() {
       
      const {error} = this.props.auth;
      const {user} = this.props.auth;
      const {job} = this.props;
       
      
      let utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
      var parts = utc.split('/')
      let utc2 = new Date();
      
        return (
            <div>
                
             <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}>
    {
      (1>0) ?
        <Box flexDirection="row-reverse">
          {
            job.map(job => {
              
              // console.log(new Date(job.dateexpired))
              if (new Date(new Date(job.dateexpired).setDate(new Date(job.dateexpired).getDate()-2)).getTime() <= utc2.getTime()){

              return <Card  key={job._id} style={{margin:"20px 0px"}}>
                <CardContent >
                
                  <Typography color="secondary" gutterBottom>
                    {utc2.getTime() < new Date(job.dateexpired).getTime()?"Incoming ":""} Expiration Alert!
                  </Typography>
                  <Typography  color="textSecondary" gutterBottom>
                    {new Date(job.dateexpired).toDateString()}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {job.itemname} {utc2.getTime() >= new Date(job.dateexpired).getTime()?"has":"will"} expired on {new Date(job.dateexpired).toDateString()}
                  </Typography>
                  <Typography  color="textSecondary">
                    {job.quantity} unit{job.quantity > 1 ? "s have" : " has"} {utc2.getTime() >= new Date(job.dateexpired).getTime()?"has gone":"will go"}  bad. Please order more.
                  </Typography>
                </CardContent>
              </Card> }
            })
          }
          
          {
            
            job.map(job => {
            if (new Date(new Date(job.dateexpired).setDate(new Date(job.dateexpired).getDate()-2)).getTime() > utc2.getTime()){
                if (job.quantity<10){
              return <Card  key={job._id}>
                <CardContent>
                  <Typography  color="primary" gutterBottom>
                    Low Inventory Alert for {job.itemname} !
                  </Typography>
                  <Typography  color="textSecondary" gutterBottom>
                    Only {job.quantity} unit{job.quantity > 1 ? "s are" : " is"} left in stock.
                  </Typography>
                  <Typography variant="h5" component="h2">
                    It looks like some of your inventory is getting low
                  </Typography>
                  <Typography variant="h6" component="h2" color="textSecondary">
                    {job.itemname} quantity is low. Try checking quantity or restricting use.
                  </Typography>
                </CardContent>
              </Card>}}
            })
          }
        </Box> :
        <div style={{
          display: 'flex',
          width: '100vw',
          height: '90vh',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{ fontSize: "3rem" }}>
            All caught up!✔
          </div>
        </div>
    }

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
    };
  }
  
  export default connect(mapStateToProps)(Notification);