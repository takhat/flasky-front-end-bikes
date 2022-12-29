import { useState } from "react";
import "./NewBikeForm.css";
import PropTypes from "prop-types";

const INITIAL_FORM_DATA = {
  size: 20,
  type: "Gnarly",
  price: 50,
  name: "Hella",
};
const NewBikeForm = (props) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleChange = (e) => {
    console.log("handleChange called");
    console.log(
      `Target name: ${e.target.name} Target value: ${e.target.value}`
    );
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newFormData);
  };

  const handleNewBikeSubmit = (e) => {
    e.preventDefault();
    props.addBikeCallBackFunc(formData);
  };

  return (
    <form onSubmit={handleNewBikeSubmit}>
      <label htmlFor="size">Bike Size</label>
      <input
        type="number"
        id="size"
        name="size"
        value={formData.size}
        onChange={handleChange}
      />
      <label htmlFor="name">Bike Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="type">Bike Type</label>
      <input
        type="text"
        id="type"
        name="type"
        value={formData.type}
        onChange={handleChange}
      />
      <label htmlFor="price">Bike Price</label>
      <input
        type="number"
        id="price"
        name="price"
        value={formData.price}
        onChange={handleChange}
      />

      <input type="submit" value="Add Bike" />
    </form>
  );
};
NewBikeForm.propTypes = {
  addBikeCallBackFunc: PropTypes.func.isRequired,
};
export default NewBikeForm;
