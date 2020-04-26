import React, { Component } from "react";
import { loginAuth } from "../../redux/authAction";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import Loder from "./extra/Loder";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { loginAuth } = this.props;
    e.preventDefault();
    if (this.state.email !== "" && this.state.password !== "") {
      loginAuth(this.state);
      this.setState({
        email: "",
        password: "",
      });
    } else {
      toast.error("All Field Required!!! :(");
    }
  };

  render() {
    const { isAuth } = this.props;
    return (
      <div>
        <Loder />
        <div className="container mt-5">
          {isAuth ? (
            <Redirect to="/" />
          ) : (
            <form
              onSubmit={this.handleSubmit}
              className="col-md-4 mx-auto py-5 px-4 mx-2 shadow border border-rounded"
            >
              <h3 className="text-center pt-0 mt-0 text-primary">
                <i className="fas fa-sign-in-alt text-info"></i> Sign In
              </h3>
              <div className="form-group">
                <label>Email address</label>
                <input
                  name="email"
                  onChange={this.handleChange}
                  type="email"
                  className="form-control"
                />
                <small className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  name="password"
                  onChange={this.handleChange}
                  type="password"
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Sign In
              </button>
              <div>
                <Link to="/signup">
                  <small>Don't have an account? Sign Up</small>
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
});

const mapDispatchToProps = {
  loginAuth: loginAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
