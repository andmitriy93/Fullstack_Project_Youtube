import React from "react";
import { Link } from "react-router-dom";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar">
        <ul className="sideNav">
          <li className="home-link">
            <p>
              <Link to="/">Home</Link>
            </p>
          </li>
          <li>
            <p>Trending</p>
          </li>
          <li>
            <p>Subscriptions</p>
          </li>
          <li>
            <p>
              Log in to like videos, <br /> and comment, and subscribe
            </p>
            <button className="btn-login">
                <Link to="/login">Login</Link>
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideBar;
