import React, { use, useEffect, useRef } from 'react';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { useEmailConfirm } from '../hooks/useEmailConfirm';
import { useSnack } from '@/src/shared/hooks/useSnack';
import '../styles/styles.css';

interface Props {
  token: string;
}

const EmailConfirm = ({token}:Props) => {
  const router = useRouter();
  const {emailConfirmMutation, isSuccess, isError} = useEmailConfirm();

  const hasExecuted = useRef(false);

  useEffect(() => {
    if (token && !hasExecuted.current) {
      emailConfirmMutation(token);
      hasExecuted.current = true;
    }
  }, [token]);
  
  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    } 
    if (isError) {
      router.push('/login');
    }
  }, [isSuccess, isError]);
  
  return (
    <Modal 
      isOpen={!!token}
      backdrop="blur"
      onClose={() => {
        router.push('/login');
      }}
      isDismissable={false}
    >
      <ModalContent className='bg-[#040F10] border border-[#cdfeec]'>
        {() => (
          <>
            <ModalHeader className="flex justify-center">Confirmando tu correo</ModalHeader>
            <ModalFooter className='flex justify-center'>
              <PaperAirplaneIcon className="animation send w-8 h-8" /> 
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default EmailConfirm;