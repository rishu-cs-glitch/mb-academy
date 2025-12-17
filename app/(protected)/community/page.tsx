"use client";

import ChatBody from "@/components/chat/ChatBody";
import ChatHeader from "@/components/chat/ChatHeader";
import ChatInput from "@/components/chat/ChatInput";
import ChatProfile from "@/components/chat/ChatProfile";
import NewChatSection from "@/components/chat/NewChat";
import ChannelList from "@/components/sidebar/ChannelList";
import DirectmessageList from "@/components/sidebar/DirectmessageList";
import { chatMessages as ChatMessagesData } from "@/data/communityData";
import { cn } from "@/lib/utils";
import type { Channel, ChatMessage, DirectMessageUser } from "@/types/community";
import React, { useState } from "react";

const userId = "u1";

export default function Page() {
  const [selectedType, setSelectedType] = React.useState<"channel" | "directmessage">(
    "directmessage"
  );
  const [selectedChat, setSelectedChat] = React.useState<Channel | DirectMessageUser | null>(null);
  const [selectedProfile, setSelectedProfile] = React.useState<boolean>(false);
  const [newChat, setNewChat] = React.useState<boolean>(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(ChatMessagesData);

  const handleNewChatClick = () => {
    setSelectedChat(null);
    setNewChat(true);
  };
  const sendMessage = (msg: string) => {
    setChatMessages((prevMessages) => [
      ...prevMessages,
      {
        id: `m${prevMessages.length + 1}`,
        userId: userId,
        name: "Current User",
        avatar: "/avatars/current_user.png",
        senderId: userId,
        text: msg,
        timestamp: new Date().toISOString(),
        sender: "true",
        role: "student",
        likes: 0,
      },
    ]);
    // Implement message sending logic here
  };
  return (
    <div className="flex h-screen bg-[#F9F8F3] p-4">
      <div className="rounded-l-md border p-4 shadow-lg">
        <ChannelList
          setSelectedType={setSelectedType}
          setSelectedChat={setSelectedChat}
          selectedChat={selectedChat}
          setSelectedProfile={setSelectedProfile}
        />
        <DirectmessageList
          setSelectedType={setSelectedType}
          setSelectedChat={setSelectedChat}
          selectedChat={selectedChat}
          setSelectedProfile={setSelectedProfile}
          newChat={handleNewChatClick}
        />
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col overflow-hidden rounded-r-md bg-white shadow-lg",
          selectedProfile && "rounded-r-none"
        )}
      >
        {selectedChat ? (
          <>
            <ChatHeader
              selectedType={selectedType}
              selectedChat={selectedChat}
              // onClickReport={}
            />

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

            <ChatInput onSend={(msg) => sendMessage(msg)} />
          </>
        ) : newChat ? (
          <>
            <NewChatSection setSelectedChat={setSelectedChat} />
            <ChatInput disable />
          </>
        ) : (
          <div className="flex h-full flex-1 flex-col items-center justify-center">
            <p className="text-gray-500">Select a channel or direct message to start chatting</p>
          </div>
        )}
      </div>
      {selectedProfile && (
        <ChatProfile
          profile={selectedChat as DirectMessageUser}
          handleClose={() => setSelectedProfile(false)}
        />
      )}
    </div>
  );
}
