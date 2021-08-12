import React from 'react';
import { Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css';

import receptionsImg from '../assets/images/receptions.svg';
import developmentsImg from '../assets/images/developments.svg';
import alertsImg from '../assets/images/alerts.svg';
import messagesImg from '../assets/images/messages.svg'
import clientsImg from '../assets/images/clients.svg';
import staffImg from '../assets/images/staff.svg';

const NavBar = () => {
    return (
        <div className={style.NavBar}>
            <Grid container  className={style.first}>
            <Grid className={`${style.item} ${style.active} ${style.section}`}>
                <NavLink activeClassName={style.activeLink} to = '/receptions'>
                    <img alt='' src={receptionsImg} />
                    <span className={style.sectionTitle}>Receptions</span>
                </NavLink>
            </Grid>
            <Grid className={`${style.item} ${style.section}`}>
                <NavLink activeClassName={style.activeLink} to = '/developments'>
                    <img alt='' src={developmentsImg} />
                    <span className={style.sectionTitle}>Developments</span>
                </NavLink>
            </Grid>
            <Grid className={`${style.item} ${style.section}`}>
                <NavLink activeClassName={style.activeLink} to = '/alerts'>
                    <img alt='' src={alertsImg} />
                    <span className={style.sectionTitle}>Alerts</span>
                </NavLink>
            </Grid>
            </Grid>
            <Grid container  className={style.second}>
            <Grid className={`${style.item} ${style.section}`}>
                <NavLink activeClassName={style.activeLink} to = '/messages'>
                    <img alt='' src={messagesImg} />
                    <span className={style.sectionTitle}>Messages</span>
                </NavLink>
            </Grid>
            <Grid className={`${style.item} ${style.section}`}>
                <NavLink activeClassName={style.activeLink} to = '/clients'>
                    <img alt='' src={clientsImg} />
                    <span className={style.sectionTitle}>Clients</span>
                </NavLink>
            </Grid>
            <Grid className={`${style.item} ${style.section}`}>
                <NavLink activeClassName={style.activeLink} to = '/Staff'>
                   <img alt='' src={staffImg}/> 
                   <span className={style.sectionTitle}>Staff</span> 
                </NavLink>
            </Grid>
        </Grid>
        </div>
    )
}

export default NavBar;
