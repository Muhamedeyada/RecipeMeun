import { useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import SideBar from "./components/sidebar";

function App() {
  const location = useLocation();

  return (
    <div className="flex">
      {location.pathname !== "/404" && <SideBar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorite" element={<FavoritesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
