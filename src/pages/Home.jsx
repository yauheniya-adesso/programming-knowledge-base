import { useState, useMemo, useEffect } from "react";
import Startravel from "../components/Startravel";
import { planets } from "../constants/planets";
import { Icons } from "../constants/icons";

const Home = ({ onNavigate }) => {
  const [hoveredPlanet, setHoveredPlanet] = useState(null);
  const [scale, setScale] = useState(1);

  // Generate random start angles once and memoize them
  const startAngles = useMemo(() => {
    return planets.map(() => Math.random() * 360);
  }, []);

  // Calculate scale based on screen size
  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      const height = window.innerHeight - 64; // Account for navbar
      
      // Find the largest orbit
      const maxOrbit = Math.max(...planets.map(p => p.orbit));
      
      // Calculate scale to fit all orbits with some padding
      const padding = 50;
      const availableWidth = width - padding * 2;
      const availableHeight = height - padding * 2;
      const requiredSpace = maxOrbit * 2;
      
      const scaleX = availableWidth / requiredSpace;
      const scaleY = availableHeight / requiredSpace;
      
      // On mobile multiply by 1.4 (70% of the previous 2x), on desktop keep at 1
      const baseScale = Math.min(scaleX, scaleY, 1);
      const isMobile = width < 768;
      setScale(isMobile ? baseScale * 1.4 : 1);
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  // Map to get the gradient version of each icon
  const getGradientIcon = (label) => {
    const iconMap = {
      "JavaScript": Icons.javascriptFokus,
      "HTML": Icons.htmlFokus,
      "CSS": Icons.cssFokus,
      "Java": Icons.javaFokus,
      "Git": Icons.gitFokus,
    };
    return iconMap[label];
  };

  return (
    <div className="relative w-full overflow-hidden bg-black p-0 m-0" style={{ height: 'calc(100vh - 64px)' }}>
      <Startravel />
      
      {/* Central Sun */}
      <img
        src={Icons.programmingCoreAni}
        alt="Programming"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ 
          zIndex: 100,
          width: `${64 * scale}px`,
          height: `${64 * scale}px`
        }}
      />
      
      {/* Planets with orbits and tooltips */}
      {planets.map((planet, i) => {
        const startAngle = startAngles[i];
        const animationName = `orbit-${i}`;
        const counterAnimationName = `counter-orbit-${i}`;
        const isHovered = hoveredPlanet === i;
        const displayIcon = isHovered ? getGradientIcon(planet.label) : planet.src;
        
        // Scale orbit and size
        const scaledOrbit = planet.orbit * scale;
        const scaledSize = planet.size * scale;
        
        return (
          <div key={i}>
            <style>
              {`
                @keyframes ${animationName} {
                  from { transform: rotate(${startAngle}deg); }
                  to { transform: rotate(${planet.direction === "cw" ? startAngle + 360 : startAngle - 360}deg); }
                }
                @keyframes ${counterAnimationName} {
                  from { transform: translate(${scaledOrbit - scaledSize / 2}px, -50%) rotate(${-startAngle}deg); }
                  to { transform: translate(${scaledOrbit - scaledSize / 2}px, -50%) rotate(${planet.direction === "cw" ? -(startAngle + 360) : -(startAngle - 360)}deg); }
                }
              `}
            </style>
            
            {/* Orbit circle */}
            <div
              className="absolute top-1/2 left-1/2 rounded-full pointer-events-none"
              style={{
                width: scaledOrbit * 2,
                height: scaledOrbit * 2,
                marginLeft: -scaledOrbit,
                marginTop: -scaledOrbit,
                border: "1px solid #006EC7",
                borderRadius: "50%",
                zIndex: 10,
              }}
            />
            
            {/* Planet rotating container */}
            <div
              className="absolute top-1/2 left-1/2 pointer-events-none"
              style={{
                animation: `${animationName} ${planet.speed}s linear infinite`,
                zIndex: 200 + i,
              }}
            >
              <div
                className="absolute top-1/2 left-1/2 pointer-events-auto group cursor-pointer"
                style={{
                  animation: `${counterAnimationName} ${planet.speed}s linear infinite`,
                  width: scaledSize,
                  height: scaledSize,
                }}
                onMouseEnter={() => setHoveredPlanet(i)}
                onMouseLeave={() => setHoveredPlanet(null)}
                onClick={() => onNavigate(planet.label)}
              >
                <img
                  src={displayIcon}
                  alt={planet.label}
                  className="w-full h-full object-contain relative transition-all duration-300"
                  style={{ zIndex: 1 }}
                />
                
                {/* Tooltip */}
                <div 
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 text-xs bg-white/95 text-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity w-[200px] text-center leading-tight pointer-events-none"
                  style={{ 
                    zIndex: 99999,
                  }}
                >
                  <div className="font-semibold mb-1">{planet.label}</div>
                  <div className="text-[11px] leading-snug">{planet.description}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;