import React, { Component } from "react";
import { ReactBingmaps } from "react-bingmaps";
import { connect } from "react-redux";
import "../../App.css";

class Map extends Component {
  state = {
    directions: {
      renderOptions: { itineraryContainer: "itineraryContainer" },
      requestOptions: { routeMode: "driving", maxRoutes: 2 },
      wayPoints: [
        {
          address: "26.47679, 80.2298",
        },
        {
          address: `${localStorage.getItem("lat")} , ${localStorage.getItem(
            "lng"
          )}`,
        },
      ],
    },
  };

  componentDidMount = () => {
    if (this.props.singleData) {
      console.log("object====");
      this.setState({
        directions: {
          renderOptions: { itineraryContainer: "itineraryContainer" },
          requestOptions: { routeMode: "driving", maxRoutes: 2 },
          wayPoints: [
            {
              address: `${this.props.singleData.location.coordinates[1]} , ${this.props.singleData.location.coordinates[0]}`,
            },
            {
              address: `${localStorage.getItem("lat")} , ${localStorage.getItem(
                "lng"
              )}`,
            },
          ],
        },
      });
    }
  };

  render() {
    console.log(this.state.wayPoints);

    return (
      <div>
        <div>
          <div className="map-three">
            <ReactBingmaps
              // className={styles.customClass}
              id="eleven"
              center={[
                parseInt(localStorage.getItem("lat")),
                parseInt(localStorage.getItem("lng")),
              ]}
              bingmapKey="AqdHRcX6MqfzEpG717Lw_NBdvKz2QnitNlZGvikaDSC33tuHVPzn5V2-g-iZNYCi"
              directions={this.state.directions}
            ></ReactBingmaps>
            <div className="direction-container">
              <div className="input-panel" id="inputPanel"></div>
              <div
                className="itinerary-container"
                id="itineraryContainer"
              ></div>
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

export default connect(mapStateToProps, null)(Map);
