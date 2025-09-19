import React from "react";
import logoImg from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <h1 className="logo">
        <Link to="/">
          <img src={logoImg} alt="logo" />
          <span>Petite</span> <span>Objet</span>
        </Link>
      </h1>

      <nav className="gnb">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/categories">CATEGORIES</NavLink>
        <NavLink to="/collections">COLLECTIONS</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
