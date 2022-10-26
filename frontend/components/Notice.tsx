import Image, { StaticImageData } from "next/image"
import style from "../styles/shape.module.css"

interface imageProp{
    title : string;
    imageurl : StaticImageData;
}



const AddImage  = (props : imageProp) => {
    
    return <>
        <div style={{height: "346px", width: "100%",position:"relative",overflow:"hidden",display: "flex", justifyContent: "center"}}>
            <Image  src={props.imageurl} style={{
                
                width:"500px"
                // objectFit:"fill"
                ,position: "absolute"
            }} alt="" />
        </div>
    </>
}

const Notice = (props : imageProp) => {
    return <>
        <div> 
            dgrezdmgbidmb
            <AddImage {...props}/>
            <span className={style.dot} style={{position: "absolute", top: "50%", left: "8px"}}>
                <span className={[style.arrow,style.left].join(" " )}
                style = {{ left: "8px"}}></span>
            </span>
        
            <span className={style.dot}  style={{position: "absolute", top: "50%", right: "8px"}}>
                <span className={[style.arrow,style.right].join(" " )}
                style = {{ left: "7px"}}></span>
            </span>
        snfvsnrovlsn
        </div>
    </>
}

export default Notice;