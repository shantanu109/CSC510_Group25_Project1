
import { toast } from 'react-toastify';
import { APIURLS } from '../helpers/urls';
import { getFormBody } from '../helpers/utils';
import {
    ADD_JOB,
    UPDATE_JOB,
    
    ADD_MENU,
    UPDATE_MENU,
    JOB_FAILED
  } from './actionTypes';



export function createJob(
    restname,restid,itemname,quantity,costperitem,datebought,dateexpired
  ) {
    return (dispatch) => {
      const url = APIURLS.createJob();

      const token = localStorage.getItem('token');

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          'Authorization': `Bearer ${token}`
        },
        body: getFormBody({
          restname,
          id: restid,
          itemname,
          quantity,
          costperitem,
          datebought,
          dateexpired
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log('data', data);
          if (data.success) {
            // do something
            // localStorage.setItem("token", data.data.token);
            toast.success("Succesfully Added Inventory Item")
            dispatch(jobSuccess(data.data.job));
            return;
          }
          toast.error(data.message)
        })
    };
  }

  

  export function createMenu(
    menuname,ingredients,costmenu
  ) {
    return (dispatch) => {
      
      const url = APIURLS.createMenu();

      const token = localStorage.getItem('token');
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          menuname,
          ingredients,
          costmenu
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log('data', data);
          if (data.success) {
            // do something
            // localStorage.setItem("token", data.data.token);
            toast.success('New Menu Item Created')
            dispatch(menuSuccess(data.data.menu));
            return;
          }
          toast.error(data.message)
          // dispatch(signupFailed(data.message));
        });
    };
  }
  



  export function jobSuccess(job) {
    return {
      type: ADD_JOB,
      job,
    };
  }

  export function menuSuccess(menu) {
    return {
      type: ADD_MENU,
      menu,
    };
  }

  export function fetchJobs() {
    return (dispatch) => {
      
      const url = APIURLS.fetchJobs();

      const token = localStorage.getItem('token');
      let auth = {}
      if(token){
        auth= { headers: { 'Authorization': `Bearer ${token}` }}
      }

      fetch(url,{...auth})
        .then((response) => {
          console.log('Response', response);
          return response.json();
        })
        .then((data) => {
          console.log('dsssdsds',data);
          if(!data.jobs){
            data.jobs = []
          }
          dispatch(updateJobs(data.jobs));
        }).catch((e)=>{
          console.log(e)
        });
    };
  }
  export function fetchMenus() {
    return (dispatch) => {
      
      const url = APIURLS.fetchMenus();

      const token = localStorage.getItem('token');
      let auth = {}
      if(token){
        auth= { headers: { 'Authorization': `Bearer ${token}` }}
      }
  
      fetch(url,{...auth})
        .then((response) => {
          console.log('Response', response);
          return response.json();
        })
        .then((data) => {
          console.log('menusssssss',data);
          if(!data.menu) data.menu = [] 
          dispatch(updateMenu(data.menu));
        }).catch((e)=>{
          console.log(e)
        });
    };
  }
  


export function updateJobs(jobs) {
    return {
      type: UPDATE_JOB,
      jobs,
    };
  }

  export function updateMenu(menu) {
    return {
      type: UPDATE_MENU,
      menu,
    };
  }




