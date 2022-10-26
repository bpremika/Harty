import axios from 'axios';
import Router, { useRouter } from "next/router";
import React, { useCallback, useRef } from 'react';
import styles from '../../styles/Signin.module.css'
const SignIn = () =>{
    console.log("##Refreshing")
    const usernameInputElement = useRef<HTMLInputElement>(null);
    const passwordInputElement = useRef<HTMLInputElement>(null);
    const toRememberInputElement = useRef<HTMLInputElement>(null);

    const formHandler = async (event :React.FormEvent) =>{ 
        event.preventDefault()
        const data = {
            username : usernameInputElement.current?.value,
            password : passwordInputElement.current?.value,
        }
        console.log(data)
        try {
            const res = await axios.post("https://harty.onfirebyte.xyz/login", data);
            console.log(res.data);
            Router.push('/');
          } catch (error) {
            console.error(error);
          }
    }
    return <>
        <form className={styles.boxContainer} onSubmit = {formHandler}>
            <div className={styles.inputContainer}>
                <input ref={usernameInputElement} className={styles.input} type="Username" placeholder="Username"/>
                <input ref={passwordInputElement} className={styles.input} type="Password" placeholder="Password"/>
            </div>
            <div className={styles.checkboxContainer}>
                    <label className={styles.checkbox} htmlFor="remember">
                        <input ref = {toRememberInputElement} type="checkbox"/>
                        Remember me</label>
                    <a className={styles.forgotPass} href="">Forgot Password?</a>
                </div>
            <div className={styles.btn}>
                <button type = "submit" className={styles.joinBtn}>LOGIN</button>
        </div>
        </form>
        </>
}

export default SignIn
