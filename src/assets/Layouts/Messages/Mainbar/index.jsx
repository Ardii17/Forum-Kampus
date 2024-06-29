/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Tooltip } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../../Contexts/ThemeContext";

const chatMessage = (text, date, status) => {
  return (
    <div
      className={`${
        status === "sent" ? "justify-end" : "justify-start"
      } flex items-center my-2`}
    >
      <div
        className={`${
          status === "sent"
            ? "text-white bg-blue-500"
            : "text-black bg-zinc-100"
        } min-h-10 rounded-lg shadow px-3 py-2 max-w-96 h-auto`}
      >
        <p className={`pe-8`}>{text}</p>
        <p className="text-[11px] text-end">{date}</p>
      </div>
    </div>
  );
};

const Mainbar = ({ isOpen, setIsOpen }) => {
  const boxMessage = useRef(null);
  const Theme = useContext(ThemeContext);
  const [textName, setTextName] = useState("Muhammad Ardiansyah Firdaus");
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
  const renderChat = () => {
    let lastDate = null;

    return chatHistory.map((chat, index) => {
      const currentDate = new Date(chat.date).toLocaleDateString();

      const newDateBox =
        lastDate !== currentDate ? (
          <div key={index} className="my-2 text-center">
            <div className="inline-block px-3 py-1 text-gray-700 bg-gray-200 rounded">
              <p className="text-sm font-semibold">
                {Theme.formatDate(chat.date).day}
              </p>
            </div>
          </div>
        ) : null;

      lastDate = currentDate;

      return (
        <div key={index}>
          {newDateBox}
          {chatMessage(
            chat.message,
            Theme.formatDate(chat.date).time,
            chat.status
          )}
        </div>
      );
    });
  };

  const handleSubmitMessage = (event) => {
    event.preventDefault();
    const newChat = {
      message: event.target.message.value,
      date: new Date().toISOString(),
      status: "sent",
    };
    setChatHistory([...chatHistory, newChat]);
    event.target.message.value = "";
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
                {textName.length > 14 && Theme.device === "mobile"
                  ? textName.slice(0, 14) + "..."
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
            {renderChat()}
            <div className="h-1"></div>
          </div>
        </div>
        <div className="bottom-0 z-10 flex items-center h-16 gap-6 px-4 py-2 bg-white border-t-2">
          <Tooltip title="Emoji" arrow placement="bottom">
            <button className="cursor-pointer">
              <i className="text-2xl text-blue-500 bx bx-smile" />
            </button>
          </Tooltip>
          <Tooltip title="Sisipkan" arrow placement="bottom">
            <button className="cursor-pointer">
              <i className="text-2xl text-blue-500 bx bx-link" />
            </button>
          </Tooltip>
          <form onSubmit={handleSubmitMessage} className="relative w-full">
            <input
              type="text"
              name="message"
              className="w-full px-4 py-2 rounded-full bg-zinc-100 pe-12"
              autoComplete="off"
              placeholder="Tulis Pesan"
            />
            <button type="submit">
              <i className="absolute text-2xl text-blue-500 -translate-y-1/2 bx bx-send top-1/2 right-4" />
            </button>
          </form>
          <Tooltip title="Pesan Suara" arrow placement="bottom">
            <button className="cursor-pointer">
              <i className="text-2xl text-blue-500 bx bxs-microphone" />
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Mainbar;
