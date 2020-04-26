import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { signupAuth } from "../../redux/authAction";
import { toast } from "react-toastify";

class Singup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      role: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { signupAuth } = this.props;
    console.log(this.state);
    e.preventDefault();
    if (
      this.state.name !== "" &&
      this.state.email !== "" &&
      this.state.password !== "" &&
      this.state.role !== ""
    ) {
      signupAuth(this.state);
      this.setState({
        name: "",
        email: "",
        password: "",
        role: "",
      });
    } else {
      toast.error("All Fields Required!!! :(");
    }
  };

  render() {
    // console.log(this.props, "<=====");
    const { isAuth } = this.props;
    return (
      <>
        <div className="container mt-5">
          {isAuth ? (
            <Redirect to="/" />
          ) : (
            <form
              onSubmit={this.handleSubmit}
              className="col-md-5 mx-auto py-5 px-4 shadow border border-rounded"
            >
              <h3 className="text-center pt-0 mt-0 text-primary">
                <i className="fas fa-user-lock text-info"></i> Sign Up
              </h3>
              <div className="form-group">
                <label>Name</label>
                <input
                  value={this.state.name}
                  name="name"
                  onChange={this.handleChange}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Email address</label>
                <input
                  value={this.state.email}
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
                  value={this.state.password}
                  name="password"
                  onChange={this.handleChange}
                  type="password"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Select Role</label>
                <select
                  value={this.state.role}
                  name="role"
                  onChange={this.handleChange}
                  className="form-control"
                >
                  <option selected value="">
                    Your Role
                  </option>
                  <option value="needy">Needy</option>
                  <option value="feeder">Feeder</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Sign Up
              </button>
              <div>
                <Link to="/login">
                  <small>Already have an account? Sign in</small>
                </Link>
              </div>
            </form>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
});

const mapDispatchToProps = {
  signupAuth: signupAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(Singup);
