import React from 'react';
import Header from '../components/organisms/Header';
import MainSection from '@/components/templates/MainSection';
import Footer from '@/components/organisms/Footer';

export default function HomePage() {
  return (
    <div className='from-cyan-500 to-teal-500 w-screen'>
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
}