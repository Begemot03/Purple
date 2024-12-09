import { FC } from "react";

interface ChatMessageProps {
	message: string;
	position: "left" | "right";
}

export const ChatMessage: FC<ChatMessageProps> = ({ message, position }) => {
	return (
		<div className={`chat__message chat__message-${position}`}>
			{message}
		</div>
	);
};
