import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "@/shared/lib/api";

export const RegisterPage = () => {
	const [formData, setFormData] = useState({
		name: "",
		surname: "",
		email: "",
		password: "",
		age: 0,
		gender: "male",
		interests: "",
		about: "",
	});
	const navigate = useNavigate();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
		<form onSubmit={handleRegister}>
			<h1>Register</h1>
			<label>Name:</label>
			<input name="name" value={formData.name} onChange={handleChange} />
			<label>Surname:</label>
			<input
				name="surname"
				value={formData.surname}
				onChange={handleChange}
			/>
			<label>Email:</label>
			<input
				name="email"
				type="email"
				value={formData.email}
				onChange={handleChange}
			/>
			<label>Password:</label>
			<input
				name="password"
				type="password"
				value={formData.password}
				onChange={handleChange}
			/>
			<label>Age:</label>
			<input
				name="age"
				type="number"
				value={formData.age}
				onChange={handleChange}
			/>
			<label>Gender:</label>
			<select
				name="gender"
				value={formData.gender}
				onChange={(e) =>
					setFormData((prev) => ({
						...prev,
						gender: e.target.value,
					}))
				}
			>
				<option value="male">Male</option>
				<option value="female">Female</option>
				<option value="other">Other</option>
			</select>
			<label>Interests:</label>
			<input
				name="interests"
				value={formData.interests}
				onChange={handleChange}
			/>
			<label>About:</label>
			<textarea
				name="about"
				value={formData.about}
				onChange={(e) =>
					setFormData((prev) => ({
						...prev,
						about: e.target.value,
					}))
				}
			/>
			<button type="submit">Register</button>
		</form>
	);
};
