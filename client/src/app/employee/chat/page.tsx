"use client";

import { useEffect, useState } from "react";
import ChatSidebar from "~/components/Chat/ChatSidebar";
import ChatWindow from "~/components/Chat/ChatWindow";
import { dummyUsers } from "~/components/Chat/dummyUsers";
import { userMessages } from "~/components/Chat/userMessages";

const ChatPage = () => {
  const [selectedId, setSelectedId] = useState<number | null>(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const selectedUser =
    dummyUsers.find(u => u.id === selectedId) || dummyUsers[0];

  return (
    <div className='flex h-[calc(100vh-70px)] w-full flex-col'>
      {/* Page Header */}
      <div className='mb-4 px-4 md:px-0'>
        <h1 className='text-lg leading-[22px] font-[400] sm:pt-4 md:text-[26px]'>
          Chat
        </h1>
        {/* Breadcumb */}
        <div className='mt-2 flex gap-2 text-sm'>
          <p className='text-sm leading-[22px] font-[400] text-[#1C252E]'>
            Overview <span className='text-[#919EAB]'>• Message</span>
          </p>
        </div>
      </div>

      {/* Chat Layout */}
      <div className='flex h-full flex-1 flex-col overflow-hidden rounded-lg border md:flex-row'>
        {/* Show Sidebar on Desktop or when no chat is selected (on mobile) */}
        {(!selectedId && isMobile) || !isMobile ? (
          <div className='h-full w-full md:w-[300px]'>
            <ChatSidebar
              users={dummyUsers}
              activeId={selectedId}
              onSelect={setSelectedId}
            />
          </div>
        ) : null}

        {/* Show ChatWindow on Desktop or when a chat is selected (on mobile) */}
        {selectedId && (
          <div className='h-full flex-1'>
            <ChatWindow
              user={selectedUser}
              messages={userMessages[selectedId] || []}
              onBack={isMobile ? () => setSelectedId(null) : undefined}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
