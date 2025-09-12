import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx"
import Main from"../components/Main.jsx";
import FestivalsList from "../components/festivals/FestivalsList.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path:'/',
        element: <Main />
      },
      {
        path:'/festivals',
        element: <FestivalsList />
      }
    ]
  }
]);

function Router(){
  return<RouterProvider router={router} />
}
export default Router;