import type { Song } from "../types";
import { ALBUM_COVER_MAP } from "../constants/albums";
import { CheckCircle, SkipForward, XCircle } from "lucide-react";
import { OUTCOMES, type Outcome } from "../constants/outcomes";
import { useState } from "react";

type Props = {
    currentSong: Song;
    handleNext: () => void;
    outcome: Outcome;
};

const ResultView = ({ currentSong, handleNext, outcome }: Props) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const isCorrect = outcome === OUTCOMES.CORRECT;

    const getMessage = () => {
        if (outcome === OUTCOMES.GIVE_UP) {
            return "The answer is:";
        } else if (isCorrect) {
            return "Correct! The answer is:";
        } else {
            return "Incorrect. The answer is:";
        }
    };

    return (
        <>
            <div
                className={`border-4 ${
                    isCorrect ? "border-green-500" : "border-red-500"
                } overflow-hidden rounded-xl`}
            >
                <div
                    className={`${
                        isCorrect ? "bg-green-600" : "bg-red-600"
                    } flex font-bold items-center justify-center p-4 space-x-3 text-white text-xl`}
                >
                    {isCorrect ? (
                        <CheckCircle size={28} />
                    ) : (
                        <XCircle size={28} />
                    )}
                    <span>{getMessage()}</span>
                </div>
                <div className="flex flex-col items-center justify-start lg:flex-row lg:space-x-6 lg:space-y-0 lg:text-left p-6 space-y-5 text-center">
                    <div
                        className={`${!isLoaded ? "animate-pulse" : ""} bg-gray-200 h-28 overflow-hidden rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.3)] shrink-0 w-28`}
                    >
                        <img
                            alt={currentSong.album}
                            className={`
                    h-full object-cover ${isLoaded ? "opacity-100" : "opacity-0"} w-full
                `}
                            onLoad={() => setIsLoaded(true)}
                            src={ALBUM_COVER_MAP[currentSong.album]}
                        />
                    </div>
                    <div>
                        <h1 className="font-semibold text-2xl text-gray-900">
                            {currentSong.title}
                        </h1>
                        <p className="text-gray-500 text-sm">
                            {currentSong.album}
                        </p>
                    </div>
                </div>
            </div>
            <button
                className="bg-gray-900 cursor-pointer flex font-medium hover:bg-gray-800 items-center justify-center py-4 rounded-lg shadow-md space-x-3 text-white w-full"
                onClick={handleNext}
            >
                <SkipForward size={20} />
                <span>Next song</span>
            </button>
        </>
    );
};

export default ResultView;
