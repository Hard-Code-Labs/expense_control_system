import { Button, Link } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';

const NavBar = () => {
  return (
    <nav className="fixed z-30 flex w-full justify-between border-b border-foreground/10 p-6 backdrop-blur-[10px]">
      <h1>navbar</h1>
    </nav>
  );
};

export default NavBar;
