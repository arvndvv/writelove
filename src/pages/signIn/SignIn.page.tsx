import React from "react";
import { useGlobalState } from "../../global/store";
import signinImg from "../../assets/images/signin.jpg";

export const SignIn = () => {
  const { globalState, setGlobalState } = useGlobalState();
  const handleGuestMode = () => {
    setGlobalState({ ...globalState, authenticated: true });
  };
  return (
    <div className="sign-in m-auto">
      <div className="card">
        <div className="card__content">
          <h1 className="card__title">Sign In</h1>
          <p className="card__subtitle">Sign in to your account</p>
          <p className="card__description">
            As of now Authentication is work in progress, meanwhile try guest
            mode.
          </p>
          <div className="card__actions">
            <button className="btn btn-cta" onClick={handleGuestMode}>
              Guest mode
            </button>
          </div>
        </div>
        <div className="card__img">
          <img src={signinImg} alt="signinImg" />
        </div>
      </div>
    </div>
  );
};
