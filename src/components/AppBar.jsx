import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/auth/selectors";
import { useEffect } from "react";
import authOperations from "../redux/auth/authOperations";
export const Appbar = ({ toggleMenu, isMenuOpen }) => {
  const user = useSelector(selectUser);
  console.log(user);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(authOperations.getPersonalInfo());
  // }, [dispatch]);
  return (
    <>
      <Container maxWidth="xs">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            elevation={0}
            sx={{ backgroundColor: "#fff" }}
            position="static"
          >
            <Toolbar disableGutters={true}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleMenu}
              >
                {isMenuOpen ? <KeyboardBackspaceOutlinedIcon /> : <MenuIcon />}
              </IconButton>
              <Button
                color="neutralVariant"
                component={RouterLink}
                to={user.isAuthenticated ? "/" : "/signup"}
              >
                Zhnyvo logo
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </Container>
    </>
  );
};
