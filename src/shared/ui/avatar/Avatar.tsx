import { FC } from "react";

interface AvatarProps {
	src: string;
	alt?: string;
}

export const Avatar: FC<AvatarProps> = ({ src, alt = "" }) => {
	return <img className="avatar" src={src} alt={alt} />;
};
