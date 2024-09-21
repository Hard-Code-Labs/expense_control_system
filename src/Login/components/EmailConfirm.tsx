import React, { use, useEffect } from 'react';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { useEmailConfirm } from '../hooks/useEmailConfirm';
import { useSnack } from '@/src/hooks/useSnack';
import '../styles.css';

interface Props {
  token: string;
}

const EmailConfirm = ({token}:Props) => {
  const router = useRouter();
  const { enqueueSnack } = useSnack();
  const { onClose, onOpenChange } = useDisclosure();
  const {emailConfirmMutation, isSuccess, isLoading} = useEmailConfirm();

  const handleConfirm = () => {
    emailConfirmMutation(token);
  }

  const handleClose = () => {
    onClose();
    router.push('/login');
  }
  
  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        router.push('/login');
      }, 1000);
      enqueueSnack("Ahora puedes iniciar sesión.", "success");
    }
  }, [isSuccess]);
  
  return (
    <Modal 
      isOpen={token ? true : false}
      onOpenChange={onOpenChange}
      backdrop="blur"
      onClose={handleClose}
      isDismissable={false}
    >
      <ModalContent className='bg-[#040F10] border border-[#cdfeec]'>
        {() => (
          <>
            <ModalHeader className="flex justify-center">Confirma tu correo</ModalHeader>
            <ModalBody>
              <p className="flex justify-center">Para confirmar tu correo, haz click en el botón</p>
            </ModalBody>
            <ModalFooter className='flex justify-center'>
              <Button
                size="lg"
                radius="full"
                isDisabled={isLoading}
                className="w-1/2 bg-[#00BE99] sendHover"
                onPress={handleConfirm}
              >
                <PaperAirplaneIcon className={`${isLoading ? "animation" : ""} send`} />
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default EmailConfirm;