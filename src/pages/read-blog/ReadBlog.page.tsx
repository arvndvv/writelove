import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Parser from "html-react-parser";
import "./ReadBlog.styles.scss";
import { getBlogById } from "../../services/blog.service";
import { getUserById } from "../../services/user.service";
import { EActions, IUser } from "../../models/interfaces";
import { useGlobalState } from "../../global/store";

export default function ReadBlog() {
  let { setGlobalState } = useGlobalState();
  const navigate = useNavigate();
  let { id } = useParams();
  const blog = id ? getBlogById(id) : {};
  const date_created = new Date(blog?.date_created || "").toLocaleString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
  const author = getUserById(blog?.author_id) as IUser;
  const handleDelete = () => {
    setGlobalState({
      type: EActions.DELETE_BLOG,
      payload: blog.id,
    });
    navigate("/");
  };
  return (
    <div className="blog-preview">
      <h1 className="blog-preview__head">{blog?.name}</h1>
      <div className="blog-preview__content">{Parser(blog?.description)}</div>
      <div className="blog-preview__footer">
        <div className="blog-preview__footer__details">
          <span className="blog-preview__footer--author">
            Author: {author?.personal_details?.name}
          </span>
          <span className="blog-preview__footer--date">
            Date created: {date_created}
          </span>
        </div>
        <span
          onClick={handleDelete}
          className="material-icons text-red-600 cursor-pointer hover:text-red-800"
        >
          delete
        </span>
      </div>
    </div>
  );
}
