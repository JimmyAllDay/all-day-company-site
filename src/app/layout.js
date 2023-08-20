//import { Inter } from 'next/font/google';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import '@/styles/globals.css';
import localFont from 'next/font/local';
import { ThemeProvider } from '@/context/ThemeContext';
import { UserProvider } from '@auth0/nextjs-auth0/client';

const akkuratMono = localFont({
  src: './akkurat-mono-webfont.woff',
});

export const metadata = {
  title: 'All Day',
  description:
    'Digital agency specialising in Design, Web3, AI and Mobile Applications. We are All Day.',
};

export default function RootLayout({ children }) {
  return (
    <UserProvider>
      <html lang="en">
        <body className={akkuratMono.className}>
          <ThemeProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </UserProvider>
  );
}
