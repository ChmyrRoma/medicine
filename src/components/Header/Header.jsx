import React from 'react';
import { Grid } from '@material-ui/core';
import style from '../Header/Header.module.css';
import homeImg from '../assets/images/house.svg';

const Header = () => {
    return (
        <div className={style.header}>
            <Grid container  className={style.headerBody}>
                <Grid item className={style.logo}>
                    <img alt='' src={homeImg} />
                    <div className={style.headerTitle}>Home</div>
                </Grid>
                <Grid item className={style.bodyAuth}>
                    <button className={style.bodyButton}>Sign In</button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Header;
