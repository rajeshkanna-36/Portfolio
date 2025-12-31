import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const links = [
        { name: 'Home', path: '/', isExternal: false },
        { name: 'Projects', path: '/projects', isExternal: false },
        { name: 'Skills', path: '/skills', isExternal: false },
        { name: 'About', path: '/about', isExternal: false },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-slate-950 shadow-lg border-b border-white/10' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    {/* Left: Logo */}
                    <div className="flex-shrink-0 flex-1">
                        <Link to="/" className="inline-block hover:scale-105 transition-transform">
                            <img src="/logo.svg" alt="RK Logo" className="h-12 w-auto hover:brightness-110 transition-all" />
                        </Link>
                    </div>

                    {/* Center: Desktop Menu */}
                    <div className="hidden md:flex justify-center flex-1">

                        <div className="flex items-center space-x-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-1.5 shadow-2xl relative">
                            {/* Animated Background Blob for Active State */}


                            {links.map((link) => (
                                link.isExternal ? (
                                    <a
                                        key={link.name}
                                        href={link.path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`relative px-6 py-2.5 text-sm font-karla font-bold rounded-full transition-all duration-500 ease-out overflow-hidden group text-slate-300 hover:text-white hover:bg-white/10`}
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            {link.name}
                                            <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </span>
                                        <div className="absolute inset-0 bg-blue-500/10 scale-0 group-hover:scale-100 rounded-full transition-transform duration-300 origin-center"></div>
                                    </a>
                                ) : (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className={`relative px-6 py-2.5 text-sm font-karla font-bold rounded-full transition-all duration-500 ease-out overflow-hidden group ${isActive(link.path)
                                            ? 'text-white shadow-blue-500/30 shadow-lg nav-click-active active-blob bg-blue-600'
                                            : 'text-slate-300 hover:text-white hover:bg-white/10'
                                            }`}
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            {link.name}
                                            {isActive(link.path) && (
                                                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                                            )}
                                        </span>

                                        {/* Liquid Hover/Active Effects */}
                                        {!isActive(link.path) && (
                                            <div className="absolute inset-0 bg-blue-500/10 scale-0 group-hover:scale-100 rounded-full transition-transform duration-300 origin-center data-[active=true]:scale-100"></div>
                                        )}

                                        {/* Ripple on Click Concept (via Active State Animation) */}
                                        {isActive(link.path) && (
                                            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-50 active-blob pointer-events-none"></div>
                                        )}
                                    </Link>
                                )
                            ))}
                        </div>
                    </div>

                    {/* Right: Say Hello & Mobile Menu */}
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

                        <div className="md:hidden relative">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`relative inline-flex items-center justify-center p-2 text-white focus:outline-none transition-all duration-300 ${isOpen ? 'scale-110' : 'scale-100'}`}
                            >
                                <div className={`absolute inset-0 bg-blue-500/20 backdrop-blur-md border border-white/10 animate-liquid-morph transition-all duration-500 ${isOpen ? 'bg-blue-600/30' : ''}`}></div>
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
            {isOpen && (
                <div className="md:hidden absolute w-full top-24 left-0 px-4 pb-6">
                    <div className="glass-panel rounded-3xl overflow-hidden animate-fade-in-up border border-white/10 bg-slate-900/60 backdrop-blur-xl">
                        <div className="px-4 py-6 space-y-3">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`relative block px-6 py-4 text-lg font-karla font-bold transition-all duration-300 group ${isActive(link.path)
                                        ? 'text-white'
                                        : 'text-slate-300 hover:text-white hover:bg-white/10 rounded-2xl'
                                        }`}
                                >
                                    <span className="relative z-10 flex items-center justify-between">
                                        {link.name}
                                        {isActive(link.path) && <span className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>}
                                    </span>
                                    {isActive(link.path) && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-80 animate-liquid-morph shadow-lg shadow-blue-500/30 backdrop-blur-sm -z-0"></div>
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
