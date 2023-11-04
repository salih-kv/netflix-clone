import { BrowserRouter, Route, Routes } from "react-router-dom";
import Watch from "./routes/watch/watch";
import LandingPage from "./routes/home/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/watch' element={<Watch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
