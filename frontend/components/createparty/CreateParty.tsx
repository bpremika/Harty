import styles from '../../styles/createparty.module.css'
import { DatePicker , TimeRangeInput} from '@mantine/dates'
import { MantineProvider, TextInput, NumberInput, Button, Select } from '@mantine/core'
import { closeAllModals } from '@mantine/modals'



const CreateNewParty = () => {

    return (
        <div className={styles.bigcardcontainer}>
            <div className={styles.smallcardcontainer} style = {{
                backgroundColor: "#16213E"
            }}>
                <TextInput radius='md' placeholder='Your Party Name' />
                <TextInput radius='md' placeholder="Type your party's public description"/>
                <TextInput radius='md' placeholder="Type your party's details for joined participants" />
                <DatePicker radius='md' placeholder="Pick Date" label="Event Date" withAsterisk />
                <TimeRangeInput radius='md' label="Event Time" withAsterisk/>
                <NumberInput radius='md' withAsterisk label="Number of Participants" />
                <Select label="Select Activity" placeholder='Activities' data = {[{value: 'onlinegame', label: 'Online Game'}, {value: 'sport', label: 'Sport'}]} />
                <div className = {styles.button}>
                    <Button  radius='md' onClick={() => closeAllModals()} mt="md">
                    CREATE
                    </Button>
                </div>
            </div>
            
        </div>
    )
}
export default CreateNewParty