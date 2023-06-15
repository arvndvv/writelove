import React from "react";

export const BlogButton: (props: {
  children: any;
  className?: any;
  onClick?: () => void;
}) => any = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-generic !px-3 !rounded-none flex items-center !font-medium h-fit ${
        className ? className : ""
      }`}
    >
      {children}
      <span className="material-icons">chevron_right</span>
    </button>
  );
};
