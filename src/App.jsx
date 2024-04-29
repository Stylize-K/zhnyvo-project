import "./App.css";
import { Appbar } from "./components/AppBar";
import { LoginPage } from "./pages/loginPage";
import { MainPage } from "./pages/mainPage/mainPage";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignupPage } from "./pages/signupPage";
import { ForgotPasswordPage } from "./pages/forgotPasswordPage";
import { Menu } from "./components/menu/Menu";
import { useEffect, useState } from "react";
import { ProfilePage } from "./pages/profilePage";
import authOperations from "./redux/auth/authOperations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { Box } from "@mui/material";
import { Cart } from "./pages/cartPage";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isRefreshing = useSelector(selectIsRefreshing);
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
      {isRefreshing ? (
        <>
          <Box>...loading</Box>
        </>
      ) : (
        <BrowserRouter>
          <Appbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          {isMenuOpen ? (
            <Menu closeMenu={closeMenu} />
          ) : (
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
              <Route path="/profilePage" element={<ProfilePage />} />
              {/* <LoginPage />
          <MainPage /> */}
            </Routes>
          )}
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
