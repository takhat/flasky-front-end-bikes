import { useState } from "react";
import PropTypes from "prop-types";
import "./Bike.css";

const Bike = ({ id, name, size, type, price }) => {
  const [bikePrice, setBikePrice] = useState(price);

  const updateBikePrice = (inc) => {
    if (inc) {
      setBikePrice(bikePrice + 1);
    } else {
      setBikePrice(bikePrice - 1);
    }
  };

  const getColorFromPrice = (price) => {
    let myBudget = 100;
    if (price <= myBudget) return "green";
    return "red";
  };

  return (
    <div>
      <h2 className="bike__name">{name}</h2>
      <ul>
        <li>ID: {id}</li>
        <li>Size: {size}</li>
        <li>
          Price:
          <span style={{ color: getColorFromPrice(bikePrice) }}>
            ${bikePrice}
          </span>
        </li>
        <li>Type: {type}</li>
      </ul>
      <button
        onClick={() => {
          updateBikePrice(true);
        }}
      >
        Increase Price
      </button>
      <button
        onClick={() => {
          updateBikePrice(false);
        }}
      >
        Decrease Price
      </button>
    </div>
  );
};

Bike.PropType = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};
export default Bike;
