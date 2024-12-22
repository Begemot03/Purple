import { FC } from "react";
import { useHeaderStore } from "../model/headerStore";

export const Header: FC = () => {
	const toggle = useHeaderStore((state) => state.toggle);

	return (
		<div onClick={toggle} className="btn-icon to-fill nav__toggler">
			<i className="bi bi-list nav__toggler-open"></i>
			<i className="bi bi-x-lg nav__toggler-close"></i>
		</div>
	);
};
