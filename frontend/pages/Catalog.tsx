import SideBar from '../components/sidebar/sidebar'
import Actpic from '../components/activitypicture/act_pic'
import  styles  from '../styles/Catalog.module.css'
import { WRAPPER_PADDING } from '@mantine/core/lib/SegmentedControl/SegmentedControl.styles';
import { Button } from '@mantine/core';

interface Picture{
    name : string;
    URL : string;
}

interface Prop{
        pic1 : Picture[]
        pic2 : Picture[]
    }

const game = [{name : "Harbor" , URL : "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt30cd60b083954711/634896353b9a3d285e1b6cc1/patch508_Banner.jpg?auto=webp&disable=upscale&height=504"},
{name : "Pubg" , URL : "https://www.techoffside.com/wp-content/uploads/2021/12/PUBG-Mobile-001.webp"},
{name : "Overwatch2" , URL : "https://image.api.playstation.com/vulcan/ap/rnd/202209/2115/Uopbez9uDdyo77Y0SJ55glkE.png"},
{name : "Harbor" , URL : "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt30cd60b083954711/634896353b9a3d285e1b6cc1/patch508_Banner.jpg?auto=webp&disable=upscale&height=504"},
{name : "Pubg" , URL : "https://www.techoffside.com/wp-content/uploads/2021/12/PUBG-Mobile-001.webp"},
{name : "Overwatch2" , URL : "https://image.api.playstation.com/vulcan/ap/rnd/202209/2115/Uopbez9uDdyo77Y0SJ55glkE.png"},
{name : "Harbor" , URL : "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt30cd60b083954711/634896353b9a3d285e1b6cc1/patch508_Banner.jpg?auto=webp&disable=upscale&height=504"},
{name : "Pubg" , URL : "https://www.techoffside.com/wp-content/uploads/2021/12/PUBG-Mobile-001.webp"},
{name : "Overwatch2" , URL : "https://image.api.playstation.com/vulcan/ap/rnd/202209/2115/Uopbez9uDdyo77Y0SJ55glkE.png"},
{name : "Harbor" , URL : "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt30cd60b083954711/634896353b9a3d285e1b6cc1/patch508_Banner.jpg?auto=webp&disable=upscale&height=504"},
{name : "Pubg" , URL : "https://www.techoffside.com/wp-content/uploads/2021/12/PUBG-Mobile-001.webp"},
{name : "Overwatch2" , URL : "https://image.api.playstation.com/vulcan/ap/rnd/202209/2115/Uopbez9uDdyo77Y0SJ55glkE.png"},
{name : "Harbor" , URL : "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt30cd60b083954711/634896353b9a3d285e1b6cc1/patch508_Banner.jpg?auto=webp&disable=upscale&height=504"},
{name : "Pubg" , URL : "https://www.techoffside.com/wp-content/uploads/2021/12/PUBG-Mobile-001.webp"},
{name : "Overwatch2" , URL : "https://image.api.playstation.com/vulcan/ap/rnd/202209/2115/Uopbez9uDdyo77Y0SJ55glkE.png"}]

const outdoor =[{name : "Harbor" , URL : "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt30cd60b083954711/634896353b9a3d285e1b6cc1/patch508_Banner.jpg?auto=webp&disable=upscale&height=504"},
{name : "Pubg" , URL : "https://www.techoffside.com/wp-content/uploads/2021/12/PUBG-Mobile-001.webp"},
{name : "Overwatch2" , URL : "https://image.api.playstation.com/vulcan/ap/rnd/202209/2115/Uopbez9uDdyo77Y0SJ55glkE.png"},
{name : "Harbor" , URL : "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt30cd60b083954711/634896353b9a3d285e1b6cc1/patch508_Banner.jpg?auto=webp&disable=upscale&height=504"},
{name : "Pubg" , URL : "https://www.techoffside.com/wp-content/uploads/2021/12/PUBG-Mobile-001.webp"},
{name : "Overwatch2" , URL : "https://image.api.playstation.com/vulcan/ap/rnd/202209/2115/Uopbez9uDdyo77Y0SJ55glkE.png"},
{name : "Harbor" , URL : "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt30cd60b083954711/634896353b9a3d285e1b6cc1/patch508_Banner.jpg?auto=webp&disable=upscale&height=504"},
{name : "Pubg" , URL : "https://www.techoffside.com/wp-content/uploads/2021/12/PUBG-Mobile-001.webp"},
{name : "Overwatch2" , URL : "https://image.api.playstation.com/vulcan/ap/rnd/202209/2115/Uopbez9uDdyo77Y0SJ55glkE.png"},
{name : "Harbor" , URL : "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt30cd60b083954711/634896353b9a3d285e1b6cc1/patch508_Banner.jpg?auto=webp&disable=upscale&height=504"},
{name : "Pubg" , URL : "https://www.techoffside.com/wp-content/uploads/2021/12/PUBG-Mobile-001.webp"},
{name : "Overwatch2" , URL : "https://image.api.playstation.com/vulcan/ap/rnd/202209/2115/Uopbez9uDdyo77Y0SJ55glkE.png"},
{name : "Harbor" , URL : "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt30cd60b083954711/634896353b9a3d285e1b6cc1/patch508_Banner.jpg?auto=webp&disable=upscale&height=504"},
{name : "Pubg" , URL : "https://www.techoffside.com/wp-content/uploads/2021/12/PUBG-Mobile-001.webp"},
{name : "Overwatch2" , URL : "https://image.api.playstation.com/vulcan/ap/rnd/202209/2115/Uopbez9uDdyo77Y0SJ55glkE.png"}]


 function catalog(props : Prop){
    
    return (<div style={{display : 'inline-block' , backgroundColor : '#16213E'}} >
                <SideBar/>
                <div className={styles.bar}>Online Game</div>

                <div className={styles.box}>
                    <div className={styles.pic}>
                        {
                            props.pic1.map((v,i)=>(
                            <div style={{margin : "10px"}}>
                                <Actpic  name = {v.name} URL = {v.URL}/>
                            </div>
                            ))
                        
                                
                        }
                    </div>
                <div>
                        <button className={styles.show}>Show more ᐯ</button>
                    </div>
                </div>

                    <div className={styles.bar}>Outdoor Activity</div>

                <div className={styles.box}>
                    <div className={styles.pic}>
                        {
                            props.pic1.map((v,i)=>(
                            <div style={{margin : "10px"}}>
                                <Actpic  name = {v.name} URL = {v.URL}/>
                            </div>
                            ))
                        }
                    </div>
                    <div>
                        <button className={styles.show}>Show more ᐯ</button>
                    </div>
                </div>
        </div>)
}



export default function test(){
    return catalog({pic1 :game, pic2:outdoor})
}