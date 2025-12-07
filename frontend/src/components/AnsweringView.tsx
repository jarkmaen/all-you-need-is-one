type Props = {
    handleSubmit: () => void;
};

const AnsweringView = ({ handleSubmit }: Props) => {
    return (
        <>
            <input
                className="border-0 focus:inset-ring-2 focus:inset-ring-indigo-500 inset-ring inset-ring-gray-200 outline-none px-4 py-3 rounded-lg text-lg w-full"
                placeholder="Type your answer here"
                type="text"
            />
            <div className="flex space-x-4">
                <button
                    className="bg-indigo-600 cursor-pointer flex-1 font-medium hover:bg-indigo-700 py-3 rounded-lg shadow-md text-white"
                    onClick={handleSubmit}
                >
                    Submit answer
                </button>
                <button
                    className="bg-white border border-gray-300 cursor-pointer flex-1 font-medium hover:bg-gray-100 py-3 rounded-lg shadow-sm text-gray-700"
                    onClick={handleSubmit}
                >
                    Give up
                </button>
            </div>
        </>
    );
};

export default AnsweringView;
