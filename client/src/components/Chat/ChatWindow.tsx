"use client";

import Image from "next/image";
import meImg from "~/app/assets/employer/chat/me.png";
import { FaPaperclip } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const ChatWindow = ({
  user,
  messages,
  onBack
}: {
  user: any;
  messages: { sender: "me" | "them"; text: string; time: string }[];
  onBack?: () => void;
}) => {
  return (
    <div className='flex h-full w-full flex-col'>
      {/* Header */}
      <div className='flex shrink-0 items-center gap-3 border-b p-4'>
        {/* Back button on mobile */}
        {onBack && (
          <button onClick={onBack} className='text-[#4F9F9F] md:hidden'>
            <IoIosArrowBack size={24} />
          </button>
        )}
        <Image
          src={user.avatar}
          alt={user.name}
          width={48}
          height={48}
          className='rounded-full object-cover'
        />
        <div>
          <p className='font-semibold'>{user.name}</p>
          <p className='text-sm text-gray-500'>
            {user.role} &nbsp; {user.company}
          </p>
        </div>
      </div>

      {/* Message Area and Input */}
      <div className='flex flex-1 flex-col justify-between'>
        {/* Messages */}
        <div className='flex-1 space-y-4 overflow-y-auto px-4 py-4 md:px-6'>
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`flex max-w-[85%] items-end gap-3 sm:max-w-[70%] ${msg.sender === "me" ? "flex-row-reverse" : ""}`}
              >
                {/* Avatar */}
                <div className='h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100 sm:h-12 sm:w-12'>
                  <Image
                    src={msg.sender === "me" ? meImg : user.avatar}
                    alt='avatar'
                    width={48}
                    height={48}
                    className='h-full w-full object-cover'
                  />
                </div>

                {/* Message Bubble */}
                <div
                  className={`rounded-[20px] p-4 ${msg.sender === "me" ? "rounded-br-[4px] bg-[#FAFAFA] text-black" : "rounded-bl-[4px] bg-[#4F9F9F] text-white"}`}
                >
                  <p className='text-sm'>{msg.text}</p>
                  <p className='mt-2 text-right text-xs text-gray-400'>
                    {msg.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className='shrink-0 border-t bg-white p-4'>
          <div className='flex items-center rounded-full border bg-white px-4 py-2'>
            <FaPaperclip className='mr-3 cursor-pointer text-gray-500' />
            <input
              type='text'
              placeholder='Write Here'
              className='flex-1 text-sm focus:outline-none'
            />
            <button className='ml-3 text-[#4F9F9F]'>
              <IoMdSend size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
