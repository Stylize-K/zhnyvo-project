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
import { PasswordConditions } from "../utils/PasswordConditions";
import { useDispatch, useSelector } from "react-redux";
import authOperations from "../redux/auth/authOperations";
const validatePassword = (password) => {
  const regex = /^(?=.*[a-zA-Zа-яА-Я])(?=.*\d).{8,}$/;

  return regex.test(password);
};

export const SignupPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    if (newPassword.length === 0 || validatePassword(newPassword)) {
      setPasswordError("");
    } else {
      setPasswordError(
        "Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, and one digit."
      );
    }
  };
  const handleSignup = () => {
    dispatch(authOperations.registration({ email, password }));
  };

  return (
    <>
      <Container maxWidth="xs">
        <Box mt="70px" mb="32px" sx={{ width: "372px" }}>
          <Typography variant="h6" align="left">
            Вітаємо в Zhnyvo
          </Typography>
          <Typography align="left">
            Зареєструйтесь або{" "}
            <Link
              color="tertiary.main"
              underline="hover"
              component={RouterLink}
              to={"/login"}
            >
              увійдіть
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
            fullWidth
            color="neutralVariant"
            label="Пошта"
            name="email"
            value={email}
            onChange={handleEmailChange}
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
            value={password}
            onChange={handlePasswordChange}
            error={Boolean(passwordError)}
          />
        </Box>
        <Box mb="10px" display="flex">
          {password.length > 0 ? (
            passwordError ? (
              <PasswordConditions isValid={password} />
            ) : (
              <PasswordConditions isValid={password} />
            )
          ) : (
            ""
          )}
        </Box>

        <Box>
          <Button
            onClick={handleSignup}
            disabled={loading}
            sx={{
              borderRadius: "16px",
              height: "48px",
              marginBottom: "24px",
            }}
            disableElevation
            fullWidth
            variant="contained"
            color="primary"
          >
            {loading ? "Реєструємо..." : "Зареєструватись"}
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
