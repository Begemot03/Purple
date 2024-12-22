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

export const AppRouter: FC = () => {
	const routers = createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<HomePage />}></Route>
			<Route path="contact" element={<ContactPage />}></Route>
			<Route path="people" element={<PeoplePage />}></Route>
			<Route path="profile" element={<ProfilePage />}></Route>
			<Route path="*" element={<NotFoundPage />}></Route>
		</Route>
	);

	const router = createBrowserRouter(routers);

	return <RouterProvider router={router}></RouterProvider>;
};
