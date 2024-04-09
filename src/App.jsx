import "./App.css";
import { Appbar } from "./components/AppBar";
import { LoginPage } from "./pages/loginPage";
import { MainPage } from "./pages/mainPage/mainPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignupPage } from "./pages/signupPage";
import { ForgotPasswordPage } from "./pages/forgotPasswordPage";
import { Menu } from "./components/menu/Menu";
import { useState } from "react";
import { ProfilePage } from "./pages/profilePage";
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <BrowserRouter>
        <Appbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        {isMenuOpen ? (
          <Menu closeMenu={closeMenu} />
        ) : (
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
            {/* <LoginPage />
          <MainPage /> */}
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
