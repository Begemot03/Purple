import { FC } from "react";

interface LabelInputProps {
	label: string;
	name: string;
    placeholder: string;
}

export const LabelInput: FC<LabelInputProps> = ({ label, name, placeholder }) => {
	return (
		<div className="field">
			<label htmlFor={name} className="label">
				{ label }
			</label>
			<input
				type="text"
				id={name}
				className="input"
				value={placeholder}
			/>
		</div>
	);
};
