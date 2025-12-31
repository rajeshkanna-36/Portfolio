import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const SocialLinks = () => {
    const links = [
        { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/rajeshkanna-36' },
        { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/rajesh-kanna36' },
        { name: 'LeetCode', icon: <SiLeetcode />, url: 'https://leetcode.com/u/rajeshkanna_36/' },
        { name: 'Email', icon: <FaEnvelope />, url: 'https://mail.google.com/mail/?view=cm&fs=1&to=rajeshkanna.swe@gmail.com' },
    ];

    return (
        <div className="flex space-x-6">
            {links.map((link) => (
                <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 glass-btn rounded-full text-slate-300 hover:text-white text-xl transition-all duration-300 group"
                    aria-label={link.name}
                >
                    <span className="relative z-10 group-hover:scale-110 block transition-transform">
                        {link.icon}
                    </span>
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;
