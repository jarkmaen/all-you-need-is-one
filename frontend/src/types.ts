export const GameState = {
    ANSWERING: "answering",
    RESULT: "result"
} as const;

export const Outcome = {
    CORRECT: "correct",
    GIVE_UP: "give_up",
    INCORRECT: "incorrect"
} as const;

export interface Song {
    album: string;
    startTime?: number;
    title: string;
    youtubeId: string;
}

export type GameState = (typeof GameState)[keyof typeof GameState];

export type Outcome = (typeof Outcome)[keyof typeof Outcome];
