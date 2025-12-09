"use client";

import type { FC } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import type { Channel, DirectMessageUser } from "@/types/community";
import { HashIcon } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";

interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: string;
  isMe?: boolean;
}

interface ChatBodyProps {
  messages?: Message[];
  selectedChat?: DirectMessageUser | Channel | null;
  chatType?: string;
  handleViewProfile?: () => void;
}

const ChatBody: FC<ChatBodyProps> = ({ messages = [], chatType, selectedChat, handleViewProfile }) => {
  return (
    <div className="bg-background flex h-fit flex-1 flex-col overflow-hidden">
      {chatType === "directmessage" && (
        <div className="px-4 py-3">
          <div className="bg-background sticky top-0 z-10 flex items-center gap-3 text-3xl">
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
          {/* {subTitle && <span className="text-muted-foreground text-xs">{subTitle}</span>} */}
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
          {/* {subTitle && <span className="text-muted-foreground text-xs">{subTitle}</span>} */}
        </div>
      )}
      <ScrollArea className="flex-1 px-4 py-4">
        <div className="flex flex-1 flex-col">
          {messages?.length === 0 && (
            <div className="flex flex-1 items-center justify-center">
              <p className="text-center text-sm">
                Start a conversation with{" "}
                <span className="font-semibold">
                  {(selectedChat as DirectMessageUser)?.name ?? (selectedChat as Channel)?.title ?? ""}
                </span>
              </p>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ChatBody;
