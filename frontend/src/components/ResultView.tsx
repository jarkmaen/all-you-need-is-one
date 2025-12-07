import whiteAlbumCover from "../assets/images/the_beatles.jpg";
import { CheckCircle, SkipForward, XCircle } from "lucide-react";
import { GameState } from "../types";

type Props = {
    setGameState: React.Dispatch<React.SetStateAction<GameState>>;
};

const ResultView = ({ setGameState }: Props) => {
    const isCorrect = true;

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
                    } flex font-bold items-center justify-center p-4 space-x-3 text-white text-xl 
                  `}
                >
                    {isCorrect ? (
                        <CheckCircle size={28} />
                    ) : (
                        <XCircle size={28} />
                    )}
                    <span>
                        {isCorrect ? "Correct!" : "Incorrect. The answer is:"}
                    </span>
                </div>
                <div className="flex flex-row items-center justify-start p-6 space-x-6">
                    <img
                        className="h-28 object-cover rounded-lg shadow-xl w-28"
                        src={whiteAlbumCover}
                    />
                    <div>
                        <h1 className="font-semibold text-2xl text-gray-900">
                            Everybody's Got Something to Hide Except Me and My
                            Monkey
                        </h1>
                        <p className="text-gray-500 text-sm">
                            The Beatles (White Album)
                        </p>
                    </div>
                </div>
            </div>
            <button
                className="bg-gray-900 cursor-pointer flex font-medium hover:bg-gray-800 items-center justify-center py-3 rounded-lg shadow-md space-x-2 text-white w-full"
                onClick={() => setGameState(GameState.ANSWERING)}
            >
                <SkipForward size={20} />
                <span>Next song</span>
            </button>
        </>
    );
};

export default ResultView;
