import {
  Box,
  Button,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { VsxIcon } from "react-iconsax-vite";
import { useState } from "react";

export const ProfilePage = () => {
  const [isEditingContacts, setIsEditingContacts] = useState(false);
  const [isEditingPersonalInfo, setIsEditingPersonalInfo] = useState(false);
  const [isEditingLoginDetails, setIsEditingLoginDetails] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);

  const cancelEditPersonalInfo = () => {
    setIsEditingPersonalInfo(false);
  };

  const toggleEditContacts = () => {
    setIsEditingContacts(!isEditingContacts);
  };

  const toggleEditPersonalInfo = () => {
    setIsEditingPersonalInfo(!isEditingPersonalInfo);
  };

  const cancelEditContacts = () => {
    setIsEditingContacts(false);
  };

  const toggleEditLoginDetails = () => {
    setIsEditingLoginDetails(!isEditingLoginDetails);
  };

  const cancelEditLoginDetails = () => {
    setIsEditingLoginDetails(false);
  };

  const toggleEditAddress = () => {
    setIsEditingAddress(!isEditingAddress);
  };

  const cancelEditAddress = () => {
    setIsEditingAddress(false);
  };

  return (
    <>
      <Container maxWidth="xs">
        <Box>
          <Box mb="16px">
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: "700",
                fontFamily: "Philosopher",
                textAlign: "left",
              }}
            >
              Профіль
            </Typography>
          </Box>

          <Box
            minHeight="180px"
            sx={{
              boxShadow: "0px 0px 5px 0px #0000001F",
              borderRadius: "12px",
              marginBottom: "16px",
              padding: "16px",
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="subtitle1"
                fontWeight="700"
                fontFamily="Mulish"
                fontSize="16px"
              >
                Персональні дані
              </Typography>
              {isEditingPersonalInfo ? null : (
                <IconButton onClick={toggleEditPersonalInfo}>
                  <VsxIcon
                    iconName="Edit"
                    type="linear"
                    size="24"
                    color="#1C1F21"
                  />
                </IconButton>
              )}
            </Box>

            {isEditingPersonalInfo ? (
              <Box>
                <Box mt="20px">
                  <TextField
                    InputProps={{
                      style: {
                        outline: "none",
                        borderRadius: "16px",
                      },
                    }}
                    fullWidth
                    color="neutralVariant"
                    label="Ім’я"
                    name="name"
                    // value={email}
                    // onChange={handleEmailChange}
                  />
                </Box>
                <Box mt="20px">
                  <TextField
                    InputProps={{
                      style: {
                        outline: "none",
                        borderRadius: "16px",
                      },
                    }}
                    fullWidth
                    color="neutralVariant"
                    label="Дата народження"
                    name="DOB"
                    // value={email}
                    // onChange={handleEmailChange}
                  />
                </Box>
                {isEditingPersonalInfo ? (
                  <Box mt="16px" display="flex">
                    <Button
                      onClick={cancelEditPersonalInfo}
                      color="logout"
                      fullWidth
                      disableElevation
                      variant="contained"
                      sx={{
                        borderRadius: "12px",
                        height: "40px",
                        marginRight: "16px",
                      }}
                    >
                      Скасувати
                    </Button>
                    <Button
                      disableElevation
                      fullWidth
                      variant="contained"
                      sx={{ borderRadius: "12px", height: "40px" }}
                    >
                      Зберегти
                    </Button>
                  </Box>
                ) : null}
              </Box>
            ) : (
              <Box>
                <Box>
                  <Typography
                    textAlign="left"
                    sx={{
                      fontSize: "14px",
                      color: "#484647",
                      marginTop: "16px",
                    }}
                  >
                    Ім’я
                  </Typography>
                  <Typography
                    textAlign="left"
                    sx={{
                      color: "#1C1F21",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    Не вказано
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    textAlign="left"
                    sx={{
                      fontSize: "14px",
                      color: "#484647",
                      marginTop: "16px",
                    }}
                  >
                    Дата народження
                  </Typography>
                  <Typography
                    textAlign="left"
                    sx={{
                      color: "#1C1F21",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    Не вказано
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>

          <Box
            minHeight="180px"
            sx={{
              boxShadow: "0px 0px 5px 0px #0000001F",
              borderRadius: "12px",
              marginBottom: "16px",
              padding: "16px",
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="subtitle1"
                fontWeight="700"
                fontFamily="Mulish"
                fontSize="16px"
              >
                Контакти
              </Typography>
              {isEditingContacts ? null : (
                <IconButton onClick={toggleEditContacts}>
                  <VsxIcon
                    iconName="Edit"
                    type="linear"
                    size="24"
                    color="#1C1F21"
                  />
                </IconButton>
              )}
            </Box>
            {isEditingContacts ? (
              <Box>
                <Box mt="20px">
                  <TextField
                    InputProps={{
                      style: {
                        outline: "none",
                        borderRadius: "16px",
                      },
                    }}
                    fullWidth
                    color="neutralVariant"
                    label="Ел. пошта"
                    name="email"
                    // value={email}
                    // onChange={handleEmailChange}
                  />
                </Box>
                <Box mt="20px">
                  <TextField
                    InputProps={{
                      style: {
                        outline: "none",
                        borderRadius: "16px",
                      },
                    }}
                    fullWidth
                    color="neutralVariant"
                    label="Телефон"
                    name="phone"
                    // value={email}
                    // onChange={handleEmailChange}
                  />
                </Box>
                {isEditingContacts ? (
                  <Box mt="16px" display="flex">
                    <Button
                      onClick={cancelEditContacts}
                      color="logout"
                      fullWidth
                      disableElevation
                      variant="contained"
                      sx={{
                        borderRadius: "12px",
                        height: "40px",
                        marginRight: "16px",
                      }}
                    >
                      Скасувати
                    </Button>
                    <Button
                      disableElevation
                      fullWidth
                      variant="contained"
                      sx={{ borderRadius: "12px", height: "40px" }}
                    >
                      Зберегти
                    </Button>
                  </Box>
                ) : null}
              </Box>
            ) : (
              <Box>
                <Box>
                  <Typography
                    textAlign="left"
                    sx={{
                      fontSize: "14px",
                      color: "#484647",
                      marginTop: "16px",
                    }}
                  >
                    Ел. пошта
                  </Typography>
                  <Typography
                    textAlign="left"
                    sx={{
                      color: "#1C1F21",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    Не вказано
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    textAlign="left"
                    sx={{
                      fontSize: "14px",
                      color: "#484647",
                      marginTop: "16px",
                    }}
                  >
                    Телефон
                  </Typography>
                  <Typography
                    textAlign="left"
                    sx={{
                      color: "#1C1F21",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    Не вказано
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
          <Box
            minHeight="180px"
            sx={{
              boxShadow: "0px 0px 5px 0px #0000001F",
              borderRadius: "12px",
              marginBottom: "16px",
              padding: "16px",
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="subtitle1"
                fontWeight="700"
                fontFamily="Mulish"
                fontSize="16px"
              >
                Адреси доставки
              </Typography>
            </Box>

            {isEditingAddress ? (
              <Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mt="8px"
                >
                  <Typography>Адреса 1</Typography>
                  <IconButton>
                    <VsxIcon
                      iconName="Trash"
                      type="linear"
                      size="24"
                      color="#1C1F21"
                    />
                  </IconButton>
                </Box>
                <Box mt="16px">
                  <TextField
                    InputProps={{
                      style: {
                        outline: "none",
                        borderRadius: "16px",
                      },
                    }}
                    fullWidth
                    color="neutralVariant"
                    label="Місто"
                    name="city"
                    // value={email}
                    // onChange={handleEmailChange}
                  />
                </Box>
                <Box mt="16px">
                  <TextField
                    InputProps={{
                      style: {
                        outline: "none",
                        borderRadius: "16px",
                      },
                    }}
                    fullWidth
                    color="neutralVariant"
                    label="Вулиця"
                    name="street"
                    // value={email}
                    // onChange={handleEmailChange}
                  />
                </Box>
                <Box display="flex">
                  <Box mt="16px" mr="16px">
                    <TextField
                      InputProps={{
                        style: {
                          outline: "none",
                          borderRadius: "16px",
                        },
                      }}
                      fullWidth
                      color="neutralVariant"
                      label="Будинок"
                      name="building"
                      // value={email}
                      // onChange={handleEmailChange}
                    />
                  </Box>
                  <Box mt="16px">
                    <TextField
                      InputProps={{
                        style: {
                          outline: "none",
                          borderRadius: "16px",
                        },
                      }}
                      fullWidth
                      color="neutralVariant"
                      label="Квартира"
                      name="appartment"
                      // value={email}
                      // onChange={handleEmailChange}
                    />
                  </Box>
                </Box>

                {isEditingAddress ? (
                  <Box mt="16px" display="flex">
                    <Button
                      onClick={cancelEditAddress}
                      color="logout"
                      fullWidth
                      disableElevation
                      variant="contained"
                      sx={{
                        borderRadius: "12px",
                        height: "40px",
                        marginRight: "16px",
                      }}
                    >
                      Скасувати
                    </Button>
                    <Button
                      disableElevation
                      fullWidth
                      variant="contained"
                      sx={{ borderRadius: "12px", height: "40px" }}
                    >
                      Зберегти
                    </Button>
                  </Box>
                ) : null}
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  padding: "16px",
                  backgroundColor: "#F6F6F8",
                  borderRadius: "8px",
                  marginTop: "16px",
                  minHeight: "90px",
                }}
              >
                <Box mt="2px">
                  <VsxIcon
                    iconName="InfoCircle"
                    type="linear"
                    size="24"
                    color="#5D6065"
                  />
                </Box>

                <Typography
                  textAlign="left"
                  sx={{
                    fontSize: "14px",
                    color: "#484647",
                    marginLeft: "8px",
                  }}
                >
                  Немає збережених адрес. Ви можете додати нову адресу тут або
                  зробивши замовлення.
                </Typography>
              </Box>
            )}
          </Box>
          {isEditingAddress ? null : (
            <Button
              onClick={toggleEditAddress}
              disableElevation
              fullWidth
              variant="contained"
              sx={{
                borderRadius: "12px",
                height: "40px",
                marginBottom: "16px",
              }}
            >
              Додати адресу
            </Button>
          )}

          <Box
            minHeight="180px"
            sx={{
              boxShadow: "0px 0px 5px 0px #0000001F",
              borderRadius: "12px",
              marginBottom: "16px",
              padding: "16px",
              marginTop: "16px",
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="subtitle1"
                fontWeight="700"
                fontFamily="Mulish"
                fontSize="16px"
              >
                Логін та захист
              </Typography>
              {isEditingLoginDetails ? null : (
                <IconButton onClick={toggleEditLoginDetails}>
                  <VsxIcon
                    iconName="Edit"
                    type="linear"
                    size="24"
                    color="#1C1F21"
                  />
                </IconButton>
              )}
            </Box>
            {isEditingLoginDetails ? (
              <Box>
                <Box mt="20px">
                  <TextField
                    InputProps={{
                      style: {
                        outline: "none",
                        borderRadius: "16px",
                      },
                    }}
                    fullWidth
                    color="neutralVariant"
                    label="Пароль"
                    name="password"
                    // value={email}
                    // onChange={handleEmailChange}
                  />
                </Box>
                <Box mt="20px">
                  <TextField
                    InputProps={{
                      style: {
                        outline: "none",
                        borderRadius: "16px",
                      },
                    }}
                    fullWidth
                    color="neutralVariant"
                    label="Ел. пошта"
                    name="email"
                    // value={email}
                    // onChange={handleEmailChange}
                  />
                </Box>
                {isEditingLoginDetails ? (
                  <Box mt="16px" display="flex">
                    <Button
                      onClick={cancelEditLoginDetails}
                      color="logout"
                      fullWidth
                      disableElevation
                      variant="contained"
                      sx={{
                        borderRadius: "12px",
                        height: "40px",
                        marginRight: "16px",
                      }}
                    >
                      Скасувати
                    </Button>
                    <Button
                      disableElevation
                      fullWidth
                      variant="contained"
                      sx={{ borderRadius: "12px", height: "40px" }}
                    >
                      Зберегти
                    </Button>
                  </Box>
                ) : null}
              </Box>
            ) : (
              <Box>
                <Box>
                  <Typography
                    textAlign="left"
                    sx={{
                      fontSize: "14px",
                      color: "#484647",
                      marginTop: "16px",
                    }}
                  >
                    Пароль
                  </Typography>
                  <Typography
                    textAlign="left"
                    sx={{
                      color: "#1C1F21",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    **************
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    textAlign="left"
                    sx={{
                      fontSize: "14px",
                      color: "#484647",
                      marginTop: "16px",
                    }}
                  >
                    Ел. Пошта
                  </Typography>
                  <Typography
                    textAlign="left"
                    sx={{
                      color: "#1C1F21",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    Пошта
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>

          <Box mb="16px">
            <Button
              color="logout"
              fullWidth
              disableElevation
              variant="contained"
              sx={{ borderRadius: "12px", height: "40px" }}
            >
              <VsxIcon
                iconName="LogoutCurve"
                type="linear"
                size="24"
                color="#1C1F21"
              />
              <Box ml="16px">Вийти з акаунту</Box>
            </Button>
          </Box>
          <Box>
            <Button
              color="error"
              fullWidth
              disableElevation
              variant="contained"
              sx={{ borderRadius: "12px", height: "40px" }}
            >
              <VsxIcon
                iconName="Trash"
                type="linear"
                size="24"
                color="#FFFFFF"
              />
              <Box ml="16px">Видалити акаунт</Box>
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};
