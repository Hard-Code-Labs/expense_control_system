import { lusitana } from '@/src/ui/fonts';
import { Cog8ToothIcon } from '@heroicons/react/24/solid';

export default function Logo() {
  return (
    <div className={`${lusitana.className} flex items-center text-[#EEFAF8] pd-2`} 
    style={{textShadow: "0 0 40px #00be98a0"}}>
      <Cog8ToothIcon className="w-14 text-[#1f7a73]" />
      <p className="text-[32px] font-bold">Money Attic</p>
    </div>
  );
}

