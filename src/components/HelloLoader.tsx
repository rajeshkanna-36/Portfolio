import { useEffect, useState } from 'react';
import { AppleHelloEnglishEffect } from "@/components/ncdai/apple-hello-effect";

const HelloLoader = ({ onComplete }: { onComplete: () => void }) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        if (fadeOut) {
            const timer = setTimeout(() => {
                onComplete();
            }, 500); // Wait for fade out transition
            return () => clearTimeout(timer);
        }
    }, [fadeOut, onComplete]);

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div className="relative flex items-center justify-center w-full">
                <AppleHelloEnglishEffect
                    className="h-24 md:h-48 w-auto text-cyan-400"
                    onAnimationComplete={() => setFadeOut(true)}
                />
            </div>
        </div>
    );
};

export default HelloLoader;
