import "./App.css";
import { Appbar } from "./components/AppBar";
import { LoginPage } from "./pages/loginPage";
import { MainPage } from "./pages/mainPage/mainPage";

import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Appbar />
        <LoginPage />
        <MainPage />
      </BrowserRouter>
    </>
  );
}

export default App;
