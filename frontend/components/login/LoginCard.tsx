import { useRouter } from "next/router";
import React from "react";

interface LoginProp{
    title: string;
    children: React.ReactNode;
    hasAccount :string;
    url:string;
    asUrl?:string;
    onHasAccountClick: ()=>void
}

const LoginCard = (props:LoginProp) =>{
    const router = useRouter();
    return <>
        <div style={{display: "flex", alignItems :"center", justifyContent:"center" ,flexDirection:"column",width : 780, height:750}}>
            <h2 style={{fontSize : 36}}>{props.title}</h2>
            {props.children}
            <div style={{width: "100%",display:"flex",justifyContent:"right"}}>
                <button onClick={()=>{
                    router.push(props.url,props.asUrl,{shallow:true})
                    props.onHasAccountClick();
                }} style={{borderStyle:"none" , backgroundColor : "initial" , fontFamily:"Poppins", fontWeight:700, margin:20 , cursor :"pointer"}}>{props.hasAccount}</button>
            </div>
        </div>
    </>
}

export default LoginCard