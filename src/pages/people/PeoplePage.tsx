import { FC } from "react";

export const PeoplePage: FC = () => {
	return (
		<div className="fullscreen">
			<div className="people-list">
				<div className="people-list__item">
					<div className="people-list__item-img__wrapper">
						<img
							src="https://masterpiecer-images.s3.yandex.net/95ab6622809811ee8765261105627a54:upscaled"
							alt="Аватар"
						/>
						<div className="like-overlay">
							<button className="like-button">
								<i className="bi bi-heart"></i>
							</button>
						</div>
					</div>
					<div className="people-list__info">
						<p>
							<strong>Имя:</strong> Алексей
						</p>
						<p>
							<strong>Фамилия:</strong> Петров
						</p>
						<p>
							<strong>Возраст:</strong> 30
						</p>
						<p>
							<strong>Пол:</strong> Мужской
						</p>
						<p>
							<strong>Интересы:</strong> Фотография, путешествия
						</p>
					</div>
				</div>

				<div className="people-list__item">
					<div className="people-list__item-img__wrapper">
						<img
							src="https://masterpiecer-images.s3.yandex.net/3696fc0a43f311eea03136f52626dcc9:upscaled"
							alt="Аватар"
						/>
						<div className="like-overlay">
							<button className="like-button">
								<i className="bi bi-heart"></i>
							</button>
						</div>
					</div>
					<div className="people-list__info">
						<p>
							<strong>Имя:</strong> Мария
						</p>
						<p>
							<strong>Фамилия:</strong> Смирнова
						</p>
						<p>
							<strong>Возраст:</strong> 28
						</p>
						<p>
							<strong>Пол:</strong> Женский
						</p>
						<p>
							<strong>Интересы:</strong> Искусство, литература
						</p>
					</div>
				</div>

				<div className="people-list__item">
					<div className="people-list__item-img__wrapper">
						<img
							src="https://masterpiecer-images.s3.yandex.net/7fdfb9d178f011eebe30222e7fa838a6:upscaled"
							alt="Аватар"
						/>
						<div className="like-overlay">
							<button className="like-button">
								<i className="bi bi-heart"></i>
							</button>
						</div>
					</div>
					<div className="people-list__info">
						<p>
							<strong>Имя:</strong> Олег
						</p>
						<p>
							<strong>Фамилия:</strong> Сидоров
						</p>
						<p>
							<strong>Возраст:</strong> 35
						</p>
						<p>
							<strong>Пол:</strong> Мужской
						</p>
						<p>
							<strong>Интересы:</strong> Компьютерные игры,
							программирование
						</p>
					</div>
				</div>

				<div className="people-list__item">
					<div className="people-list__item-img__wrapper">
						<img
							src="https://masterpiecer-images.s3.yandex.net/5f8eca87ec12432:upscaled"
							alt="Аватар"
						/>
						<div className="like-overlay">
							<button className="like-button">
								<i className="bi bi-heart"></i>
							</button>
						</div>
					</div>
					<div className="people-list__info">
						<p>
							<strong>Имя:</strong> Екатерина
						</p>
						<p>
							<strong>Фамилия:</strong> Николаева
						</p>
						<p>
							<strong>Возраст:</strong> 26
						</p>
						<p>
							<strong>Пол:</strong> Женский
						</p>
						<p>
							<strong>Интересы:</strong> Кулинария, йога
						</p>
					</div>
				</div>

				<div className="people-list__item">
					<div className="people-list__item-img__wrapper">
						<img
							src="https://masterpiecer-images.s3.yandex.net/7fdfb9d178f011eebe30222e7fa838a6:upscaled"
							alt="Аватар"
						/>
						<div className="like-overlay">
							<button className="like-button">
								<i className="bi bi-heart"></i>
							</button>
						</div>
					</div>
					<div className="people-list__info">
						<p>
							<strong>Имя:</strong> Даниил
						</p>
						<p>
							<strong>Фамилия:</strong> Иванов
						</p>
						<p>
							<strong>Возраст:</strong> 24
						</p>
						<p>
							<strong>Пол:</strong> Мужской
						</p>
						<p>
							<strong>Интересы:</strong> Велоспорт, наука
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
