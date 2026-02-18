import { useRef } from 'react';
import BrainNetwork from '../components/BrainNetwork';

const skills = [
    {
        category: 'Full Stack Development',
        description: 'Building robust, scalable applications from front to back.',
        items: [
            'Java', 'Python', 'C', 'Spring Boot', 'React', 'Node.js', 'Express',
            'Redux', 'PostgreSQL', 'MongoDB', 'GraphQL', 'AWS', 'Docker', 'Git', 'CI/CD'
        ],
        theme: 'blue'
    },
    {
        category: 'UI/UX Design',
        description: 'Crafting intuitive, user-centric interfaces with pixel-perfect precision.',
        items: [
            'Figma', 'Adobe XD', 'Prototyping', 'Wireframing', 'User Research',
            'Interaction Design', 'Visual Hierarchy', 'Color Theory', 'Typography',
            'Responsive Design', 'Accessibility', 'Motion Design'
        ],
        theme: 'purple'
    }
];

const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const allSkills = skills.flatMap(group =>
        group.items.map(item => ({
            name: item,
            category: group.category
        }))
    );

    return (
        <div ref={containerRef} className="h-screen bg-black text-white p-4 pt-16 md:pt-20 pb-4 relative overflow-hidden flex flex-col font-outfit uppercase tracking-tight">
            {/* Cinematic "Glowing X" Background */}
            <div className="absolute inset-0 pointer-events-none select-none z-0">
                {/* Diagonal Laser 1: Blue (Top-Left to Bottom-Right) */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[150%] h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent rotate-45 opacity-60 shadow-[0_0_20px_#3b82f6] blur-[1px]" />
                    <div className="absolute w-[150%] h-[80px] bg-blue-500/10 rotate-45 blur-[50px] opacity-40" />
                </div>

                {/* Diagonal Laser 2: Green (Top-Right to Bottom-Left) */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[150%] h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent -rotate-45 opacity-60 shadow-[0_0_20px_#10b981] blur-[1px]" />
                    <div className="absolute w-[150%] h-[80px] bg-emerald-500/10 -rotate-45 blur-[50px] opacity-40" />
                </div>

                {/* Central Intersection Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {/* The "Diamond" Core */}
                    <div className="w-16 h-16 bg-white rotate-45 blur-[2px] shadow-[0_0_60px_white] opacity-90 animate-pulse" />
                    {/* Outer Radial Bloom */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/20 rounded-full blur-[60px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
                </div>

                {/* Ambient Atmospheric Glows */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col relative z-20 min-h-0">
                <div className="text-center mb-2 flex-shrink-0">
                    <h2 className="text-blue-400 font-bold tracking-[0.3em] uppercase mb-1 text-xs md:text-sm font-mono opacity-80">System_Arsenal</h2>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-2 leading-none tracking-tighter uppercase">
                        Core <span className="italic font-serif text-blue-500 lowercase first-letter:uppercase">Competencies</span>
                    </h1>
                </div>

                <div className="flex-grow min-h-0 relative">
                    <BrainNetwork allSkills={allSkills} />
                </div>
            </div>
        </div>
    );
};

export default Skills;
