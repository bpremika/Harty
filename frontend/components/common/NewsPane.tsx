import { Carousel } from '@mantine/carousel';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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
        height={450}
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
        return <Carousel.Slide style={{display: "flex", justifyContent: "center", alignContent: "center"}} key={v.id}>
                <Link href={v.link} >
                    <div style={{display: "flex", justifyContent: "center", alignContent: "center", cursor: 'pointer'}}>
                        <img src={v.img_url} style={{objectFit: "fill", width: '100%', borderRadius: '20px'}}/>
                    </div>
                </Link>
              </Carousel.Slide>
      })}
    </Carousel>
  );
}



export default Demo;