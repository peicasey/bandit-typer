import Image from "next/image";
import React from 'react';
import { poppins } from "@/app/fonts";

export default function Footer() {
    return (
        <footer className="flex items-start justify-between min-w-screen p-16 bg-[#add1b6]">
            <div className="flex flex-col gap-4">
                <Image src="/bandit.png" alt="" width={100} height={100}></Image>
                <p className="text-green-950 font-bold" style={poppins.style}>BanditTyper</p>
            </div>
            <div className="flex flex-col gap-4 text-firGreen text-right">
                <p>Created for Texas A&M's CSCE 436 (HCI) course</p>
                <ul className="text-xs">
                    <li>Brigham Pettit</li>
                    <li>Victoria Chen</li>
                    <li>Victoria Ciang</li>
                    <li>Patralika Ghosh</li>
                    <li>Casey Pei</li>

                </ul>
            </div>
        </footer>
    );
}