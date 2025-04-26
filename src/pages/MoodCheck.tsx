import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function MoodCheck() {
    const navigate = useNavigate();
    const [mood, setMood] = useState(3);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
            <h1 className="text-2xl font-bold mb-4">Mood Check</h1>
            <p className="text-gray-600 mb-6">How would you rate your mood at the start of your shift?</p>

            <div className="flex justify-center gap-4 mb-4 text-2xl">
                <span>😡</span>
                <span>😟</span>
                <span>😐</span>
                <span>🙂</span>
                <span>😁</span>
            </div>

            <input
                type="range"
                min="1"
                max="5"
                value={mood}
                onChange={(e) => setMood(parseInt(e.target.value))}
                className="w-full max-w-sm mb-6"
            />

            <button
                onClick={() => navigate('/sleep')}
                className="w-full max-w-sm py-3 bg-purple-400 hover:bg-purple-500 text-white rounded-xl text-lg font-semibold"
            >
                Next →
            </button>
        </div>
    );
}
