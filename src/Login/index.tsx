'use client'
import { AtSymbolIcon, EyeIcon, EyeSlashIcon, GlobeAmericasIcon, LockClosedIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { Button, Checkbox, cn, Image, Link } from '@nextui-org/react';
import { Field, FormikProvider, useFormik } from 'formik';
import React, { useState } from 'react';
import CustomInput from '../global/components/form/CustomInput';
import { encryptWithPublicKey } from '../register/encoder';

const Login = () => {

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [encryptedPassword, setEncryptedPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handlePasswordChange = (password: string) => {
    const encrypted = encryptWithPublicKey(password);
    setEncryptedPassword(encrypted);
  }

  const registerSubmit = useFormik({
    initialValues: {
      perMail: "",
      perPassword: "",
    },
    // validationSchema: registerSchema,
    onSubmit: (values) => {
      const { perMail } = values;
      const valuesToSend = {
        perMail,
        perPassword: encryptedPassword,
      };
      console.log(valuesToSend)
    }
  })

  return (
    <main
      className='w-screen min-h-[1000px] sm:min-h-[700px] h-screen flex flex-col-reverse sm:flex-row justify-center items-center p-[40px] gap-[8.125vw] text-[#cdfeec]'
      style={{background: "linear-gradient(63.36deg, #0C1314 9.43%, #11594E 75.57%, #00BE99 99.87%)"}}
    >
      <section className='flex flex-col justify-center items-center gap-8'>
        <div className='w-full flex flex-col items-center sm:items-start'>
          <p className='font-extrabold'>
            Iniciar session
          </p>
          <p className='font-thin'>
            Bienvenido de nuevo
          </p>
        </div>
        <form className='w-[60vw] min-w-[225px] sm:w-[38vw] sm: max-w-[350px] h-fit flex flex-col justify-center items-center gap-6'>
          <FormikProvider value={registerSubmit} >
            <Field
              name="perMail"
              type="email"
              placeholder="Email"
              component={CustomInput}
              startContent={
                <AtSymbolIcon className="w-6 text-[#cdfeec]"/>
              }
              isInvalid={
                registerSubmit.errors.perMail &&
                registerSubmit.touched.perMail
              }
              errorMessage={registerSubmit.errors.perMail}
              color={registerSubmit.errors.perMail ? 'danger' : 'success'}
            />

            <Field
              name="perPassword"
              type={isVisible ? "text" : "password"}
              placeholder="Contraseña"
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
                registerSubmit.errors.perPassword &&
                registerSubmit.touched.perPassword
              }
              errorMessage={registerSubmit.errors.perPassword}
              color={registerSubmit.errors.perPassword ? 'danger' : 'success'}
              onPasswordChange={handlePasswordChange}
            />
            <div className='w-full flex justify-between font-thin text-sm'>
              <Checkbox
                size="md"
                color="success"
                isSelected={rememberMe}
                onValueChange={() => setRememberMe(!rememberMe)}
                classNames={{ label: "hover:text-[#cdfeec]" }}
              >
                Recuérdame
              </Checkbox>
              <Link
                href="/passwordRecovery"
                size="md"
                color="foreground"
                underline="hover"
                className='hover:text-[#cdfeec]'
              >
                Olvidaste la contraseña
              </Link>
            </div>

            <Button
              size="lg"
              radius="full"
              color='success'
              className="w-full mt-10 font-bold"
              onClick={() => registerSubmit.handleSubmit()}
            >
              Iniciar session
            </Button>
          </FormikProvider>
        </form>
        <p className='font-thin text-sm'>
          No tienes una cuenta aun? &nbsp;
          <Link
            href="/register"
            size="sm"
            color="foreground"
            underline="hover"
            className='font-extrabold text-[#cdfeec]'
          >
            Regístrate
          </Link>
        </p>
      </section>
      <Image
        src='/login.png'
        className='sm:w-[35.156vw] sm:h-[35.156vw] w-[50vw] h-[50vw]'
      />
    </main>
  );
};

export default Login;