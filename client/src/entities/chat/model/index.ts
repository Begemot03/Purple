import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface Message {
	id: string;
	senderId: string;
	receiverId: string;
	content: string;
	timestamp: Date;
}

interface Chat {
	userId: string;
	messages: Message[];
}

interface ChatStore {
	chats: Chat[];
	activeChatUserId: string | null;
	setActiveChatUserId: (userId: string | null) => void;
	getActiveChatMessages: () => Message[];
	addMessage: (userId: string, message: Message) => void;
	getSidebarItems: (
		profiles: Array<{
			id: string;
			avatar: string;
			name: string;
			age: number;
		}>
	) => SidebarItem[];
	addChat: (userId: string) => void;
}

interface SidebarItem {
	avatarSrc: string;
	title: string;
	subtitle: string;
	userId: string;
}

export const useChatStore = create<ChatStore>()(
	devtools((set, get) => ({
		chats: [],
		activeChatUserId: null,

		setActiveChatUserId: (userId) => {
			set({ activeChatUserId: userId });
		},

		getActiveChatMessages: () => {
			const { activeChatUserId, chats } = get();
			if (!activeChatUserId) return [];
			const activeChat = chats.find(
				(chat) => chat.userId === activeChatUserId
			);
			return activeChat ? activeChat.messages : [];
		},

		addMessage: (userId, message) => {
			set((state) => {
				const chatIndex = state.chats.findIndex(
					(chat) => chat.userId === userId
				);
				if (chatIndex === -1) {
					return {
						chats: [
							...state.chats,
							{ userId, messages: [message] },
						],
					};
				}
				const updatedChats = [...state.chats];
				updatedChats[chatIndex].messages.push(message);
				return { chats: updatedChats };
			});
		},

		getSidebarItems: (profiles) => {
			const { chats } = get();
			return chats.map((chat) => {
				const profile = profiles.find((p) => p.id === chat.userId);
				return {
					avatarSrc: profile?.avatar || "",
					title: `${profile?.name}, ${profile?.age}`,
					subtitle: "Был(а) в сети недавно",
					userId: chat.userId,
				};
			});
		},
		addChat: (userId) => {
			set((state) => {
				const existingChat = state.chats.find(
					(c) => c.userId == userId
				);
				if (!existingChat) {
					return {
						chats: [
							...state.chats,
							{
								userId,
								messages: [],
							},
						],
					};
				}
				return state;
			});
		},
	}))
);
