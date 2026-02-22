import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { AppleHelloEnglishEffect } from "@/components/ncdai/apple-hello-effect";

const HelloLoader = ({ onComplete }: { onComplete: () => void }) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        if (fadeOut) {
            // Fire immediately so Home starts animating in at the same time loader fades out
            onComplete();
        }
    }, [fadeOut, onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black pointer-events-none"
            animate={{ opacity: fadeOut ? 0 : 1 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
            <div className="relative flex items-center justify-center w-full">
                <AppleHelloEnglishEffect
                    className="h-24 md:h-48 w-auto text-cyan-400"
                    onAnimationComplete={() => setFadeOut(true)}
                />
            </div>
        </motion.div>
    );
};

export default HelloLoader;
