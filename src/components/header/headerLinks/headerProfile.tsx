import React from "react";
import "../Header.styles.scss";
import { EActions } from "../../../models/interfaces";
import { useGlobalState } from "../../../global/store";
import WriteModal from "../../dialog/blank-dialog/dialog.component";
import { Input } from "../../form/input/Input.component";
import { toaster } from "../../../utils/toaster";

export const HeaderProfile = () => {
  const { user, setGlobalState } = useGlobalState();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [name, setName] = React.useState(user?.personal_details?.name || "");
  const [profileOpen, setProfileOpen] = React.useState(false);

  const handleProfileClick = () => {
    setProfileOpen((prevValue) => !prevValue);
  };

  const handleSignOut = () => {
    setGlobalState({ type: EActions.UPDATE_AUTHENTICATION, payload: false });
  };
  const handleUpdateUsername = () => {
    setGlobalState({
      type: EActions.UPDATE_USER,
      payload: name,
    });
    setModalOpen(false);
    setProfileOpen(false);
    toaster.success("Name updated successfully.");
  };
  const handleEditName = () => {
    setModalOpen(true);
  };

  return (
    <div className="profile">
      <WriteModal open={modalOpen} setOpen={setModalOpen}>
        <h3 className="text-lg font-medium leading-6 text-gray-900 mb-3">
          Update Username
        </h3>
        <Input value={name} setValue={setName} />
        <button
          className="btn btn-cta mt-2 float-right"
          onClick={handleUpdateUsername}
        >
          Update
        </button>
      </WriteModal>
      <div className="profile__card" onClick={handleProfileClick}>
        <span className="material-icons">face</span>
        <span>{user?.personal_details?.name}</span>
        <span
          className={`material-icons ml-1 transition-transform duration-150 ${
            profileOpen ? "flip-horizontal" : ""
          }`}
        >
          expand_more
        </span>
      </div>
      <div
        className={`profile__menu flex flex-col bg-white ${
          profileOpen ? "profile__menu--open" : ""
        }`}
      >
        <span onClick={handleEditName}>Edit Name</span>
        <span onClick={handleSignOut}>Sign Out</span>
      </div>
    </div>
  );
};
