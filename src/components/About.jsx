import Image from 'next/image';
import React from 'react';
import cardImg from "../../public/card/ferreri1.jpg"

const About = () => {
    const data = [
        {
            name: "Mercedes Benz Car",
            milag: "10k/ 50mil"
        },
        {
            name: "Mercedes Benz Car",
            milag: "10k/ 50mil"
        },
        {
            name: "Mercedes Benz Car",
            milag: "10k/ 50mil"
        },
        {
            name: "Mercedes Benz Car",
            milag: "10k/ 50mil"
        },
        {
            name: "Mercedes Benz Car",
            milag: "10k/ 50mil"
        },
        {
            name: "Mercedes Benz Car",
            milag: "10k/ 50mil"
        }
    ]
    return (
        <div className="max-w-[1240px] mx-auto mt-24">
            <div className="grid md:grid-cols-3 gap-6">
                {
                    data.map((card, i) =>
                    <div key={i}>
                        <div>
                            <Image src={cardImg} alt='' />
                            <h1 className="text-xl font-bold my-6">{card.name}</h1>
                            <p>{card.milag}</p>
                        </div>
                        <button className="p-3 bg-amber-200 rounded-md">Buy Now</button>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default About;