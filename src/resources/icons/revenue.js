import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  color = "#000",
  viewBox = "0 0 49 40"
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
        <path d='M-16-29h80v80h-80z' opacity='0.545' />
        <path d='M47.152 38.516H32M39.424 21.58V38.6M46.438 1.07H32c-2.591 13.55-.185 20.324 7.22 20.324 7.403 0 9.81-6.775 7.218-20.324zM43.5 5.297v4.578M47.349 9.875H31.2'
        stroke={color} strokeLinecap='round' strokeWidth='2' />
        <path d='M17 38.5H2M9.5 22v17M16.02 1H1.98C-.54 14.333 1.8 21 9 21c7.2 0 9.54-6.667 7.02-20zM17 9.5H1M5.5 1v5'
        stroke={color} strokeLinecap='round' strokeWidth='2' />
    </g>
  </svg>
);

export default SVG;
