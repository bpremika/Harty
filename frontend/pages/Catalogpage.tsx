import { useRouter } from "next/router"
import  styles  from '../styles/Catalog.module.css'
import Modal from "../components/common/Modal";
import Card from "../components/common/Card";
import st from '../styles/landing.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SideBar from '../components/sidebar/sidebar'


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
interface Lprops{
    data:Props[]
}

interface PartynTotal {
    total: number;
    parties: Props[];
}





function A(d:Lprops){
    const [modalID,setModalID] = useState<number | null>(null);
    return <>
    {modalID && <div className={st.formodal}>
        <Modal data={d.data.find(v=>v.id==modalID)!} close={()=>setModalID(null)}/>
        <div className={st.transparentback}>
        </div>
    </div> }
    
    <div className={st.base}>
    {d.data.map((e,i)=>{
        return(<div className={st.objectcard} key={e.id}>
                <Card id={e.id} title={e.title} topic={e.topic} image={e.image} info={e.info} tag={e.tag} 
                    numpeople={e.numpeople} maxpeople={e.maxpeople} time={e.time} isPublic={e.isPublic}
                    clicker={()=>setModalID(e.id)}/>
                    <div className={st.test}></div>
            </div>)
    })}
    </div>
    </>
}


export default function cate(){
    const router = useRouter();
    const [parties,setparties] = useState<PartynTotal | null>(null);
    
    function fetchallparties(){
        axios.get('https://harty.onfirebyte.xyz/party/').then(res=>{
            setparties(res.data);
        })
    }
    useEffect(()=>{
        fetchallparties();
    },[])
    useEffect(()=>{
        console.log(parties);
    },[parties])

    return (<div  style={{backgroundColor : "#16213E" ,height : "100%" , width : "100vw"}}>
                <SideBar/>
                
                <h1 className = {styles.bar}>
                    {router.query.name}
                </h1>

                <div style={{margin : "90px"}}>
                {
                    parties===null?<div>loading</div>:<A data={parties.parties}/>
                }
                </div>

        </div>)
}


