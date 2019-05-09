import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  color = "#000",
  viewBox = "0 0 72 48"
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
        <path d='M-4-17h80v80H-4z' opacity='0.545' />
        <g stroke={color} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.8'>
            <path d='M40.304 44.753c1.92 1.961 6.254 2.631 13 2.01 10.117-.932 17.73-19.433 17.73-19.433s-2.011-2.431-14.107 2.124-12.04 8.535-22.799 14.062c-10.76 5.528-16.587 3.328-20.67.845-2.721-1.656-6.857-7.438-12.407-17.348 7.724.007 14.096 1.348 19.116 4.024 5.02 2.675 8.852 5.477 11.5 8.404'
            />
            <path d='M47.216 29.215c3.88-3.68 5.82-8.942 5.82-15.787-.085-.034-15.448 1.937-22.08 20.064M33.853 21.284c-3.81-4.372-8.715-7.407-14.712-9.105.077.046-.476 7.394 5.183 16.464M36.224 16.697s7.129-8.494 0-15.551c.082.047-7.299 5.164 0 15.55z'
            />
        </g>
    </g>
  </svg>
);

export default SVG;
