import "./App.css";
import { Appbar } from "./components/AppBar";
import { LoginPage } from "./pages/loginPage";
import { MainPage } from "./pages/mainPage/mainPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignupPage } from "./pages/signupPage";
import { ForgotPasswordPage } from "./pages/forgotPasswordPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Appbar />

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
          {/* <LoginPage />
          <MainPage /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
