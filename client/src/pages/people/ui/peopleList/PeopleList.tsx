import { FC } from "react";
import { PersonCard } from "../";
import { Profile } from "@/entities/profile/model";

interface PeopleListProps {
	people: Profile[];
}

export const PeopleList: FC<PeopleListProps> = ({ people }) => {
	return (
		<div className="people-list">
			{people.map((person, index) => (
				<PersonCard
					key={index}
					avatar={person.avatar}
					name={person.name}
					surname={person.surname}
					age={person.age}
					gender={person.gender}
					interests={person.interests}
					id={person.id}
				/>
			))}
		</div>
	);
};
