import React from "react";

const Jumbotron = () => {
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Hello Traveler!</h1>
        <p className="col-md-8 fs-4">
          Below, you will find a collection of planets to visit on your next
          vacation. From a beach-resort getaway at Niamos to the most populous
          city in the galaxy, your call to adventure is limitless.
        </p>
        <button className="btn btn-primary btn-lg" type="button">
          Book now!
        </button>
      </div>
    </div>
  );
};
export default Jumbotron;
