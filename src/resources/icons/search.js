import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  color = "#000",
  viewBox = "0 0 16 16"
}) => (

  <svg
    width={width}
    style={style}
    height={width}
    color={color}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g fill='none' fillRule='evenodd'>
        <path d='M-7-9h32v32H-7z' />
        <g stroke='#AEAEAE' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.2'
        transform='translate(1 1)'>
            <circle cx='6.125' cy='6.125' r='6.125' />
            <path d='M14 14l-3.5-3.5' />
        </g>
    </g>
  </svg>
);

export default SVG;
