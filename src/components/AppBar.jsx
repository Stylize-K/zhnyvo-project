import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
export const Appbar = ({ toggleMenu, isMenuOpen }) => {
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
              <Typography>Zhnyvo logo</Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </Container>
    </>
  );
};
