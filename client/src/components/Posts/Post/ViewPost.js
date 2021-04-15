import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSinglePost } from "../../../actions/post";

const ViewPost = ({ history, location, match }) => {
  const { id } = match.params;
  const dispatch = useDispatch();
  const currentPost = useSelector((state) => state.posts.currentPost);
  useEffect(() => {
    dispatch(fetchSinglePost(id));
  }, [dispatch, id]);

  return <div>{currentPost?.title}</div>;
};

export default ViewPost;
