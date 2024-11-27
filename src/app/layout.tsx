import type { Metadata } from 'next';
import { Merriweather, Source_Sans_3, Poppins } from 'next/font/google';
import './styles/globals.css';

const header = Merriweather({
  subsets: ['latin'],
  variable: '--font-header',
  weight: ['400', '700'],
});
const body = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '600', '700'],
});
const body2 = Poppins({
  subsets: ['latin'],
  variable: '--font-body-2',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Starter Web Studio - Custom Websites For Accountants',
  description:
    'Build a strong online presence, attract more customers, and grow your Accountancy and tax practice with a website that truly sets you apart.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${header.variable} ${body.variable} ${body2.variable}`}>
        {children}
      </body>
    </html>
  );
}
