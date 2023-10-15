import React, { Component } from 'react';


import { connect } from 'react-redux';

import { Pie, Line, defaults, Bar } from 'react-chartjs-2';

import Chart, {
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

Chart.pluginService.register(
  Title,
)

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   title: {
//     display: true,
//     text: 'Total Sale', // Customize the title text
//     positionY: -20, // Adjust the vertical position of the title
//     color: 'black', // Color of the title
//     font: '16px Arial', // Font styling for the title
//   },
// };

class History extends Component {

  constructor(props) {
    super(props);

    this.state = {
      labels:[],
      datasets:[],
      menuName:"",
      itemName:""
    };
  }

  componentDidMount() {

    const {job} = this.props;
    const {labels,datasets} = this.state
    


    
  }

    
    render() {
      const {job} = this.props;
      const {user} = this.props.auth;
      console.log('JOVVVVVV',job)

      let finalData = [
        {
          menuName: "Tomato Sev",
          data:[8,6,4,3,2,6,7]
        },
        {
          menuName: "Tomato Bajiya",
          data:[3,0,9,1,2,4,8]
        },
        {
          menuName: "Bread Pakoda",
          data:[2,1,5,8,10,12,5]
        }
      ]

      let finalData2 = [
        {
          itemName: "Tomato",
          data:[8,6,4,3,2,6,7]
        },
        {
          itemName: "Potato",
          data:[3,0,9,1,2,4,8]
        },
      ]

      const labels = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
      const data = ['',]
      const datacost = ['',]

      const options = {
        title: {
          display: true,
          text: `Total Sale ${this.state.menuName}: ${this.state.menuName?finalData.find((dt)=>dt.menuName === this.state.menuName).data.reduce((acc, value) => acc + value, 0):0}`, // Customize the title text
          positionY: -20, // Adjust the vertical position of the title
          color: 'black', // Color of the title
          font: '16px Arial', // Font styling for the title
        },
      };

      const options2 = {
        title: {
          display: true,
          text: `Total Usage ${this.state.itemName}: ${this.state.itemName?finalData2.find((dt)=>dt.itemName === this.state.itemName).data.reduce((acc, value) => acc + value, 0):0}`, // Customize the title text
          positionY: -20, // Adjust the vertical position of the title
          color: 'black', // Color of the title
          font: '16px Arial', // Font styling for the title
        },
      };
      
       

        return (
            <div style={{width:"90%",margin:"auto"}}>
                  <div className="login-signup-header" style={{margin:"20px 0px", textAlign:"center"}}>Restaurant Analytics </div>
                  <div>
                  <div className="login-signup-header" style={{margin:"20px 0px", textAlign:"center",fontSize:"26px"}}>Menu Sell (Last 7 Days)</div>
                    <div  className='field'>
                        <label>Menu Name</label>
                        <select onChange={(e) => {
                          this.setState({menuName:e.target.value})
                        }
                        }>
                          <option value="">Select Menu Item to view it's Analysis</option>
                          {finalData.length>0 && finalData.map((jb) => {
                            return (
                              <option value={jb.menuName} >{jb.menuName}</option>
                            )
                          })}
                        </select>
                        </div>
                        </div>
        
        <div style={{marginTop:'40px'}}>
          {
            this.state.menuName!=="" && (
              <Bar
                options={options}
                data={{
                  labels: labels,
                  datasets: [
                    {
                      label: this.state.menuName,
                      data: finalData.find((dt)=>dt.menuName === this.state.menuName).data,
                      backgroundColor: 'rgba(255, 99, 132, 0.5)',
                      // backgroundColor: [
                      //   'rgba(255, 99, 132, 0.2)'
                      // ],
                      // borderColor: [
                      //   'rgba(255, 99, 132, 1)'
                      // ],
                    },
                  ],
                }}
                height = {10}
                width = {50}
                
              />
            )
          }
        
      </div>
          <hr />
      <div style={{marginTop:"10px"}}>
      <div className="login-signup-header" style={{margin:"20px 0px", textAlign:"center",fontSize:"26px"}}>Inventory Usage  (Last 7 Days)</div>
                    <div  className='field'>
                        <label>Inventory Item Name</label>
                        <select onChange={(e) => {
                          this.setState({itemName:e.target.value})
                        }
                        }>
                          <option value="">Select Inventory Item to view it's Analysis</option>
                          {finalData2.length>0 && finalData2.map((jb) => {
                            return (
                              <option value={jb.itemName} >{jb.itemName}</option>
                            )
                          })}
                        </select>
                        </div>
                        </div>
        
        <div style={{marginTop:'40px'}}>
          {
            this.state.itemName!=="" && (
              <Bar
                options={options2}
                data={{
                  labels: labels,
                  datasets: [
                    {
                      label: this.state.itemName,
                      data: finalData2.find((dt)=>dt.itemName === this.state.itemName).data,
                      backgroundColor: 'rgba(53, 162, 235, 0.5)',
                      // backgroundColor: [
                      //   'rgba(255, 99, 132, 0.2)'
                      // ],
                      // borderColor: [
                      //   'rgba(255, 99, 132, 1)'
                      // ],
                    },
                  ],
                }}
                height = {10}
                width = {50}
              />
            )
          }
        
      </div>
      
      
      {/* <div style={{marginTop:'60px'}}>
      <Bar
        data={{
          labels: labels,
          datasets: [
            {
              label: '',
              data: datacost,
              backgroundColor: [
                'rgba(34,139,34, 0.2)'
              ],
              borderColor: [
                'rgba(34,139,34, 1)'
              ],
              borderWidth: 1,
            },
          ],
        }}
        height = {10}
        width = {50}
      />
      </div> */}
      
      </div>
            
        );
        
    }
}

function mapStateToProps(state) {
    return {
      auth: state.auth,
      job:state.job,
      

      
    };
  }
  
export default connect(mapStateToProps)(History);
