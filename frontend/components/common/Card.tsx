import { StyleRegistry } from 'styled-jsx';
import style from  '../../styles/card.module.css';
import {DateTime} from 'luxon';
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
    clicker : () => void;
    
}

const Card = (data:Props) => {
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
      const mago = DateTime.fromISO(data.time);
    
    return  (<>
    <div className={style.card} onClick={() => data.clicker()}>
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
                {timeAgo(mago)}
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
    </div></>)
}

export default Card