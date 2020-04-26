import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./AddItem.module.css";
import { addItem } from "../../redux/action";
import { toast } from "react-toastify";

class AddItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hotelName: "",
      quantity: "",
      phone: "",
      description: "",
      address: "",
      zip: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  addItemSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.hotelName !== "" &&
      this.state.quantity !== "" &&
      this.state.address !== "" &&
      this.state.phone !== "" &&
      this.state.description !== "" &&
      this.state.zip !== ""
    ) {
      const { addItem } = this.props;
      let obj = {
        hotelName: this.state.hotelName,
        quantity: Number(this.state.quantity),
        phone: this.state.phone,
        description: this.state.description,
        address: `${this.state.address}, ${this.state.zip}`,
      };
      addItem(obj);
      this.setState({
        hotelName: "",
        quantity: "",
        phone: "",
        description: "",
        address: "",
        zip: "",
      });
    } else {
      toast.error("Fill input properly!!! :(");
    }
  };
  render() {
    return (
      <div
        className="d-flex justify-content-center align-items-center mt-5 py-5 "
        style={{ height: "70vh" }}
      >
        <div className={styles.addItem}>
          <div className="px-5">
            <form className="p-4 text-center">
              <i className="fas fa-utensils text-white mr-2 bg-danger p-2 rounded-circle"></i>
              <br />
              <label className="h2 font-weight-normal mt-1 text-primary">
                Add Item
              </label>
              <div className="py-3 py-md-2">
                <input
                  className={styles.addItemInput}
                  type="name"
                  onChange={this.handleChange}
                  name="hotelName"
                  value={this.state.hotelName}
                  placeholder="Enter Hotel Name"
                  required
                />
              </div>
              <div className="py-3 py-md-2">
                <input
                  className={styles.addItemInput}
                  type="number"
                  onChange={this.handleChange}
                  name="quantity"
                  value={this.state.quantity}
                  placeholder="Enter People Quantity"
                  required
                />
              </div>

              <div className="py-3 py-md-2">
                <input
                  className={styles.addItemInput}
                  type="number"
                  onChange={this.handleChange}
                  name="phone"
                  value={this.state.phone}
                  placeholder="Enter Phone No."
                  required
                />
              </div>
              <div className="py-3 py-md-2">
                <input
                  className={styles.addItemInput}
                  type="text"
                  onChange={this.handleChange}
                  name="description"
                  value={this.state.description}
                  placeholder="Enter Your Description"
                  required
                />
              </div>
              <div className="py-3 py-md-2">
                <input
                  className={styles.addItemInput}
                  type="text"
                  onChange={this.handleChange}
                  name="address"
                  value={this.state.address}
                  placeholder="Enter Full Address"
                  required
                />
              </div>
              <div className="py-3 py-md-2">
                <input
                  className={styles.addItemInput}
                  type="number"
                  onChange={this.handleChange}
                  name="zip"
                  value={this.state.zip}
                  placeholder="Enter Zip/Pin Code"
                  required
                />
              </div>
              <button className={styles.myBtn} onClick={this.addItemSubmit}>
                Add Item
              </button>
              <br />
              <div className="text-left">
                <Link to="/home" className="ml-2 mt-3 text-left d-inline-block">
                  Back Home
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addItem: addItem,
};

export default connect(null, mapDispatchToProps)(AddItem);
