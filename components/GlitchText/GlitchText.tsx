import "./GlitchText.style.css";

export default function GlitchText({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div>
            <h1 className={className || `text-5xl md:text-7xl font-bold tracking-tighter glitch-text`} data-text={children}>
                <span className="block">
                    {children}
                </span>
            </h1>
        </div>
    )
}