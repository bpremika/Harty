import SideBar from '../components/sidebar/sidebar'
import Actpic from '../components/activitypicture/act_pic'
import  styles  from '../styles/Catalog.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';



interface Picture{
    name : string;
    img_url : string;
    id : number

}

interface Prop{
        pic1 : Picture[]
        pic2 : Picture[]
    }


 function catalog(){
    const[games,setgames] = useState<Picture[]>([])
    const[outdoors,setoutdoors] = useState<Picture[]>([])

    useEffect (()=>{
        console.log("dddddddddd")
        axios.get<Picture[]>('https://harty.onfirebyte.xyz/activities',  {params:{category:"OnlineGame"}}   ).then((v)=>{
            setgames(v.data)
        })
        axios.get<Picture[]>('https://harty.onfirebyte.xyz/activities',  {params:{category:"OutdoorActivity"}}   ).then((v)=>{
            setoutdoors(v.data)
        })


    },[ ])
    
    const [isShowMoreG,setShowG] = useState(false)
    function showhideG(){
        setShowG(!isShowMoreG);
    }
    const [isShowMoreA,setShowA] = useState(false)
    function showhideA(){
        setShowA(!isShowMoreA);
    }

    return (<div style={{display : 'flex' , backgroundColor : '#16213E' , height : "100%" , width : "100%"}} >
                <SideBar/>
                <div style={{display:"inline-block"}}>
                <div className={styles.bar}>Online Game</div>

                <div className={styles.box}>
                    <div className={styles.pic}>
                        {
                            isShowMoreG ? (games.map((v,i)=>(
                            <div style={{margin : "15px"}}>
                                <Actpic  name = {v.name} URL = {v.img_url} id = {v.id}/>
                            </div>
                            ))) 
                            : (games.slice(0,8).map((v,i)=>(
                                <div style={{margin : "15px"}}>
                                    <Actpic  name = {v.name} URL = {v.img_url} id = {v.id} />
                                </div>
                                )))
                        }
                    </div>
                        <div style={{margin : "auto"}}>
                            <button className={styles.show} onClick = {showhideG} > {!isShowMoreG ? "Show More v" : "Show Less ^"} </button>
                        </div>
                </div>

                <div className={styles.bar}>Outdoor Activity</div>

                <div className={styles.box}>
                    <div className={styles.pic}>
                        {
                            isShowMoreA ? (outdoors.map((v,i)=>(
                            <div style={{margin : "15px"}}>
                                <Actpic  name = {v.name} URL = {v.img_url}  id = {v.id}/>
                            </div>
                            ))) 
                            :    (outdoors.slice(0,8).map((v,i)=>(
                                <div style={{margin : "15px"}}>
                                    <Actpic  name = {v.name} URL = {v.img_url} id = {v.id}/>
                                </div>
                                )))
                        }
                    </div>
                        <div style={{margin : "auto"}}>
                            <button className={styles.show} onClick = {showhideA} > {!isShowMoreA ? "Show more v" : "Show Less ^"} </button>
                        </div>
                </div>
                </div>
        </div>)
}
export default catalog