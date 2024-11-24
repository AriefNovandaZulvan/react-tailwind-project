import React from 'react';
import MainSection from '@/components/templates/MainSection';
import { Employer, Highlight, MainSectionProps } from '@/types/homeTypes';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001';

// Function to fetch employer data
const fetchEmployerData = async (): Promise<Employer[]> => {
  const api1 = `${process.env.NEXT_PUBLIC_BASE_URL}/api/employer-data`;
  const res = await fetch(api1, { cache: 'no-store' }); // Use no-store for fresh data on every request
  if (!res.ok) {
    throw new Error('Failed to fetch employer data');
  }
  return res.json();
};

// Function to fetch highlight data
const fetchHighlightData = async (): Promise<Highlight[]> => {
  const api2 = `${process.env.NEXT_PUBLIC_BASE_URL}/api/highlight-data`;
  const res = await fetch(api2, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch highlight data');
  }
  return res.json();
};

const HomePage = async () => {

  const [employers, highlights] = await Promise.all([
    fetchEmployerData(),
    fetchHighlightData(),
  ]);



  return (
    <main>
      <MainSection highlights={highlights} employers={employers} />
    </main>
  );
};

export default HomePage;
