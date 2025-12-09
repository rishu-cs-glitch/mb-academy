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

export interface ChatMessage {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  sender: string;
}
