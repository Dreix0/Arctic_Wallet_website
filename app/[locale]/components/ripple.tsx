import React, { CSSProperties } from "react";

// Modify these
const MAIN_CIRCLE_SIZE = 300;
const MAIN_CIRCLE_OPACITY = 0.30;
const NUM_CIRCLES = 10;

const Ripple = React.memo(() => {
  return (
    <div className="absolute left-1/2 top-1/2 h-full w-full overflow-visible" id="ripple">
      {Array.from({ length: NUM_CIRCLES }, (_, i) => (
        <div
          key={i}
          className={`absolute -translate-x-1/2 -translate-y-1/2 animate-ripple rounded-full bg-secondaryBlue`}
          style={
            {
              width: MAIN_CIRCLE_SIZE + i * 150,
              height: MAIN_CIRCLE_SIZE + i * 150,
              opacity: MAIN_CIRCLE_OPACITY - i * 0.03,
              animationDelay: `${i * 0.06}s`,
            } as CSSProperties
          }
        ></div>
      ))}
    </div>
  );
});

Ripple.displayName = 'Ripple';

export default Ripple;
