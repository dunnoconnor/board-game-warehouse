// Import axios for making HTTP requests
import axios from "axios";
// Import the base API URL
import apiURL from '../api';

// Define the GameService class
class GameService {
    constructor() {
        // Initialize a cache to store API responses
        this.cache = new Map();
    }

    // Fetch all games from the API
    async getAllGames() {
        // Check if the data is already in the cache
        if (this.cache.has('allGames')) {
            return this.cache.get('allGames');
        }
        // If not, make an API request to fetch the data
        const response = await axios.get(`${apiURL}/games/`);
        // Store the response in the cache
        this.cache.set('allGames', response);
        return response;
    }

    // Fetch a single game by its ID
    getGame(id) {
        return axios.get(`${apiURL}/games/${id}`);
    }

    // Create a new game
    createGame(game) {
        return axios.post(`${apiURL}/games/`, game);
    }

    // Update an existing game
    updateGame(id, game) {
        return axios.put(`${apiURL}/games/${id}`, game);
    }

    // Delete a game by its ID
    deleteGame(id) {
        return axios.delete(`${apiURL}/games/${id}`);
    }
}

// Export an instance of the GameService class
export default new GameService();