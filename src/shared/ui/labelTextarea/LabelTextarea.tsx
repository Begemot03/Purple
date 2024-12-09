import { FC } from "react";

interface LabelTextareaProps {
	label: string;
	name: string;
	placeholder: string;
}

export const LabelTextarea: FC<LabelTextareaProps> = ({ label, name, placeholder }) => {
	return (
		<div className="field">
			<label htmlFor={name} className="label">
				{label}
			</label>
			<textarea id={name} className="input" value={placeholder} />
		</div>
	);
};
