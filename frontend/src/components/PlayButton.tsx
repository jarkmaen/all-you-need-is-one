import { CircleStop, Loader, Play, XCircle } from "lucide-react";
import { GameState } from "../types";

type Props = {
    gameState: GameState;
    handlePlay: () => void;
    isBuffering: boolean;
    isPlaying: boolean;
};

const PlayButton = ({
    gameState,
    handlePlay,
    isBuffering,
    isPlaying
}: Props) => {
    const disabled =
        gameState === GameState.ANSWERING && (isBuffering || isPlaying);

    const base =
        "disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer flex font-medium items-center justify-center py-4 rounded-lg shadow-md space-x-3 text-white w-full";
    const classes =
        gameState === GameState.RESULT
            ? `bg-gray-900 hover:bg-gray-800 ${base}`
            : `bg-indigo-600 hover:bg-indigo-700 ${base}`;

    let icon = <Play size={24} />;
    let text = "Play one second";

    if (gameState === GameState.RESULT) {
        icon = <CircleStop size={24} />;
        text = "Stop playing";
    } else if (isBuffering) {
        icon = <Loader size={24} />;
        text = "Loading...";
    } else if (isPlaying) {
        text = "One second playing";
    }

    return (
        <button className={classes} disabled={disabled} onClick={handlePlay}>
            {icon}
            <span>{text}</span>
        </button>
    );
};

export default PlayButton;
