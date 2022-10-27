import st from "../../styles/member.module.css"

interface Props{
    info:string;}

const ActicityInfo = (props:Props) => {
    return<>
        <div className={st.infobox}>
            <div className={st.infoheader}>
                รายละเอียดกิจกรรม
            </div>
            <div className={st.info}>
                <p>
                {props.info}
                </p>
            </div>
        </div>

    
    
    </>


}
export default ActicityInfo;