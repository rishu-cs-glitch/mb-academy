"use client";

import type { FC } from "react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AtSign, Link, Plus, Send, Smile } from "lucide-react";
import type { EmojiClickData } from "emoji-picker-react";
import EmojiPicker from "emoji-picker-react";

interface ChatInputProps {
  onSend?: (message: string) => void;
  disable?: boolean;
}

const ChatInput: FC<ChatInputProps> = ({ onSend, disable }) => {
  const [value, setValue] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiRef = useRef<HTMLDivElement>(null);
  const emojiButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        emojiRef.current &&
        !emojiRef.current.contains(event.target as Node) &&
        emojiButtonRef.current &&
        !emojiButtonRef.current.contains(event.target as Node)
      ) {
        setShowEmojiPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSend = () => {
    if (!value.trim()) return;
    onSend?.(value);
    setValue("");
  };
  const onEmojiClick = (emojiData: EmojiClickData) => {
    setValue((prev) => prev + emojiData.emoji);
  };

  return (
    <div className="bg-background m-4 rounded-md border">
      <div className="rounded-md bg-[#F7F9FC]">
        <Button
          variant="ghost"
          size="icon"
          className="ml-2 h-6 w-6 shrink-0 rounded-full bg-[#E1E9F4]"
          disabled={disable}
        >
          <Plus className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0" disabled={disable}>
          <Link className="h-4 w-4" />
        </Button>
        <Button
          ref={emojiButtonRef}
          variant="ghost"
          size="icon"
          className="h-8 w-8 shrink-0"
          disabled={disable}
          onClick={() => setShowEmojiPicker((prev) => !prev)}
        >
          <Smile className="h-4 w-4" />
        </Button>

        {showEmojiPicker && (
          <div ref={emojiRef} className="absolute bottom-20 right-4 z-50">
            <EmojiPicker onEmojiClick={onEmojiClick} height={350} width={300} />
          </div>
        )}
        <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0" disabled={disable}>
          <AtSign className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex items-end gap-2 rounded-xl px-3 py-2">
        <Textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type message"
          className="max-h-35 min-h-8 w-full resize-none border-0 bg-transparent p-0 text-sm shadow-none focus-visible:ring-0 leading-8"
          disabled={disable}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
        />

        <Button
          size="icon"
          className="h-8 w-8 bg-transparent hover:bg-transparent"
          onClick={handleSend}
          disabled={!value.trim()}
        >
          <Send className="h-8 w-8" color="#7F8DA4" />
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
