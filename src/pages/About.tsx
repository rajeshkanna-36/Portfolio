import { useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const typedText = "Software Engineer";

    return (
        <div ref={containerRef} className="h-screen bg-slate-950 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950 text-gray-900 dark:text-gray-100 relative md:overflow-hidden flex flex-col pt-24 pb-8 md:pb-12 px-4 overflow-y-auto md:overflow-y-hidden">
            {/* Custom Animations Styles */}
            <style>{`
                @keyframes float {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(50px, -80px) scale(1.2); }
                    66% { transform: translate(-40px, 40px) scale(0.8); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                @keyframes morph {
                    0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
                    50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
                    100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
                }
                .liquid-blob {
                    animation: float 15s ease-in-out infinite, morph 10s ease-in-out infinite;
                }
                .liquid-blob-delay-1 { animation-delay: 0s, 0s; }
                .liquid-blob-delay-2 { animation-delay: -2s, -1s; }
                .liquid-blob-delay-3 { animation-delay: -5s, -3s; }
                .liquid-blob-delay-4 { animation-delay: -7s, -5s; }
                
                .typing-cursor::after {
                    content: '|';
                    animation: blink 1s step-end infinite;
                }
                @keyframes blink { 50% { opacity: 0; } }
            `}</style>

            {/* Background Grid */}
            <div className="absolute inset-0 z-0 opacity-30 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                    backgroundSize: '100px 100px'
                }}>
            </div>

            {/* Heavy Liquid Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="liquid-blob liquid-blob-delay-1 absolute top-20 left-20 w-80 h-80 bg-blue-600/50 blur-[60px] rounded-full"></div>
                <div className="liquid-blob liquid-blob-delay-2 absolute bottom-20 right-20 w-96 h-96 bg-purple-600/50 blur-[60px] rounded-full"></div>
                <div className="liquid-blob liquid-blob-delay-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-cyan-600/40 blur-[80px] rounded-full"></div>
                <div className="liquid-blob liquid-blob-delay-4 absolute top-10 right-40 w-72 h-72 bg-emerald-600/40 blur-[60px] rounded-full"></div>
            </div>

            <div className="max-w-6xl w-full mx-auto relative z-10 flex flex-col flex-1 min-h-0 animate-fade-in-up md:px-8 mb-8 md:mb-0">
                <div className="glass-panel rounded-[2rem] border border-white/20 bg-white/5 backdrop-blur-3xl relative flex flex-col flex-1 md:min-h-0 overflow-visible md:overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] group h-auto md:h-full">

                    {/* Internal Glass Reflection/Sheen */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>

                    <div className="p-6 md:p-10 flex flex-col h-auto md:h-full relative z-10 justify-start md:justify-between">
                        {/* Header Section */}
                        <div className="flex-shrink-0 border-b border-white/10 pb-6 mb-4">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                <div>
                                    <h1 className="text-4xl md:text-5xl font-bold font-karla text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white mb-1 tracking-tight drop-shadow-lg">Rajesh Kanna</h1>
                                    <p className="text-lg text-blue-400 font-mono tracking-wide drop-shadow-md h-8 flex items-center">
                                        <span className="typing-cursor">{typedText}</span>
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-slate-300 text-xs font-medium">
                                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rajeshkanna.swe@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-all group p-1.5 rounded-lg hover:bg-white/5">
                                        <div className="bg-white/10 p-2 rounded-full group-hover:bg-blue-500 transition-colors">
                                            <FaEnvelope />
                                        </div>
                                        <span>rajeshkanna.swe@gmail.com</span>
                                    </a>
                                    <a href="tel:+919626454841" className="flex items-center gap-2 hover:text-white transition-all group p-1.5 rounded-lg hover:bg-white/5">
                                        <div className="p-1.5 bg-blue-500/20 rounded-full group-hover:bg-blue-500 transition-colors"><FaPhone className="text-blue-400 group-hover:text-white" size={12} /></div>
                                        <span>+91 9626454841</span>
                                    </a>
                                    <div className="flex items-center gap-2 p-1.5">
                                        <div className="p-1.5 bg-blue-500/20 rounded-full"><FaMapMarkerAlt className="text-blue-400" size={12} /></div>
                                        <span>Namakkal, India</span>
                                    </div>
                                    <div className="flex gap-3 p-1.5 items-center">
                                        <a href="https://www.linkedin.com/in/rajesh-kanna36" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/5 rounded-full hover:bg-white/20 hover:text-blue-400 hover:scale-110 transition-all shadow-lg"><FaLinkedin size={16} /></a>
                                        <a href="https://github.com/rajeshkanna-36" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/5 rounded-full hover:bg-white/20 hover:text-blue-400 hover:scale-110 transition-all shadow-lg"><FaGithub size={16} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Two Column Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:flex-grow h-auto md:min-h-0 items-start md:items-center">

                            {/* Left Column: Experience */}
                            <div className="flex flex-col md:min-h-0 justify-start md:justify-center h-auto md:h-full">
                                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2 drop-shadow-md">
                                    <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg text-white shadow-lg"><FaBriefcase size={14} /></div>
                                    Experience
                                </h2>

                                <div className="relative group p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] w-full backdrop-blur-md">
                                    <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-3">
                                        <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">Java Development Intern</h3>
                                        <span className="text-blue-400 text-[10px] font-mono bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20 shadow-inner">Dec 2024 - Jan 2025</span>
                                    </div>

                                    <p className="text-slate-200 mb-3 font-medium text-sm flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                        Odugaa Tech Pvt Ltd
                                    </p>

                                    <ul className="space-y-2 text-slate-300 text-xs leading-relaxed list-disc list-inside marker:text-blue-500">
                                        <li>Developed backend modules for automobile shop system using <span className="text-white/80">Core Java & JDBC</span>.</li>
                                        <li>Implemented RESTful APIs and managed <span className="text-white/80">MySQL</span> databases for inventory.</li>
                                        <li>Collaborated in an Agile team ensuring timely delivery of scalable code.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Right Column: Education */}
                            <div className="flex flex-col gap-4 md:min-h-0 justify-start md:justify-center h-auto md:h-full">
                                {/* Education */}
                                <section className="w-full">
                                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2 drop-shadow-md">
                                        <div className="p-2 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg text-white shadow-lg"><FaGraduationCap size={14} /></div>
                                        Education
                                    </h2>

                                    <div className="space-y-4">
                                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] group backdrop-blur-md">
                                            <div className="flex justify-between items-start mb-1">
                                                <h3 className="text-base font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">Muthayammal Engineering College</h3>
                                                <span className="text-emerald-400 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">2022 - Present</span>
                                            </div>
                                            <p className="text-emerald-300/80 text-xs mb-1 font-medium">B.Tech - Information Technology</p>
                                            <p className="text-slate-400 text-[10px] font-mono">CGPA: 7.68</p>
                                        </div>

                                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] group backdrop-blur-md">
                                            <div className="flex justify-between items-start mb-1">
                                                <h3 className="text-base font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">Shanthi Nikethan Matric</h3>
                                                <span className="text-emerald-400 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">2021 - 2022</span>
                                            </div>
                                            <p className="text-emerald-300/80 text-xs mb-1 font-medium">High School - Computer Science</p>
                                            <p className="text-slate-400 text-[10px] font-mono">Grade: 80.5</p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
