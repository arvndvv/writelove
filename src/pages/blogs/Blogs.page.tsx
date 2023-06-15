import React from "react";
import "./Blogs.styles.scss";
import { getAllBlogs } from "../../services/blog.service";
import { IBlog } from "../../models/interfaces";
import Parser from "html-react-parser";

export const Blogs = () => {
  return (
    <div className="blogs">
      <h1 className="text-2xl font-medium my-5">Blogs</h1>

      {getAllBlogs().map((blog: IBlog, index: number) => {
        console.log(blog);
        const match = blog.description.match(
          /\<img.+src\=(?:\"|\')(.+?)(?:\"|\')(?:.+?)\>/
        );
        const src = match ? match[1] : "";
        console.log(src);

        return (
          <div key={index} className="blog-card">
            <div className="blog-card__image">
              <img src={src} alt="" />
            </div>
            <div className="blog-card__content">
              <h2 className="blog-card__title">{blog.name}</h2>
              <p className="blog-card__description">
                {Parser(blog.description, {
                  replace: (domNode: any) => {
                    if (domNode.name === "img") {
                      return (
                        <img
                          src={domNode.attribs.src}
                          alt=""
                          className="hidden"
                        />
                      );
                    }
                  },
                })}
              </p>
              <div className="blog-card__actions">
                <button className="btn btn-cta">Read more</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
