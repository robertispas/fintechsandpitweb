import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
import './GraphImage.css';

//var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

/*
  This component is mainly responsible to draw the graph that we want from the
  specified parameters from the previous component, and also allows to change
  from a bar chart to a line chart seamlessly.
*/
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
      /*
        Puts all the numbers from our Array into the dataPoints 2D Array
      */
      var dataPoints = [];
      for( var i = 0; i < this.state.num.length; i++ ) {
          dataPoints.push({ y : this.state.num[i]});
      }

      const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "dark1",
        title:{
          text: this.state.name
        },
        axisY: {
          includeZero: true
        },
        data: [{
          type: this.state.option, //change type to bar or line chart
          indexLabel: "{y}", 
          indexLabelFontColor: "#5A5757",
          indexLabelPlacement: "outside",
          dataPoints: dataPoints
        }]
      }
      
      return (
      <div className='dimensions center db'>
        <br />
        <br />
        <CanvasJSChart options = {options} />
        <br></br>
        <div className="measure dib mr5">
          <button className='w-39 grow f7 br-pill ph3 pv2 div white bg-transparent b' type='button' onClick={this.onBarChartChange}>BARCHART</button>
        </div>
                    
        <div className="measure dib">
          <button className='w-39 grow f7 br-pill ph3 pv2 div white bg-transparent b' type='button' onClick={this.onLineChartChange}>LINECHART</button>
        </div>
      </div>
      );
  }
}

export default GraphImage;