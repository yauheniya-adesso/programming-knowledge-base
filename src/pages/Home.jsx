import Startravel from "../components/Startravel";
import { planets } from "../constants/planets";
import { Icons } from "../constants/icons";

const Home = () => {
  return (
    <div className="relative w-full overflow-hidden bg-black p-0 m-0" style={{ height: 'calc(100vh - 64px)' }}>
      <Startravel />
      
      {/* Central Sun */}
      <img
        src={Icons.programmingCore}
        alt="Programming Core"
        className="w-16 h-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ zIndex: 100 }}
      />
      
      {/* Planets with orbits and tooltips */}
      {planets.map((planet, i) => {
        const startAngle = Math.random() * 360;
        const animationName = `orbit-${i}`;
        const counterAnimationName = `counter-orbit-${i}`;
        
        return (
          <div key={i}>
            <style>
              {`
                @keyframes ${animationName} {
                  from { transform: rotate(${startAngle}deg); }
                  to { transform: rotate(${planet.direction === "cw" ? startAngle + 360 : startAngle - 360}deg); }
                }
                @keyframes ${counterAnimationName} {
                  from { transform: translate(${planet.orbit - planet.size / 2}px, -50%) rotate(${-startAngle}deg); }
                  to { transform: translate(${planet.orbit - planet.size / 2}px, -50%) rotate(${planet.direction === "cw" ? -(startAngle + 360) : -(startAngle - 360)}deg); }
                }
              `}
            </style>
            
            {/* Orbit circle */}
            <div
              className="absolute top-1/2 left-1/2 rounded-full pointer-events-none"
              style={{
                width: planet.orbit * 2,
                height: planet.orbit * 2,
                marginLeft: -planet.orbit,
                marginTop: -planet.orbit,
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
                className="absolute top-1/2 left-1/2 pointer-events-auto group"
                style={{
                  animation: `${counterAnimationName} ${planet.speed}s linear infinite`,
                  width: planet.size,
                  height: planet.size,
                }}
              >
                <img
                  src={planet.src}
                  alt={planet.label}
                  className="w-full h-full object-contain relative"
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