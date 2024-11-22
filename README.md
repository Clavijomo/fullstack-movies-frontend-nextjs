
# Next.js Movies Frontend

Este es el proyecto frontend para la aplicación **Movies**, desarrollado con **Next.js**, **React** y **TypeScript**. La aplicación consume una API REST y proporciona funcionalidades como autenticación, navegación y visualización de películas.

---

## 🛠️ Tecnologías utilizadas

- **Next.js** 15
- **React** 19
- **TypeScript** 5
- **Axios** para peticiones HTTP

---

## 🚀 Configuración y ejecución del proyecto

### Requisitos previos

- Node.js versión **16 o superior**
- npm o yarn

### Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu_usuario/tu_repositorio.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd nextjs-movies
   ```

3. Instala las dependencias:

   ```bash
   npm install
   # o si prefieres usar yarn
   yarn install
   ```

### Scripts disponibles

- **`npm run dev`**: Inicia el servidor de desarrollo en `http://localhost:3000`.
- **`npm run build`**: Construye la aplicación para producción.
- **`npm start`**: Inicia el servidor en modo producción.
- **`npm run lint`**: Ejecuta el linter para verificar la calidad del código.

---

## 🌲 Estructura de carpetas

```plaintext
├── public/                # Archivos estáticos como imágenes, fuentes, etc.
├── src/app/               # Carpeta principal de la aplicación
│   ├── components/        # Componentes reutilizables de la aplicación
│   ├── dashboardMovies/   # Dashboard de películas
│   ├── fonts/             # Fuentes personalizadas
│   ├── hooks/login/       # Hooks personalizados para login
│   ├── interfaces/        # Tipos e interfaces de TypeScript
│   ├── login/             # Componentes y lógica para autenticación
│   ├── resources/login/   # Recursos adicionales para la autenticación
│   ├── styles/login/      # Estilos relacionados con el login
│   ├── favicon.ico        # Icono de la aplicación
│   ├── globals.css        # Estilos globales de la aplicación
│   ├── layout.tsx         # Componente de diseño principal
│   └── page.tsx           # Página de inicio
├── .eslintrc.json         # Configuración de ESLint
├── .gitignore             # Archivos ignorados por Git
├── next.config.ts         # Configuración personalizada de Next.js
├── package.json           # Configuración de dependencias y scripts
├── package-lock.json      # Registro de dependencias
├── tsconfig.json          # Configuración de TypeScript
```

---

## 🌟 Funcionalidades principales

1. **Autenticación:**
   - Formulario de inicio de sesión y registro.
   - Validación de usuario y generación de token JWT.

2. **Navegación:**
   - Diseño de interfaz responsivo.
   - Gestión de rutas dinámicas para la visualización de películas.

3. **Consumo de API:**
   - Axios configurado para interactuar con el backend.
   - Manejo de estados para las películas y autenticación.

4. **Componentización:**
   - Diseño modular con componentes reutilizables.
   - Separación de lógica y presentación.

---

## 🌐 Endpoints de la API consumidos

Asegúrate de que el backend esté funcionando antes de ejecutar este proyecto. Los endpoints consumidos son:

1. **`GET /movies`**: Obtiene todas las películas.
1. **`POST /movies/movie`**: Obtiene una película.
2. **`POST /auth/login`**: Inicia sesión y obtiene un token.
3. **`POST /auth/register`**: Registra un nuevo usuario.
4. **`POST /movies/recommend`**: Obtiene recomendaciones basadas en IDs de películas.

---

## ✨ Cómo contribuir

1. Crea una nueva rama para tu funcionalidad: `git checkout -b feature/nueva-funcionalidad`.
2. Realiza tus cambios y haz un commit: `git commit -m "Añade nueva funcionalidad"`.
3. Haz push a tu rama: `git push origin feature/nueva-funcionalidad`.
4. Abre un Pull Request en GitHub.

---
## 🤝 Créditos

Desarrollado por Jonathan Clavijo como parte del sistema **Movies App**. Si tienes alguna duda, no dudes en contactarme.
