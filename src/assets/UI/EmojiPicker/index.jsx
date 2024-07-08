/* eslint-disable react/prop-types */
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useEffect, useRef } from "react";

const EmojiPicker = (props) => {
  const { addEmoji, style, onClickOutside } = props;
  const emojiRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (emojiRef.current && !emojiRef.current.contains(event.target)) {
        onClickOutside();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClickOutside]);

  return (
    <div className={style} ref={emojiRef}>
      <Picker data={data} onEmojiSelect={addEmoji} />
    </div>
  );
};

export default EmojiPicker;
