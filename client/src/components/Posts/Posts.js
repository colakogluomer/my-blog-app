import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import Post from "./Post/Post";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const Posts = () => {
  const posts = useSelector((state) => state.posts.posts);

  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {posts.map((post) => (
          <Grid item key={post?._id} xs={12} sm={6} md={4}>
            <Post {...post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Posts;
