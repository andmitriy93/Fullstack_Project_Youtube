import React from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";

// export default ({ currentUser, logout }) => {
//   const display = currentUser ? (
//     <div>
//       <h3>Welcome {(currentUser.username)}</h3>
//       <button onClick={logout}>Log Out</button>
//     </div>
//   ) : (
//     <div className="navBar">
//       <Link to="/signup">Sign Up</Link>
//       <br/>
//       <Link to="/login">Log In</Link>
//     </div>
//   );

//   return <header className="nav-bar">{display}</header>;
// };

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
    this.Toggle = this.Toggle.bind(this);
  }
  Toggle() {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    return (
      <>
        <div className="navBar">
          <button onClick={this.Toggle}>
            <FaAlignRight />
          </button>
          <ul
            className={this.state.toggle ? "nav-links show-nav" : "nav-links"}
          >
            <li href="#">Home</li>
            <Link to="/signup">Sign Up</Link>
            <br/>
            <Link to="/login">Log In</Link>
          </ul>
        </div>
      </>
    );
  }
}
