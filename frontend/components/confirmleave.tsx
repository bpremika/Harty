import text from '../styles/text.module.css'

interface partyNameProps {
    name: string;
}

const Confirmleave = (props: partyNameProps) => {
    return <>
        <div style = {{overflow: "hidden", position: "relative", height:"174px", width: "501px", backgroundColor: "#19284D", borderRadius: "30px"
                    ,display: "flex", justifyContent: "center"}}>
            <div className={text.leaveText}
                style={{position: "absolute", top: "14.37%"}}>
                <div style = {{textAlign: "center", fontSize: "20px" }}>
                        อยากจะออกปาร์ตี้จริง ๆ หรอ?
                </div>
                <div style = {{textAlign: "center", fontSize: "16px"}}>
                    {`คุณแน่ใจหรือไม่ ว่าต้องการออกจากปาร์ตี้ ${props.name}`}
                </div>
            </div>

            <div style = {{position: "absolute", bottom: "0%",
                        backgroundColor: "#2B3B64", width: "501px", 
                        height: "59px"}}>
                <button className = {text.cancelButton}
                        style = {{position: "absolute", top: "20%", left:"7%"}}>
                    ยกเลิก
                </button>

                <button className = {text.leaveButton} 
                        style = {{position: "absolute", top: "20%", left: "60.28%"}}>
                    ออกจากปาร์ตี้
                </button>
            </div>


        </div>
    </>
}

export default Confirmleave;