import { useRouter } from "next/router"

export default function cate(){
    const router = useRouter();

    return (<div>
        <h1>
            {router.query.name}
            {router.query.des}
        </h1>
        </div>)
}
