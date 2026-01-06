import React from "react";

import { X } from "lucide-react";

import { cn } from "../../lib/utils";

export interface TagInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange"
  > {
  value?: string[];
  onChange?: (tags: string[]) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  maxTags?: number;
  error?: boolean;
}

const TagInput = ({
  value = [],
  onChange,
  placeholder = "Nhập và nhấn Enter",
  className,
  disabled = false,
  maxTags,
  error = false,
  ...props
}: TagInputProps) => {
  const [inputValue, setInputValue] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleAddTag = (tagValue: string) => {
    const trimmedValue = tagValue.trim();
    if (!trimmedValue) return;

    // Check if tag already exists
    if (value.includes(trimmedValue)) {
      setInputValue("");
      return;
    }

    // Check max tags limit
    if (maxTags && value.length >= maxTags) {
      setInputValue("");
      return;
    }

    const newTags = [...value, trimmedValue];
    onChange?.(newTags);
    setInputValue("");
  };

  const handleRemoveTag = (indexToRemove: number) => {
    if (disabled) return;
    const newTags = value.filter((_, index) => index !== indexToRemove);
    onChange?.(newTags);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return;

    // Add tag on Enter
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag(inputValue);
    }

    // Remove last tag on Backspace when input is empty
    if (e.key === "Backspace" && !inputValue && value.length > 0) {
      handleRemoveTag(value.length - 1);
    }
  };

  const handleBlur = () => {
    // Only add tag if focus moved outside the container
    if (inputValue.trim()) {
      handleAddTag(inputValue);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div
      className={cn(
        "flex min-h-11 w-full flex-wrap items-center gap-2 rounded-[12px] border bg-white p-2 font-light shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-colors",
        error
          ? "ring-1 ring-red-500"
          : isFocused
          ? "border-[1.5px] border-black"
          : "border-[1.5px] border-gray-300",
        disabled && "cursor-not-allowed bg-[#F4F4F5]",
        className
      )}
    >
      {value.map((tag, index) => (
        <span
          key={`${tag}-${index}`}
          className={cn(
            "bg-muted flex items-center gap-1 rounded px-2 py-0.5 hover:bg-[#F4F4F5]",
            {
              "text-muted-foreground bg-blue-200/30": disabled,
            }
          )}
        >
          <span>{tag}</span>
          {!disabled && (
            <button
              type="button"
              tabIndex={-1}
              onMouseDown={(e) => {
                e.preventDefault();
              }}
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveTag(index);
              }}
              className="flex items-center justify-center text-gray-500 transition-colors hover:text-gray-700 focus:outline-none"
            >
              <X
                size={12}
                className="text-muted-foreground hover:text-foreground cursor-pointer"
              />
            </button>
          )}
        </span>
      ))}
      <input
        ref={inputRef}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        placeholder={value.length === 0 ? placeholder : ""}
        className={cn(
          "placeholder:text-gray flex-1 border-none bg-transparent text-sm text-black outline-none",
          disabled && "cursor-not-allowed"
        )}
        {...props}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
          // Call both the custom handler and any onBlur from props
          handleBlur();
        }}
      />
    </div>
  );
};

export default TagInput;
