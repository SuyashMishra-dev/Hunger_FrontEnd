import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserOrder } from "../../redux/authAction";

class YourOrders extends Component {
  componentDidMount = () => {
    const { fetchUserOrder, user } = this.props;
    let arr = user.bookedFoodId;
    if (arr) {
      fetchUserOrder({ arr });
    }
  };
  render() {
    const { orderList } = this.props;
    return (
      <div className="container">
        {orderList.length > 0 ? (
          <>
            <h3 className="mt-5 text-center">Your Orders</h3>
            <div className="d-flex flex-wrap justify-content-center mt-5 ">
              {orderList.map((val, i) => {
                return (
                  <div
                    key={val.id}
                    className="card mb-5 mx-4 my-card"
                    style={{ width: "18rem" }}
                  >
                    <img
                      src={
                        val.photo !== "no-photo.jpg"
                          ? `http://localhost:5000/uploads/${val.photo}`
                          : "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                      }
                      className="card-img-top"
                      alt="..."
                      height="200px"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{val.hotelName}</h5>
                      <p className="card-text">
                        {val.location.city}, {val.location.state}
                      </p>
                      <p className="card-text">
                        Quantity: {val.quantity} People
                      </p>
                      <p className="card-text">Quantity: {val.phone}</p>
                    </div>
                  </div>
                );
                // }
              })}
            </div>
          </>
        ) : (
          <div className="d-flex justify-content-center order-bg mt-lg-3">
            <h3 className="mt-md-4 mt-lg-0">No History Found</h3>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  orderList: state.authReducer.orderList,
  user: state.authReducer.user,
});

const mapDispatchToProps = {
  fetchUserOrder: fetchUserOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(YourOrders);
