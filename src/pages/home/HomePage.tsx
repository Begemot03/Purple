import { FC } from "react";

export const HomePage: FC = () => {
	return (
		<div className="card-fullscreen mouse-pressed__effect">
			<div className="card-fullscreen__wrapper">
				<img
					className="card-fullscreen__img"
					src="https://masterpiecer-images.s3.yandex.net/5f8eca87ec12432:upscaled"
				/>
				<div className="card-fullscreen__content">
					<div className="card-fullscreen__desctiption">
						<div className="card-fullscreen__title">
							Кот, 24 года
						</div>
						<div className="card-fullscreen__subtitle">
							Из Казани, 500м от вас
						</div>
					</div>
					<div className="card-fullscreen__action">
						<div className="btn-icon to-scaleup dislike">
							<i className="bi bi-x-lg"></i>
						</div>
						<div className="btn-icon to-scaleup like">
							<i className="bi bi-heart-fill"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
