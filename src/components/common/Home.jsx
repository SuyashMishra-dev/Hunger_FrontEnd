import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "./extra/Pagination";
import SearchFood from "./extra/SearchFood";
import { connect } from "react-redux";
import Loder from "./extra/Loder";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      propsChange: true,
      roomListPerPage: 5,
      currentPage: 1,
      currentPageList: [],
    };
  }

  handlePage = () => {
    const { searchData } = this.props;
    let indexOfLastList = this.state.currentPage * this.state.roomListPerPage;
    let indexOfFirstList = indexOfLastList - this.state.roomListPerPage;
    console.log(searchData);
    this.setState({
      currentPageList: searchData
        ? searchData.slice(indexOfFirstList, indexOfLastList)
        : [],
    });
  };

  componentDidMount = () => {
    // this.props.showRooms();
    this.paginate(1);
  };

  paginate = (pageNumber) => {
    this.setState(
      {
        currentPage: pageNumber,
      },
      () => {
        this.handlePage();
      }
    );
  };
  render() {
    const { searchData } = this.props;
    return (
      <div>
        <Loder />
        <div className="container px-sm-3 px-md-5 text-center">
          <h2 className="pt-4">Welcome to Hunger</h2>
          <p className="my-3 px-sm-0 mx-sm-0 px-md-5 mx-md-5">
            Hunger is not a problem. It is an obscenity. How wonderful it is
            that nobody need wait a single moment before starting to improve the
            world.
          </p>
        </div>
        <SearchFood />
        <div className="d-flex flex-wrap justify-content-center mt-5 ">
          {searchData &&
            searchData.map((val, i) => {
              // if (!val.isBooked) {
              return (
                <div
                  key={val.id}
                  className="card mb-5 mx-4 my-card"
                  style={{ width: "18rem" }}
                >
                  <img
                    src={
                      val.photo != "no-photo.jpg"
                        ? `http://localhost:5000/uploads/${val.photo}`
                        : "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                    }
                    class="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{val.hotelName}</h5>
                    <p className="card-text">
                      {val.location.city}, {val.location.state}
                    </p>
                    <p className="card-text">Quantity: {val.quantity} People</p>
                    <p>
                      <Link
                        to={`/booking-page/${val._id}`}
                        className="card-link"
                      >
                        Book Now >>
                      </Link>
                    </p>
                  </div>
                </div>
              );
              // }
            })}
        </div>
        <Pagination
          // totalList={this.props.roomList}
          totalList={searchData || []}
          roomListPerPage={this.state.roomListPerPage}
          changePage={this.paginate}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchData: state.foodReducer.searchData,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
