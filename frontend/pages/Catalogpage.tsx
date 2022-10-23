import { useRouter } from "next/router"
import  styles  from '../styles/Catalog.module.css'

export default function cate(){
    const router = useRouter();

    return (<div  style={{backgroundColor : "#16213E" ,height : "100vh" , }}>
            <h1 className = {styles.bar}>
                {router.query.name}

            </h1>
        </div>)
}


