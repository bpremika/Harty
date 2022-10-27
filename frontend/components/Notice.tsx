import { Carousel } from '@mantine/carousel';
import { useShallowEffect } from '@mantine/hooks';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Style from '../public/img.module.css';

function Demo() {
    interface Picture {
        id : number;
        name : string;
        img_url : string;
        link : string;
    }
    const[aa,setaa] = useState<Picture[]>([]);

    useEffect(()=>{
        axios.get<Picture[]>('https://harty.onfirebyte.xyz/thumbnail').then((v)=>{
            setaa(v.data);
        })
    })
    return (
        <Carousel
        sx={{ maxWidth: "80%" }}
        mx="auto"
        withIndicators
        height={380}
        styles={{
          indicator: {
            width: 12,
            height: 4,
            transition: 'width 250ms ease',
  
            '&[data-active]': {
              width: 40,
            },
          },
        }}
        
      >
      {aa.map( (v) => {
        return <Carousel.Slide style={{display: "flex", justifyContent: "center", alignContent: "center"}} key={v .id}>
            <div style={{display: "flex", justifyContent: "center", alignContent: "center"}}>
                <img src={v.img_url} style={{objectFit: "contain", width: "100%"}}/>
            </div>
        </Carousel.Slide>
      })}
    </Carousel>
  );
}



export default Demo;