import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from "../../public/logo.png"

const Nav = () => {
    return (
        <div className='py-6 max-w-[1240px] mx-auto'>
            <div className="flex justify-between">
                <div>
                    <Link href="/"><Image className="w-[100px]" src={logo} alt="" /></Link>
                </div>
                <ul className="flex items-center gap-6">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                       <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link href="/profile">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;