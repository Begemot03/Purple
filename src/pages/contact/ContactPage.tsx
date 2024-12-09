import { FC } from "react";
import { ChatContent, ChatSidebar } from "./ui";
import { Position } from "./ui/chatContent/ChatContent";
import { useChatStore } from "@/entities/chat";
import { useProfilesStore } from "@/entities/profile";

export const ContactPage: FC = () => {
	const { profiles } = useProfilesStore();
	const {
		activeChatUserId,
		setActiveChatUserId,
		getActiveChatMessages,
		addMessage,
		getSidebarItems,
	} = useChatStore();

	const messages = getActiveChatMessages().map((msg) => ({
		text: msg.content,
		position:
			msg.senderId === "currentUserId" ? "right" : ("left" as Position),
	}));

	const handleSendMessage = (message: string) => {
		if (activeChatUserId && message.trim()) {
			addMessage(activeChatUserId, {
				id: Date.now().toString(),
				senderId: "currentUserId",
				receiverId: activeChatUserId,
				content: message,
				timestamp: new Date(),
			});
		}
	};

	const sidebarItems = getSidebarItems(profiles);

	return (
		<div className="fullscreen auto-center">
			<div className="chat">
				<ChatSidebar
					items={sidebarItems}
					onItemClick={setActiveChatUserId}
				/>
				<div className="divider-vertical"></div>
				{activeChatUserId ? (
					<ChatContent
						messages={messages}
						onSendMessage={handleSendMessage}
					/>
				) : (
					<div className="no-chat-selected chat__content">
						Выберите чат из списка
					</div>
				)}
			</div>
		</div>
	);
};
