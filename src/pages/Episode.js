import { Suspense } from "react";
import { useParams } from "react-router-dom";
import ErrorBoundary from "../component/ErrorBoundary";
import { useFetchItemById } from "../hooks/useFetchItemById";

const Episode = () => {
  const { id } = useParams();
  const { item: episode, loading, error } = useFetchItemById("episode", id);

  if (loading) {
    return <h1>Загрузка данных...</h1>;
  }

  if (error || !episode) {
    return <h1>Эпизод не найден или произошла ошибка</h1>;
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<h1>Загрузка данных...</h1>}>
        <div className="content">
          <div>Имя: {episode.name}</div>
          <div>Дата выхода: {episode.air_date}</div>
          <div>Эпизод: {episode.episode}</div>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Episode;
