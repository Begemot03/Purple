import { FC } from "react";
import { PeopleList } from "./ui";
import { useProfilesStore } from "@/entities/profile";

export const PeoplePage: FC = () => {
	const profiles = useProfilesStore((state) => state.profiles);

	return (
		<div className="fullscreen">
			<PeopleList people={profiles} />
		</div>
	);
};
