import React, { Component } from "react";
import { connect } from "react-redux";
import { searchFood } from "../../../redux/action";
import { toast } from "react-toastify";

class SearchFood extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flag: false,
      range: 5,
      pin: "",
    };
  }

  displayCoords(position) {
    localStorage.setItem("lat", position.coords.latitude);
    localStorage.setItem("lng", position.coords.longitude);
  }

  handleFlagTrue = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.displayCoords);
    }
    this.setState({
      flag: true,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { searchFood } = this.props;
    e.preventDefault();
    if (this.state.pin.length === 6) {
      searchFood(this.state);
      this.setState({
        flag: false,
        pin: "",
      });
    } else {
      toast.error("Wrong Pin Code");
    }
  };
  render() {
    return (
      <>
        {!this.state.flag ? (
          <div className="text-center mt-3">
            <button onClick={this.handleFlagTrue} className="btn btn-success">
              Search Food
            </button>
          </div>
        ) : null}
        {this.state.flag ? (
          <div className="mt-sm-3 mt-md-5">
            <h3 className="text-center">
              Search Food <i className="fas fa-hamburger"></i>
            </h3>
            <form className="container w-50 mt-3" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Select Your Range In Kilo Meter</label>
                <label className="float-right text-primary">
                  {this.state.range} KM
                </label>
                <input
                  onChange={this.handleChange}
                  value={this.state.range}
                  min="5"
                  max="50"
                  name="range"
                  type="range"
                  className="form-control-range"
                />
              </div>
              <div className="row">
                <div className="form-group col-md-9 mb-2 ">
                  <input
                    onChange={this.handleChange}
                    value={this.state.pin}
                    name="pin"
                    type="number"
                    className="form-control"
                    placeholder="Enter Your Pin Code"
                  />
                </div>
                <div className="form-group col-md-3 mb-2 text-right">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-2"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : null}
      </>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  searchFood: searchFood,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchFood);
