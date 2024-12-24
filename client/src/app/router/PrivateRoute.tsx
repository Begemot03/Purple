import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/shared/hook/useAuth";

export const PrivateRoute: FC = () => {
	const isAuthenticated = useAuth();

	return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
