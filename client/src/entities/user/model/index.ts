import { create } from "zustand";

interface User {
	id: string;
	name: string;
	surname: string;
	email: string;
	age: number;
	gender: string;
	avatar: string;
	interests: string;
	about: string;
}

interface UserStore {
	user: User | null;
	isAuthenticated: boolean;
	setUser: (user: User) => void;
	logout: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
	user: null,
	token: null,
	isAuthenticated: false,
	setUser: (user) =>
		set(() => ({ user, isAuthenticated: true })),
	logout: () =>
		set(() => ({
			user: null,
			isAuthenticated: false,
		})),
}));
