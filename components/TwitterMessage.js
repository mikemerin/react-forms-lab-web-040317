import React from 'react';

export default class TwitterMessage extends React.Component {

  constructor(props) {
    super(props);
    this.maxChars = 10
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this)
    this.characterCounter = this.characterCounter.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  characterCounter() {
    return this.maxChars - this.state.value.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <p>{this.characterCounter()}</p>
      </div>
    );
  }
}
