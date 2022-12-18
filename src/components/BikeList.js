import Bike from "./Bike";

const BikeList = () => {
  const bikesList = [
    {
      id: 1,
      name: "My Bike",
      size: 50,
      price: 100,
      type: "special",
    },
    {
      id: 2,
      name: "Another Bike",
      size: 30,
      price: 90,
      type: "duplicate",
    },
  ];

  return bikesList.map((bike) => (
    <Bike
      id={bike.id}
      name={bike.name}
      size={bike.size}
      price={bike.price}
      type={bike.type}
    />
  ));
};

export default BikeList;
