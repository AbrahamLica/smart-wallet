import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from './Components/Login/Login'
// import { GlobalStyle } from "./AppGlobalStyles";

function App() {
  return (
    <>
      {/* <GlobalStyle /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
