import React, { useRef, useState, useEffect } from "react";
import autoSizeTextArea from "@/hooks/autoSizeTextArea";
import { ChatType } from "src/pages";

interface ChatBoxProps {
  messageToSend: string;
  setMessageToSend: (msg: string) => void;
  handleSendMessage: (e: any) => void;
  chats: ChatType[];
}

export default function ChatBox({
  messageToSend,
  setMessageToSend,
  handleSendMessage,
  chats,
}: ChatBoxProps) {
  console.log("chatbox props: ", {
    messageToSend,
    setMessageToSend,
    handleSendMessage,
    chats,
  });

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  autoSizeTextArea(textAreaRef.current, messageToSend, 125);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;
    setMessageToSend(val);
  };

  return (
    <>
      <div className="flex h-96 w-96 flex-col rounded-lg bg-mediumGray p-5 dark:bg-blackGradient">
        <div className="text-lightGray">chat:</div>
        <div className="grow pt-2 pb-2 dark:text-pureWhite">
          <div className="h-full rounded-lg bg-pureWhite p-4 dark:bg-darkBlue dark:text-white">
            messages
          </div>
        </div>
        <div className="min-h-10 flex flex-row gap-4 dark:text-pureWhite">
          <textarea
            onChange={handleChange}
            ref={textAreaRef}
            id="default-input"
            rows={1}
            value={messageToSend}
            className="
            dark:placeholder-gray-400 
            dark:focus:border-blue-500 
            block 
            w-full 
            rounded-lg 
            p-2.5 
            text-sm 
            focus:outline-4
            dark:bg-darkBlue 
            dark:text-white"
          />
          <div className="flex items-end">
            <button
              onClick={(e) => handleSendMessage(e)}
              className="h-7 w-20 rounded-lg bg-orange align-bottom text-sm text-pureWhite"
            >
              send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
