import { useEffect, useMemo, useRef, useState } from "react";

import {
  ChevronDownIcon,
  ChevronUpIcon,
  Loader2,
  Search,
  X,
} from "lucide-react";

import { cn } from "../../lib/utils";

import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export interface Option {
  value: string;
  label: string;
}

interface MultipleSelectProps {
  name?: string;
  value: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  options: Option[];
  isNullValue?: boolean;
  invalid?: boolean;
  showSelectAllActions?: boolean;
  selectAllLabel?: string;
  deselectAllLabel?: string;
}

export const MultipleSelect = ({
  name,
  value,
  onChange,
  placeholder,
  searchPlaceholder = "Tìm kiếm...",
  disabled = false,
  isLoading = false,
  className,
  options,
  isNullValue = false,
  invalid = false,
  showSelectAllActions = false,
  selectAllLabel = "Chọn tất cả",
  deselectAllLabel = "Bỏ chọn tất cả",
}: MultipleSelectProps) => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [maxDisplay, setMaxDisplay] = useState(10); // Bắt đầu với số lớn, sẽ tính lại sau
  const containerRef = useRef<HTMLDivElement>(null);

  const currentValues = Array.isArray(value) ? value : [];

  // Filter options based on search term
  const filteredOptions = useMemo(() => {
    if (!searchTerm.trim()) return options;
    const lowerSearch = searchTerm.toLowerCase().trim();
    return options.filter((option) =>
      option.label.toLowerCase().includes(lowerSearch)
    );
  }, [options, searchTerm]);

  // Clear search when popover closes
  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      setSearchTerm("");
    }
  };

  // Select all options
  const handleSelectAll = () => {
    const allValues = options.map((opt) => opt.value);
    onChange(allValues);
  };

  // Deselect all options
  const handleDeselectAll = () => {
    if (isNullValue) {
      onChange([]);
    }
  };

  const handleRemoveItem = (valueToRemove: string) => {
    // If isNullValue is false, don't allow removing the last item
    if (!isNullValue && currentValues.length === 1) {
      return;
    }
    const newValues = currentValues.filter((v: string) => v !== valueToRemove);
    onChange(newValues);
  };

  // Tính toán số items có thể hiển thị dựa trên chiều rộng container
  useEffect(() => {
    const calculateMaxDisplay = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      // Trừ đi khoảng padding và icon chevron (~40px)
      const availableWidth = containerWidth - 40;

      // Ước tính chiều rộng mỗi item (trung bình ~100px cho item có X button)
      const estimatedItemWidth = 100;
      // Chiều rộng của badge "+N" (~35px)
      const badgeWidth = 35;

      // Tính số items có thể hiển thị
      let count = Math.floor(availableWidth / estimatedItemWidth);
      // Nếu còn items chưa hiển thị, cần chừa chỗ cho badge "+N"
      if (count < currentValues.length) {
        count = Math.floor((availableWidth - badgeWidth) / estimatedItemWidth);
      }

      setMaxDisplay(Math.max(1, count));
    };

    calculateMaxDisplay();

    // Recalculate khi resize
    const resizeObserver = new ResizeObserver(calculateMaxDisplay);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [currentValues.length]);

  // Display values function - improved with better formatting
  const getDisplayValue = () => {
    if (disabled && currentValues.length === 0) {
      return <span className="text-muted-foreground">-</span>;
    }
    if (!currentValues || currentValues.length === 0) return "";

    const isOnlyOneSelected = currentValues.length === 1;
    // Show X button only if: not disabled AND (isNullValue is true OR more than 1 item selected)
    const canRemove = !disabled && (isNullValue || !isOnlyOneSelected);

    const displayedValues = currentValues.slice(0, maxDisplay);
    const remainingCount = currentValues.length - maxDisplay;

    return (
      <span className="flex flex-wrap gap-1">
        {displayedValues.map((v: string) => {
          const option = options.find((opt) => opt.value === v);
          const displayLabel = option ? option.label : v;
          return (
            <span
              key={v}
              className={cn(
                "bg-muted flex max-w-[150px] items-center gap-1 rounded px-2 py-0.5 hover:bg-[#F4F4F5]",
                { "bg-blue-200/30": disabled }
              )}
            >
              <span className="truncate">{displayLabel}</span>
              {canRemove && (
                <X
                  size={12}
                  className="text-muted-foreground hover:text-foreground shrink-0 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveItem(v);
                  }}
                />
              )}
            </span>
          );
        })}
        {remainingCount > 0 && (
          <span className="bg-muted text-muted-foreground rounded px-2 py-0.5 text-sm">
            +{remainingCount}
          </span>
        )}
      </span>
    );
  };

  const handleCheckboxChange = (itemValue: string, checked: boolean) => {
    let newValues: string[];

    if (checked) {
      // Add item if not already in the array
      newValues = currentValues.includes(itemValue)
        ? currentValues
        : [...currentValues, itemValue];
    } else {
      // If isNullValue is false, don't allow unchecking the last item
      if (
        !isNullValue &&
        currentValues.length === 1 &&
        currentValues.includes(itemValue)
      ) {
        return;
      }
      // Remove item from array
      newValues = currentValues.filter((v: string) => v !== itemValue);
    }

    onChange(newValues);
  };

  return (
    <div ref={containerRef} className={cn("w-full", className)}>
      <Popover open={open} onOpenChange={handleOpenChange}>
        <PopoverTrigger asChild>
          <button
            disabled={disabled || isLoading}
            className={cn(
              "group disabled:text-muted-foreground h-auto min-h-11 w-full rounded-[12px] border border-[#E4E4E7] disabled:cursor-not-allowed disabled:bg-[#F4F4F5]",
              invalid && "border-destructive"
            )}
          >
            <div
              role="combobox"
              aria-expanded={open}
              className={cn(
                "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-10 w-full items-center justify-between rounded-[12px] px-3 py-2 text-sm font-light focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed",
                "disabled:hover:text-muted-foreground h-auto min-h-[40px] cursor-pointer group-disabled:bg-[#F4F4F5] hover:bg-transparent",
                !currentValues.length && "text-muted-foreground",
                (disabled || isLoading) && "cursor-not-allowed"
              )}
            >
              <div className="flex flex-1 flex-wrap items-center gap-1 overflow-hidden">
                {getDisplayValue() || (
                  <span className="text-muted-foreground">{placeholder}</span>
                )}
              </div>

              <div className="flex shrink-0 items-center gap-2">
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : open ? (
                  <ChevronUpIcon
                    className="h-4 w-4 shrink-0 opacity-50"
                    color="#71717A"
                  />
                ) : (
                  <ChevronDownIcon
                    className="h-4 w-4 shrink-0 opacity-50"
                    color="#71717A"
                  />
                )}
              </div>
            </div>
          </button>
        </PopoverTrigger>
        <PopoverContent
          style={{ width: "var(--radix-popover-trigger-width)" }}
          className="p-0"
          align="start"
        >
          {/* Search Input */}

          <div className="flex h-9 items-center gap-2 border-b px-2">
            <Search className="size-4 shrink-0 opacity-50" />
            <input
              placeholder={searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <div className="max-h-60 space-y-2 overflow-y-auto p-3">
            {filteredOptions.map((option, index) => {
              const itemValue = option.value;
              const itemLabel = option.label;
              const isChecked = currentValues.includes(itemValue);
              const isOnlyOneSelected = currentValues.length === 1;
              // Disable checkbox only if: isNullValue is false AND it's the last selected item
              const isDisabled = !isNullValue && isOnlyOneSelected && isChecked;

              return (
                <div
                  key={`${itemValue}-${index}`}
                  className="flex items-center gap-2"
                >
                  <Checkbox
                    checked={isChecked}
                    disabled={isDisabled}
                    id={name ? `${name}-${itemValue}` : itemValue}
                    onCheckedChange={(checked) =>
                      handleCheckboxChange(itemValue, checked === true)
                    }
                  />
                  <Label
                    className={cn(
                      "flex-1 font-normal break-all",
                      isDisabled
                        ? "cursor-not-allowed opacity-50"
                        : "cursor-pointer"
                    )}
                    htmlFor={name ? `${name}-${itemValue}` : itemValue}
                  >
                    {itemLabel}
                  </Label>
                </div>
              );
            })}
            {filteredOptions.length === 0 ? (
              <div className="text-muted-foreground py-2 text-center text-sm">
                {searchTerm ? "Không tìm thấy kết quả" : "Không có dữ liệu"}
              </div>
            ) : null}
          </div>
          {showSelectAllActions && (
            <div className="flex justify-between border-t p-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleDeselectAll}
                disabled={!isNullValue}
              >
                {deselectAllLabel}
              </Button>
              <Button variant="ghost" size="sm" onClick={handleSelectAll}>
                {selectAllLabel}
              </Button>
            </div>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
};
