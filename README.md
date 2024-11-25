
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
- **`npm run test`**: Correr los test de la App.
- **`npm run lint`**: Ejecuta el linter para verificar la calidad del código.

---

## 🌲 Estructura de carpetas

```plaintext
src/
└── app/
    ├── components/             # Componentes reutilizables de la aplicación
    ├── context/                # Contextos globales para manejar estados
    ├── home/                   # Home de la aplicación de películas
    │   ├── [id]/              # Páginas dinámicas basadas en IDs de películas
    │   ├── _Banner.tsx        # Componente del banner de películas
    │   ├── _CardMovie.tsx     # Componente para mostrar una tarjeta de película
    │   ├── _ModalFormUser.tsx # Componente para manejar formularios de usuario
    │   ├── Home.test.tsx      # Pruebas unitarias para el componente Home
    │   ├── page.tsx           # Página principal de la aplicación
    ├── hooks/                 # Hooks personalizados para la aplicación
    ├── interfaces/            # Tipos e interfaces globales en TypeScript
    ├── resources/             # Recursos adicionales como imágenes, íconos, etc.
    ├── styles/                # Estilos globales y específicos de la aplicación
    ├── favicon.ico            # Ícono de la aplicación
    ├── globals.css            # Estilos globales de la aplicación
    ├── layout.tsx             # Componente para el diseño principal de la aplicación
    ├── page.tsx               # Página de inicio
.env.local                     # Variables de entorno locales

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
