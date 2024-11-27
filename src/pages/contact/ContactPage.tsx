import { FC } from "react";

export const ContactPage: FC = () => {
	return (
		<div className="fullscreen auto-center">
			<div className="chat">
				<div className="chat__sidebar">
					<div className="chat__sidebar-item">
						<img
							className="avatar"
							src="https://masterpiecer-images.s3.yandex.net/95ab6622809811ee8765261105627a54:upscaled"
							alt=""
						/>
						<div className="chat__sidebar-item__content">
							<div className="chat__sidebar-item__title">
								Кот, 24 года
							</div>
							<div className="chat__sidebar-item__subtitle">
								Был в сети 1 час назад
							</div>
						</div>
					</div>
					<div className="chat__sidebar-item">
						<img
							className="avatar"
							src="https://masterpiecer-images.s3.yandex.net/95ab6622809811ee8765261105627a54:upscaled"
							alt=""
						/>
						<div className="chat__sidebar-item__content">
							<div className="chat__sidebar-item__title">
								Кот, 24 года
							</div>
							<div className="chat__sidebar-item__subtitle">
								Был в сети 1 час назад
							</div>
						</div>
					</div>
					<div className="chat__sidebar-item">
						<img
							className="avatar"
							src="https://masterpiecer-images.s3.yandex.net/95ab6622809811ee8765261105627a54:upscaled"
							alt=""
						/>
						<div className="chat__sidebar-item__content">
							<div className="chat__sidebar-item__title">
								Кот, 24 года
							</div>
							<div className="chat__sidebar-item__subtitle">
								Был в сети 1 час назад
							</div>
						</div>
					</div>
				</div>
				<div className="divider-vertical"></div>
				<div className="chat__content">
					<div className="chat__message chat__message-left">
						Привет, как дела?
					</div>
					<div className="chat__message chat__message-right">
						Привет, все нормально, как твои дела?
					</div>
					<div className="chat__input btn-group">
						<input type="text" placeholder="Введите сообщение..." />
						<div className="btn btn-transp">Отправить</div>
					</div>
				</div>
			</div>
		</div>
	);
};
