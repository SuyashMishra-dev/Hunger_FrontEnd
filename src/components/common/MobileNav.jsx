import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MobileNav.css";
import { connect } from "react-redux";

class MobileNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flag: false,
    };
  }

  clickMe = () => {
    this.setState((previousState) => {
      return {
        flag: !previousState.flag,
      };
    });
  };

  render() {
    return (
      <>
        <div className="menu-wrap">
          <input
            type="checkbox"
            name=""
            className="toggler"
            onClick={this.clickMe}
            checked={this.state.flag}
            id=""
          />
          <div className="hamburger" style={{ background: "#fff" }}>
            <div className=""></div>
          </div>
          <div className="menu">
            <div className="">
              <div className="">
                <ul>
                  <li>
                    <Link onClick={this.clickMe} to="/">
                      Landing Page
                    </Link>
                  </li>
                  {this.props.isAuth ? (
                    <>
                      {this.props.isAdmin ? (
                        <li>
                          <Link onClick={this.clickMe} to="/addItem">
                            Add Item
                          </Link>
                        </li>
                      ) : (
                        <li>
                          <Link onClick={this.clickMe} to="/home">
                            Search Food
                          </Link>
                        </li>
                      )}
                      <li>
                        <Link onClick={this.clickMe} to="/about">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.clickMe} to="/contact">
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.clickMe} to="/your-orders">
                          Your Orders
                        </Link>
                      </li>
                    </>
                  ) : null}
                </ul>
                <div className="p-2 d-inline-block">
                  {this.props.isAuth ? (
                    <Link
                      onClick={this.clickMe}
                      style={{ textDecoration: "none" }}
                      to="/user"
                    >
                      <i className="fas fa-sign-in-alt mx-2"></i>
                      Profile
                    </Link>
                  ) : (
                    <Link
                      onClick={this.clickMe}
                      style={{ textDecoration: "none" }}
                      to="/login"
                    >
                      <i className="fas fa-user mx-2"></i>
                      Log In
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  isAdmin: state.authReducer.isAdmin,
  isAuth: state.authReducer.isAuth,
});

export default connect(mapStateToProps, null)(MobileNav);
