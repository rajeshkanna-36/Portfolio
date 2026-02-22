import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const location = useLocation();

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Skills', path: '/skills' },
        { name: 'About', path: '/about' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="fixed w-full z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex-1">
                        <Link to="/" className="inline-block hover:scale-105 transition-transform">
                            <img src="/logo.svg" alt="RK Logo" className="h-12 w-auto hover:brightness-110 transition-all" />
                        </Link>
                    </div>

                    {/* Desktop Nav — Dynamic Island pill */}
                    <div className="hidden md:flex justify-center flex-1">
                        <motion.div
                            className="flex items-center space-x-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-1.5 shadow-2xl relative"
                            layout
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        >
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onMouseEnter={() => setHoveredLink(link.name)}
                                    onMouseLeave={() => setHoveredLink(null)}
                                    className="relative px-6 py-2.5 text-sm font-karla font-bold rounded-full transition-colors duration-150 select-none"
                                    style={{ WebkitTapHighlightColor: 'transparent' }}
                                >
                                    {/* Dynamic Island active pill */}
                                    {isActive(link.path) && (
                                        <motion.div
                                            layoutId="dynamic-island-pill"
                                            className="absolute inset-0 rounded-full bg-blue-600"
                                            style={{ zIndex: 0 }}
                                            transition={{
                                                type: 'spring',
                                                stiffness: 380,
                                                damping: 28,
                                                mass: 0.8,
                                            }}
                                        />
                                    )}

                                    {/* Hover glow (only when not active) */}
                                    {!isActive(link.path) && hoveredLink === link.name && (
                                        <motion.div
                                            layoutId="hover-glow"
                                            className="absolute inset-0 rounded-full bg-white/8"
                                            style={{ zIndex: 0 }}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                        />
                                    )}

                                    {/* Label */}
                                    <span className={`relative z-10 flex items-center gap-2 transition-colors duration-200 ${isActive(link.path) ? 'text-white' : 'text-slate-300 hover:text-white'}`}>
                                        {link.name}
                                    </span>
                                </Link>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: Say Hello + Mobile Toggle */}
                    <div className="flex items-center justify-end flex-1 space-x-4">
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=rajeshkanna.swe@gmail.com&su=Hello%20Rajesh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 glass-btn text-white font-karla font-bold rounded-full text-sm group"
                        >
                            <span>Say Hello</span>
                            <svg className="ml-2 w-4 h-4 transform group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>

                        {/* Mobile hamburger */}
                        <div className="md:hidden relative">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="relative inline-flex items-center justify-center p-2 text-white focus:outline-none"
                            >
                                <div className={`absolute inset-0 bg-blue-500/20 backdrop-blur-md border border-white/10 animate-liquid-morph transition-all duration-500 ${isOpen ? 'bg-blue-600/30' : ''}`} />
                                <svg className="relative h-6 w-6 z-10" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    {isOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden absolute w-full top-24 left-0 px-4 pb-6"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    >
                        <div className="rounded-3xl overflow-hidden border border-white/10 bg-slate-900/80 backdrop-blur-xl">
                            <div className="px-4 py-6 space-y-2">
                                {links.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`relative block px-6 py-4 text-lg font-karla font-bold rounded-2xl transition-all duration-300 ${isActive(link.path)
                                            ? 'text-white bg-blue-600'
                                            : 'text-slate-300 hover:text-white hover:bg-white/10'
                                            }`}
                                    >
                                        <span className="relative z-10 flex items-center justify-between">
                                            {link.name}
                                            {isActive(link.path) && (
                                                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                            )}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
