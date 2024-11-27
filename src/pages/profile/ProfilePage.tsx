import { FC } from "react";

export const ProfilePage: FC = () => {
	return (
		<div className="fullscreen auto-center">
			<div className="profile">
				<div className="profile__avatar">
					<div>
						<img
							src="https://placehold.jp/250x400.png"
							alt="Аватар"
							className="profile__avatar-img"
						/>
						<button className="btn btn-transp profile__avatar-edit">
							Изменить
						</button>
					</div>
				</div>
				<div className="profile__info">
					<form action="#" className="profile__form">
						<div className="profile__field">
							<label htmlFor="name" className="profile__label">
								Имя
							</label>
							<input
								type="text"
								id="name"
								className="profile__input"
								value="Иван"
							/>
						</div>
						<div className="profile__field">
							<label htmlFor="surname" className="profile__label">
								Фамилия
							</label>
							<input
								type="text"
								id="surname"
								className="profile__input"
								value="Иванов"
							/>
						</div>
						<div className="profile__field">
							<label htmlFor="age" className="profile__label">
								Возраст
							</label>
							<input
								type="number"
								id="age"
								className="profile__input"
								value="25"
							/>
						</div>
						<div className="profile__field">
							<label htmlFor="gender" className="profile__label">
								Пол
							</label>
							<select id="gender" className="profile__input">
								<option value="male" selected>
									Мужской
								</option>
								<option value="female">Женский</option>
							</select>
						</div>
						<div className="profile__field">
							<label htmlFor="about" className="profile__label">
								О себе
							</label>
							<textarea
								id="about"
								className="profile__input"
								rows={4}
							>
								Люблю спорт, книги и путешествия.
							</textarea>
						</div>
						<div className="profile__field">
							<label
								htmlFor="interests"
								className="profile__label"
							>
								Интересы
							</label>
							<input
								type="text"
								id="interests"
								className="profile__input"
								value="Бег, рыбалка, кулинария"
							/>
						</div>
						<div className="profile__actions">
							<button
								type="submit"
								className="btn btn-transp profile__save"
							>
								Сохранить
							</button>
							<button
								type="button"
								className="btn btn-transp profile__cancel"
							>
								Отмена
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
