import { useState, useEffect } from 'react';
import GameService from '../services/GameService';

const useFetchGames = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const data = await GameService.getAllGames();
        setGames(data);
      } catch (err) {
        setError(err);
      }
    };

    fetchGames();
  }, []);

  return { games, error };
};

export default useFetchGames;