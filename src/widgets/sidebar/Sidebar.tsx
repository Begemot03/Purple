import { FC } from "react";
import { Link } from "react-router-dom";
import { useHeaderStore } from "../header";

export const Sidebar: FC = () => {
	const isOpen = useHeaderStore((state) => state.isOpen);

	return (
		<nav className={`nav nav-column ${isOpen ? "nav-isopen" : ""}`}>
			<Link to="/profile" className="nav__item">
				<i className="bi bi-arrow-right-short"></i>Профиль
			</Link>
			<Link to="/" className="nav__item">
				<i className="bi bi-arrow-right-short"></i>Знакомства
			</Link>
			<Link to="/contact" className="nav__item">
				<i className="bi bi-arrow-right-short"></i>Сообщения
			</Link>
			<Link to="/people" className="nav__item">
				<i className="bi bi-arrow-right-short"></i>Люди
			</Link>
		</nav>
	);
};
