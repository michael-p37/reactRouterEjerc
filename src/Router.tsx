import Login from "./Componentes/Login/Login";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Componentes/home";
import Error from "./Componentes/Error";
import Root from "./Componentes/Root";
import Games, { Loader } from "./Componentes/Games";
import Companies, { CompaniesLoader, CompanyLoader } from "./Componentes/Company";
import Company from "./Componentes/Company/Company";




const ary = ["React", "Typescript", "Generics", "ReactRouter"];

 export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: "/games",
    element: 
    <Games
    items={ary}
    renderItem={(getItem) => <li key={getItem}>{getItem}</li>}
    />,
    loader: Loader,
    errorElement: <Error />
  },
  {
    path: "/companies",
    element: <Companies />,
    errorElement: <Error />,
    loader: CompaniesLoader,
  },
  {
    path: "/companies/:id",
    element: <Company />,
    loader: CompanyLoader,
    errorElement: <Error />,
  },
]);
