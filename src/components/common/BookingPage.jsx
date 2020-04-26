import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getSingleItem, deleteItem } from "../../redux/action";
import Loder from "./extra/Loder";

class BookingPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    const { getSingleItem } = this.props;
    let id = this.props.match.params.id;
    getSingleItem(id);
  };

  render() {
    const { singleData } = this.props;
    return (
      <div className="mt-5">
        <Loder />
        <div>
          <div className="container py-2 text-center">
            <h1>Book Your Order</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At sint
              provident blanditiis odit voluptatibus id.
            </p>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <img src="home_1.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-md-6">
                {singleData ? (
                  <div class="card mb-3">
                    <img
                      src={
                        singleData.photo != "no-photo.jpg"
                          ? `http://localhost:5000/uploads/${singleData.photo}`
                          : "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                      }
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        {singleData.hotelName || "Hotel"}
                      </h5>
                      <p className="card-text">
                        {singleData.description || "No Description"}
                      </p>
                      <p className="card-text">
                        Phone no.: {singleData.phone || "No Number"}
                      </p>
                      <p className="card-text">
                        {singleData.location ? singleData.location.city : " "}{" "}
                        {singleData.location
                          ? singleData.location.State
                          : "Kanpur"}
                      </p>
                      <p className="card-text">
                        Quantity: {singleData.quantity} People
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                      <p className="card-text">
                        <Link
                          className="text-primary"
                          to={`/orders/${singleData._id}`}
                        >
                          Confirm
                        </Link>
                      </p>
                      <p className="card-link">
                        <Link to="/home">Cancle Order</Link>
                      </p>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  singleData: state.foodReducer.singleData,
});

const mapDispatchToProps = {
  getSingleItem: getSingleItem,
  deleteItem: deleteItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingPage);
