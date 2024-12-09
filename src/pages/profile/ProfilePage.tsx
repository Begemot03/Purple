import { Button } from "@/shared/ui/button";
import { Form } from "@/shared/ui/form";
import { FormActions } from "@/shared/ui/formActions";
import { LabelInput } from "@/shared/ui/labelInput";
import { LabelSelect } from "@/shared/ui/labelSelect";
import { LabelTextarea } from "@/shared/ui/labelTextarea";
import { FC, useEffect, useState } from "react";
import { useUserStore } from "@/entities/user";

export const ProfilePage: FC = () => {
	const { user, updateUserFromForm } = useUserStore();

	const [formData, setFormData] = useState({
		name: "",
		surname: "",
		age: "",
		gender: "",
		interests: "",
		about: "",
	});

	useEffect(() => {
		setFormData({
			name: user.name,
			surname: user.surname,
			age: user.age.toString(),
			gender: user.gender,
			interests: user.interests,
			about: user.about,
		});
	}, [user]);

	const handleFormSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		updateUserFromForm(new FormData(e.target as HTMLFormElement));
	};

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return (
		<div className="fullscreen auto-center">
			<div className="profile">
				<div className="profile__avatar">
					<div>
						<img
							src={
								user.avatar ||
								"https://placehold.jp/250x400.png"
							}
							alt="Аватар"
							className="profile__avatar-img"
						/>
						<Button
							type="button"
							text="Изменить"
							className="profile__avatar-edit"
						/>
					</div>
				</div>
				<div className="profile__info">
					<Form onSubmit={handleFormSubmit}>
						<LabelInput
							label="Имя"
							name="name"
							value={formData.name}
							onChange={handleInputChange}
						/>
						<LabelInput
							label="Фамилия"
							name="surname"
							value={formData.surname}
							onChange={handleInputChange}
						/>
						<LabelInput
							label="Возраст"
							name="age"
							value={formData.age}
							onChange={handleInputChange}
						/>
						<LabelSelect
							label="Пол"
							name="gender"
							value={formData.gender}
							onChange={handleInputChange}
							options={[
								{ label: "Мужской", value: "male" },
								{ label: "Женский", value: "female" },
							]}
						/>
						<LabelTextarea
							label="О себе"
							name="about"
							value={formData.about}
							onChange={handleInputChange}
						/>
						<LabelInput
							label="Интересы"
							name="interests"
							value={formData.interests}
							onChange={handleInputChange}
						/>
						<FormActions>
							<Button type="submit" text="Сохранить" />
							<Button type="button" text="Отмена" />
						</FormActions>
					</Form>
				</div>
			</div>
		</div>
	);
};
