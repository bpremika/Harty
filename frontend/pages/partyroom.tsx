import MainChatCom from '../components/chatcomponent/MainChatCom';
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
    return <>
    <div>
        <MainChatCom member={testival.member} nummem={testival.member.length} onClick={()=>{}} info="test" image="/valorant.png"
        date= "2022-10-23T13:44:58.000Z"
        starttime= "2022-10-23T13:44:58.000Z"
        endtime= "2022-10-23T13:44:58.000Z"
        isPublic={true}
        topic="valorant"
        title='Jett rebibe me'/>
        
        
        
    </div>
    </>
    
}
 
 
export default Cal;