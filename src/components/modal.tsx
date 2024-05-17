import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogFooter,
} from "@/components/shadcn/ui/dialog";

interface IProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
  header?: { h1: string; p?: string };
}

export const CloseModal = ({ children }: { children: React.ReactNode }) => {
  return <DialogClose asChild>{children}</DialogClose>;
};

export const Modal = ({ children, trigger, header }: IProps) => {
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent>
        {/* HEADER */}
        {header && (
          <DialogHeader>
            <DialogTitle>{header.h1}</DialogTitle>
            {header?.p && <DialogDescription>{header.p}</DialogDescription>}
          </DialogHeader>
        )}

        {/* BODY */}
        {children}
      </DialogContent>
    </Dialog>
  );
};
