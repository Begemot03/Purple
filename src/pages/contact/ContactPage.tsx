import { FC, useState } from "react";
import { ChatContent, ChatSidebar } from "./ui";
import { Position } from "./ui/chatContent/ChatContent";

export const ContactPage: FC = () => {
	const [messages, setMessages] = useState<
		Array<{ text: string; position: Position }>
	>([
		{ text: "Привет, как дела?", position: "left" },
		{ text: "Привет, все нормально, как твои дела?", position: "right" },
	]);

	const handleSendMessage = (message: string) => {
		if (message.trim()) {
			setMessages([...messages, { text: message, position: "right" }]);
		}
	};

	const sidebarItems = [
		{
			avatarSrc:
				"https://masterpiecer-images.s3.yandex.net/95ab6622809811ee8765261105627a54:upscaled",
			title: "Кот, 24 года",
			subtitle: "Был в сети 1 час назад",
		},
		{
			avatarSrc:
				"https://masterpiecer-images.s3.yandex.net/95ab6622809811ee8765261105627a54:upscaled",
			title: "Кот, 24 года",
			subtitle: "Был в сети 1 час назад",
		},
		{
			avatarSrc:
				"https://masterpiecer-images.s3.yandex.net/95ab6622809811ee8765261105627a54:upscaled",
			title: "Кот, 24 года",
			subtitle: "Был в сети 1 час назад",
		},
	];

	return (
		<div className="fullscreen auto-center">
			<div className="chat">
				<ChatSidebar items={sidebarItems} />
				<div className="divider-vertical"></div>
				<ChatContent
					messages={messages}
					onSendMessage={handleSendMessage}
				/>
			</div>
		</div>
	);
};
