import * as React from "react";
import Nav from "./Nav";
import { Link } from "gatsby";
const Header: React.FC = () => {
  return (
    <header className="flex flex-row flex-wrap w-full justify-between items-end">
      <Link to="/">
        <h3>Dmitry Vdovichenko</h3>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
