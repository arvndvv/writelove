import { Outlet, Link } from "react-router-dom";
import "./Header.styles.scss";
import { HeaderLinks } from "./headerLinks/headerLinks";
import { useGlobalState } from "../../global/store";
import { HeaderProfile } from "./headerLinks/headerProfile";
import { useState } from "react";

export const Header = () => {
  const { user } = useGlobalState();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleHamClick = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <>
      <div className="head__container">
        {user && (
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
        <HeaderLinks setMenuOpen={handleHamClick} menuOpen={menuOpen} />
        {user && <HeaderProfile />}
      </div>
      <Outlet />
    </>
  );
};
