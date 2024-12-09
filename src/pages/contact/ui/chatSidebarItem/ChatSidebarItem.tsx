import { Avatar } from "@/shared/ui/avatar";
import { FC } from "react";

interface ChatSidebarItemProps {
	avatarSrc: string;
	title: string;
	subtitle: string;
}

export const ChatSidebarItem: FC<ChatSidebarItemProps> = ({
	avatarSrc,
	title,
	subtitle,
}) => {
	return (
		<div className="chat__sidebar-item">
			<Avatar src={avatarSrc} />
			<div className="chat__sidebar-item__content">
				<div className="chat__sidebar-item__title">{title}</div>
				<div className="chat__sidebar-item__subtitle">{subtitle}</div>
			</div>
		</div>
	);
};
