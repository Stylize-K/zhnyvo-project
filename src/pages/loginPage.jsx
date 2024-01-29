import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import Visibility from "@mui/icons-material/Visibility";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Container maxWidth="xs">
        <Box mt="70px" mb="32px" sx={{ width: "372px" }}>
          <Typography variant="h6" align="left">
            З поверненням
          </Typography>
          <Typography align="left">
            Увійдіть або{" "}
            <Link
              color="tertiary.main"
              underline="hover"
              component={RouterLink}
              to={"/signup"}
            >
              зареєструйтесь
            </Link>
            , щоб відслідковувати свої замовлення, додавати в улюблене та
            створювати списки.
          </Typography>
        </Box>
        <Box flexGrow={1}>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutlineRoundedIcon />
                </InputAdornment>
              ),
              style: {
                marginBottom: "20px",
                outline: "none",
                borderRadius: "16px",
              },
            }}
            color="neutralVariant"
            label="Пошта"
            fullWidth
            name="email"
          />
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <KeyRoundedIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
              style: {
                marginBottom: "20px",
                outline: "none",
                borderRadius: "16px",
              },
            }}
            fullWidth
            color="neutralVariant"
            label="Пароль"
            name="password"
            type={showPassword ? "text" : "password"}
          />
        </Box>
        <Box display="flex" justifyContent="end" mb="24px">
          <Link
            color="tertiary.main"
            underline="hover"
            component={RouterLink}
            to={"/forgotPassword"}
          >
            Забули пароль?
          </Link>
        </Box>
        <Box>
          <Button
            sx={{ borderRadius: "16px", height: "48px", marginBottom: "24px" }}
            disableElevation
            fullWidth
            variant="contained"
            color="primary"
          >
            Увійти
          </Button>
        </Box>
        <Divider sx={{ marginBottom: "24px" }}>Або</Divider>
        <Box display="flex">
          <Button
            disableElevation
            fullWidth
            variant="outlined"
            color="neutralVariant"
            sx={{
              borderRadius: "16px",
              height: "48px",
              marginRight: "8px",
            }}
          >
            <GoogleIcon sx={{ color: "#4285F4", marginRight: "8px" }} />
            Google
          </Button>
          <Button
            disableElevation
            fullWidth
            variant="outlined"
            color="neutralVariant"
            sx={{ borderRadius: "16px", height: "48px" }}
          >
            <FacebookOutlinedIcon
              sx={{ color: "#4267B2", marginRight: "8px" }}
            />
            Facebook
          </Button>
        </Box>
      </Container>
    </>
  );
};
