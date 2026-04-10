import { useMemo } from "react";

const FloatingPetals = () => {
  const petals = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        duration: `${8 + Math.random() * 12}s`,
        delay: `${Math.random() * 10}s`,
        size: 8 + Math.random() * 14,
        opacity: 0.15 + Math.random() * 0.25,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute animate-float-petal"
          style={{
            left: p.left,
            "--duration": p.duration,
            "--delay": p.delay,
            animationDelay: p.delay,
          } as React.CSSProperties}
        >
          <svg
            width={p.size}
            height={p.size}
            viewBox="0 0 20 20"
            fill={`hsl(38 65% 50% / ${p.opacity})`}
          >
            <ellipse cx="10" cy="10" rx="5" ry="9" transform="rotate(30 10 10)" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FloatingPetals;
