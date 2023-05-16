import Nav from "./Nav";
import Footer from "./Footer";
import {Fragment, ReactNode} from "react";
import Banner from "./Banner";

interface LayoutTypes {
  children: ReactNode;
}

const Layout = ({children}: LayoutTypes) => {
  return (
    <Fragment>
      <Banner />
      <Nav />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
