import React, { useEffect, useState } from "react";
import "./Overlay.styles.scss";
import { createNewBlog } from "../../../services/blog.service";
import { toaster } from "../../../utils/toaster";
import { useGlobalState } from "../../../global/store";
import WriteEditor from "../../editor/Editor.component";
import { EActions } from "../../../models/interfaces";

export default function EditorOverlay({
  openEditor,
  setOpenEditor,
  topic,
}: any) {
  const [state, setState] = useState("");
  const { user, setGlobalState } = useGlobalState();
  useEffect(() => {
    if (openEditor) document.body.style.overflowY = "hidden";
    else {
      document.body.style.overflowY = "auto";
      document.body.style.overflowX = "hidden";
    }
  }, [openEditor, state]);

  const handleGenerate = () => {
    const newBlog = createNewBlog(topic, state, user);
    setGlobalState({
      type: EActions.ADD_BLOG,
      payload: newBlog,
    });
    setState("");
    toaster.success("Blog generated successfully.");
    setOpenEditor(false);
  };

  return (
    <>
      <div className={`overlay ${openEditor && "overlay--open"}`}>
        <div className="overlay__content">
          <div className="overlay__content--header">
            <h2 className="overlay__content--title text-2xl font-bold">
              {topic?.name || "Blog Editor"}
            </h2>
            <span
              className="material-icons cursor-pointer"
              onClick={() => setOpenEditor(false)}
            >
              close
            </span>
          </div>
          <div className="overlay__content--body">
            <WriteEditor
              state={state}
              setState={setState}
              openEditor={openEditor}
            />
          </div>
          <div className="overlay__content--footer">
            <button
              className="btn btn-cta float-right"
              onClick={handleGenerate}
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
