import { useEffect, useState } from "react";
import ActivityModal from "./ActivityModal";
import { usePathname, useRouter } from 'next/navigation';
import { useUserAuthStore } from "../../store/userAuthStore";

const noWatch = ['/', '/login', '/register', '/passwordRecovery'];

const Activity = () => {

  const router = useRouter();
  const pathname = usePathname();

  // Modal
  const [showModal , setShowModal] = useState(false);
  
  // Tokens
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
    let activityTimeout: NodeJS.Timeout;
    let modalTimeout: NodeJS.Timeout;

    if (noWatch.includes(pathname)) {
      return;
    }

    const resetInactivity = debounce(() => {
      // 1. Reiniciar estado de inactividad
      // console.log("🔄 Reset de inactividad iniciado");
      // console.log("✅ Usuario marcado como activo y modal ocultado (si estaba visible)");
    
      // 2. Limpiar temporizador anterior
      // console.log("🧹 Temporizador de inactividad anterior limpiado");
      clearTimeout(activityTimeout);
    
      // 3. Configurar nuevo temporizador de inactividad
      const inactivityTime = 1 // tiempo en minutos
      activityTimeout = setTimeout(() => {
         // Marca al usuario como inactivo y muestra el modal de inactividad
        // console.log("⏳ Usuario inactivo detectado (1 minuto sin actividad)");
        // console.log("⚠️ Modal de inactividad mostrado");
        setShowModal(true);
    
        // Configurar temporizador para cerrar sesión si el modal permanece visible
        const closeModalTime = 2 // tiempo en minutos
        modalTimeout = setTimeout(() => {
          clearTokens(); // Cierra sesión
          router.push('/login');
          setShowModal(false);
        }, closeModalTime * 60 * 1000);

      }, inactivityTime * 60 * 1000);
    }, 400);

    // const events = ["mousemove", "keydown", "scroll", "touchstart"];
    const events = ["mousemove", "touchstart"];
    events.forEach((event) => window.addEventListener(event, resetInactivity));

    resetInactivity();

    return () => {
      clearTimeout(activityTimeout);
      clearTimeout(modalTimeout);
      events.forEach((event) =>
        window.removeEventListener(event, resetInactivity)
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
