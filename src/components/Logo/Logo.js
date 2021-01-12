import React from 'react';

import BurgerLogo from '../../assets/images/28.1 burger-logo.png.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={BurgerLogo} alt="kingBurger" />
    </div>
);

export default logo; 