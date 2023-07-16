import React from "react";

export const BlogButton: (props: {
  children: any;
  className?: any;
  testid?: string;
  onClick?: () => void;
}) => any = ({ children, className, testid, onClick }) => {
  return (
    <button
      data-testid={testid}
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
