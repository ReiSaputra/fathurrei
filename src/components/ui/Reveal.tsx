import { useReveal } from '../../hooks/useReveal';

type Props = {
  children: React.ReactNode;
  delay?: number;         // ms
  direction?: 'up' | 'left';
  className?: string;
};

export default function Reveal({ children, delay = 0, direction = 'up', className = '' }: Props) {
  const { ref, visible } = useReveal({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`${visible
        ? direction === 'left' ? 'reveal-visible-left' : 'reveal-visible'
        : 'reveal-hidden'
      } ${className}`}
      style={visible && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
