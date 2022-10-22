import styles from '../../styles/createparty.module.css'
import { DatePicker , TimeRangeInput} from '@mantine/dates'
import { Textarea, TextInput, NumberInput, Button, Select } from '@mantine/core'
import { closeAllModals } from '@mantine/modals'
import DropZone from './DropZone'
import { CalendarIcon, ClockIcon} from '@heroicons/react/20/solid'



const CreateNewParty = () => {

    return (
        <div className={styles.bigcardcontainer}>
            <div className={styles.smallcardcontainer} style = {{
                backgroundColor: "#16213E"
            }}>
                <div className={styles.topflex}>
                    <div className={styles.dropzone}>
                        <DropZone />
                    </div>
                    <div className={styles.time}>
                        <Select radius = 'xl' label={<p style={{color: 'white'}}>Select Activity</p>} placeholder='Activities' data = {[{value: 'onlinegame', label: 'Online Game'}, {value: 'sport', label: 'Sport'}]} />
                        <DatePicker icon = {<CalendarIcon style={{
                            marginLeft: '8px'
                        }} />} iconWidth = {20} radius='xl' placeholder="Pick Date" label= {<p style={{color: 'white'}}>Date</p>}/>
                        <TimeRangeInput icon = {<ClockIcon style={{
                            marginLeft: '8px'
                        }} />} iconWidth = {20} radius='xl' label={<p style={{color: 'white'}}>Time</p>}/>
                    </div> 
                    <div className={styles.ptype}>   
                        <Select radius = 'xl' label={<p style={{color: 'white'}}>Party Type</p>} placeholder='Activities' data = {[{value: 'private', label: 'Private'}, {value: 'public', label: 'Public'}]} />
                    </div>
                </div>
                <div className={styles.activity}>
                    <NumberInput placeholder="Number of participants" radius='xl' min = {2} max = {15} label = {<p style={{color: 'white'}}>Number of Participants</p>} />
                </div>
                <div className={styles.description}>
                    <div className={styles.publicdes}>
                        <TextInput radius='md' placeholder='Your Party Name' style={{
                            padding: '10px'
                        }}/>
                        <Textarea radius='md' placeholder="Type your party's public description" style={{
                            padding: '10px'
                        }}/>
                    </div>
                    <div className={styles.privatedes}>
                        <Textarea autosize minRows = {10} variant='filled' radius='xl' placeholder="Type your party's details for joined participants" style={{
                            width: '360px',
                            height: '250px',
                            marginTop: '10px'
                        }} />
                    </div>
                </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'right'
                    }}>
                        <div className = {styles.button}>
                            <Button fullWidth style={{
                                backgroundColor: '#E94560'
                            }} radius='xl' onClick={() => closeAllModals()} mt="md" size='xl'>
                            <h3>CREATE</h3>
                            </Button>
                    </div>    
                </div>
            </div>
            
        </div>
    )
}
export default CreateNewParty