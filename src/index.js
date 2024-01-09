import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "@fontsource/montserrat";
import "@fontsource/montserrat/500.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./styles/index.css";

import Home from './pages/Home';
import Fiche_Logement from './pages/Fiche_Logement';
import A_Propos from './pages/A_Propos';
import P_404 from './pages/P_404';

const data = require ("./logements.json");

const children =  data.map( function (appart){
  const path = "/fiche_logement/:id"
  return {
    path : path ,
    element : <Fiche_Logement appart={appart}/>,
    errorElement: <P_404/>
  }
})
            

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <P_404/>
  },{
    path: "/fiche_logement",
    element: <Fiche_Logement/>,
    children : children,
    errorElement: <P_404/>
  },{
    path: "/a_propos",
    element: <A_Propos/>,
    errorElement: <P_404/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);