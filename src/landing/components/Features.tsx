import React from 'react';
import Section from './Section';
import { ChartNoAxesColumnIncreasing, LockKeyhole, Settings } from 'lucide-react';
import InfoCard from './InfoCard';

const Features = () => {
  const infoCards = [
    {
      icon: {
        name: ChartNoAxesColumnIncreasing,
        strokeWidth: 3.5,
      },
      title: 'Optimiza tus presupuesto',
      description: 'Visualiza y analiza tus gastos con tiempo real.',
    },
    {
      icon: {
        name: Settings,
        strokeWidth: 2,
      },
      title: 'Optimiza tus presupuesto',
      description: 'Visualiza y analiza tus gastos con tiempo real.',
    },
    {
      icon: {
        name: LockKeyhole,
        strokeWidth: 2,
      },
      title: 'Optimiza tus presupuesto',
      description: 'Visualiza y analiza tus gastos con tiempo real.',
    },
  ];

  return (
    <Section style={{ background: "linear-gradient(to left top, #00be99, #00aa8b, #04977d, #08846f, #0d7161, #0b6257, #0c544d, #0e4642, #0f3938, #102c2d, #101f21, #0c1314)" }} >
      <article className='flex items-center justify-center gap-8 '>
        {infoCards.map((infoCard) => (
          <InfoCard key={infoCard.title} {...infoCard} />
        ))}
      </article>
    </Section>
  );
};

export default Features;