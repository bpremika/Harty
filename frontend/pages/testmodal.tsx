import Modal from '../components/common/Modal'
import styles from '../styles/cardmodal.module.css'

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
    return <>
        <div className={styles.cardbackground}>
                <Modal title={t.title} topic={t.topic} isPublic={t.isPublic} image={t.image} info={t.info} tag={t.tag} numpeople={t.numpeople} maxpeople={t.maxpeople} time={t.time}
                master={t.master} date={t.date} starttime={t.starttime} endtime={t.endtime} />
            </div>
    </>
}

export default testr;