import axios from "axios";
import Router, { useRouter } from "next/router";
import sty from "../../styles/Profilecard.module.css";
import {XMarkIcon} from '@heroicons/react/20/solid'
interface Props {
  user: string;
  image: string;
  close:()=>void;
}
const Profile = (props: Props) => {
  const router = useRouter();
  async function Onclick() {
    try {
      const res = await axios.post(
        `https://harty.onfirebyte.xyz/party/join/user/logout`
      );
    } catch (error) {
      console.log("error");
    } finally {
      router.push("/login");    
    }
  }
  return (
      <div className={sty.profilebox}>
      <div className={sty.close} onClick={()=>props.close()}><XMarkIcon /></div>
      <div className={sty.imagebox}>
        <img src={props.image} className={sty.image} />
      </div>
      <div className={sty.username}>{props.user}</div>

      <div onClick={() => {Onclick(); }} className={sty.logout}>
        Logout
      </div>
    </div>)}

export default Profile;
