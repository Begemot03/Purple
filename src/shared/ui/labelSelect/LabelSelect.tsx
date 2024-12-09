import { FC } from "react";

interface LabelSelectProps {
	label: string;
	name: string;
	options: { value: string; label: string }[];
	defaultValue?: string;
}

export const LabelSelect: FC<LabelSelectProps> = ({
	label,
	name,
	options,
	defaultValue,
}) => {
	return (
		<div className="field">
			<label htmlFor={name} className="label">
				{label}
			</label>
			<select id={name} className="input" defaultValue={defaultValue}>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};
