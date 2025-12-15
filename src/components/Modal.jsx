import { X } from "lucide-react";
import { useEffect} from "react";

export const Modal = ({ isOpen, onClose, title, children }) => {
    // close on ESC
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
        }
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <>
        {/* Backdrop */}
        <div
            className="fixed inset-0 bg-black bg/50 backdrop-blur-sm z-40"
            onClick={onClose}
        />
        
        {/* Modal Window */}
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl max-h-[80vh] overflow-hidden">
            <div className="bg-background border-2 border-[#00ff41] rounded-lg shadow-[0_0_20px_rgba(0,255,65,0.3)]">
                {/* Title Bar */}
                <div className="bg-[#00ff41] text-black px-4 py-2 px-4 py-2 flex justify-between items-center">
                    <h2 className="font-bold">{title}</h2>
                    <button 
                        onClick={onClose}
                        className="hover:bg-black/20 p-1 rounded transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content Area */}
                <div className="p-6 overflow-y-auto max-h-[calc(80vh-60px)]">
                    {children}
                </div>
            </div>
        </div>
        </>
    );
};
