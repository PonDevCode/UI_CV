import React from "react";

const icons = {
  iconItem: (
    <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_296_7093)">
        <path d="M12 7.39062H32V17.3906H22L12 7.39062ZM12 17.3906H22L32 27.3906H12V17.3906ZM12 27.3906H22V37.3906L12 27.3906Z" fill="#424257" />
      </g>
      <defs>
        <clipPath id="clip0_296_7093">
          <rect width="44" height="44" fill="white" transform="translate(0 0.390625)" />
        </clipPath>
      </defs>
    </svg>
  )

};



const SvgIcon = ({ name, width, height, color }) => {
  return React.cloneElement(icons[name], {
    width,
    height,
    color,
  });
};

export default SvgIcon;