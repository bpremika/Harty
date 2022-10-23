import { Center, Tooltip } from "@mantine/core";
import { link } from "fs";
import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/actpic.module.css"

interface Picture{
        name : string;
        URL : string;

}
const Actpic = (props : Picture) =>{

    return (<>
    
    <Link href={`/Catalogpage?name=${props.name}`} >
        <Tooltip style = {{paddingLeft : "2%",paddingRight : "2%", fontFamily : "Poppins"}} label = {props.name} withArrow transition="pop-top-right" closeDelay = {200} > 
        
            <button  className = {styles.button}>
                
                <img className = {styles.img} src = {props.URL} alt = {props.name}  />
            </button>
        
        </Tooltip>
    </Link></>)
    
}

export default Actpic;