import SocialLinks from '../components/SocialLinks';

const Home = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950 px-4 relative overflow-hidden">
            {/* Large Grid Background */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                    backgroundSize: '100px 100px'
                }}>
            </div>

            <div className="max-w-4xl w-full text-center animate-fade-in-up relative z-10">
                {/* Hero Section */}
                <div className="mb-8 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold font-karla text-white mb-4">
                        Hi, I'm <span className="text-blue-400">Rajesh Kanna</span> <span className="inline-block animate-wave origin-bottom-right">👋</span>
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-medium text-slate-300 font-source mb-6">
                        I build things for the web.
                    </h2>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-source leading-relaxed mb-8 text-center">
                        I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
                    </p>

                    <div className="flex justify-center space-x-6 mb-12">
                        <SocialLinks />
                    </div>

                    <div className="flex justify-center gap-4">
                        <a href="https://drive.google.com/file/d/1aFO7kuoPXjjBZcVxjsE4YVZLMk2oeSij/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-8 py-3 glass-btn text-white font-karla font-bold rounded-full group">
                            <span>Resume</span>
                        </a>
                        <a href="/projects" className="px-8 py-3 glass-btn text-blue-400 font-karla font-bold rounded-full group">
                            <span>View Projects</span>
                        </a>
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
