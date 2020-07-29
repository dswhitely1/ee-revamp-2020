import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/CustomButtons/button.component';
import Scrollchor from 'react-scrollchor';
import ArrowUpward from '@material-ui/icons/ArrowUpward';

function LandingPageButton({ content, link, scrollButton, ...rest }) {
  if (scrollButton) {
    return (
      <Button component={Scrollchor} to="#root" justIcon {...rest}>
        <ArrowUpward />
      </Button>
    );
  }
  return (
    <Button component={Scrollchor} to={link} {...rest}>
      {content}
    </Button>
  );
}

LandingPageButton.propTypes = {
  content: PropTypes.node,
  link: PropTypes.string,
  scrollButton: PropTypes.bool,
};

export default LandingPageButton;
