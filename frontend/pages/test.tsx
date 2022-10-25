import SideBar from '../components/sidebar/sidebar'
import CreateNewParty from '../components/createparty/CreateParty';
import { Button, Group } from '@mantine/core';
import { openModal } from '@mantine/modals';

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
              color: '#2B3B64',
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
        </Group>
    </>
    )
}