import { devNull } from "os";
import { useState } from "react";
import Profile from "../components/common/Profile";
import Profilesmall from "../components/common/Profilesmall";


export default function ProfileTest() {
    return (
        <div>
            <Profilesmall user='Bruce' image='/valorant.png'/>
        </div>
    );
}