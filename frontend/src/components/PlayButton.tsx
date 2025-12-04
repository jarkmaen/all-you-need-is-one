import { Play } from "lucide-react";

const PlayButton = () => {
    return (
        <button className="bg-indigo-600 cursor-pointer flex font-medium hover:bg-indigo-700 items-center justify-center py-4 rounded-lg shadow-md space-x-3 text-white transition w-full">
            <Play size={24} />
            <span>Play one second</span>
        </button>
    );
};

export default PlayButton;
