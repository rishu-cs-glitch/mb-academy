import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import { channels } from "@/data/communityData";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Hash } from "lucide-react";
import type { Channel, DirectMessageUser } from "@/types/community";

type Props = {
  selectedChat?: Channel | DirectMessageUser | null;
  setSelectedType?: React.Dispatch<React.SetStateAction<"channel" | "directmessage">>;
  setSelectedChat?: React.Dispatch<React.SetStateAction<Channel | DirectMessageUser | null>>;
  setSelectedProfile?: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function ChannelList({
  setSelectedType,
  selectedChat,
  setSelectedChat,
  setSelectedProfile,
}: Props) {
  return (
    <div className="m-2">
      <Accordion defaultValue="channels" type="single" collapsible>
        <AccordionItem value="channels">
          <AccordionTrigger className="min-w-2xs justify-start p-2 pb-2 text-sm font-semibold">
            Channels
          </AccordionTrigger>
          <Separator />
          <AccordionContent className="py-3">
            <ScrollArea className="h-64">
              <div className="flex flex-col space-y-1">
                {channels.map((channel) => (
                  <Button
                    key={channel.id}
                    variant="ghost"
                    className={`flex w-full items-center justify-start gap-2 text-sm hover:bg-[#EBE7D6] ${!channel.unread ? "text-muted-foreground opacity-70" : "text-foreground"} ${selectedChat?.id === channel.id && "bg-[#15243B] text-white opacity-100 hover:bg-[#15243B] hover:text-white"}`}
                    onClick={() => {
                      setSelectedType && setSelectedType("channel");
                      setSelectedChat && setSelectedChat(channel);
                      setSelectedProfile && setSelectedProfile(false);
                    }}
                  >
                    <Hash
                      className={`h-4 w-4 ${!channel.unread ? "text-muted-foreground opacity-60" : ""} ${selectedChat?.id === channel.id && "text-white opacity-100"}`}
                    />

                    <span className="flex-1 text-left">{channel.title}</span>

                    {channel.unread && (
                      <Badge className="mr-0 ml-auto h-4 w-4 rounded-sm" variant="destructive">
                        {channel.unread}
                      </Badge>
                    )}
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
