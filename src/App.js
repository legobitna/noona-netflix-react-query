import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MoviePage from "./pages/MoviePage/MoviePage";
import MovieDetailPage from "./pages/MovieDetailPage/MovieDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import AppLayout from "./layout/AppLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies">
          <Route index element={<MoviePage />} />
          <Route path=":id" element={<MovieDetailPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
