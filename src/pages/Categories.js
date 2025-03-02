import { Suspense } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useInfinityScroll } from "../hooks/useInfinityScroll";

const Categories = () => {
  const params = useParams();
  const apiCategory = params.category?.slice(0, -1) || "character";
  const { items, loading, error, hasMore, lastElementRef } =
    useInfinityScroll(apiCategory);

  return (
    <Suspense fallback={<h1>Загрузка данных...</h1>}>
      <div className="content">
        {items?.map((el) => (
          <div key={el.id} className="item">
            <div>
              <Link to={`/${params.category}/${el.id}`}>{el.name}</Link>
            </div>
          </div>
        ))}

        {hasMore && (
          <div
            ref={lastElementRef}
            style={{ height: "1px", visibility: "hidden" }}
          />
        )}

        {loading && <div className="loading">Загрузка...</div>}

        {error && (
          <div className="errorMessage">Ошибка загрузки: {error.message}</div>
        )}
      </div>
    </Suspense>
  );
};

export default Categories;
