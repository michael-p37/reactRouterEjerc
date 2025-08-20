import { Link, Outlet, useLoaderData } from "react-router-dom";
import type { arrayType } from "../../Services/GamesService";

type listProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

function Games<T>({ items, renderItem }: listProps<T>) {

  const { games } = useLoaderData<{games: arrayType[]}>();
  
  return (
    <>
    <h2>Game page</h2>
      <Link to="/">Inicio</Link>
      <ul>{items.map(renderItem)}</ul>;
      {games.map((g: arrayType) => (
        <li key={g.id}><Link to={`/games/${g.id}`}>{g.name}</Link></li>
      ))}
      <Outlet/>
    </>
  );
}
export default Games;
