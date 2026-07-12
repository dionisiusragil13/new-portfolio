# Folder Structure Explanation

```
src/
├── app/              # Next.js App Router pages, layouts, and API routes
├── components/
│   ├── ui/           # Reusable base UI components (Button, Input, Card, Modal)
│   ├── layout/       # Layout components (Header, Footer, Sidebar, Navigation)
│   └── sections/     # Page-specific section components (Hero, About, Projects, Contact)
├── lib/              # Utility functions, helpers, and third-party client configs
├── hooks/            # Custom React hooks (useTheme, useMediaQuery, useIntersectionObserver)
├── types/            # TypeScript type definitions and interfaces
├── constants/        # App-wide constants and configuration objects (nav links, site config)
├── data/             # Static content data (projects list, experiences, testimonials)
└── styles/           # Additional style files (fonts import, keyframes, print styles)
```

## Purpose of Each Folder

### `app/`
The core of the Next.js App Router. Contains page files (`page.tsx`), layouts (`layout.tsx`), loading states (`loading.tsx`), error boundaries (`error.tsx`), and API route handlers. Each subdirectory represents a route segment.

### `components/ui/`
Small, reusable, presentational UI primitives — the building blocks. Examples: Button, Input, Badge, Card, Modal, Dropdown. These are framework-agnostic and should not contain business logic.

### `components/layout/`
Components that define the structural shell of the site. Placed once in the root layout and shared across pages. Examples: Header, Footer, MobileNav, Sidebar.

### `components/sections/`
Larger, page-specific compositional blocks that combine UI primitives and data. Each section maps to a distinct part of a page. Examples: Hero, AboutSection, ProjectGrid, ContactForm.

### `lib/`
Pure utility functions, API client instances, date formatters, `cn()` helper for Tailwind class merging, and other non-React logic. This is where side-effect-free logic lives.

### `hooks/`
Custom React hooks that encapsulate stateful and effectful logic. Examples: `useScrollPosition`, `useMediaQuery`, `useLocalStorage`, `useTheme`.

### `types/`
All TypeScript interfaces, types, and enums used across the project. Keeping types centralized prevents circular imports and improves maintainability. Files mirror the domain (e.g., `project.ts`, `user.ts`, `experience.ts`).

### `constants/`
Hardcoded configuration values that don't change at runtime: site metadata, navigation links, social links, feature flags, breakpoint values.

### `data/`
Static content stored as typed arrays/objects, fetched at build time or on the server. Examples: projects list, work experience, skills, testimonials. This keeps content out of components and makes it easy to swap in a CMS later.

### `styles/`
Global style files beyond `globals.css`: font-face declarations, third-party style overrides, print styles, animation keyframes.
