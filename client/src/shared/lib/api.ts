type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";


export const api = async <T>(
	endpoint: string,
	method: HttpMethod = "GET",
	body: Record<string, unknown> | null = null
): Promise<T> => {
	const baseUrl = "http://localhost:8000/api/v1";

	// Получаем токен из localStorage
	const token = localStorage.getItem("authToken");

	const options: RequestInit = {
		method,
		headers: {
			"Content-Type": "application/json",
			...(token && { Authorization: `Bearer ${token}` }), // Добавляем токен, если он есть
		},
	};

	if (body) {
		options.body = JSON.stringify(body);
	}

	try {
		const response = await fetch(`${baseUrl}/${endpoint}`, options);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const json = await response.json();
		return json as T;
	} catch (error) {
		console.error("API call error:", error);
		throw error;
	}
};
