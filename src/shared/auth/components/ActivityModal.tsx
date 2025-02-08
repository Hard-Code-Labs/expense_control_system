import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { CursorArrowRaysIcon, CursorArrowRippleIcon } from "@heroicons/react/24/solid";

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
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      onClose={onClose}
      hideCloseButton
      isDismissable={false}
    >
      <ModalContent className="bg-black border border-warning p-2">
        <ModalHeader className="flex justify-center items-center gap-6">
          <CursorArrowRippleIcon className="w-8 text-warning" />
          <h1 className="text-center text-2xl font-bold">Inactividad detectada</h1>
          <CursorArrowRaysIcon className="w-8 text-warning" />
        </ModalHeader>
        <ModalBody>
          <p className="text-center text-md">Desea continuar usando la aplicación?</p>
        </ModalBody>
        <ModalFooter className="flex justify-center gap-6">
          <Button className="rounded-full px-10" color="success" variant="flat" onPress={handleAccept}>
            Si, continuar
          </Button>
          <Button className="rounded-full px-10" color="danger" variant="light" onPress={handleClose}>
            No, cerrar sesión
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ActivityModal;