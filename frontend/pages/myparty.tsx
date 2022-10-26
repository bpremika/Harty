import styles from '../styles/myparty.module.css'
import Sidebar from '../components/sidebar/sidebar'
import Card from '../components/common/Card'
import CreateNewParty from '../components/createparty/CreateParty'
import Head from 'next/head'
import { Button, Group } from '@mantine/core'
import { openModal } from '@mantine/modals'
import { IconCirclePlus } from '@tabler/icons'

const MyParty = () => {
    return (
        <div>
            <Head>
                <title>My Party</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/hartyicon.svg" />
            </Head>
            <main className = {styles.main}>
                <div className={styles.navbar}>
                    <h1 style={{marginLeft: '79px'}}>My Party</h1>
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
                    <div className={styles.upcomming}>
                        <h2 style={{margin: '0px'}}>Upcomming Party</h2>
                        <div className={styles.upcommingcard}>
                        </div>
                    </div>
                </div>
                <Sidebar />
            </main>
        </div>
    )
}

export default MyParty