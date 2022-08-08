import Sidebars from "./Components/Sidebars";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Perusahaan from "./Components/pages/Perusahaan/Perusahaan";

function App() {
  return (
    <>
      <div className="flex">
        <BrowserRouter>
          <Sidebars />
          <Routes>
            <Route path="/perusahaan" element={<Perusahaan/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
