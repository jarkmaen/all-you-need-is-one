import type { Song } from "../types";
import { songs } from "../data/songs";

export const getRandomSong = (): Song => {
    const idx = Math.floor(Math.random() * songs.length);
    return songs[idx];
};

export const getRandomStartTime = (duration: number) => {
    const min = 10;
    const max = duration - 10;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
