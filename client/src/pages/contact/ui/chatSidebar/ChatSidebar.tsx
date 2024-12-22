import { FC } from "react";
import { ChatSidebarItem } from "../";

interface ChatSidebarProps {
	items: {
		userId: string;
		avatarSrc: string;
		title: string;
		subtitle: string;
	}[];
	onItemClick: (userId: string) => void;
}

export const ChatSidebar: FC<ChatSidebarProps> = ({ items, onItemClick }) => {
	return (
		<div className="chat__sidebar">
			{items.map((item, index) => (
				<ChatSidebarItem
					key={index}
					avatarSrc={item.avatarSrc}
					title={item.title}
					subtitle={item.subtitle}
					onClick={() => onItemClick(item.userId)}
				/>
			))}
		</div>
	);
};
