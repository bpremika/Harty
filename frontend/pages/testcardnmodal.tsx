import Modal from "../components/common/Modal";
import Card from "../components/common/Card";
import SideBar  from   '../components/sidebar/sidebar' ;
import st from '../styles/landing.module.css';
import { useState } from 'react';


interface Props{
    id: number;
    title : string;
    topic : string;
    image : string;
    info : string;
    tag : string[];
    numpeople : number;
    maxpeople : number;
    time:number;
    isPublic:boolean;
    master:string;
    date:string;
    starttime:string;
    endtime:string;
}
interface Lprops{
    data:Props[]
}

const t=[{
    id:1,
    title : "Jett revive me",
    topic : "Valorant",
    image : "/valorant.png",
    info : `สวัสดีครับคิด    อยู่ว่าต้องทนไหวจะทุกข์จะทนเท่าไรความรักจะพาหัวใจไปคิดเองว่าต้องทนไหวแต่ยิ่งทุกข์ยิ่งทนเท่าไรความรักที่มียิ่งหายไป
    จะโทษดินจะโทษน้ำ
    จะโทษเดือนและดาว
    กับเรื่องราวที่ปวดร้าว
    ที่เธอมาทำแล้วหนีไป
    ฟ้า ถ้าไม่ส่งมา ให้เธอมีใจ
    บอกกันสักคำเป็นไร
    ว่าเหตุใดต้องมาทำร้ายกั
    จะโทษดิน จะโทษน้ำ
    จะโทษเดือนและดาว`,
    tag : ["#RANK","#RANK"],
    numpeople : 1,
    maxpeople : 5,
    time:1,
    isPublic:true,
    master:"Inwpun",
    starttime:"14:05",
    endtime:"15:05",
    date:"01/01/2021",
},{
    id:2,
    title : "Jett  me",
    topic : "Valorant",
    image : "/valorant.png",
    info : `สวัสดีครับคิด    อยู่ว่าต้องทนไหวจะทุกข์จะทนเท่าไรความรักจะพาหัวใจไปคิดเองว่าต้องทนไหวแต่ยิ่งทุกข์ยิ่งทนเท่าไรความรักที่มียิ่งหายไป
    จะโทษดินจะโทษน้ำ
    จะโทษเดือนและดาว
    กับเรื่องราวที่ปวดร้าว
    ที่เธอมาทำแล้วหนีไป
    ฟ้า ถ้าไม่ส่งมา ให้เธอมีใจ
    บอกกันสักคำเป็นไร
    ว่าเหตุใดต้องมาทำร้ายกั
    จะโทษดิน จะโทษน้ำ
    จะโทษเดือนและดาว`,
    tag : ["#RANK","#RANK"],
    numpeople : 1,
    maxpeople : 5,
    time:1,
    isPublic:true,
    master:"Inwpun",
    starttime:"14:05",
    endtime:"15:05",
    date:"01/01/2021",
},{
    id:3,
    title : "Jett revive me",
    topic : "Valorant",
    image : "/valorant.png",
    info : `สวัสดีครับคิด    อยู่ว่าต้องทนไหวจะทุกข์จะทนเท่าไรความรักจะพาหัวใจไปคิดเองว่าต้องทนไหวแต่ยิ่งทุกข์ยิ่งทนเท่าไรความรักที่มียิ่งหายไป
    จะโทษดินจะโทษน้ำ
    จะโทษเดือนและดาว
    กับเรื่องราวที่ปวดร้าว
    ที่เธอมาทำแล้วหนีไป
    ฟ้า ถ้าไม่ส่งมา ให้เธอมีใจ
    บอกกันสักคำเป็นไร
    ว่าเหตุใดต้องมาทำร้ายกั
    จะโทษดิน จะโทษน้ำ
    จะโทษเดือนและดาว`,
    tag : ["#RANK","#RANK"],
    numpeople : 1,
    maxpeople : 5,
    time:1,
    isPublic:true,
    master:"Inwpun",
    starttime:"14:05",
    endtime:"15:05",
    date:"01/01/2021",
},{
    id:4,
    title : "Jett revive me",
    topic : "Valorant",
    image : "/valorant.png",
    info : `สวัสดีครับคิด    อยู่ว่าต้องทนไหวจะทุกข์จะทนเท่าไรความรักจะพาหัวใจไปคิดเองว่าต้องทนไหวแต่ยิ่งทุกข์ยิ่งทนเท่าไรความรักที่มียิ่งหายไป
    จะโทษดินจะโทษน้ำ
    จะโทษเดือนและดาว
    กับเรื่องราวที่ปวดร้าว
    ที่เธอมาทำแล้วหนีไป
    ฟ้า ถ้าไม่ส่งมา ให้เธอมีใจ
    บอกกันสักคำเป็นไร
    ว่าเหตุใดต้องมาทำร้ายกั
    จะโทษดิน จะโทษน้ำ
    จะโทษเดือนและดาว`,
    tag : ["#RANK","#RANK"],
    numpeople : 1,
    maxpeople : 5,
    time:1,
    isPublic:true,
    master:"Inwpun",
    starttime:"14:05",
    endtime:"15:05",
    date:"01/01/2021",
},{
    id:5,
    title : "Jett revive me",
    topic : "Valorant",
    image : "/valorant.png",
    info : `สวัสดีครับคิด    อยู่ว่าต้องทนไหวจะทุกข์จะทนเท่าไรความรักจะพาหัวใจไปคิดเองว่าต้องทนไหวแต่ยิ่งทุกข์ยิ่งทนเท่าไรความรักที่มียิ่งหายไป
    จะโทษดินจะโทษน้ำ
    จะโทษเดือนและดาว
    กับเรื่องราวที่ปวดร้าว
    ที่เธอมาทำแล้วหนีไป
    ฟ้า ถ้าไม่ส่งมา ให้เธอมีใจ
    บอกกันสักคำเป็นไร
    ว่าเหตุใดต้องมาทำร้ายกั
    จะโทษดิน จะโทษน้ำ
    จะโทษเดือนและดาว`,
    tag : ["#RANK","#RANK"],
    numpeople : 1,
    maxpeople : 5,
    time:1,
    isPublic:true,
    master:"Inwpun",
    starttime:"14:05",
    endtime:"15:05",
    date:"01/01/2021",
},{
    id:6,
    title : "Jett revive me",
    topic : "Valorant",
    image : "/valorant.png",
    info : `สวัสดีครับคิด    อยู่ว่าต้องทนไหวจะทุกข์จะทนเท่าไรความรักจะพาหัวใจไปคิดเองว่าต้องทนไหวแต่ยิ่งทุกข์ยิ่งทนเท่าไรความรักที่มียิ่งหายไป
    จะโทษดินจะโทษน้ำ
    จะโทษเดือนและดาว
    กับเรื่องราวที่ปวดร้าว
    ที่เธอมาทำแล้วหนีไป
    ฟ้า ถ้าไม่ส่งมา ให้เธอมีใจ
    บอกกันสักคำเป็นไร
    ว่าเหตุใดต้องมาทำร้ายกั
    จะโทษดิน จะโทษน้ำ
    จะโทษเดือนและดาว`,
    tag : ["#RANK","#RANK"],
    numpeople : 1,
    maxpeople : 5,
    time:1,
    isPublic:true,
    master:"Inwpun",
    starttime:"14:05",
    endtime:"15:05",
    date:"01/01/2021",
},{
    id:8,
    title : "Jett revive me",
    topic : "Valorant",
    image : "/valorant.png",
    info : `สวัสดีครับคิด    อยู่ว่าต้องทนไหวจะทุกข์จะทนเท่าไรความรักจะพาหัวใจไปคิดเองว่าต้องทนไหวแต่ยิ่งทุกข์ยิ่งทนเท่าไรความรักที่มียิ่งหายไป
    จะโทษดินจะโทษน้ำ
    จะโทษเดือนและดาว
    กับเรื่องราวที่ปวดร้าว
    ที่เธอมาทำแล้วหนีไป
    ฟ้า ถ้าไม่ส่งมา ให้เธอมีใจ
    บอกกันสักคำเป็นไร
    ว่าเหตุใดต้องมาทำร้ายกั
    จะโทษดิน จะโทษน้ำ
    จะโทษเดือนและดาว`,
    tag : ["#RANK","#RANK"],
    numpeople : 1,
    maxpeople : 5,
    time:1,
    isPublic:true,
    master:"Inwpun",
    starttime:"14:05",
    endtime:"15:05",
    date:"01/01/2021",
},{
    id:9,
    title : "Jett revive me",
    topic : "Valorant",
    image : "/valorant.png",
    info : `สวัสดีครับคิด    อยู่ว่าต้องทนไหวจะทุกข์จะทนเท่าไรความรักจะพาหัวใจไปคิดเองว่าต้องทนไหวแต่ยิ่งทุกข์ยิ่งทนเท่าไรความรักที่มียิ่งหายไป
    จะโทษดินจะโทษน้ำ
    จะโทษเดือนและดาว
    กับเรื่องราวที่ปวดร้าว
    ที่เธอมาทำแล้วหนีไป
    ฟ้า ถ้าไม่ส่งมา ให้เธอมีใจ
    บอกกันสักคำเป็นไร
    ว่าเหตุใดต้องมาทำร้ายกั
    จะโทษดิน จะโทษน้ำ
    จะโทษเดือนและดาว`,
    tag : ["#RANK","#RANK"],
    numpeople : 1,
    maxpeople : 5,
    time:1,
    isPublic:true,
    master:"Inwpun",
    starttime:"14:05",
    endtime:"15:05",
    date:"01/01/2021",
},{
    id:10,
    title : "Jett revive me",
    topic : "Valorant",
    image : "/valorant.png",
    info : `สวัสดีครับคิด    อยู่ว่าต้องทนไหวจะทุกข์จะทนเท่าไรความรักจะพาหัวใจไปคิดเองว่าต้องทนไหวแต่ยิ่งทุกข์ยิ่งทนเท่าไรความรักที่มียิ่งหายไป
    จะโทษดินจะโทษน้ำ
    จะโทษเดือนและดาว
    กับเรื่องราวที่ปวดร้าว
    ที่เธอมาทำแล้วหนีไป
    ฟ้า ถ้าไม่ส่งมา ให้เธอมีใจ
    บอกกันสักคำเป็นไร
    ว่าเหตุใดต้องมาทำร้ายกั
    จะโทษดิน จะโทษน้ำ
    จะโทษเดือนและดาว`,
    tag : ["#RANK","#RANK"],
    numpeople : 1,
    maxpeople : 5,
    time:1,
    isPublic:true,
    master:"Inwpun",
    starttime:"14:05",
    endtime:"15:05",
    date:"01/01/2021",
},{
    id:11,
    title : "Jett revive me",
    topic : "Valorant",
    image : "/valorant.png",
    info : `สวัสดีครับคิด    อยู่ว่าต้องทนไหวจะทุกข์จะทนเท่าไรความรักจะพาหัวใจไปคิดเองว่าต้องทนไหวแต่ยิ่งทุกข์ยิ่งทนเท่าไรความรักที่มียิ่งหายไป
    จะโทษดินจะโทษน้ำ
    จะโทษเดือนและดาว
    กับเรื่องราวที่ปวดร้าว
    ที่เธอมาทำแล้วหนีไป
    ฟ้า ถ้าไม่ส่งมา ให้เธอมีใจ
    บอกกันสักคำเป็นไร
    ว่าเหตุใดต้องมาทำร้ายกั
    จะโทษดิน จะโทษน้ำ
    จะโทษเดือนและดาว`,
    tag : ["#RANK","#RANK"],
    numpeople : 1,
    maxpeople : 5,
    time:1,
    isPublic:true,
    master:"Inwpun",
    starttime:"14:05",
    endtime:"15:05",
    date:"01/01/2021",
},{
    id:12,
    title : "Jett revive me",
    topic : "Valorant",
    image : "/valorant.png",
    info : `สวัสดีครับคิด    อยู่ว่าต้องทนไหวจะทุกข์จะทนเท่าไรความรักจะพาหัวใจไปคิดเองว่าต้องทนไหวแต่ยิ่งทุกข์ยิ่งทนเท่าไรความรักที่มียิ่งหายไป
    จะโทษดินจะโทษน้ำ
    จะโทษเดือนและดาว
    กับเรื่องราวที่ปวดร้าว
    ที่เธอมาทำแล้วหนีไป
    ฟ้า ถ้าไม่ส่งมา ให้เธอมีใจ
    บอกกันสักคำเป็นไร
    ว่าเหตุใดต้องมาทำร้ายกั
    จะโทษดิน จะโทษน้ำ
    จะโทษเดือนและดาว`,
    tag : ["#RANK","#RANK"],
    numpeople : 1,
    maxpeople : 5,
    time:1,
    isPublic:true,
    master:"Inwpun",
    starttime:"14:05",
    endtime:"15:05",
    date:"01/01/2021",
},{
    id:13,
    title : "Jett revive me",
    topic : "Valorant",
    image : "/valorant.png",
    info : `สวัสดีครับคิด    อยู่ว่าต้องทนไหวจะทุกข์จะทนเท่าไรความรักจะพาหัวใจไปคิดเองว่าต้องทนไหวแต่ยิ่งทุกข์ยิ่งทนเท่าไรความรักที่มียิ่งหายไป
    จะโทษดินจะโทษน้ำ
    จะโทษเดือนและดาว
    กับเรื่องราวที่ปวดร้าว
    ที่เธอมาทำแล้วหนีไป
    ฟ้า ถ้าไม่ส่งมา ให้เธอมีใจ
    บอกกันสักคำเป็นไร
    ว่าเหตุใดต้องมาทำร้ายกั
    จะโทษดิน จะโทษน้ำ
    จะโทษเดือนและดาว`,
    tag : ["#RANK","#RANK"],
    numpeople : 1,
    maxpeople : 5,
    time:1,
    isPublic:true,
    master:"Inwpun",
    starttime:"14:05",
    endtime:"15:05",
    date:"01/01/2021",
},{
    id:14,
    title : "Jett revive me",
    topic : "Valorant",
    image : "/valorant.png",
    info : `สวัสดีครับคิด    อยู่ว่าต้องทนไหวจะทุกข์จะทนเท่าไรความรักจะพาหัวใจไปคิดเองว่าต้องทนไหวแต่ยิ่งทุกข์ยิ่งทนเท่าไรความรักที่มียิ่งหายไป
    จะโทษดินจะโทษน้ำ
    จะโทษเดือนและดาว
    กับเรื่องราวที่ปวดร้าว
    ที่เธอมาทำแล้วหนีไป
    ฟ้า ถ้าไม่ส่งมา ให้เธอมีใจ
    บอกกันสักคำเป็นไร
    ว่าเหตุใดต้องมาทำร้ายกั
    จะโทษดิน จะโทษน้ำ
    จะโทษเดือนและดาว`,
    tag : ["#RANK","#RANK"],
    numpeople : 1,
    maxpeople : 5,
    time:1,
    isPublic:true,
    master:"Inwpun",
    starttime:"14:05",
    endtime:"15:05",
    date:"01/01/2021",
}]


function a(d:Lprops){
    const [modalID,setModalID] = useState<number | null>(null);
    return <>
    {modalID && <div className={st.formodal}>
        <Modal data={d.data.find(v=>v.id==modalID)!} close={()=>setModalID(null)}/>
        <div className={st.transparentback}>
        </div>
    </div> }
    
     <div className={st.base}>
    {d.data.map((e,i)=>{
            return(<div className={st.objectcard}>
                <Card key={i} id={e.id} title={e.title} topic={e.topic} image={e.image} info={e.info} tag={e.tag} 
                    numpeople={e.numpeople} maxpeople={e.maxpeople} time={e.time} isPublic={e.isPublic}
                    clicker={()=>setModalID(e.id)}/>
                    <div className={st.test}></div>
            </div>)
    })}
    </div>
    </>
}


const tester = () => {
    return a({data:t})
}


export default tester;