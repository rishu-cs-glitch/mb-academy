import type { ChatMessage } from "@/types/community";
import type { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { SmilePlus } from "lucide-react";
import { Button } from "../ui/button";

type MessageItemProps = {
  item: ChatMessage;
};
function getReactionCounts(message: ChatMessage) {
  if (message.reactions === undefined) {
    return {};
  }
  return message.reactions.reduce<Record<string, number>>((acc, r) => {
    acc[r.emoji] = (acc[r.emoji] || 0) + 1;
    return acc;
  }, {});
}

const MessageItem: FC<MessageItemProps> = ({ item }) => {
  console.warn("MessageItem item:", item);
  const reactions = getReactionCounts(item);
  return (
    <div className="flex gap-3 p-4 hover:bg-gray-100">
      <Avatar className="h-10 w-10">
        <AvatarImage src={item.avatar} />
        <AvatarFallback className="text-[#15243B]">{item.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div>
        <div className="flex items-center gap-2">
          <p className="text-md font-medium text-[#1F2937]">{item.name}</p>
          {item.role === "Admin" && <p className="text-sm font-normal text-[#9DA8B9]">{item.role}</p>}
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
              <div key={emoji} className="flex items-center gap-1 rounded-full px-2 py-1 text-xs">
                <span>{emoji}</span>
                <span>{count}</span>
              </div>
            ))}
            <SmilePlus className="h-5 w-5" />
          </div>
        )}
        <div className="mt-1 flex gap-2">
          {Number(item?.threadCount) > 0 && <Button variant="link">{item.threadCount} Reply</Button>}
        </div>
      </div>
    </div>
  );
};
export default MessageItem;
