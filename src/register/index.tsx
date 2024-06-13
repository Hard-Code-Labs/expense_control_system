'use client'
import { Field, Form, Formik, FormikProvider, useFormik } from 'formik';
import React from 'react';
import CustomInput from '../sharedComponents/form/CustomInput';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { registerSchema } from './schema';
import { Button } from '@nextui-org/react';

const Register = () => {

  const initialValues = {
    value: ""
  }

  const handleOnSubmit = () => {

  }

  const registerSubmit = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      country: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit: () => {}
  })

  return (
    <>
      <form className='bg-black w-96 flex flex-col justify-center items-center gap-3 p-8 border border-cyan-600 rounded-3xl'>
        <UserCircleIcon className="w-40"/>
        <FormikProvider value={registerSubmit} >
          <Field
            name="name"
            type="text"
            // label="Nombre"
            placeholder="Nombre"
            isRequired
            component={CustomInput}
            radius="full"
            startContent={
              <UserCircleIcon className="w-6"/>
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
            startContent={
              <UserCircleIcon className="w-6"/>
            }
            isInvalid={
              registerSubmit.errors.lastName &&
              registerSubmit.touched.lastName
            }
            errorMessage={registerSubmit.errors.lastName}
            color={registerSubmit.errors.lastName ? 'danger' : ''}
          />

          <Field
            name="email"
            type="email"
            // label="Email"
            placeholder="Email"
            isRequired
            component={CustomInput}
            radius="full"
            startContent={
              <UserCircleIcon className="w-6"/>
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
            type="text"
            // label="País"
            placeholder="País"
            isRequired
            component={CustomInput}
            radius="full"
            startContent={
              <UserCircleIcon className="w-6"/>
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
            type="password"
            // label="Contraseña"
            placeholder="Contraseña"
            isRequired
            component={CustomInput}
            radius="full"
            startContent={
              <UserCircleIcon className="w-6"/>
            }
            isInvalid={
              registerSubmit.errors.password &&
              registerSubmit.touched.password
            }
            errorMessage={registerSubmit.errors.password}
            color={registerSubmit.errors.password ? 'danger' : ''}
          />

          <Button
            size="lg"
            className="my-5"
            color='success'
          >
            Crear cuenta
          </Button>
        </FormikProvider>
      </form>
    </>
  );
};

export default Register;