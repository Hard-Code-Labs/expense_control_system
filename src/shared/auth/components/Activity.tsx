import { useEffect, useState } from "react";
import ActivityModal from "./ActivityModal";
import { usePathname, useRouter } from 'next/navigation';
import { useUserAuthStore } from "../../store/userAuthStore";
import { useSnack } from "../../hooks/useSnack";

const noWatch = ['/', '/login', '/register', '/passwordRecovery'];

const Activity = () => {

  const router = useRouter();
  const pathname = usePathname();
  const { enqueueSnackProps } = useSnack();

  const [showModal , setShowModal] = useState(false);
  const clearTokens = useUserAuthStore((state) => state.clearTokens);
  const renewToken = useUserAuthStore((state) => state.renewToken);

  const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  const handleAccept = async () => {
    console.log("Usuario aceptó. Renovando token...");
    await renewToken();
  };

  const handleCancel = () => {
    console.log("Usuario canceló. Cerrando sesión...");
    clearTokens();
    router.push('/login');
  };


  useEffect(() => {

    if (noWatch.includes(pathname)) {
      return;
    }

    let activityTimeout: NodeJS.Timeout;
    let modalTimeout: NodeJS.Timeout;

    const inactivityTracker = debounce(() => {
      console.log("resetInactivity");

      clearTimeout(activityTimeout);
      clearTimeout(modalTimeout);
    
      // Timer: sin actividad del usuario ⬇️
      const inactivityTime = 0.2 // tiempo de inactividad en minutos
      activityTimeout = setTimeout(() => {

        setShowModal(true);
    
        // Timer: sin actividad en el modal abierto ⬇️
        const closeModalTime = 0.1 // tiempo de inactividad en minutos
        modalTimeout = setTimeout(() => {
          clearTokens();
          setShowModal(false);
          router.push('/login');
          enqueueSnackProps({
            message: `Se ha detectado inactividad por un largo periodo de tiempo.`,
            type: "warning",
            duration: 10000,
          }); 
          enqueueSnackProps({
            message: `Por tu seguridad hemos cerrado session`,
            type: "warning",
            duration: 10000,
          });
        }, closeModalTime * 60 * 1000);
        // Timer: sin actividad en el modal abierto ⬆️

      }, inactivityTime * 60 * 1000);
      // Timer: sin actividad del usuario ⬆️

    }, 300);

    const events = ["mousemove", "keydown", "touchstart"];
    events.forEach((event) => window.addEventListener(event, inactivityTracker));

    return () => {
      clearTimeout(activityTimeout);
      clearTimeout(modalTimeout);
      events.forEach((event) =>
        window.removeEventListener(event, inactivityTracker)
      );
    };
  }, [setShowModal, clearTokens, pathname]);

  return (
    <>
      <ActivityModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onButtonAccept={handleAccept}
        onButtonClose={handleCancel}
      />
    </>
  );
};

export default Activity;
