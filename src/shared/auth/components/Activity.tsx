import { useEffect, useState, useRef } from "react";
import ActivityModal from "./ActivityModal";
import { usePathname, useRouter } from 'next/navigation';
import { useUserAuthStore } from "../../store/userAuthStore";
import { useSnack } from "../../hooks/useSnack";

const noWatch = ['/', '/login', '/register', '/passwordRecovery'];

const Activity = () => {
  const inactivityTime = 30; // Tiempo de inactividad en minutos
  const closeModalTime = 10; // Tiempo de inactividad en el modal abierto en minutos

  const router = useRouter();
  const pathname = usePathname();
  const { enqueueSnackProps } = useSnack();

  const [showModal, setShowModal] = useState(false);
  const clearTokens = useUserAuthStore((state) => state.clearTokens);
  const renewToken = useUserAuthStore((state) => state.renewToken);

  const activityTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const modalTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearAllTimeouts = () => {
    if (activityTimeoutRef.current) {
      clearTimeout(activityTimeoutRef.current);
    }
    if (modalTimeoutRef.current) {
      clearTimeout(modalTimeoutRef.current);
    }
  };

  const handleAccept = async () => {
    console.log("Usuario aceptó. Renovando token...");
    await renewToken();
    clearAllTimeouts(); // Limpia todos los temporizadores activos
    setShowModal(false); // Cierra el modal
    startActivityTracking(); // Reinicia el seguimiento de actividad
  };

  const handleCancel = () => {
    console.log("Usuario canceló. Cerrando sesión...");
    clearTokens();
    clearAllTimeouts(); // Limpia todos los temporizadores
    router.push('/login'); // Redirige al login
  };

  const startActivityTracking = () => {
    activityTimeoutRef.current = setTimeout(() => {
      setShowModal(true); // Abre el modal

      modalTimeoutRef.current = setTimeout(() => {
        clearTokens();
        setShowModal(false);
        router.push('/login');
        enqueueSnackProps({
          message: `Se ha detectado inactividad por un largo periodo de tiempo.`,
          type: "warning",
          duration: 10000,
        });
        enqueueSnackProps({
          message: `Por tu seguridad hemos cerrado sesión.`,
          type: "warning",
          duration: 10000,
        });
      }, closeModalTime * 60 * 1000);
    }, inactivityTime * 60 * 1000);
  };

  useEffect(() => {
    if (noWatch.includes(pathname)) {
      return;
    }

    const resetActivity = () => {
      clearAllTimeouts(); // Limpia cualquier temporizador activo
      startActivityTracking(); // Reinicia el seguimiento de actividad
    };

    const events = ["mousemove", "keydown", "touchstart"];
    events.forEach((event) => window.addEventListener(event, resetActivity));

    startActivityTracking(); // Inicia el seguimiento de actividad al montar

    return () => {
      clearAllTimeouts(); // Limpia temporizadores al desmontar el componente
      events.forEach((event) => window.removeEventListener(event, resetActivity));
    };
  }, [pathname]);

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
