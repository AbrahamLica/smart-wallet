import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from './Components/Login/Login'
import { GlobalStyle } from "./AppGlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
