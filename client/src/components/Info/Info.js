import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import CreateIcon from "@material-ui/icons/Create";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/post";

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
}));
const postSchema = yup.object().shape({
  title: yup.string().required(),
  subTitle: yup.string().required(),
  content: yup.string().min(20).required(),
});

const Info = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false);

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(postSchema),
  });
  const user = JSON.parse(localStorage.getItem("profile"));

  const onSubmit = (data) => {
    dispatch(createPost({ ...data, image: file, name: user?.result?._id }));
    clearForm();
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const clearForm = () => {
    reset();
    setFile(null);
    handleClose();
  };
  return (
    <>
      <Dialog open={open}>
        <DialogTitle>Create Post</DialogTitle>
        <DialogContent>
          <DialogContentText>CREATE</DialogContentText>
          <div className={classes.root}>
            <form
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextField
                id="title"
                label="Başlık"
                name="title"
                variant="outlined"
                className={classes.textField}
                size="small"
                inputRef={register}
                fullWidth
              />
              <TextField
                id="subTitle"
                label="Alt Başlık"
                name="subTitle"
                variant="outlined"
                className={classes.textField}
                size="small"
                inputRef={register}
                fullWidth
              />

              <TextField
                id="content"
                label="İçerik"
                name="content"
                multiline
                size="small"
                inputRef={register}
                rows={4}
                className={classes.textField}
                variant="outlined"
                fullWidth
              />

              <FileBase64
                multiple={false}
                onDone={({ base64 }) => setFile(base64)}
              />
            </form>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit">
            Vazgeç
          </Button>
          <Button
            type="submit"
            onClick={() => handleSubmit(onSubmit)()}
            color="primary"
            variant="outlined"
          >
            Yayınla
          </Button>
        </DialogActions>
      </Dialog>

      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Ömer Çolakoğlu
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don&apos;t simply skip over it entirely.
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  href="https://github.com/colakogluomer"
                  target="_blank"
                >
                  <GitHubIcon className={classes.icon} /> My Github Page
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  color="primary"
                  href="https://www.linkedin.com/in/colakogluomer/"
                  target="_blank"
                >
                  <LinkedInIcon className={classes.icon} />
                  My Linkedin Page
                </Button>
              </Grid>
              <Grid item>
                {user?.result?._id ? (
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleOpen}
                  >
                    <CreateIcon className={classes.icon} />
                    Create New Post
                  </Button>
                ) : null}
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Info;
