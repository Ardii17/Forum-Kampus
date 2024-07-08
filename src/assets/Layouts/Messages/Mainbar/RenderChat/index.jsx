import WaveSurferComponent from "../../../../UI/WaveSurfer";

const ChatMessage = (text, date, status, type = "text") => {
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
        {type === "voice" ? (
          <WaveSurferComponent audioFile={text} />
        ) : (
          <p>{text}</p>
        )}
        <p className="text-[11px] text-end">{date}</p>
      </div>
    </div>
  );
};

const RenderChat = (chatHistory, Theme) => {
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
        {ChatMessage(
          chat.message,
          Theme.formatDate(chat.date).time,
          chat.status,
          chat.type
        )}
      </div>
    );
  });
};

export default RenderChat;
