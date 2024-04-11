import {Providers} from "./providers";
import SideMenu from '@/src/sideMenu';
import TitleBar from "@/src/TitleBar";
import { roboto } from '../src/global/fonts';
import '../src/global.css';

export default function RootLayout(
  { children } : { children: React.ReactNode }
) {
  return (
    <html lang="en">
        <body className={`dark text-foreground bg-background ${roboto.className} flex `} >
            <SideMenu />
            <main className="w-screen bg-[#040F10]" >
              {/* <TitleBar /> */}
              <Providers>{children}</Providers>
            </main>
        </body>
    </html>
  );
}
