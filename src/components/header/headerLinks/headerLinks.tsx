import React from "react";
import { Link } from "react-router-dom";
import "../Header.styles.scss";
import { signedInLinks, signedOutLinks } from "../../../data/header.data";
import { useGlobalState } from "../../../global/store";

export const HeaderLinks: (props: {
  setMenuOpen: any;
  menuOpen: boolean;
}) => any = ({ setMenuOpen, menuOpen }) => {
  const { user } = useGlobalState();
  const links = user ? signedInLinks : signedOutLinks;
  return (
    <>
      <nav
        className={`head__links ${user && "head__links__signed-in"} ${
          menuOpen && "head__links__signed-in--open"
        }`}
      >
        {user && (
          <span className="material-icons close" onClick={setMenuOpen}>
            close
          </span>
        )}
        {links.map((link, index) => {
          return (
            <Link to={link.path} className="head__link" key={index}>
              <span>{link.name}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
};
