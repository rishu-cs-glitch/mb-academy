"use client";

import type { FC } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import type { Channel, ChatMessage, DirectMessageUser } from "@/types/community";
import { HashIcon } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import MessageItem from "./MessageItem";

interface ChatBodyProps {
  messages?: ChatMessage[];
  selectedChat?: DirectMessageUser | Channel | null;
  chatType?: string;
  handleViewProfile?: () => void;
}

const ChatBody: FC<ChatBodyProps> = ({ messages = [], chatType, selectedChat, handleViewProfile }) => {
  return (
    <div className="flex h-full flex-1 flex-col overflow-hidden">
      {chatType === "directmessage" && (
        <div className="px-4 py-3">
          <div className="bg-background sticky top-0 z-10 flex items-center gap-3 pt-6 text-3xl">
            <Avatar className="h-20 w-20">
              <AvatarImage src="" alt={(selectedChat as DirectMessageUser)?.name} />
              <AvatarFallback>{(selectedChat as DirectMessageUser)?.name?.charAt(0)}</AvatarFallback>
            </Avatar>

            <div className="flex flex-col justify-around">
              <span className="text-2xl font-bold">{(selectedChat as DirectMessageUser)?.name}</span>
              <div>
                <Button variant="ghost" className="border border-[#15243B]" size={"sm"} onClick={handleViewProfile}>
                  View Profile
                </Button>
              </div>
            </div>
          </div>
          <span className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Lacinia eget at leo nunc. Aliquam neque volutpat nunc mi sit justo
            netus.
          </span>
        </div>
      )}
      {chatType === "channel" && (
        <div className="px-4 py-3">
          <div className="bg-background sticky top-0 z-10 flex items-center gap-3">
            <HashIcon size={25} className="text-gray-600" />
            <div className="flex flex-col justify-around">
              <span className="text-2xl font-bold">{(selectedChat as Channel).title}</span>
            </div>
          </div>
        </div>
      )}
      {messages?.length === 0 && (
        <div className="flex h-full flex-1 items-center justify-center">
          <p className="mb-30 text-sm">
            Start a conversation with{" "}
            <span className="font-semibold">
              {(selectedChat as DirectMessageUser)?.name ?? (selectedChat as Channel)?.title ?? ""}
            </span>
          </p>
        </div>
      )}
      {messages.length > 0 && (
        <ScrollArea className="h-full flex-1 py-4">
          {messages.map((msg) => (
            <MessageItem item={msg} key={msg.id} />
          ))}
        </ScrollArea>
      )}
    </div>
  );
};

export default ChatBody;
