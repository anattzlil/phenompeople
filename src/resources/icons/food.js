import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  color= '#000',
  width = "100%",
  className = "",
  viewBox = "0 0 67 52"
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
    <path fill='none' d='M-6-15h80v80H-6V-15z' />
    <g transform='translate(13.32 2.887)'>
        <circle fill="none" stroke={color} stroke-width="1.7" cx='21.7' cy='21.7' r='20.8' />
        <path fill="none" stroke={color} stroke-width="1.7" d='M6.5,19.4c-0.1,0.8-0.2,1.7-0.2,2.5c0,8.6,7,15.6,15.6,15.6s15.6-7,15.6-15.6c0-1.9-0.3-3.7-1-5.4 M32.5,10.7 M14.3,8.1 M32.5,10.7c-2.9-2.8-6.8-4.4-10.8-4.4c-2.6,0-5.1,0.6-7.4,1.8'
        />
    </g>
    <path fill="none" stroke={color} stroke-width="1.7" strokeLinecap='round' strokeLinejoin='round' d='M66.2,1v50c-2.7-0.1-4-0.9-4-2.4c0-1.5,0.5-8.7,1.4-21.7l-2-3.1c0.1-7.7,0.3-13.4,0.7-17 C62.5,3.3,63.9,1.3,66.2,1L66.2,1z'
    />
    <path fill="none" stroke={color} stroke-width="1.7" strokeLinecap='round' strokeLinejoin='round' d='M10.9,1.9l-0.4,13c-1,2.3-2,3.4-2.8,3.4c0-0.1,0.6,21.6,0.6,24.8V51H4.9'
    />
    <path fill="none" stroke={color} stroke-width="1.7" strokeLinecap='round' strokeLinejoin='round' d='M1.6,2.3l0,12.6c1,2.3,2,3.4,2.8,3.4c0-0.1-0.6,21.6-0.6,24.8V51h3.5 M6.3,2.2v9.9'
    />
  </svg>
);

export default SVG;
