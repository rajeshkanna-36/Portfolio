import { motion } from "motion/react";
import {
    FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaGitAlt, FaFigma, FaBrain
} from "react-icons/fa";
import {
    SiTypescript, SiNextdotjs, SiTailwindcss, SiRedux, SiExpress,
    SiPostgresql, SiMongodb, SiGraphql, SiAdobexd, SiAdobecreativecloud
} from "react-icons/si";
import { MdDesignServices, MdCode, MdMonitor, MdCloud } from "react-icons/md";
import { useEffect, useState } from "react";

interface SkillItem {
    name: string;
    category: string; // 'Full Stack Development' | 'UI/UX Design'
}

interface SkillNode {
    id: string;
    label: string;
    icon: React.ElementType;
    x: number;
    y: number;
    side: 'left' | 'right';
    color: string;
}

interface BrainNetworkProps {
    allSkills: SkillItem[];
}

const BrainNetwork = ({ allSkills }: BrainNetworkProps) => {
    const [nodes, setNodes] = useState<SkillNode[]>([]);
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);

    // Map skill names to icons
    const getIcon = (name: string) => {
        const iconMap: Record<string, React.ElementType> = {
            'React': FaReact,
            'TypeScript': SiTypescript,
            'Next.js': SiNextdotjs,
            'Vite': FaReact,
            'Tailwind CSS': SiTailwindcss,
            'Redux': SiRedux,
            'Node.js': FaNodeJs,
            'Express': SiExpress,
            'Python': FaPython,
            'PostgreSQL': SiPostgresql,
            'MongoDB': SiMongodb,
            'GraphQL': SiGraphql,
            'Git': FaGitAlt,
            'Docker': FaDocker,
            'AWS': FaAws,
            'Figma': FaFigma,
            'Adobe XD': SiAdobexd,
            'Prototyping': MdDesignServices,
            'Wireframing': MdDesignServices,
            'User Research': MdMonitor,
            'Interaction Design': MdMonitor,
            'Visual Hierarchy': MdDesignServices,
            'Color Theory': SiAdobecreativecloud,
            'Typography': MdCode,
            'Responsive Design': MdMonitor,
            'Accessibility': MdCode,
            'Motion Design': MdDesignServices,
            'CI/CD': MdCloud
        };
        return iconMap[name] || MdCode;
    };

    // Memoize center coordinates
    const centerX = 50; // Percentage
    const centerY = 40; // Shifted slightly DOWN from previous position (35)

    useEffect(() => {
        // Split skills into left and right groups
        // Assuming 'Full Stack Development' maps to left (Logic) and anything else (UI/UX) maps to right
        // Limit to top 5 skills per side as requested by user
        const leftSkills = allSkills.filter(s => s.category === 'Full Stack Development').slice(0, 5);
        const rightSkills = allSkills.filter(s => s.category !== 'Full Stack Development').slice(0, 5);

        const generateSideNodes = (skills: SkillItem[], side: 'left' | 'right') => {
            const angleSpread = Math.PI * 0.85; // Wider spread (~153 degrees)
            const baseAngle = side === 'left' ? Math.PI - (angleSpread / 2) : -(angleSpread / 2);

            return skills.map((skill, index) => {
                // Distribute across 2 orbital layers since we have fewer nodes
                const layer = index % 2;
                // Layers at roughly 30%, 45%, 60% distance
                const layerRadius = 30 + (layer * 15);

                // Calculate angle with uniform distribution across the spread
                const normalizedIndex = (index + 1) / (skills.length + 1);
                const angle = baseAngle + (angleSpread * normalizedIndex);

                // Removed random jitter for a more organized, "clean" look
                const x = centerX + (Math.cos(angle) * (layerRadius * (side === 'left' ? 1.4 : 1.4)));
                const y = centerY + Math.sin(angle) * layerRadius;

                return {
                    id: skill.name,
                    label: skill.name,
                    icon: getIcon(skill.name),
                    x: Math.max(5, Math.min(95, x)), // Clamp to safe area
                    y: Math.max(10, Math.min(90, y)),
                    side: side,
                    color: side === 'left' ? '#3b82f6' : '#a855f7' // Blue vs Purple
                } as SkillNode;
            });
        };

        const leftNodes = generateSideNodes(leftSkills, 'left');
        const rightNodes = generateSideNodes(rightSkills, 'right');

        setNodes([...leftNodes, ...rightNodes]);
    }, [allSkills]);

    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-transparent">
            {/* Helper text for brain sides - Increased visibility via opacity and color */}
            <div className="absolute top-2 left-10 md:left-20 text-blue-400 text-xs md:text-sm font-bold font-mono tracking-[0.2em] uppercase drop-shadow-lg">Logic / Backend</div>
            <div className="absolute top-2 right-10 md:right-20 text-purple-400 text-xs md:text-sm font-bold font-mono tracking-[0.2em] uppercase drop-shadow-lg">Creativity / Design</div>

            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Draw connections first so they follow z-index behind nodes */}
                {nodes.map((node) => {
                    // Control points for Bezier curve to make it look like a wire
                    const cp1X = node.side === 'left' ? centerX - 10 : centerX + 10;
                    // Since SVG is 100x100 and nodes are in %, we can directly use the coordinates
                    const pathD = `M${centerX},${centerY} C${cp1X},${centerY} ${node.x},${node.y} ${node.x},${node.y}`;

                    return (
                        <motion.path
                            key={`wire-${node.id}`}
                            d={pathD}
                            fill="none"
                            stroke={node.color}
                            strokeWidth="1.2" // Increased thickness for visibility
                            strokeOpacity="0.5" // Increased opacity
                            vectorEffect="non-scaling-stroke"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{
                                pathLength: 1,
                                opacity: hoveredNode === node.id ? 0.9 : 0.5,
                                strokeWidth: hoveredNode === node.id ? 2.5 : 1.2
                            }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                    );
                })}
                {/* Animated Pulses on wires */}
                {nodes.map((node, i) => {
                    const cp1X = node.side === 'left' ? centerX - 10 : centerX + 10;
                    const pathD = `M${centerX},${centerY} C${cp1X},${centerY} ${node.x},${node.y} ${node.x},${node.y}`;
                    return (
                        <motion.path
                            key={`pulse-${node.id}`}
                            d={pathD}
                            fill="none"
                            stroke={node.color}
                            strokeWidth="2" // Thicker pulse
                            strokeLinecap="round"
                            vectorEffect="non-scaling-stroke"
                            initial={{ pathLength: 0, opacity: 0, pathOffset: 0 }}
                            animate={{
                                pathLength: [0, 0.1, 0],
                                pathOffset: [0, 1, 1],
                                opacity: [0, 1, 0]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                                delay: i * 0.1 // Stagger pulses
                            }}
                        />
                    )
                })}
            </svg>

            {/* Central Brain Node */}
            <motion.div
                className="absolute z-20 flex items-center justify-center"
                style={{
                    left: `${centerX}%`,
                    top: `${centerY}%`,
                    x: '-50%',
                    y: '-50%'
                }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-slate-900 border border-slate-700 shadow-2xl flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-purple-900/40"></div>
                    {/* Split Brain Visual */}
                    <div className="relative flex gap-1 text-5xl md:text-6xl text-slate-200">
                        <FaBrain className="drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
                    </div>

                    {/* Glowing ring */}
                    <div className="absolute inset-0 rounded-full border border-white/10 animate-ping opacity-20 duration-[3000ms]"></div>
                </div>
            </motion.div>

            {/* Skill Nodes */}
            {nodes.map((node, i) => (
                <motion.div
                    key={node.id}
                    className="absolute z-30 cursor-pointer flex flex-col items-center justify-center group"
                    style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                        x: '-50%',
                        y: '-50%'
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, y: ["-50%", "-45%", "-50%"] }} // Floating effect (relative to base y)
                    transition={{
                        delay: i * 0.05,
                        y: { duration: 3 + Math.random(), repeat: Infinity, ease: "easeInOut" }
                    }}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                >
                    <div
                        className={`relative w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center border transition-all duration-300 backdrop-blur-md
                        ${hoveredNode === node.id
                                ? `border-white bg-${node.side === 'left' ? 'blue' : 'purple'}-600/20 shadow-[0_0_20px_${node.color}] scale-110`
                                : 'border-white/10 bg-slate-800/60 hover:border-white/30'
                            }`}
                    >
                        <node.icon className={`text-xl md:text-3xl transition-colors duration-300 ${hoveredNode === node.id ? 'text-white' : (node.side === 'left' ? 'text-blue-400' : 'text-purple-400')}`} />
                    </div>

                    {/* Label - visible on hover or always for better UX? Let's keep it visible but subtle */}
                    <motion.span
                        className={`mt-2 text-[10px] md:text-xs font-medium px-2 py-1 rounded-full border border-white/5 bg-black/50 backdrop-blur-sm transition-colors duration-300
                         ${hoveredNode === node.id ? 'text-white border-white/30' : 'text-slate-400'}`}
                    >
                        {node.label}
                    </motion.span>
                </motion.div>
            ))}
        </div>
    );
};

export default BrainNetwork;
