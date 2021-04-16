import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSinglePost } from "../../../actions/post";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    //marginBottom: theme.spacing(4),
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
}));

const ViewPost = ({ history, location, match }) => {
  const classes = useStyles();
  const { id } = match.params;
  const dispatch = useDispatch();
  const currentPost = useSelector((state) => state.posts.currentPost);
  useEffect(() => {
    dispatch(fetchSinglePost(id));
  }, [dispatch, id]);

  return (
    <>
      <Paper
        className={classes.mainFeaturedPost}
        style={{ backgroundImage: `url(${currentPost?.image})` }}
      >
        {
          <img
            style={{ display: "none" }}
            src={currentPost?.image}
            alt={currentPost?.imageText}
          />
        }

        <div className={classes.overlay} />
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                {currentPost?.title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {currentPost?.subTitle}
              </Typography>
              <Link variant="subtitle1" href="#">
                {currentPost?.linkText}
              </Link>
            </div>
          </Grid>
        </Grid>
      </Paper>
      <Grid>
        <Container component="main" className={classes.main} maxWidth="md">
          <Typography variant="body1" component="h1" gutterBottom>
            {currentPost?.content}
          </Typography>
        </Container>
      </Grid>
    </>
  );
};

export default ViewPost;
