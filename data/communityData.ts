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
    parentId: null,
    userId: "u5",
    text: "Hey! Let me know how I can help you.",
    timestamp: "2025-01-10T10:00:00Z",
    threadCount: 2,
    reactions: [{ userId: "u1", emoji: "👍" }],
    role: "Admin",
    name: "Kathryn Murphy",
    avatar: "",
  },
  {
    id: "m2",
    parentId: "m1",
    userId: "u2",
    text: "Can you help me with the UI?",
    timestamp: "2025-01-10T10:02:00Z",
    threadCount: 0,
    reactions: [],
    role: "student",
    name: "Jenny Wilson",
    avatar: "",
  },
  {
    id: "m3",
    parentId: "m1",
    userId: "u3",
    text: "Same here!",
    timestamp: "2025-01-10T10:05:00Z",
    threadCount: 0,
    reactions: [],
    role: "admin",
    name: "Jenny Wilson",
    avatar: "",
  },
];
