import React from 'react';
import '@/src/shared/styles/loader.css';

const loading = () => {
  return (
		<section className='w-screen h-screen relative flex justify-center items-center'>
      <div 
        className="loader absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2"
      />
		</section>
	)
};

export default loading;
