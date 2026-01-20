import React from 'react';

const Startravel = () => {
  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");

        .startravel-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          perspective: 50vmin;
          background-size: 100% 100%;
          background-image: radial-gradient(#0000, #673ab72e),
            linear-gradient(-90deg, #2000587d, #000, #9c27b02b),
            linear-gradient(0deg, #ff98002e, #000, #8bc34a5e);
          background-color: #000;
          box-shadow: 0 0 150vmin 11vmin #000 inset;
          z-index: 0;
        }

        .startravel-container::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(#0000, #0a123a),
            linear-gradient(180deg, #2000587d, #000, #9c27b02b),
            linear-gradient(0deg, #ff980054, #000, #009688ba);
          opacity: 0.25;
          transform-style: preserve-3d;
        }

        .st-sides {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(#0f0015 10%, #000000e0 35%, #fff0 75% 100%);
          transform-style: preserve-3d;
        }



        .st-stars {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 3;
          transform-style: preserve-3d;
        }

        .st-stars::before,
        .st-stars::after {
          content: "";
          position: absolute;
          width: 200%;
          height: 200%;
          background: #fff0;
          border-radius: 100%;
          transform: translateZ(-40vmin);
          opacity: 0;
          z-index: 1;
          left: -50%;
          top: -50%;
          transform-style: preserve-3d;
        }

        .st-stars::before {
          background-image: repeating-conic-gradient(#FF9868 0%, transparent 0.0002%, transparent 0.075%, transparent 0.65%),
            repeating-conic-gradient(#F566BA 0%, transparent 0.0004%, transparent 0.05%, transparent 0.495%);
          animation: st-stars 4s ease-in -1s infinite;
        }

        .st-stars::after {
          background-image: repeating-conic-gradient(#006EC7 0%, transparent 0.0002%, transparent 0.075%, transparent 0.65%),
            repeating-conic-gradient(#ffffff 0%, transparent 0.0004%, transparent 0.05%, transparent 0.495%);
          animation: st-stars2 4s ease-in -2s infinite;
        }

        .st-stars.second::before {
          background-image: repeating-conic-gradient(#F566BA 0%, transparent 0.0002%, transparent 0.075%, transparent 0.65%),
            repeating-conic-gradient(#006EC7 0%, transparent 0.0004%, transparent 0.05%, transparent 0.495%);
          animation: st-stars 4s ease-in -3s infinite;
        }

        .st-stars.second::after {
          background-image: repeating-conic-gradient(#ffffff 0%, transparent 0.0002%, transparent 0.075%, transparent 0.65%),
            repeating-conic-gradient(#FF9868 0%, transparent 0.0004%, transparent 0.05%, transparent 0.495%);
          animation: st-stars2 4s ease-in -4s infinite;
        }

        @keyframes st-color {
          0% { filter: hue-rotate(1deg); }
          100% { filter: hue-rotate(360deg); }
        }

        @keyframes st-lines-x {
          0% { background-position: 12vmin center; }
          100% { background-position: 0 center; }
        }

        @keyframes st-lines-y {
          0% { background-position: center 12vmin; }
          100% { background-position: center 0; }
        }

        @keyframes st-stars {
          0% { transform: translateZ(-40vmin); opacity: 0; }
          30%, 80% { opacity: 1; }
          100% { transform: translateZ(50vmin) rotate(15deg); opacity: 0; }
        }

        @keyframes st-stars2 {
          0% { transform: translateZ(-40vmin) rotate(180deg); opacity: 0; }
          30%, 80% { opacity: 1; }
          100% { transform: translateZ(50vmin) rotate(195deg); opacity: 0; }
        }
      `}</style>

      <div className="startravel-container">
        <div className="st-stars"></div>
        <div className="st-stars second"></div>
      </div>
    </>
  );
};

export default Startravel;