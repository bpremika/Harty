import styles from '../../styles/createparty.module.css'
import { DatePicker , TimeRangeInput} from '@mantine/dates'
import { Textarea, TextInput, NumberInput, Button, Select, createStyles, } from '@mantine/core'
import { closeAllModals } from '@mantine/modals'
import DropZone from './DropZone'
import { CalendarIcon, ClockIcon} from '@heroicons/react/20/solid'
import { useForm } from '@mantine/form'
import { useState } from 'react'


const useStyles = createStyles((theme) => ({
    input: {   
        backgroundColor: '#2B3B64',
        color: 'white',
        border: 'none',
    },
}))

const CreateNewParty = () => {
    
    const { classes } = useStyles();

    const [date, setDate] = useState(new Date())
    const now = new Date()
    const then = new Date()
    const [time, setValue] = useState<[Date, Date]>([now, then])

    const form = useForm({
        initialValues: {
            isPublic: '',
            title: '',
            topic: '',
            image: '',
            info: '',
            tag1: '',
            tag2: '',
            tag3: '',
            numPeople: 1,
            maxPeople: 0,
            master: '',
            date: '',
            startTime: '',
            endTime: '',
            privateDes: '',
        },
        transformValues: (values) => ({
            title: values.title,
            topic: values.topic,
            image: values.image,
            info: values.info,
            tag1: values.tag1,
            tag2: values.tag2,
            tag3: values.tag3,
            numPeople: Number(values.numPeople),
            maxPeople: Number(values.maxPeople),
            isPublic: values.isPublic == "public",
            master: values.master,
            date: date,
            startTime: time[0],
            endTime: time[1],
            privateDes: values.privateDes
        })
    })

    return (
        <div className={styles.bigcardcontainer}>
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <div className={styles.smallcardcontainer} style = {{
                    backgroundColor: "#16213E"
                }}>
                    <div className={styles.topflex}>
                        <div className={styles.dropzone}>
                            <DropZone />
                        </div>
                        <div>
                            <div className={styles.topright}>
                                <div className={styles.time}>
                                    <Select classNames={{
                                        input: classes.input
                                    }} size = 'xs' radius = 'xl' label={<p style={{color: 'white'}}>Select Activity</p>} placeholder='Activities' data = {[{value: 'onlinegame', label: 'Online Game'}, {value: 'sport', label: 'Sport'}]} {...form.getInputProps('topic')} />
                                    <Select classNames={{
                                        input: classes.input
                                    }} size='xs' radius = 'xl' label={<p style={{color: 'white'}}>Party Type</p>} placeholder='Activities' data = {[{value: 'private', label: 'Private'}, {value: 'public', label: 'Public'}]} {...form.getInputProps('isPublic')}/>
                                    <div className={styles.tag}>
                                        <Select classNames={{
                                        input: classes.input
                                    }} size='xs' radius = 'xl' label={<p style={{color: 'white'}}>Tags</p>} placeholder='Tag 1' data = {[{value: 'private', label: 'Private'}, {value: 'public', label: 'Public'}]} {...form.getInputProps('tag1')} />
                                        <Select classNames={{
                                        input: classes.input
                                    }} size='xs' radius = 'xl' placeholder='Tag 2' data = {[{value: 'private', label: 'Private'}, {value: 'public', label: 'Public'}]} style = {{
                                            margin: '5px 0px'
                                        }} {...form.getInputProps('tag2')}/>
                                        <Select classNames={{
                                        input: classes.input
                                    }} size='xs' radius = 'xl' placeholder='Tag 3' data = {[{value: 'private', label: 'Private'}, {value: 'public', label: 'Public'}]} {...form.getInputProps('tag3')}/>
                                    </div>
                                </div>
                                <div className={styles.activity}>
                                    <TimeRangeInput styles = {{input: {
                                        backgroundColor: 'white',
                                        color: 'white',
                                        border: 'none'
                                    } }} size = 'xs' icon = {<ClockIcon style={{
                                        marginLeft: '8px'
                                    }} />} iconWidth = {20} radius='xl' label={<p style={{color: 'white'}}>Time</p>} onChange= {setValue} value = {time}/>
                                    <DatePicker styles = {{input: {
                                        backgroundColor: 'white',
                                        border: 'none'
                                    } }} size = 'xs' icon = {<CalendarIcon style={{
                                        marginLeft: '8px'
                                    }} />} iconWidth = {20} radius='xl' placeholder="Pick Date" label= {<p style={{color: 'white'}}>Date</p>} onChange={(date:Date) => setDate(date)}/>
                                    <NumberInput classNames={{
                                        input: classes.input
                                    }} size='xs' placeholder="Number of participants" radius='xl' min = {2} max = {15} label = {<p style={{color: 'white'}}>Number of Participants</p>} {...form.getInputProps('maxPeople')}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <div className={styles.publicdes}>
                            <TextInput classNames={{
                                        input: classes.input
                                    }} radius='xl' size = 'md' required = {true} placeholder='Your Party Name' style={{
                                margin: '10px 0px',
                                width: '460px'
                            }} {...form.getInputProps('title')}/>
                            <Textarea classNames={{
                                        input: classes.input
                                    }} autosize minRows = {9} maxRows = {9} size = 'md' radius='xl' placeholder="Type your party's public description" style={{
                                width: '460px',
                                height: '250px'
                            }} {...form.getInputProps('info')}/>
                        </div>
                        <div className={styles.privatedes}>
                            <Textarea classNames={{
                                        input: classes.input
                                    }} autosize minRows = {8} maxRows = {8} size = 'md' variant='filled' radius='xl' placeholder="Type your party's details for joined participants" style={{
                                width: '360px',
                                height: '220px',
                                marginTop: '10px'
                            }} {...form.getInputProps('privateDes')}/>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'right'
                            }}>
                                <div className = {styles.button}>
                                    <Button fullWidth style={{
                                        backgroundColor: '#E94560'
                                    }} radius='xl' type='submit' onClick={() => closeAllModals()} mt="md" size='xl'>
                                    <h3>CREATE</h3>
                                    </Button>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default CreateNewParty