import {Providers} from "../providers";
import SideMenu from '@/src/sideMenu';
import { roboto } from '../../src/shared/styles/fonts';
import '../../src/global.css';

export default function Layout(
  { children } : { children: React.ReactNode }
) {
  return (
    <main className={`dark text-foreground bg-background ${roboto.className} flex`} >
      <SideMenu />
      <section className="w-screen bg-[#040F10] overflow-scroll flex" >
        {children}
      </section>
    </main>
  );
}
