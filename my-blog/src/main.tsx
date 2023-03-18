import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './component/home-page/App'
import Header from './component/header/header'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import News from './component/news/news';
import Gym from './component/gym/gym';
import FoodGenerator from './component/food-generator/food-generator';
import Weather from './component/weather-report/wether';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/gym",
    element: <Gym />,
  },
  {
    path: "/weather",
    element: <Weather />,
  },
  {
    path: "/food",
    element: <FoodGenerator />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
