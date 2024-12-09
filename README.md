# Control de Gastos

Una aplicación web para administrar tus finanzas personales de manera sencilla, registrando y monitoreando tus ingresos y gastos. Construido con **Next.js**, **React**, **Tailwind CSS**, y **TypeScript** para ofrecer una experiencia rápida y moderna.

## 🚀 Tecnologías Utilizadas

- **React**: Biblioteca para construir interfaces de usuario.
- **Next.js**: Framework para renderizado del lado del servidor y optimización.
- **TypeScript**: Superconjunto de JavaScript con tipado estático.
- **Tailwind CSS**: Framework de utilidades CSS para diseño rápido y eficiente.

## ⚙️ Instalación y Configuración

Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local:

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/Freddyz5/control_gastos.git

2. **Accede al directorio del proyecto**:
    ```bash
    cd control_gastos

3. **Instala las dependencias**:
    ```bash
    npm install

4. **Ejecuta el servidor de desarrollo:**:
    ```bash
    npm run dev

5. **Abre el navegador en http://localhost:3000 para ver la aplicación.**:

> Nota: Asegúrate de tener instalados Node.js >=18.17.0 y npm.

## 🛠️ Estructura del Proyecto
 
El proyecto está organizado de la siguiente manera:

    .
    ├── app/                    # Carpetas de rutas con el modelo App Router de Next.js
    │   ├── (menu)/             # Grupo de rutas (layout compartido para la sección)
    │   │   ├── category/       # Página de categorías
    │   │   ├── dashboard/      # Página de panel de control
    │   │   ├── data/           # Página que muestra datos del usuario
    │   │   └── preferences/    # Página de información de preferencias del usuario
    │   │   └── layout.tsx      # Proveedor de contexto o lógica compartida
    │   ├── login/              # Página de inicio de sesión
    │   └── register/           # Página de registro
    ├── public/                 # Archivos públicos accesibles (imágenes, fuentes)
    ├── src/                    # Fuente del proyecto
    │   ├── category/           # Funcionalidades relacionadas con categorías
    │   ├── dashboard/          # Funcionalidades del panel de control
    │   ├── data/               # Datos estáticos o modelos compartidos
    │   ├── login/              # Lógica o componentes específicos para login
    │   ├── preferences/        # Funcionalidades relacionadas con preferencias del usuario
    │   ├── register/           # Funcionalidades específicas del registro
    │   ├── shared/             # Código compartido entre diferentes módulos
    │   ├── sideMenu/           # Lógica o componentes para el menú lateral
    │   └── titleBar/           # Lógica o componentes para la barra de título
    └── .vscode/                # Configuración para el entorno de desarrollo

## 📂 Estructura de Carpetas para Módulos

Cada módulo en el proyecto (por ejemplo, register, login, dashboard, etc.) debe seguir esta estructura básica. Esta organización asegura consistencia, escalabilidad y claridad en el código.

    📂 [Nombre del módulo]/
    ├── 📂 components/    # Componentes específicos del módulo
    ├── 📂 hooks/         # Hooks personalizados para lógica del módulo
    ├── 📂 services/      # Funciones para manejo de datos o comunicación con APIs
    ├── 📂 types/         # Definiciones de tipos y estructuras TypeScript
    ├── 📂 utils/         # Funciones utilitarias específicas del módulo
    └── index.tsx         # Archivo principal que exporta o inicializa el módulo

### components/ 
- Contiene los componentes React específicos para este módulo.
- Los componentes deben ser pequeños, reutilizables y de una única responsabilidad.
- Ejemplo:
    ```
    📂 components/
    ├── Form.tsx       # Componente principal del formulario
    ├── InputField.tsx # Input reutilizable para el módulo
    └── Header.tsx     # Encabezado para la página del módulo

### hooks/
- Almacena hooks personalizados relacionados con este módulo.
- Estos hooks encapsulan lógica reutilizable, como manejo de estados, efectos o interacciones con datos.
- Ejemplo:
    ```
    📂 hooks/
    ├── useRegisterForm.ts  # Hook para manejar lógica del formulario de registro
    └── useAuthStatus.ts    # Hook para manejar el estado de autenticación

### services/
- Incluye funciones para interactuar con APIs u otras fuentes de datos.
- Aquí van las solicitudes HTTP o funciones que abstraen la lógica del backend.
- Ejemplo:
    ```
    📂 services/
    ├── registerUser.ts      # Servicio para enviar datos del usuario al backend
    └── validateUsername.ts  # Servicio para validar nombres de usuario

### types/
- Contiene definiciones de interfaces y tipos TypeScript específicos del módulo.
- Esto ayuda a mantener tipado fuerte y centralizado.
- Ejemplo:
    ```
    📂 types/
    ├── User.ts      # Interface para un usuario
    └── FormTypes.ts # Tipos específicos para el formulario

### utils/
- Almacena funciones utilitarias específicas del módulo que no encajan en las otras - categorías.
- Ejemplo:
    ```
    📂 utils/
    ├── formatPhone.ts   # Función para dar formato a números telefónicos
    └── validateEmail.ts # Validación de correos electrónicos

### index.tsx
- Archivo principal del módulo que puede:
- Exportar todos los elementos clave del módulo (componentes, hooks, servicios, etc.).
Actuar como punto de entrada para inicializar cualquier lógica específica del módulo.

## 🌟 Funcionalidades

  - Registro de gastos: Añade y categoriza tus transacciones.
  - Visualización de estadísticas: Ve gráficos interactivos de tus finanzas.
  - Filtros avanzados: Filtra gastos por categoría, fecha, y más.
  - Responsivo: Diseñado para funcionar en dispositivos móviles y de escritorio

## 🔗 Recursos y Enlaces Útiles

Esta sección incluye enlaces a herramientas y recursos importantes relacionados con el proyecto.

### 🌐 **Repositorios**
- **Frontend (Este proyecto)**: [control_gastos (frontend)](https://github.com/Freddyz5/control_gastos)
- **Backend**: [expsys (backend)](https://github.com/Tebanes/expsys)

### 📋 **Gestión de Tareas y notas**
- **GitHub Projects**: [Tareas en GitHub](https://github.com/users/Tebanes/projects/1)
- **Notion**: [Tablero de tareas](URL_DE_NOTION)

### 🎨 **Diseño y Prototipos**
- **Figma**: [Prototipo del diseño](https://www.figma.com/design/5cJ2ZnNU2ji40PRuy3bwZn/AppGastos?node-id=0-1&t=McID9MhJ93YPRz4p-1)

### 📊 **Documentación Técnica**
- **Diagramas de flujo**: [Diagrama de funcionalidades](https://www.figma.com/board/a9JDqY2zPLuE2g61nm7lRH/App-Gastos?node-id=0-1&t=GJW0QYZuDRXoHv3I-1)
<!-- - **Especificaciones funcionales**: [Documento técnico](URL_DE_ESPECIFICACIONES) -->

### 💬 **Comunicación**
- **Discord**: [Canal del equipo](https://discord.com/channels/1149165210565886013/1151688796941848637)
- **Email de contacto**: [hardcode.labs.v1@gmail.com](mailto:hardcode.labs.v1@gmail.com)