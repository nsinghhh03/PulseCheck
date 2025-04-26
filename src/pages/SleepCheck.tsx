import { useState } from 'react';

export default function SleepCheck() {
    const [sleep, setSleep] = useState('');

    const options = [
        'Less than 4 hours',
        '4–6 hours',
        '6–8 hours',
        'More than 8 hours',
    ];

    // 🛠 Submit function
    const handleSubmit = async () => {
        try {
            const res = await fetch('/api/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    mood: 3, // placeholder mood for now
                    sleep: sleep,
                    time: new Date().toISOString(),
                }),
            });
            const data = await res.json();
            console.log('✅ Successfully saved:', data);
            alert('Check-in submitted!');
        } catch (error) {
            console.error('❌ Error saving check-in:', error);
            alert('Failed to submit check-in.');
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
            <h1 className="text-2xl font-bold mb-4">Sleep Check</h1>
            <p className="text-gray-600 mb-6">
                How would you describe the quality of your sleep last night?
            </p>

            <div className="flex flex-col gap-2 w-full max-w-sm mb-6">
                {options.map(option => (
                    <button
                        key={option}
                        onClick={() => setSleep(option)}
                        className={`py-3 border-2 rounded-lg ${
                            sleep === option ? 'border-purple-400 bg-purple-100' : 'border-gray-300'
                        }`}
                    >
                        {option}
                    </button>
                ))}
            </div>

            {/* Button to submit */}
            <button
                onClick={handleSubmit}
                disabled={!sleep} // prevent clicking unless a choice is made
                className="w-full max-w-sm py-3 bg-purple-400 hover:bg-purple-500 text-white rounded-xl text-lg font-semibold disabled:opacity-50"
            >
                Submit →
            </button>
        </div>
    );
}
