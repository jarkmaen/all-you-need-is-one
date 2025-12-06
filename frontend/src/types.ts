export const GameState = {
    ANSWERING: "answering",
    RESULT: "result"
} as const;

export interface Song {
    album: string;
    title: string;
    youtubeId: string;
}

export type GameState = (typeof GameState)[keyof typeof GameState];
