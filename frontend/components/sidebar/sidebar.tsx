import styles from '../../styles/sidebar.module.css'
import { HomeIcon, GlobeAmericasIcon, BookOpenIcon, UserGroupIcon } from '@heroicons/react/20/solid'

const SideBar = () => {
    return (
        <div className={styles.sidebar}>
            <div style={{
                height: '64px',
                width: '64px'
            }}>
                <img src='/hartyiconnobg.svg' />
            </div>
            <SideBarIcon text = "Home"> 
                <HomeIcon />
            </SideBarIcon>
            <SideBarIcon text = "Explore">
                <GlobeAmericasIcon />
            </SideBarIcon>
            <SideBarIcon text = "Catalog">
                <BookOpenIcon />
            </SideBarIcon>
            <SideBarIcon text = "My Party">
                <UserGroupIcon />
            </SideBarIcon>


        </div>
    )
}
interface SideBarIconProps {
    children?: React.ReactNode
    text: string
}
const SideBarIcon = (props: SideBarIconProps) => {
    return (
            <div className={styles.icon}>
                {props.children}
                <span className={styles.sidebartooltip} >
                    {props.text}
                </span>
                <div className={styles.leftpoint}>   
                </div>
            </div>       
    )
}

export default SideBar