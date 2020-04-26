import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound404";
import About from "../components/common/About";
import BookingPage from "../components/common/BookingPage";
import Contact from "../components/common/Contact";
import Login from "../components/common/Login";
import Singup from "../components/common/Singup";
import Orders from "../components/common/Orders";
import Home from "../components/common/Home";
import LandingPage from "../components/common/LandingPage";
import ProtectedRouter from "./ProtectedRoute";
import MobileNav from "../components/common/MobileNav.jsx";
import AddItem from "../components/common/AddItem";
import { checkAuth } from "../redux/authAction";
import UserProfile from "../components/common/UserProfile";
import Upload from "../components/common/Upload";

class Routes extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = () => {
    const { checkAuth } = this.props;
    let user = localStorage.getItem("user");
    checkAuth(JSON.parse(user));
  };
  render() {
    const { isAuth } = this.props;
    return (
      <div>
        <div className="d-sm-block d-md-none pb-5">
          <MobileNav />
        </div>
        <div
          className="container-fluid d-none d-md-block shadow-sm sticky-top"
          style={{ zIndex: "3", background: "#fff" }}
        >
          <div className="row">
            <div className="col-md-3 pt-md-3 pb-md-2">
              <ul
                className="d-sm-block d-md-flex "
                style={{ listStyle: "none" }}
              >
                <li>
                  <Link
                    className="d-sm-block d-md-inline-block text-dark font-weigth-normal "
                    to="/"
                  >
                    <img src="logo.png" alt="" height="25px" /> Hunger
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-5 pt-3 pb-2  text-center">
              {this.props.isAuth ? (
                <>
                  <ul
                    className="d-sm-block d-md-flex justify-content-between text-center"
                    style={{ listStyle: "none" }}
                  >
                    <li>
                      <Link
                        className="d-sm-block d-md-inline-block text-dark font-weigth-normal px-2 "
                        to="/home"
                      >
                        Search Food
                      </Link>
                    </li>
                    {this.props.isAdmin ? (
                      <li>
                        <Link
                          className="d-sm-block d-md-inline-block text-dark font-weigth-normal px-2 "
                          to="/addItem"
                        >
                          Add Item
                        </Link>
                      </li>
                    ) : null}

                    <li>
                      <Link
                        className="d-sm-block d-md-inline-block text-dark font-weigth-normal px-2"
                        to="/about"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="d-sm-block d-md-inline-block text-dark font-weigth-normal px-2"
                        to="/contact"
                      >
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="d-sm-block d-md-inline-block text-dark font-weigth-normal px-2"
                        to="/orders"
                      >
                        Your Orders
                      </Link>
                    </li>
                  </ul>
                </>
              ) : null}
            </div>
            <div className="col-md-2 offset-md-2 pt-3 pb-2">
              <ul
                className="d-sm-block d-md-flex text-right"
                style={{ listStyle: "none" }}
              >
                {this.props.isAuth ? (
                  <li className="text-right">
                    <Link
                      className=" d-md-inline-block text-dark font-weigth-normal pl-2 text-right"
                      to="/user"
                    >
                      Profile
                    </Link>
                  </li>
                ) : (
                  <li className="text-right">
                    <Link
                      className=" d-md-inline-block text-dark font-weigth-normal pl-2 text-right"
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <Switch>
          <Route path="/signup" component={Singup} />
          <Route path="/login" component={Login} />
          <Route path="/upload" component={Upload}></Route>
          <Route exact path="/" component={LandingPage} />
          <ProtectedRouter
            exact
            path="/home"
            component={Home}
            isAuth={isAuth}
          />
          <ProtectedRouter
            exact
            path="/user"
            component={UserProfile}
            isAuth={isAuth}
          />
          <ProtectedRouter
            exact
            path="/addItem"
            component={AddItem}
            isAuth={isAuth}
          />
          <ProtectedRouter
            exact
            path="/about"
            component={About}
            isAuth={isAuth}
          />
          <ProtectedRouter
            exact
            path="/contact"
            component={Contact}
            isAuth={isAuth}
          />
          <ProtectedRouter
            path="/orders/:id"
            component={Orders}
            isAuth={isAuth}
          />
          <ProtectedRouter
            path="/booking-page/:id"
            component={BookingPage}
            isAuth={isAuth}
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAdmin: state.authReducer.isAdmin,
  isAuth: state.authReducer.isAuth,
});

const mapDispatchToProps = {
  checkAuth: checkAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
