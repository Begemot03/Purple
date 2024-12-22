import { create } from "zustand";

interface HeaderStore {
	isOpen: boolean;
	toggle: () => void;
}

export const useHeaderStore = create<HeaderStore>()((set) => ({
	isOpen: false,
	toggle: () => {
		set((state) => ({ isOpen: !state.isOpen }));
	},
}));
