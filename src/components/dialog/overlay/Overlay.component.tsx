import React, { useEffect, useState } from "react";
import "./Overlay.styles.scss";
import Editor from "../../editor/Editor.component";

export default function Overlay({
  openEditor,
  setOpenEditor,
  title = "Blog Editor",
}: any) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <>
      <div className={`overlay ${openEditor && "overlay--open"}`}>
        <div className="overlay__content">
          <div className="overlay__content--header">
            <h2 className="overlay__content--title text-2xl font-bold">
              {title}
            </h2>
            <span
              className="material-icons cursor-pointer"
              onClick={() => setOpenEditor(false)}
            >
              close
            </span>
          </div>
          <div className="overlay__content--body">
            <Editor />
          </div>
        </div>
      </div>
    </>
  );
}
