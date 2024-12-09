import { FC } from "react";
import { ChatMessage, ChatInput } from "../";

export type Position = "left" | "right";

interface ChatContentProps {
	messages: Array<{ text: string; position: Position }>;
	onSendMessage: (message: string) => void;
}

export const ChatContent: FC<ChatContentProps> = ({
	messages,
	onSendMessage,
}) => {
	return (
		<div className="chat__content">
			{messages.map((msg, index) => (
				<ChatMessage
					key={index}
					message={msg.text}
					position={msg.position}
				/>
			))}
			<ChatInput onSend={onSendMessage} />
		</div>
	);
};
