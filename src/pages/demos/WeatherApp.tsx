import { useState } from 'react';

const WeatherApp = () => {
    const [city, setCity] = useState('');

    return (
        <div className="min-h-screen bg-blue-100 flex items-center justify-center p-4 pt-24 font-karla">
            <div className="bg-white rounded-3xl shadow-xl w-full max-w-sm overflow-hidden">
                {/* Header */}
                <div className="bg-blue-500 p-6 text-white text-center">
                    <h2 className="text-2xl font-bold">Weather App</h2>
                    <p className="text-blue-100 text-sm">Simulated Demo</p>
                </div>

                {/* Search */}
                <div className="p-6">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Enter city"
                            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center">
                            🔍
                        </button>
                    </div>
                </div>

                {/* Current Weather Display */}
                <div className="px-6 pb-6 text-center">
                    <div className="flex justify-center my-4">
                        <span className="text-6xl">🌤️</span>
                    </div>
                    <h3 className="text-5xl font-bold text-gray-800">24°C</h3>
                    <p className="text-gray-500 text-lg uppercase tracking-wide mt-2">Partly Cloudy</p>
                    <p className="text-gray-400 mt-1">New York, US</p>
                </div>

                {/* Forecast */}
                <div className="bg-gray-50 p-6 grid grid-cols-3 gap-2 text-center text-sm">
                    <div>
                        <p>Mon</p>
                        <p>🌧️</p>
                        <p>18°</p>
                    </div>
                    <div>
                        <p>Tue</p>
                        <p>☀️</p>
                        <p>26°</p>
                    </div>
                    <div>
                        <p>Wed</p>
                        <p>☁️</p>
                        <p>22°</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherApp;
