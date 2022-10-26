import { useRouter } from "next/router"
import  styles  from '../styles/Catalog.module.css'
import Modal from "../components/common/Modal";
import Card from "../components/common/Card";
import st from '../styles/landing.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SideBar from '../components/sidebar/sidebar'


export default function cate(){
    const router = useRouter();
    const kk = router.query.name;


    return (<div  style={{backgroundColor : "#16213E" ,height : "100%" , width : "100vw"}}>
                <SideBar/>
                
                <h1 className = {styles.bar}>
                    {router.query.name}
                </h1>
                
                <div style={{margin : "90px"}}>
                {/* {
                   // party
                } */}
                </div>

        </div>)
}


