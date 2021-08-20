import React from 'react';
import { Grid } from '@material-ui/core';
import style from '../Header/Header.module.css';
import homeImg from '../assets/images/house.svg';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <Grid container className={style.header}>
            <Grid item xs={12} sm={12} xl={12} className={style.headerBody}>
                <Grid container item xs={12} sm={12} xl={12} className={style.leftBlock}>
                    <NavLink to='/' className={style.logo}>
                        <img alt='' src={homeImg} />
                        <div className={style.headerTitle}>Home</div>
                    </NavLink>
                </Grid>
                <Grid container direction='row' alignItems='center' item xs={6} sm={6} xl={12} className={style.bodyAuth}>
                    <NavLink to='/signIn' className={style.bodyButton}>Sign In</NavLink>
                    <NavLink to='/signUp' className={style.bodyButton}>SignUp</NavLink>
                </Grid>
            </Grid>
        </div>
    )
}

export default Header;
