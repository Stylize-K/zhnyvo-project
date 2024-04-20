import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PropTypes from "prop-types";

export const ProductCard = ({ product }) => {
  return (
    <li key={product.id}>
      <Card
        sx={{
          maxWidth: "150px",
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
            height="100%"
            image={product.images[0].link}
            alt={product.name}
          />
        </CardActionArea>
        <CardContent>
          <Typography variant="h7" component="h3" align="left">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="left">
            1 кг
          </Typography>
          <Typography variant="body2" color="text.secondary" align="left">
            {product.price} ₴
          </Typography>
        </CardContent>
      </Card>
    </li>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        link: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
