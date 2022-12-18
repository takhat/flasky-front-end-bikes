import Bike from "./Bike";

const BikeList = ({ bikesList }) => {
  return bikesList.map((bike) => (
    <li key={bike.id}>
      <Bike
        id={bike.id}
        name={bike.name}
        size={bike.size}
        price={bike.price}
        type={bike.type}
      />
    </li>
  ));
};

export default BikeList;
