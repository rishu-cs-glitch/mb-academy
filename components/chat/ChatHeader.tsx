"use client";

import type { FC } from "react";
import { Button } from "@/components/ui/button";
import { Hash, MoreVertical } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import type { Channel, DirectMessageUser } from "@/types/community";

interface ChatHeaderProps {
  selectedChat?: Channel | DirectMessageUser | null;
  selectedType?: "channel" | "directmessage";
}

const ChatHeader: FC<ChatHeaderProps> = ({ selectedChat, selectedType }) => {
  return (
    <div className="bg-background w-full rounded-tr-md border-b px-4 py-3">
      <div className="flex items-center justify-between">
        {selectedType === "channel" ? (
          <div className="flex items-center gap-3">
            <div className="bg-muted flex h-8 w-8 items-center justify-center rounded-md">
              <Hash className="text-muted-foreground h-4 w-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold">{(selectedChat as Channel)?.title}</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8 rounded-full">
              <AvatarImage src="" alt={(selectedChat as DirectMessageUser)?.name} />
              <AvatarFallback>{(selectedChat as DirectMessageUser)?.name?.charAt(0)}</AvatarFallback>
            </Avatar>

            <div className="flex flex-col">
              <span className="text-base font-bold">{(selectedChat as DirectMessageUser)?.name}</span>
              {(selectedChat as DirectMessageUser)?.isOnline && (
                <span className="text-muted-foreground text-xs">Online</span>
              )}
            </div>
          </div>
        )}

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
