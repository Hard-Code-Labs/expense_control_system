import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const Section = ({ 
  children,
  className,
  style
}: SectionProps) => {
  return (
    <section 
      className={`${className} w-full h-[80vh] flex flex-col items-center justify-center`}
      style={style}
    >
      {children}
    </section>
  );
};

export default Section;