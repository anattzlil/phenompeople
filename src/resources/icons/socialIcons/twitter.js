import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  height = "100%",
  className = "",
  color = "#000",
  viewBox = "0 0 19 15"
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
    <path fill='#FFF' fillRule='evenodd' d='M19 1.776c-.7.302-1.45.504-2.238.596A3.822 3.822 0 0 0 18.475.277a8 8 0 0 1-2.476.92A3.941 3.941 0 0 0 13.155 0c-2.153 0-3.9 1.696-3.9 3.786 0 .297.035.587.102.864A11.183 11.183 0 0 1 1.322.694a3.687 3.687 0 0 0-.527 1.904c0 1.312.688 2.473 1.734 3.151a3.981 3.981 0 0 1-1.766-.474v.049c0 1.834 1.343 3.364 3.127 3.712a4.101 4.101 0 0 1-1.76.066c.496 1.502 1.935 2.598 3.641 2.63A7.969 7.969 0 0 1 .93 13.35a8.22 8.22 0 0 1-.93-.052A11.279 11.279 0 0 0 5.975 15c7.17 0 11.091-5.77 11.091-10.774 0-.165-.004-.327-.011-.49A7.825 7.825 0 0 0 19 1.776z'
    />
  </svg>
);

export default SVG;
