import Image from 'next/image';
import React from 'react';
import faq from "../../public/icon/question-icon.png"

const Faq = () => {
    return (
        <div className="max-w-[1240px] mx-auto my-12">
            <p className="text-center">Common Questions</p>
            <h1 className="text-2xl font-bold text-center my-6">Most Popular Questions</h1>
            <p className="text-center mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum neque accusantium laboriosam, iure sunt, harum qui et illum, nobis reprehenderit perspiciatis ea dolorum ullam iusto harum qui et illum, nobis reprehenderit perspiciatis ea dolorum ullam iusto?</p>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-6">
                    <Image className="w-14 h-14" src={faq}></Image>
                    <div>
                        <h1 className="font-bold text-xl mb-3">What is Devsmanbd Skills?</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, minima. Rerum repudiandae quod odit est dignissimos quam mollitia at, culpa, suscipit reprehenderit minus natus, maxime reiciendis esse quaerat </p>
                    </div>
                </div>
                <div className="flex gap-6">
                    <Image className="w-14 h-14" src={faq}></Image>
                    <div>
                        <h1 className="font-bold text-xl mb-3">What is Devsmanbd Skills?</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, minima. Rerum repudiandae quod odit est dignissimos quam mollitia at, culpa, suscipit reprehenderit minus natus, maxime reiciendis esse quaerat </p>
                    </div>
                </div>
                <div className="flex gap-6">
                    <Image className="w-14 h-14" src={faq}></Image>
                    <div>
                        <h1 className="font-bold text-xl mb-3">What is Devsmanbd Skills?</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, minima. Rerum repudiandae quod odit est dignissimos quam mollitia at, culpa, suscipit reprehenderit minus natus, maxime reiciendis esse quaerat </p>
                    </div>
                </div>
                <div className="flex gap-6">
                    <Image className="w-14 h-14" src={faq}></Image>
                    <div>
                        <h1 className="font-bold text-xl mb-3">What is Devsmanbd Skills?</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, minima. Rerum repudiandae quod odit est dignissimos quam mollitia at, culpa, suscipit reprehenderit minus natus, maxime reiciendis esse quaerat </p>
                    </div>
                </div>
                <div className="flex gap-6">
                    <Image className="w-14 h-14" src={faq}></Image>
                    <div>
                        <h1 className="font-bold text-xl mb-3">What is Devsmanbd Skills?</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, minima. Rerum repudiandae quod odit est dignissimos quam mollitia at, culpa, suscipit reprehenderit minus natus, maxime reiciendis esse quaerat </p>
                    </div>
                </div>
                <div className="flex gap-6">
                    <Image className="w-14 h-14" src={faq}></Image>
                    <div>
                        <h1 className="font-bold text-xl mb-3">What is Devsmanbd Skills?</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, minima. Rerum repudiandae quod odit est dignissimos quam mollitia at, culpa, suscipit reprehenderit minus natus, maxime reiciendis esse quaerat </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;