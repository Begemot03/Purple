import { FC } from "react";

export const NotFoundPage: FC = () => {
	return (
		<div className="fullscreen auto-center">
			<div className="not-found">
				<h1 className="not-found__title">404</h1>
				<p className="not-found__subtitle">Страница не найдена</p>
				<a href="/" className="btn btn-transp not-found__btn">
					На главную
				</a>
			</div>
		</div>
	);
};
