import type { FC, ReactNode } from "react";
import ModalProvider from "./modal-provider";
import { TRPCProvider } from "./trpc-provider";
import { Toaster } from "sonner";
import { NextAuthProvider } from "./next-auth-provider";
import { ThemeProvider } from "./theme-provider";

type Props = {
  children: ReactNode;
};

export const Providers: FC<Props> = ({ children }) => {
  return (
    <TRPCProvider>
      <ModalProvider>
        <NextAuthProvider>
          <ThemeProvider attribute="class" disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </NextAuthProvider>
        <Toaster />
      </ModalProvider>
    </TRPCProvider>
  );
};
