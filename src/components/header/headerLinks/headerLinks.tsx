import React from "react";
import { Link } from "react-router-dom";
import "../Header.styles.scss";
import { signedInLinks, signedOutLinks } from "../../../data/header.data";
import { IGlobalState } from "../../../models/interfaces";

export const HeaderLinks: (props: {
  globalState: IGlobalState;
  setMenuOpen: any;
  menuOpen: boolean;
}) => any = ({ globalState, setMenuOpen, menuOpen }) => {
  const links = globalState.user.authenticated ? signedInLinks : signedOutLinks;
  return (
    <>
      <nav
        className={`head__links ${
          globalState.user.authenticated && "head__links__signed-in"
        } ${menuOpen && "head__links__signed-in--open"}`}
      >
        {globalState.user.authenticated && (
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
