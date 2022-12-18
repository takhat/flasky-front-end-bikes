import "./Bike.css";

const Bike = () => {
  const myBike = {
    id: 1,
    name: "My Bike",
    size: 50,
    price: 100,
    type: "special",
  };
  return (
    <div>
      <h2 className="bike__name">{myBike.name}</h2>
      <ul>
        <li>{myBike.id}</li>
        <li>{myBike.size}</li>
        <li>{myBike.price}</li>
        <li>{myBike.type}</li>
      </ul>
    </div>
  );
};

export default Bike;
