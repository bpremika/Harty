import { profile } from "console";
import { useState } from "react";
import sty from "../../styles/Profilecard.module.css";
import Profile from "./Profile";

interface Props {
  user: string;
  image: string;
}

const Profilesmall = (props: Props) => {
  const [profile, setProfile] = useState<Props | null>(null);

  return (
    <>
      {profile && (
        <Profile
          user={profile.user}
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
