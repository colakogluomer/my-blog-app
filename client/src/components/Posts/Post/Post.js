import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";
import { updatePost } from "../../../actions/post";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
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

const Post = ({ _id, title, subTitle, content, image, createdAt }) => {
  const classes = useStyles();
  const convertRelativeTime = (date) => {
    return moment(date).fromNow();
  };
  const dispatch = useDispatch();

  const [file, setFile] = useState(image);
  const [open, setOpen] = useState(false);

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(postSchema),
  });
  const user = JSON.parse(localStorage.getItem("profile"));
  const check = false;
  const onSubmit = (data) => {
    console.log("submit");
    const updatedPost = {
      _id: _id,
      ...data,
      image: file,
      name: user?.result?._id,
    };

    dispatch(updatePost(_id, updatedPost));

    reset();
    setFile(null);
    handleClose();
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open}>
        <DialogTitle>Edit Post</DialogTitle>
        <DialogContent>
          <DialogContentText>{`${title}`}</DialogContentText>
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
                defaultValue={title}
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
                defaultValue={subTitle}
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
                defaultValue={content}
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

      <Card className={classes.card}>
        <CardMedia className={classes.cardMedia} image={image} title="selam" />

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
          {user?.result?._id ? (
            <Button size="medium" color="primary" onClick={handleOpen}>
              Edit
            </Button>
          ) : null}
        </CardActions>
      </Card>
    </>
  );
};

export default Post;
