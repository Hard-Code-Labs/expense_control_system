import SideNav from '../src/menu';
import { montserrat } from '../src/ui/fonts';
import '../src/global.css';

export default function RootLayout(
  { children } : { children: React.ReactNode }
) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased flex h-screen flax-col md:flex-row md:overflow-hidden`}>
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </div>
      </body>
    </html>
  );
}
