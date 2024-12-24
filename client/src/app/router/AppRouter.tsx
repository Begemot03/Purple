import { FC } from "react";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import { Layout } from "../layout";
import { HomePage } from "@/pages/home";
import { ContactPage } from "@/pages/contact";
import { PeoplePage } from "@/pages/people";
import { ProfilePage } from "@/pages/profile";
import { NotFoundPage } from "@/pages/notFound";
import { LoginPage } from "@/pages/login";
import { RegisterPage } from "@/pages/register";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter: FC = () => {
	const routers = createRoutesFromElements(
		<>
			<Route path="/login" element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route path="/" element={<Layout />}>
				<Route element={<PrivateRoute />}>
					<Route index element={<HomePage />} />
					<Route path="contact" element={<ContactPage />} />
					<Route path="people" element={<PeoplePage />} />
					<Route path="profile" element={<ProfilePage />} />
				</Route>
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</>
	);

	const router = createBrowserRouter(routers);

	return <RouterProvider router={router}></RouterProvider>;
};
