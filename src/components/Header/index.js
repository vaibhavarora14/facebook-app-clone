import React from 'react';
import { AppBar } from '@material-ui/core';
import { ReactComponent as FacebookSVG } from './icons8-facebook.svg';

const Header = props => {
  return (
    <AppBar position="sticky">
      <FacebookSVG />
    </AppBar>
  );
};

Header.propTypes = {

};

export default Header;