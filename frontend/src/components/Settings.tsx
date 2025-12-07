import { Info } from "lucide-react";

type Props = {
    handleModeChange: () => void;
    isRandomMode: boolean;
};

const Settings = ({ handleModeChange, isRandomMode }: Props) => {
    return (
        <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
            <h1 className="flex font-medium items-center mb-2 space-x-2 text-gray-700">
                <Info size={20} />
                <span>Settings</span>
            </h1>
            <label className="flex items-center justify-between cursor-pointer">
                <span className="text-gray-700 text-sm">
                    Random mode
                    <span className="block text-gray-500 text-xs">
                        Play one second from anywhere in the song.
                    </span>
                </span>
                <div className="mr-2 relative w-10">
                    <input
                        checked={isRandomMode}
                        className="absolute appearance-none bg-white border-4 cursor-pointer h-6 rounded-full w-6"
                        onChange={handleModeChange}
                        style={{
                            borderColor: isRandomMode ? "#4f39f6" : "#d1d5dc",
                            left: isRandomMode ? "0px" : "calc(100% - 24px)",
                            transition: "left 0.2s"
                        }}
                        type="checkbox"
                    />
                    <div
                        className={`${
                            isRandomMode ? "bg-indigo-600" : "bg-gray-300"
                        } h-6 rounded-full`}
                    ></div>
                </div>
            </label>
        </div>
    );
};

export default Settings;
