import { useState } from 'react';
import Modal from '../components/common/Modal'
import styles from '../styles/cardmodal.module.css'


interface Props{
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
const t={
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
    ว่าเหตุใดต้องมาทำร้ายกัน
    จากนี้ เรื่องราวที่มี
    ก็ให้ลืมมันไป
    อย่าจำว่าเคยเป็นใคร
    ว่ามีใครที่เคยทำร้าย
    คนอย่างฉัน
    ทุกวัน จวบจนวันนี้
    ชีวิตที่เราต้องมี
    จากนี้ต้องทำตัวเช่นไร
    น้ำตา ที่ยังรินไหล
    จากความรักที่มีทั้งใจ
    สุดท้ายเขานั้นหายไป
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
}

const testr = () => {
    const [modalID,setModalID] = useState<number | null>(null);
    
    return <>
        <div className={styles.cardbackground}>
                <Modal data={t} close={()=>setModalID(null)} />
            </div>
    </>
}

export default testr;