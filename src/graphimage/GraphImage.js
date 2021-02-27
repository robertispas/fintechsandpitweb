import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
import './GraphImage.css';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class GraphImage extends Component {
  
  constructor(props){
    super(props);
    this.state={
      name: this.props.name,
      num: this.props.num,
      option: this.props.option
    }
  }

  chartType = '';

  onBarChartChange = (event) => {
    this.setState({
      option: 'column'
    })
  }

  onLineChartChange = (event) => {
    this.setState({
      option: 'spline'
    })
  }

  render(){
      console.log()

      var dataPoints = [];
      for( var i = 0; i < this.state.num.length; i++ ) {
          dataPoints.push({ y : this.state.num[i]});
      }

      const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "dark1", //"light1", "dark1", "dark2"
        title:{
          text: this.state.name
        },
        axisY: {
          includeZero: true
        },
        data: [{
          type: this.state.option, //change type to bar, line, area, pie, etc
          indexLabel: "{y}", //Shows y value on all Data Points
          indexLabelFontColor: "#5A5757",
          indexLabelPlacement: "outside",
          dataPoints: dataPoints
        }]
      }
      
      return (
      <div className='dimensions center'>
        <CanvasJSChart options = {options} 
          /* onRef={ref => this.chart = ref} */
        />
        <div className="measure">
          <button className='w-39 grow f7 br-pill ph3 pv2 div white bg-transparent' type='button' onClick={this.onBarChartChange}>BARCHART</button>
        </div>
        <div className="measure">
          <button className='w-39 grow f7 br-pill ph3 pv2 div white bg-transparent' type='button' onClick={this.onLineChartChange}>LINECHART</button>
        </div>
      </div>
      );
  }
}

export default GraphImage;