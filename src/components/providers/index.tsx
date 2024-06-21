import { FC, ReactNode } from "react";
import ModalProvider from "./modal-provider";
import { TRPCProvider } from "./trpc-provider";
import { Toaster } from "sonner";

type Props = {
  children: ReactNode;
};

export const Providers: FC<Props> = ({ children }) => {
  return (
    <TRPCProvider>
      <ModalProvider>
        {children}
        <Toaster />
      </ModalProvider>
    </TRPCProvider>
  );
};
