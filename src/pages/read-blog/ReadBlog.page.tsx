import React from "react";
import { useParams } from "react-router-dom";
import { getBlogById } from "../../services/blog.service";
import Parser from "html-react-parser";
import "./ReadBlog.styles.scss";

export default function ReadBlog() {
  let { id } = useParams();
  const blog = id ? getBlogById(id) : {};
  const handleDelete = () => {};
  return (
    <div className="blog-preview">
      <h1 className="blog-preview__head">{blog?.name}</h1>
      <div className="blog-preview__content">{Parser(blog?.description)}</div>
      <div className="blog-preview__footer">
        <div className="blog-preview__footer__details">
          <span className="blog-preview__footer--author">
            Author: {blog.author || "John Doe"}
          </span>
          <span className="blog-preview__footer--date">
            Date created: {blog?.date_created || ""}
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
