# 👻 KATCODED.DE

> My personal developer website — a home for my projects, my software engineering journey, and the things I love to build.

## About

KATCODED.DE is Kat's personal developer website and an ongoing learning project developed during software engineering training at **WBS CODING SCHOOL**.

Version **0.1.0** provides a public portfolio with five pages, a shared navigation and footer, and a light CUTE_COZY visual identity. The local presentation version is functionally largely complete as of **1 November 2026**, ahead of the presentation on **2 November 2026**. This describes the local working tree; it is not a claim that the latest version has been deployed or fully audited.

## Pages and features

| Route | Content |
| --- | --- |
| `/` | Personal introduction, coding-crew illustration, and four topic cards with category labels. |
| `/projects` | Project gallery with category filters and interactive project details. |
| `/about` | Four personal sections covering Kat's background, learning journey, tools, and creative interests, plus an illustration transparency note. |
| `/dev-tools` | Personal developer tools and workflow resources, with an existing link to kat-create on GitHub. |
| `/roadmap` | A read-only Kanban board with four status columns, compact task buttons, and a detail dialog. |

- Project and roadmap details use native HTML `<dialog>` elements.
- Project filters use React state and retain an accessible pressed state.
- The roadmap keeps its columns side by side and scrolls horizontally inside the board when space is limited.
- Responsive layouts, visible keyboard focus styles, and reduced-motion rules are present. Comprehensive accessibility conformance has not been established.
- The shared header marks the active route; the footer includes GitHub, copyright, and a visible AI illustration disclosure.
- The four subpage hero illustrations reuse exactly the same notebook, laptop, cat mug, and book-stack assets as the corresponding homepage cards.
- The KC favicon with turquoise glasses is installed through the Next.js App Router favicon convention.

Homepage categories are labels, not filter buttons or links. Public page navigation is provided by the header.

## Data and architecture

The current website uses **static local data**:

- `src/data/projects.ts` contains the project records, with their type in `src/types/project.ts`.
- The server-rendered project page passes only records with `published: true` to the interactive gallery.
- The roadmap's 13 task records are defined in `src/app/roadmap/page.tsx`. A small client-side board manages the selected task and opens its detail dialog.
- Images and UI icons are imported through `src/lib/images.ts` and `src/lib/icons.ts`.

There is **no private admin dashboard inside KATCODED.DE**. That part of the original plan has been replaced by a future integration with **KATUARY**, Kat's separate private application. KATUARY is intended to manage projects and roadmap tasks; KATCODED.DE should eventually display only explicitly approved public data.

**No database connection, authentication, application API, editing interface, or KATUARY synchronization is implemented in v0.1.** The current publication flag is a static display filter, not a private-data storage or authorization system. Credentials and private records must never be added to the public source data.

## Technology

Verified against the installed packages and source on 1 November 2026:

| Technology | Current use |
| --- | --- |
| Next.js 16.4.3 | App Router, server-rendered pages, image handling, and client component boundaries. |
| React 19.3.0 | Components, gallery filters, and selected-item state for dialogs. |
| TypeScript 5.9.3 | Typed component props and project data. |
| CSS Modules | Main page and component styling. |
| CUTE_COZY | Existing design tokens, local Quicksand/Nunito fonts, icons, and pixelart assets. |
| Tailwind CSS 4.3.3 | Existing shared layout/navigation utilities and global CSS integration. |
| ESLint | Static code checks. |

Tailwind is installed **and used**, rather than merely planned; most page styling lives in CSS Modules. Neon/PostgreSQL is not connected to the application.

OpenNext Cloudflare 1.20.14 and Wrangler 4.155.0 are installed, and Cloudflare Workers configuration and npm scripts exist. These are deployment tooling, not evidence that the latest working tree is running successfully online. No current Workers build, deployment, or live-site verification was performed for this documentation update.

## Run locally

The reviewed environment uses **Node.js 24.19.0** and **npm 12.1.0**. With project dependencies and the required local assets already available:

```bash
npm run dev
```

Open `http://localhost:3000`. The local development site was viewed in Safari during the v0.1 implementation work.

**Fresh-checkout limitation:** the current local working tree includes application files that are not yet committed and 60 imported design assets that are still ignored and unversioned. A clean checkout is not yet a verified, self-contained installation. Dependency installation and clean-checkout reproducibility have not been retested for this version.

## Checks and build

These commands were executed during the final implementation work:

```bash
./node_modules/.bin/tsc --noEmit --incremental false
npm run lint
npm run build
```

- TypeScript passed.
- ESLint completed with no errors and one existing `@next/next/no-img-element` warning in the design-system React example.
- The latest production-build attempt was blocked by the execution environment: Turbopack could not bind a local port (`Operation not permitted`). A successful production build of the final working tree remains to be confirmed outside that restriction.
- Focused Safari checks covered the four subpage heroes at desktop and mobile sizes and the new favicon. Earlier roadmap checks covered 320, 768, 1280, and 1440 px and dialog mouse/keyboard interactions. This is not a complete cross-browser or WCAG audit.

The latest build attempt did not establish a successful production release. Internal follow-up items, including the nested homepage `<main>` landmark, are recorded in [PROJECT_STATE.md](dev-tools/PROJECT_STATE.md).

## Illustrations and AI transparency

The illustrations and pixelart used on this website have so far been created with generative AI. Kat develops the motifs, characters, and creative direction as part of her own creative world and intends to add more hand-drawn pixelart over time.

A visible disclosure appears in the shared footer, with a fuller explanation on `/about`.

## Developer and project documentation

Built by **Kat**, the developer behind **KATCODED** — an aspiring software engineer who enjoys turning creative ideas into useful, personal software.

[GitHub profile](https://github.com/kattykit1991)

- [Current project state](dev-tools/PROJECT_STATE.md)
- [Requirements and scope decisions](dev-tools/PROJECT_REQUIREMENTS.md)
- [Build guide and historical learning stages](dev-tools/PROJECT_BUILD_GUIDE.md)
- [KAT · DEV TOOLS](dev-tools/DEV_TOOLS_README.md)

The public README is the project introduction. Internal progress and the next development step belong in `dev-tools/PROJECT_STATE.md`; local design references under `references/` are not part of the published repository.
