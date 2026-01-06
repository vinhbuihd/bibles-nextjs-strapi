import { cn } from "../../lib/utils";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

interface LongTextHoverProps {
  value?: string | number;
  label?: string;
}

const formatTooltip = (quotationCode: string) => (
  <>
    {quotationCode.split(",").map((code) => (
      <div key={code}>
        {code} <br />
      </div>
    ))}
  </>
);

const LongTextHover = ({ label, value }: LongTextHoverProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span
          className={cn(
            "line-clamp-1 max-w-[280px] cursor-pointer text-sm font-medium break-words overflow-ellipsis whitespace-pre"
          )}
        >
          {value || "-"}
        </span>
      </HoverCardTrigger>
      <HoverCardContent
        className="flex w-full max-w-[400px] flex-col items-center gap-0 border-none bg-transparent px-3 shadow-none"
        align="center"
      >
        <div className="bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 flex max-h-[500px] w-full max-w-[500px] min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) flex-col items-center overflow-y-auto rounded-md border p-3 shadow-md">
          <div className="flex w-full items-start gap-2 break-words whitespace-pre-wrap">
            <div className="min-w-[100px] font-medium">{label}:</div>
            <div className={cn("font-semibold")}>
              {value ? formatTooltip(value.toString()) : "-"}
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default LongTextHover;
