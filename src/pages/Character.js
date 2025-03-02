import { Suspense } from "react";
import { useParams } from "react-router-dom";
import ErrorBoundary from "../component/ErrorBoundary";
import { useFetchItemById } from "../hooks/useFetchItemById";

const Character = () => {
  const { id } = useParams();
  const { item: character, loading, error } = useFetchItemById("character", id);

  if (loading) {
    return <h1>Загрузка данных...</h1>;
  }

  if (error || !character) {
    return <h1>Персонаж не найден или произошла ошибка</h1>;
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<h1>Загрузка данных...</h1>}>
        <div className="content">
          <img src={character.image} alt={character.name} />
          <div>Имя: {character.name}</div>
          <div>Статус: {character.status}</div>
          <div>Вид: {character.species}</div>
          <div>Пол: {character.gender}</div>
          {character.type && <div>Тип: {character.type}</div>}
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Character;
