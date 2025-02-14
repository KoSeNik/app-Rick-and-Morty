import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="content">
      <h2>Такая страница не существует!</h2>
      <div>
        <Link to="/">Главная</Link>
      </div>
    </div>
  );
};

export default NotFound;
