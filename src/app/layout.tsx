import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'HyperHire Arief Submission',
  description: 'Generated by Arief Novanda Zulvan 22 November 2024',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-r from-cyan-500 to-teal-500`}>
        <Header />
        <main className="items-center m-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}