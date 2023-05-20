import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbars from "./Navbars";
import One from "./One";
import Two from "./Two";
import Three from "./Three";


function App() {

  
  return (
    <>
        <BrowserRouter>
        <Navbars />

        <Routes>
          <Route path="/" element={<One />} />
          <Route path="/two" element={<Two />} />
          <Route path="/three" element={<Three />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
