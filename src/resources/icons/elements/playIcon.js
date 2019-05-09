import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  color = "#000",
  viewBox = "0 0 78 78"
}) => (

  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
 <g fill="none" fillRule="evenodd">
        <circle cx="39" cy="39" r="38" stroke="#FFF" stroke-width="2"/>
        <path fill="#FFF" d="M58.98 39L28.422 59.763V18.237z"/>
    </g>
  </svg>
);

export default SVG;
