import Image from "next/image";

interface CardProps {
  title?: string;
  className?: string;
}

export default function CharizardCard({ title = "PITCH ARENA", className = "" }: CardProps) {
  return (
    <div
      className={`relative bg-white border-black flex flex-col items-center ${className}`}
      style={{
        "--card-w": "clamp(160px, 30vw, 320px)",
        width: "var(--card-w)",
        borderRadius: "calc(var(--card-w) * 0.125)",
        borderWidth: "max(2px, calc(var(--card-w) * 0.01))",
      } as React.CSSProperties}
    >
      {/* Top Badge */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-[#FFB84D] border-black rounded-full flex items-center justify-center shadow-sm"
        style={{
            width: "calc(var(--card-w) * 0.18)",
            height: "calc(var(--card-w) * 0.18)",
            borderWidth: "max(1px, calc(var(--card-w) * 0.007))",
            padding: "calc(var(--card-w) * 0.03)"
        }}
      >
        <div className="relative w-full h-full">
          <Image src="/pokemons/fire.png" alt="Fire" fill className="object-contain" />
        </div>
      </div>

      {/* Image Section */}
      <div 
        className="bg-[#FFF8D6] w-full flex justify-center items-center border-b border-gray-100 overflow-hidden"
        style={{
            paddingTop: "calc(var(--card-w) * 0.12)",
            paddingBottom: "calc(var(--card-w) * 0.06)",
            borderTopLeftRadius: "calc(var(--card-w) * 0.115)",
            borderTopRightRadius: "calc(var(--card-w) * 0.115)",
        }}
      >
        <div className="relative" style={{ width: "calc(var(--card-w) * 0.65)", height: "calc(var(--card-w) * 0.65)" }}>
          <Image src="/pokemons/charizard.svg" alt="Charizard" fill className="object-contain" />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full flex flex-col items-center text-center" style={{ padding: "calc(var(--card-w) * 0.06)" }}>
        <h3 
            className="font-black tracking-tight text-black uppercase"
            style={{ fontSize: "calc(var(--card-w) * 0.075)", marginBottom: "calc(var(--card-w) * 0.01)" }}
        >
          {title}
        </h3>
        <p 
            className="font-bold text-gray-400 tracking-widest uppercase"
            style={{ fontSize: "calc(var(--card-w) * 0.035)", marginBottom: "calc(var(--card-w) * 0.04)" }}
        >
          STRATEGY TYPE
        </p>

        {/* Tags Grid (2x2) */}
        <div className="grid grid-cols-2 w-full" style={{ gap: "calc(var(--card-w) * 0.02)" }}>
          {["Strategy Builder", "Idea Master", "Market Analyst", "Pitch Pro"].map((tag, i) => (
            <span 
                key={i} 
                className="bg-gray-100 text-black font-bold rounded-full border border-black/10" 
                style={{ fontSize: "calc(var(--card-w) * 0.030)", padding: "calc(var(--card-w) * 0.02) 0" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}