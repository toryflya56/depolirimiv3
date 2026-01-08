
# LIRIMI Barber Studio

Welcome to the LIRIMI Barber Studio web application repository. This project is a modern, responsive, and performant web application for a premium barber studio located in Soho, NYC.

## Table of Contents

- [About the App](#about-the-app)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Building for Production](#building-for-production)
- [Configuration](#configuration)
  - [Vite Configuration](#vite-configuration)
  - [PostCSS Configuration](#postcss-configuration)
  - [Tailwind CSS Configuration](#tailwind-css-configuration)
- [Design System](#design-system)
  - [Color Palette](#color-palette)
  - [Typography](#typography)
  - [Sizing and Spacing](#sizing-and-spacing)
  - [Animations](#animations)
  - [Shadows](#shadows)
  - [Border Radius](#border-radius)
  - [Custom Plugins](#custom-plugins)

## About the App

LIRIMI Barber Studio is a client-facing application that showcases the services of the barber studio and allows users to book appointments. The application features a sleek, modern design with a cyberpunk-inspired color palette.

**Key Features:**

- **Responsive Design:** The application is fully responsive and optimized for all screen sizes, from mobile to 4K displays.
- **Lazy Loading:** Pages are lazy-loaded to improve initial load times.
- **Component-Based Architecture:** The application is built using a component-based architecture, making it easy to maintain and scale.
- **Booking Wizard:** A multi-step booking wizard guides users through the process of selecting a service, a barber, and a time for their appointment.

## Tech Stack

- **Framework:** [React](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Routing:** [React Router](https://reactrouter.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

## Project Structure

The project is organized into the following directories:

```
/src
|-- /assets
|-- /components
|   |-- /layout
|   |-- /ui
|-- /features
|   |-- /booking
|   |-- /studio
|-- /lib
|-- /pages
|-- /types
```

- **`assets`**: Static assets such as images and fonts.
- **`components`**: Reusable UI components.
  - **`layout`**: Components that define the overall structure of the application (e.g., `Header`, `Footer`).
  - **`ui`**: Generic, reusable UI components (e.g., `Button`).
- **`features`**: Components and logic related to specific application features (e.g., `booking`, `studio`).
- **`lib`**: Utility functions and constants.
- **`pages`**: Top-level page components.
- **`types`**: TypeScript type definitions.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18.0.0 or higher)
- [npm](https://www.npmjs.com/) (v9.0.0 or higher)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/toryflya56/depolirimiv3.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd lirimi-barber-studio
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

### Development

To start the development server, run the following command:

```bash
npm run dev
```

This will start the Vite development server at `http://localhost:3000`.

### Building for Production

To create a production build of the application, run the following command:

```bash
npm run build
```

This will generate a `dist` directory with the optimized production build.

## Configuration

### Vite Configuration

The Vite configuration is located in `vite.config.ts`. It includes settings for:

- **Plugins:** The `@vitejs/plugin-react` plugin is used to enable React support.
- **Path Aliases:** The `@` alias is configured to point to the `src` directory.
- **Development Server:** The development server is configured to run on port 3000.
- **Build:** The build output is configured to be placed in the `dist` directory.

### PostCSS Configuration

The PostCSS configuration is located in `postcss.config.js`. It includes the following plugins:

- **`tailwindcss`:** Processes Tailwind CSS directives.
- **`autoprefixer`:** Adds vendor prefixes for cross-browser compatibility.
- **`cssnano`:** Minifies the CSS for production builds.

### Tailwind CSS Configuration

The Tailwind CSS configuration is located in `tailwind.config.js`. It includes:

- **Content Paths:** The `content` array specifies the files that Tailwind should scan to generate the necessary CSS.
- **Dark Mode:** Dark mode is enabled using the `class` strategy.
- **Theme Customization:** The `theme` object is extended to include custom colors, fonts, spacing, and more.

## Design System

The design system is defined in the `tailwind.config.js` file and provides a consistent look and feel across the application.

### Color Palette

The color palette is designed to be modern and vibrant, with a cyberpunk-inspired theme.

#### Primary Color: Cyber Blue

- **`cyber-DEFAULT`**: `#00E0FF`
- **`cyber-50`**: `#E5FBFF`
- **`cyber-100`**: `#CCF7FF`
- **`cyber-200`**: `#99EFFF`
- **`cyber-300`**: `#66E7FF`
- **`cyber-400`**: `#33DFFF`
- **`cyber-500`**: `#00E0FF` (Main)
- **`cyber-600`**: `#00B8CC`
- **`cyber-700`**: `#008A99`
- **`cyber-800`**: `#005C66`
- **`cyber-900`**: `#002E33`
- **`cyber-950`**: `#001719`
- **`cyber-dim`**: `rgba(0, 224, 255, 0.1)`
- **`cyber-glow`**: `rgba(0, 224, 255, 0.5)`

#### Background Colors: Deep Blues

- **`deep-950`**: `#02040a`
- **`deep-900`**: `#080c1b`
- **`deep-800`**: `#0f172a`
- **`deep-700`**: `#1e293b`
- **`deep-600`**: `#334155`

### Typography

The application uses a combination of sans-serif, serif, and monospace fonts to create a clear and readable hierarchy.

- **Sans-serif:** `Inter`
- **Serif:** `Playfair Display`
- **Monospace:** `JetBrains Mono`

### Sizing and Spacing

The spacing and sizing scale is based on a 4px grid. The following custom values are available:

- **`18`**: `4.5rem` (72px)
- **`22`**: `5.5rem` (88px)
- **`26`**: `6.5rem` (104px)
- **`30`**: `7.5rem` (120px)
- **`128`**: `32rem` (512px)
- **`144`**: `36rem` (576px)

### Animations

A set of custom animations are available as utility classes:

- **`fade-in`**: A simple fade-in animation.
- **`fade-in-up`**: A fade-in animation with an upward translation.
- **`slide-in`**: A slide-in animation from the left.
- **`pulse-slow`**: A slow pulse animation.
- **`bounce-slow`**: A slow bounce animation.
- **`spin-slow`**: A slow spin animation.
- **`glow`**: A glowing animation that alternates between two box shadows.

### Shadows

Custom box shadows are available for creating a glowing effect:

- **`glow-sm`**: `0 0 10px rgba(0, 224, 255, 0.3)`
- **`glow`**: `0 0 20px rgba(0, 224, 255, 0.5)`
- **`glow-lg`**: `0 0 40px rgba(0, 224, 255, 0.6)`
- **`inner-glow`**: `inset 0 0 20px rgba(0, 224, 255, 0.2)`

### Border Radius

Custom border radius values are available for creating rounded corners:

- **`4xl`**: `2rem` (32px)
- **`5xl`**: `2.5rem` (40px)
- **`6xl`**: `3rem` (48px)

### Custom Plugins

A custom Tailwind CSS plugin is used to add the following utility classes:

- **`.glass`**: A glassmorphism effect with a semi-transparent background, backdrop blur, and a subtle border.
- **`.glass-dark`**: A darker version of the glassmorphism effect.
- **`.text-glow`**: A glowing effect for text.
- **`.text-glow-strong`**: A stronger version of the text glow effect.
