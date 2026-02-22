import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const projects = [
    {
        id: 1,
        title: 'Brand Landing page',
        category: 'Tech • Web Design',
        description: 'A modern, high-conversion landing page designed for a tech brand, featuring dynamic interactions and a premium aesthetic.',
        year: '2025',
        link: 'https://www.figma.com/proto/R1YF9zrvpyDoIA7u7RYexb/KodeX-Web-Design?node-id=104-2&t=Bas4TS4aCwqSRh17-1',
        color: 'from-blue-400 to-cyan-300',
        image: (await import('../assets/project1.png')).default,
    },
    {
        id: 2,
        title: 'Swayam App Redesign',
        category: 'Tech • Mobile Application',
        description: 'A comprehensive redesign of the Swayam educational platform to enhance user experience and accessibility for learners nationwide.',
        year: '2024',
        link: 'https://www.figma.com/proto/wPk0H1HLvb9n0REKpGxcMw/Swayam?node-id=16-39&t=Bas4TS4aCwqSRh17-1',
        color: 'from-emerald-400 to-teal-300',
        image: (await import('../assets/project2.png')).default,
    },
    {
        id: 3,
        title: 'Automobile brand shop',
        category: 'E-commerce • Web App',
        description: 'A premium shopping experience featuring immersive product displays and a seamless, high-conversion checkout flow.',
        year: '2025',
        link: 'https://atuomobile-brand-shop.web.app/Login',
        color: 'from-purple-400 to-pink-300',
        image: (await import('../assets/project3.png')).default,
    },
];

// Gap between stacked card tops
const STACK_OFFSET = 24;
const NAVBAR_HEIGHT = 88;

const Projects = () => {
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);
    const rafRef = useRef<number>(0);

    useEffect(() => {
        const onScroll = () => {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(() => {
                cardRefs.current.forEach((card, index) => {
                    if (!card) return;
                    const overlay = overlayRefs.current[index];
                    const nextCard = cardRefs.current[index + 1];

                    if (!nextCard) {
                        // Last card — never dim
                        card.style.transform = 'scale(1) translateY(0px)';
                        if (overlay) overlay.style.opacity = '0';
                        return;
                    }

                    const cardRect = card.getBoundingClientRect();
                    const nextRect = nextCard.getBoundingClientRect();

                    // How far has the next card overlapped this card?
                    const overlap = cardRect.bottom - nextRect.top;
                    const cardHeight = card.offsetHeight;

                    if (overlap <= 0) {
                        // Not yet overlapping — fully visible
                        card.style.transform = 'scale(1)';
                        if (overlay) overlay.style.opacity = '0';
                    } else {
                        // progress: 0 (just touching) → 1 (next card top = this card top)
                        const progress = Math.min(1, overlap / cardHeight);
                        const scale = 1 - progress * 0.04;   // 1 → 0.96
                        const scrim = progress * 0.55;        // 0 → 0.55 dark overlay

                        card.style.transform = `scale(${scale})`;
                        if (overlay) overlay.style.opacity = `${scrim}`;
                    }
                });
            });
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll(); // initial pass
        return () => {
            window.removeEventListener('scroll', onScroll);
            cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <div className="pt-24 min-h-screen text-gray-100 relative font-outfit"
            style={{ background: '#05060b' }}>

            {/* Fixed background — stays behind everything */}
            <div className="fixed inset-0 pointer-events-none select-none z-0">
                {/* Grid */}
                <div className="absolute inset-0 opacity-[0.06]"
                    style={{
                        backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px),
                                          linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
                        backgroundSize: '120px 120px'
                    }}
                />
                {/* Ambient glows */}
                <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-cyan-500/8 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                {/* Header */}
                <div className="text-center mb-24">
                    <p className="text-blue-500 font-bold tracking-wider uppercase mb-4 text-sm font-mono opacity-80">
                        My Work
                    </p>
                    <h1 className="text-4xl md:text-6xl font-black font-outfit text-white mb-6 tracking-tighter uppercase leading-none">
                        Designs That Blend <br />
                        <span className="italic font-serif text-blue-500 lowercase first-letter:uppercase">
                            Creativity
                        </span>{' '}
                        &amp; Functionality
                    </h1>
                </div>

                {/* Stacked Cards */}
                <div className="relative pb-24">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            ref={el => { cardRefs.current[index] = el; }}
                            className="sticky"
                            style={{
                                top: `${NAVBAR_HEIGHT + index * STACK_OFFSET}px`,
                                zIndex: index + 1,
                                transformOrigin: 'top center',
                                willChange: 'transform',
                            }}
                        >
                            {/* Card */}
                            <div className="relative rounded-[2rem] overflow-hidden border border-white/[0.08] shadow-2xl"
                                style={{
                                    background: 'linear-gradient(145deg, rgba(15,17,26,0.97) 0%, rgba(8,10,18,0.99) 100%)',
                                    boxShadow: '0 30px 80px -20px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05)',
                                }}>

                                {/* Card content */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center p-10 md:p-16 relative z-10">
                                    {/* Left */}
                                    <div className="space-y-8">
                                        <div className="border border-white/15 rounded-full px-4 py-1.5 w-fit text-sm font-medium bg-white/5 text-gray-400 font-mono">
                                            {String(index + 1).padStart(2, '0')}
                                        </div>

                                        <div className="space-y-4">
                                            <div className="text-blue-500 font-mono text-xs tracking-widest uppercase">
                                                {project.year} • {project.category}
                                            </div>
                                            <h3 className="text-5xl md:text-6xl font-bold font-outfit text-white leading-tight">
                                                {project.title}
                                            </h3>
                                            <p className="text-lg text-gray-400 leading-relaxed max-w-lg font-outfit">
                                                {project.description}
                                            </p>
                                        </div>

                                        {project.link.startsWith('http') ? (
                                            <motion.a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-gray-900 text-sm font-bold tracking-wide overflow-hidden"
                                                whileHover={{ scale: 1.04 }}
                                                whileTap={{ scale: 0.96 }}
                                                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                                            >
                                                {/* Shimmer sweep */}
                                                <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                                                <span className="relative z-10">VIEW PROJECT</span>
                                                {/* Arrow slide effect */}
                                                <span className="relative z-10 w-4 h-4 overflow-hidden flex items-center">
                                                    <svg className="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-[140%]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                    </svg>
                                                    <svg className="w-4 h-4 flex-shrink-0 absolute -translate-x-[140%] transition-transform duration-300 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                    </svg>
                                                </span>
                                            </motion.a>
                                        ) : (
                                            <motion.div
                                                whileHover={{ scale: 1.04 }}
                                                whileTap={{ scale: 0.96 }}
                                                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                                            >
                                                <Link
                                                    to={project.link}
                                                    className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-gray-900 text-sm font-bold tracking-wide overflow-hidden"
                                                >
                                                    {/* Shimmer sweep */}
                                                    <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                                                    <span className="relative z-10">VIEW PROJECT</span>
                                                    {/* Arrow slide effect */}
                                                    <span className="relative z-10 w-4 h-4 overflow-hidden flex items-center">
                                                        <svg className="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-[140%]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                        </svg>
                                                        <svg className="w-4 h-4 flex-shrink-0 absolute -translate-x-[140%] transition-transform duration-300 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                        </svg>
                                                    </span>
                                                </Link>
                                            </motion.div>
                                        )}
                                    </div>

                                    {/* Right — image */}
                                    <div className="relative h-[320px] lg:h-[480px] w-full rounded-2xl overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="absolute inset-0 w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                        {/* Color tint overlay */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 mix-blend-overlay`} />
                                        {/* Bottom fade */}
                                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
                                    </div>
                                </div>

                                {/* Dark scrim overlay — controlled by scroll (NO blur, just darkness) */}
                                <div
                                    ref={el => { overlayRefs.current[index] = el; }}
                                    className="absolute inset-0 rounded-[2rem] bg-[#05060b] pointer-events-none z-20"
                                    style={{ opacity: 0, transition: 'opacity 0.05s linear' }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
