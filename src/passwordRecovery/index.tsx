'use client'
import { AtSymbolIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { Button, Image } from '@nextui-org/react';
import { Field, FormikProvider, useFormik } from 'formik';
import React from 'react';
import CustomInput from '../global/components/form/CustomInput';
import { useSearchParams } from 'next/navigation';
import ResetPassword from './components/ResetPassword';
import { passwordRecoverySchema } from './utils/schema';

const PasswordRecovery = () => {

  const searchParams = useSearchParams();
  const token = searchParams.get('token') ?? "";

  const emailSubmit = useFormik({
    initialValues: {
      perMail: "",
    },
    validationSchema: passwordRecoverySchema,
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <main
      className='w-screen min-h-[1000px] sm:min-h-[700px] h-screen flex flex-col-reverse sm:flex-row justify-center items-center p-[40px] gap-[8.125vw] text-[#cdfeec]'
      style={{background: "linear-gradient(63.36deg, #0C1314 9.43%, #11594E 75.57%, #00BE99 99.87%)"}}
    >
      <Image
        src='/forgotPassword.png'
        className='sm:w-[35.156vw] sm:h-[35.156vw] w-[50vw] h-[50vw]'
      />
      <section className='flex flex-col justify-center items-center gap-8'>
        <div className='w-full flex flex-col items-center sm:items-center gap-5'>
          <p className='font-extrabold text-xl'>
            ¿Olvidaste tu contraseña?
          </p>
          <p className='font-thin'>
            Por favor ingresa tu correo y te ayudaremos a recuperarla
          </p>
        </div>
        <form className='w-[60vw] min-w-[225px] sm:w-[38vw] sm: max-w-[350px] h-fit flex flex-col justify-center items-center gap-6'>
          <FormikProvider value={emailSubmit} >
            <Field
              name="perMail"
              type="email"
              placeholder="Email"
              component={CustomInput}
              startContent={
                <AtSymbolIcon className="w-6 text-[#cdfeec]"/>
              }
              isInvalid={
                emailSubmit.errors.perMail &&
                emailSubmit.touched.perMail
              }
              errorMessage={emailSubmit.errors.perMail}
              color={emailSubmit.errors.perMail ? 'danger' : 'success'}
            />

            <Button
              size="lg"
              radius="full"
              color='success'
              className="w-full mt-10 font-bold"
              onClick={() => emailSubmit.handleSubmit()}
            >
              <PaperAirplaneIcon 
              // className={`${isLoading ? "animation" : ""} send`} 
              />
              Enviar
            </Button>
          </FormikProvider>
        </form>

        <ResetPassword token={token} />
      </section>
    </main>
  );
};

export default PasswordRecovery;