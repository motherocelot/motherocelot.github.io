

export const HeroSection = () => {
    return (
        <section 
            id="hero" 
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="custom-font text-4xl md:text-6xl font-bold tracking-tight"
                        style={{ textShadow: '0 0 20px rgba(0, 0, 0, 0.9), 0 0 40px rgba(0, 0, 0, 0.7)' }}>
                        <span className="opacity-0 animate-fade-in"> Hi, I'm </span>
                        {" "}
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Lucas </span>
                        <span className="text-gradient ml-1 opacity-0 animate-fade-in-delay-2"> Long </span>
                    </h1>

                    <p className="custom-font">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                    </p>

                </div>

            </div>
         </section>
    );
}