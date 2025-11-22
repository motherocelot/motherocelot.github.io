import React, { useState, useEffect } from 'react';

// --- CONFIGURATION AND DATA ---

// Color palette matching the GIS theme
const COLORS = {
    primary: '#10567A', // Deep Blue
    accent: '#6EE7B7', // Mint Green
    light: '#F4F7F8',  // Off-White Background
    dark: '#1F2937',   // Dark Text
};

// Define the pages for navigation
const PAGES = {
    HOME: 'Home',
    ABOUT: 'About Me',
    PROJECTS: 'Projects',
    RESUME: 'Resume/CV',
    CONTACT: 'Contact',
};

// --- UTILITY COMPONENTS ---

// Custom "Map Grid" Background Component (the flare)
const MapBackground = () => (
    <div
        className="map-background absolute inset-0 -z-10 opacity-30"
        style={{
            backgroundImage: `linear-gradient(to right, rgba(16, 86, 122, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(16, 86, 122, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'grid-move 60s linear infinite', // Tailwind keyframe defined in App
        }}
    ></div>
);

// Animated Heading Component
const SectionHeader = ({ title }) => (
    <h2 className="text-4xl font-bold text-center mb-12 text-primary">
        <span className="border-b-4 border-accent pb-1 transition duration-500 hover:border-b-8">
            {title}
        </span>
    </h2>
);


// --- PAGE COMPONENTS ---

const HomePage = ({ setCurrentPage }) => (
    <section className="py-20 text-center">
        <h1 className="text-5xl sm:text-7xl font-extrabold text-primary mb-4 animate-fadeIn">
            [Your Name]
        </h1>
        <p className="text-xl sm:text-2xl text-dark max-w-3xl mx-auto mb-10">
            {/* CHANGED text-accent to text-primary for better contrast and separation */}
            <span className="font-semibold text-primary">Geography Undergraduate</span> &bull; GIS Concentration &bull; Spatial Data Analyst
        </p>
        <div className="flex justify-center space-x-4">
            <button
                onClick={() => setCurrentPage(PAGES.PROJECTS)}
                className="px-8 py-4 bg-primary text-white font-semibold rounded-lg shadow-xl hover:bg-opacity-90 transition duration-300 transform hover:scale-105"
            >
                View Portfolio
            </button>
            <button
                onClick={() => setCurrentPage(PAGES.CONTACT)}
                className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition duration-300 transform hover:scale-105"
            >
                Get In Touch
            </button>
        </div>
    </section>
);

const AboutPage = () => (
    <section className="py-16">
        <SectionHeader title="About Me" />
        <div className="grid md:grid-cols-3 gap-10 items-center bg-white p-8 rounded-xl shadow-2xl border-t-4 border-accent">
            <div className="md:col-span-2">
                <p className="text-lg mb-4 text-dark leading-relaxed">
                    [Placeholder Text: Introduce yourself here. Talk about your passion for spatial data, mapping, and how you got into GIS. Keep this engaging!]
                </p>
                <p className="text-lg mb-4 text-dark leading-relaxed">
                    My specialization includes advanced coursework in remote sensing and geodatabase management. I am proficient in the ESRI suite and open-source tools, focusing on clean, efficient code and accurate cartographic communication.
                </p>
                <h3 className="text-xl font-bold text-primary mt-6">Core Competencies:</h3>
                <ul className="list-disc list-inside ml-4 text-dark space-y-1 mt-2">
                    <li>Python Automation (GeoPandas, NumPy)</li>
                    <li>Spatial Database Design (PostGIS)</li>
                    <li>Web Mapping Development (Leaflet/Mapbox GL JS)</li>
                    <li>Cartography and Data Visualization</li>
                </ul>
            </div>
            <div className="md:col-span-1 flex justify-center">
                <div className="w-56 h-56 bg-light rounded-full flex items-center justify-center shadow-inner border-4 border-primary/50">
                    <span className="text-7xl text-accent">🌍</span>
                </div>
            </div>
        </div>
    </section>
);

const ProjectsPage = () => {
    const projectList = [
        { title: "Urban Heat Island Analysis", tech: "ArcGIS Pro, Python", description: "Utilized satellite imagery to map and quantify temperature variance in metropolitan areas, identifying vulnerable populations." },
        { title: "Watershed Hydrology Modeling", tech: "QGIS, HEC-RAS", description: "Developed a 2D hydraulic model for flood prediction in a critical local watershed." },
        { title: "Public Art Locator Web Map", tech: "Leaflet.js, GeoJSON", description: "Created an interactive, mobile-responsive web map cataloging all public art installations in a major city district." },
    ];

    return (
        <section className="py-16">
            <SectionHeader title="Featured Projects" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectList.map((project, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-primary/10 transition duration-300 hover:shadow-2xl hover:border-accent transform hover:scale-[1.02]">
                        <h3 className="text-2xl font-semibold text-primary mb-2">{project.title}</h3>
                        <p className="text-sm text-gray-500 mb-4 font-mono">{project.tech}</p>
                        <p className="text-dark mb-4">{project.description}</p>
                        <a href="#" className="inline-block text-accent hover:text-primary font-bold transition duration-300 group">
                            View Details
                            <span className="ml-1 inline-block transform transition duration-300 group-hover:translate-x-1">&rarr;</span>
                        </a>
                    </div>
                ))}
            </div>
            <div className="mt-12 text-center">
                <p className="text-lg text-gray-600">
                    Need more space? You can expand project details into dedicated modals or sections!
                </p>
            </div>
        </section>
    );
};

const ResumePage = () => (
    <section className="py-16">
        <SectionHeader title="Resume & CV" />
        <div className="bg-white p-10 rounded-xl shadow-2xl max-w-4xl mx-auto border-4 border-primary/10">
            {/* Education Section */}
            <h3 className="text-2xl font-bold text-primary mb-4 border-b pb-2 border-accent">Education</h3>
            <div className="mb-8 pl-4 border-l-4 border-accent space-y-1">
                <p className="font-semibold text-xl text-dark">B.S. Geography (GIS Concentration)</p>
                <p className="text-gray-600">University Name, City | Expected: Spring 20XX</p>
                <p className="text-sm mt-1 italic">GPA: 3.9/4.0 | Dean's List every semester.</p>
            </div>

            {/* Experience Section */}
            <h3 className="text-2xl font-bold text-primary mb-4 border-b pb-2 border-accent">Relevant Experience</h3>
            <div className="mb-8 pl-4 border-l-4 border-accent space-y-1">
                <p className="font-semibold text-xl text-dark">GIS Intern</p>
                <p className="text-gray-600">City Planning Department, Summer 20XX</p>
                <ul className="list-disc list-inside ml-4 text-dark text-sm mt-1">
                    <li>Digitized and quality-checked municipal infrastructure assets for a new geodatabase.</li>
                    <li>Assisted in generating thematic maps for zoning board presentations.</li>
                </ul>
            </div>

            {/* Skills Section */}
            <h3 className="text-2xl font-bold text-primary mb-4 border-b pb-2 border-accent">Technical Skills</h3>
            <div className="flex flex-wrap gap-4">
                <span className="bg-light text-primary px-4 py-2 rounded-full font-medium shadow-md">ArcGIS Pro & Online</span>
                <span className="bg-light text-primary px-4 py-2 rounded-full font-medium shadow-md">Python/SQL</span>
                <span className="bg-light text-primary px-4 py-2 rounded-full font-medium shadow-md">Remote Sensing</span>
                <span className="bg-light text-primary px-4 py-2 rounded-full font-medium shadow-md">Database Management (PostGIS)</span>
                <span className="bg-light text-primary px-4 py-2 rounded-full font-medium shadow-md">Web Mapping (Leaflet)</span>
            </div>

            <div className="text-center mt-10">
                <a href="/path/to/your/resume.pdf" download className="px-10 py-4 bg-primary text-white font-bold rounded-lg shadow-xl hover:bg-opacity-90 transition duration-300 inline-flex items-center space-x-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                    <span>Download Full CV (PDF)</span>
                </a>
            </div>
        </div>
    </section>
);

const ContactPage = () => (
    <section className="py-16">
        <SectionHeader title="Contact & Connect" />
        <div className="max-w-xl mx-auto text-center bg-white p-8 rounded-xl shadow-2xl border-l-8 border-accent">
            <p className="text-lg text-dark mb-8">
                I am excited to discuss opportunities in geospatial technology, spatial analysis, and urban planning. Please reach out!
            </p>
            <div className="space-y-6">
                <div className="flex items-center justify-center space-x-3 text-2xl font-semibold text-primary">
                    <span className="text-3xl text-accent">📧</span>
                    <a href="mailto:your.email@example.com" className="hover:text-accent transition duration-300">your.email@example.com</a>
                </div>
                <div className="flex items-center justify-center space-x-3 text-2xl font-semibold text-primary">
                    <span className="text-3xl text-accent">🔗</span>
                    <a href="[Your LinkedIn URL]" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition duration-300">LinkedIn Profile</a>
                </div>
                <div className="flex items-center justify-center space-x-3 text-2xl font-semibold text-primary">
                    <span className="text-3xl text-accent">🐙</span>
                    <a href="[Your GitHub URL]" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition duration-300">GitHub Repositories</a>
                </div>
            </div>
        </div>
    </section>
);


// --- MAIN APP COMPONENT ---

const App = () => {
    const [currentPage, setCurrentPage] = useState(PAGES.HOME);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Dynamic rendering function based on currentPage state
    const renderPage = () => {
        switch (currentPage) {
            case PAGES.HOME:
                return <HomePage setCurrentPage={setCurrentPage} />;
            case PAGES.ABOUT:
                return <AboutPage />;
            case PAGES.PROJECTS:
                return <ProjectsPage />;
            case PAGES.RESUME:
                return <ResumePage />;
            case PAGES.CONTACT:
                return <ContactPage />;
            default:
                return <HomePage setCurrentPage={setCurrentPage} />;
        }
    };

    // React's equivalent of Tailwind config for custom CSS properties/animations
    useEffect(() => {
        // Define keyframe for the grid background animation
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = `
            @keyframes grid-move {
                0% { background-position: 0 0; }
                100% { background-position: 500px 500px; }
            }
            .animate-fadeIn {
                animation: fadeIn 1s ease-in-out;
            }
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(styleSheet);
    }, []);

    // Navigation item component
    const NavItem = ({ pageName }) => (
        <button
            onClick={() => {
                setCurrentPage(pageName);
                setIsMobileMenuOpen(false); // Close menu on click
                window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
            }}
            className={`
                font-medium transition duration-300 p-2 rounded-md
                ${currentPage === pageName
                    ? 'text-accent bg-primary md:bg-transparent md:text-primary md:border-b-2 md:border-accent'
                    : 'text-dark hover:text-primary hover:bg-light md:hover:bg-transparent'
                }
            `}
        >
            {pageName}
        </button>
    );

    return (
        <div className="min-h-screen bg-light font-sans text-dark relative">
            <MapBackground />

            {/* Header and Navigation */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                    <button onClick={() => setCurrentPage(PAGES.HOME)} className="text-2xl font-bold text-primary hover:text-accent transition duration-300">
                        [Your Initials] GIS
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-6">
                        {Object.values(PAGES).map(page => (
                            <NavItem key={page} pageName={page} />
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-md text-primary hover:bg-light focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Content */}
                {isMobileMenuOpen && (
                    <nav className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-white/95 backdrop-blur-sm border-t border-primary/20 transition-all duration-300 ease-out">
                        {Object.values(PAGES).map(page => (
                            <NavItem key={`mobile-${page}`} pageName={page} />
                        ))}
                    </nav>
                )}
            </header>

            {/* Main Content Area */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {renderPage()}
            </main>

            {/* Footer */}
            <footer className="bg-dark text-white py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p>&copy; 2025 [Your Name]. All rights reserved. <span className="text-accent">GIS Powered.</span></p>
                </div>
            </footer>
        </div>
    );
};

export default App;