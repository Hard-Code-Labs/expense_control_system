import { Button, Link } from '@nextui-org/react';
import React from 'react';
import '../styles/styles.css';
import Section from './Section';

const Hero = () => {
  return (
    <Section className="gradientAnimation">
      <header className="z-10 flex max-w-5xl flex-col gap-8 rounded-3xl m-4 p-16 backdrop-blur-[1000px]">
        <h1 className="text-5xl font-bold">
          Toma el control de tus finanzas como nunca antes
        </h1>
        <h4 className="text-2xl font-thin">
          Simplifica la gestión de gastos con nuestra herramienta intuitiva,
          segura y diseñada para crecer contigo.
        </h4>
        <Button
          as={Link}
          href="/register"
          size="lg"
          color="success"
          variant="shadow"
          className="w-[180px] rounded-full"
        >
          Empieza gratis
        </Button>
      </header>
    </Section>
  );
};

export default Hero;
