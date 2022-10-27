import { Center } from "@mantine/core";
import { useSetState } from "@mantine/hooks";
import { useState } from "react";
import  styles  from '../../styles/popout.module.css'



interface issssss{
    is : ()=>void;
}
const Popup = (props:issssss) =>{


    return <div style={{zIndex : "5" ,backgroundColor : "white", borderRadius : "30px" , height : "fit-content", width : "450px", padding: '30px', display: 'flex', flexDirection: 'column'}}>
        <Center style={{fontSize : "30px" ,  color : "green", fontWeight: 'bold' }}>Thanks! your account has been successfully created.</Center>
        <Center style={{fontSize : "20px" ,  color : "black" }}>Welcome to Harty. Hope you enjoy with our pages</Center>

        <button onClick={props.is} className = {styles.but}>
                Close
        </button>
    </div>
}

export default Popup;