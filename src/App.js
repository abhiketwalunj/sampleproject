import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from './Component/Header';
import Review from './Component/Review';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Outlet />}>
              <Route index element={<Header />} />
            </Route>
            <Route path="/" element={<Outlet />}>
              <Route index element={<Review />} />
            </Route>

    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
