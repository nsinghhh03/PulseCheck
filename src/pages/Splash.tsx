import { useNavigate } from 'react-router-dom';

export default function Splash() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-8">
            <div className="bg-white rounded-3xl p-10 shadow-2xl w-full max-w-sm flex flex-col items-center">
                {/* Icon */}
                <div className="mb-6">
                    <div className="bg-pink-200 rounded-full p-6">
                        {/* You can replace this emoji with an SVG or real image later */}
                        <span className="text-6xl">💓</span>
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl font-bold text-gray-800 mb-4">PulseCheck</h1>
                <p className="text-gray-600 text-center mb-8">
                    Track mental clarity, stress, and energy through every shift.
                </p>

                {/* Start Button */}
                <button
                    onClick={() => navigate('/login')}
                    className="w-full py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-xl text-lg font-semibold transition-all"
                >
                    Start →
                </button>

                {/* Admin Link */}
                <button
                    onClick={() => alert('Admin login coming soon!')}
                    className="mt-4 text-purple-500 underline text-sm"
                >
                    Are you an admin member?
                </button>
            </div>
        </div>
    );
}
