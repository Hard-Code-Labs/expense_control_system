import { Button } from '@nextui-org/react';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useUserAuthStore } from '../store/userAuthStore';

const LogoutButton = () => {

  const router = useRouter();
  const clearTokens = useUserAuthStore(state => state.clearTokens);
  
  const handleLogout = () => {
    clearTokens();
    router.push('/login');
  };

  return (
    <Button
      size="lg"
      radius="full"
      color='success'
      className="w-full mt-10 font-bold"
      onClick={handleLogout}
    >
      Cerrar sesión
    </Button>
  );
};

export default LogoutButton;