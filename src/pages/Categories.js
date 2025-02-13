import characters from "../data/characters.json";
import episodes from "../data/episode.json";
import locations from "../data/location.json";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Categories = () => {
  const params = useParams();

  let data;
  switch (params.category) {
    case "characters":
      data = characters;
      break;
    case "episodes":
      data = episodes;
      break;
    case "locations":
      data = locations;
      break;
  }
  return (
    <div className="content">
      {data?.map((el) => (
        <div key={el.id} className="item">
          <div>
            <Link to={`/${params.category}/${el.name}`}>{el.name}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
