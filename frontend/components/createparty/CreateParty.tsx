import styles from '../../styles/createparty.module.css'
import { DatePicker , TimeRangeInput} from '@mantine/dates'
import { Textarea, TextInput, NumberInput, Button, Select, createStyles, Group, Image, Text} from '@mantine/core'
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';
import { IconPhotoPlus } from '@tabler/icons';
import { closeAllModals } from '@mantine/modals'
import { CalendarIcon, ClockIcon} from '@heroicons/react/20/solid'
import { useForm } from '@mantine/form'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface activityProps {
    value: string,
    label: string,
}
interface CreateNewPartyProps {
    activity: activityProps[]
}
interface formData {
    isPublic: boolean,
    isPublic_string: string,
    title: string,
    topicID: string,
    image: string,
    info: string,
    tag1: string,
    tag2: string,
    tag3: string,
    maxpeople: number,
    date: Date,
    starttime: Date,
    endtime: Date,
    privateDesc: string,
}


const useStyles = createStyles((theme) => ({
    input: {   
        backgroundColor: '#2B3B64',
        color: 'white',
        border: 'none',
    },
}))


const CreateNewParty = (props: CreateNewPartyProps) => {

    const { classes } = useStyles();

    const [date, setDate] = useState(new Date())

    const now = new Date()
    const then = new Date()
    const [time, setValue] = useState<[Date, Date]>([now, then])
    
    function handleSubmit() {
        if (form.isValid()) {
            closeAllModals()
        }
    }

    async function formHandle(data: formData) {
        try {
            const res = await axios.post('https://harty.onfirebyte.xyz/party/', data, {withCredentials: true})
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }

    const form = useForm<formData>({
        initialValues: {
            isPublic: true,
            isPublic_string: "public",
            title: '',
            topicID: '',
            image: '',
            info: '',
            tag1: '',
            tag2: '',
            tag3: '',
            maxpeople: 2,
            date: new Date(),
            starttime: new Date(),
            endtime: new Date(),
            privateDesc: '',
        },
        validate: {
            title: (value) => (value.length == 0 ? 'This field cannot be empty' : null),
            topicID: (value) => (value.length == 0 ? 'This field cannot be empty' : null),
            tag1: (value) => (value.length == 0 ? 'This field cannot be empty' : null),
        },
        transformValues: (values) => ({
            title: values.title,
            topicID: values.topicID,
            image: values.image,
            info: values.info,
            tag1: values.tag1,
            tag2: values.tag2,
            tag3: values.tag3,
            isPublic_string: values.isPublic_string,
            maxpeople: Number(values.maxpeople),
            isPublic: values.isPublic_string == "public",
            date: date,
            starttime: time[0],
            endtime: time[1],
            privateDesc: values.privateDesc
        }),
        
    })

    return (
        <div className={styles.bigcardcontainer}>
            <form onSubmit={form.onSubmit((values) => formHandle(values))}>
                <div className={styles.smallcardcontainer}>
                    <div className={styles.topflex}>
                        <div className={styles.dropzone}>
                            <div>
                                <Group position='center' style={{
                                    position: 'relative',
                                    width: '460px',
                                    height: '200px',
                                    marginLeft: '10px'
                                }}>
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    marginTop: '20px',
                                    backgroundColor: '#2B3B64',
                                    borderRadius: '30px',
                                    position: 'relative',
                                }}>
                                </div>

                                <TextInput  radius='xl' size = 'md' required placeholder='Image Link' style={{
                                margin: '10px 0px',
                                width: '400px',
                                position: 'absolute'
                                }} withAsterisk {...form.getInputProps('image')}/>
                                </Group>
                            </div>
                        </div>
                        <div style={{
                            width: '360px',
                            marginRight: '30px'
                        }}>
                            <div className={styles.topright}>
                                <div className={styles.time}>
                                    <Select classNames={{
                                        input: classes.input
                                    }} size = 'xs' radius = 'xl' label={<p style={{color: 'white'}}>Select Activity</p>} placeholder='Activities' data = {props.activity} {...form.getInputProps('topicID')} />
                                    <Select classNames={{
                                        input: classes.input
                                    }} size='xs' radius = 'xl' label={<p style={{color: 'white'}}>Party Type</p>} placeholder='Type' data = {[{value: 'private', label: 'Private'}, {value: 'public', label: 'Public'}]} {...form.getInputProps('isPublic_string')}/>
                                    <div className={styles.tag}>
                                    <TextInput classNames={{
                                        input: classes.input
                                    }} size='xs' radius = 'xl' label={<p style={{color: 'white'}}>Tags</p>} placeholder='Tag 1' {...form.getInputProps('tag1')} />
                                    <TextInput classNames={{
                                        input: classes.input
                                    }} size='xs' radius = 'xl' placeholder='Tag 2' style = {{
                                            margin: '5px 0px'
                                        }} {...form.getInputProps('tag2')}/>
                                    <TextInput classNames={{
                                        input: classes.input
                                    }} size='xs' radius = 'xl' placeholder='Tag 3' {...form.getInputProps('tag3')}/>
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
                                    }} />} iconWidth = {20} radius='xl' placeholder="Pick Date" label= {<p style={{color: 'white'}}>Date</p>} onChange={(date:Date) => setDate(date)} />
                                    <NumberInput classNames={{
                                        input: classes.input
                                    }} size='xs' placeholder="2" radius='xl' min = {2} max = {15} label = {<p style={{color: 'white'}}>Number of Participants</p>} {...form.getInputProps('maxpeople')}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <div className={styles.publicdes}>
                            <TextInput classNames={{
                                        input: classes.input
                                    }} radius='xl' size = 'md' required placeholder='Your Party Name' style={{
                                margin: '10px 0px',
                                width: '460px'
                            }} withAsterisk {...form.getInputProps('title')}/>
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
                            }} {...form.getInputProps('privateDesc')}/>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'right'
                            }}>
                                <div className = {styles.button}>
                                    <Button fullWidth style={{
                                        backgroundColor: '#E94560'
                                    }} radius='xl' type='submit' onClick={handleSubmit} mt="md" size='xl'>
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

const NewParty = () => {

    const [activities, setActivities] = useState([]);

    function fetchActivity() {
        axios.get('https://harty.onfirebyte.xyz/party/activitylist', {withCredentials: true}).then(res => {
            setActivities(res.data)
        })
    }

    useEffect(() => {
        fetchActivity()
    },[])

    useEffect(() => {
        console.log(activities)
    },[activities])

    let actlist = activities.map(({id, topic}) => ({value: id,label: topic}))

    return <>
            {activities.length == 0 ? <div style={{color: 'white'}}>loading...</div> : <CreateNewParty activity={actlist}/>}
        </>

}

export default NewParty
