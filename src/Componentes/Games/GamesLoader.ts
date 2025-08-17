import { getGames } from "../../Services/GamesService";

export async function Loader() {
    const games = await getGames();
    return {games};
}