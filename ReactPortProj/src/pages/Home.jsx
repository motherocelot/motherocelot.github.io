import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { useTheme } from "../context/ThemeContext";
import { Globe } from "../components/Globe";
import { ServicesSection } from "../components/ServicesSection";


export const Home = () => {
    const {isDarkMode} = useTheme();

    return (
        <div className="scan-lines min-h-screen bg-background text-foreground overflow-x-hidden crt-effect crt-glow">
            {/*Star Background */}
            <StarBackground />
            {/* 3D Globe Background */}
            <Globe />
            {/* Navbar */}
            <Navbar />
            {/* Main Content */}
            <main>
                {/* Hero Section */}
                <HeroSection />
                {/* Services Section */}
                <ServicesSection />
            </main>
            {/* Footer */}
        </div>
    )
}