import styled from "@emotion/styled";
import Button, { ButtonProps } from "../Button/Button";

interface ModalActionsProps {
  okBtnProps?: ButtonProps;
  cancelBtnProps?: ButtonProps;
  onOk?: () => void;
  onCancel?: () => void;
}

const ModalActionsStyled = styled.div(() => ({
  display: "flex",
  padding: "16px",
  columnGap: "10px",
  justifyContent: "flex-end",
}));

const ModalActions = ({
  okBtnProps,
  cancelBtnProps,
  onOk,
  onCancel,
}: ModalActionsProps) => {
  return (
    <ModalActionsStyled>
      <Button onClick={onOk} {...okBtnProps}>
        OK
      </Button>
      <Button variant="outlined" onClick={onCancel} {...cancelBtnProps}>
        Cancel
      </Button>
    </ModalActionsStyled>
  );
};

export default ModalActions;
