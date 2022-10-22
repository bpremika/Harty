import style from '../../styles/cardmodal.module.css'
import { LockClosedIcon,LockOpenIcon} from '@heroicons/react/20/solid'
import { StyleRegistry } from 'styled-jsx';

interface Props{
    title : string,
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
}
const Modal=(data:Props)=>{
    return <>
        <div className={style.card}>
            <div className={style.left}>
                <div className={style.imagebox}><img  className={style.cardimage}src={data.image} /></div>
                <div className={style.tagnparty}>
                <div className={style.tagsize}>
                        {data.tag.map((v,i)=>(<div key={i} className={style.tag}>
                            {v}
                        </div>))}
                </div>
                    <div className={style.time}>{data.time} mins ago</div>
                </div>
                <div className={style.infobox}>
                    <p className={style.info}>
                        {data.info}
                    </p>
                </div>

                </div>
            <div className={style.right}>
                <div className={style.title}>{data.title}</div>
                <div className={style.topic}>{data.topic}</div>
                <div className={style.statusnmaster}>
                        {data.isPublic ?  
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
                        
                        <div className={style.master}>โดย   {data.master}</div>
                </div>
                <div className={style.timendate}>
                        <div className={style.date}>{data.date}</div>
                        <div className={style.starttime}>{data.starttime}</div>
                </div>
                <div>
                    <div className={style.partysize}>
                        {data.numpeople}/{data.maxpeople}
                    </div>
                    <button className={style.joinbutton}>
                          {style.join}
                    </button>
                </div>
            </div>
        </div>
    </>
}

export default Modal;