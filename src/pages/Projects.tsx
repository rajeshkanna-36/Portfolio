
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const projects = [
    {
        id: 1,
        title: 'Brand Landing page',
        category: 'Tech • Web Design',
        description: 'A modern, high-conversion landing page designed for a tech brand, featuring dynamic interactions and a premium aesthetic.',
        year: '2025',
        link: 'https://www.figma.com/proto/R1YF9zrvpyDoIA7u7RYexb/KodeX-Web-Design?node-id=104-2&t=Bas4TS4aCwqSRh17-1',
        color: 'from-blue-400 to-cyan-300',
        image: project1,
    },
    {
        id: 2,
        title: 'Swayam App Redesign',
        category: 'Tech • Mobile Application',
        description: 'A comprehensive redesign of the Swayam educational platform to enhance user experience and accessibility for learners nationwide.',
        year: '2024',
        link: 'https://www.figma.com/proto/wPk0H1HLvb9n0REKpGxcMw/Swayam?node-id=16-39&t=Bas4TS4aCwqSRh17-1',
        color: 'from-emerald-400 to-teal-300',
        image: project2,
    },
    {
        id: 3,
        title: 'Automobile brand shop',
        category: 'E-commerce • Web App',
        description: 'A premium shopping experience featuring immersive product displays and a seamless, high-conversion checkout flow.',
        year: '2025',
        link: 'https://atuomobile-brand-shop.web.app/Login',
        color: 'from-purple-400 to-pink-300',
        image: project3,
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

                // Simple stacking logic usually handled by CSS sticky, but for scaling:
                // We want previous cards to scale down as next cards overlap them.

                // Get the top position of the next card relative to the viewport
                const nextCard = cardRefs.current[index + 1];
                if (nextCard) {
                    const rect = card.getBoundingClientRect();
                    const nextRect = nextCard.getBoundingClientRect();

                    // Logic: If next card is rising and overlapping this card
                    // Calculate overlap amount

                    // If there is overlap, scale down the current card
                    // However, with sticky, the top is fixed. 
                    // Let's rely on the distance of the *next* card from the viewport bottom or top.

                    // Actually, simpler dynamic scale:
                    // As the card moves up (sticky), it stays `top: X`.
                    // The next card comes up.
                    // We can map the `top` of the next card to the scale of the current card.

                    const nextCardTop = nextRect.top;

                    // Start scaling when next card enters the bottom half of the screen?
                    // Or simply: 
                    // Calculate how far the next card is from its "stuck" position.

                    // Let's try a simpler approach often used in these "stack" components:
                    // Scale = 1 - (index_of_card_above * 0.05) 
                    // But we want smooth transition.

                    // Let's try calculating scale based on how close the next card is to overlapping.
                    // Sticky cards are always at fixed 'top'.
                    // Next card 'top' is variable.

                    const dist = nextCardTop - rect.top;
                    // Max distance is roughly the card height.
                    const height = card.clientHeight;

                    if (dist < height) {
                        const progress = 1 - (dist / height); // 0 when far, 1 when fully overlapped
                        // When fully overlapped, scale should be smaller, say 0.9.
                        // progress goes from 0 to 1.
                        const targetScale = 1 - (progress * 0.05); // Scales down to 0.95
                        const targetOpacity = 1 - (progress * 0.3); // Fades to 0.7 - Stronger fade
                        const targetBlur = progress * 10; // Stronger blur - max 10px

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
        <div ref={containerRef} className="pt-24 min-h-screen bg-slate-950 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950 text-gray-900 dark:text-gray-100 p-8 px-4 sm:px-6 lg:px-8 relative">
            {/* Large Grid Background */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                    backgroundSize: '100px 100px'
                }}>
            </div>
            <div className="max-w-6xl mx-auto mb-24">
                <div className="text-center mb-20 animate-fade-in-up">
                    <h2 className="text-blue-500 font-bold tracking-wider uppercase mb-4 text-sm font-mono">My Work</h2>
                    <h1 className="text-5xl md:text-7xl font-bold font-karla text-gray-900 dark:text-white mb-6">
                        Designs That Blend <br />
                        <span className="italic font-serif text-blue-600 dark:text-blue-400">Creativity</span> &amp; Functionality
                    </h1>
                </div>

                <div className="flex flex-col gap-12 relative">
                    {/* Using a large gap, but sticky will collapse it visualy */}
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
                            <div className="glass-panel rounded-[2rem] p-8 md:p-12 border border-white/20 shadow-2xl overflow-hidden relative group">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                                    <div className="space-y-8">
                                        <div className="border border-white/30 rounded-full px-4 py-1 w-fit text-sm font-medium bg-white/10 backdrop-blur-md">
                                            {String(index + 1).padStart(2, '0')}
                                        </div>

                                        <div className="space-y-4">
                                            <div className="text-blue-500 font-mono text-sm tracking-widest uppercase">{project.year} • {project.category}</div>
                                            <h3 className="text-4xl md:text-5xl font-bold font-karla text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-md font-source">
                                                {project.description}
                                            </p>
                                        </div>

                                        {project.link.startsWith('http') ? (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold hover:scale-105 transition-transform duration-300"
                                            >
                                                VIEW PROJECT
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                            </a>
                                        ) : (
                                            <Link
                                                to={project.link}
                                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold hover:scale-105 transition-transform duration-300"
                                            >
                                                VIEW PROJECT
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                            </Link>
                                        )}
                                    </div>

                                    <div className="relative h-[300px] lg:h-[400px] w-full rounded-2xl overflow-hidden shadow-inner group-hover:shadow-2xl transition-all duration-500">
                                        {/* Image Background */}
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />

                                        {/* Overlay Gradient */}
                                        <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${project.color} mix-blend-overlay`}></div>

                                        {/* Glass Overlay on Image (Optional aesthetics) */}
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>

                                        {/* Floating Elements/Icons could go here for "liquid" feel */}
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
        </div>
    );
};

export default Projects;
