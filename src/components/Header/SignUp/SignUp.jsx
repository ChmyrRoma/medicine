import React from 'react';
import { Grid } from '@material-ui/core';
import nurse from '../../assets/images/nurse.svg';
import style from '../SignUp/SignUp.module.css'
import { NavLink } from 'react-router-dom';

const SignUp = () => {


    return (
        <div>
            <form action=''>
                <Grid className={style.headerSignUp}>
                    <h1>Empire of health</h1>
                    <img alt='' src={nurse} />
                </Grid>
                <Grid container direction='column' className={style.bodySignUp}>
                    <Grid container direction='column' className={style.bodyInput}>
                        <input type='text' placeholder='Login' maxLength='40' required />
                        <input type='email' placeholder='Email' required />
                        <input type='password' placeholder='Password' maxLength='40' minLength='8' required />
                    </Grid>
                    <Grid className={style.bodyConfirm}>
                        <Grid className={style.checkAccept}>
                            <input type='checkbox' required />
                            <h4 className={style.titleAccept}>Accept</h4>
                        </Grid>
                        <button><h3>SignUp</h3></button>
                        <h5 className={style.titleSignUp}>Already a member?
                        <NavLink to='/signIn'> Sign In </NavLink>
                        </h5>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default SignUp;