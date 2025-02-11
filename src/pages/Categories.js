import characters from "../data/characters.json";
import episodes from "../data/episode.json";
import locations from "../data/location.json";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Categories = () => {
  const params = useParams();

  let data;
  if (params.category === "characters") {
    data = characters;
  } else if (params.category === "episodes") {
    data = episodes;
  } else if (params.category === "locations") {
    data = locations;
  }
  return (
    <div className="Content">
      {data.map((el) => (
        <div key={el.id} className="Item">
          <div>
            <Link to={`/${params.category}/${el.name}`}>{el.name}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
