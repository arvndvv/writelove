import React from "react";
import { useParams } from "react-router-dom";
import { getBlogById } from "../../services/blog.service";
import Parser from "html-react-parser";
import "./ReadBlog.styles.scss";

export default function ReadBlog() {
  let { id } = useParams();
  const blog = id ? getBlogById(id) : {};
  id && console.log();

  return (
    <div className="blog-preview">
      <h1 className="blog-preview__head">{blog?.name}</h1>
      <div className="blog-preview__content">{Parser(blog?.description)}</div>
    </div>
  );
}
