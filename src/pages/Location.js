import { Suspense } from "react";
import { useParams } from "react-router-dom";
import ErrorBoundary from "../component/ErrorBoundary";
import { useFetchItemById } from "../hooks/useFetchItemById";

const Location = () => {
  const { id } = useParams();
  const { item: location, loading, error } = useFetchItemById("location", id);

  if (loading) {
    return <h1>Загрузка данных...</h1>;
  }

  if (error || !location) {
    return <h1>Локация не найдена или произошла ошибка</h1>;
  }

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
