import { useEffect, useState, useRef } from "react";
import { useAppSelector } from "@/app/redux/hooks";

const useAudio = (url?: string) => {
  const volume = useAppSelector(
    (store) => store.stationReducer.currentStation.volume,
  );
  const [playing, setPlaying] = useState(false);
  const [mute, setMute] = useState(false);

  const audioRef = useRef<null | HTMLAudioElement>(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      const handleCanPlay = () => {
        setLoading(false);
      };

      audioRef.current.addEventListener("canplay", handleCanPlay);

      return () => {
        audioRef.current?.removeEventListener("canplay", handleCanPlay);
      };
    }
  }, []);

  const toggle = () => {
    if (!url) return;

    setPlaying((prev) => {
      !prev ? audioRef.current?.play() : audioRef.current?.pause();
      return !prev;
    });
  };

  const toggleMute = () => {
    if (audioRef && audioRef.current) {
      audioRef.current.muted = !mute;
      setMute((prev) => !prev);
    }
  };

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    if (!url) return;

    setLoading(true);

    audioRef.current.src = url;
    audioRef.current.play().catch((e) => console.log(e)); // TODO: Warning
    setPlaying(true);

    return () => {
      audioRef.current?.pause();
      setLoading(false);
      setPlaying(false);
    };
  }, [url]);

  useEffect(() => {
    audioRef.current?.addEventListener("ended", () => setPlaying(false));
    return () => {
      audioRef.current?.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audioRef]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  return { loading, playing, toggle, mute, toggleMute };
};

export default useAudio;
