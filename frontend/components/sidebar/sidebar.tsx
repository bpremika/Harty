import styles from '../../styles/sidebar.module.css'
import Link from 'next/link'
import { HomeIcon, GlobeAmericasIcon, BookOpenIcon, UserGroupIcon } from '@heroicons/react/20/solid'

const SideBar = () => {
    return (
        <div className={styles.sidebar}>
            <Link href='/'>
            <div style={{
                height: '64px',
                width: '64px',
            }}>
                <img style={{cursor: 'pointer'}} src='/hartyiconnobg.svg' />
            </div>
            </Link>
            <Link href={'/'}>
                <div>
                    <SideBarIcon text = "Home"> 
                        <HomeIcon />
                    </SideBarIcon>
                </div>
            </Link>
            <Link href='/explore'>
                <div>
                    <SideBarIcon text = "Explore">
                        <GlobeAmericasIcon />
                    </SideBarIcon>
                </div>
            </Link>
            <Link href='/catalog'>
                <div>
                    <SideBarIcon text = "Catalog">
                        <BookOpenIcon />
                    </SideBarIcon>
                </div>
            </Link>
            <Link href='/myparty'>
                <div>
                    <SideBarIcon text = "My Party">
                        <UserGroupIcon />
                    </SideBarIcon>
                </div>
            </Link>
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