import { Center, Tooltip } from "@mantine/core";
import { useState } from "react";
import styles from "../../styles/actpic.module.css"

interface Picture{
        name : string;
        URL : string;
}
const Actpic = (props : Picture) =>{




    return (<>
    
    
    <Tooltip style = {{paddingLeft : "2%",paddingRight : "2%"}} label = {props.name} withArrow transition="pop-top-right" closeDelay = {200} > 
        <button  className = {styles.button} >
            
            <img className = {styles.img} src = {props.URL} alt = {props.name}  />
        </button>
    </Tooltip></>)
    
}

export default Actpic;