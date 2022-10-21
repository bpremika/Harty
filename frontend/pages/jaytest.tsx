import SideBar from '../components/sidebar/sidebar'
import styles from '../styles/test.module.css'
import CreateNewParty from '../components/createparty/CreateParty';
import { Modal, Button, Group, TextInput} from '@mantine/core';
import { ModalsProvider, openModal, closeAllModals } from '@mantine/modals';

export default function Test() {
    
    return (
    <>
        <SideBar />
        <Group position="right">
            <Button onClick={() => {openModal({
            title: 'Create New Party',
            size: "auto",
            radius: 'xl',
            children: (
              <>
                <CreateNewParty/>
              </>
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