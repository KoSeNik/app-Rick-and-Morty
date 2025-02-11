import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h2>Такая страница не существует!</h2>
      <div>
        <Link to="/">Главная</Link>
      </div>
    </>
  );
};

export default NotFound;
