import React from 'react';

export default class PoemWriter extends React.Component {

  constructor() {
    super();

    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const poem = event.target.value
    const lines = poem.split('\n')
    const line1 = lines[0].split(" ")
    const line2 = lines[1].split(" ")
    const line3 = lines[2].split(" ")
    debugger
    if (lines.length === 3 && line1.length === 5 && line2.length === 3 && line3.length === 5 ){
      this.setState({
        value: poem
      })
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" id="poem" value={this.state.value} onChange={this.handleChange}/>
        <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>
      </div>
    );
  }
}
