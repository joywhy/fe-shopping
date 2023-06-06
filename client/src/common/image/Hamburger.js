import React from 'react';

const Hamburger = (props) => {
  //props 의 초깃값
  const { width, height } = props;

  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 22H32M2 12H32M2 2H32"
          stroke="black"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

export default Hamburger;

//props 초기값
Hamburger.defaultProps = {
  width: 34,
  height: 24,
};
