import AnsweringView from "./components/AnsweringView";
import Header from "./components/Header";
import PlayButton from "./components/PlayButton";
import ResultView from "./components/ResultView";
import Settings from "./components/Settings";

const App = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white max-w-xl p-6 rounded-xl shadow-xl space-y-4 w-full">
                <Header />
                <Settings />
                <PlayButton />
                <AnsweringView />
                <ResultView />
            </div>
        </div>
    );
};

export default App;
