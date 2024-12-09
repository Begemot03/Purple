import { FC } from "react";

interface LabelInputProps {
	label: string;
	name: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LabelInput: FC<LabelInputProps> = ({
	label,
	name,
	value,
	onChange,
}) => {
	return (
		<div className="field">
			<label htmlFor={name} className="label">
				{label}
			</label>
			<input
				type="text"
				id={name}
				name={name}
				className="input"
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};
