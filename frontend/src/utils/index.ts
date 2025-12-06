import type { Song } from "../types";
import { songs } from "../data/songs";

export const getRandomSong = (): Song => {
    const idx = Math.floor(Math.random() * songs.length);
    return songs[idx];
};
