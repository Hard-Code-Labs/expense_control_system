'use client'
import { Field, Form, Formik, FormikProvider, useFormik } from 'formik';
import React, { useState } from 'react';
import CustomInput from '../sharedComponents/form/CustomInput';
import { AtSymbolIcon, EyeIcon, EyeSlashIcon, GlobeAmericasIcon, LockClosedIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { registerSchema } from './schema';
import { Button } from '@nextui-org/react';
import CustomSelect from '../sharedComponents/form/CustomSelect';
import { BanknotesIcon } from '@heroicons/react/24/outline';
import { encryptWithPublicKey } from './encoder';
import { useGetUsers } from './hooks/useGetUsers';

const Register = () => {

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [encryptedPassword, setEncryptedPassword] = useState("");
  const { users } = useGetUsers()

  const handlePasswordChange = (password: string) => {
    const encrypted = encryptWithPublicKey(password);
    setEncryptedPassword(encrypted);
  }

  const registerSubmit = useFormik({
    initialValues: {
      perName: "",
      perLastName: "",
      perMail: "",
      countryId: "",
      perPassword: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {

      const {perName, perLastName, perMail, countryId} = values;

      const valuesToSend = {
        perName,
        perLastName,
        perMail,
        countryId,
        perPassword: encryptedPassword,
      };

      console.log({users})

      console.log("submit", valuesToSend)
    }
  })

  return (
    <main className='w-screen h-screen flex justify-center content-center'>
      <form className='bg-black w-96 flex flex-col justify-center items-center gap-3 p-8 border border-[#00BE99] rounded-3xl'>
        <div className="w-40 bg-[#00BE99] text-[black] rounded-[50%] p-3 mb-7">
          <BanknotesIcon />
        </div>
        <FormikProvider value={registerSubmit} >
          <div className=' w-full flex gap-3 sm:flex-row flex-col'>
            <Field
              name="perName"
              type="text"
              placeholder="Nombre"
              isRequired
              component={CustomInput}
              radius="full"
              variant="bordered"
              labelPlacement="outside"
              startContent={
                <UserCircleIcon className="w-8"/>
              }
              isInvalid={
                registerSubmit.errors.perName &&
                registerSubmit.touched.perName
              }
              errorMessage={registerSubmit.errors.perName}
              color={registerSubmit.errors.perName ? 'danger' : ''}
            />

            <Field
              name="perLastName"
              type="text"
              placeholder="Apellido"
              isRequired
              component={CustomInput}
              radius="full"
              variant="bordered"
              labelPlacement="outside"
              startContent={
                <UserCircleIcon className="w-8"/>
              }
              isInvalid={
                registerSubmit.errors.perLastName &&
                registerSubmit.touched.perLastName
              }
              errorMessage={registerSubmit.errors.perLastName}
              color={registerSubmit.errors.perLastName ? 'danger' : ''}
            />
          </div>

          <Field
            name="perMail"
            type="email"
            placeholder="Email"
            isRequired
            component={CustomInput}
            radius="full"
            variant="bordered"
            labelPlacement="outside"
            startContent={
              <AtSymbolIcon className="w-6"/>
            }
            isInvalid={
              registerSubmit.errors.perMail &&
              registerSubmit.touched.perMail
            }
            errorMessage={registerSubmit.errors.perMail}
            color={registerSubmit.errors.perMail ? 'danger' : ''}
          />

          <Field
            name="countryId"
            placeholder="País"
            isRequired
            radius="full"
            variant="bordered"
            labelPlacement="outside"
            component={CustomSelect}
            options={[
              { label: 'Ecuador', value: 'ec' },
              { label: 'Colombia', value: 'co' },
            ]}
            startContent={
              <GlobeAmericasIcon className="w-6"/>
            }
            isInvalid={
              registerSubmit.errors.countryId &&
              registerSubmit.touched.countryId
            }
            errorMessage={registerSubmit.errors.countryId}
            color={registerSubmit.errors.countryId ? 'danger' : ''}
          />

          <Field
            name="perPassword"
            type={isVisible ? "text" : "password"}
            placeholder="Contraseña"
            isRequired
            component={CustomInput}
            radius="full"
            variant="bordered"
            labelPlacement="outside"
            startContent={
              <LockClosedIcon className="w-6"/>
            }
            endContent={
              <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                {isVisible ? (
                  <EyeSlashIcon className="w-6" />
                ) : (
                  <EyeIcon className="w-6" />
                )}
              </button>
            }
            isInvalid={
              registerSubmit.errors.perPassword &&
              registerSubmit.touched.perPassword
            }
            errorMessage={registerSubmit.errors.perPassword}
            color={registerSubmit.errors.perPassword ? 'danger' : ''}
            onPasswordChange={handlePasswordChange}
          />

          <Field
            name="confirmPassword"
            type={isVisible ? "text" : "password"}
            placeholder="Confirma tu contraseña"
            isRequired
            component={CustomInput}
            radius="full"
            variant="bordered"
            labelPlacement="outside"
            startContent={
              <LockClosedIcon className="w-6"/>
            }
            endContent={
              <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                {isVisible ? (
                  <EyeSlashIcon className="w-6" />
                ) : (
                  <EyeIcon className="w-6" />
                )}
              </button>
            }
            isInvalid={
              registerSubmit.errors.confirmPassword &&
              registerSubmit.touched.confirmPassword
            }
            errorMessage={registerSubmit.errors.confirmPassword}
            color={registerSubmit.errors.confirmPassword ? 'danger' : ''}
          />

          <Button
            size="lg"
            className="my-5 bg-[#00BE99]"
            onClick={() => registerSubmit.handleSubmit()}
          >
            Crear cuenta
          </Button>
        </FormikProvider>
      </form>
    </main>
  );
};

export default Register;