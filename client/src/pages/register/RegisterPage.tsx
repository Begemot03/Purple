import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { api } from "@/shared/lib/api";
import { LabelInput } from "@/shared/ui/labelInput";
import { LabelSelect } from "@/shared/ui/labelSelect";
import { LabelTextarea } from "@/shared/ui/labelTextarea";
import { FormActions } from "@/shared/ui/formActions";
import { Button } from "@/shared/ui/button";

export const RegisterPage = () => {
	const [formData, setFormData] = useState({
		name: "",
		surname: "",
		email: "",
		password: "",
		avatar: "",
		age: 0,
		gender: "male",
		interests: "",
		about: "",
	});
	const navigate = useNavigate();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleRegister = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await api("register", "POST", formData);
			navigate("/login");
		} catch (error) {
			console.error("Register error:", error);
		}
	};

	return (
		<div className="fullscreen auto-center">
			<div className="form-container">
				<Form onSubmit={handleRegister}>
					<h1>Регистрация</h1>
					<LabelInput
						label="Имя"
						name="name"
						value={formData.name}
						onChange={handleChange}
					/>
					<LabelInput
						label="Фамилия"
						name="surname"
						value={formData.surname}
						onChange={handleChange}
					/>
					<LabelInput
						label="Email"
						name="email"
						value={formData.email}
						onChange={handleChange}
					/>
					<LabelInput
						label="Пароль"
						name="password"
						value={formData.password}
						onChange={handleChange}
					/>
					<LabelInput
						label="Возраст"
						name="age"
						value={formData.age.toString()}
						onChange={handleChange}
					/>
					<LabelSelect
						label="Пол"
						name="gender"
						value={formData.gender}
						onChange={handleChange}
						options={[
							{ label: "Мужской", value: "male" },
							{ label: "Женский", value: "female" },
							{ label: "Другой", value: "other" },
						]}
					/>
					<LabelInput
						label="Интересы"
						name="interests"
						value={formData.interests}
						onChange={handleChange}
					/>
					<LabelTextarea
						label="О себе"
						name="about"
						value={formData.about}
						onChange={handleChange}
					/>
					<FormActions>
						<Button type="submit" text="Зарегистрироваться" />
						<Button type="button" text="Отмена" />
					</FormActions>
				</Form>
			</div>
		</div>
	);
};
