import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <h2>Добро пожаловать в мир Рика и Морти</h2>
      <ul>
        <li>
          <Link to="/categories/characters">Герои</Link>
        </li>
        <li>
          <Link to="/categories/locations">Локации</Link>
        </li>
        <li>
          <Link to="/categories/episodes">Эпизоды</Link>
        </li>
      </ul>
    </>
  );
};

export default Main;
