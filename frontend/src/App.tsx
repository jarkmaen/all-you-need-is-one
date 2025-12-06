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
    const [playing, setPlaying] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    const playerRef = useRef<ReactPlayer>(null);

    const playOneSecond = () => {
        if (playerRef.current) {
            playerRef.current.currentTime = 0;

            setPlaying(true);

            setTimeout(() => {
                setPlaying(false);
            }, 1000);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white max-w-xl p-6 rounded-xl shadow-xl space-y-4 w-full">
                <ReactPlayer
                    playing={playing}
                    ref={playerRef}
                    src={`https://www.youtube.com/watch?v=${currentSong.youtubeId}`}
                    width="100%"
                />
                <Header setShowSettings={setShowSettings} />
                {showSettings && <Settings />}
                <PlayButton playOneSecond={playOneSecond} />
                {gameState === GameState.ANSWERING && (
                    <AnsweringView setGameState={setGameState} />
                )}
                {gameState === GameState.RESULT && (
                    <ResultView setGameState={setGameState} />
                )}
            </div>
        </div>
    );
};

export default App;
