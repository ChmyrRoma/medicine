import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import nurse from '../../assets/images/nurse.svg';
import style from '../SignUp/SignUp.module.css'
import { NavLink } from 'react-router-dom';

const SignUp = () => {

    const [checked, setChecked] = useState(false)

    const addButton = () => {
        setChecked(!checked)
    }
    
    return (
        <div className={style.SignUp}>
            <Grid className={style.headerSignUp}>
                <h1>Empire of health</h1>
                <img alt='' src={nurse} />
            </Grid>
            <Grid container direction='column' className={style.bodySignUp}>
                <Grid container direction='column' className={style.bodyInput}>
                    <input type='text' placeholder='Login' />
                    <input type='email' placeholder='Email' />
                    <input type='password' placeholder='Password' />
                </Grid>
                <Grid className={style.bodyConfirm}>
                    <Grid className={style.checkAccept}>
                        <input type='checkbox' onClick={addButton} />
                        <h4 className={style.titleAccept}>Accept</h4> 
                    </Grid>
                    <Grid >
                    {checked ? <div className={style.checkedInput}><button><h3>SignUp</h3></button>
                    <h5 className={style.titleSignUp}>Already a member?
                        <NavLink to='/signIn'> Sign In </NavLink>
                    </h5> </div> : undefined}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
} 

export default SignUp;