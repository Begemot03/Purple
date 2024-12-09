import { FC } from "react";
import { PersonCard } from "../";

interface Person {
	avatar: string;
	name: string;
	surname: string;
	age: number;
	gender: string;
	interests: string;
}

interface PeopleListProps {
	people: Person[];
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
				/>
			))}
		</div>
	);
};
