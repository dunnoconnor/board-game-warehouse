import axios from 'axios';
import GameService from './GameService';

jest.mock('axios');

describe('GameService', () => {
    beforeEach(() => {
        GameService.cache.clear();
    });

    it('should fetch all games from the API and cache the result', async () => {
        const games = [{ id: 1, name: 'Chess' }];
        axios.get.mockResolvedValue({ data: games });

        const result = await GameService.getAllGames();
        expect(result.data).toEqual(games);
        expect(GameService.cache.get('allGames').data).toEqual(games);
    });

    it('should return cached games if available', async () => {
        const games = [{ id: 1, name: 'Chess' }];
        GameService.cache.set('allGames', { data: games });

        const result = await GameService.getAllGames();
        expect(result.data).toEqual(games);
        expect(axios.get).not.toHaveBeenCalled();
    });

    it('should fetch a single game by its ID', async () => {
        const game = { id: 1, name: 'Chess' };
        axios.get.mockResolvedValue({ data: game });

        const result = await GameService.getGame(1);
        expect(result.data).toEqual(game);
        expect(axios.get).toHaveBeenCalledWith(`${apiURL}/games/1`);
    });

    it('should create a new game', async () => {
        const newGame = { name: 'Checkers' };
        const createdGame = { id: 2, name: 'Checkers' };
        axios.post.mockResolvedValue({ data: createdGame });

        const result = await GameService.createGame(newGame);
        expect(result.data).toEqual(createdGame);
        expect(axios.post).toHaveBeenCalledWith(`${apiURL}/games/`, newGame);
    });

    it('should update an existing game', async () => {
        const updatedGame = { id: 1, name: 'Chess - Updated' };
        axios.put.mockResolvedValue({ data: updatedGame });

        const result = await GameService.updateGame(1, updatedGame);
        expect(result.data).toEqual(updatedGame);
        expect(axios.put).toHaveBeenCalledWith(`${apiURL}/games/1`, updatedGame);
    });

    it('should delete a game by its ID', async () => {
        axios.delete.mockResolvedValue({ data: {} });

        const result = await GameService.deleteGame(1);
        expect(result.data).toEqual({});
        expect(axios.delete).toHaveBeenCalledWith(`${apiURL}/games/1`);
    });
});