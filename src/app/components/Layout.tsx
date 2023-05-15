import Nav from "./Nav";
import Footer from "./Footer";
import { Fragment, ReactNode } from "react";
const Layout = (children: ReactNode) => {
  return (
    <Fragment>
      <Nav />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
