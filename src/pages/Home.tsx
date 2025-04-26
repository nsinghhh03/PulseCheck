import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
            <h1 className="text-2xl font-bold mb-4">Good morning, User!</h1>
            <p className="text-gray-600 mb-6">Log your wellness to start or end your shift.</p>

            <div className="flex flex-col gap-4 w-full max-w-sm">
                <button
                    onClick={() => navigate('/mood')}
                    className="py-4 bg-purple-200 hover:bg-purple-300 text-gray-700 rounded-xl font-semibold"
                >
                    Start of Shift
                </button>
                <button
                    onClick={() => navigate('/mood')}
                    className="py-4 bg-pink-300 hover:bg-pink-400 text-gray-700 rounded-xl font-semibold"
                >
                    End of Shift
                </button>
            </div>
        </div>
    );
}
