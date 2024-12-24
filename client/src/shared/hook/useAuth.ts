import { useUserStore } from "@/entities/user";

export const useAuth = () => {
	const user = useUserStore((state) => state.user);
	const token = localStorage.getItem("authToken");
	return !!user && !!token;
};
