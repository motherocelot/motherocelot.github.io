import {cn} from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X, Satellite, Mail, User, Briefcase } from "lucide-react";

const navItems = [
    {name: "Home", href: "#hero", icon: null},
    {name: "About", href: "#about", icon: User},
    {name: "Projects", href: "#projects", icon: Briefcase},
    {name: "Contact", href: "#contact", icon: Mail},
]; 

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
            
            // Track active section
            const sections = navItems.map(item => item.href.substring(1));
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Desktop Navbar */}
            <nav className={cn(
                "hidden md:block fixed w-full z-40 transition-all duration-300",
                isScrolled 
                    ? "py-2" 
                    : "py-4"
            )}>
                <div className="container">
                    {/*Container */}
                    <div className={cn(
                        "relative backdrop-blur-lg rounded-2xl transition-all duration-300",
                        "border-2 border-[#00ff41]/30",
                        isScrolled 
                            ? "bg-black/60 shadow-[0_0_30px_rgba(0,255,65,0.2)]" 
                            : "bg-black/40 shadow-[0_0_20px_rgba(0,255,65,0.1)]"
                    )}>
                        {/* Decorative corners */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00ff41]" />
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00ff41]" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00ff41]" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00ff41]" />
                        
                        <div className="flex items-center justify-between px-8 py-4">
                            {/* Logo */}
                            <a href="#hero" className="flex items-center gap-2 group">
                                <Satellite className="w-6 h-6 text-[#00ff41] group-hover:rotate-180 transition-transform duration-500" />
                                <span className="custom-font text-xl font-bold text-[#00ff41] tracking-wider">
                                    LUCAS<span className="text-white">GIS</span>
                                </span>
                            </a>

                            {/* Nav Links */}
                            <div className="flex items-center gap-1">
                                {navItems.map((item) => {
                                    const isActive = activeSection === item.href.substring(1);
                                    return (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={cn(
                                                "relative px-6 py-2 custom-font uppercase text-sm tracking-wider",
                                                "transition-all duration-300",
                                                "hover:text-[#00ff41]",
                                                isActive 
                                                    ? "text-[#00ff41]" 
                                                    : "text-white/70"
                                            )}
                                        >
                                            {item.name}
                                            
                                            {/* Active indicator */}
                                            {isActive && (
                                                <>
                                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00ff41] animate-pulse" />
                                                    <span className="absolute inset-0 bg-[#00ff41]/10 -z-10" />
                                                </>
                                            )}
                                            
                                            {/* Hover effect */}
                                            <span className="absolute inset-0 border border-[#00ff41]/0 hover:border-[#00ff41]/50 transition-all duration-300 -z-10" />
                                        </a>
                                    );
                                })}
                            </div>

                            {/* Decorative element */}
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#00ff41] animate-pulse" />
                                <div className="w-1 h-1 rounded-full bg-[#00ff41]/50 animate-pulse" style={{animationDelay: '0.5s'}} />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Navbar */}
            <nav className="md:hidden fixed w-full z-40 py-4">
                <div className="container">
                    <div className={cn(
                        "relative backdrop-blur-lg rounded-xl transition-all duration-300",
                        "border-2 border-[#00ff41]/30 px-4 py-3",
                        isScrolled 
                            ? "bg-black/60 shadow-[0_0_30px_rgba(0,255,65,0.2)]" 
                            : "bg-black/40 shadow-[0_0_20px_rgba(0,255,65,0.1)]"
                    )}>
                        <div className="flex items-center justify-between">
                            {/* Logo */}
                            <a href="#hero" className="flex items-center gap-2">
                                <Satellite className="w-5 h-5 text-[#00ff41]" />
                                <span className="custom-font text-lg font-bold text-[#00ff41] tracking-wider">
                                    LUCAS<span className="text-white">GIS</span>
                                </span>
                            </a>

                            {/* Hamburger */}
                            <button
                                onClick={() => setIsMenuOpen(prev => !prev)}
                                className="p-2 text-[#00ff41] hover:bg-[#00ff41]/10 rounded-lg transition-colors relative"
                                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            >
                                <div className="relative w-6 h-6">
                                    <Menu 
                                        className={cn(
                                            "absolute inset-0 transition-all duration-300",
                                            isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                                        )} 
                                    />
                                    <X 
                                        className={cn(
                                            "absolute inset-0 transition-all duration-300",
                                            isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                                        )} 
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "md:hidden fixed inset-0 z-30 transition-all duration-300",
                    isMenuOpen 
                        ? "opacity-100 pointer-events-auto" 
                        : "opacity-0 pointer-events-none"
                )}
            >
                {/* Backdrop */}
                <div 
                    className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                    onClick={() => setIsMenuOpen(false)}
                />

                {/* Menu Content */}
                <div className="relative h-full flex flex-col items-center justify-center p-8">
                    {/* Decorative grid pattern */}
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: 'linear-gradient(#00ff41 1px, transparent 1px), linear-gradient(90deg, #00ff41 1px, transparent 1px)',
                        backgroundSize: '50px 50px'
                    }} />

                    <div className="relative space-y-6 w-full max-w-xs">
                        {navItems.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={cn(
                                        "group flex items-center gap-4 p-4 rounded-lg",
                                        "border-2 border-[#00ff41]/30 bg-black/40",
                                        "hover:border-[#00ff41] hover:bg-[#00ff41]/10",
                                        "transition-all duration-300",
                                        "opacity-0 animate-fade-in"
                                    )}
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                        animationFillMode: 'forwards'
                                    }}
                                >
                                    {Icon && (
                                        <div className="w-10 h-10 rounded-lg bg-[#00ff41]/20 flex items-center justify-center group-hover:bg-[#00ff41]/30 transition-colors">
                                            <Icon className="w-5 h-5 text-[#00ff41]" />
                                        </div>
                                    )}
                                    <span className="custom-font text-xl font-bold text-white group-hover:text-[#00ff41] transition-colors">
                                        {item.name}
                                    </span>
                                </a>
                            );
                        })}
                    </div>

                    {/* Bottom decoration */}
                    <div className="absolute bottom-8 flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#00ff41] animate-pulse" />
                        <div className="w-2 h-2 rounded-full bg-[#00ff41] animate-pulse" style={{animationDelay: '0.3s'}} />
                        <div className="w-2 h-2 rounded-full bg-[#00ff41] animate-pulse" style={{animationDelay: '0.6s'}} />
                    </div>
                </div>
            </div>
        </>
    );
};