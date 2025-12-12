import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import { directMessageUsers } from "@/data/communityData";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import type { Channel, DirectMessageUser } from "@/types/community";
import { PlusIcon, X } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

type Props = {
  selectedChat?: Channel | DirectMessageUser | null;
  setSelectedType?: React.Dispatch<React.SetStateAction<"channel" | "directmessage">>;
  setSelectedChat?: React.Dispatch<React.SetStateAction<Channel | DirectMessageUser | null>>;
  setSelectedProfile?: React.Dispatch<React.SetStateAction<boolean>>;
  newChat?: () => void;
};
export default function DirectMessageList({
  setSelectedType,
  selectedChat,
  setSelectedChat,
  setSelectedProfile,
  newChat,
}: Props) {
  return (
    <div className="m-2">
      <Accordion type="single" collapsible defaultValue="direct-messages">
        <AccordionItem value="direct-messages">
          <div className="flex items-center">
            <AccordionTrigger className="justify-start pb-2 text-sm font-semibold">Direct Message</AccordionTrigger>
            <TooltipProvider delayDuration={200}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    className="ml-auto flex cursor-pointer items-center rounded-md hover:bg-[#EBE7D6]"
                    size="icon-sm"
                    onClick={newChat}
                  >
                    <PlusIcon className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>

                <TooltipContent className="border bg-[#EBE7D6] text-black" side="top">
                  New chat
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Separator />
          <AccordionContent className="py-3">
            <ScrollArea className="pr-2">
              <div className="flex flex-col space-y-1">
                {directMessageUsers.map((user) => (
                  <Button
                    key={user.id}
                    variant="ghost"
                    className={`flex w-full items-center justify-start gap-3 px-2 py-2 text-sm hover:bg-[#EBE7D6] ${
                      selectedChat?.id === user.id && "bg-[#15243B] text-white hover:bg-[#15243B] hover:text-white"
                    }`}
                    onClick={() => {
                      setSelectedType && setSelectedType("directmessage");
                      setSelectedChat && setSelectedChat(user);
                      setSelectedProfile && setSelectedProfile(false);
                    }}
                  >
                    <div className="relative">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback className="text-[#15243B]">{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>

                      {user.isOnline && (
                        <span className="border-background absolute right-0 bottom-0 h-2 w-2 rounded-full border bg-green-500"></span>
                      )}
                    </div>

                    <span className="text-sm">{user.name}</span>
                    <X className={`hidden hover:visible`} />
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
