'use client';

import { useState } from 'react';
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import StudentServices from "@/components/StudentServices";
import Footer from "@/components/Footer";

export default function Home() {
  const [locale, setLocale] = useState('en');

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header onLocaleChange={setLocale} />
      <main className="flex-grow">
        <HeroCarousel locale={locale} />
        <StudentServices locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  );
}
