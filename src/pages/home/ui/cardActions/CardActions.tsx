import { FC } from "react";

interface CardActionsProps {
	onDislike: () => void;
	onLike: () => void;
}

export const CardActions: FC<CardActionsProps> = ({ onDislike, onLike }) => {
	return (
		<div className="card-fullscreen__action">
			<div className="btn-icon to-scaleup dislike" onClick={onDislike}>
				<i className="bi bi-x-lg"></i>
			</div>
			<div className="btn-icon to-scaleup like" onClick={onLike}>
				<i className="bi bi-heart-fill"></i>
			</div>
		</div>
	);
};
