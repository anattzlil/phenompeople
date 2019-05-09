import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  height = "100%",
  className = "",
  color = "#000",
  viewBox = "0 0 17 15"
}) => (

  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path fill="#FFF" fillRule="evenodd" d="M0 15h4V5H0v10zM2.012 0C.794 0 0 .648 0 1.5 0 2.332.771 3 1.965 3h.023C3.228 3 4 2.332 4 1.5 3.978.648 3.229 0 2.012 0zM17 9.398C17 6.396 15.221 5 12.851 5c-1.913 0-2.768.947-3.247 1.614V5.229H6C6.048 6.147 6 15 6 15h3.604V9.544c0-.29.023-.584.119-.792.26-.583.853-1.187 1.848-1.187 1.305 0 1.825.896 1.825 2.21V15H17V9.398zM9 6.027L9.02 6v.027H9z"/>

  </svg>
);

export default SVG;
