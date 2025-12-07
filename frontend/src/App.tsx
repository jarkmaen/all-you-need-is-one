import AnsweringView from "./components/AnsweringView";
import Header from "./components/Header";
import PlayButton from "./components/PlayButton";
import ReactPlayer from "react-player";
import ResultView from "./components/ResultView";
import Settings from "./components/Settings";
import type { Song } from "./types";
import { GameState } from "./types";
import { getRandomSong } from "./utils";
import { useRef, useState } from "react";

const App = () => {
    const [currentSong, setCurrentSong] = useState<Song>(getRandomSong());
    const [gameState, setGameState] = useState<GameState>(GameState.ANSWERING);
    const [isBuffering, setBuffering] = useState(false);
    const [isPlaying, setPlaying] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    const playerRef = useRef<ReactPlayer>(null);

    const handleEnd = () => {
        setPlaying(false);
    };

    const handlePlay = () => {
        if (gameState === GameState.ANSWERING) {
            setBuffering(true);
            setPlaying(true);
        } else {
            handleEnd();
        }
    };

    const handleStart = () => {
        setBuffering(false);

        if (playerRef.current) {
            playerRef.current.currentTime = 0;

            if (gameState === GameState.ANSWERING) {
                setTimeout(() => {
                    setPlaying(false);
                }, 1000);
            }
        }
    };

    const handleSubmit = () => {
        setGameState(GameState.RESULT);
        setPlaying(true);
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white max-w-xl p-6 rounded-xl shadow-xl space-y-4 w-full">
                <ReactPlayer
                    onEnded={handleEnd}
                    onStart={handleStart}
                    playing={isPlaying}
                    ref={playerRef}
                    src={`https://www.youtube.com/watch?v=${currentSong.youtubeId}`}
                    width="100%"
                />
                <Header setShowSettings={setShowSettings} />
                {showSettings && <Settings />}
                {(gameState !== GameState.RESULT || isPlaying) && (
                    <PlayButton
                        gameState={gameState}
                        handlePlay={handlePlay}
                        isBuffering={isBuffering}
                        isPlaying={isPlaying}
                    />
                )}
                {gameState === GameState.ANSWERING && (
                    <AnsweringView handleSubmit={handleSubmit} />
                )}
                {gameState === GameState.RESULT && (
                    <ResultView setGameState={setGameState} />
                )}
            </div>
        </div>
    );
};

export default App;
