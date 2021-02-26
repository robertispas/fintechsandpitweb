import React from 'react';
import CanvasJSReact from './canvasjs.react';
import './GraphImage.css';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const GraphImage = ({name, num, option}) => {
    console.log(name, num, option);
    var dataPoints = [];
    var y = 0;
    for( var i = 0; i < num.length; i++ ) {
        dataPoints.push({ y : num[i]});
    }
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", //"light1", "dark1", "dark2"
			title:{
				text: name
			},
			axisY: {
				includeZero: true
			},
			data: [{
				type: "column", //change type to bar, line, area, pie, etc
				//indexLabel: "{y}", //Shows y value on all Data Points
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
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
}

export default GraphImage;