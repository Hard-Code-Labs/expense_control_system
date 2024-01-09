import {Providers} from "./providers";
import SideNav from '../src/menu';
import { montserrat } from '../src/ui/fonts';
import '../src/global.css';

export default function RootLayout(
  { children } : { children: React.ReactNode }
) {
  return (
    <html lang="en">
      <Providers>
        <body className={`dark text-foreground bg-background ${montserrat.className} flax-col flex h-screen antialiased md:flex-row md:overflow-hidden`} >
          <header>
            <SideNav />
          </header>
          <main className="flex-grow p-6 md:overflow-y-auto md:p-12">
            {children}
          </main>
        </body>
      </Providers>
    </html>
  );
}
