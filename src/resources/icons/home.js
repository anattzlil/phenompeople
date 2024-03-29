import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  color= '#000',
  width = "100%",
  className = "",
  viewBox = "0 0 50 49"
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
        <path d='M-15-20h80v80h-80z' opacity='0.545' />
        <path fill={color} fillRule='nonzero' stroke={color} strokeWidth='0.3'
        d='M49.036 22.667L24.731 1 .425 22.667a.792.792 0 0 0-.044 1.15.873.873 0 0 0 1.198.042l2.813-2.507v27.131h40.677V21.351l2.813 2.508c.163.145.37.217.577.217a.858.858 0 0 0 .62-.26.79.79 0 0 0-.043-1.15zm-29.39 24.19V33.838c0-2.692 2.28-4.881 5.085-4.881 2.804 0 5.084 2.19 5.084 4.881v13.017h-10.17zm23.729 0H31.51V33.838c0-3.588-3.041-6.508-6.78-6.508-3.738 0-6.78 2.92-6.78 6.508v13.017H6.087V19.84L24.731 3.22l18.644 16.62v27.016z'
        />
    </g>
  </svg>
);

export default SVG;
