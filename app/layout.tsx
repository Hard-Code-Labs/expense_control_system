import {Providers} from "./providers";
import { roboto } from '../src/shared/fonts';
import '../src/global.css';

export default function RootLayout(
  { children } : { children: React.ReactNode }
) {
  return (
    <html lang="en">
      <body className={`dark text-foreground bg-background ${roboto.className}`} >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
