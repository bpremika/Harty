import { Center } from "@mantine/core";
import { useState } from "react";
import styles from "../../styles/category.module.css"

const Category = () =>{
    const [isGame,setButton] = useState(true)
    function butclick(){
        
        setButton(!isGame);
        if(isGame){
            <div  className={styles.titleContainer}>
                <button id = "game" className = {styles.button} onClick = {butclick}>ONLINE GAME</button>
            </div>
        }
        else{
            <div  className={styles.titleContainer}>
                <button id = "act" className = {styles.button} onClick = {butclick}>OUTDOOR ACTIVITIES</button>
            </div>
        }
    }
    return <>
        <div style={{width : "80%"}}>
            <div className={styles.titleContainer}>
                <div className={styles.boxes}></div>
                <h2 className={styles.category} style={{color : "black"}}>CATEGORIES</h2>
                <div className={styles.boxes}></div>
            </div>
            
            <div  className={styles.titleContainer} style = {{display : "flex",
                                                            justifyContent : "space-between",
                                                            
                                                            }}>
                <button id = "game" className = {styles.button} onClick = {butclick}>ONLINE GAME</button>
                <button id = "act" className = {styles.button} onClick = {butclick}>OUTDOOR ACTIVITIES</button>
            </div>
        </div>
    </>
}

export default Category;