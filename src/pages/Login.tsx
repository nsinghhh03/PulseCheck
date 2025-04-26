import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
            <h1 className="text-3xl font-bold mb-4">Login</h1>
            <p className="text-gray-600 mb-6">Enter your login ID and password.</p>

            <input
                type="text"
                placeholder="Enter your login ID or email"
                className="w-full max-w-sm p-3 mb-4 border-2 border-pink-400 rounded-lg"
            />
            <input
                type="password"
                placeholder="Enter your password"
                className="w-full max-w-sm p-3 mb-6 border-2 border-pink-400 rounded-lg"
            />

            <button
                onClick={() => navigate('/home')}
                className="w-full max-w-sm py-3 bg-purple-400 hover:bg-purple-500 text-white rounded-xl text-lg font-semibold"
            >
                Next →
            </button>
        </div>
    );
}
