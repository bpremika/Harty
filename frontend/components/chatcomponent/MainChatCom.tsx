import { ClassNames } from "@emotion/react";
import ActicityInfo from "./Activityinfo";
import Member from "./Member";
import strr from "../../styles/mainchatcom.module.css";
import {DateTime} from 'luxon';
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/20/solid";

interface Props{
    member:string[];
    nummem:number;
    onClick:()=>void;
    info:string;
    image:string;
    starttime:string;
    endtime:string;
    date:string;
    topic:string;
    title:string;
    isPublic:boolean;
}

const MainChatcom = (props:Props) => {
    const starttime = DateTime.fromISO(props.starttime).toFormat('HH:mm');
    const endtime = DateTime.fromISO(props.endtime).toFormat('HH:mm');
    const date = DateTime.fromISO(props.date).toFormat('dd/MM/yyyy');
    return<>
    <div className={strr.allbox}>
        <div className={strr.topic}>
            <div className={strr.subtopic}>
                <div className={strr.title}>
                    {props.title}
                </div>
                <div className={strr.topic2}>
                    {props.topic}
                </div>
            </div>
            <div className={strr.public}>
            {props.isPublic ?  
                        <>
                            <div className={strr.icon}>
                                <LockOpenIcon />
                            </div>
                                <div className={strr.partystatus}>กลุ่มสาธารณะ</div>
                            </>
                        : <>
                            <div className={strr.icon}>
                                <LockClosedIcon />
                            </div>
                                <div className={strr.partystatus}>กลุ่มส่วนตัว</div>
                            </>
                        }
            </div>
        </div>
        <div className={strr.maincard}>
            <div className={strr.firstbox}>
                <div className={strr.property}>
                    <div>
                        ระยะเวลากิจกรรม : {starttime}-{endtime}
                    </div>
                    <div>
                        วันที่นัดหมาย : {date}
                    </div>
                </div>
                <Member member={props.member} nummem={props.nummem} onClick={props.onClick}/>
            </div>

            <div className={strr.middlebox}>
                <div className={strr.imagebox}>
                    <img className={strr.image} src={props.image}/>
                </div>
                <ActicityInfo info={props.info}/>
            </div>
            <div className={strr.lastbox}>
                <img className={strr.chatim} src='/chat.png'/>
            </div>
        </div>
    </div>
    
    </>
    
    


}
export default MainChatcom;