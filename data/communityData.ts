import type { Channel, ChatMessage, DirectMessageUser } from "@/types/community";

export const channels: Channel[] = [
  { id: "1", title: "Announcements", unread: 5 },
  { id: "2", title: "Wins" },
  { id: "3", title: "Course" },
  { id: "4", title: "Q&A" },
  { id: "5", title: "Private" },
  { id: "6", title: "Course Resources" },
];

export const directMessageUsers: DirectMessageUser[] = [
  {
    id: "u1",
    name: "Cody Fisher",
    avatar: "/avatars/user1.png",
    isOnline: true,
    roomId: "dm1",
  },
  {
    id: "u2",
    name: "Eleanor Pena",
    avatar: "/avatars/user2.png",
    isOnline: true,
    roomId: "dm2",
  },
  {
    id: "u3",
    name: "Brooklyn Simmons",
    avatar: "/avatars/user3.png",
    isOnline: false,
    roomId: "dm3",
  },
  {
    id: "u4",
    name: "Ronald Richards",
    avatar: "/avatars/user4.png",
    isOnline: false,
    roomId: "dm4",
  },
  {
    id: "u5",
    name: "Jenny Wilson",
    avatar: "/avatars/jenny.png",
    isOnline: true,
  },
  {
    id: "u6",
    name: "Darlene Robertson",
    avatar: "/avatars/user6.png",
    isOnline: false,
    roomId: "dm5",
  },
  {
    id: "u7",
    name: "Wade Warren",
    avatar: "/avatars/user7.png",
    isOnline: false,
  },
  {
    id: "u8",
    name: "Ralph Edwards",
    avatar: "/avatars/user8.png",
    isOnline: true,
  },
  {
    id: "u9",
    name: "Kathryn Murphy",
    avatar: "/avatars/user9.png",
    isOnline: true,
  },
];

export const chatMessages: ChatMessage[] = [
  {
    id: "m1",
    senderId: "u5",
    text: "Hey! Let me know how I can help you.",
    timestamp: "2025-01-10T10:01:00Z",
    sender: "false",
  },
  {
    id: "m2",
    senderId: "me",
    text: "Hi Jenny! I wanted to ask about the course details.",
    timestamp: "2025-01-10T10:02:45Z",
    sender: "false",
  },
  {
    id: "m3",
    senderId: "u5",
    text: "Sure! What do you want to know?",
    timestamp: "2025-01-10T10:03:10Z",
    sender: "false",
  },
];
