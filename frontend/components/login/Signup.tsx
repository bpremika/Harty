import axios from "axios";
import React, { ChangeEvent, useState } from "react"
import styles from "../../styles/Signup.module.css"
import {useRouter } from "next/router";
import Popup from "../common/PopUp";
const SignUp = () => {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        password2: ""

    })

    const [error, setError] = useState({
        username: "",
        email: "",
        password: "",
        password2: ""
      })
    
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
        console.log(formData)
        validateInput(event)
    };

    const validateInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        let {name , value} = e.target
        setError(prev => {
            const stateObj = { ...prev, [name]: "" };
         
            switch (name) {
              case "username":
                if (!value) {
                  stateObj[name] = "Please enter Username.";
                }
                break;
              case "email":
                if (!value) {
                    stateObj[name] = "Please enter email.";
                  }
              case "password":
                console.log(formData.password2)
                if (!value) {
                  stateObj[name] = "Please enter Password.";
                } else if (formData.password2 && value !== formData.password2) {
                  stateObj.password2= "Password and Confirm Password does not match.";
                } else {
                  stateObj.password2 = formData.password2 ? "" : error.password2;
                }
                break;
         
              case "password2":
                if (!value) {
                  stateObj[name] = "Please enter Confirm Password.";
                } else if (formData.password && value !== formData.password) {
                  stateObj[name] = "Password and Confirm Password does not match.";
                }
                break;
         
              default:
                break;
            }
         
            return stateObj;
          });
    }
    const { username, email, password, password2} = formData;
    const router = useRouter();
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newUser = {
          username,
          email,
          password,
        };
        try {
          const res = await axios.post("https://harty.onfirebyte.xyz/register", newUser);
          console.log(res.data);
          handlePopup()
        } catch (error) {
          console.error(error);
        }
      }
    
    const [popup, setPopup] = useState(false)

    function handlePopup() {
      setPopup(true)
    }

    async function pushToLogin() {
      await router.push('/login')
      router.reload()
    }
    
    
    return <>
        <form className={styles.boxContainer} onSubmit={onSubmit}>
            <div className={styles.inputContainer}>
                <div className={styles.inputBox}>
                    <input onChange={handleChange} onBlur={validateInput} name="username" className={styles.input} type="Username" value={username} placeholder="Username" />
                    {error.username && <span className={styles.err}>{error.username}</span>}
                </div>
                <div className={styles.inputBox}>
                    <input onChange={handleChange} onBlur={validateInput} name="email" className={styles.input} type="email" value={email} placeholder="Email" />
                    {error.email && <span className={styles.err}>{error.email}</span>}
                </div>
                <div className={styles.inputBox}>
                    <input onChange={handleChange} onBlur={validateInput} name="password" className={styles.input} type="Password" value={password} minLength={6} placeholder="Password" />
                    {error.password && <span className={styles.err}>{error.password}</span>}
                </div>
                <div className={styles.inputBox}>
                    <input onChange={handleChange} onBlur={validateInput} name="password2" className={styles.input} type="Password" value={password2} minLength={6} placeholder="Confirm Password" />
                    {error.password2 && <span className={styles.err}>{error.password2}</span>}
                </div>
            </div>
            <div className={styles.checkboxContainer}>
                <label className={styles.checkbox} htmlFor="remember">
                    <input name ="isAccept" type="checkbox" required/>
                    By clicking here, I state that I have read and understood the terms and conditions.</label>
            </div>
            <div className={styles.btn} >
                <button type='submit' value='signup' className={styles.joinBtn}>SIGN UP</button>
            </div>
        </form>
      <div style={{position: 'absolute'}}>
        {popup && <Popup is = {() => pushToLogin()}/>}
      </div>
    </>
};
export default SignUp