import React from 'react';
import { Grid} from '@material-ui/core';
import style from './SignIn.module.css';
import doctor from '../../../assets/images/doctor.png'

const SignIn = () => {
    return (
        <div>
            <Grid className={style.headerSingIn}>
                <h1>Империя здоровья</h1>
                <img src={doctor} />
            </Grid>
            <Grid container direction='column' alignItems='center' className={style.bodySignIn}>
                <Grid container direction='column' alignItems='center' className={style.bodyInput}>
                    <input placeholder='Логин' />
                    <input placeholder='Пароль' />
                </Grid>
                <Grid>
                    <button className={style.bodyButton}><h3>Войти</h3></button>
                </Grid>
            </Grid>
        </div>
    )
} 

export default SignIn;
