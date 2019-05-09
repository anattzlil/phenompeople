import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  color = "#000",
  viewBox = "0 0 48 48"
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
<g>
	<path fill='#0F4C97' d="M24,0.5L0.5,24L24,47.5L47.5,24L24,0.5z"/>
	<g>
		<path fill='none' stroke='#FFFFFF' strokeWidth='0.81' d="M23.2,30.9l-6.5-6.5l6.5-6.5"/>
		<path fill='none' stroke='#FFFFFF' strokeWidth='0.81' strokeLinecap='square' d="M16.9,24.4h14.2"/>
	</g>
</g>
  </svg>
);

export default SVG;
