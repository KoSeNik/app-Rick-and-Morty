import characters from "../data/characters.json";
import { useParams } from "react-router-dom";

const Character = () => {
  const params = useParams();
  const character = characters.find(
    (el) => el.name === params.name.replace(/\s/g, " ")
  );

  return (
    <>
      <img src={character.image} alt="" />
      <div>Имя: {character.name}</div>
      <div>Статус: {character.status}</div>
      <div>Вид: {character.species}</div>
      <div>Пол: {character.gender}</div>
      {character.type && <div>Тип: {character.type}</div>}
    </>
  );
};

export default Character;
