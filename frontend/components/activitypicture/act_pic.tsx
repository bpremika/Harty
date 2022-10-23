import { Center, Tooltip } from "@mantine/core";
import { link } from "fs";
import { useState } from "react";
import styles from "../../styles/actpic.module.css"

interface Picture{
        name : string;
        URL : string;
        linking : string;
}
const Actpic = (props : Picture) =>{




    return (<>
    
    
    <Tooltip style = {{paddingLeft : "2%",paddingRight : "2%", fontFamily : "Poppins"}} label = {props.name} withArrow transition="pop-top-right" closeDelay = {200} > 
        <a href={props.linking}>
            <button  className = {styles.button}>
                
                <img className = {styles.img} src = {props.URL} alt = {props.name}  />
            </button>
        </a>
    </Tooltip></>)
    
}

export default Actpic;