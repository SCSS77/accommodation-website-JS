# Proyecto de Web de Hospedaje

Este proyecto es una web de hospedaje estructurada con Pattern Lab utilizando Atomic Design. Se han definido varios elementos clave para la web, incluyendo un preheader, header, título, banner hero y una sección "Por qué nos eligen".

## Estructura del Proyecto

El proyecto sigue el enfoque de Atomic Design y está estructurado en los siguientes niveles:

- `00-atoms`: Componentes básicos e indivisibles.
- `01-molecules`: Combinaciones simples de átomos.
- `02-organisms`: Secciones completas que combinan moléculas y átomos.
- `03-templates`: Plantillas completas usando organismos y moléculas.
- `04-pages`: Páginas completas usando plantillas.

## Elementos Definidos

### Preheader

Contiene algunos enlaces de utilidad.

### Header

Incluye la navegación y el selector de idioma.

### Título

Despliega un selector de ciudades.

### Banner Hero

Incluye un buscador por destino y un elemento para reservar habitación según el número de adultos y niños.

### Sección "Por qué nos eligen"

Muestra algunos puntos destacados del sitio.

## Tecnologías Utilizadas

- **Pattern Lab**
- **Atomic Design**
- **Tailwind CSS**
- **PostCSS**

## Requisitos

- Node.js (versión LTS recomendada)
- npm o yarn

## Instalación

1. Clona el repositorio:
   ```sh
   git clone <url-del-repositorio>
   cd <nombre-del-repositorio>
2. Instala las dependencias:
   npm install o yarn install
3. Inicia el servidor de Pattern Lab:
npm run start o yarn start

## Desplegar
npm run build o yarn build
