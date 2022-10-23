import { useState } from 'react';
import { Text, Image, Group } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';
import { IconPhotoPlus } from '@tabler/icons';

const DropZone = () => {
    const [files, setFiles] = useState<FileWithPath[]>([])

    const previews = files.map((file, index) => {
        const imageUrl = URL.createObjectURL(file);
        return (
        <Image
            key={index}
            src={imageUrl}
            height = {200}
            width = {460}
            imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
            radius = 'xl'
        />
        );
    });

    return (
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
            {previews}
        </div>

        <Dropzone accept={IMAGE_MIME_TYPE} onDrop={setFiles} style = {{
            height: '60px',
            top: '-150px',
            position: 'relative',
            opacity: '0.3',
            backgroundColor: 'transparent',
        }}>
            <Group position='center' align='center'>
                <IconPhotoPlus 
                    size={25}
                    color = {'white'}
                />
                <Text align="center" color={'white'}>Drop images here</Text>
            </Group>
        </Dropzone>

        
        </Group>
        </div>
    )
}

export default DropZone