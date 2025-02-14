import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "red" : null)}
            to="/"
          >
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "red" : null)}
            to="/categories/characters"
          >
            Герои
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "red" : null)}
            to="/categories/locations"
          >
            Локации
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "red" : null)}
            to="/categories/episodes"
          >
            Эпизоды
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
