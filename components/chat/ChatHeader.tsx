"use client";

import type { FC } from "react";
import { Button } from "@/components/ui/button";
import { Ban, Hash, LogOutIcon, MoreVertical } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import type { Channel, DirectMessageUser } from "@/types/community";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ReportDialog } from "./ReportDialog";
import { CustomDialog } from "../dialog/CustomDialog";

interface ChatHeaderProps {
  selectedChat?: Channel | DirectMessageUser | null;
  selectedType?: "channel" | "directmessage";
  onClickReport?: () => void;
  onClickDelete?: () => void;
}

const ChatHeader: FC<ChatHeaderProps> = ({ selectedChat, selectedType, onClickDelete, onClickReport }) => {
  return (
    <div className="bg-background w-full rounded-tr-md border-b px-4 pt-6 pb-3">
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
            <Avatar className="h-10 w-10 rounded-full">
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

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </PopoverTrigger>

          {selectedType === "channel" ? (
            <PopoverContent align="end" className="w-40 border-0 bg-white p-2 shadow-md">
              <CustomDialog
                triggerText="Leave"
                cancelText="Close"
                confirmText="Leave"
                description="You'll stop receiving new messages and mentions."
                title="Leave this Channel?"
                icon={LogOutIcon}
                iconBg="#FDF2F2"
                onConfirm={onClickDelete}
              />
              <CustomDialog
                triggerText="Mute Channel"
                cancelText="Close"
                confirmText="Mute Channel"
                description="You won't receive any new notifications or updates from this channel until you unmute it."
                title="Mute this Channel?"
                iconBg="#E1E9F4"
                onConfirm={onClickDelete}
                iconColor="#15243B"
                icon={Ban}
              />
            </PopoverContent>
          ) : (
            <PopoverContent align="end" className="w-40 border-0 bg-white p-2 shadow-md">
              <CustomDialog
                triggerText="Delete Chat"
                cancelText="Close"
                confirmText="Delete Chat"
                description="Are you sure you want to delete this chat?"
                title="Delete this Chat?"
                iconBg="white"
                onConfirm={onClickDelete}
              />
              <ReportDialog onClickReport={onClickReport} />
            </PopoverContent>
          )}
        </Popover>
      </div>
    </div>
  );
};

export default ChatHeader;
