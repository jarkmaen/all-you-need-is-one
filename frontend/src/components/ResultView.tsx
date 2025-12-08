import type { Song } from "../types";
import { albumNameCoverMap } from "../constants/albumNameCoverMap";
import { CheckCircle, SkipForward, XCircle } from "lucide-react";
import { Outcome } from "../types";
import { useState } from "react";

type Props = {
    currentSong: Song;
    handleNext: () => void;
    outcome: Outcome;
};

const ResultView = ({ currentSong, handleNext, outcome }: Props) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const isCorrect = outcome === Outcome.CORRECT;
    const src = albumNameCoverMap[currentSong.album];

    const getMessage = () => {
        if (outcome === Outcome.GIVE_UP) {
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
                <div className="flex flex-row items-center justify-start p-6 space-x-6">
                    <div className="h-28 relative shrink-0 w-28">
                        <img
                            onLoad={() => setIsLoaded(true)}
                            src={src}
                            style={{ display: "none" }}
                        />
                        {isLoaded ? (
                            <img
                                className="h-28 object-cover rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.3)] w-28"
                                src={src}
                            />
                        ) : (
                            <div className="absolute animate-pulse bg-gray-200 h-28 inset-0 object-cover rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.3)] w-28" />
                        )}
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
