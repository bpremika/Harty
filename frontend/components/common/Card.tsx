import { StyleRegistry } from 'styled-jsx';
import style from  '../../styles/card.module.css';

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
    
}

const Card = (data:Props) => {
    return  <div className={style.card}>
        <div className={style.cardtop}>
            <div className={style.cardtitle}>
                <div className={style.title}>
                    {data.title}
                </div>
                <div className={style.topic}>
                    {data.topic}
                </div>
            </div >
            <div className={style.time}>
                {data.time} mins ago
            </div>
        </div>
        <div className={style.imagebox}><img  className={style.cardimage}src={data.image} /></div>
        <div className={style.tagnparty}>
        <div className={style.tagsize}>
                {data.tag.map((v,i)=>(<div key={i} className={style.tag}>
                    {v}
                </div>))}
        </div>
            <div className={style.partysize}>{data.numpeople} / {data.maxpeople}</div>
        </div>
        <div className={style.infobox}>
            <p className={style.info}>
                {data.info}
            </p>
        </div>
    </div>
}

export default Card