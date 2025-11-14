'use client';

import * as React from 'react';
import { motion, useInView } from 'motion/react';

const ENTRY_ANIMATION = {
  initial: { rotateX: 0 },
  animate: { rotateX: 90 },
};

const EXIT_ANIMATION = {
  initial: { rotateX: 90 },
  animate: { rotateX: 0 },
};

const formatCharacter = (char) => (char === ' ' ? '\u00A0' : char);

const DEFAULT_TRANSITION = {
  duration: 0.5,
  delay: 0.1,
  ease: 'easeOut',
};

const RollingText = React.forwardRef(function RollingText(
  {
    transition = DEFAULT_TRANSITION,
    inView = false,
    inViewMargin = "0px",
    inViewOnce = true,
    text = "",
    play, // external trigger for hover
    ...props
  },
  forwardedRef
) {
  const localRef = React.useRef(null);
  React.useImperativeHandle(forwardedRef, () => localRef.current);

  // internal per-instance play memory
  const [played, setPlayed] = React.useState(false);

  // when "play" = true (hover) → mark this instance as played
  React.useEffect(() => {
    if (play) setPlayed(true);
  }, [play]);

  // fallback intersection logic (only used if play is undefined)
  const inViewResult = useInView(localRef, {
    once: inViewOnce,
    margin: inViewMargin,
  });

  const baseActive =
    typeof play === "boolean" ? play : (inView ? inViewResult : true);

  // Keep animation final state AFTER playing:
  // hover ends → play=false, but played=true → stay final
  const activate = baseActive || played;

  const characters = React.useMemo(() => text.split(""), [text]);

  return (
    <span data-slot="rolling-text" {...props} ref={localRef}>
      {characters.map((char, idx) => {
        const baseDelay =
          typeof transition.delay === "number" ? transition.delay : 0.1;
        const entryDelay = idx * baseDelay;
        const exitDelay = entryDelay + 0.3; // identical to shadcn

        return (
          <span
            key={idx}
            className="relative inline-block perspective-[9999999px] transform-3d w-auto"
            aria-hidden="true"
          >
            {/* ENTRY side */}
            <motion.span
              className="absolute inline-block backface-hidden origin-[50%_25%]"
              initial={ENTRY_ANIMATION.initial}
              animate={activate ? ENTRY_ANIMATION.animate : undefined}
              transition={{ ...transition, delay: entryDelay }}
            >
              {formatCharacter(char)}
            </motion.span>

            {/* EXIT side */}
            <motion.span
              className="absolute inline-block backface-hidden origin-[50%_100%]"
              initial={EXIT_ANIMATION.initial}
              animate={activate ? EXIT_ANIMATION.animate : undefined}
              transition={{ ...transition, delay: exitDelay }}
            >
              {formatCharacter(char)}
            </motion.span>

            {/* Invisible placeholder so layout doesn't shift */}
            <span className="invisible">{formatCharacter(char)}</span>
          </span>
        );
      })}

      <span className="sr-only">{text}</span>
    </span>
  );
});

export { RollingText };
export default RollingText;
