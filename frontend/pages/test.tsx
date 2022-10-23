import SideBar from '../components/sidebar/sidebar'
import styles from '../styles/test.module.css'
import CreateNewParty from '../components/createparty/CreateParty';
import { Modal, Button, Group, TextInput, Text} from '@mantine/core';
import { ModalsProvider, openModal, closeAllModals } from '@mantine/modals';

export default function Test() {
    return (
    <>
        <SideBar />
        <Group position="right">
            <Button onClick={() => {openModal({
            title: <span style={{
              fontWeight: "bold",
              fontSize: "40px",
              padding: "10px",
              color: 'white',
              marginLeft: '20px'
            }}>Create New Party</span>,
            size: "auto",
            radius: 'lg',
            overflow: 'outside',
            closeButtonLabel: "Cancel",
            overlayColor: 'black',
            styles: {modal: {
              backgroundColor: '#16213E',
              borderRadius: '30px',
              height: 'fit-content'
            }, close: {
              color: 'white',
              marginRight: '20px'
            }},
            children: (
                <CreateNewParty/>
            ),
          })
        }}
          >
            Create New Party
          </Button>
        </Group>
    </>
    )
}