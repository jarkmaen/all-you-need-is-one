import AnsweringView from "./components/AnsweringView";
import Header from "./components/Header";
import PlayButton from "./components/PlayButton";
import ResultView from "./components/ResultView";
import Settings from "./components/Settings";
import { GameState } from "./types";
import { useState } from "react";

const App = () => {
    const [gameState, setGameState] = useState<GameState>(GameState.ANSWERING);
    const [showSettings, setShowSettings] = useState(false);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white max-w-xl p-6 rounded-xl shadow-xl space-y-4 w-full">
                <Header setShowSettings={setShowSettings} />
                {showSettings && <Settings />}
                <PlayButton />
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
