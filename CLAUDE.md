# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static marketing/showcase site for [Roke](https://github.com/wardbox/roke), a Wasp starter template. Built with Astro and Tailwind CSS v4.

## Commands

```bash
pnpm dev      # Start dev server at localhost:4321
pnpm build    # Build to ./dist/
pnpm preview  # Preview production build
```

## Architecture

- **Single page site**: `src/pages/index.astro` is the only page
- **Styling**: Tailwind CSS v4 via Vite plugin, custom theme in `src/styles/global.css`
- **Theme colors**: Dark theme with CSS custom properties (`--color-background`, `--color-foreground`, `--color-muted`, `--color-border`, `--color-primary`)

## Style Guidelines

- Dark, minimal aesthetic similar to wasp-lang.dev or shadcn/ui docs
- Use the existing color tokens defined in global.css
- Keep it simple - this is a static landing page, not a full application
