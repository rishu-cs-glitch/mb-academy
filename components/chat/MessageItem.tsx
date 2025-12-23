import type { ChatMessage } from "@/types/community";
import type { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { SmilePlus, Smile, MessageCircleMore, ArrowBigRight, MoreVertical } from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ReportDialog } from "./ReportDialog";

type MessageItemProps = {
  item: ChatMessage;
};

function getReactionCounts(message: ChatMessage) {
  if (!message.reactions) return {};
  return message.reactions.reduce<Record<string, number>>((acc, r) => {
    acc[r.emoji] = (acc[r.emoji] || 0) + 1;
    return acc;
  }, {});
}

const MessageItem: FC<MessageItemProps> = ({ item }) => {
  const reactions = getReactionCounts(item);

  return (
    <div className="group relative flex gap-3 p-4 hover:bg-gray-100 z-10">
      <div className="absolute right-4 -top-4 z-10 flex items-center gap-2 rounded-sm bg-gray-100 px-2 shadow-sm opacity-0 transition-opacity group-hover:opacity-100 py-1">
        <Button variant="ghost" size="icon" className="h-7 w-7">
          <Smile className="h-4 w-4" />
        </Button>

        <Button variant="ghost" size="icon" className="h-7 w-7">
          <MessageCircleMore className="h-4 w-4" />
        </Button>

        <Button variant="ghost" size="icon" className="h-7 w-7">
          <ArrowBigRight className="h-4 w-4" />
        </Button>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </PopoverTrigger>

          <PopoverContent align="end" className="w-40 border-0 bg-white p-2 m-2 shadow-md">
            <ReportDialog onClickReport={() => {}} />
          </PopoverContent>
        </Popover>
      </div>

      <Avatar className="h-10 w-10">
        <AvatarImage src={item.avatar} />
        <AvatarFallback className="text-[#15243B]">{item.name.charAt(0)}</AvatarFallback>
      </Avatar>

      {/* Message Content */}
      <div>
        <div className="flex items-center gap-2">
          <p className="text-md font-medium text-[#1F2937]">{item.name}</p>

          {item.role === "Admin" && (
            <p className="text-sm font-normal text-[#9DA8B9]">{item.role}</p>
          )}

          <span className="text-xs font-normal text-[#1F2937]">
            {new Date(item.timestamp)
              .toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })
              .toLowerCase()}
          </span>
        </div>

        <p className="text-md font-normal text-[#1F2937]">{item.text}</p>

        {Object.entries(reactions).length > 0 && (
          <div className="mt-2 flex gap-2">
            {Object.entries(reactions).map(([emoji, count]) => (
              <div
                key={emoji}
                className="flex items-center gap-1 rounded-full bg-gray-200 px-2 py-1 text-xs"
              >
                <span>{emoji}</span>
                <span>{count}</span>
              </div>
            ))}
            <SmilePlus className="h-5 w-5 cursor-pointer" />
          </div>
        )}

        {Number(item?.threadCount) > 0 && (
          <div className="mt-1">
            <Button variant="link">{item.threadCount} Reply</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageItem;
