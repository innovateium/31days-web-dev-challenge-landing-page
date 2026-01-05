'use client';

import { Easing, motion, Transition } from 'motion/react';
import { Fragment, useEffect, useMemo, useRef, useState } from 'react';

type BlurTextProps = {
  text1?: string;
  text2?: string;
  text3?: string;
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Record<string, string | number>;
  animationTo?: Array<Record<string, string | number>>;
  easing?: Easing | Easing[];
  onAnimationComplete?: () => void;
  stepDuration?: number;
};

const buildKeyframes = (
  from: Record<string, string | number>,
  steps: Array<Record<string, string | number>>
): Record<string, Array<string | number>> => {
  const keys = new Set<string>([...Object.keys(from), ...steps.flatMap((s) => Object.keys(s))]);

  const keyframes: Record<string, Array<string | number>> = {};
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])];
  });
  return keyframes;
};

const BlurText: React.FC<BlurTextProps> = ({
  text1 = '',
  text2 = '',
  text3 = '',
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = (t: number) => t,
  onAnimationComplete,
  stepDuration = 0.35
}) => {
  const elements = useMemo(() => {
    const getElements = (t: string) => (animateBy === 'words' ? t.split(' ') : t.split(''));

    if (text) {
      const e = getElements(text);
      return e.map((t, i) => ({
        content: t,
        color: undefined,
        addSpace: animateBy === 'words' && i < e.length - 1,
        showBreak: false
      }));
    }

    const res: Array<{ content: string; color?: string; addSpace: boolean; showBreak: boolean }> = [];

    if (text1) {
      const e1 = getElements(text1);
      e1.forEach((t, i) => {
        res.push({
          content: t,
          addSpace: animateBy === 'words' && (i < e1.length - 1 || !!text2),
          showBreak: false
        });
      });
      if (animateBy === 'letters' && !!text2) {
        res.push({ content: ' ', addSpace: false, showBreak: false });
      }
    }

    if (text2) {
      const e2 = getElements(text2);
      e2.forEach((t, i) => {
        res.push({
          content: t,
          color: '#ff6000',
          addSpace: animateBy === 'words' && i < e2.length - 1,
          showBreak: i === e2.length - 1
        });
      });
    }

    if (text3) {
      const e3 = getElements(text3);
      e3.forEach((t, i) => {
        res.push({
          content: t,
          addSpace: animateBy === 'words' && i < e3.length - 1,
          showBreak: false
        });
      });
    }

    return res;
  }, [text, text1, text2, text3, animateBy]);

  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current as Element);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    () => (direction === 'top' ? { filter: 'blur(10px)', opacity: 0, y: -50 } : { filter: 'blur(10px)', opacity: 0, y: 50 }),
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: 'blur(5px)',
        opacity: 0.5,
        y: direction === 'top' ? 5 : -5
      },
      { filter: 'blur(0px)', opacity: 1, y: 0 }
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) => (stepCount === 1 ? 0 : i / (stepCount - 1)));

  return (
    <div ref={ref} className={`blur-text ${className} flex flex-wrap`}>
      {elements.map((segment, index) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

        const spanTransition: Transition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
          ease: easing
        };

        return (
          <Fragment key={index}>
            <motion.span
              initial={fromSnapshot}
              animate={inView ? animateKeyframes : fromSnapshot}
              transition={spanTransition}
              onAnimationComplete={index === elements.length - 1 ? onAnimationComplete : undefined}
              style={{
                display: 'inline-block',
                willChange: 'transform, filter, opacity',
                ...(segment.color ? { color: segment.color } : {})
              }}
            >
              {segment.content === ' ' ? '\u00A0' : segment.content}
              {animateBy === 'words' && segment.addSpace && '\u00A0'}
            </motion.span>
            {segment.showBreak && <div className="w-full h-0" />}
          </Fragment>
        );
      })}
    </div>
  );
};

export default BlurText;
