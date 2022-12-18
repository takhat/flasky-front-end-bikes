import "./Bike.css";

const Bike = ({ id, name, size, type, price }) => {
  // const myBike = {
  //   id: 1,
  //   name: "My Bike",
  //   size: 50,
  //   price: 100,
  //   type: "special",
  // };
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
