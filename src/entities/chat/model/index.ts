import { create } from "zustand";

interface Message {
	id: string;
	senderId: string;
	content: string;
	timestamp: string;
}

interface Chat {
	id: string;
	participants: string[];
	messages: Message[];
}

interface ChatStore {
	chats: Chat[];
	sendMessage: (chatId: string, message: Message) => void;
	receiveMessage: (chatId: string, message: Message) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
	chats: [],
	sendMessage: (chatId, message) =>
		set((state) => ({
			chats: state.chats.map((chat) =>
				chat.id === chatId
					? { ...chat, messages: [...chat.messages, message] }
					: chat
			),
		})),
	receiveMessage: (chatId, message) =>
		set((state) => ({
			chats: state.chats.map((chat) =>
				chat.id === chatId
					? { ...chat, messages: [...chat.messages, message] }
					: chat
			),
		})),
}));
