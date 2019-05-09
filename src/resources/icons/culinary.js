import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  color = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 52 50"
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
        <path d='M-14-20h80v80h-80z' opacity='0.545' />
        <g fill={color} stroke={color} strokeWidth='0.5'>
            <path d='M14.617 23.877c0-.603-.508-1.09-1.135-1.09s-1.135.487-1.135 1.09c0 2.86 3.287 6.788 3.662 7.227.225.262.55.398.879.398.252 0 .507-.08.719-.247a1.062 1.062 0 0 0 .157-1.534c-1.217-1.423-3.147-4.268-3.147-5.844zM38.447 22.787c-.627 0-1.135.487-1.135 1.09 0 1.57-1.93 4.419-3.147 5.845a1.06 1.06 0 0 0 .158 1.533c.21.166.466.247.72.247.328 0 .652-.136.877-.398.375-.44 3.662-4.367 3.662-7.227 0-.603-.508-1.09-1.135-1.09zM25.965 22.787c-.628 0-1.135.487-1.135 1.09v6.536c0 .602.507 1.09 1.135 1.09.627 0 1.134-.488 1.134-1.09v-6.536c0-.603-.507-1.09-1.134-1.09z'
            />
            <path fillRule='nonzero' d='M38.447 5.357c-.688 0-1.406.088-2.153.22C33.795 2.782 30.095 1 25.964 1c-4.13 0-7.83 1.781-10.33 4.578-.745-.133-1.464-.22-2.152-.22C6.6 5.357 1 10.732 1 17.34c0 4.528 2.66 8.644 6.835 10.68l-.022 16.462a4.329 4.329 0 0 0 1.354 3.146 4.696 4.696 0 0 0 3.276 1.304H39.49c2.553 0 4.63-1.994 4.63-4.445V28.003c4.16-2.04 6.808-6.15 6.808-10.663 0-6.607-5.6-11.983-12.482-11.983zm3.404 39.13c0 1.25-1.06 2.266-2.36 2.266H12.443c-.63 0-1.224-.236-1.67-.665a2.206 2.206 0 0 1-.69-1.604l.005-4.267h31.763v4.27zm.703-18.18a1.093 1.093 0 0 0-.69.849c-.01.061-.014.122-.013.183v10.7h-31.76l.015-10.685a1.066 1.066 0 0 0-.19-.63 1.104 1.104 0 0 0-.516-.404c-3.725-1.564-6.13-5.085-6.13-8.98 0-5.406 4.58-9.804 10.212-9.804.22 0 .453.026.68.043a12.582 12.582 0 0 0-1.815 6.493c0 .602.508 1.09 1.135 1.09s1.135-.488 1.135-1.09c0-6.006 5.09-10.893 11.348-10.893 6.256 0 11.347 4.887 11.347 10.893 0 .602.508 1.09 1.135 1.09s1.135-.488 1.135-1.09c0-2.364-.668-4.577-1.816-6.493.228-.017.46-.043.68-.043 5.633 0 10.214 4.398 10.214 9.804 0 3.881-2.396 7.398-6.106 8.967z'
            />
        </g>
    </g>
  </svg>
);

export default SVG;
