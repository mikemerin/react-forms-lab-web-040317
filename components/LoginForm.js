import React from 'react';

export default class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmit = false
    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(field, event) {
    this.setState({
      [field]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const username = this.state.username
    const password = this.state.password
    if (!username || !password) { return }
    this.props.onSubmit( { username, password } )
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.handleChange.bind(this, 'username')}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handleChange.bind(this, 'password')}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
