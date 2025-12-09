"use client";

import type { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import type { DirectMessageUser } from "@/types/community";
import { CrossIcon } from "lucide-react";

interface ChatProfileProps {
  profile?: DirectMessageUser | null;
  handleClose?: () => void;
}

const ChatProfile: FC<ChatProfileProps> = ({ profile, handleClose }) => {
  return (
    <div className="bg-background border-l px-4 py-3">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold">Profile</p>
        <CrossIcon onClick={handleClose} />
      </div>
      <div className="items-center gap-3">
        <Avatar className="h-38 w-38 rounded-full text-8xl">
          <AvatarImage src="" alt={profile?.name} />
          <AvatarFallback>{profile?.name?.charAt(0)}</AvatarFallback>
        </Avatar>

        <div className="flex flex-col">
          <span className="text-base font-bold">{profile?.name}</span>
          {profile?.isOnline && <span className="text-muted-foreground text-xs">Online</span>}
        </div>
      </div>
    </div>
  );
};

export default ChatProfile;
