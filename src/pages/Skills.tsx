import { useRef, useEffect } from 'react';

const skills = [
    {
        category: 'Full Stack Development',
        description: 'Building robust, scalable applications from front to back.',
        items: [
            'React', 'TypeScript', 'Next.js', 'Vite', 'Tailwind CSS', 'Redux',
            'Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL',
            'Git', 'Docker', 'AWS', 'CI/CD'
        ],
        color: 'from-blue-400 to-cyan-300',
        delay: '0ms'
    },
    {
        category: 'UI/UX Design',
        description: 'Crafting intuitive, user-centric interfaces with pixel-perfect precision.',
        items: [
            'Figma', 'Adobe XD', 'Prototyping', 'Wireframing', 'User Research',
            'Interaction Design', 'Visual Hierarchy', 'Color Theory', 'Typography',
            'Responsive Design', 'Accessibility', 'Motion Design'
        ],
        color: 'from-purple-400 to-pink-300',
        delay: '200ms'
    }
];

const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Optional: Add simple entrance animations if desired
    }, []);

    return (
        <div ref={containerRef} className="min-h-screen md:h-screen bg-slate-950 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950 text-gray-900 dark:text-gray-100 p-4 pt-24 pb-8 md:pb-12 relative overflow-y-auto md:overflow-hidden flex flex-col">
            {/* Large Grid Background */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                    backgroundSize: '100px 100px'
                }}>
            </div>

            <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col relative z-10 min-h-0">
                <div className="text-center mb-4 flex-shrink-0 animate-fade-in-up">
                    <h2 className="text-blue-500 font-bold tracking-wider uppercase mb-2 text-sm font-mono">My Arsenal</h2>
                    <h1 className="text-4xl md:text-5xl font-bold font-karla text-gray-900 dark:text-white mb-6">
                        Core <span className="italic font-serif text-blue-600 dark:text-blue-400">Competencies</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 flex-grow min-h-0">
                    {skills.map((skillGroup) => (
                        <div
                            key={skillGroup.category}
                            className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl hover:bg-white/10 transition-all duration-700 group flex flex-col h-auto md:h-full relative overflow-hidden"
                            style={{ animationDelay: skillGroup.delay }}
                        >
                            {/* Background Glow */}
                            <div className={`absolute top-0 right-0 p-32 bg-gradient-to-br ${skillGroup.color} opacity-10 blur-[100px] rounded-full pointer-events-none group-hover:opacity-20 transition-opacity duration-700`}></div>

                            <div className="relative z-10 flex flex-col h-auto md:h-full md:min-h-0">
                                <div className="mb-8">
                                    <h3 className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r ${skillGroup.color} bg-clip-text text-transparent`}>
                                        {skillGroup.category}
                                    </h3>
                                    <p className="text-lg text-slate-400 font-source leading-relaxed max-w-md">
                                        {skillGroup.description}
                                    </p>
                                </div>

                                <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
                                    <div className="flex flex-wrap gap-3 content-start">
                                        {skillGroup.items.map((item, i) => (
                                            <span
                                                key={item}
                                                className="px-5 py-2.5 rounded-full bg-slate-900/40 border border-white/5 text-slate-300 font-medium text-sm md:text-base group-hover:border-white/20 group-hover:bg-white/5 group-hover:text-white transition-all duration-300 hover:scale-105 transform cursor-default"
                                                style={{ transitionDelay: `${i * 30}ms` }}
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Decorative Line */}
                                <div className={`mt-8 h-1 w-24 bg-gradient-to-r ${skillGroup.color} rounded-full opacity-50 group-hover:w-full transition-all duration-1000 ease-out`}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
