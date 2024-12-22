import { FC } from "react";

interface CardImageProps {
	src: string;
}

export const CardImage: FC<CardImageProps> = ({ src }) => {
	return <img className="card-fullscreen__img" src={src} alt="Card" />;
};
