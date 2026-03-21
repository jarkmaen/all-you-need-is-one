import type { AlbumName } from "./constants/albums";

export interface Song {
    album: AlbumName;
    startTime?: number;
    title: string;
    youtubeId: string;
}
