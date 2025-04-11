import { Button, Link } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';

const NavBar = () => {
  return (
    <nav className="fixed z-30 flex w-full justify-between border-b border-foreground/10 p-6 backdrop-blur-[10px]">
      <section className="flex items-center justify-center gap-2">
        <Image
          src="/a-sing-of-dollar-inside-of-a-gear-.png"
          alt="Logo"
          width={50}
          height={25}
        />
        <h1>Money Attic</h1>
      </section>
      <section className="flex items-center gap-4">
        <Button
          as={Link}
          href="/login"
          size="lg"
          variant="light"
          className="w-[150px] rounded-full"
        >
          Iniciar sesión
        </Button>
        <Button
          as={Link}
          href="/register"
          size="lg"
          color="success"
          className="w-[180px] rounded-full font-bold"
        >
          Regístrate gratis
        </Button>
      </section>
    </nav>
  );
};

export default NavBar;
