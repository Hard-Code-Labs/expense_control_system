'use client'
import { Image } from '@nextui-org/react';
import RegisterForm from './components/RegisterForm';

const Register = () => {
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
        <RegisterForm />
        <p className='font-thin text-sm'>
          Ya tienes una cuenta?
          <a href="/login" className='font-extrabold decoration-solid hover:underline'> Inicia session</a>
        </p>
      </section>
    </main>
  );
};

export default Register;