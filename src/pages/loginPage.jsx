import {
  Box,
  Button,
  Container,
  Divider,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { Link as RouterLink } from "react-router-dom";
export const LoginPage = () => {
  return (
    <>
      <Container>
        <Box mt="70px" mb="32px">
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
            fullWidth
            color="neutralVariant"
            label="Пошта"
          />
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <KeyRoundedIcon />
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
          />
        </Box>
        <Box display="flex" justifyContent="end" mb="24px">
          <Link
            color="tertiary.main"
            underline="hover"
            component={RouterLink}
            to={"/signup"}
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
