import { FC, useState } from "react";
import { Card } from "./ui";

export const HomePage: FC = () => {
	const profiles = [
		{
			imageSrc:
				"https://masterpiecer-images.s3.yandex.net/5f8eca87ec12432:upscaled",
			title: "Кот, 24 года",
			subtitle: "Из Казани, 500м от вас",
		},
		{
			imageSrc:
				"https://masterpiecer-images.s3.yandex.net/5f8eca87ec12432:upscaled",
			title: "Кошка, 22 года",
			subtitle: "Из Москвы, 1км от вас",
		},
	];

	const [currentProfile, setCurrentProfile] = useState<number>(0);

	const nextProfile = () => {
		setCurrentProfile((prev) => (prev + 1) % profiles.length);
	};

	const handleDislike = () => {
		nextProfile();
	};

	const handleLike = () => {
		nextProfile();
	};

	return (
		<Card
			{...profiles[currentProfile]}
			onDislike={handleDislike}
			onLike={handleLike}
		/>
	);
};
