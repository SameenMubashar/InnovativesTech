import { Inter } from 'next/font/google';
import './globals.css';
import storeProvider from '@/components/StoreProvider/StoreProvider';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Innovative Tech Application',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <storeProvider>{children}</storeProvider>
      </body>
    </html>
  );
}
