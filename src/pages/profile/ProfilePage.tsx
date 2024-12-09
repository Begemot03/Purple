import { Button } from "@/shared/ui/button";
import { Form } from "@/shared/ui/form";
import { FormActions } from "@/shared/ui/formActions";
import { LabelInput } from "@/shared/ui/labelInput";
import { LabelSelect } from "@/shared/ui/labelSelect";
import { LabelTextarea } from "@/shared/ui/labelTextarea";
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
						<Button
							type="button"
							text="Изменить"
							className="profile__avatar-edit"
						/>
					</div>
				</div>
				<div className="profile__info">
					<Form>
						<LabelInput
							label="Имя"
							name="name"
							placeholder="Иван"
						/>
						<LabelInput
							label="Фамилия"
							name="surname"
							placeholder="Иванов"
						/>
						<LabelInput
							label="Возраст"
							name="age"
							placeholder="25"
						/>
						<LabelSelect
							label="Пол"
							name="gender"
							options={[
								{ label: "Мужской", value: "male" },
								{ label: "Женский", value: "female" },
							]}
							defaultValue="Мужской"
						/>
						<LabelTextarea
							label="О себе"
							name="about"
							placeholder="Люблю спорт, книги и путешествия."
						></LabelTextarea>
						<LabelInput
							label="Интересы"
							name="interests"
							placeholder="Бег, рыбалка, кулинария"
						/>
						<FormActions>
							<Button type="submit" text="Сохранить" />
							<Button type="button" text="Отмена" />
						</FormActions>
					</Form>
				</div>
			</div>
		</div>
	);
};
