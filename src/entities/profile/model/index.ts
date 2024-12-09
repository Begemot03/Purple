import { create } from "zustand";

interface Profile {
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

export const useProfilesStore = create<ProfilesStore>((set) => ({
	profiles: [],
	setProfiles: (profiles) => set(() => ({ profiles })),
	likeProfile: (id) =>
		set((state) => ({
			profiles: state.profiles.map((profile) =>
				profile.id === id ? { ...profile, liked: true } : profile
			),
		})),
	dislikeProfile: (id) =>
		set((state) => ({
			profiles: state.profiles.map((profile) =>
				profile.id === id ? { ...profile, liked: false } : profile
			),
		})),
}));
