import React from 'react';

export default class PoemWriter extends React.Component {

  constructor() {
    super();

    this.state = {
      value: '',
      valid: false
    };
    this.handleChange = this.handleChange.bind(this)
  }

  validatePoem(poem) {
    const lines = poem.split('\n')

    if (lines.length !== 3) { return false }

    const line1 = lines[0].split(" ").filter(word => word)
    const line2 = lines[1].split(" ").filter(word => word)
    const line3 = lines[2].split(" ").filter(word => word)
    return line1.length === 5 && line2.length === 3 && line3.length === 5

  }

  handleChange(event) {
    const poem = event.target.value
      { this.setState({
        value: poem,
        valid: this.validatePoem(poem) })
      }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" id="poem" value={this.state.value} onChange={this.handleChange}/>
        { this.state.valid === false ? <div id="poem-validation-error" style={{color: 'red'}}>
            This poem is not written in the right structure!</div> : null }
      </div>
    );
  }

}
