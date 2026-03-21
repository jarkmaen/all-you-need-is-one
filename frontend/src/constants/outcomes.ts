export const OUTCOMES = {
    CORRECT: "correct",
    GIVE_UP: "give_up",
    INCORRECT: "incorrect"
} as const;

export type Outcome = (typeof OUTCOMES)[keyof typeof OUTCOMES];
