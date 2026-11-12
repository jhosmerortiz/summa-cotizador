# SUMMA by Vertex — Landing page

Landing de **SUMMA**, plataforma de cotización automática de productos y servicios desarrollada por Vertex.
Construida con React 19 + TypeScript + Vite + Tailwind CSS v4.

```bash
npm install
npm run dev      # desarrollo
npm run build    # producción (dist/)
npm run lint     # oxlint
```

## Estructura

```
LOGO E ICONOS/        Archivos maestros del logotipo (no se sirven en la web)
MANUAL DE MARCA/      Manual de marca: fuente de verdad para colores, tipografía y textos
public/brand/         Favicons (rutas fijas usadas por index.html)
src/
├── assets/brand/     Logotipos optimizados para web (generados desde LOGO E ICONOS)
├── main.tsx          Punto de entrada
├── App.tsx           Composición de la página (orden de secciones)
├── styles/global.css Tokens de diseño (paleta y tipografía del manual) y estilos base
├── config/brand.ts   Datos de marca: nombre, eslogan, colores y rutas de logotipos
├── content/site.ts   TODOS los textos de la página — edita el contenido aquí
├── services/         Integraciones externas (envío del formulario de contacto)
├── hooks/            Hooks reutilizables (useInView, useScrolled)
├── components/
│   ├── brand/        Logo (versiones oficiales) y elementos gráficos de marca
│   ├── layout/       Navbar y Footer
│   └── ui/           Piezas genéricas: Button, Section, SectionHeader, Container, Reveal…
└── sections/         Una sección de la landing por archivo (o carpeta si tiene subcomponentes)
```

### Cómo extender

- **Cambiar un texto:** `src/content/site.ts`.
- **Añadir una sección:** crea `src/sections/MiSeccion.tsx` usando `Section` + `SectionHeader`,
  agrega su contenido en `content/site.ts` y colócala en `App.tsx`.
- **Colores:** usa las utilidades `bg-brand-blue`, `text-brand-teal`, `bg-brand-navy`… definidas en
  `styles/global.css`. No uses hexadecimales sueltos.

## Reglas de marca aplicadas (Manual de marca SUMMA)

| Manual | Aplicación |
| --- | --- |
| §03 Paleta | `#05499a` azul principal · `#0cb6ae` turquesa · `#012554` azul oscuro · `#ffffff` blanco |
| §04 Tipografía | Montserrat: Bold/SemiBold en títulos, Regular/Light en textos |
| §02 / §06 Versiones | Logotipo a color sobre fondos claros y en negativo sobre fondos oscuros |
| §05 Tamaño mínimo | Logotipo completo ≥ 120 px de ancho |
| §06 Usos incorrectos | El componente `Logo` no aplica sombras, rotaciones, deformaciones ni recolor |

## Contacto

Los canales oficiales (WhatsApp y correo) están en `CONTACT_CHANNELS`, dentro de `src/content/site.ts`;
la sección de contacto y el footer los toman de ahí. El número y el saludo precargado de WhatsApp son
`WHATSAPP_NUMBER` y `WHATSAPP_GREETING` en ese mismo archivo.

El formulario no necesita backend: `src/services/contact.ts` redacta la solicitud y abre WhatsApp
(app en el celular, WhatsApp Web en la computadora) con el mensaje listo para enviar.
