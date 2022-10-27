import style from '../../styles/cardmodal.module.css'
import { LockClosedIcon,LockOpenIcon,XMarkIcon} from '@heroicons/react/20/solid'
import { StyleRegistry } from 'styled-jsx';
import axios from 'axios';
import {DateTime} from 'luxon';
interface Carddto{
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
interface Props{
    data:Carddto;
    close:()=>void;    
}


const Modal=(props:Props)=>{
    async function Onclickjoin(){
        try{
            const message = await axios.post(`https://harty.onfirebyte.xyz/party/join/${props.data.id}`)
            if(message.data.message  ==='join party successful'){
                alert('Join party successful')
            }
        }
        catch(error){
            console.log("error")
        }
        }
        
        const units: Intl.RelativeTimeFormatUnit[] = [
            'year',
            'month',
            'week',
            'day',
            'hour',
            'minute',
            'second',
          ];
          
        const timeAgo = (dateTime: DateTime) => {
            const diff = dateTime.diffNow().shiftTo(...units);
            const unit = units.find((unit) => diff.get(unit) !== 0) || 'second';
          
            const relativeFormatter = new Intl.RelativeTimeFormat('en', {
              numeric: 'auto',
            });
            return relativeFormatter.format(Math.trunc(diff.as(unit)), unit);
          };
   

    const mago = DateTime.fromISO(props.data.time);
    const starttime = DateTime.fromISO(props.data.starttime).toFormat('HH:mm');
    const endtime = DateTime.fromISO(props.data.endtime).toFormat('HH:mm');
    const date = DateTime.fromISO(props.data.date).toFormat('dd/MM/yyyy');

    return <div className={style.transparentback}>
        <div className={style.card}>
            <div className={style.left}>
                <div className={style.imagebox}><img className={style.cardimage} src={props.data.image} /></div>
                <div className={style.tagnparty}>
                <div className={style.tagsize}>
                        {props.data.tag.map((v,i)=>(<div key={i} className={style.tag}>
                            {v}
                        </div>))}
                </div>
                    <div className={style.time}>{timeAgo(mago)}</div>
                </div>
                <div className={style.infobox}>
                    <p className={style.info}>
                        {props.data.info}
                    </p>
                </div>

                </div>
            <div className={style.right}>
                <div className={style.close} onClick={()=>props.close()}>
                    <XMarkIcon style={{cursor: 'pointer'}} />
                </div>
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
                        <div className={style.starttime}>{starttime}-{endtime}</div>
                        <div className={style.date}>{date}</div>
                </div>
                <div className={style.partysizenjoinbutton}>
                    <div className={style.partysize}>
                        {props.data.numpeople}/{props.data.maxpeople} คน
                    </div>
                        {props.data.isPublic ?  
                        <>
                                <button className={style.joinbutton} onClick={Onclickjoin}> JOIN PARTY </button>
                            </>
                        :<>
                                <button className={style.joinbutton} >REQUEST TO JOIN</button>
                            </>
                        }
                </div>
            </div>
        </div>
    </div>
}

export default Modal;