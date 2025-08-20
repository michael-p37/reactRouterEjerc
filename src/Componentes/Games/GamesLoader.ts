import type { LoaderFunctionArgs } from "react-router-dom";
import { getGame, getGames } from "../../Services/GamesService";

export async function Loader() {
    const games = await getGames();
    return {games};
}
export async function GameLoader({params}: LoaderFunctionArgs){
    const id = Number(params.id);
    const game = await getGame(id);
    return {game}
}