import AnsweringView from "./components/AnsweringView";
import Header from "./components/Header";
import PlayButton from "./components/PlayButton";
import ReactPlayer from "react-player";
import ResultView from "./components/ResultView";
import Settings from "./components/Settings";
import type { Song } from "./types";
import { GameState, Outcome } from "./types";
import { getRandomSong, getRandomStartTime } from "./utils";
import { useRef, useState } from "react";

const App = () => {
    const [answer, setAnswer] = useState("");
    const [currentSong, setCurrentSong] = useState<Song>(getRandomSong());
    const [gameState, setGameState] = useState<GameState>(GameState.ANSWERING);
    const [isBuffering, setBuffering] = useState(false);
    const [isPlaying, setPlaying] = useState(false);
    const [isRandomMode, setRandomMode] = useState(false);
    const [outcome, setOutcome] = useState<Outcome>(Outcome.INCORRECT);
    const [showSettings, setShowSettings] = useState(false);
    const [startSeekTime, setStartSeekTime] = useState(0);
    const [streak, setStreak] = useState(0);

    const playerRef = useRef<ReactPlayer>(null);

    const handleModeChange = () => {
        setRandomMode((prev) => !prev);
        setStreak(0);
    };

    const handleNext = () => {
        setAnswer("");
        setCurrentSong(getRandomSong());
        setGameState(GameState.ANSWERING);
        setOutcome(Outcome.INCORRECT);
        setPlaying(false);
        setStartSeekTime(0);
    };

    const handlePause = () => {
        if (gameState === GameState.ANSWERING) {
            if (playerRef.current) {
                playerRef.current.currentTime = startSeekTime;
            }
        }
    };

    const handlePlay = () => {
        if (gameState === GameState.ANSWERING) {
            setBuffering(true);
            setPlaying(true);
        } else {
            setPlaying(false);
        }
    };

    const handleStart = () => {
        setBuffering(false);

        if (playerRef.current) {
            let seekTime = 0;

            if (isRandomMode) {
                if (startSeekTime === 0) {
                    const newRandomTime = getRandomStartTime(
                        playerRef.current.duration
                    );

                    seekTime = newRandomTime;
                    setStartSeekTime(newRandomTime);
                } else {
                    seekTime = startSeekTime;
                }
            } else {
                seekTime = 0;
            }

            playerRef.current.currentTime = seekTime;

            if (gameState === GameState.ANSWERING) {
                setTimeout(() => {
                    setPlaying(false);
                }, 1000);
            }
        }
    };

    const handleSubmit = (giveUp: boolean) => {
        const correct =
            answer.trim().toLowerCase() === currentSong.title.toLowerCase() &&
            !giveUp;

        if (correct) {
            setOutcome(Outcome.CORRECT);
            setStreak((s) => s + 1);
        } else {
            if (giveUp) {
                setOutcome(Outcome.GIVE_UP);
            }

            setStreak(0);
        }

        setGameState(GameState.RESULT);
        setPlaying(true);
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white max-w-xl p-6 rounded-xl shadow-xl space-y-4 w-full">
                <ReactPlayer
                    onPause={handlePause}
                    onStart={handleStart}
                    playing={isPlaying}
                    ref={playerRef}
                    src={`https://www.youtube.com/watch?v=${currentSong.youtubeId}`}
                    width="100%"
                />
                <Header setShowSettings={setShowSettings} streak={streak} />
                {showSettings && (
                    <Settings
                        handleModeChange={handleModeChange}
                        isRandomMode={isRandomMode}
                    />
                )}
                {(gameState !== GameState.RESULT || isPlaying) && (
                    <PlayButton
                        gameState={gameState}
                        handlePlay={handlePlay}
                        isBuffering={isBuffering}
                        isPlaying={isPlaying}
                    />
                )}
                {gameState === GameState.ANSWERING && (
                    <AnsweringView
                        answer={answer}
                        handleSubmit={handleSubmit}
                        isPlaying={isPlaying}
                        setAnswer={setAnswer}
                    />
                )}
                {gameState === GameState.RESULT && (
                    <ResultView
                        currentSong={currentSong}
                        handleNext={handleNext}
                        outcome={outcome}
                    />
                )}
            </div>
        </div>
    );
};

export default App;
