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
    const [currentSong, setCurrentSong] = useState<Song>(() => getRandomSong());
    const [gameState, setGameState] = useState<GameState>(GameState.ANSWERING);
    const [isBuffering, setBuffering] = useState(false);
    const [isPlaying, setPlaying] = useState(false);
    const [isRandomMode, setRandomMode] = useState(false);
    const [outcome, setOutcome] = useState<Outcome>(Outcome.INCORRECT);
    const [showSettings, setShowSettings] = useState(false);
    const [startTime, setStartTime] = useState(0);
    const [streak, setStreak] = useState(0);

    const playerRef = useRef<HTMLVideoElement | null>(null);

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
        setStartTime(0);
    };

    const handlePause = () => {
        if (gameState === GameState.ANSWERING) {
            if (playerRef.current) {
                playerRef.current.currentTime = startTime;
            }
        }
    };

    const handlePlay = () => {
        if (gameState === GameState.ANSWERING) {
            setBuffering(true);

            if (playerRef.current) {
                let currentTime = 0;

                if (isRandomMode) {
                    if (startTime === 0) {
                        const randomStartTime = getRandomStartTime(
                            playerRef.current.duration
                        );

                        currentTime = randomStartTime;
                        setStartTime(randomStartTime);
                    } else {
                        currentTime = startTime;
                    }
                } else {
                    currentTime = currentSong.startTime ?? 0;
                    setStartTime(currentTime);
                }

                playerRef.current.currentTime = currentTime;
            }

            setPlaying(true);
        } else {
            setPlaying(false);
        }
    };

    const handlePlaying = () => {
        setBuffering(false);

        if (gameState === GameState.ANSWERING) {
            setTimeout(() => {
                setPlaying(false);
            }, 1000);
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
                    onPlaying={handlePlaying}
                    playing={isPlaying}
                    ref={playerRef}
                    src={`https://www.youtube.com/watch?v=${currentSong.youtubeId}`}
                    style={{ display: "none" }}
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
