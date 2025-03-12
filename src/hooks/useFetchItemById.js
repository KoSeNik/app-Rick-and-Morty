import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchItemById = (category, id) => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!category || !id) {
      setLoading(false);
      return;
    }

    const fetchItem = async () => {
      try {
        setLoading(true);
        setError(false);

        const response = await axios.get(
          `https://rickandmortyapi.com/api/${category}/${id}`
        );

        setItem(response.data);
      } catch (err) {
        console.error(`Ошибка при загрузке ${category} с ID ${id}:`, err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [category, id]);

  return { item, loading, error };
};
