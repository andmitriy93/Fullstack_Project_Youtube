import React from "react";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleDemo = this.handleDemo.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  // handleDemo() {
  //   this.props.createNewUser({
  //     username: 'Demo User',
  //     email: 'user_demo@gmail.com',
  //     password: '123456'
  //   }).then(() => this.props.history.push())
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state).then(this.props.history.push());
  }

  renderErrors() {
    return (
      <div>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="signup-form">
        <form>
          <h2>Sign Up</h2>
          <br />
          <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
            />
          </label>
          <br />
          <label>Email:
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
            />
          </label>
          <br />
          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
            />
          </label>
          <br />
          <button onClick={this.handleSubmit}>Sign Up</button>
          {/* <button className="demo" onClick={() => this.handleDemo()}>Demo Login</button> */}
          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default Signup;
