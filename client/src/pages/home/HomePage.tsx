import { FC, useEffect } from "react";
import { Card } from "./ui";
import { useProfilesStore } from "@/entities/profile";
import { useChatStore } from "@/entities/chat";

export const HomePage: FC = () => {
	const profiles = useProfilesStore((state) => state.profiles);
	const fetchRecommendations = useProfilesStore(
		(state) => state.fetchRecommendations
	);
	const likeProfile = useProfilesStore((state) => state.likeProfile);
	const dislikeProfile = useProfilesStore((state) => state.dislikeProfile);
	const addChat = useChatStore((state) => state.addChat);

	useEffect(() => {
		fetchRecommendations();
	}, [fetchRecommendations]);

	if (profiles.length === 0) {
		return (
			<div className="fullscreen auto-center">
				<p style={ {"color": "#fff"} } >Нет рекоммендаций</p>
			</div>
		);
	}

	const currentProfile = profiles[0];

	const handleLike = () => {
		addChat(currentProfile.id);
		likeProfile();
	};

	const handleDislike = () => {
		dislikeProfile();
	};

	return (
		<Card
			imageSrc={currentProfile.avatar}
			title={`${currentProfile.name}, ${currentProfile.age} лет`}
			subtitle={currentProfile.interests}
			onLike={handleLike}
			onDislike={handleDislike}
		/>
	);
};
