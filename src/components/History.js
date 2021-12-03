import React, { Component } from 'react';

import Application from './Application';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions/job';
import { Pie, Line, defaults } from 'react-chartjs-2';


class History extends Component {
    
    render() {
        
        return (
            <div>
        
        {/* <Widgets style={{marginTop:'1000px'}}/> */}
        <Line
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
            {
              label: 'Number of orders per month',
              data: [68, 94, 80, 97, 137, 65, 101, 66, 122, 137, 85, 127],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)'
              ],
              borderWidth: 1,
            },
          ],
        }}
        height = {10}
        width = {50}
      />
          
      </div>
            
        );
        
    }
}

function mapStateToProps({auth,job,application}) {
    return {
      auth,
      job,
      application

      
    };
  }
  
export default connect(mapStateToProps)(History);
