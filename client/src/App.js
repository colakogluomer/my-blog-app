import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./Navbar/Navbar";
import Info from "./Info/Info";
import Cards from "./Cards/Cards";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <main>
        <Info />
        <Cards />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
