import { Outlet, Link } from "react-router-dom";
import "./Header.styles.scss";
import { HeaderLinks } from "./headerLinks/headerLinks";
import { useGlobalState } from "../../global/store";
import { HeaderProfile } from "./headerLinks/headerProfile";
import { useState } from "react";

export const Header = () => {
  const state = useGlobalState();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleHamClick = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <>
      <div className="head__container">
        {state.globalState.user.authenticated && (
          <span
            className="material-icons md-48 sm:hidden cursor-pointer"
            onClick={handleHamClick}
          >
            menu
          </span>
        )}

        <Link to="/">
          <strong className="logo">writelove.</strong>
        </Link>
        <HeaderLinks
          globalState={state.globalState}
          setMenuOpen={handleHamClick}
          menuOpen={menuOpen}
        />
        {state.globalState.user.authenticated && <HeaderProfile {...state} />}
      </div>
      <Outlet />
    </>
  );
};
