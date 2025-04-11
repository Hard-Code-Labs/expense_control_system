import React from 'react';
import Section from './Section';
import { Github, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <Section 
      className='h-[20vh] '
      style={{ background: "linear-gradient(to top, #00be99, #00aa8b, #04977d, #08846f, #0d7161, #0b6257, #0c544d, #0e4642, #0f3938, #102c2d, #101f21, #0c1314)" }}
    >
      <article className='w-full flex justify-between items-end p-10'>
        <div className='flex flex-col justify-center gap-3'>
          <h1 className='font-bold'>Money Attic</h1>
          <a>hardcodelabs@gmail.com</a>
          <div className='flex gap-4'>
            <Instagram />
            <Linkedin />
            <Github />
          </div>
        </div>
        <div className='flex justify-center gap-4'>
          <h1>Derechos reservados</h1>
        </div>
        <div className='flex justify-center gap-4'>
          <h1 className='font-bold'>Creado por:</h1>
          <a>HardcodeLabs</a>
        </div>
      </article>
    </Section>
  );
};

export default Footer;