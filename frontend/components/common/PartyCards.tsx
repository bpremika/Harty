import axios from "axios";
import { useEffect, useState } from "react";
import { CardnModal } from "./CardnModal";

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

interface PartyCardProps{
    path : string;
}
const PartyCards = (props:PartyCardProps) =>{
    const [parties,setparties] = useState<PartynTotal | null>(null);
    
    function fetchallparties(){

            axios.get(`https://harty.onfirebyte.xyz/${props.path}`).then(res=>{
            setparties(res.data);
        }).catch(e=>console.log(e)
        )
    }
    useEffect(()=>{
        fetchallparties();
    },[])
    
    useEffect(()=>{
        console.log(parties);
    },[parties])
    return <>
    {
        parties===null?<div style={{color: 'white'}}>loading...</div>:<CardnModal data={parties.parties}/>
    }
    </>
}
 export default PartyCards