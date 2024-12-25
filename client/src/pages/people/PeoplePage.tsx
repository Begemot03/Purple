import { FC, useEffect } from "react";
import { PeopleList } from "./ui";
import { useProfilesStore } from "@/entities/profile";

export const PeoplePage: FC = () => {
	const likedMeProfiles = useProfilesStore((state) => state.likedProfiles);
	const fetchLikedProfiles = useProfilesStore((state) => state.fetchLikedProfiles);

	useEffect(() => {
		fetchLikedProfiles();
	}, [fetchLikedProfiles]);

	console.log(likedMeProfiles)

	return (
		<div className="fullscreen">
			{likedMeProfiles.length > 0 ? (
				<PeopleList people={likedMeProfiles} />
			) : (
				<p>Ещё никто не поставил вам лайк.</p>
			)}
		</div>
	);
};
