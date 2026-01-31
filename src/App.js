import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login1 from "./pages/Login1";
import Login2 from "./pages/Login2";
import Login3 from "./pages/Login3";
import Login4 from "./pages/Login4";
import Login5 from "./pages/Login5";
import Login6 from "./pages/Login6";
import Login7 from "./pages/Login7";
import Login8 from "./pages/Login8";
import Login9 from "./pages/Login9";
import Login10 from "./pages/Login10";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login1 />} />
        <Route path="/login1" element={<Login1 />} />
        <Route path="/login2" element={<Login2 />} />
        <Route path="/login3" element={<Login3 />} />
        <Route path="/login4" element={<Login4 />} />
        <Route path="/login5" element={<Login5 />} />
        <Route path="/login6" element={<Login6 />} />
        <Route path="/login7" element={<Login7 />} />
        <Route path="/login8" element={<Login8 />} />
        <Route path="/login9" element={<Login9 />} />
        <Route path="/login10" element={<Login10 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
