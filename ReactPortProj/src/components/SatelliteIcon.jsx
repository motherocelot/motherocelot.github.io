export const SatelliteIcon = ({ icon, label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="flex flex-col items-center gap-2 p-4 hover:bg-[#00ff41]/10 rounded-lg transition-all hover:scale-105 group"
        >
            <div className="w-20 h-20 flex items-center justify-center">
                <img src={icon}
                    alt={label}
                    className="w-full h-full object-contain opacity-80 
                        [filter:brightness(0)_invert(1)_contrast(2)_drop-shadow(0_0_3px_#00ff41)]
                        group-hover:[filter:brightness(0)_invert(1)_contrast(2)_drop-shadow(0_0_10px_#00ff41)]
                        transition-all"
                />
            </div>
            <span className="custom-font text-sm text-foreground group-hover:text-[#00ff41] transition-colors">
                {label}
            </span>
        </button>
    );
};