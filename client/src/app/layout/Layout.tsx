import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";
import { FC } from "react";
import { Outlet } from "react-router-dom";

export const Layout: FC = () => {
	return (
		<>
        <div className="layout">
            <div className="layout__header">
                <Header />
            </div>
        <div className="layout__sidebar">
            <Sidebar />
        </div>
        <div className="layout__content">
            <Outlet />
            
        </div>
    </div>
		</>
	);
};
