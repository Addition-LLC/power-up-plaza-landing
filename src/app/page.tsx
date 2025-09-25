import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import SupportedModels from '@/components/SupportedModel';
import { GrandOpening } from '@/components/GrandOpening';
import { WhatWeOffer } from '@/components/WhatWeOffer';
import { Stats } from '@/components/Stats';
import { LocalFood } from '@/components/LocalFood';
import { FAQ } from '@/components/FAQ';
import { MobileApp } from '@/components/MobileApp';
import { InTheNews } from '@/components/InTheNews';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <SupportedModels />
      <GrandOpening />
      <WhatWeOffer />
      <Stats />
      <LocalFood />
      <FAQ />
      <MobileApp />
      <InTheNews />
      <Footer />
    </main>
  );
}