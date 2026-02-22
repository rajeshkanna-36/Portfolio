import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import SocialLinks from '../components/SocialLinks';

const easing = 'easeOut' as const;

const Home = ({ isVisible = true }: { isVisible?: boolean }) => {
    const makeAnim = (delay: number) => ({
        initial: { opacity: 0, y: 36 },
        animate: isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 },
        transition: { duration: 0.8, ease: easing, delay: isVisible ? delay : 0 },
    });

    return (
        <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden" style={{ background: '#000000' }}>
            {/* Cosmic Sunrise Background */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 1, ease: easing }}
            >
                {/* Deep Space Background */}
                <div className="absolute inset-0 bg-black" />

                {/* Top-Center Glow */}
                <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-blue-600/30 blur-[130px] rounded-full mix-blend-screen opacity-100" />
                <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-cyan-500/40 blur-[80px] rounded-full mix-blend-screen opacity-100" />

                {/* Planet / Horizon Curve */}
                <div
                    className="absolute -bottom-[130vw] left-1/2 -translate-x-1/2 w-[150vw] h-[150vw] bg-black rounded-full"
                    style={{ boxShadow: '0 -20px 120px -20px rgba(59, 130, 246, 0.5)' }}
                >
                    <div className="absolute inset-0 rounded-full opacity-70"
                        style={{ boxShadow: 'inset 0 2px 60px 0 rgba(59, 130, 246, 0.7)' }} />
                    <div className="absolute inset-0 rounded-full border-t-[3px] border-cyan-100 opacity-100 blur-[1px]"
                        style={{
                            maskImage: 'linear-gradient(to right, transparent 20%, black 50%, transparent 80%)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent 20%, black 50%, transparent 80%)'
                        }} />
                    <div className="absolute inset-0 rounded-full border-t-[6px] border-white blur-[4px] opacity-100"
                        style={{
                            maskImage: 'linear-gradient(to right, transparent 40%, black 50%, transparent 60%)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent 40%, black 50%, transparent 60%)'
                        }} />
                    <div className="absolute top-0 left-[20%] right-[20%] h-[400px] bg-gradient-to-b from-blue-600/40 via-blue-900/20 to-transparent rounded-[100%] blur-3xl opacity-80" />
                </div>
            </motion.div>

            <div className="max-w-4xl w-full text-center relative z-10">
                <div className="mb-8 relative z-10">

                    <motion.h1
                        className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-6 font-outfit leading-tight"
                        {...makeAnim(0.05)}
                    >
                        Hi, I'm{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 animate-gradient-x pb-2 font-extrabold block md:inline mt-2 md:mt-0">
                            Rajesh Kanna
                        </span>{' '}
                        <span className="inline-block animate-wave origin-bottom-right">👋</span>
                    </motion.h1>

                    <motion.h2
                        className="text-2xl md:text-4xl font-medium text-slate-200 tracking-tight mb-8 font-outfit"
                        {...makeAnim(0.2)}
                    >
                        I design things for the web.
                    </motion.h2>

                    <motion.p
                        className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10 text-center font-normal font-outfit px-4"
                        {...makeAnim(0.35)}
                    >
                        I'm a UI UX Designer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on designing accessible, human-centered products.
                    </motion.p>

                    <motion.div
                        className="flex justify-center space-x-6 mb-12"
                        {...makeAnim(0.5)}
                    >
                        <SocialLinks />
                    </motion.div>

                    <motion.div
                        className="flex justify-center gap-4"
                        {...makeAnim(0.65)}
                    >
                        <a
                            href="https://drive.google.com/file/d/11aE-a2Jd96tMgOc3B-FtHHwrXaDNJjQj/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 glass-btn text-white font-outfit font-bold rounded-full group"
                        >
                            <span>Resume</span>
                        </a>
                        <Link
                            to="/projects"
                            className="px-8 py-3 glass-btn text-blue-400 font-outfit font-bold rounded-full group"
                        >
                            <span>View Projects</span>
                        </Link>
                    </motion.div>
                </div>

                {/* Decorative Glow */}
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
                    <div className="w-[500px] h-[500px] bg-blue-600 rounded-full blur-[100px] animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

export default Home;
