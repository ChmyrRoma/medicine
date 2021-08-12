import React from 'react';
import { Grid } from '@material-ui/core';
import style from './SignIn.module.css';
import doctor from '../../../assets/images/doctor.png'

const SignIn = () => {
    return (
        <div>
            <Grid className={style.headerSingIn}>
                <h1>Empire of health</h1>
                <img src={doctor} />
            </Grid>
            <Grid container direction='column' className={style.bodySignIn}>
                <Grid container direction='column' className={style.bodyInput}>
                    <input placeholder='Login' />
                    <input placeholder='Password' />
                </Grid>
                <Grid>
                    <button className={style.bodyButton}><h3>SignIn</h3></button>
                </Grid>
            </Grid>
        </div>
    )
} 

export default SignIn;
