import React from 'react';
import Section from './Section';
import Image from 'next/image';

const Examples = () => {
  return (
    <Section 
      className='h-[90vh] pb-56'
      style={{ background: "linear-gradient(to left bottom, #00be99, #00aa8b, #04977d, #08846f, #0d7161, #0b6257, #0c544d, #0e4642, #0f3938, #102c2d, #101f21, #0c1314)" }} 
    >
      <article className='flex items-center gap-32'>
        <figure className='max-w-2xl h-96 rounded-3xl overflow-hidden px-4 shadow-[0_0px_20px_25px_rgba(0,0,0)] flex items-center justify-center bg-black'>
          <Image src="/mockup.png" alt="Examples" width={600} height={100}/>
        </figure>
        <div className='flex flex-col gap-4 text-2xl'>
          <h1 className='font-thin'>
            Olvídate de lo complicado!
          </h1>
          <h1 className='font-bold'>
            Nuestra app es fácil, rápida e intuitiva.
          </h1>
        </div>
      </article>
    </Section>
  );
};

export default Examples;