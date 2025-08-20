import { Link, useLoaderData } from "react-router-dom";
import type { arrayType } from "../../Services";

function Game() {
  const { game } = useLoaderData<{ game: arrayType }>();

  return (
    <div>
      <Link to={`/games`}>Regresar a Games</Link>
      <h2>Juego</h2>
      <ul>
        <li>
          <strong>Id: </strong>
          {game.id}
        </li>
        <li>
          <strong>Name: </strong>
          {game.name}
        </li>
        <li>
          <strong>Description: </strong>
          {game.description}
        </li>
      </ul>
      <Link to={`./edit`}>Edit</Link>
    </div>
  );
}
export default Game;
