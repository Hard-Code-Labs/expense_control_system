import CustomInput from '@/src/shared/components/form/CustomInput';
import { useSnack } from '@/src/shared/hooks/useSnack';
import { encryptWithPublicKey } from '../../register/utils/encoder';
import { AtSymbolIcon, EyeIcon, EyeSlashIcon, LockClosedIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { Button, Image, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import { Field, FormikProvider, useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { resetPasswordSchema } from '../utils/schema';

interface Props {
  token: string;
}

const ResetPassword = ({token}: Props) => {
  const router = useRouter();
  const { enqueueSnack } = useSnack();
  const { onOpenChange } = useDisclosure();

  const [isVisible, setIsVisible] = useState(false);
  const [encryptedPassword, setEncryptedPassword] = useState("");
  const toggleVisibility = () => setIsVisible(!isVisible);

  const handlePasswordChange = (password: string) => {
    const encrypted = encryptWithPublicKey(password);
    setEncryptedPassword(encrypted);
  }

  const passwordSubmit = useFormik({
    initialValues: {
      perPassword: "",
      confirmPassword: "",
    },
    validationSchema: resetPasswordSchema,
    onSubmit: () => {
      const valuesToSend = {
        perPassword: encryptedPassword,
      };
      console.log(valuesToSend)
    }
  })
  
  return (
    <Modal 
      isOpen={token ? true : false}
      onOpenChange={onOpenChange}
      isDismissable={false}
      hideCloseButton
      size='full'
    >
      <ModalContent 
        style={{background: "linear-gradient(63.36deg, #0C1314 9.43%, #11594E 75.57%, #00BE99 99.87%)"}}
      >
        {() => (
          <>
            <ModalBody className='w-screen min-h-[1000px] sm:min-h-[700px] h-screen flex flex-col-reverse sm:flex-row justify-center items-center p-[40px] gap-[8.125vw] text-[#cdfeec]'>
            <Image
              src='/newPassword.png'
              className='sm:w-[35.156vw] sm:h-[35.156vw] w-[50vw] h-[50vw]'
            />
              <section className='flex flex-col justify-center items-center gap-8'>
                <div className='w-full flex flex-col items-center sm:items-center gap-5'>
                  <p className='font-extrabold text-xl'>
                    Cambiar contraseña
                  </p>
                </div>
                <form className='w-[60vw] min-w-[225px] sm:w-[38vw] sm: max-w-[350px] h-fit flex flex-col justify-center items-center gap-6'>
                  <FormikProvider value={passwordSubmit} >
                    <Field
                      name="perPassword"
                      type={isVisible ? "text" : "password"}
                      placeholder="Nueva contraseña"
                      component={CustomInput}
                      startContent={
                        <LockClosedIcon className="w-6 text-[#cdfeec]"/>
                      }
                      endContent={
                        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                          {isVisible ? (
                            <EyeSlashIcon className="w-6 text-[#cdfeec]" />
                          ) : (
                            <EyeIcon className="w-6 text-[#cdfeec]" />
                          )}
                        </button>
                      }
                      isInvalid={
                        passwordSubmit.errors.perPassword &&
                        passwordSubmit.touched.perPassword
                      }
                      errorMessage={passwordSubmit.errors.perPassword}
                      color={passwordSubmit.errors.perPassword ? 'danger' : 'success'}
                      onPasswordChange={handlePasswordChange}
                    />

                    <Field
                      name="confirmPassword"
                      type={isVisible ? "text" : "password"}
                      placeholder="Repetir contraseña"
                      component={CustomInput}
                      startContent={
                        <LockClosedIcon className="w-6 text-[#cdfeec]"/>
                      }
                      endContent={
                        <button className="focus:outline-none " type="button" onClick={toggleVisibility}>
                          {isVisible ? (
                            <EyeSlashIcon className="w-6 text-[#cdfeec]" />
                          ) : (
                            <EyeIcon className="w-6 text-[#cdfeec]" />
                          )}
                        </button>
                      }
                      isInvalid={
                        passwordSubmit.errors.confirmPassword &&
                        passwordSubmit.touched.confirmPassword
                      }
                      errorMessage={
                          (passwordSubmit.errors.confirmPassword?.includes("La confirmación de la contraseña es obligatoria") && passwordSubmit.submitCount === 0)
                            ? "" 
                            : passwordSubmit.errors.confirmPassword}
                      color={passwordSubmit.errors.confirmPassword ? 'danger' : 'success'}
                    />

                    <Button
                      size="lg"
                      radius="full"
                      color='success'
                      className="w-full mt-10 font-bold"
                      onClick={() => passwordSubmit.handleSubmit()}
                    >
                      Cambiar contraseña
                    </Button>
                  </FormikProvider>
                </form>
              </section>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ResetPassword;