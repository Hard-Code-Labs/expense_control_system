import { LockClosedIcon } from '@heroicons/react/24/solid';
import { Button, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';
import React from 'react';
import { useRouter } from 'next/navigation';

const AccessDenied = () => {
  const router = useRouter();
  return (
    <main className="w-full flex items-center justify-center ">
      <Card className="w-full max-w-sm p-4 bg-black border border-warning">
        <CardHeader className="flex gap-3 items-center justify-center ">
          <LockClosedIcon className="w-12 text-warning" />
          <p className="text-xl font-bold whitespace-nowrap">Acceso No Autorizado</p>
          <LockClosedIcon className="w-12 text-warning" />
        </CardHeader>
        <CardBody className="p-6">
          <p>Lo sentimos, no tienes permiso para acceder a esta página o recurso.</p>
          <p className="mt-2">Si crees que esto es un error, por favor contacta al administrador del sistema.</p>
        </CardBody>
        <CardFooter>
          <Button
            color="success"
            variant='bordered'
            className="w-full font-bold p-6"
            onClick={() => router.push('/dashboard')}
          >
            Volver al Dashboard
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
};

export default AccessDenied;