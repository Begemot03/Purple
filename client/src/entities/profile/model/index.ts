import { create } from "zustand";

export interface Profile {
	id: string;
	name: string;
	surname: string;
	age: number;
	gender: string;
	interests: string;
	avatar: string;
	liked: boolean;
}

interface ProfilesStore {
	profiles: Profile[];
	setProfiles: (profiles: Profile[]) => void;
	likeProfile: (id: string) => void;
	dislikeProfile: (id: string) => void;
}

const LOCAL_STORAGE_KEY = "profiles";

const fakeProfiles: Profile[] = [
	{
		id: "1",
		name: "Алексей",
		surname: "Петров",
		age: 30,
		gender: "Мужской",
		interests: "Фотография, путешествия",
		avatar: "https://masterpiecer-images.s3.yandex.net/95ab6622809811ee8765261105627a54:upscaled",
		liked: false,
	},
	{
		id: "2",
		name: "Мария",
		surname: "Смирнова",
		age: 28,
		gender: "Женский",
		interests: "Искусство, литература",
		avatar: "https://masterpiecer-images.s3.yandex.net/3696fc0a43f311eea03136f52626dcc9:upscaled",
		liked: false,
	},
];

const loadFromLocalStorage = (): Profile[] => {
	const data = localStorage.getItem(LOCAL_STORAGE_KEY);
	return data ? JSON.parse(data) : fakeProfiles;
};

export const useProfilesStore = create<ProfilesStore>((set) => ({
	profiles: loadFromLocalStorage(),
	setProfiles: (profiles) => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(profiles));
		set(() => ({ profiles }));
	},
	likeProfile: (id) =>
		set((state) => {
			const updatedProfiles = state.profiles.map((profile) =>
				profile.id === id ? { ...profile, liked: true } : profile
			);
			localStorage.setItem(
				LOCAL_STORAGE_KEY,
				JSON.stringify(updatedProfiles)
			);
			return { profiles: updatedProfiles };
		}),
	dislikeProfile: (id) =>
		set((state) => {
			const updatedProfiles = state.profiles.map((profile) =>
				profile.id === id ? { ...profile, liked: false } : profile
			);
			localStorage.setItem(
				LOCAL_STORAGE_KEY,
				JSON.stringify(updatedProfiles)
			);
			return { profiles: updatedProfiles };
		}),
}));
