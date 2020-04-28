import React, { Component } from "react";
import Maps from "./Maps";
import { connect } from "react-redux";
import { editItem } from "../../redux/action";
import { addFoodId } from "../../redux/authAction";

class Orders extends Component {
  state = {
    id: "",
  };
  componentDidMount = () => {
    const { editItem, addFoodId, user } = this.props;
    let id = this.props.match.params.id;
    this.setState({
      id,
    });
    editItem({ book: true }, id);
    addFoodId({ bookFoodId: id }, user._id);
  };
  render() {
    const { singleData } = this.props;
    return (
      <div>
        <div className="container px-3 mt-3">
          <h1>Your Order Is Confirm Check Details.</h1>
          <p>
            School feeding programs can help prevent hunger, increase school
            enrollment, reduce absenteeism.
          </p>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <Maps item_id={this.state.id} />
            </div>
            {singleData ? (
              <div className="col-md-6">
                <div className="card mb-3">
                  <img
                    src="https://pd1hk.bumbcdn.com/ssc/static-eu.bumble.com/s1/files/e/2.1.mgfBZES6-elQXZ2rKcYFyaElMD2fSnElqrSXFyp1elQ4PcI2i2Lc8t013vrB-ez1/"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Your order is confirmed.</h5>
                    <h6 className="card-title font-size-bold">
                      <strong>Oreder No: {Date.now()}</strong>
                    </h6>
                    <p>{singleData.hotelName}</p>
                    <p>{singleData.phone}</p>
                    <p className="card-text">Thanks for helping for ...?</p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  singleData: state.foodReducer.singleData,
  user: state.authReducer.user,
});

const mapDispatchToProps = {
  editItem: editItem,
  addFoodId: addFoodId,
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
