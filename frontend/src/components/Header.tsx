import { Settings, Zap } from "lucide-react";

type Props = {
    setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
    streak: number;
};

const Header = ({ setShowSettings, streak }: Props) => {
    return (
        <div className="border-b border-gray-200 flex items-start justify-between pb-4">
            <div>
                <h1 className="font-extrabold text-3xl text-gray-900 tracking-tight">
                    All You Need Is One
                </h1>
                <p className="mt-1 text-gray-500 text-sm">
                    Guess the Beatles song from just one second of audio.
                </p>
            </div>
            <div className="flex flex-col items-end space-y-2">
                <div className="flex font-medium items-center space-x-1 text-gray-900 text-sm whitespace-nowrap">
                    <Zap className="text-indigo-600" size={16} />
                    <span>Streak: {streak}</span>
                </div>
                <button
                    className="cursor-pointer hover:bg-gray-200 p-2 rounded-full text-gray-700"
                    onClick={() => setShowSettings((prev) => !prev)}
                >
                    <Settings size={20} />
                </button>
            </div>
        </div>
    );
};

export default Header;
