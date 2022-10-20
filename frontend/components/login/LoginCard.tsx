import React from "react";
import SignIn from "./SignIn";

interface LoginProp{
    title: string;
    children: React.ReactNode;
}

const LoginCard = (props:LoginProp) =>{
    return <>
        <div style={{display: "flex", alignItems :"center", justifyContent:"center" ,flexDirection:"column",width : 780, height:650}}>
            <h2 style={{fontSize : 36}}>{props.title}</h2>
            {props.children}
            <div style={{width: "100%",display:"flex",justifyContent:"right"}}>
                <a href="" style={{fontWeight:700, margin:20}}>Don't have an account?</a>
            </div>
        </div>
    </>
}

export default LoginCard