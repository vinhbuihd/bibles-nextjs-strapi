'use client';

import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import { Eye, EyeSlash } from 'iconsax-reactjs';

import { cn } from '@/lib/utils';

const inputVariants = cva(
  'text-sm/[10px] h-11 border relative w-full shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] placeholder:text-gray disabled:text-muted-foreground dark:text-white placeholder:font-medium text-black font-medium p-3 rounded-[12px] disabled:bg-gray-300 disabled:pointer-events-none disabled:bg-accent disabled:border focus:ring-1 outline-none focus:ring-black',
  {
    variants: {
      variant: {
        default: '',
        Search:
          'border border-gray-300 shadow-sm py-[7px] pl-8 pr-2 text-xs placeholder:text-black',
        'input-form':
          'focus:outline-[4px] pr-9 focus:outline-primary/20 outline-offset-0 focus:ring-1 focus:ring-primary',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
  asChild?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  small?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      type,
      asChild = false,
      small = false,
      iconLeft = null,
      iconRight = null,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'input';
    const [fieldType, setFieldType] = React.useState(type);
    const isIconLeft = iconLeft ? 'pl-9' : '';
    const isIconRight = iconRight ? 'pr-9' : '';

    return (
      <div className="relative flex-auto">
        <Comp
          type={fieldType}
          className={cn(
            inputVariants({
              variant,
              className,
            }),
            isIconLeft,
            isIconRight,
          )}
          ref={ref}
          {...props}
        />
        {!!iconLeft && (
          <span
            className={cn(
              'text-grey peer-focus:text-dark pointer-events-none absolute top-0 left-0 flex h-9 w-9 items-center justify-center dark:text-white',
              small ? 'h-[30px] w-[30px]' : 'h-11 w-11',
            )}>
            {iconLeft}
          </span>
        )}

        {!!iconRight && (
          <span
            className={cn(
              'text-grey peer-focus:text-dark pointer-events-none absolute top-0 right-0 flex items-center justify-center dark:text-white',
              small ? 'h-[30px] w-[30px]' : 'h-11 w-11',
            )}>
            {iconRight}
          </span>
        )}

        {type === 'password' && (
          <button
            tabIndex={-1}
            type="button"
            className="text-grey peer-focus:text-dark absolute top-0 right-0 flex h-11 w-11 items-center justify-center"
            onClick={() => setFieldType(fieldType === 'password' ? 'text' : 'password')}>
            {fieldType === 'password' ? (
              <EyeSlash color="#71717A" size={20} />
            ) : (
              <Eye color="#71717A" size={20} />
            )}
          </button>
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input, inputVariants };
