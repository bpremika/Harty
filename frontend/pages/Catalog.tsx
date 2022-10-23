import SideBar from '../components/sidebar/sidebar'
import Actpic from '../components/activitypicture/act_pic'
import  styles  from '../styles/Catalog.module.css'
import { WRAPPER_PADDING } from '@mantine/core/lib/SegmentedControl/SegmentedControl.styles';
import { Button } from '@mantine/core';
import { text } from 'stream/consumers';
import { useState } from 'react';
import { wrap } from 'module';
import { ChevronDownIcon } from '@heroicons/react/20/solid';



interface Picture{
    name : string;
    URL : string;
    linking : string
}

interface Prop{
        pic1 : Picture[]
        pic2 : Picture[]
    }

const game = [{name : "Harbor" , URL : "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt30cd60b083954711/634896353b9a3d285e1b6cc1/patch508_Banner.jpg?auto=webp&disable=upscale&height=504" ,linking : "https://nattee.net/grader"},
{name : "Pubg" , URL : "https://www.techoffside.com/wp-content/uploads/2021/12/PUBG-Mobile-001.webp",linking : ""},
{name : "Overwatch2" , URL : "https://image.api.playstation.com/vulcan/ap/rnd/202209/2115/Uopbez9uDdyo77Y0SJ55glkE.png",linking : ""},
{name : "Rust" , URL : "data:image/jpeg;base64,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",linking : ""},
{name : "Zomboid" , URL : "https://cdn.akamai.steamstatic.com/steam/apps/108600/capsule_616x353.jpg?t=1655867638",linking : ""},
{name : "Stardrew Valley" , URL : "https://cdn.akamai.steamstatic.com/steam/apps/413150/capsule_616x353.jpg?t=1608624324",linking : ""},
{name : "Minecraft" , URL : "https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg",linking : ""},
{name : "ARK : Survival" , URL : "https://upload.wikimedia.org/wikipedia/en/2/2b/ArkSurvivalEvolved.png",linking : ""},
{name : "LeagurOfLegend" , URL : "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LeagueofLegends_RiotGames_S2_1200x1600-7fd64f0f7b674900bdd172967865d545",linking : ""},
{name : "CallOfDuty" , URL : "https://image.api.playstation.com/cdn/UP0002/CUSA04762_00/hvnLMFIUbVVGomXCNLL499iTbDj0RMM9VfWNxnEqJkW4LpFUS1Y0gCLi7LZYxiFD.png",linking : ""},
{name : "Dota2" , URL : "https://cdn.akamai.steamstatic.com/steam/apps/570/capsule_616x353.jpg?t=1666237243",linking : ""},
{name : "Rov" , URL : "https://img.4gamers.com.tw/ckfinder-th/images/RoV%20New%20Era%20(9)_Logo.jpg?versionId=bSvtBAoNjSe4qGuPzGD2trTodhXgh0if",linking : ""},
{name : "Harbor" , URL : "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt30cd60b083954711/634896353b9a3d285e1b6cc1/patch508_Banner.jpg?auto=webp&disable=upscale&height=504",linking : ""},
{name : "Pubg" , URL : "https://www.techoffside.com/wp-content/uploads/2021/12/PUBG-Mobile-001.webp",linking : ""},
{name : "Overwatch2" , URL : "https://image.api.playstation.com/vulcan/ap/rnd/202209/2115/Uopbez9uDdyo77Y0SJ55glkE.png",linking : ""},
{name : "Rust" , URL : "data:image/jpeg;base64,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",linking : ""},
{name : "Zomboid" , URL : "https://cdn.akamai.steamstatic.com/steam/apps/108600/capsule_616x353.jpg?t=1655867638",linking : ""},
{name : "Stardrew Valley" , URL : "https://cdn.akamai.steamstatic.com/steam/apps/413150/capsule_616x353.jpg?t=1608624324",linking : ""},
{name : "Minecraft" , URL : "https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg",linking : ""},
{name : "ARK : Survival" , URL : "https://upload.wikimedia.org/wikipedia/en/2/2b/ArkSurvivalEvolved.png",linking : ""},
{name : "LeagurOfLegend" , URL : "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LeagueofLegends_RiotGames_S2_1200x1600-7fd64f0f7b674900bdd172967865d545",linking : ""},
{name : "CallOfDuty" , URL : "https://image.api.playstation.com/cdn/UP0002/CUSA04762_00/hvnLMFIUbVVGomXCNLL499iTbDj0RMM9VfWNxnEqJkW4LpFUS1Y0gCLi7LZYxiFD.png",linking : ""},
{name : "Dota2" , URL : "https://cdn.akamai.steamstatic.com/steam/apps/570/capsule_616x353.jpg?t=1666237243",linking : ""},
{name : "Rov" , URL : "https://img.4gamers.com.tw/ckfinder-th/images/RoV%20New%20Era%20(9)_Logo.jpg?versionId=bSvtBAoNjSe4qGuPzGD2trTodhXgh0if",linking : ""},
{name : "Harbor" , URL : "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt30cd60b083954711/634896353b9a3d285e1b6cc1/patch508_Banner.jpg?auto=webp&disable=upscale&height=504",linking : ""},
{name : "Pubg" , URL : "https://www.techoffside.com/wp-content/uploads/2021/12/PUBG-Mobile-001.webp",linking : ""},
{name : "Overwatch2" , URL : "https://image.api.playstation.com/vulcan/ap/rnd/202209/2115/Uopbez9uDdyo77Y0SJ55glkE.png",linking : ""},
{name : "Rust" , URL : "data:image/jpeg;base64,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",linking : ""},
{name : "Zomboid" , URL : "https://cdn.akamai.steamstatic.com/steam/apps/108600/capsule_616x353.jpg?t=1655867638",linking : ""},
{name : "Stardrew Valley" , URL : "https://cdn.akamai.steamstatic.com/steam/apps/413150/capsule_616x353.jpg?t=1608624324",linking : ""},
{name : "Minecraft" , URL : "https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg",linking : ""},
{name : "ARK : Survival" , URL : "https://upload.wikimedia.org/wikipedia/en/2/2b/ArkSurvivalEvolved.png",linking : ""},
{name : "LeagurOfLegend" , URL : "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LeagueofLegends_RiotGames_S2_1200x1600-7fd64f0f7b674900bdd172967865d545",linking : ""},
{name : "CallOfDuty" , URL : "https://image.api.playstation.com/cdn/UP0002/CUSA04762_00/hvnLMFIUbVVGomXCNLL499iTbDj0RMM9VfWNxnEqJkW4LpFUS1Y0gCLi7LZYxiFD.png",linking : ""},
{name : "Dota2" , URL : "https://cdn.akamai.steamstatic.com/steam/apps/570/capsule_616x353.jpg?t=1666237243",linking : ""},
{name : "Rov" , URL : "https://img.4gamers.com.tw/ckfinder-th/images/RoV%20New%20Era%20(9)_Logo.jpg?versionId=bSvtBAoNjSe4qGuPzGD2trTodhXgh0if",linking : ""}]

const outdoor =[{name : "Camping" , URL : "https://eastwestbank.com/ReachFurther/NewsArticleStore/938/Camping_and_Outdoor_Activity_full2.jpg",linking : ""},
                {name : "Football" , URL : "https://thephysiocompany.co.uk/wp-content/uploads/football.jpg",linking : ""},
                {name : "Badminton" , URL : "https://www.healthfitnessrevolution.com/wp-content/uploads/2014/03/badminton-1428047_1920-2.jpg",linking : ""},
                {name : "Basketball" , URL : "https://stacknj.com/wp-content/uploads/2021/08/basketball.jpeg",linking : ""},
                {name : "Swimming" , URL : "https://caloriecontrol.org/wp-content/uploads/steviabenefits.orgphotodune-4711110-swimmin-db9729c208358bfc14bf08498ac1fdc75abaf6d6.jpg",linking : ""},
                {name : "Cycling" , URL : "https://blog-images.pharmeasy.in/2020/10/26184910/shutterstock_192451625-1.jpg",linking : ""},
                {name : "Running" , URL : "https://www.news-medical.net/images/Article_Images/ImageForArticle_22980_16600577310868068.jpg",linking : ""},
                {name : "Reading" , URL : "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/09/reading-book-1296x728-header.jpg?w=1155&h=1528",linking : ""},
                {name : "Golf" , URL : "https://rubiconleisure.co.uk/wp-content/uploads/2019/08/golf-header-image.jpg",linking : ""},
                {name : "Fitness" , URL : "https://www.basic-fit.com/dw/image/v2/BDFP_PRD/on/demandware.static/-/Library-Sites-basic-fit-shared-library/default/dw526eff58/training-hot/Fitness%20suport%20header.jpg?sw=1440&sfrm=jpeg",linking : ""},
                {name : "Dance" , URL : "https://www.thestreetratchada.com/upload/contents/1648463686group-of-young-modern-dancers-dancing-in-the-studi-2021-08-29-09-07-46-utc-2.jpg",linking : ""},
                {name : "Table Tennis" , URL : "https://blog.playo.co/wp-content/uploads/2017/03/table-tennis-shots.jpg",linking : ""},
                {name : "Camping" , URL : "https://eastwestbank.com/ReachFurther/NewsArticleStore/938/Camping_and_Outdoor_Activity_full2.jpg",linking : ""}]



 function catalog(props : Prop){
    // interface ShowMoreProp{
    //     children : string;
    // }
    
    // const ShowMore = ({children} : ShowMoreProp) =>{
    //     const text = children;
    //     const [isShowMore, setIsShowMore]  =useState(true);
    //     const click = () =>{
    //         setIsShowMore(!isShowMore);
    //     };
    //     return (
    //         <h1 className = "text">
    //             {isShowMore ? text.slice(0,6) : text}
    //             <span onClick={click} className="read-or-hide">
    //                 {isShowMore ? "Show more ᐯ" : "Show less ^"}
    //             </span>
    //         </h1>

    //     )
    // }
    const [isShowMoreG,setShowG] = useState(false)
    function showhideG(){
        setShowG(!isShowMoreG);
    }
    const [isShowMoreA,setShowA] = useState(false)
    function showhideA(){
        setShowA(!isShowMoreA);
    }





    return (<div style={{display : 'inline-block' , backgroundColor : '#16213E'}} >
                <SideBar/>
                <div className={styles.bar}>Online Game</div>

                <div className={styles.box}>
                    <div className={styles.pic}>
                        {
                            isShowMoreG ? (props.pic1.map((v,i)=>(
                            <div style={{margin : "10px"}}>
                                <Actpic  name = {v.name} URL = {v.URL} linking = {v.linking}/>
                            </div>
                            ))) 
                            :    (<div style={{display : "flex" , flexWrap : "wrap"}}>
                                        <div style={{margin : "10px"}}>
                                            <Actpic  name = {props.pic1[0].name} URL = {props.pic1[0].URL} linking = {props.pic1[0].linking}/>
                                        </div>      
                                        <div style={{margin : "10px"}}>
                                            <Actpic  name = {props.pic1[1].name} URL = {props.pic1[1].URL} linking = {props.pic1[1].linking}/>
                                        </div>     
                                        <div style={{margin : "10px"}}>
                                            <Actpic  name = {props.pic1[2].name} URL = {props.pic1[2].URL} linking = {props.pic1[2].linking}/>
                                        </div>  
                                        <div style={{margin : "10px"}}>
                                            <Actpic  name = {props.pic1[3].name} URL = {props.pic1[3].URL} linking = {props.pic1[3].linking}/>
                                        </div> 
                                        <div style={{margin : "10px"}}>
                                            <Actpic  name = {props.pic1[4].name} URL = {props.pic1[4].URL} linking = {props.pic1[4].linking}/>
                                        </div> 
                                        <div style={{margin : "10px"}}>
                                            <Actpic  name = {props.pic1[5].name} URL = {props.pic1[5].URL} linking = {props.pic1[5].linking}/>
                                        </div> 
                                        <div style={{margin : "10px"}}>
                                            <Actpic  name = {props.pic1[6].name} URL = {props.pic1[6].URL} linking = {props.pic1[6].linking}/>
                                        </div> 
                                        <div style={{margin : "10px"}}>
                                            <Actpic  name = {props.pic1[7].name} URL = {props.pic1[7].URL} linking = {props.pic1[7].linking}/>
                                        </div>            
                                        <div style={{margin : "10px"}}>
                                            <Actpic  name = {props.pic1[8].name} URL = {props.pic1[8].URL} linking = {props.pic1[8].linking}/>
                                        </div> 
                                        <div style={{margin : "10px"}}>
                                            <Actpic  name = {props.pic1[9].name} URL = {props.pic1[9].URL} linking = {props.pic1[9].linking}/>
                                        </div>                        
                                    </div>)
                        }
                    </div>
                        <div style={{margin : "auto"}}>
                            <button className={styles.show} onClick = {showhideG} > {!isShowMoreG ? "Show More v" : "Show Less ^"} </button>
                        </div>
                </div>

                <div className={styles.bar}>Outdoor Activity</div>

                <div className={styles.box}>
                    <div className={styles.pic}>
                        {
                            isShowMoreA ? (props.pic2.map((v,i)=>(
                            <div style={{margin : "10px"}}>
                                <Actpic  name = {v.name} URL = {v.URL} linking = {v.linking}/>
                            </div>
                            ))) 
                            :    (<div style={{display : "flex", flexWrap : 'wrap'}}>
                                        <div style={{margin : "10px"}}>
                                            <Actpic  name = {props.pic2[0].name} URL = {props.pic2[0].URL}  linking = {props.pic2[0].linking}/>
                                        </div>      
                                        <div style={{margin : "10px"}}>
                                            <Actpic  name = {props.pic2[1].name} URL = {props.pic2[1].URL} linking = {props.pic2[1].linking}/>
                                        </div>     
                                        <div style={{margin : "10px"}}>
                                            <Actpic  name = {props.pic2[2].name} URL = {props.pic2[2].URL} linking = {props.pic2[2].linking}/>
                                        </div>  
                                        <div style={{margin : "10px"}}>
                                            <Actpic  name = {props.pic2[3].name} URL = {props.pic2[3].URL} linking = {props.pic2[3].linking}/>
                                        </div> 
                                        <div style={{margin : "10px"}}>
                                            <Actpic  name = {props.pic2[4].name} URL = {props.pic2[4].URL} linking = {props.pic2[4].linking}/>
                                        </div> 
                                        <div style={{margin : "10px"}}>
                                            <Actpic  name = {props.pic2[5].name} URL = {props.pic2[5].URL} linking = {props.pic2[5].linking}/>
                                        </div> 
                                        <div style={{margin : "10px"}}>
                                            <Actpic  name = {props.pic2[6].name} URL = {props.pic2[6].URL} linking = {props.pic2[6].linking}/>
                                        </div> 
                                        <div style={{margin : "10px"}}>
                                            <Actpic  name = {props.pic2[7].name} URL = {props.pic2[7].URL} linking = {props.pic2[7].linking}/>
                                        </div>      
                                        <div style={{margin : "10px"}}>
                                            <Actpic  name = {props.pic2[8].name} URL = {props.pic2[8].URL} linking = {props.pic2[8].linking}/>
                                        </div>     
                                        <div style={{margin : "10px"}}>
                                            <Actpic  name = {props.pic2[9].name} URL = {props.pic2[9].URL} linking = {props.pic2[9].linking}/>
                                        </div>                                 
                                    </div>)
                        }
                    </div>
                        <div style={{margin : "auto"}}>
                            <button className={styles.show} onClick = {showhideA} > {!isShowMoreA ? "Show more v" : "Show Less ^"} </button>
                        </div>
                </div>
        </div>)
}



export default function test(){
    return catalog({pic1 :game, pic2:outdoor})
}