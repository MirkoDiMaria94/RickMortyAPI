import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { CharacterType } from "../../models/CharacterType";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

type PropsTypes = {
  character: CharacterType;
  handler: (character: CharacterType) => void;
};

const CardCustom: React.FC<PropsTypes> = ({ character, handler }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={character.image}
          alt="api image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {character.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {character.gender}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon onClick={() => handler(character)}/>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardCustom;
