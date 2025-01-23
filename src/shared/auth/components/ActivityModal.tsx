import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onButtonAccept: () => void;
  onButtonClose: () => void;
}

export const ActivityModal = ({
  isOpen,
  onClose,
  onButtonAccept,
  onButtonClose,
}: Props) => {
  
  const handleAccept = () => {
    onClose();
    onButtonAccept();
  };

  const handleClose = () => {
    onClose();
    onButtonClose();
  };

  return (
    <>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onClose={onClose}
        hideCloseButton
        isDismissable={true}
        disableAnimation={true}
      >
        <ModalContent >
          {/* {(onClose) => (
          )} */}
            <>
              <ModalHeader>
                <h1 className="self-center">Inactividad detectada</h1>
              </ModalHeader>
              <ModalBody>
                <p className="self-center">Desea continuar la sesión?</p>
              </ModalBody>
              <ModalFooter className="flex justify-center gap-6">
                <Button className="rounded-full" color="success" onPress={handleAccept}>
                  Aceptar
                </Button>
                <Button className="rounded-full" color="danger" variant="light" onPress={handleClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ActivityModal;