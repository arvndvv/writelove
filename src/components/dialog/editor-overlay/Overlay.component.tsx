import React, { useEffect, useState } from "react";
import "./Overlay.styles.scss";
import { createBlog } from "../../../services/blog.service";
import { toaster } from "../../../utils/toaster";
import { useGlobalState } from "../../../global/store";
import WriteEditor from "../../editor/Editor.component";

export default function EditorOverlay({
  openEditor,
  setOpenEditor,
  topic,
}: any) {
  const [state, setState] = useState("");
  const { globalState, setGlobalState } = useGlobalState();
  useEffect(() => {
    if (openEditor) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [openEditor]);

  const handleGenerate = () => {
    const newBlog = createBlog(topic, state);
    const existingBlogs = globalState.blogs || [];
    setGlobalState((prev) => ({
      ...prev,
      blogs: [...existingBlogs, newBlog],
    }));
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
            <WriteEditor state={state} setState={setState} />
          </div>
          <div className="overlay__content--footer">
            <button
              className="btn btn-cta float-right"
              onClick={handleGenerate}
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
