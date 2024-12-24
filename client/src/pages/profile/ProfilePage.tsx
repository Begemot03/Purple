import { Button } from "@/shared/ui/button";
import { Form } from "@/shared/ui/form";
import { FormActions } from "@/shared/ui/formActions";
import { LabelInput } from "@/shared/ui/labelInput";
import { LabelSelect } from "@/shared/ui/labelSelect";
import { LabelTextarea } from "@/shared/ui/labelTextarea";
import { FC, useEffect, useState } from "react";
import { useUserStore } from "@/entities/user";
import { api } from "@/shared/lib/api";

const getUser = async () => {
	return await api<{ user: any }>("user", "GET");
};

const updateUser = async (updatedData: Record<string, any>) => {
	return await api("user", "PUT", updatedData);
};

export const ProfilePage: FC = () => {
	const { user, setUser } = useUserStore();
	const [formData, setFormData] = useState({
		name: "",
		surname: "",
		age: "",
		gender: "",
		interests: "",
		about: "",
	});
	const [isUploadingAvatar, setIsUploadingAvatar] = useState(false);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await getUser();
				setUser(response.user);
				setFormData({
					name: response.user.name,
					surname: response.user.surname,
					age: response.user.age.toString(),
					gender: response.user.gender,
					interests: response.user.interests,
					about: response.user.about,
				});
			} catch (error) {
				console.error("Error fetching user:", error);
			}
		};

		fetchUser();
	}, [setUser]);

	const handleFormSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const formData = new FormData(e.target as HTMLFormElement);
		let object: any = {};
		formData.forEach((value: any, key: string) => (object[key] = value));

		try {
			const response = await api<{ user: any }>("user", "PUT", object);
			setUser(response.user);
			alert("Profile updated successfully!");
		} catch (error) {
			console.error("Error updating profile:", error);
			alert("Failed to update profile.");
		}
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
								user?.avatar ||
								"https://placehold.jp/250x400.png"
							}
							alt="Аватар"
							className="profile__avatar-img"
						/>
						<label className="profile__avatar-edit">
							<Button
								type="button"
								text={
									isUploadingAvatar
										? "Загрузка..."
										: "Изменить"
								}
							/>
							<input
								type="file"
								accept="image/*"
								onChange={handleFormSubmit}
								style={{ display: "none" }}
							/>
						</label>
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
