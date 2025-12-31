import { useEffect, useState } from 'react';

const Loader = ({ onComplete }: { onComplete: () => void }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            onComplete();
        }, 3500);
        return () => clearTimeout(timer);
    }, [onComplete]);

    if (!loading) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
            <div className="relative flex flex-col items-center justify-center">

                {/* Light Camera / Shutter SVG */}
                <div className="relative w-32 h-32 flex items-center justify-center">
                    {/* Core Flash/Lens */}
                    <div className="absolute w-8 h-8 bg-sky-400 rounded-full camera-flash blur-md"></div>
                    <div className="absolute w-6 h-6 bg-white rounded-full z-10 animate-pulse"></div>

                    {/* Rotating Shutter Rings */}
                    <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                        <defs>
                            <linearGradient id="shutter-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
                                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="1" />
                            </linearGradient>
                        </defs>

                        {/* Ring 1 - Outer */}
                        <circle
                            cx="50" cy="50" r="45"
                            fill="none"
                            stroke="url(#shutter-gradient)"
                            strokeWidth="2"
                            className="shutter-spin origin-center opacity-30"
                            style={{ animationDuration: '3s' }}
                        />
                        {/* Ring 2 - Middle with Dash */}
                        <circle
                            cx="50" cy="50" r="35"
                            fill="none"
                            stroke="#38bdf8"
                            strokeWidth="4"
                            className="shutter-dash origin-center filter drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]"
                        />
                        {/* Ring 3 - Inner Reverse */}
                        <circle
                            cx="50" cy="50" r="25"
                            fill="none"
                            stroke="#7dd3fc"
                            strokeWidth="2"
                            className="shutter-spin origin-center"
                            style={{ animationDirection: 'reverse', animationDuration: '4s', strokeDasharray: '40 20' }}
                        />
                    </svg>
                </div>

                {/* Text */}
                <p className="mt-8 text-sky-400 font-mono tracking-[0.3em] text-sm animate-pulse uppercase">
                    Initializing Optics
                </p>
            </div>
        </div>
    );
};

export default Loader;
