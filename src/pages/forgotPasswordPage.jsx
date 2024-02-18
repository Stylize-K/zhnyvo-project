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
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { Link as RouterLink } from "react-router-dom";
export const ForgotPasswordPage = () => {
  return (
    <>
      <Container maxWidth="xs">
        <Box mt="70px" mb="32px" sx={{ width: "372px" }}>
          <Typography variant="h6" align="left">
            Скидання пароля
          </Typography>
          <Typography align="left">
            Без паніки. Ми надішлемо вам на пошту тимчасовий пароль для входу
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
        </Box>
        <Box display="flex" justifyContent="end" mb="24px">
          <Link
            color="tertiary.main"
            underline="hover"
            component={RouterLink}
            to={"/login"}
          >
            Згадали пароль?
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
            Надіслати пароль
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
