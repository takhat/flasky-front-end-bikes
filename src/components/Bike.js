import "./Bike.css";

const Bike = ({ id, name, size, type, price }) => {
  return (
    <div>
      <h2 className="bike__name">{name}</h2>
      <ul>
        <li>{id}</li>
        <li>{size}</li>
        <li>{price}</li>
        <li>{type}</li>
      </ul>
    </div>
  );
};

export default Bike;
