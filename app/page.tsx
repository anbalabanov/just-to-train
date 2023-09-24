'use client'
import React, {useEffect, useRef, useState} from "react";
import {radioList} from "@/app/radio";

export default function Home() {
    const [url, setUrl] = useState("");


    const audioRef = useRef<null | HTMLAudioElement>(null);

    useEffect(() => {
        audioRef.current = new Audio(url);
    }, [])

    useEffect(() => {
        if(!audioRef.current){
            return;
        }
        audioRef.current.src = url;
        audioRef.current.play().catch(e => console.log(e));
    }, [url]);
    const handleClick = (e: any) => {
        setUrl(e.target.dataset.url)
    }


    return (
        <main>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>
                    <div
                        className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 xl:gap-x-8"
                        onClick={handleClick}>
                        {radioList.map(({name, url}) => {
                            return (
                                <div key={url}
                                     className="rounded-lg bg-gray-200 hover:bg-gray-400 h-20 w-36 text-center space-x-2 cursor-pointer"
                                     data-url={url}
                                >
                                    {name}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
}
