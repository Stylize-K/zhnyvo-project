import "./App.css";
import { Appbar } from "./components/AppBar";
import { LoginPage } from "./pages/loginPage";
import { MainPage } from "./pages/mainPage/mainPage";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignupPage } from "./pages/signupPage";
import { ForgotPasswordPage } from "./pages/forgotPasswordPage";
import { Menu } from "./components/menu/Menu";
import { useEffect, useState } from "react";
import { ProfilePage } from "./pages/profilePage";
import authOperations from "./redux/auth/authOperations";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);
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
            <Route path="/profilePage" element={<ProfilePage />} />
            {/* <LoginPage />
          <MainPage /> */}
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
