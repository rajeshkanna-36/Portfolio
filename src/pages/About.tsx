import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaMicrochip } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const nodes = [
        {
            id: 'edu-2',
            type: 'education',
            title: 'High School',
            org: 'Shanthi Nikethan',
            date: '2021-22',
            desc: 'CS Foundations',
            icon: <FaMicrochip />,
            color: 'purple',
            pos: { x: '12%', y: '82%' },
            packetPos: 'right'
        },
        {
            id: 'edu-1',
            type: 'education',
            title: 'B.Tech IT',
            org: 'Muthayammal Engg',
            date: '2022-26',
            desc: 'Architecture & Systems',
            icon: <FaGraduationCap />,
            color: 'cyan',
            pos: { x: '30%', y: '30%' },
            packetPos: 'right'
        },
        {
            id: 'exp-1',
            type: 'experience',
            title: 'Java Internship',
            org: 'Odugaa Tech',
            date: '2024-25',
            desc: 'Backend & APIs',
            icon: <FaBriefcase />,
            color: 'blue',
            pos: { x: '75%', y: '82%' },
            packetPos: 'left'
        }
    ];

    const leetcodeStats = {
        total: 350,
        rank: 'Top 5%',
        pos: { x: '88%', y: '25%' }
    };

    return (
        <div ref={containerRef} className="h-screen bg-[#05060b] text-gray-100 relative overflow-hidden pt-12 pb-8 px-4 font-outfit uppercase tracking-tight">
            {/* Background Layers */}
            <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
                {/* Visual Grid */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
                        backgroundSize: '120px 120px'
                    }}
                />

                {/* HIGH-FIDELITY WORLD MAP Background */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] scale-[1.3] md:scale-[1.1]">
                    <svg viewBox="30.767 241.591 784.077 458.627" className="w-full h-full text-blue-500" fill="currentColor">
                        <path d="M151.767,281.182l1.72,2.602l0.864,3.475l4.305,1.081l3.017-3.25l2.585,1.306l7.321,0.647l5.169-2.17l0.864,7.157h3.017v-3.034l3.017,0.216l7.538,8.895l4.953,3.035l-2.584,4.123l1.081,1.081l9.673,1.953l0.216,4.34l2.585,0.433l0.648-6.51l4.089-1.08l3.017,4.556l6.457,3.034l3.233,0.647l2.152-2.602l0.216-4.124l3.873-2.387l1.288,3.476l-3.449,6.077l0.432,3.033l1.937-3.033l3.873-3.475l0.216-4.556l-2.152-3.476l0.648-2.817l5.169-2.603l2.369,1.738l0.432,15.188l3.657-3.25l2.152,1.305l-3.017,5.204l3.873,0.865l5.602-8.679l4.737,4.986l-1.936,8.895l-4.737,2.603l-4.521-2.169l-8.177,1.736l0.864,2.818l-2.152,3.476l-6.673,1.521l-7.538,5.86l-6.673,8.896l-0.864,2.817l4.521,1.737l1.72,4.339l6.241,6.293l9.906,4.339l-2.152,9.975l-0.216,2.818l2.585,1.736l3.449-4.555l0.432-8.679l5.385-0.216l2.584-4.988l0.433-7.589l6.889-13.45l8.609,3.034l4.521,6.293l-1.937,6.292l3.449,1.954l8.394-5.646l2.368,15.404l7.754,9.327l0.216,4.771l-8.609,2.17l-4.088,4.338l-8.609-1.953l-4.305-0.217l-7.538,5.86l4.521-1.081l5.601-1.08l1.081,1.305l-1.504,4.771l0.216,4.34l2.585,1.736l2.584-0.648l1.296-1.953h1.72l-2.801,5.205l-5.385,0.215l-2.368,3.476h-3.017l-0.864-2.603l4.305-4.338l-5.169,1.737l-0.233-7.374l-1.487-0.863l-4.521,1.953l-0.432,3.691h-10.338l-8.832,6.08l-11.842,3.908l-1.288-1.738l5.964-8.902l-3.388-3.261l-2.152-4.132l-4.383-3.346l-4.702-0.389l-8.428-5.904l-61.122-10.043l-1.011-4.142l-5.602-5.204v-4.339l0.865-3.907l-0.433-2.168l-2.152-2.171l-0.432-3.475l5.602-3.908l-3.449-18.653l-4.737-0.217l-4.305-5.645L151.767,281.182z M143.589,375.989l-0.865,3.475l-3.017-1.954h-1.504l-0.865,3.691l-10.554,23.65l2.801,20.606l3.449,1.737l0.648,5.645h7.105l6.889,5.204l13.562,1.305l1.504,6.941l2.152,1.521l3.017-3.033l2.369,1.08l2.152,9.976l3.656,2.386l3.017-5.645l9.258-6.726l6.025,2.817l5.169,0.433l0.216-3.25l10.762,0.217l2.152,2.386l0.432,5.42l-1.288,3.034l1.504,5.203h3.233l3.232-4.987l-1.288-2.386l-1.288-5.204l1.936-5.86l8.826-7.59l6.673-1.953l-0.864-6.293l9.258-9.983l9.258-1.521l-1.504-5.193l9.042-5.205v-6.94l-0.865-0.433l-3.233,1.082l-0.432,4.252l-10.745,0.129l-8.419,5.594l-13.217,4.322l-2.109-2.586l5.999-9.076l-2.965-2.826l-2.014-3.838l-4.175-3.354l-4.538-0.38l-8.575-5.852L143.589,375.989L143.589,375.989z" />
                        <path d="M286.631,618.464l5.402-10.391l0.198-8.73l10.079-6.501h5.645l4.435-7.512l0.804-14.418l-1.815-3.855l10.684-9.751l0.406-10.761l-14.514-7.105l-17.53-5.48l-8.264-0.812l2.221-4.669l-0.604-7.104l-1.808-0.596l-2.671,5.308l-1.4,1.754l-3.595-1.59l-12.093,4.261l-4.028-5.073l0.648-5.299l-3.804,3.872l-4.201-2.265l-0.424,0.597l0.009,1.841l3.622,1.945l-5.437,5.73l-3.432-0.034l-3.475-3.535l-3.933,0.121l-0.484,4.2l2.256,2.739l-2.663,8.532l-3.112,0.241l-4.953,3.13l-1.21,6.146l4.296,4.599l0.787-0.89l3.017-0.812l2.576,4.34l7.374-3.164l2.861,0.165l1.971,6.976l10.52,3.337l1.815,5.564l4.478,0.537l2.135,5.314l-1.443,4.729l1.884,2.474l-0.276,3.683l5.048-0.477l4.625,5.844l-0.363,4.105l2.74,2.316l-6.57,9.95L286.631,618.464L286.631,618.464z" />
                        <path d="M722.059,302.16l1.522,5.256l3.043,0.873l3.042-4.814l-1.737-3.285l0.648-2.845h4.563l-1.09,2.188l0.434,7.883l-6.519,16.199l0.648,3.501l-0.216,5.912l12.161,17.729l2.387,0.657l0.216-14.443l2.386-2.188l-2.61-5.688l2.171-2.412l-4.78-6.346l-2.611,0.217l-0.865-10.503l6.734-1.755l0.432-3.068l3.478-0.873l1.953,1.756l2.386-9.631l4.124-7l3.259-1.756l2.827,0.217v-3.285l-4.563-0.873l-6.302-5.256l3.044-3.5l-2.61-5.913l2.169-2.187l2.61,3.5l6.519,2.411l7.166,0.657l0.873-3.061l-3.69-3.717l4.123-5.688l-9.345-3.285l-2.386,4.814l-3.043-3.941l-17.158-5.913l-16.295,2.844l-2.387,1.314v1.313l3.476,1.756l-0.434,4.157l-6.301-2.628l-13.898,5.473l-2.388-5.031h-9.561l-4.349,4.599l-15.421-3.501l-14.115,2.844l-1.737,4.375l2.17,0.656l-0.216,3.285l-13.685,1.529l0.873,4.375l-12.604-2.188l3.044-5.688l-12.819-0.657l1.089,5.913l-4.123,1.971l-3.476-3.285l-14.116,2.412l-5.428,5.031l-0.217,3.06l-3.476,0.216l-0.433-3.5l11.082-9.629v-6.57l-7.166-1.971l-9.345,3.061l-3.907-3.942h-1.737l-2.171,4.374l1.738,1.971l-12.388,6.787l-10.642,8.1l-6.519,8.972v3.717l6.949,2.845l-3.475,2.627l-7.382-2.627l-3.044,2.627l-4.563-5.256l-0.873,1.972l4.996,15.758l1.305,0.44l3.478-1.754l1.736,1.313v2.844l-3.259-1.313l-1.955,1.529l1.308,2.844l-1.09,7.443l-6.734,0.657l-0.432-2.412l3.907-2.411l0.873-6.57l-4.349-5.688l-1.521-9.846l-6.948-1.098l-0.648,3.5l1.305,1.754l-2.825,2.412l1.089,6.57l4.124,1.755l0.873,4.814l-4.133-2.627l-10.641-1.972l-1.306,3.502l-8.473,3.06l-1.305-2.187l-11.082,6.127l-0.216,4.158l-4.348,0.657l1.306-3.06v-3.061l-4.349-1.529l-2.826,1.098l2.386,4.599l1.737,3.06v2.412l-3.26-0.656l-0.647-0.657l-3.26,3.501l1.737,3.061l-7.383-0.217l2.387,3.069l-0.647,1.313h-3.907l-2.827-1.971l-0.647-5.472l-4.563-1.755v-2.187l9.561,1.972l5.213,0.44l2.17-3.285l-1.954-3.501l-13.899-5.472l-4.798,1.192l-1.642,1.41l0.511,3.24l2.039,0.354l-0.476,5.101l6.293,14.781l-4.548,7.209l-0.312,1.625l2.309,1.625l-2.084,1.375l-1.383,0.026l0.26,6.353l1.91,2.706l0.026,2.627l2.446,0.225l3.741,1.426l3.959,5.446l0.045,1.435l-1.288,2.205l2.956-0.164l2.878,0.83l3.891,5.506l9.577,0.873l-0.415,6.552l-3.301,2.827l0.683,1.105l-3.26,3.502l-0.864,3.284l1.954,2.845l6.301,2.187l2.611-1.53l16.727,6.346l0.648-1.756l-3.476-3.283v-4.158l-2.171-0.657l0.434-3.5l3.476-4.158l-6.231-4.667l0.432-6.492l6.665-4.383l7.822,0.441l1.306,2.412l8.04,0.44l5.869-3.284l-3.044-3.285l0.647-6.129l15.205-7.442l11.695,5.272l3.907-3.5l11.514,10.942l8.688-0.873l3.044,3.06l8.255,0.873l5.429-7.441l6.949,3.068l3.69,0.658l3.692-3.285l-3.26-2.188l2.827-4.374l8.039,2.628l1.736,3.501l3.477,0.216l2.17-1.529l5.869-0.217l0.647,1.53l6.733,0.44l4.562-4.814l9.345,1.098l2.827-1.098l0.864-5.256l-2.826-6.346l2.826-2.411h8.904l8.471,10.069l10.857,6.129h3.26l0.432-2.627l3.907-2.412l0.433,14.228l-3.475,0.216v3.5l1.953,2.412l-0.363,3.129l1.443,0.598l0.874-2.188l1.306,0.441l0.864,0.873l3.907-0.873l3.906-11.385l0.434-14.229l-4.996-11.385l-6.301-7.657l-3.044,0.44v2.412l-7.382-2.845l2.826-6.128l2.387-16.199l9.992-3.06l4.779-3.06h5.213l-1.312,1.754l1.306,2.188l4.563-4.814l2.609,0.215l-0.432-2.844l-4.132-0.873l2.827-10.287L722.059,302.16z" />
                        <path d="M424.625,435.764l-3.526-1.186l-14.677,2.758l-3.198,2.429l1.953,10.088l-5.835,0.233l-3.509,5.646l-8.359,2.005l0.025,4.105l27.532,21.048l4.692,0.398l15.654-12.231l-1.565-1.971l-2.938-0.398l-1.764-2.955V453.5l-1.177-1.184l0.199-3.155l-3.13-3.155l-0.389-3.354l1.366-0.986l-0.59-3.553L424.625,435.764L424.625,435.764z" />
                        <path d="M476.731,588.02l-6.829,6.311l-1.625,3.898l-5.411-0.674l-4.503,4.002l-2.991-0.294l0.241-5.531l-1.062-0.372l-0.743,11.314l-5.308-0.052l-1.6-1.886l-2.344-0.024l2.137,6.129l3.812,3.604l-2.723,3.172l1.764,3.977l4.08,1.558l3.25-2.767l9.311,0.053l0.667-0.83l4.132-0.728l13.978-13.917l-0.053-4.382l-1.495,1.937h-2.238l-2.723-2.282l1.383-3.44l2.378-0.482l-0.217-7.071L476.731,588.02z" />
                        <path d="M595,509.688l3.958-1.938l2.352-8.505l-0.104-10.441l13.468-14.54v-3.447l2.774-1.081l-0.104-3.984l-2.991-5.817l1.712-3.121l3.742,3.449l4.808,0.216v1.938l-1.495,1.616l0.318,0.863l2.567,0.104l0.536,2.904h0.752l1.928-3.449l0.958-9.042l3.207-2.265l0.104-3.12l-1.279-2.481l-2.031-0.104l-7.951,5.256l0.5,3.38l-5.584-0.019l-1.97-2.41l-1.072,0.138l0.363,3.354l-12.075-0.863l-7.485-3.337l-0.397-4.106l-4.988-3.094l-0.06-6.371l-3.423-3.916l-7.867,0.752l0.855,3.424l3.854,3.12l-6.665,13.641l-4.46,0.337l-0.734,1.644l4.392,4.062l-0.216,4.105l-4.486-0.069l-0.484,2.04l3.727-0.164l0.104,1.616l-2.671,1.4l1.711,3.232l3.312,1.08l2.031-1.504l0.959-2.688l1.177-0.535l1.392,1.398l-0.424,3.449l-0.96,1.617l0.217,2.8L595,509.688z" />
                        <path d="M672.961,609.067l-0.303,21.938l-3.371,2.472l-0.303,2.161l4.598,3.086l11.35-2.161h5.826l2.145-3.095l12.879-2.472l9.198,2.784l-0.614,3.708l1.228,3.708l7.055-1.236l0.303,1.851l-4.599,3.396l1.53,1.236l3.37-1.236l-0.917,10.2l6.44,4.944l3.683-1.236l1.841,1.852l10.735-1.548l10.123-16.381l3.682-0.925l7.357-13.596l1.841-11.739l-4.599-5.869l1.842-1.236l-3.684-11.436l-3.984-2.783l0.614-15.448l-3.684-2.782l-0.916-8.652h-1.842l-6.138,20.392l-3.37,0.312l-7.668-7.728l4.297-11.437l-7.971-1.547l-8.896,2.472l-2.454,7.104l-3.984,0.925l-0.304-4.944l-16.252,9.889l0.304,3.708l-2.454,3.397h-6.139l-13.19,5.56L672.961,609.067z" />
                    </svg>
                </div>

                {/* Cyber Scan Line */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/5 to-transparent h-[500px] w-full animate-scan pointer-events-none" />
            </div>

            <div className="max-w-7xl mx-auto h-full flex flex-col relative z-20">
                {/* Heading Section */}
                <div className="mt-8 md:mt-10 mb-2 px-8">
                    <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}>
                        <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase text-white/90 leading-none">
                            My <span className="text-blue-500 italic font-serif not-uppercase lowercase first-letter:uppercase">Journey</span>
                        </h1>
                        <div className="h-1.5 w-40 bg-blue-600/80 mt-3 rounded-full relative overflow-hidden">
                            <motion.div
                                className="absolute inset-0 bg-white"
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                            />
                        </div>
                    </motion.div>
                </div>

                {/* COORDINATED Map Interface - "EXTREME SPREAD" ARRANGEMENT */}
                <div className="relative flex-grow w-full">
                    {/* SVG Connections */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                        <defs>
                            <linearGradient id="journeyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#a855f7" />
                                <stop offset="50%" stopColor="#3b82f6" />
                                <stop offset="100%" stopColor="#06b6d4" />
                            </linearGradient>
                            <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="8" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                        </defs>

                        <motion.path
                            d="M 12% 82% L 12% 30% L 30% 30%"
                            stroke="url(#journeyGrad)"
                            strokeWidth="3"
                            fill="none"
                            filter="url(#nodeGlow)"
                            className="opacity-40"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2.5, ease: "easeInOut" }}
                        />

                        <motion.path
                            d="M 30% 30% L 75% 30% L 75% 82%"
                            stroke="url(#journeyGrad)"
                            strokeWidth="3"
                            fill="none"
                            filter="url(#nodeGlow)"
                            className="opacity-40"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2.8, delay: 0.8, ease: "easeInOut" }}
                        />

                        <motion.path
                            d="M 30% 30% L 50% 30% L 50% 15% L 88% 25%"
                            stroke="#f97316"
                            strokeWidth="1.5"
                            strokeDasharray="10,6"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.8, delay: 2.2 }}
                        />
                    </svg>

                    {nodes.map((node, i) => (
                        <motion.div
                            key={node.id}
                            className="absolute z-20"
                            style={{
                                left: node.pos.x,
                                top: node.pos.y,
                                transform: 'translate(-50%, -50%)'
                            }}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.5, type: "spring", damping: 15 }}
                        >
                            <div className="relative group">
                                <div className={`absolute -inset-10 rounded-full bg-${node.color}-500 blur-[60px] opacity-[0.1] group-hover:opacity-40 transition-opacity`} />

                                <div className={`relative w-16 h-16 md:w-22 md:h-22 rounded-full glass-panel border border-${node.color}-500/30 flex items-center justify-center text-3xl md:text-4xl text-${node.color}-400 shadow-[0_0_50px_rgba(0,0,0,0.7)] z-30 transition-all duration-700 group-hover:scale-110 group-hover:border-${node.color}-500`}>
                                    {node.icon}
                                    <div className={`absolute inset-0 rounded-full border-2 border-${node.color}-500/40 animate-ping opacity-30`} />
                                </div>

                                <div className={`absolute ${node.packetPos === 'right' ? 'left-full ml-10' : 'right-full mr-10'} top-1/2 -translate-y-1/2`}>
                                    <motion.div
                                        initial={{ opacity: 0, x: node.packetPos === 'right' ? -30 : 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: (i * 0.5) + 0.8 }}
                                        className="glass-panel p-5 md:p-6 rounded-[2.2rem] border border-white/10 bg-black/60 backdrop-blur-3xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] w-[220px] md:w-[280px] group-hover:border-white/20 transition-colors"
                                    >
                                        <div className="flex justify-between items-center mb-3 text-blue-400">
                                            <span className="text-[10px] font-mono font-black tracking-[0.25em]">{node.date}</span>
                                            <div className="flex gap-1.5">
                                                <div className={`w-2 h-2 rounded-full bg-${node.color}-500/40 shadow-[0_0_10px_currentColor]`} />
                                                <div className={`w-2 h-2 rounded-full bg-${node.color}-500 shadow-[0_0_15px_currentColor]`} />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-black text-white leading-tight mb-1 font-outfit">{node.title}</h3>
                                        <div className="text-[11px] font-bold text-slate-400 mb-4 uppercase tracking-[0.15em] opacity-70">{node.org}</div>
                                        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />
                                        <p className="text-[11px] text-slate-300 leading-relaxed font-outfit italic opacity-90 normal-case">
                                            // {node.desc}
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* REDUCED Leetcode Stat Module */}
                    <motion.div
                        className="absolute z-30"
                        style={{ left: leetcodeStats.pos.x, top: leetcodeStats.pos.y, transform: 'translate(-50%, -50%)' }}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2.5 }}
                    >
                        <div className="glass-panel p-6 md:p-8 rounded-[2.5rem] border border-orange-500/20 bg-orange-500/[0.04] backdrop-blur-3xl shadow-2xl hover:scale-105 transition-transform duration-500 group">
                            <div className="flex items-center gap-6">
                                <div className="p-4 bg-orange-500/10 rounded-[1.5rem] text-orange-500 shadow-[0_0_25px_rgba(249,115,22,0.15)] group-hover:rotate-6 transition-transform">
                                    <SiLeetcode size={42} />
                                </div>
                                <div className="normal-case">
                                    <div className="text-[10px] font-black font-mono text-orange-500 tracking-[0.3em] mb-2 uppercase opacity-80">SYSTEM_METRIC</div>
                                    <div className="text-3xl font-black text-white leading-none tracking-tighter">Leetcode</div>
                                    <div className="text-2xl font-black text-orange-500 mt-2">{leetcodeStats.total}+ Solved</div>
                                    <div className="text-[10px] font-bold text-slate-500 uppercase mt-3 tracking-widest opacity-60">Global: {leetcodeStats.rank}</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* System Status - Centered at bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.2 }}
                    className="mb-10 flex justify-center items-center px-6"
                >
                    <div className="flex items-center gap-4 px-10 py-4 glass-panel rounded-full border border-white/5 bg-black/60 shadow-2xl">
                        <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
                        <span className="text-[13px] font-mono tracking-[0.3em] font-black uppercase text-slate-400">System_Status: Optimal</span>
                    </div>
                </motion.div>
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

export default About;
