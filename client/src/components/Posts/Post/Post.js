import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import { Link } from "react-router-dom";

import {
  CardMedia,
  Card,
  CardActions,
  Typography,
  Button,
  CardContent,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
}));

const OneCard = ({ _id, title, subTitle, content, tag, image, createdAt }) => {
  const classes = useStyles();
  const convertRelativeTime = (date) => {
    return moment(date).fromNow();
  };
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={image || "https://source.unsplash.com/random"}
        title="selam"
      />

      <CardContent className={classes.cardContent}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {convertRelativeTime(createdAt)}
        </Typography>
        <br />
        <Typography variant="body1">{subTitle}</Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" color="primary">
          <Link to={`/${_id}`}>View</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default OneCard;
