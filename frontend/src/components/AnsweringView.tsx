import { songs } from "../data/songs";
import { useState } from "react";
import type { Song } from "../types";

type Props = {
    answer: string;
    handleSubmit: (giveUp: boolean) => void;
    isPlaying: boolean;
    setAnswer: React.Dispatch<React.SetStateAction<string>>;
};

const AnsweringView = ({
    answer,
    handleSubmit,
    isPlaying,
    setAnswer
}: Props) => {
    const [isFocused, setIsFocused] = useState(false);

    const filteredSongs = songs.filter((song: Song) => {
        return song.title.toLowerCase().includes(answer.toLowerCase());
    });

    const showDropdown =
        answer.length > 0 && filteredSongs.length > 0 && isFocused;

    const handleSelect = (option: string) => {
        setAnswer(option);
        setIsFocused(false);
    };

    return (
        <div className="relative">
            <input
                className="border-0 focus:inset-ring-2 focus:inset-ring-indigo-500 inset-ring inset-ring-gray-200 outline-none px-4 py-3 rounded-lg text-lg w-full"
                onBlur={() => setIsFocused(false)}
                onChange={(e) => setAnswer(e.target.value)}
                onFocus={() => setIsFocused(true)}
                placeholder="Type your answer here"
                type="text"
                value={answer}
            />
            {showDropdown && (
                <ul className="absolute bg-white border border-gray-300 max-h-60 mt-1 overflow-auto rounded-lg shadow-lg w-full">
                    {filteredSongs.map((song) => (
                        <li
                            className="cursor-pointer hover:bg-indigo-500 hover:text-white px-4 py-2"
                            onMouseDown={() => handleSelect(song.title)}
                        >
                            {song.title}
                        </li>
                    ))}
                </ul>
            )}
            <div className="flex mt-4 space-x-4">
                <button
                    className="bg-indigo-600 cursor-pointer disabled:bg-indigo-300 disabled:cursor-not-allowed flex-1 font-medium hover:bg-indigo-700 py-3 rounded-lg shadow-md text-white"
                    disabled={answer.length < 1}
                    onClick={() => handleSubmit(false)}
                >
                    Submit answer
                </button>
                <button
                    className="bg-white border border-gray-300 cursor-pointer disabled:cursor-not-allowed disabled:hover:bg-white disabled:opacity-50 flex-1 font-medium hover:bg-gray-100 py-3 rounded-lg shadow-sm text-gray-700"
                    disabled={isPlaying}
                    onClick={() => handleSubmit(true)}
                >
                    Give up
                </button>
            </div>
        </div>
    );
};

export default AnsweringView;
