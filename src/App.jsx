import "./App.css";
import { Appbar } from "./components/AppBar";
import { LoginPage } from "./pages/loginPage";

import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Appbar />
        <LoginPage />
      </BrowserRouter>
    </>
  );
}

export default App;
