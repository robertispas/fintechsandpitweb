import './App.css';
import { Component } from 'react';
import Particles from 'react-particles-js';
import GraphForm from './graphform/GraphForm';
import GraphImage from './graphimage/GraphImage';


const particlesOptions = {
  particles: {
      number: {
        value: 25,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  }

/*
  The core component, which takes all the components and adds them together
*/
class App extends Component {
  
  constructor(){
    super();
    this.state = {
      graphName: '',
      numbers: [],
      option: '',
      chart: false
    }
  }

  loadData = (graphDetails) =>{
    this.setState({
      graphName: graphDetails.graphName,
      numbers: graphDetails.numbers,
      option: graphDetails.option,
      chart: graphDetails.chart
    })
  }

  onSubmitChange = (isChart) => {
    this.setState({
      chart: isChart
    })
  } 

  render(){
    return (
      <div className='App'>
        <Particles className='particles'
                  params={particlesOptions} />
        {
          this.state.chart === false
          ?
            <GraphForm loadData={this.loadData} onSubmitChange={this.onSubmitChange}/>
          :
            <GraphImage name={this.state.graphName} num={this.state.numbers} option={this.state.option}  />
        }
        
      </div>
    );
  }
}

export default App;
