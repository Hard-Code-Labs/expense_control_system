import React, { use, useEffect, useState } from 'react';
import { AtSymbolIcon, EyeIcon, EyeSlashIcon, GlobeAmericasIcon, LockClosedIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { Field, FormikProvider, useFormik } from 'formik';
import { Button } from '@nextui-org/react';
import CustomInput from '../../shared/components/form/CustomInput';
import CustomSelect from '../../shared/components/form/CustomSelect';
import { registerSchema } from '../utils/schema';
import { encryptWithPublicKey } from '../utils/encoder';
import { useRouter } from 'next/navigation';
import { useAddUser } from '../hooks/useAddUsers';

const RegisterForm = () => {
  const router = useRouter();
  const { addUser, isSuccess, isPending } = useAddUser();
  const [isVisible, setIsVisible] = useState(false);
  const [encryptedPassword, setEncryptedPassword] = useState("");

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
        perName: perName.trim(),
        perLastname: perLastname.trim(),
        perMail: perMail.toLowerCase(),
        countryId: Number(countryId),
        perPassword: encryptedPassword,
      };

      addUser(valuesToSend)
    }
  })

  useEffect(() => {
    if(isSuccess) {
      router.push('/login');
    }
  }, [isSuccess]);

  return (
    <form className='w-[60vw] min-w-[225px] sm:w-[38vw] sm: max-w-[350px] h-fit flex flex-col justify-center items-center gap-6' onSubmit={registerSubmit.handleSubmit}>
      <FormikProvider value={registerSubmit} >
        <div className='w-full flex gap-3 sm:flex-row flex-col'>
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
            <button className="focus:outline-none" type="button" onClick={() => setIsVisible(!isVisible)}>
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
            <button className="focus:outline-none " type="button" onClick={() => setIsVisible(!isVisible)}>
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
          isDisabled={isPending}
        >
          Crear mi cuenta
        </Button>
      </FormikProvider>
    </form>
  );
};

export default RegisterForm;