import { FC } from "react";

interface LabelTextareaProps {
	label: string;
	name: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const LabelTextarea: FC<LabelTextareaProps> = ({
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
			<textarea
				id={name}
				className="input"
				value={value}
				name={name}
				onChange={onChange}
			/>
		</div>
	);
};
