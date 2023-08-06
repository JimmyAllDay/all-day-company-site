//import { Inter } from 'next/font/google';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import './globals.css';
import localFont from 'next/font/local';
import { ThemeProvider } from '@/context/ThemeContext';

// Font files can be colocated inside of `app`
const akkuratMono = localFont({
  src: './akkurat-mono-webfont.woff',
});

const akkurat = localFont({
  src: './akkurat-webfont.woff',
  weight: '200',
});

export const metadata = {
  title: 'All Day',
  description:
    'Digital agency specialising in Design, Web3, AI and Mobile Applications. We are All Day.',
};

export default function RootLayout({ children }) {
  return (
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
  );
}
