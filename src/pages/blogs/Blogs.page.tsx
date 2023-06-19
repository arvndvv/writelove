import React from "react";
import "./Blogs.styles.scss";
import { getAllBlogs } from "../../services/blog.service";
import { IBlog } from "../../models/interfaces";
import Parser from "html-react-parser";
import imgPlaceholder from "../../assets/images/placeholder.jpg";
export const Blogs = () => {
  return (
    <div className="Home">
      <h1 className="text-2xl font-medium my-5">Blogs</h1>
      <div className="blogs">
        {getAllBlogs().map((blog: IBlog, index: number) => {
          console.log(blog);
          const match = blog.description.match(
            // eslint-disable-next-line no-useless-escape
            /\<img.+src\=(?:\"|\')(.+?)(?:\"|\')(?:.+?)\>/
          );
          const src = match ? match[1] : "";
          console.log(src);

          return (
            <div
              key={index}
              className="blog-card md:max-w-[45%] md:max-h-[45vh]"
            >
              <div className="blog-card__image">
                <img src={src || imgPlaceholder} alt="" />
              </div>
              <div className="blog-card__content">
                <h2 className="blog-card__title">{blog.name}</h2>
                <span className="blog-card__description">
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
                </span>
                <div className="blog-card__actions">
                  <button className="btn btn-cta">Read more</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
