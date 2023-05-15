import Nav from "./Nav";
import Footer from "./Footer";
import { Fragment } from "react";
const Layout = (children) => {
  return (
    <Fragment>
      <Nav />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
