import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  color= '#000',
  width = "100%",
  className = "",
  viewBox = "0 0 66 53"
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
        <path d='M-7-15h80v80H-7z' opacity='0.545' />
        <g stroke={color} strokeWidth='1.8' transform='translate(0 1)'>
            <rect width='63.436' height='4.131' x='0.9' y='46.9' rx='2.065' />
            <path strokeLinecap='round' strokeLinejoin='round' d='M32.969 43.289c-17.928.034-26.917.034-26.969 0 3.887-1.86 3.782-8.752 7.058-16.027S23.542 16.029 32.938 16h-.03c9.42 0 16.74 4.114 19.911 11.144 3.17 7.03 3.17 14.167 7.058 16.027-.052.034-9.021.034-26.908 0v.118z'
            />
            <path strokeLinecap='round' d='M33 20c10.997 0 17.166 5.223 18.507 15.669M29 15.796V11h7.523v4.118M29 .424h7.442M32.424 1.5v8.583'
            />
        </g>
    </g>
  </svg>
);

export default SVG;
