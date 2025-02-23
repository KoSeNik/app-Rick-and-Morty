import { Suspense } from "react";
import locations from "../data/location.json";
import { useParams } from "react-router-dom";
import ErrorBoundary from "../component/ErrorBoundary";

const Location = () => {
  const params = useParams();
  const location = locations.find(
    (el) => el.name === params.name.replace(/\s/g, " ")
  );

  return (
    <ErrorBoundary>
      <Suspense fallback={<h1>Загрузка данных...</h1>}>
        <div className="content">
          <div>Имя: {location.name}</div>
          <div>Тип: {location.type}</div>
          <div>Измерение: {location.dimension}</div>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Location;
