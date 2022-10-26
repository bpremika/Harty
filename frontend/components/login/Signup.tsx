import axios from "axios";
import React, { ChangeEvent, useState } from "react"
import styles from "../../styles/Signup.module.css"
import Router,{useRouter } from "next/router";
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
          await Router.push('/login');
          Router.reload();
        } catch (error) {
          console.error(error);
        }
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
    </>
};
export default SignUp