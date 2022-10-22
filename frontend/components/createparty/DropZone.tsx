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
            width = {356}
            imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
            radius = 'md'
        />
        );
    });

    return (
        <div>
        <Group position='center'>
        <Dropzone accept={IMAGE_MIME_TYPE} onDrop={setFiles} style = {{
            height: '60px',
        }}>
            <Group position='center' align='center'>
                <IconPhotoPlus 
                    size={25}
                    color = {'gray'}
                />
                <Text align="center" color={'gray'}>Drop images here</Text>
            </Group>
        </Dropzone>

        <div style={{
            minHeight: "80%",
            marginTop: '20px',
            padding: '10px',
            backgroundColor: 'white',
            borderRadius: '10px'
        }}>
            {previews}
        </div>
        </Group>
        </div>
    )
}

export default DropZone