import React from "react";
import "./Blogs.styles.scss";
import { IBlog } from "../../models/interfaces";
import Parser from "html-react-parser";
import imgPlaceholder from "../../assets/images/placeholder.jpg";
import { useNavigate } from "react-router-dom";
import { WriteRoutes } from "../../constants/routes";
import { useGlobalState } from "../../global/store";
export const Blogs = () => {
  const navigate = useNavigate();
  const { blogs } = useGlobalState();
  const handleReadMore = (id: string) => {
    navigate(WriteRoutes.READ + "/" + id);
  };

  return (
    <div className="Home">
      <h1 className="text-2xl font-medium my-5">Blogs</h1>
      <div className="blogs">
        {blogs.length ? (
          blogs.map((blog: IBlog, index: number) => {
            const match = blog.description.match(
              // eslint-disable-next-line no-useless-escape
              /\<img.+src\=(?:\"|\')(.+?)(?:\"|\')(?:.+?)\>/
            );
            const src = match ? match[1] : "";

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
                    <button
                      className="btn btn-cta"
                      onClick={() => handleReadMore(blog.id)}
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="no-blogs">No blogs to show</div>
        )}
      </div>
    </div>
  );
};
