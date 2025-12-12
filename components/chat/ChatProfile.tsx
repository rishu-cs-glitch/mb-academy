"use client";

import { type FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import type { DirectMessageUser } from "@/types/community";
import { Clock5, X } from "lucide-react";

interface ChatProfileProps {
  profile?: DirectMessageUser | null;
  handleClose?: () => void;
}

const ChatProfile: FC<ChatProfileProps> = ({ profile, handleClose }) => {
  return (
    <div className="bg-background h-full w-80 rounded-r-md border-l px-6 py-4 shadow-lg">
      <div className="mb-6 flex items-center justify-between">
        <p className="text-2xl font-semibold">Profile</p>
        <X onClick={handleClose} className="cursor-pointer" />
      </div>
      <div className="flex flex-col items-center">
        <Avatar className="mb-6 h-60 w-60 rounded-full text-8xl">
          <AvatarImage src="" alt={profile?.name} />
          <AvatarFallback>{profile?.name?.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex w-full flex-col gap-3">
          <span className="text-lg font-bold">{profile?.name}</span>
          {profile?.isOnline && (
            <span className="flex gap-2 text-sm">
              <span className="text-4xl leading-4 text-green-600">•</span> Active
            </span>
          )}
          <span className="flex gap-2 text-sm">
            <Clock5 size={"18"} /> GMT +5:00
          </span>
          <div className="flex flex-col gap-1">
            <span className="font-semibold">Bio</span>
            <span className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Lacinia eget at leo nunc.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatProfile;
