"use client";

import ChatBody from "@/components/chat/ChatBody";
import ChatHeader from "@/components/chat/ChatHeader";
import ChatInput from "@/components/chat/ChatInput";
import ChatProfile from "@/components/chat/ChatProfile";
import ChannelList from "@/components/sidebar/ChannelList";
import DirectmessageList from "@/components/sidebar/DirectmessageList";
import type { Channel, ChatMessage, DirectMessageUser } from "@/types/community";
import React from "react";

export default function Page() {
  const [selectedType, setSelectedType] = React.useState<"channel" | "directmessage">("directmessage");
  const [selectedChat, setSelectedChat] = React.useState<Channel | DirectMessageUser | null>(null);
  const [selectedProfile, setSelectedProfile] = React.useState<boolean>(false);
  const chatMessages: ChatMessage[] = [];
  return (
    <div className="flex h-screen bg-[#F9F8F3] p-10">
      <div className="rounded-l-md border p-4">
        <ChannelList setSelectedType={setSelectedType} setSelectedChat={setSelectedChat} selectedChat={selectedChat} />
        <DirectmessageList
          setSelectedType={setSelectedType}
          setSelectedChat={setSelectedChat}
          selectedChat={selectedChat}
        />
      </div>

      <div className="flex flex-1 flex-col overflow-hidden rounded-r-md bg-white">
        {selectedChat ? (
          <>
            <ChatHeader selectedType={selectedType} selectedChat={selectedChat} />

            {/* Chat Body fills all remaining height */}
            <div className="flex-1 overflow-hidden">
              <ChatBody
                handleViewProfile={() => {
                  setSelectedProfile(true);
                }}
                messages={chatMessages}
                chatType={selectedType}
                selectedChat={selectedChat}
              />
            </div>

            <ChatInput onSend={(msg) => console.warn("Sent:", msg)} />
          </>
        ) : (
          <div className="flex h-full flex-1 flex-col items-center justify-center">
            <p className="text-gray-500">Select a channel or direct message to start chatting</p>
          </div>
        )}
        {selectedProfile && (
          <ChatProfile profile={selectedChat as DirectMessageUser} handleClose={() => setSelectedProfile(false)} />
        )}
      </div>
    </div>
  );
}
