import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';

type Props = { children: React.ReactNode };

export default function PageTransition({ children }: Props) {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [phase, setPhase] = useState<'idle' | 'exit' | 'enter'>('idle');
  const prevKey = useRef(location.key);

  useEffect(() => {
    if (location.key === prevKey.current) return;
    prevKey.current = location.key;

    // Start exit
    setPhase('exit');

    const exitTimer = setTimeout(() => {
      setDisplayChildren(children);
      setPhase('enter');
    }, 180); // matches exit duration

    const enterTimer = setTimeout(() => {
      setPhase('idle');
    }, 360); // exit + enter duration

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(enterTimer);
    };
  }, [location.key, children]);

  const isTransitioning = phase !== 'idle';

  const style: React.CSSProperties =
    phase === 'exit'
      ? { opacity: 0, transform: 'translateY(10px)', transition: 'opacity 180ms ease, transform 180ms ease' }
      : phase === 'enter'
      ? { opacity: 0, transform: 'translateY(-10px)', animation: 'page-enter 180ms ease forwards' }
      : {};

  return (
    <div style={{ overflow: isTransitioning ? 'hidden' : undefined }} className="flex-1">
      <div style={style}>
        {displayChildren}
      </div>
    </div>
  );
}
