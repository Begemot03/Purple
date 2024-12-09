import { FC } from "react";
import { ChatSidebarItem } from "../";

interface ChatSidebarProps {
	items: { avatarSrc: string; title: string; subtitle: string }[];
}

export const ChatSidebar: FC<ChatSidebarProps> = ({ items }) => {
	return (
		<div className="chat__sidebar">
			{items.map((item, index) => (
				<ChatSidebarItem
					key={index}
					avatarSrc={item.avatarSrc}
					title={item.title}
					subtitle={item.subtitle}
				/>
			))}
		</div>
	);
};
