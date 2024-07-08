/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../../Contexts/ThemeContext";
import EmojiPicker from "../../../UI/EmojiPicker";
import WaveSurferComponent from "../../../UI/WaveSurfer";
import RenderChat from "./RenderChat";

const Mainbar = ({ isOpen, setIsOpen }) => {
  const boxMessage = useRef(null);
  const Theme = useContext(ThemeContext);
  const [textName, setTextName] = useState("Muhammad Ardiansyah Firdaus");
  const [message, setMessage] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [durationRecording, setDurationRecording] = useState(0);
  const durationRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const [showPicker, setShowPicker] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    {
      message: "Hi, how are you?",
      date: "2024-06-27T08:00:00Z",
      status: "sent",
    },
    {
      message: "I'm good, thanks! How about you?",
      date: "2024-06-27T08:01:00Z",
      status: "receiver",
    },
    {
      message: "I'm doing well too. What are you up to today?",
      date: "2024-06-27T08:02:00Z",
      status: "sent",
    },
    {
      message: "Just working on some projects. You?",
      date: "2024-06-27T08:03:00Z",
      status: "receiver",
    },
    {
      message: "Same here. Trying to finish a coding task.",
      date: "2024-06-27T08:04:00Z",
      status: "sent",
    },
    {
      message: "Sounds interesting. What are you working on?",
      date: "2024-06-27T08:05:00Z",
      status: "receiver",
    },
    {
      message:
        "I'm building a chat application using React and Tailwind CSS. asdhasdjahsdjahskdhaskjdh",
      date: "2024-06-27T08:06:00Z",
      status: "sent",
    },
    {
      message: "That's cool! Let me know if you need any help.",
      date: "2024-06-27T08:07:00Z",
      status: "receiver",
    },
    {
      message: "Will do, thanks!",
      date: "2024-06-27T08:08:00Z",
      status: "sent",
    },
    {
      message: "Hi, how are you?",
      date: "2024-06-28T08:00:00Z",
      status: "sent",
    },
    {
      message: "I'm good, thanks! How about you?",
      date: "2024-06-28T08:01:00Z",
      status: "receiver",
    },
    {
      message: "I'm doing well too. What are you up to today?",
      date: "2024-06-28T08:02:00Z",
      status: "sent",
    },
    {
      message: "Just working on some projects. You?",
      date: "2024-06-28T08:03:00Z",
      status: "receiver",
    },
    {
      message: "Same here. Trying to finish a coding task.",
      date: "2024-06-28T08:04:00Z",
      status: "sent",
    },
    {
      message: "Sounds interesting. What are you working on?",
      date: "2024-06-28T08:05:00Z",
      status: "receiver",
    },
    {
      message:
        "I'm building a chat application using React and Tailwind CSS. asdhasdjahsdjahskdhaskjdh",
      date: "2024-06-28T08:06:00Z",
      status: "sent",
    },
    {
      message: "That's cool! Let me know if you need any help.",
      date: "2024-06-28T08:07:00Z",
      status: "receiver",
    },
    {
      message: "Will do, thanks!",
      date: "2024-06-28T08:08:00Z",
      status: "sent",
    },
  ]);

  const handleSubmitMessage = (event) => {
    event.preventDefault();
    const newChat = {
      message: message,
      date: new Date().toISOString(),
      status: "sent",
    };
    setChatHistory([...chatHistory, newChat]);
    setMessage("");
  };

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

  useEffect(() => {
    const scrollToBottom = () => {
      boxMessage.current.scrollTop = boxMessage.current.scrollHeight;
    };

    scrollToBottom();
  }, []);

  useEffect(() => {
    const scrollToBottom = () => {
      boxMessage.current.scrollTop = boxMessage.current.scrollHeight;
    };

    scrollToBottom();
  }, [chatHistory]);

  const addEmoji = (emoji) => {
    setMessage(message + emoji.native);
  };

  useEffect(() => {
    // Setup mediaRecorder for audio
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          mediaRecorderRef.current = new MediaRecorder(stream);

          mediaRecorderRef.current.ondataavailable = (e) => {
            chunksRef.current.push(e.data);
          };

          mediaRecorderRef.current.onstop = () => {
            const blob = new Blob(chunksRef.current, { type: "audio/wav" });
            chunksRef.current = [];
            const newChat = {
              message: window.URL.createObjectURL(blob),
              type: "voice",
              date: new Date().toISOString(),
              status: "sent",
            };
            setChatHistory([...chatHistory, newChat]);
          };
        })
        .catch((error) => {
          console.error("Error accessing media devices.", error);
        });
    }
  }, [chatHistory]);

  const startRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.start();
      setIsRecording(true);
      setIsPaused(false);
      setDurationRecording(0);

      // Set interval untuk menghitung durasi perekaman
      durationRef.current = setInterval(() => {
        setDurationRecording((prevDuration) => prevDuration + 1);
      }, 1000);
    }
    chunksRef.current = [];
  };

  const pauseRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.pause();
      setIsPaused(true);
      clearInterval(durationRef.current);
    }
  };

  const resumeRecording = () => {
    if (mediaRecorderRef.current && isPaused) {
      mediaRecorderRef.current.resume();
      setIsPaused(false);
      durationRef.current = setInterval(() => {
        setDurationRecording((prevDuration) => prevDuration + 1);
      }, 1000);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setIsPaused(false);
      clearInterval(durationRef.current);
      setDurationRecording(0);
    }
  };

  const cancelRecording = () => {
    if (mediaRecorderRef.current && (isRecording || isPaused)) {
      mediaRecorderRef.current.stop();
      chunksRef.current = [];
      setIsRecording(false);
      setIsPaused(false);
      clearInterval(durationRef.current);
      setDurationRecording(0);
    }
  };

  return (
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } lg:w-[71%] md:w-[60%] w-full flex-grow border-s-2 bg-white max-h-screen h-screen overflow-hidden md:block`}
    >
      <div
        className="flex flex-col justify-between w-full mt-16"
        style={{ height: "calc(100% - 4rem)" }}
      >
        <div className="z-10 flex items-center justify-between h-16 bg-white border-b-2 pe-4">
          <div className="flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-zinc-100">
            <img
              src="./../Image/Ardi.png"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full aspect-auto"
            />
            <div className="flex flex-col">
              <p className="font-semibold sm:text-sm">
                {textName.length > 10 && Theme.device === "mobile"
                  ? textName.slice(0, 10) + "..."
                  : textName}
              </p>
              <p className="text-sm ">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Tooltip title="Telephone" arrow placement="bottom">
              <button className="cursor-pointer">
                <i className="text-2xl text-blue-500 bx bxs-phone" />
              </button>
            </Tooltip>
            <Tooltip title="Telephone Video" arrow placement="bottom">
              <button className="cursor-pointer">
                <i className="text-2xl text-blue-500 bx bxs-video" />
              </button>
            </Tooltip>
            <Tooltip title="Informasi Kontak" arrow placement="bottom">
              <button className="cursor-pointer">
                <i className="text-2xl text-blue-500 bx bxs-info-circle" />
              </button>
            </Tooltip>
          </div>
        </div>
        <div
          className="box-border flex flex-col justify-end flex-grow gap-2 py-4 overflow-y-auto"
          ref={boxMessage}
        >
          <div className="flex-1 h-full px-4 place-content-end ">
            {RenderChat(chatHistory, Theme)}
            <div className="h-1"></div>
          </div>
        </div>
        <div className="relative bottom-0 z-10 flex items-center h-16 gap-6 px-4 py-2 bg-white border-t-2">
          {showPicker && (
            <EmojiPicker
              addEmoji={addEmoji}
              onClickOutside={() => setShowPicker(false)}
              style="absolute bottom-16 left-2"
            />
          )}
          <Tooltip title="Emoji" arrow placement="bottom">
            <button
              className="cursor-pointer"
              onClick={() => setShowPicker(!showPicker)}
            >
              <i className="text-2xl text-blue-500 bx bx-smile" />
            </button>
          </Tooltip>
          <div>
            <Box>
              <Tooltip title="Sisipkan" arrow placement="bottom">
                <IconButton
                  size="small"
                  sx={{ ml: 0 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <i className="text-2xl text-blue-500 bx bx-link" />
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "left", vertical: "bottom" }}
              anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <i className="text-2xl text-black bx bx-cog" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <i className="text-2xl text-black bx bx-log-out" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>

          {isRecording ? (
            <div className="relative flex justify-end w-full gap-2">
              <Tooltip title="Cancel" arrow placement="bottom">
                <button
                  className="px-2 bg-blue-500 rounded-full cursor-pointer"
                  onClick={() => cancelRecording()}
                >
                  <i className="text-white bx bx-trash" />
                </button>
              </Tooltip>
              {isPaused ? (
                <Tooltip title="Play" arrow placement="bottom">
                  <button
                    className="px-1 bg-blue-500 rounded-full cursor-pointer"
                    onClick={() => resumeRecording()}
                  >
                    <i className="text-2xl text-white bx bx-play" />
                  </button>
                </Tooltip>
              ) : (
                <Tooltip title="Pause" arrow placement="bottom">
                  <button
                    className="px-1 bg-blue-500 rounded-full cursor-pointer"
                    onClick={() => pauseRecording()}
                  >
                    <i className="text-2xl text-white bx bx-pause" />
                  </button>
                </Tooltip>
              )}
              <div className="flex items-center gap-2 px-2 text-white bg-blue-500 rounded-full">
                <span
                  className="w-3 h-3 bg-red-500 rounded-full"
                  id="recording"
                />
                <p>{Theme.formatDuration(durationRecording)}</p>
              </div>
              <Tooltip title="Send" arrow placement="bottom">
                <button
                  className="px-2 bg-blue-500 rounded-full cursor-pointer"
                  onClick={() => stopRecording()}
                >
                  <i className="text-white bx bx-send" />
                </button>
              </Tooltip>
            </div>
          ) : (
            <form onSubmit={handleSubmitMessage} className="relative w-full">
              <input
                type="text"
                name="message"
                value={message}
                className="w-full px-4 py-2 rounded-full bg-zinc-100 pe-12"
                onChange={(e) => setMessage(e.target.value)}
                autoComplete="off"
                placeholder="Tulis Pesan"
              />
              <button type="submit">
                <i className="absolute text-2xl text-blue-500 -translate-y-1/2 bx bx-send top-1/2 right-4" />
              </button>
            </form>
          )}
          <Tooltip title="Pesan Suara" arrow placement="bottom">
            <button
              className="cursor-pointer"
              onClick={isRecording ? stopRecording : startRecording}
            >
              <i className="text-2xl text-blue-500 bx bxs-microphone" />
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Mainbar;
