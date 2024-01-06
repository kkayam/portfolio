import { Roboto } from 'next/font/google';
import './globals.css';

const inter = Roboto({ subsets: ['latin'], weight: "300" });

export const metadata = {
  title: 'Koray Kaya',
  description: 'Portfolio site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
