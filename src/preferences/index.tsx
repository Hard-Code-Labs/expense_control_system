"use client"
import React, { use, useEffect, useState } from 'react';
import { AtSymbolIcon, EyeIcon, EyeSlashIcon, GlobeAmericasIcon, 
    LockClosedIcon, UserCircleIcon, CurrencyDollarIcon, LanguageIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { Field, FormikProvider, useFormik } from 'formik';
import { Button } from '@nextui-org/react';
import CustomInput from '../shared/components/form/CustomInput';
import { useRouter } from 'next/navigation';

const Preferences = () => {
    const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [encryptedPassword, setEncryptedPassword] = useState("");

  const [profileImage, setProfileImage] = useState("https://png.pngtree.com/background/20230519/original/pngtree-young-woman-anime-cartoon-drawing-picture-image_2660945.jpg"); // Imagen de perfil por defecto
  const coverImage = "https://plus.unsplash.com/premium_photo-1673177667569-e3321a8d8256?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm90byUyMGRlJTIwcG9ydGFkYXxlbnwwfHwwfHx8MA%3D%3D"; // Imagen de portada por defecto

  const registerSubmit = useFormik({
    initialValues: {
      perName: "",
      perLastname: "",
      perCurrency: "",
      perMail: "",
      languaje: "",
      countryId: "",
      perPassword: "",
      confirmPassword: "",
    },
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
    }
  })


  return (
    <div>
        <div className="flex justify-center items-center">
            {/* Portada */}
            <div className="w-full h-[250px] bg-cover bg-center relative rounded-t-lg" style={{ backgroundImage: `url(${coverImage})` }}>
                {/* Imagen de perfil */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-12 w-[150px] h-[150px] bg-gray-200 rounded-full overflow-hidden border-4 border-white">
                    <img src={profileImage} alt="Perfil" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center h-[500px]">        
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

                <div className='w-full flex gap-3 sm:flex-row flex-col'>
                    <Field
                        name="perCurrency"
                        type="currency"
                        placeholder="Currency"
                        component={CustomInput}
                        startContent={
                            <CurrencyDollarIcon className="w-6 text-[#cdfeec]"/>
                        }
                        isInvalid={
                            registerSubmit.errors.perCurrency &&
                            registerSubmit.touched.perCurrency
                        }
                        errorMessage={
                            (registerSubmit.errors.perCurrency?.includes("Este campo es requerido") && registerSubmit.submitCount === 0)
                                ? "" 
                                : registerSubmit.errors.perCurrency}
                        color={registerSubmit.errors.perCurrency ? 'danger' : 'success'}
                    />

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
                </div>

                <div className='w-full flex gap-3 sm:flex-row flex-col'>
                    <Field
                        name="languaje"
                        type="languaje"
                        placeholder="Languaje"
                        component={CustomInput}
                        startContent={
                            <LanguageIcon className="w-6 text-[#cdfeec]"/>
                        }
                        isInvalid={
                            registerSubmit.errors.languaje &&
                            registerSubmit.touched.languaje
                        }
                        errorMessage={
                            (registerSubmit.errors.languaje?.includes("Este campo es requerido") && registerSubmit.submitCount === 0)
                                ? "" 
                                : registerSubmit.errors.languaje}
                        color={registerSubmit.errors.languaje ? 'danger' : 'success'}
                    />

                    <Field
                        name="perPhone"
                        type="phone"
                        placeholder="Phone"
                        component={CustomInput}
                        startContent={
                            <PhoneIcon className="w-6 text-[#cdfeec]"/>
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
                </div>

                <Button
                size="lg"
                radius="full"
                className="w-full mt-10 bg-[#00BE99] font-bold"
                onClick={() => registerSubmit.handleSubmit()}
                >
                Guardar 
                </Button>
            </FormikProvider>
            </form>
        </div>
    </div>
  );
};

export default Preferences;