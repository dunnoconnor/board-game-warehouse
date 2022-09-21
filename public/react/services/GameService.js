import axios from "axios";
import apiURL from '../api';

class GameSevice{
    getAllgames(){
        return axios.get(`${apiURL}/games/`);
    }
    getGame(id){
        return axios.get(`${apiURL}/games/${id}`);
    }
    createGame(game){
        return axios.post(`${apiURL}/games/`, game);
    }
    updateGame(id, game){
        return axios.put(`${apiURL}/games/${id}`, game)
    }
    deleteGame(id){
        return axios.delete(`${apiURL}/games/${id}`)
    }
}

export default new GameSevice;