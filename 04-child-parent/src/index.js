import React, { Component } from 'react';
import { render } from 'react-dom';
import Parent from './parent';
import Child from './child';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      parentTextBoxValue: ''
    };
  }
  handleParentData = (e) => {
this.setState({parentTextBoxValue: e})
  }

  render() {
    return (
      <div>
        <Parent handleData={this.handleParentData} />
        <Child parentTextBoxValue={this.state.parentTextBoxValue}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
