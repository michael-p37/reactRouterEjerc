import Login from "./Componentes/Login/Login";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Componentes/home";
import Error from "./Componentes/Error";
import Root from "./Componentes/Root";
import Games, { GameLoader, Loader } from "./Componentes/Games";
import Companies, {
  action,
  CompaniesLoader,
  CompanyLoader,
} from "./Componentes/Company";
import Company from "./Componentes/Company/Company";
import EditCompany from "./Componentes/Company/EditCompany";
import Game from "./Componentes/Games/Game";
import gameAction from "./Componentes/Games/gameAction";
import EditGame from "./Componentes/Games/editGame";
// import gameAction from "./Componentes/Games/gameAction";

const ary = ["React", "Typescript", "Generics", "ReactRouter"];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/games",
    element: (
      <Games
        items={ary}
        renderItem={(getItem) => <li key={getItem}>{getItem}</li>}
      />
    ),
    loader: Loader,
    children: [
      {
        path: ":id",
        element: <Game/>,
        loader: GameLoader,
      },
      {
        path: ":id/edit",
        element: <EditGame />,
        loader: GameLoader,
        action: gameAction
      },
    ]
  },
  {
    path: "/companies",
    element: <Companies />,
    loader: CompaniesLoader,
    children: [
      {
        path: ":id",
        element: <Company />,
        loader: CompanyLoader,
      },
      {
        path: ":id/edit",
        element: <EditCompany />,
        loader: CompanyLoader,
        action: action,
      },
    ],
  },
]);
