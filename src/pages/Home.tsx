import { Link } from 'react-router-dom';
import SocialLinks from '../components/SocialLinks';

const Home = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden" style={{ background: '#000000' }}>
            {/* Cosmic Sunrise - Exact Match Reference V4 - Lowered Horizon + Intense Glow */}
            <div className="absolute inset-0 pointer-events-none">
                {/* 1. Deep Space Background - Strictly Black */}
                <div className="absolute inset-0 bg-black" />

                {/* 2. Top-Center Sun/Star Burst - MOVED LOWER & INCREASED INTENSITY */}
                {/* Intense central white-blue glow - Larger and brighter */}
                <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-blue-600/30 blur-[130px] rounded-full mix-blend-screen opacity-100" />
                <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-cyan-500/40 blur-[80px] rounded-full mix-blend-screen opacity-100" />

                {/* 3. The Planet / Horizon Curve - Lowered Position */}
                {/* Large perfect circle pushed further down */}
                <div className="absolute -bottom-[130vw] left-1/2 -translate-x-1/2 w-[150vw] h-[150vw] bg-black rounded-full"
                    style={{
                        boxShadow: '0 -20px 120px -20px rgba(59, 130, 246, 0.5)' // Increased outer blue glow
                    }}>

                    {/* 4. The Sharp Horizon Line (Rim) - Corrected to follow curvature */}

                    {/* Inner Rim Glow (Blue) - Inset shadow follows curve - INTENSIFIED */}
                    <div className="absolute inset-0 rounded-full opacity-70"
                        style={{ boxShadow: 'inset 0 2px 60px 0 rgba(59, 130, 246, 0.7)' }} />

                    {/* Sharp Edge Line (Cyan) - Border follows curve with mask fade - BRIGHTER */}
                    <div className="absolute inset-0 rounded-full border-t-[3px] border-cyan-100 opacity-100 blur-[1px]"
                        style={{
                            maskImage: 'linear-gradient(to right, transparent 20%, black 50%, transparent 80%)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent 20%, black 50%, transparent 80%)'
                        }} />

                    {/* Intense Center Hotspot (White) - Thicker border at top with tighter mask - GLOWIER */}
                    <div className="absolute inset-0 rounded-full border-t-[6px] border-white blur-[4px] opacity-100"
                        style={{
                            maskImage: 'linear-gradient(to right, transparent 40%, black 50%, transparent 60%)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent 40%, black 50%, transparent 60%)'
                        }} />

                    {/* 5. Blue Atmosphere fading down - clipped inside the circle - INTENSIFIED */}
                    <div className="absolute top-0 left-[20%] right-[20%] h-[400px] bg-gradient-to-b from-blue-600/40 via-blue-900/20 to-transparent rounded-[100%] blur-3xl opacity-80" />

                </div>
            </div>

            <div className="max-w-4xl w-full text-center animate-fade-in-up relative z-10">
                {/* Hero Section */}
                <div className="mb-8 relative z-10">
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-6 font-outfit leading-tight">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 animate-gradient-x pb-2 font-extrabold block md:inline mt-2 md:mt-0">Rajesh Kanna</span> <span className="inline-block animate-wave origin-bottom-right">👋</span>
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-medium text-slate-200 tracking-tight mb-8 font-outfit">
                        I design things for the web.
                    </h2>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10 text-center font-normal font-outfit px-4">
                        I'm a UI UX Designer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on designing accessible, human-centered products.
                    </p>

                    <div className="flex justify-center space-x-6 mb-12">
                        <SocialLinks />
                    </div>

                    <div className="flex justify-center gap-4">
                        <a href="https://drive.google.com/file/d/11aE-a2Jd96tMgOc3B-FtHHwrXaDNJjQj/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="px-8 py-3 glass-btn text-white font-outfit font-bold rounded-full group">
                            <span>Resume</span>
                        </a>
                        <Link to="/projects" className="px-8 py-3 glass-btn text-blue-400 font-outfit font-bold rounded-full group">
                            <span>View Projects</span>
                        </Link>
                    </div>
                </div>

                {/* Decorative Element - Glow */}
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
                    <div className="w-[500px] h-[500px] bg-blue-600 rounded-full blur-[100px] animate-pulse"></div>
                </div>

            </div>
        </div>
    );
};

export default Home;
