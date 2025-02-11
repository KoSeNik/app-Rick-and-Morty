import locations from "../data/location.json";
import { useParams } from "react-router-dom";

const Location = () => {
  const params = useParams();
  const location = locations.find(
    (el) => el.name === params.name.replace(/\s/g, " ")
  );

  return (
    <>
      <div>Имя: {location.name}</div>
      <div>Тип: {location.type}</div>
      <div>Измерение: {location.dimension}</div>
    </>
  );
};

export default Location;
