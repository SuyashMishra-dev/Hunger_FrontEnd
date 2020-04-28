import React, { Component } from "react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Image from "./extra/Image";
import ImageText from "./extra/ImageText";
import ImageCard from "./extra/ImageCard";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: 0,
      endDate: 0,
      totalPrice: 0,
      price: 0,
    };
  }
  render() {
    return (
      <div>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div style={{ height: "91vh", background: "#229BBF" }}></div>
              <div className="carousel-caption d-block ">
                <div>
                  <div
                    className=" card mx-2 mx-auto my-card mb-3  rounded-0"
                    style={{ opacity: ".9", width: "50vw" }}
                  >
                    <div className="card-body">
                      <h2 className="font-weight-bold card-title text-dark mt-2">
                        Welcome to Hunger
                      </h2>
                      <p
                        style={{ opacity: "1" }}
                        className="card-subtitle mb-4 text-dark px-3"
                      >
                        <small>
                          If you can’t feed a hundred people, then feed just
                          one.
                        </small>
                      </p>

                      <p className="mb-2">
                        <button
                          className="card-link text-white btn  rounded-0 px-5"
                          style={{ background: "#229BBF" }}
                        >
                          Join
                        </button>
                        <Link
                          className="landing-link card-link text-dark btn rounded-0 px-4"
                          to="/login"
                          style={{ border: "2px solid #229BBF" }}
                        >
                          Sign In
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="h-25 my-5 py-4 "></div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div style={{ height: "91vh", background: "#FFC629" }}></div>
              <div className="carousel-caption d-block">
                <div>
                  <div
                    className=" card mx-2 mx-auto my-card mb-3  rounded-0"
                    style={{ opacity: ".9", width: "50vw" }}
                  >
                    <div className="card-body  ">
                      <h2 className="font-weight-bold card-title text-dark mt-2">
                        Help Hungry and Needy people
                      </h2>
                      <p
                        style={{ opacity: "1" }}
                        className="card-subtitle mb-4 text-dark px-3"
                      >
                        <small>
                          School feeding programs can help prevent hunger,
                          increase school enrollment, reduce absenteeism.
                        </small>
                      </p>

                      <p className="mb-2">
                        <button
                          className="card-link text-white btn rounded-0 px-5"
                          style={{ background: "#FFC629" }}
                        >
                          Join
                        </button>
                        <Link
                          className="landing-link card-link text-dark btn rounded-0 px-4"
                          to="/login"
                          style={{ border: "2px solid #FFC629" }}
                        >
                          Sign In
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="h-25 my-5 py-4 "></div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div style={{ height: "91vh", background: "#F56A35" }}></div>
              <div className="carousel-caption d-block">
                <div>
                  <div
                    className=" card mx-2 mx-auto my-card mb-3  rounded-0"
                    style={{ opacity: ".9", width: "50vw" }}
                  >
                    <div className="card-body  ">
                      <h2 className="font-weight-bold card-title text-dark mt-2">
                        Make the first move
                      </h2>
                      <p
                        style={{ opacity: "1" }}
                        className="card-subtitle mb-4 text-dark px-3"
                      >
                        <small>
                          Start meeting new people in your area! If you already
                          have an account, sign in to use Bumble on the web.
                        </small>
                      </p>

                      <p className="mb-2">
                        <button
                          className="card-link text-white btn  rounded-0 px-5"
                          style={{ background: "#F56A35" }}
                        >
                          Join
                        </button>
                        <Link
                          className="landing-link card-link text-dark btn rounded-0 px-4"
                          to="/login"
                          style={{ border: "2px solid #F56A35" }}
                        >
                          Sign In
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="h-25 my-5 py-4 "></div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="container">
          <div className="row">
            <ImageText
              head="Feed peoples"
              para="Find out how much God has given you and from it take what you need; the remainder
               is needed by others"
            />
            <Image url="https://cdn.dribbble.com/users/382712/screenshots/5374294/1.png" />
          </div>
        </div>
        <div className="container mt-3 pt-5">
          <div className="row">
            <Image url="https://cdn.dribbble.com/users/77121/screenshots/6184471/dribbble-02.png" />
            <ImageText
              head="Save the life."
              para="I hope someday we will be able to proclaim that we have banished hunger in the world,
               and that we’ve been able to bring nutrition and health to the whole world"
            />
          </div>
        </div>
        <div className="container mt-3 pt-5">
          <div className="row justify-content-center align-items-center">
            <ImageCard
              head=""
              para=""
              url="https://images.unsplash.com/photo-1526168637801-e9f490d6bc04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
            <ImageCard
              head=""
              para=""
              url="https://www.quotemaster.org/images/s_9d/9d3e9fc81f34b9dab7110c6978cd90ad.jpeg"
            />
            <ImageCard
              head=""
              para=""
              url="https://www.quotemaster.org/images/s_7a/7a37d77d5f1073613e9fe4ea0843ac73.jpeg"
            />
            <ImageCard
              head=""
              para=""
              url="https://www.quotemaster.org/images/s_c5/c5d1073e3d52ea2924626482371abd71.png"
            />
            <ImageCard
              head=""
              para=""
              url="https://www.quotemaster.org/images/s_80/8054c149c3d94717f45f17040fcc8882.jpeg"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
