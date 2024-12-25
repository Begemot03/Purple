import { api } from "@/shared/lib/api";
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
	likedProfiles: Profile[];
	offset: number;
	fetchRecommendations: () => Promise<void>;
	likeProfile: () => Promise<void>;
	dislikeProfile: () => void;
	fetchLikedProfiles: () => Promise<void>;
}

export const useProfilesStore = create<ProfilesStore>((set, get) => ({
	profiles: [],
	likedProfiles: [],
	offset: 0,

	// Загрузка рекомендаций
	fetchRecommendations: async () => {
		const { offset, profiles } = get();

		if (profiles.length > 0) return;

		try {
			const response = await api<{ data: Profile[] }>(
				`recommend?offset=${offset}&limit=10`,
				"GET"
			);

			const newProfiles: Profile[] = response.data.map((user: any) => ({
				id: user.id,
				name: user.name,
				surname: user.surname,
				age: user.age,
				gender: user.gender,
				interests: user.interests,
				avatar: user.avatar || "",
				liked: false,
			}));

			set((state) => ({
				profiles: [...state.profiles, ...newProfiles],
				offset: state.offset + 10,
			}));
		} catch (error) {
			console.error("Ошибка получения рекомендаций:", error);
		}
	},

	// Лайк профиля
	likeProfile: async () => {
		const { profiles, fetchRecommendations } = get();

		if (profiles.length === 0) return;

		const likedProfile = profiles[0];
		try {
			// Отправляем лайк на сервер
			await api("likes", "POST", { liked_user_id: likedProfile.id });
		} catch (error) {
			console.error("Ошибка при отправке лайка:", error);
		}

		// Удаляем текущий профиль из списка и отмечаем как лайкнутый
		set((state) => {
			const updatedProfiles = [...state.profiles];
			updatedProfiles.shift();

			return {
				profiles: updatedProfiles,
			};
		});

		// Если профилей осталось мало, подгружаем новые
		if (profiles.length < 5) {
			await fetchRecommendations();
		}
	},

	// Дизлайк профиля
	dislikeProfile: () => {
		set((state) => {
			if (state.profiles.length === 0) return state;

			const updatedProfiles = [...state.profiles];
			updatedProfiles.shift();

			return { profiles: updatedProfiles };
		});

		if (get().profiles.length < 5) {
			get().fetchRecommendations();
		}
	},

	fetchLikedProfiles: async () => {
		try {
			const response = await api<{ likedMeUsers: Profile[] }>(
				"likes",
				"GET"
			);
			console.log(response.likedMeUsers)
			set(() => ({
				likedProfiles: [...response.likedMeUsers],
			}));
		} catch (error) {
			console.error("Ошибка получения лайкнутых профилей:", error);
		}
	},
}));
