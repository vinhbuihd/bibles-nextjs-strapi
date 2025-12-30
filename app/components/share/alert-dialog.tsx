import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from '@/components/ui/alert-dialog';

interface AlertDialogComponentProps extends React.ComponentProps<typeof AlertDialogContent> {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  asChild?: boolean;
  classNameTrigger?: string;
}

export const AlertDialogComponent = ({
  trigger,
  children,
  className,
  open,
  onOpenChange,
  asChild,
  classNameTrigger,
  ...props
}: AlertDialogComponentProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <form>
        <AlertDialogTrigger asChild={asChild} className={classNameTrigger}>
          {trigger}
        </AlertDialogTrigger>
        <AlertDialogContent className={className} {...props}>
          {children}
        </AlertDialogContent>
      </form>
    </AlertDialog>
  );
};

export default AlertDialogComponent;
