/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [device, setDevice] = useState("");
  const [audioUrl, setAudioUrl] = useState("");

  const handleResize = () => {
    const width = window.innerWidth;
    if (width <= 768) {
      setDevice("mobile");
    } else if (width <= 1024) {
      setDevice("tablet");
    } else {
      setDevice("desktop");
    }
  };

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  let mediaRecorder,
    chunks = [];

  // mediaRecorder setup for audio
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
      })
      .then((stream) => {
        mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = (e) => {
          chunks.push(e.data);
        };

        mediaRecorder.onstop = () => {
          const blob = new Blob(chunks, { type: "audio/wav" });
          chunks = [];
          setAudioUrl(window.URL.createObjectURL(blob));
        };
      })
      .catch((error) => {
        console.log("Following error has occured : ", error);
      });
  }

  const startRecording = () => {
    setAudioUrl("");
    mediaRecorder.start();
  };

  const stopRecording = () => {
    mediaRecorder.stop();
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const today = new Date();

    const isToday =
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const formattedTime = `${hours}:${minutes}`;

    if (isToday) {
      return { time: formattedTime, day: "Hari Ini" };
    } else {
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
      const year = date.getFullYear();
      return { day: `${day}/${month}/${year}`, time: formattedTime };
    }
  }

  useEffect(() => {
    handleResize(); // Set the initial device type
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        device,
        audioUrl,
        formatDate,
        formatDuration,
        startRecording,
        stopRecording,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
