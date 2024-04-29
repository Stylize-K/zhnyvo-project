import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import { VsxIcon } from "react-iconsax-vite";
import CloseIcon from "@mui/icons-material/Close";

export const Cart = () => {
  return (
    <>
      <Container maxWidth="xs">
        <Box display="Flex" alignItems="center" marginBottom="180px">
          <IconButton size="24px">
            <CloseIcon
              sx={{ height: "12px", width: "12px", color: "#121F00" }}
            />
          </IconButton>
          <Typography ml="16px">Кошик</Typography>
        </Box>
        <Box alignItems="center" mb="48px">
          <img
            style={{ height: "200px", width: "240px" }}
            src="src\assets\empty_cart_image.png"
            alt="empty-cart"
          />
        </Box>
        <Box
          sx={{
            boxShadow: "0px 0px 5px 0px #0000001F",
            borderRadius: "12px",
            marginBottom: "16px",
            padding: "16px",
          }}
        >
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: "700",
              fontFamily: "Philosopher",
            }}
          >
            Ваш кошик порожній
          </Typography>
          <Typography>
            Але це не біда! Наш каталог допоможе заповнити його смачними і
            корисними продуктами :)
          </Typography>
        </Box>
        <Box>
          <Button
            disableElevation
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              borderRadius: "16px",
              height: "48px",
            }}
          >
            <Box mr="12px" display="flex">
              <VsxIcon
                iconName="Category"
                type="linear"
                size="24"
                color="#121F00"
              />
            </Box>
            До каталогу
          </Button>
        </Box>
      </Container>
    </>
  );
};
