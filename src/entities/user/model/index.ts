import { create } from "zustand";

interface User {
	id: string;
	name: string;
	surname: string;
	age: number;
	gender: string;
	avatar: string;
	interests: string;
	about: string;
}

interface UserStore {
	user: User;
	setUser: (user: User) => void;
	updateUser: (updatedData: User) => void;
	updateUserFromForm: (formData: FormData) => void;
	initializeUser: () => void;
}

const defaultUser: User = {
	id: "default-id",
	name: "Иван",
	surname: "Иванов",
	age: 25,
	gender: "male",
	avatar: "https://placehold.jp/250x400.png",
	interests: "Бег, рыбалка, кулинария",
	about: "Люблю спорт, книги и путешествия.",
};

export const useUserStore = create<UserStore>((set) => ({
	user: defaultUser,
	setUser: (user) => set(() => ({ user })),
	updateUser: (updatedData) =>
		set((state) => ({
			user: { ...updatedData },
		})),
	updateUserFromForm: (formData: FormData) => {
		const updatedData = {
			name: formData.get("name") as string,
			surname: formData.get("surname") as string,
			age: parseInt(formData.get("age") as string, 10),
			gender: formData.get("gender") as string,
			interests: formData.get("interests") as string,
			about: formData.get("about") as string,
		};
		set((state) => ({
			user: { ...state.user, ...updatedData },
		}));
	},
	initializeUser: () => set(() => ({ user: defaultUser })),
}));
