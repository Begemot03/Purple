import { FC, createRef } from "react";

interface ChatInputProps {
	onSend: (message: string) => void;
}

export const ChatInput: FC<ChatInputProps> = ({ onSend }) => {
	let inputRef = createRef<HTMLInputElement>();

	const handleSend = () => {
		if (inputRef.current) {
			onSend(inputRef.current.value);
			inputRef.current.value = "";
		}
	};

	return (
		<div className="chat__input btn-group">
			<input
				ref={inputRef}
				type="text"
				placeholder="Введите сообщение..."
			/>
			<div className="btn btn-transp" onClick={handleSend}>
				Отправить
			</div>
		</div>
	);
};
