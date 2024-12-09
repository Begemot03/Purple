import { FC } from "react";
import { PeopleList } from "./ui";

const peopleData = [
	{
		avatar: "https://masterpiecer-images.s3.yandex.net/95ab6622809811ee8765261105627a54:upscaled",
		name: "Алексей",
		surname: "Петров",
		age: 30,
		gender: "Мужской",
		interests: "Фотография, путешествия",
	},
	{
		avatar: "https://masterpiecer-images.s3.yandex.net/3696fc0a43f311eea03136f52626dcc9:upscaled",
		name: "Мария",
		surname: "Смирнова",
		age: 28,
		gender: "Женский",
		interests: "Искусство, литература",
	},
	{
		avatar: "https://masterpiecer-images.s3.yandex.net/7fdfb9d178f011eebe30222e7fa838a6:upscaled",
		name: "Олег",
		surname: "Сидоров",
		age: 35,
		gender: "Мужской",
		interests: "Компьютерные игры, программирование",
	},
	{
		avatar: "https://masterpiecer-images.s3.yandex.net/5f8eca87ec12432:upscaled",
		name: "Екатерина",
		surname: "Николаева",
		age: 26,
		gender: "Женский",
		interests: "Кулинария, йога",
	},
	{
		avatar: "https://masterpiecer-images.s3.yandex.net/7fdfb9d178f011eebe30222e7fa838a6:upscaled",
		name: "Даниил",
		surname: "Иванов",
		age: 24,
		gender: "Мужской",
		interests: "Велоспорт, наука",
	},
];

export const PeoplePage: FC = () => {
	return (
		<div className="fullscreen">
			<PeopleList people={peopleData} />
		</div>
	);
};
