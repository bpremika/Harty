import Member from "../components/chatcomponent/Member";
interface Props{
    member:string[];
}

const testival: Props = {
    member: ["a","b","c","a","b","c"]
}
function Cal(){
    const testival: Props = {
        member: ["a","b","c","a","b","c","a","b","c","a","b","c","a","b","c","a","b","c","a","b","c","a","b","c","a","b","c","a","b","c","a","b","c"]
    }
    return <Member member={testival.member} nummem={testival.member.length}/>;
}
 
 
export default Cal;