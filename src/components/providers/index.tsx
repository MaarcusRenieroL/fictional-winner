import { FC, ReactNode } from "react";
import ModalProvider from "./modal-provider";

type Props = {
  children: ReactNode;
};

export const Providers: FC<Props> = ({ children }) => {
  return <ModalProvider>{children}</ModalProvider>;
};
