import { FC } from "react";

interface LabelSelectProps {
	label: string;
	name: string;
	options: { value: string; label: string }[];
	value: string;
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const LabelSelect: FC<LabelSelectProps> = ({
	label,
	name,
	options,
	value,
	onChange,
}) => {
	return (
		<div className="field">
			<label htmlFor={name} className="label">
				{label}
			</label>
			<select
				id={name}
				className="input"
				value={value}
				name={name}
				onChange={onChange}
			>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};
