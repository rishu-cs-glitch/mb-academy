export interface User {
  id: string;
  name: string;
  avatar: string;
  isOnline: boolean;
}

export interface Channel {
  id: string;
  title: string;
  unread?: number;
}

export interface DirectMessageUser {
  id: string;
  name: string;
  avatar: string;
  isOnline: boolean;
  roomId?: string;
}

export interface Reaction {
  userId: string;
  emoji: string;
}

export interface ChatMessage {
  id: string;
  parentId?: string | null;
  userId: string;
  name: string;
  avatar: string;
  text: string;
  timestamp: string;
  role: string;
  reactions?: Reaction[];
  threadCount?: number;
  lastThreadReplyAt?: string;
}
