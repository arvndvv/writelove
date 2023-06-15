import React from "react";
import home from "../../assets/images/home.jpg";
import { Link } from "react-router-dom";
import { WriteRoutes } from "../../constants/routes";

export const Landing = () => {
  return (
    <div className="home m-auto">
      <div className="card">
        <div className="card__content">
          <h1 className="card__title">Write what you love</h1>
          <p className="card__subtitle">Blogging made simple</p>
          <p className="card__description">
            Simple and easy to use blogging platform. Write what you love and we
            will take care of the rest.
          </p>
          <div className="card__actions">
            <Link to={WriteRoutes.SIGN_IN}>
              <button className="btn btn-cta">SignIn now</button>
            </Link>
          </div>
        </div>
        <div className="card__img">
          <img src={home} alt="signinImg" />
        </div>
      </div>
    </div>
  );
};
