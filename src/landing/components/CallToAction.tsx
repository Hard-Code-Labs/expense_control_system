import React from 'react';
import Section from './Section';
import { Button, Link } from '@nextui-org/react';

const CallToAction = () => {
  return (
    <Section className="shadow-[10px_0px_50px_80px_black]">
      <article className="flex flex-col items-center gap-8 rounded-3xl border p-16 shadow-[0_0px_50px_20px_#08846f]">
        <h1 className="text-4xl font-bold ">
          Empieza a gestionar tus finanzas hoy mismo
        </h1>
        <div className="flex gap-7">
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
          <Button
            size="lg"
            color="success"
            variant="bordered"
            className="w-[220px] rounded-full"
          >
            Contacta con nosotros
          </Button>
        </div>
      </article>
    </Section>
  );
};

export default CallToAction;
