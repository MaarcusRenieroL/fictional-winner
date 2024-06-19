"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useModal } from "@/components/providers/modal-provider";
import { useMediaQuery } from "@mantine/hooks";

interface CustomAlertDailogProps {
  title: string;
  description: string;
  isDefaultOpen?: boolean;
  isDeleting: boolean;
  onDelete: () => void;
  actionText: string;
}
export const CustomDeleteAlertDailog = ({
  title,
  description,
  isDefaultOpen,
  isDeleting,
  onDelete,
  actionText,
}: CustomAlertDailogProps) => {
  const { isOpen, setClose, setOpen } = useModal();
  const isMobile = useMediaQuery("(max-width: 768px)");

  function handleClick() {
    setClose();
    onDelete();
  }
  return (
    <AlertDialog
      defaultOpen={isDefaultOpen}
      open={isOpen}
      onOpenChange={setClose}
    >
      <AlertDialogContent>
        <AlertDialogHeader className="flex flex-col gap-1 mb-0 pb-0">
          <AlertDialogTitle> {title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleClick}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
