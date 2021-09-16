
import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';


const  BarChartComponent = (props) => {
    console.log('chart props:', props)
    return (
      <Paper>
        <Chart
          data={props.chartData}
        >
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries
            valueField="posts"
            argumentField="month"
          />
          <Title text="Posts per month" />
          <Animation />
        </Chart>
      </Paper>
    );
  }

export default BarChartComponent;