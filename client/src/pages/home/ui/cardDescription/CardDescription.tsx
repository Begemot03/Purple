import { FC } from "react";

interface CardDescriptionProps {
	title: string;
	subtitle: string;
}

export const CardDescription: FC<CardDescriptionProps> = ({
	title,
	subtitle,
}) => {
	return (
		<div className="card-fullscreen__desctiption">
			<div className="card-fullscreen__title">{title}</div>
			<div className="card-fullscreen__subtitle">{subtitle}</div>
		</div>
	);
};
