import type { Channel, DirectMessageUser } from "@/types/community";
import type { FC } from "react";
import { Input } from "../ui/input";

interface NewChatSectionProps {
  setSelectedChat: React.Dispatch<React.SetStateAction<Channel | DirectMessageUser | null>>;
}

const NewChatSection: FC<NewChatSectionProps> = ({ setSelectedChat }) => {
  return (
    <div className={"flex flex-1 flex-col overflow-hidden rounded-r-md bg-white"}>
      <div className="border-b p-4">
        <p className="pt-4 pb-3 text-2xl font-semibold">New Chat</p>
        <Input
          placeholder="Search member or channel"
          className="placeholder:text-md text-md h-12 placeholder:font-medium placeholder:text-[#9DA8B9]"
          onChange={() => setSelectedChat}
        />
      </div>
    </div>
  );
};

export default NewChatSection;
