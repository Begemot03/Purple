import { create } from "zustand";

interface User {
	id: string;
	name: string;
	surname: string;
	age: number;
	gender: string;
	avatar: string;
	interests: string;
}

interface UserStore {
	user: User | null;
	setUser: (user: User) => void;
	updateUser: (updatedData: Partial<User>) => void;
}

export const useUserStore = create<UserStore>((set) => ({
	user: null,
	setUser: (user) => set(() => ({ user })),
	updateUser: (updatedData) =>
		set((state) => ({
			user: state.user ? { ...state.user, ...updatedData } : null,
		})),
}));
