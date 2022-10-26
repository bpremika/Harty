import Head from "next/head"
import styles from "../styles/explore.module.css"
import SideBar from "../components/sidebar/sidebar"
import PartyCards from "../components/common/PartyCards"
import Profilesmall from "../components/common/Profilesmall"

const Explore = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Harty | Explore</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/hartyicon.svg" />
            </Head>
            <main className = {styles.main}>
                <div className={styles.navbar}>
                    <h1 style={{marginLeft: '79px'}}>Explore</h1>
                    <div style={{width: '50px', height: '50px', position: 'absolute', right: '10px'}}>
                        <Profilesmall user = "Bruce" image = "https://cdn.discordapp.com/attachments/1031508000151707718/1034905338345951272/unknown.png"/>
                    </div>
                </div>
                <div className={styles.feed}>
                    <PartyCards path='party/'/>
                </div>
                <SideBar />
            </main>
            
        </div>

    )
}

export default Explore