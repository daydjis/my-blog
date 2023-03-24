import { BrowserRouter, Routes, Route, createBrowserRouter } from "react-router-dom";
import { FoodGeneratorPage } from "./pages/food";
import { GymPage } from "./pages/gympage";
import { HomePage } from "./pages/homepage";
import { NewsPage } from "./pages/newspage";
import { WeatherPage } from "./pages/weather";
import { paths } from "./path"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ paths.home } element={<HomePage />} />
        <Route path={ paths.weather } element={<WeatherPage />} />
        <Route path={ paths.news } element={<NewsPage/>} />
        <Route path={ paths.gym } element={<GymPage />} />
        <Route path={ paths.food } element={<FoodGeneratorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;