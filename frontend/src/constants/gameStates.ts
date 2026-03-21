export const GAME_STATES = {
    ANSWERING: "answering",
    RESULT: "result"
} as const;

export type GameState = (typeof GAME_STATES)[keyof typeof GAME_STATES];
