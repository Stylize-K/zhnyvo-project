import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { VsxIcon } from "react-iconsax-vite";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { useEffect } from "react";
import authOperations from "../../redux/auth/authOperations";

export const Menu = ({ closeMenu }) => {
  const user = useSelector(selectUser);
  console.log(user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getPersonalInfo());
  }, [dispatch]);
  const handleButtonClick = () => {
    closeMenu();
  };
  return (
    <>
      <Container maxWidth="xs">
        <Box mt="32px" mb="32px" pt="12px" pb="12px">
          <Button
            // disableElevation
            fullWidth
            variant="text"
            color="neutralVariant"
            component={RouterLink}
            to={user.isAuthenticated ? "/profilePage" : "/signup"}
            sx={{
              borderRadius: "16px",
              height: "68px",
              justifyContent: "space-between",
              boxShadow: " 0px 0px 5px 0px #0000001F",
              alignItems: "center",
            }}
            onClick={handleButtonClick}
          >
            {user.isAuthenticated ? (
              <>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <AccountCircleOutlinedIcon
                    sx={{ marginRight: "16px", marginLeft: "16px" }}
                  />
                  <Box height="44px" textAlign="left" textTransform="none">
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "16px",
                        color: "#1C1F21",
                      }}
                    >
                      {user.isAuthenticated
                        ? user.user.name
                          ? user.user.name
                          : "Не вказано"
                        : null}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#484647",
                      }}
                    >
                      {user.isAuthenticated
                        ? user.user.email
                        : "Вхід та реєстрація"}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    justifySelf: "end",
                    gridColumn: "2 / span 1",
                    marginRight: "16px",
                  }}
                >
                  <VsxIcon
                    iconName="ArrowRight2"
                    type="linear"
                    size="24"
                    color="#1C1F21"
                  />
                </Box>
              </>
            ) : (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <AccountCircleOutlinedIcon
                  sx={{ marginRight: "16px", marginLeft: "16px" }}
                />
                <Box textAlign="left" textTransform="none">
                  <Typography
                    sx={{
                      fontSize: "16px",
                      color: "#484647",
                    }}
                  >
                    Вхід та реєстрація
                  </Typography>
                </Box>
              </Box>
            )}
          </Button>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          flexGrow={1}
          mb="24px"
        >
          <Button
            fullWidth
            variant="text"
            color="neutralVariant"
            sx={{
              paddingLeft: "16px",
              paddingRight: "16px",
              borderRadius: "16px",
              height: "48px",
              justifyContent: "flex-start",
            }}
          >
            <Box display="flex" mr="16px">
              <VsxIcon
                iconName="ShoppingCart"
                type="linear"
                size="24"
                color="#000000"
                style={{ marginRight: "16px" }}
              />
            </Box>
            Кошик
          </Button>
          <Button
            fullWidth
            variant="text"
            color="neutralVariant"
            sx={{
              paddingLeft: "16px",
              paddingRight: "16px",
              borderRadius: "16px",
              height: "48px",
              justifyContent: "flex-start",
            }}
          >
            <Box display="flex" mr="16px">
              <VsxIcon
                iconName="MessageText"
                type="linear"
                size="24"
                color="#000000"
                style={{ marginRight: "16px" }}
              />
            </Box>
            Чат
          </Button>
          <Button
            fullWidth
            variant="text"
            color="neutralVariant"
            sx={{
              paddingLeft: "16px",
              paddingRight: "16px",
              borderRadius: "16px",
              height: "48px",
              justifyContent: "flex-start",
            }}
          >
            <Box display="flex" mr="16px">
              <VsxIcon
                iconName="BagTimer"
                type="linear"
                size="24"
                color="#000000"
                style={{ marginRight: "16px" }}
              />
            </Box>
            Історія замовлень
          </Button>
          <Button
            fullWidth
            variant="text"
            color="neutralVariant"
            sx={{
              paddingLeft: "16px",
              paddingRight: "16px",
              borderRadius: "16px",
              height: "48px",
              justifyContent: "flex-start",
            }}
          >
            <Box display="flex" mr="16px">
              <VsxIcon
                iconName="Shop"
                type="linear"
                size="24"
                color="#000000"
                style={{ marginRight: "16px" }}
              />
            </Box>
            Хочу продавати на zhnyvo.ua
          </Button>
        </Box>
        <Divider />
        <Box
          alignItems="flex-start"
          display="flex"
          flexDirection="column"
          flexGrow={1}
          mb="24px"
          mt="24px"
        >
          <Button
            fullWidth
            variant="text"
            color="neutralVariant"
            sx={{
              paddingLeft: "16px",
              paddingRight: "16px",
              borderRadius: "16px",
              height: "48px",
              justifyContent: "flex-start",
            }}
          >
            <Box display="flex" mr="16px">
              <VsxIcon
                iconName="Category2"
                type="linear"
                size="24"
                color="#000000"
                style={{ marginRight: "16px" }}
              />
            </Box>
            Каталог товарів
          </Button>
          <Button
            fullWidth
            variant="text"
            color="neutralVariant"
            sx={{
              paddingLeft: "16px",
              paddingRight: "16px",
              borderRadius: "16px",
              height: "48px",
              justifyContent: "flex-start",
            }}
          >
            <Box display="flex" mr="16px">
              <VsxIcon
                iconName="Heart"
                type="linear"
                size="24"
                color="#000000"
                style={{ marginRight: "16px" }}
              />
            </Box>
            Мої улюблені
          </Button>
          <Button
            fullWidth
            variant="text"
            color="neutralVariant"
            sx={{
              paddingLeft: "16px",
              paddingRight: "16px",
              borderRadius: "16px",
              height: "48px",
              justifyContent: "flex-start",
            }}
          >
            <Box display="flex" mr="16px">
              <VsxIcon
                iconName="Note"
                type="linear"
                size="24"
                color="#000000"
                style={{ marginRight: "16px" }}
              />
            </Box>
            Мої списки
          </Button>
        </Box>

        <Divider />
        {/* <Divider orientation="vertical" /> */}
        <Typography
          sx={{ fontWeight: "700" }}
          mt="24px"
          variant="h6"
          textAlign="left"
        >
          Допомога
        </Typography>
        <Box
          alignItems="flex-start"
          display="flex"
          flexDirection="column"
          flexGrow={1}
          mb="24px"
          mt="24px"
          sx={{ borderLeft: "1px solid rgba(0, 0, 0, 0.12)" }}
        >
          <Button
            fullWidth
            variant="text"
            color="neutralVariant"
            sx={{
              paddingLeft: "16px",
              paddingRight: "16px",
              borderRadius: "16px",
              height: "48px",
              justifyContent: "flex-start",
              marginLeft: "20px",
            }}
          >
            Доставка та оплата
          </Button>
          <Button
            fullWidth
            variant="text"
            color="neutralVariant"
            sx={{
              paddingLeft: "16px",
              paddingRight: "16px",
              borderRadius: "16px",
              height: "48px",
              justifyContent: "flex-start",
              marginLeft: "20px",
            }}
          >
            Технічна підтримка
          </Button>
          <Button
            fullWidth
            variant="text"
            color="neutralVariant"
            sx={{
              paddingLeft: "16px",
              paddingRight: "16px",
              borderRadius: "16px",
              height: "48px",
              justifyContent: "flex-start",
              marginLeft: "20px",
            }}
          >
            Часті запитання
          </Button>
        </Box>

        <Typography
          sx={{ fontWeight: "700" }}
          mt="24px"
          variant="h6"
          textAlign="left"
        >
          Ми в соціальних мережах
        </Typography>
        <Box
          alignItems="flex-start"
          display="flex"
          flexDirection="row"
          flexGrow={1}
          mt="24px"
        >
          <IconButton
            sx={{
              boxShadow: "0px 0px 5px 0px #0000001F",
              marginRight: "12px",
              width: "40px",
            }}
          >
            <VsxIcon
              iconName="Instagram"
              type="linear"
              size="24"
              color="#000000"
              style={{ marginRight: "16px" }}
            />
          </IconButton>
          <IconButton
            sx={{
              boxShadow: "0px 0px 5px 0px #0000001F",
              marginRight: "12px",
              width: "40px",
            }}
          >
            <VsxIcon
              iconName="Facebook"
              type="linear"
              size="24"
              color="#000000"
              style={{ marginRight: "16px" }}
            />
          </IconButton>
          <IconButton
            sx={{
              boxShadow: "0px 0px 5px 0px #0000001F",
              marginRight: "12px",
              width: "40px",
            }}
          >
            <VsxIcon
              iconName="Youtube"
              type="linear"
              size="24"
              color="#000000"
              style={{ marginRight: "16px" }}
            />
          </IconButton>
        </Box>
      </Container>
    </>
  );
};
