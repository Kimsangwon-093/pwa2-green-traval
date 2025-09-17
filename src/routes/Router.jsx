import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx"
import Main from"../components/Main.jsx";
import FestivalsList from "../components/festivals/FestivalsList.jsx";
import FestivalShow from "../components/festivals/FestivalShow.jsx";

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
      },
      {
        path: '/festivals/:id',
        element:<FestivalShow />
      },
    ]
  }
]);

function Router(){
  return<RouterProvider router={router} />
}
export default Router;