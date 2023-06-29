import React from 'react';

const Icon = ({ name, size, color, src }) => {
  const iconStyles = {
    width: size,
    height: "auto",
    color: color,
  };

  return <img alt={`icon-${name}`} style={iconStyles} src={src}/>;
};

export default Icon;
