import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  color = "#000",
  viewBox = "0 0 50 50"
}) => (

  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    color={color}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g fill='none' fillRule='evenodd'>
        <path d='M-11-10h72v72h-72z' opacity='0.415' />
        <g fill={color}>
            <path fillRule='nonzero' d='M49.167 6.667H28.333V5c.46 0 .834-.373.834-.833V.833A.833.833 0 0 0 28.333 0h-6.666a.833.833 0 0 0-.834.833v3.334c0 .46.373.833.834.833v1.667H5.833a.833.833 0 0 0-.589.244l-5 5a.833.833 0 0 0 0 1.178l5 5a.833.833 0 0 0 .59.244h15.833v3.334h-5.834A.833.833 0 0 0 15 22.5v10c0 .46.373.833.833.833h5.834v15.834c0 .46.373.833.833.833h5c.46 0 .833-.373.833-.833V33.333h10.834a.833.833 0 0 0 .589-.244l5-5a.833.833 0 0 0 0-1.178l-5-5a.833.833 0 0 0-.59-.244H28.334v-3.334h20.834c.46 0 .833-.373.833-.833v-10a.833.833 0 0 0-.833-.833zm-26.667-5h5v1.666h-5V1.667zM23.333 5h3.334v1.667h-3.334V5zm3.334 43.333h-3.334v-15h3.334v15zM42.988 27.5l-4.166 4.167H16.667v-8.334h22.155l4.166 4.167zm-16.321-5.833h-3.334v-3.334h3.334v3.334zm21.666-5H6.178L2.012 12.5l4.166-4.167h42.155v8.334z'
            />
            <path d='M8.09 10.244a.833.833 0 0 0-1.18 0l-1.666 1.667a.833.833 0 0 0 0 1.178l1.667 1.667a.833.833 0 0 0 1.178-1.178L7.012 12.5l1.077-1.078a.833.833 0 0 0 0-1.178zM36.91 29.756a.833.833 0 0 0 1.18 0l1.666-1.667a.833.833 0 0 0 0-1.178l-1.667-1.667a.833.833 0 0 0-1.178 1.178l1.077 1.078-1.077 1.078a.833.833 0 0 0 0 1.178zM45.833 15c.46 0 .834-.373.834-.833v-3.334a.833.833 0 0 0-1.667 0v3.334c0 .46.373.833.833.833zM19.167 25a.833.833 0 0 0-.834.833v3.334a.833.833 0 0 0 1.667 0v-3.334a.833.833 0 0 0-.833-.833z'
            />
        </g>
    </g>
  </svg>
);

export default SVG;
