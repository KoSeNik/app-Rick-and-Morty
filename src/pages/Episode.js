import { Suspense } from "react";
import episodes from "../data/episode.json";
import { useParams } from "react-router-dom";
import ErrorBoundary from "../component/ErrorBoundary";

const Episode = () => {
  const params = useParams();
  const episode = episodes.find(
    (el) => el.name === params.name.replace(/\s/g, " ")
  );

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
