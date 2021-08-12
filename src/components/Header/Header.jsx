import React from 'react';
import { Grid } from '@material-ui/core';
import style from '../Header/Header.module.css';
import homeImg from '../assets/images/house.svg';

const Header = () => {
    return (
        <Grid className={style.header}>
            <Grid className={style.headerBody}>
                <div className={style.logo}>
                    <img alt='' src={homeImg} />
                    <div className={style.headerTitle}>Home</div>
                </div>
            </Grid>
        </Grid>
    )
}

export default Header;