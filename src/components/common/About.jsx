import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="pt-5 text-center container">
        <h2 className="text-center">Our Vision</h2>
        <p className="px-3">
          We are trying to make an Web Application which can be used by anyone
          who is willing to share his food with the future of india, so
          weddings, restaurants and hotels to share the left food details and
          locations to helps "hunger heroes" or distributors to do their jobs
          efficiently and the food reaches to needy as soon as possible.
        </p>
        <br />
        <p>
          In India, the bigger the wedding, the larger the party and the more
          colossal the waste. No doubt weddings and banquets are a huge source
          of food wastage, but restaurants and hotels also contribute to food
          wastage, though the awareness around this has grown in the last five
          years. While some restaurants in India employ food controllers to
          check food spoilage, others donate it to their staff and other
          personnel, and smaller standalone restaurants, donate it to
          orphanages. Few also reuse non-perishable food.
        </p>
      </div>
    );
  }
}

export default About;
