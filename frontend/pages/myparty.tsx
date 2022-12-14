import styles from '../styles/myparty.module.css'
import Sidebar from '../components/sidebar/sidebar'
import Card from '../components/common/Card'
import PartyCards from '../components/common/PartyCards'
import CreateNewParty from '../components/createparty/CreateParty'
import Head from 'next/head'
import { Button, Group } from '@mantine/core'
import { openModal } from '@mantine/modals'
import { IconCirclePlus } from '@tabler/icons'
import Profilesmall from '../components/common/Profilesmall'

const MyParty = () => {
    return (
        <div>
            <Head>
                <title>Harty | My Party</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/hartyicon.svg" />
            </Head>
            <main className = {styles.main}>
                <div className={styles.navbar}>
                    <h1 style={{marginLeft: '79px'}}>My Party</h1>
                    <div style={{width: '50px', height: '50px', position: 'absolute', right: '10px'}}>
                        <Profilesmall image = "https://cdn.discordapp.com/attachments/1031508000151707718/1034905338345951272/unknown.png"/>
                    </div>
                </div>
                <div className={styles.content}>
                    <div>
                        <Button rightIcon={<IconCirclePlus/>} color='green' radius='xl' size='lg' className = {styles.createparty} onClick={() => {openModal({
                            title: <span style={{
                                fontWeight: "bold",
                                fontSize: "40px",
                                padding: "10px",
                                color: 'white',
                                marginLeft: '40px',
                            }}>Create New Party</span>,
                            size: "auto",
                            radius: 'lg',
                            overflow: 'outside',
                            closeButtonLabel: "Cancel",
                            overlayColor: 'black',
                            styles: {modal: {
                                backgroundColor: '#16213E',
                                borderRadius: '30px',
                            }, close: {
                                color: '#E94560',
                                marginRight: '20px',
                            }},
                            children: (
                                <CreateNewParty/>
                                ),
                            })
                        }}
                        >
                            Create New Party
                        </Button>
                    </div>
                <h2 style={{color: 'white', marginLeft: '20px', marginTop: '10px'}}>Joined Party</h2>
                <div style={{position: 'absolute', height: '78vh', top: '64px', display: 'flex', flexDirection: 'column'}}>
                    <PartyCards path='party/myparty' />
                </div>
                </div>
                <Sidebar />
            </main>
        </div>
    )
}

export default MyParty