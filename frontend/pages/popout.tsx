import { Center } from "@mantine/core";
import { useSetState } from "@mantine/hooks";
import { useState } from "react";
import  styles  from '../styles/popout.module.css'



interface issssss{
    is : ()=>void;
}
const Popup = (props:issssss) =>{


    return <div style={{zIndex : "500px" ,backgroundColor : "#D9D9D9", borderRadius : "30px" , height : "300px" , marginBottom : "5%" , marginTop : "5%" , paddingBottom : "5%",paddingTop : "5%" , width : "90%"}}>
        <Center style={{fontSize : "30px" ,  color : "green" }}>Thanks! your account has been successfully created.</Center>
        <Center style={{fontSize : "20px" ,  color : "black" }}>Welcome to Harty's family. Hope you enjoy with our pages</Center>

        <button onClick={props.is} className = {styles.but}>
                Close
        </button>
    </div>
}

export default Popup;