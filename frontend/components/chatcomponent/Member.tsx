import st from "../../styles/member.module.css"
interface Props{
    member:string[];
    nummem:number;
    onClick:()=>void;
}

const Member=(props:Props)=> {
  return (
    <div className={st.memberbox}>
      <div className={st.excepttopbox}>

      <div className={st.number}>สมาชิก({props.nummem})</div>
      {props.member.map((item,index)=>( <div key={index} className={st.member}>{item}</div>))}
      </div>

      <button className={st.out} onClick={props.onClick}>ออกจากปาร์ตี้</button>
    </div>
  );
}
export default Member;