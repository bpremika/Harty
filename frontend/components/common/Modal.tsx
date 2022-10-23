import style from '../../styles/cardmodal.module.css'
import { LockClosedIcon,LockOpenIcon} from '@heroicons/react/20/solid'
import { StyleRegistry } from 'styled-jsx';

interface Carddto{
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
interface Props{
    data:Carddto;}
const Modal=(props:Props)=>{
    return <>
        <div className={style.card}>
            <div className={style.left}>
                <div className={style.imagebox}><img  className={style.cardimage}src={props.data.image} /></div>
                <div className={style.tagnparty}>
                <div className={style.tagsize}>
                        {props.data.tag.map((v,i)=>(<div key={i} className={style.tag}>
                            {v}
                        </div>))}
                </div>
                    <div className={style.time}>{props.data.time} mins ago</div>
                </div>
                <div className={style.infobox}>
                    <p className={style.info}>
                        {props.data.info}
                    </p>
                </div>

                </div>
            <div className={style.right}>
                <div className={style.title}>{props.data.title}</div>
                <div className={style.topic}>{props.data.topic}</div>
                <div className={style.statusnmaster}>
                        {props.data.isPublic ?  
                        <>
                            <div className={style.icon}>
                                <LockOpenIcon />
                            </div>
                                <div className={style.partystatus}>กลุ่มสาธารณะ</div>
                            </>
                        : <>
                            <div className={style.icon}>
                                <LockClosedIcon />
                            </div>
                                <div className={style.partystatus}>กลุ่มส่วนตัว</div>
                            </>
                        }
                        
                        <div className={style.master}>โดย   {props.data.master}</div>
                </div>
                <div className={style.timendate}>
                        <div className={style.starttime}>{props.data.starttime}-{props.data.endtime}</div>
                        <div className={style.date}>{props.data.date}</div>
                </div>
                <div className={style.partysizenjoinbutton}>
                    <div className={style.partysize}>
                        {props.data.numpeople}/{props.data.maxpeople} คน
                    </div>
                        {props.data.isPublic ?  
                        <>
                                <button className={style.joinbutton}>JOIN PARTY</button>
                            </>
                        :<>
                                <button className={style.joinbutton}>REQUEST TO JOIN</button>
                            </>
                        }
                </div>
            </div>
        </div>
    </>
}

export default Modal;