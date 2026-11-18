import { useState, useEffect, useRef } from 'react';

type ScrambleTextProps = {
  texts: string[];
  interval?: number;
  className?: string;
};

const CHARS = 'abcdefghijklmnopqrstuvwxyz';
const SCRAMBLE_DURATION = 800; // ms
const SCRAMBLE_FPS = 30;

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

export default function ScrambleText({ texts, interval = 2500, className = '' }: ScrambleTextProps) {
  const [display, setDisplay] = useState(texts[0]);
  const indexRef = useRef(0);
  const rafRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const scrambleTo = (target: string) => {
      const steps = Math.floor(SCRAMBLE_DURATION / (1000 / SCRAMBLE_FPS));
      let step = 0;

      const tick = () => {
        const progress = step / steps; // 0 → 1
        const resolved = Math.floor(progress * target.length);

        const chars = target
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' ';
            if (i < resolved) return char;
            return randomChar();
          })
          .join('');

        setDisplay(chars);
        step++;

        if (step <= steps) {
          rafRef.current = setTimeout(tick, 1000 / SCRAMBLE_FPS);
        } else {
          setDisplay(target);
        }
      };

      tick();
    };

    const timer = setInterval(() => {
      if (rafRef.current) clearTimeout(rafRef.current);
      indexRef.current = (indexRef.current + 1) % texts.length;
      scrambleTo(texts[indexRef.current]);
    }, interval);

    return () => {
      clearInterval(timer);
      if (rafRef.current) clearTimeout(rafRef.current);
    };
  }, [texts, interval]);

  return (
    <span className={`inline-block ${className}`}>
      {display}
    </span>
  );
}
