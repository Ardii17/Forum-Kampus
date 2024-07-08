/* eslint-disable react/prop-types */
import { useRef, useEffect, useState } from "react";
import WaveSurfer from "wavesurfer.js";

const WaveSurferComponent = ({ audioFile }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const waveformRef = useRef(null);
  const waveSurferRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (waveSurferRef.current) {
      waveSurferRef.current.destroy();
    }

    waveSurferRef.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#ddd",
      progressColor: "#fff",
      height: 30,
    });

    waveSurferRef.current.load(audioFile);
    waveSurferRef.current.on("ready", () => {
      const duration = waveSurferRef.current.getDuration();
      intervalRef.current = setInterval(() => {
        setIsPlaying(false);
      }, duration * 1024);
    });

    return () => {
      if (waveSurferRef.current) {
        waveSurferRef.current.destroy();
      }
      clearInterval(intervalRef.current);
    };
  }, [audioFile]);

  const handlePlayPause = () => {
    if (waveSurferRef.current.isPlaying()) {
      setIsPlaying(false);
      waveSurferRef.current.pause();
    } else {
      setIsPlaying(true);
      waveSurferRef.current.play();
    }
  };

  return (
    <div className="flex gap-4">
      <button onClick={handlePlayPause}>
        {isPlaying && waveSurferRef.current.isPlaying() ? (
          <i className="text-2xl text-white bx bx-pause" />
        ) : (
          <i className="text-2xl text-white bx bx-play" />
        )}
      </button>
      <div ref={waveformRef} className="w-52"></div>
    </div>
  );
};

export default WaveSurferComponent;
