import PropTypes from "prop-types";
import "./Bike.css";

const Bike = ({ id, name, size, type, price, updatePrice, deleteBike }) => {
  const updateBikePrice = (inc) => {
    if (inc) {
      updatePrice(id, price + 1);
    } else {
      updatePrice(id, price - 1);
    }
  };

  const deleteBikeObj = () => {
    deleteBike(id);
  };
  const priceColor = price <= 100 ? "green" : "red";

  return (
    <div>
      <h2 className="bike__name">{name}</h2>
      <ul>
        <li>ID: {id}</li>
        <li>Size: {size}</li>
        <li className={priceColor}>Price:${price}</li>
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
      <button onClick={deleteBikeObj}>Delete Bike</button>
    </div>
  );
};

Bike.PropType = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  updatePrice: PropTypes.func.isRequired,
  deleteBike: PropTypes.func.isRequired,
};
export default Bike;
