# Experimental portfolio platform that will be split up as:

- Landing page portfolio, experimental with threejs experiences that redirects to dev / anim portfolio
- Devepoment portfolio
- Animation portfolio
- Shop webapp maybe?
- API to support above apps + monetize my small chrome extensions and other small tools in the film + VFX space.

To self host on a VPS with coolify under sub domains, --- No idea how well it will work, but there should be little to no traffic to these apps.

# shadcn/ui monorepo template

This template is for creating a monorepo with shadcn/ui.

## Usage

```bash
pnpm dlx shadcn@latest init
```

## Adding components

To add components to your app, run the following command at the root of your `web` app:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

## Tailwind

Your `tailwind.config.ts` and `globals.css` are already set up to use the components from the `ui` package.

## Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@repo/ui/components/button";
```
