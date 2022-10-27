import { profile } from "console";
import { useEffect, useState } from "react";
import sty from "../../styles/Profilecard.module.css";
import Profile from "./Profile";
import axios from 'axios'

interface Props {
  image: string;
}

const Profilesmall = (props: Props) => {
  const [profile, setProfile] = useState<Props | null>(null);
  const [user, setUser] = useState('');
  
  function fetchUser() {
    axios.get('https://harty.onfirebyte.xyz/me', {withCredentials: true}).then(res => {
      console.log(res.data)
      setUser(res.data)
    }).catch(e => console.log(e))
  }

  useEffect(() => {
    fetchUser()
  },[])

  useEffect(() => {
    console.log(user)
  },[user])

  return (
    <>
      {profile && (
        <Profile
          user= {user}
          image={profile.image}
          close={() => setProfile(null)}
        />
      )}

      {profile === null ? (
        <div className={sty.imagebox} onClick={() => setProfile(props)}>
            <img src={props.image} className={sty.image} />
        </div>
      ) : null}
    </>
  );
};

export default Profilesmall;
