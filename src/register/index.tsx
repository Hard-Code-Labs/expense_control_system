'use client'
import { Field, Form, Formik, FormikProvider, useFormik } from 'formik';
import React, { useState } from 'react';
import CustomInput from '../sharedComponents/form/CustomInput';
import { AtSymbolIcon, EyeIcon, EyeSlashIcon, GlobeAmericasIcon, LockClosedIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { registerSchema } from './schema';
import { Button } from '@nextui-org/react';
import CustomSelect from '../sharedComponents/form/CustomSelect';
import { BanknotesIcon } from '@heroicons/react/24/outline';

const Register = () => {

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const registerSubmit = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      country: "",
      password: "",
      password2: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      console.log("submit", values)
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
              name="name"
              type="text"
              // label="Nombre"
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
                registerSubmit.errors.name &&
                registerSubmit.touched.name
              }
              errorMessage={registerSubmit.errors.name}
              color={registerSubmit.errors.name ? 'danger' : ''}
            />

            <Field
              name="lastName"
              type="text"
              // label="Apellido"
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
                registerSubmit.errors.lastName &&
                registerSubmit.touched.lastName
              }
              errorMessage={registerSubmit.errors.lastName}
              color={registerSubmit.errors.lastName ? 'danger' : ''}
            />
          </div>

          <Field
            name="email"
            type="email"
            // label="Email"
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
              registerSubmit.errors.email &&
              registerSubmit.touched.email
            }
            errorMessage={registerSubmit.errors.email}
            color={registerSubmit.errors.email ? 'danger' : ''}
          />

          <Field
            name="country"
            // label="País"
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
              registerSubmit.errors.country &&
              registerSubmit.touched.country
            }
            errorMessage={registerSubmit.errors.country}
            color={registerSubmit.errors.country ? 'danger' : ''}
          />

          <Field
            name="password"
            type={isVisible ? "text" : "password"}
            // label="Contraseña"
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
              registerSubmit.errors.password &&
              registerSubmit.touched.password
            }
            errorMessage={registerSubmit.errors.password}
            color={registerSubmit.errors.password ? 'danger' : ''}
          />

          <Field
            name="password2"
            type={isVisible ? "text" : "password"}
            // label="Contraseña"
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
              registerSubmit.errors.password2 &&
              registerSubmit.touched.password2
            }
            errorMessage={registerSubmit.errors.password2}
            color={registerSubmit.errors.password2 ? 'danger' : ''}
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