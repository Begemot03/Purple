import { FC, useState } from "react";
import { Card } from "./ui";
import { useProfilesStore } from "@/entities/profile";
import { useChatStore } from "@/entities/chat";

export const HomePage: FC = () => {
	const profiles = useProfilesStore((state) => state.profiles);
	const addChat = useChatStore((state) => state.addChat);
	const [currentProfile, setCurrentProfile] = useState<number>(0);

	const nextProfile = () => {
		setCurrentProfile((prev) => (prev + 1) % profiles.length);
	};

	const handleDislike = () => {
		nextProfile();
	};

	const handleLike = () => {
		const likedProfile = profiles[currentProfile];
		addChat(likedProfile.id);
		nextProfile();
	};

	const { avatar, name, age, interests } = profiles[currentProfile];
	const title = `${name}, ${age} лет`;

	return (
		<Card
			imageSrc={avatar}
			title={title}
			subtitle={interests}
			onDislike={handleDislike}
			onLike={handleLike}
		/>
	);
};
