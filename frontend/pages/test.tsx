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
              fontSize: "30px",
              padding: "10px"
            }}>Create New Party</span>,
            style: {borderColor: "black"},
            size: "auto",
            radius: 'lg',
            overflow: 'outside',
            closeButtonLabel: "Cancel",
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