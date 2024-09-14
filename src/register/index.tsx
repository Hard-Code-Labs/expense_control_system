'use client'
import { Field, FormikProvider, useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import CustomInput from '../global/components/form/CustomInput';
import { AtSymbolIcon, EyeIcon, EyeSlashIcon, GlobeAmericasIcon, LockClosedIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { registerSchema } from './schema';
import { Button, Image } from '@nextui-org/react';
import CustomSelect from '../global/components/form/CustomSelect';
import { encryptWithPublicKey } from './encoder';
import { useAddUsers } from './hooks/useAddUsers';
import { useRouter } from 'next/navigation';

const Register = () => {

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [encryptedPassword, setEncryptedPassword] = useState("");
  const { result, error, addUsers } = useAddUsers();
  const router = useRouter()

  const handlePasswordChange = (password: string) => {
    const encrypted = encryptWithPublicKey(password);
    setEncryptedPassword(encrypted);
  }

  const registerSubmit = useFormik({
    initialValues: {
      perName: "",
      perLastname: "",
      perMail: "",
      countryId: "",
      perPassword: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      const {perName, perLastname, perMail, countryId} = values;

      const valuesToSend = {
        perName,
        perLastname,
        perMail: perMail.toLowerCase(),
        countryId: Number(countryId),
        perPassword: encryptedPassword,
      };

      addUsers(valuesToSend)
    }
  })

  useEffect(() => {
    if(result) {
      router.push('/');
    }
  }, [result, error])
    
  return (
    <main
      className='w-screen min-h-[1000px] sm:min-h-[700px] h-screen flex flex-col sm:flex-row justify-center items-center p-[40px] gap-[8.125vw] text-[#cdfeec]'
      style={{background: "linear-gradient(63.36deg, #0C1314 9.43%, #11594E 75.57%, #00BE99 99.87%)"}}
    >
      <Image
        src='/register.png'
        className='sm:w-[35.156vw] sm:h-[35.156vw] w-[50vw] h-[50vw]'
      />
      <section className='flex flex-col justify-center items-center gap-8'>
        <div className='w-full flex flex-col items-center sm:items-start'>
          <p className='font-extrabold'>
            Crea tu cuenta
          </p>
          <p className='font-thin'>
            Y administra tu dinero
          </p>
        </div>
        <form className='w-[60vw] min-w-[225px] sm:w-[38vw] sm: max-w-[350px] h-fit flex flex-col justify-center items-center gap-6' onSubmit={registerSubmit.handleSubmit}>
          <FormikProvider value={registerSubmit} >
            <div className={`w-full flex gap-3 sm:flex-row flex-col ${registerSubmit.errors.perName?.includes("contener") || registerSubmit.errors.perLastname?.includes("contener") ? "mb-[30px]" : ""}`}>
              <Field
                name="perName"
                type="text"
                placeholder="Nombre"
                component={CustomInput}
                startContent={
                  <UserCircleIcon className="w-8 text-[#cdfeec]"/>
                }
                isInvalid={
                  registerSubmit.errors.perName &&
                  registerSubmit.touched.perName
                }
                errorMessage={
                  (registerSubmit.errors.perName?.includes("Este campo es requerido") && registerSubmit.submitCount === 0)
                    ? "" 
                    : registerSubmit.errors.perName}
                color={registerSubmit.errors.perName ? 'danger' : 'success'}
              />

              <Field
                name="perLastname"
                type="text"
                placeholder="Apellido"
                component={CustomInput}
                startContent={
                  <UserCircleIcon className="w-8 text-[#cdfeec]"/>
                }
                isInvalid={
                  registerSubmit.errors.perLastname &&
                  registerSubmit.touched.perLastname
                }
                errorMessage={
                  (registerSubmit.errors.perLastname?.includes("Este campo es requerido") && registerSubmit.submitCount === 0)
                    ? "" 
                    : registerSubmit.errors.perLastname}
                color={registerSubmit.errors.perLastname ? 'danger' : 'success'}
              />
            </div>

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
              errorMessage={
                  (registerSubmit.errors.perMail?.includes("Este campo es requerido") && registerSubmit.submitCount === 0)
                    ? "" 
                    : registerSubmit.errors.perMail}
              color={registerSubmit.errors.perMail ? 'danger' : 'success'}
            />

            <Field
              name="countryId"
              placeholder="País"
              isRequired
              radius="full"
              labelPlacement="outside"
              component={CustomSelect}
              options={[
                { label: 'Ecuador', value: '1' },
                { label: 'Colombia', value: '2' },
              ]}
              startContent={
                <GlobeAmericasIcon className="w-6 text-[#cdfeec]"/>
              }
              isInvalid={
                registerSubmit.errors.countryId &&
                registerSubmit.touched.countryId
              }
              errorMessage={
                  (registerSubmit.errors.countryId?.includes("Este campo es requerido") && registerSubmit.submitCount === 0)
                    ? "" 
                    : registerSubmit.errors.countryId}
              color={registerSubmit.errors.countryId ? 'danger' : 'success'}
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
              errorMessage={
                  (registerSubmit.errors.perPassword?.includes("Este campo es requerido") && registerSubmit.submitCount === 0)
                    ? "" 
                    : registerSubmit.errors.perPassword}
              color={registerSubmit.errors.perPassword ? 'danger' : 'success'}
              onPasswordChange={handlePasswordChange}
            />

            <Field
              name="confirmPassword"
              type={isVisible ? "text" : "password"}
              placeholder="Confirma tu contraseña"
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
                registerSubmit.errors.confirmPassword &&
                registerSubmit.touched.confirmPassword
              }
              errorMessage={
                  (registerSubmit.errors.confirmPassword?.includes("La confirmación de la contraseña es obligatoria") && registerSubmit.submitCount === 0)
                    ? "" 
                    : registerSubmit.errors.confirmPassword}
              color={registerSubmit.errors.confirmPassword ? 'danger' : 'success'}
            />

            <Button
              size="lg"
              radius="full"
              className="w-full mt-10 bg-[#00BE99] font-bold"
              onClick={() => registerSubmit.handleSubmit()}
            >
              Crear mi cuenta
            </Button>
          </FormikProvider>
        </form>
        <p className='font-thin text-sm'>
          Ya tienes una cuenta?
          <a href="/" className='font-extrabold decoration-solid hover:underline'> Inicia session</a>
        </p>
      </section>
    </main>
  );
};

export default Register;