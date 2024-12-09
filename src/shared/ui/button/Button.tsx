import { FC } from "react";

interface ButtonProps {
	type: "button" | "submit" | "reset";
	className?: string;
	onClick?: () => void;
	text: string;
}

export const Button: FC<ButtonProps> = ({ type, className, onClick, text }) => {
	return (
		<button type={type} className={`btn btn-transp ${className}`} onClick={onClick}>
			{text}
		</button>
	);
};
