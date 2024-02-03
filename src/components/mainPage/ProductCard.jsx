import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export const ProductCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 240,
        boxShadow: "none",
        border: "none",
        overflow: "visible",
      }}
    >
      <CardActionArea>
        <CardMedia
          sx={{
            borderRadius: "16px",
            boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.12)",
          }}
          component="img"
          height="320"
          image="/src/assets/tomato-1.jpg"
          alt="tomato"
        />
      </CardActionArea>
      <CardContent>
        <Typography variant="h7" component="h3" align="left">
          Помідор червоний
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left">
          1 кг
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left">
          34.95 ₴
        </Typography>
      </CardContent>
    </Card>
  );
};
