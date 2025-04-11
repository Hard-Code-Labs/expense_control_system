import React from 'react';
import Section from './Section';
import Image from 'next/image';

const Examples = () => {
  return (
    <Section 
      className='h-[90vh] pb-56'
      style={{ background: "linear-gradient(to left bottom, #00be99, #00aa8b, #04977d, #08846f, #0d7161, #0b6257, #0c544d, #0e4642, #0f3938, #102c2d, #101f21, #0c1314)" }} 
    >
      <h1>Examples section</h1>
    </Section>
  );
};

export default Examples;