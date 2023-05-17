import React from "react";
//import ReactDOM from "react-dom";
import PropType from "prop-types";

const Card = (props) => {
  const style = {
    width: "18rem",
  };
  return (
    <div className="card" style={style}>
      <img src={props.imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {props.title ? props.title : "Default title"}
        </h5>
        <p className="card-text">{props.text}</p>
        <a href="#" className="btn btn-primary">
          {props.btnText ? props.btnText : "Plan My Trip"}
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropType.string,
  imageURL: PropType.string,
  text: PropType.string,
  //button: PropType.string,
};

// ReactDOM.render(
//     <Card
//     />,
//     document.getElementById("root")
// );

export default Card;
