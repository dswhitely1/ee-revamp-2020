import React from 'react';
import PropTypes from 'prop-types';
import { imageStyles } from 'styles/components/image.styles';

function Image({ src, alt }) {
  const classes = imageStyles();
  return <img src={src} alt={alt} className={classes.image} />;
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
