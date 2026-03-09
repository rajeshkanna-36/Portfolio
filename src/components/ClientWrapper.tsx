'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './Navbar';
import HelloLoader from './HelloLoader';
import { LoaderContext } from './LoaderContext';

const ROUTE_ORDER: Record<string, number> = {
    '/': 0,
    '/projects': 1,
    '/skills': 2,
    '/about': 3,
    '/demos/weather': 4,
    '/demos/calculator': 5,
};

const variants = {
    initial: (dir: number) => ({ opacity: 0, x: dir * 40 }),
    animate: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -40 }),
};

const transition = { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const };

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname() || '/';
    const [loading, setLoading] = useState(true);
    const [loaderDone, setLoaderDone] = useState(false);
    const [mounted, setMounted] = useState(false);

    const [prevPath, setPrevPath] = useState(pathname);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (pathname !== prevPath) {
            const prevIndex = ROUTE_ORDER[prevPath] ?? 0;
            const nextIndex = ROUTE_ORDER[pathname] ?? 0;
            setDirection(nextIndex >= prevIndex ? 1 : -1);
            setPrevPath(pathname);
        }
    }, [pathname, prevPath]);

    const handleLoaderComplete = () => {
        setLoading(false);
        setTimeout(() => setLoaderDone(true), 700);
    };

    return (
        <LoaderContext.Provider value={!loading}>
            {!loaderDone && <HelloLoader onComplete={handleLoaderComplete} />}
            <div className="min-h-screen">
                <Navbar />
                <div style={{ overflowX: 'clip' }}>
                    <AnimatePresence mode="sync" custom={direction}>
                        <motion.div
                            key={pathname}
                            custom={direction}
                            variants={variants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={transition}
                            style={{ willChange: 'transform, opacity' }}
                        >
                            <div className={!loading ? 'visible' : 'hidden'}>
                                {mounted && children}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </LoaderContext.Provider>
    );
}
