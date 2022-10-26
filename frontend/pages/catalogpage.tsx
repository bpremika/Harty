import { useRouter } from "next/router"
import  styles  from '../styles/catalog.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import SideBar from '../components/sidebar/sidebar'
import { CardnModal } from "../components/common/CardnModal";



export default function Cate(){
    const router = useRouter();
    interface Props{
        id: number;
        title : string;
        topic : string;
        image : string;
        info : string;
        tag : string[];
        numpeople : number;
        maxpeople : number;
        time:string;
        isPublic:boolean;
        master:string;
        date:string;
        starttime:string;
        endtime:string;
    }
    interface PartynTotal {
        total: number;
        parties: Props[];
    }
    
    const PartyCards = () =>{
        const [parties,setparties] = useState<PartynTotal | null>(null);
        const router = useRouter();
    
        function fetchallparties(){
            if (router.query.id == undefined) return;
            axios.get(`https://harty.onfirebyte.xyz/party/activity/${router.query.id}`).then(res=>{
                setparties(res.data);
            }).catch(e=>{})
        }
        useEffect(()=>{
            fetchallparties();
        },[router.isReady])
        
        return <>
        {
            parties===null?<div>Loading . . .</div>:<CardnModal data={parties.parties}/>
        }
        </>
    }

    return (<div  style={{backgroundColor : "#16213E" ,height : "100%" , width : "100vw" , display : "flex"}}>
                <SideBar/>
                <div style = {{display : "inline" , width : "100%"}}>
                    <h1 className = {styles.bar}>
                        {router.query.name}
                    </h1>
                    {/* ${router.query.id} */}
                    <div style={{margin : "90px" , width: "100%" }}>
                    
                        <PartyCards />

                    </div>
                </div>

        </div>)
}

