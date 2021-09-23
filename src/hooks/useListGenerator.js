import { useState, useEffect } from 'react';
import { fetchList } from '../services/fetchUtils';

export const useListGenerator = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchList()
      .then((characters) => setCharacters(characters))
      .finally(() => setLoading(false));
  }, []);

  return { characters, loading };
};
