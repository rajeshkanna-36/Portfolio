import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

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

const Projects = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            cardRefs.current.forEach((card, index) => {
                if (!card) return;
                const nextCard = cardRefs.current[index + 1];
                if (nextCard) {
                    const rect = card.getBoundingClientRect();
                    const nextRect = nextCard.getBoundingClientRect();
                    const nextCardTop = nextRect.top;
                    const dist = nextCardTop - rect.top;
                    const height = card.clientHeight;

                    if (dist < height) {
                        const progress = 1 - (dist / height);
                        const targetScale = 1 - (progress * 0.05);
                        const targetOpacity = 1 - (progress * 0.3);
                        const targetBlur = progress * 10;

                        card.style.transform = `scale(${Math.max(0.9, targetScale)})`;
                        card.style.filter = `blur(${targetBlur}px) brightness(${targetOpacity})`;
                    } else {
                        card.style.transform = 'scale(1)';
                        card.style.filter = 'none';
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div ref={containerRef} className="pt-24 min-h-screen bg-[#05060b] text-gray-100 p-8 px-4 sm:px-6 lg:px-8 relative font-outfit">
            {/* Background Layers */}
            <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
                {/* Visual Grid */}
                <div className="absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
                        backgroundSize: '120px 120px'
                    }}
                />

                {/* Ambient Glows */}
                <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-blue-500/15 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full" />

                {/* Cyber Scan Line */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/5 to-transparent h-[500px] w-full animate-scan pointer-events-none" />
            </div>

            <div className="max-w-6xl mx-auto mb-24 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-blue-500 font-bold tracking-wider uppercase mb-4 text-sm font-mono opacity-80">My Work</h2>
                    <h1 className="text-4xl md:text-6xl font-black font-outfit text-white mb-6 tracking-tighter uppercase leading-none">
                        Designs That Blend <br />
                        <span className="italic font-serif text-blue-500 lowercase first-letter:uppercase">Creativity</span> &amp; Functionality
                    </h1>
                </div>

                <div className="flex flex-col gap-12 relative">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            ref={el => { cardRefs.current[index] = el; }}
                            className={`sticky transition-all duration-500 ease-out`}
                            style={{
                                top: `${120 + (index * 20)}px`,
                                marginBottom: `${index === projects.length - 1 ? '100px' : '0px'}`,
                                zIndex: index + 1
                            }}
                        >
                            <div className="glass-panel rounded-[2rem] p-8 md:p-12 border border-white/10 shadow-2xl overflow-hidden relative group bg-black/40 backdrop-blur-3xl">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                                    <div className="space-y-8">
                                        <div className="border border-white/20 rounded-full px-4 py-1 w-fit text-sm font-medium bg-white/5 backdrop-blur-md text-gray-400">
                                            {String(index + 1).padStart(2, '0')}
                                        </div>

                                        <div className="space-y-4">
                                            <div className="text-blue-500 font-mono text-sm tracking-widest uppercase">{project.year} • {project.category}</div>
                                            <h3 className="text-4xl md:text-5xl font-bold font-outfit text-white group-hover:text-blue-500 transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-lg text-gray-400 leading-relaxed max-w-md font-outfit">
                                                {project.description}
                                            </p>
                                        </div>

                                        {project.link.startsWith('http') ? (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-gray-900 font-bold hover:scale-105 transition-transform duration-300"
                                            >
                                                VIEW PROJECT
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                            </a>
                                        ) : (
                                            <Link
                                                to={project.link}
                                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-gray-900 font-bold hover:scale-105 transition-transform duration-300"
                                            >
                                                VIEW PROJECT
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                            </Link>
                                        )}
                                    </div>

                                    <div className="relative h-[300px] lg:h-[400px] w-full rounded-2xl overflow-hidden shadow-inner group-hover:shadow-2xl transition-all duration-500">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${project.color} mix-blend-overlay`}></div>
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>

                                        <div className="absolute bottom-6 right-6 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                            <div className="flex gap-2">
                                                <div className="w-3 h-3 rounded-full bg-white/50"></div>
                                                <div className="w-3 h-3 rounded-full bg-white/50"></div>
                                                <div className="w-3 h-3 rounded-full bg-white"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes scan {
                    0% { transform: translateY(-100%); opacity: 0; }
                    50% { opacity: 0.2; }
                    100% { transform: translateY(100vh); opacity: 0; }
                }
                .animate-scan {
                    animation: scan 15s linear infinite;
                }
                .glass-panel {
                    backdrop-filter: blur(40px) saturate(200%);
                    -webkit-backdrop-filter: blur(40px) saturate(200%);
                }
            `}</style>
        </div>
    );
};

export default Projects;
