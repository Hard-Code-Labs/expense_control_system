import Logo from '@/src/menu/components/Logo';
import NavLinks from './components/NavLinks';

export default function SideNav() {
  return (
    <nav className="w-full flex-none h-full flex flex-col gap-10 md:px-2 md:py-6 md:w-64 px-3 py-4 border-r-[0.4px]	border-[#CDFEEC]">
      <Logo />
      <NavLinks />
    </nav>
  );
}
