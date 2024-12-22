import { FC, ReactNode } from "react";

interface FormProps {
	children: ReactNode;
	onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const Form: FC<FormProps> = ({ children, onSubmit }) => {
	return (
		<form className={"form"} onSubmit={onSubmit}>
			{children}
		</form>
	);
};
