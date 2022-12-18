import Bike from "./Bike";

const BikeList = ({ bikesList }) => {
  const bikeComponents = [];
  for (const bike of bikesList) {
    bikeComponents.push(
      <li key={bike.id}>
        <Bike
          id={bike.id}
          name={bike.name}
          size={bike.size}
          price={bike.price}
          type={bike.type}
        />
      </li>
    );
  }
  return <div>{bikeComponents} </div>;
};

export default BikeList;
