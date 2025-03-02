import { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";

export const useInfinityScroll = (category) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchData = useCallback(async () => {
    if (!hasMore || loading) return;

    setLoading(true);
    setError(false);

    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/${category}`,
        {
          params: { page: pageNumber },
        }
      );

      const newItems = response.data.results;
      setItems((prevState) => [...prevState, ...newItems]);

      if (response.data.info.next) {
        setPageNumber((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      setError(true);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }, [hasMore, loading, category, pageNumber]);

  const lastElementRef = useRef(null);

  useEffect(() => {
    let observer;

    const observeLastElement = (node) => {
      if (loading || !node) return;

      if (observer) {
        observer.disconnect();
      }

      observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          fetchData();
        }
      });

      if (node) {
        observer.observe(node);
      }
    };

    observeLastElement(lastElementRef.current);

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [loading, hasMore, fetchData]);

  useEffect(() => {
    setItems([]);
    setPageNumber(1);
    setHasMore(true);
    setError(false);
  }, [category]);

  return { items, loading, error, hasMore, lastElementRef };
};
