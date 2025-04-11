import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Props {
  icon: IconType;
  title: string;
  description: string;
}

interface IconType {
  name: LucideIcon;
  strokeWidth?: number;
}

const InfoCard = ({
  icon,
  title,
  description,
}: Props) => {
  const Icon = icon.name;
  return (
    <Card className="max-w-xs p-6 bg-black rounded-2xl border border-[#00BE99] hover:scale-105 hover:backdrop-blur-[1000px] hover:bg-[#001714]"> 
      <CardHeader className="flex justify-center items-center">
        <Icon size={140} strokeWidth={icon.strokeWidth} color="#00BD9B" />
      </CardHeader>
      <CardBody className="text-center text-3xl font-bold">
        <h1>{title}</h1>
      </CardBody>
      <CardFooter className="text-center text-xl font-thin">
        <p>{description}</p>
      </CardFooter>
    </Card>
  );
};

export default InfoCard;