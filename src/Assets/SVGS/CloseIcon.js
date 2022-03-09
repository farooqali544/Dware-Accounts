import React, { useContext, useEffect } from "react";

import { ThemeContext } from "../../App";

function CloseIcon() {

  const {darkMode} = useContext(ThemeContext);

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      className='icon line'
      viewBox='0 0 24 24'
      style={{
        WebkitUserSelect: "auto",
        MozUserSelect: "auto",
        MsUserSelect: "auto",
        userSelect: "auto",
      }}
    >
      <path
        style={{
          WebkitUserSelect: "auto",
          MozUserSelect: "auto",
          MsUserSelect: "auto",
          userSelect: "auto",
        }}
        fill='none'
        stroke={darkMode ? "#fff" : "#000"}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M19 19L5 5'
      ></path>
      <path
        data-name='primary'
        style={{
          WebkitUserSelect: "auto",
          MozUserSelect: "auto",
          MsUserSelect: "auto",
          userSelect: "auto",
        }}
        fill='none'
        stroke={darkMode ? "#fff" : "#000"}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M19 5L5 19'
      ></path>
    </svg>
  );
}

export default CloseIcon;
