import { Box, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
export const PasswordConditions = ({ isValid }) => {
  const conditionMetStyle = {
    color: "green",
    display: "list-item",
  };

  const conditionNotMetStyle = {
    color: "red",
    display: "list-item",
  };
  return (
    <Box
      sx={{
        listStyleType: "disc",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        paddingLeft: "20px",
      }}
    >
      <Typography
        // eslint-disable-next-line react/prop-types
        sx={isValid.length >= 8 ? conditionMetStyle : conditionNotMetStyle}
      >
        Мінімум 8 символів
      </Typography>
      <Typography
        sx={/[a-zа-я]/.test(isValid) ? conditionMetStyle : conditionNotMetStyle}
      >
        Одна велика літера
      </Typography>
      <Typography
        sx={/[A-ZА-Я]/.test(isValid) ? conditionMetStyle : conditionNotMetStyle}
      >
        Одна маленька літера
      </Typography>
      <Typography
        sx={/\d/.test(isValid) ? conditionMetStyle : conditionNotMetStyle}
      >
        Одна цифра
      </Typography>
    </Box>
  );
};
