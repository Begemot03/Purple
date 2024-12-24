import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "@/shared/lib/api";
import { useUserStore } from "@/entities/user";

export const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const setUser = useUserStore((state) => state.setUser);
	const navigate = useNavigate();

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const response = await api<{ user: any; token: string }>(
				"login",
				"POST",
				{ email, password }
			);

			console.log(response);

			localStorage.setItem("authToken", response.token);

			setUser(response.user);

			navigate("/");
		} catch (error) {
			console.error("Login error:", error);
		}
	};

	return (
		<form onSubmit={handleLogin}>
			<h1>Login</h1>
			<label>Email:</label>
			<input
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<label>Password:</label>
			<input
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button type="submit">Login</button>
		</form>
	);
};
