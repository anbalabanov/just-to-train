import {useEffect, useState, useRef} from 'react';

const useAudio = (url: string) => {
    const [playing, setPlaying] = useState(false);

    const audioRef = useRef<null | HTMLAudioElement>(null);

    const toggle = () => {
        if(!url) return;

        setPlaying((prev) => {
            !prev ? audioRef.current?.play() : audioRef.current?.pause();
            return !prev;
        });
    }

    useEffect(() => {
        if(!audioRef.current){
            audioRef.current = new Audio();
        }

        if(!url) return;

        audioRef.current.src = url;
        audioRef.current.play().catch(e => console.log(e)); // TODO: Warning
        setPlaying(true);

        return () => {
            audioRef.current?.pause();
            setPlaying(false);
        };

    }, [url]);

    useEffect(() => {
        audioRef.current?.addEventListener('ended', () => setPlaying(false));
        return () => {
            audioRef.current?.removeEventListener('ended', () => setPlaying(false));
        };
    }, [audioRef]);

    return {playing, toggle};
};

export default useAudio;