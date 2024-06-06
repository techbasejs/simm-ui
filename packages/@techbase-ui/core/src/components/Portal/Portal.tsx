import { createPortal } from "react-dom";

interface PortalProps {
  children?: React.ReactNode;
}

const Portal = ({ children }: PortalProps) => {
  return createPortal(children, document.body);
};

export default Portal;
