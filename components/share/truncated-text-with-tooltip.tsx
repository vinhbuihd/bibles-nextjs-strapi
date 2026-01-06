'use client';

import { useEffect, useRef, useState } from 'react';

interface TruncatedTextWithTooltipProps {
  text: string;
  className?: string;
}

export const TruncatedTextWithTooltip = ({ text, className }: TruncatedTextWithTooltipProps) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);

  useEffect(() => {
    const checkTruncation = () => {
      if (textRef.current) {
        setIsTruncated(textRef.current.scrollWidth > textRef.current.clientWidth);
      }
    };

    checkTruncation();
    // Re-check on window resize
    window.addEventListener('resize', checkTruncation);
    return () => window.removeEventListener('resize', checkTruncation);
  }, [text]);

  return (
    <div ref={textRef} className={className} title={isTruncated ? text : undefined}>
      {text}
    </div>
  );
};
