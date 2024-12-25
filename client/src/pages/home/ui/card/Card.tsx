import { FC } from "react";
import { CardImage, CardDescription, CardActions } from "../";

interface CardProps {
	imageSrc: string;
	title: string;
	subtitle: string;
	onDislike: () => void;
	onLike: () => void;
}

export const Card: FC<CardProps> = ({
	imageSrc,
	title,
	subtitle,
	onDislike,
	onLike,
}) => {
	return (
		<div className="card-fullscreen mouse-pressed__effect">
			<div className="card-fullscreen__wrapper">
				<CardImage src={imageSrc == "" ? "https://placehold.jp/250x400.png" : imageSrc} />
				<div className="card-fullscreen__content">
					<CardDescription title={title} subtitle={subtitle} />
					<CardActions onDislike={onDislike} onLike={onLike} />
				</div>
			</div>
		</div>
	);
};
