import React from 'react';
import { Component } from 'react';

/*
  This components creates a form in which the user can input all the data necessary
  to create a graph. If you forget to input something, you'll get a heads up!
*/
class GraphForm extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      graphName: '',
      numbers: [],
      option: 'spline',
      chart: false
    }
  }

  onGraphNameChange = (event) => {
    this.setState({
      graphName: event.target.value
    })
  }

  onNumbersChange = (event) => {
    let numbersTemp = [];
    var splitT = event.target.value.split(',');
    var i;
    for (i = 0; i < splitT.length; i++){
      if (splitT[i] !== isNaN) 
        numbersTemp.push(parseInt(splitT[i], 10));
    }
    this.setState({
      numbers: numbersTemp
    })
  }

  onOptionChange = (event) => {
    this.setState({
      option: event.target.value
    })
  }

  /*
    A simple submit function, that also does some input validation.
  */
  onSubmitButton = (event) => {
    let user = this.state;
    if (user.graphName === '' || user.numbers.length <= 1){
      alert('Check the form, some details are missing! Also, make sure there is more than 1 number entered!')
    }
    else {
      this.props.loadData(user);
      this.props.onSubmitChange(true);
    }
  }

  render() {
    return (
      <div className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center'>
        <form className="pa4 black-80">
          <div className="measure">
            <label for="name" className="f6 b db mb2 white">Graph Name</label>
            <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100 bg-transparent" type="text"
                    onChange={this.onGraphNameChange}/>
          </div>
          <div className="measure">
            <label for="name" className="f6 b db mb2 white">Numbers in graph</label>
            <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100 bg-transparent" type="text"
                    onChange={this.onNumbersChange}/>
          </div>
          <div className="measure">
            <input className="mr2 bg-transparent" type="radio" id="barchart" value="column" checked={this.state.option === "column"}
                    onChange={this.onOptionChange}/>
            <label for="barchart" className="lh-copy b white f6">Bar Chart</label>
          </div>
          <div className="measure">
            <input className="mr2 bg-transparent" type="radio" id="linechart" value="spline" checked={this.state.option === "spline"}
                    onChange={this.onOptionChange}/>
            <label for="linechart" className="lh-copy b white f6">Line Chart</label>
          </div>
          <div className="measure">
            <button className='w-39 grow f4 br-pill ph3 pv2 div white bg-transparent' type='button' onClick={this.onSubmitButton}>Show me the Graph</button>
          </div>
        </form>
      </div>
    );
  }
}

export default GraphForm;