import { Grid } from '@material-ui/core';
import React from 'react';
import style from '../Header/Header.module.css';
import homeImg from '../assets/images/house.svg'

const Header = () => {
    return (
        <Grid container xs={12}  className={style.header}>
            <Grid xs={12} sm={6} className={style.headerBody}>
                <div className={style.logo}>
                    <img alt="" src={homeImg} />
                    <div className={style.headerTitle}>Home</div>
                </div>
            </Grid>
        </Grid>
    )
}

export default Header;