'use client';

import React from 'react';

import { cn } from '@/lib/utils';

import { TooltipContent, TooltipTrigger, Tooltip as TooltipUI } from '@/components/ui/tooltip';

interface TooltipProps {
  trigger?: React.ReactNode;
  children?: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
  delayDuration?: number;
  className?: string;
  disabled?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  asChild?: boolean;
  label?: string;
  maxWidth?: number;
}

export const Tooltip = ({
  trigger,
  children,
  side = 'top',
  align = 'start',
  sideOffset = 4,
  delayDuration = 0,
  className,
  disabled = false,
  label,
  open,
  onOpenChange,
  asChild = true,
  maxWidth = 420,
  ...props
}: TooltipProps) => {
  if (!trigger) {
    return (
      <TooltipUI delayDuration={delayDuration} open={open} onOpenChange={onOpenChange} {...props} />
    );
  }
  if (disabled) return <>{trigger}</>;

  return (
    <TooltipUI delayDuration={delayDuration} open={open} onOpenChange={onOpenChange}>
      <TooltipTrigger className="cursor-default" asChild={asChild}>
        {trigger}
      </TooltipTrigger>
      <TooltipContent
        side={side}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'tooltip-content border-border box-shadow-lg rounded-xl border bg-white p-3 shadow-md',
          className,
        )}>
        <div className="space-y-3">
          {label && <div className="text-muted-foreground text-xs">{label}</div>}
          <div className={cn('w-full overflow-y-auto text-sm')} style={{ maxWidth }}>
            {children}
          </div>
        </div>
      </TooltipContent>
    </TooltipUI>
  );
};

export { TooltipContent, TooltipTrigger };
