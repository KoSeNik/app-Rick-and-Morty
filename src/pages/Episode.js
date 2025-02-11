import episodes from "../data/episode.json";
import { useParams } from "react-router-dom";

const Episode = () => {
  const params = useParams();
  const episode = episodes.find(
    (el) => el.name === params.name.replace(/\s/g, " ")
  );

  return (
    <>
      <div>Имя: {episode.name}</div>
      <div>Дата выхода: {episode.air_date}</div>
      <div>Эпизод: {episode.episode}</div>
    </>
  );
};

export default Episode;
