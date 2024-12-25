import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { api } from "@/shared/lib/api";
import { useUserStore } from "@/entities/user";
import { LabelInput } from "@/shared/ui/labelInput";
import { FormActions } from "@/shared/ui/formActions";
import { Button } from "@/shared/ui/button";

export const LoginPage = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const setUser = useUserStore((state) => state.setUser);
	const navigate = useNavigate();

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const response = await api<{ user: any; token: string }>("login", "POST", formData);
			localStorage.setItem("authToken", response.token);

			setUser(response.user);
			navigate("/");
		} catch (error) {
			console.error("Error during login:", error);
		}
	};

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return (
		<div className="fullscreen auto-center">
			<div className="form-container">
				<Form onSubmit={handleLogin}>
					<h1>Вход</h1>
					<LabelInput
						label="Email"
						name="email"
						value={formData.email}
						onChange={handleInputChange}
					/>
					<LabelInput
						label="Пароль"
						name="password"
						value={formData.password}
						onChange={handleInputChange}
					/>
					<FormActions>
						<Button type="submit" text="Войти" />
						<Button type="button" text="Отмена" />
					</FormActions>
				</Form>
			</div>
		</div>
	);
};
