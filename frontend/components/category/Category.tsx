import { Center } from "@mantine/core";
import { useState } from "react";
import styles from "../../styles/category.module.css"
interface catProps {
    onGameClick: () => void;
    onActClick: () => void;
}
const Category = (props: catProps) => {
    return <>
        <div style={{width : "80%"}}>
            <div className={styles.titleContainer}>
                <div className={styles.boxes}></div>
                <h2 className={styles.category} style={{color : "white"}}>CATEGORIES</h2>
                <div className={styles.boxes}></div>
            </div>
            
            <div  className={styles.titleContainer} style = {{display : "flex",
                                                            justifyContent : "space-between",      
                                                            }}>
                <button id = "game" className = {styles.button} onClick = {() => {props.onGameClick}}>ONLINE GAME</button>
                <button id = "act" className = {styles.button} onClick = {() => {props.onActClick()}}>OUTDOOR ACTIVITIES</button>
            </div>
        </div>
    </>
}

export default Category;