import { Carousel } from "antd";
import React, { useState } from "react";

export const CarouselAntd = ({ numbers }: {numbers: number[]}) => {
    const [data, setData] = useState(numbers);


    const contentStyle = {
        height: "160px",
        color: "#fff",
        lineHeight: "160px",
        textAlign: "center",
        background: "#364d79"
      };

    const getItem = (i) => (
        <div>
            <h3 style={{
                height: "160px",
                color: "#fff",
                lineHeight: "160px",
                textAlign: "center",
                background: "#364d79"
            }}>{i}</h3>
        </div>
    )

    const btn = (
        <span>12</span>
    )
    
    console.log('RENDER');
    return (

        <div style={{width: "400px"}}>
            <Carousel arrows dots={false} slidesToShow={1}>
                {
                    data.map((i) => getItem(i))
                }
            </Carousel>

        </div>

    )
}
