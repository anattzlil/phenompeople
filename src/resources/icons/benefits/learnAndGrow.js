import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  color = "#000",
  viewBox = "0 0 53 48"
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
        <path d='M-10-13h72v72h-72z' opacity='0.415' />
        <path fill={color} fillRule='nonzero' stroke={color} strokeWidth='0.5' d='M28.085 10.582a7.957 7.957 0 0 0-2.855 5.428c-.403 4.4 2.85 8.308 7.249 8.711a7.951 7.951 0 0 0 5.856-1.82 7.956 7.956 0 0 0 2.854-5.427 7.962 7.962 0 0 0-1.82-5.857 7.958 7.958 0 0 0-5.429-2.854 7.948 7.948 0 0 0-5.855 1.82zm23.639 25.22L43.47 26.46a.894.894 0 0 0-.865-.288l-2.073-2.491a10.015 10.015 0 0 0 2.73-6.018 10.025 10.025 0 0 0-2.293-7.377 10.117 10.117 0 0 0-4.96-3.253V.404H4.863A4.393 4.393 0 0 0 .475 4.793v37.586a4.393 4.393 0 0 0 4.388 4.388l30.684.003a.568.568 0 0 0 .214-.043.591.591 0 0 0 .342-.413.605.605 0 0 0-.137-.51 5.065 5.065 0 0 1-1.36-3.213c-.067-1.394.363-2.686 1.207-3.645.108-.132.197-.24.197-.467V26.456c0-.005-.003-.01-.003-.016a9.97 9.97 0 0 0 2.133-.89l2.134 2.565a.89.89 0 0 0 .122.878l7.562 9.918a1.343 1.343 0 0 0 1.075.527c.315 0 .616-.108.862-.312l1.677-1.389c.283-.236.455-.567.485-.934a1.342 1.342 0 0 0-.334-1.001zM1.622 42.379c0-1.456.964-2.69 2.288-3.098v6.196a3.247 3.247 0 0 1-2.288-3.098zm31.838.267a6.215 6.215 0 0 0 .934 2.977L5.056 45.62v-6.483h29.217c-.588 1.025-.874 2.234-.813 3.51zM5.056 37.99V7.414a.573.573 0 1 0-1.146 0v30.684c-.898.2-1.69.676-2.288 1.333V4.792A3.246 3.246 0 0 1 4.862 1.55h30v5.243c-.242-.04-.485-.08-.732-.103a10.033 10.033 0 0 0-7.377 2.293 10.028 10.028 0 0 0-3.596 6.838c-.507 5.542 3.589 10.465 9.132 10.973a10.091 10.091 0 0 0 2.575-.094v11.29H5.054zm34.61-13.489l.032-.03 1.957 2.352-.571.473-1.974-2.371c.188-.137.376-.274.556-.424zM50.84 36.854l-1.677 1.39a.195.195 0 0 1-.156.046.203.203 0 0 1-.14-.078l-7.42-9.73 1.317-1.09 8.099 9.167c.05.057.053.12.05.153a.204.204 0 0 1-.073.142z'
        />
        <circle cx='33.292' cy='16.646' r='8.813' fill='#FFF' />
        <circle cx='33.292' cy='16.646' r='6.104' stroke={color} strokeWidth='1.5'
        />
    </g>
  </svg>
);

export default SVG;
