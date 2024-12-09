import { FC } from "react";

interface PersonCardProps {
	avatar: string;
	name: string;
	surname: string;
	age: number;
	gender: string;
	interests: string;
}

export const PersonCard: FC<PersonCardProps> = ({
	avatar,
	name,
	surname,
	age,
	gender,
	interests,
}) => {
	return (
		<div className="people-list__item">
			<div className="people-list__item-img__wrapper">
				<img src={avatar} alt={`Аватар ${name}`} />
				<div className="like-overlay">
					<button className="like-button">
						<i className="bi bi-heart"></i>
					</button>
				</div>
			</div>
			<div className="people-list__info">
				<p>
					<strong>Имя:</strong> {name}
				</p>
				<p>
					<strong>Фамилия:</strong> {surname}
				</p>
				<p>
					<strong>Возраст:</strong> {age}
				</p>
				<p>
					<strong>Пол:</strong> {gender}
				</p>
				<p>
					<strong>Интересы:</strong> {interests}
				</p>
			</div>
		</div>
	);
};
