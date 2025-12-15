import { useState } from "react";
import { SatelliteIcon } from "./SatelliteIcon.jsx";
import { Modal } from "./Modal.jsx";

export const ServicesSection = () => {
    const [openModal, setOpenModal] = useState(null);

    const services = [
        {
            id: "projects",
            label: "Projects",
            icon: "/images/satellite.png",
            angle: 0,
            duration: 30,
            content: (
                <div>
                    <h3 className="text-xl font-bold mb-4 text-[#00ff41]">Projects</h3>
                    <p>Conent Here</p>
                </div>
            )
        
        },
        {
            id: "about",
            label: "About",
            icon: "/images/satellite.png",
            angle: 180,
            duration: 30,
            content: (
                <div>
                    <h3 className="text-xl font-bold mb-4 text-[#00ff41]">Navigation Satellite</h3>
                    <p>Content Here</p>
                </div>
            )
        },
        /* can add more services as needed */
        {
            id: "contact",
            label: "Contact",
            icon: "/images/satellite.png",
            angle: 90,
            duration: 30,
            content: (
                <div>
                    <h3 className="text-xl font-bold mb-4 text-[#00ff41]">Navigation Satellite</h3>
                    <p>Content Here</p>
                </div>
            )
        },
        {
            id: "resume",
            label: "Resume",
            icon: "/images/satellite.png",
            angle: 270,
            duration: 30,
            content: (
                <div>
                    <h3 className="text-xl font-bold mb-4 text-[#00ff41]">Navigation Satellite</h3>
                    <p>Content Here</p>
                </div>
            )
        },
    ];
    
    // Calculate position based on angle 
   /*  const getPosition = (angle, radius = 400) => {
        const radian = (angle * Math.PI) / 180;
        const x = Math.cos(radian) * radius;
        const y = Math.sin(radian) * radius;
        return { 
            left: `calc(50% + ${x}px)`,
            top: `calc(50% + ${y}px)`,
            transform: 'translate(-50%, -50%)'
        };
    }; */

    return (
        <>
            <div className="fixed inset-0 pointer-events-none z-10">
                <div className="relative w-full h-full">
                    {/* icons around globe */}
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="absolute left-1/2 top-1/2 pointer-events-auto"
                            style={{
                                animation: `orbit-${service.id} ${service.duration}s linear infinite`,
                                transformOrigin: 'center',
                            }}
                        >
                            <div 
                                style={{
                                    transform: `rotate(${service.angle}deg) translateX(500px) rotate(-${service.angle}deg)`
                                }}
                                >
                                <SatelliteIcon
                                    icon={service.icon}
                                    label={service.label}
                                    onClick={() => setOpenModal(service.id)}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Modals */}
            {services.map((service) => (
                <Modal
                    key={service.id}
                    isOpen={openModal === service.id}
                    onClose={() => setOpenModal(null)}
                    title={service.label}
                >
                    {service.content}
                </Modal>
            ))}

            {/* Keyframe animations */}
            <style>{`
                ${services.map(service => `
                    @keyframes orbit-${service.id} {
                        from {
                            transform: rotate(0deg);
                        }
                        to {
                            transform: rotate(360deg);
                        }
                    }
                `).join('\n')}
            `}</style>
        </>
    );
};
