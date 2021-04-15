import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "../Navbar/Navbar";
import Info from "../Info/Info";
import Posts from "../Posts/Posts";
import Footer from "../Footer/Footer";
import { fetchPosts } from "../../actions/post";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <main>
        <Info />
        <Posts />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
