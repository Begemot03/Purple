import { FC, ReactNode } from "react";

interface FormActionsProps {
	children: ReactNode;
}

export const FormActions: FC<FormActionsProps> = ({ children }) => {
	return <div className="form__actions">{children}</div>;
};
