# Unverceled Next.js

> A Tooling Heavy Next.js 15 starter-kit template deployed to Cloudflare Workers using OpenNext.

## What's included

This template is only a basic "Hello World" page, however all of the tooling that you might ever need is included, such as:

- Changesets
- Github Actions
- Commitlint & Commitizen
- Lefthook pre-commit & commit-msg hooks
- Playwright E2E Tests
- Vitest Unit & Browser Component Tests
- Prettier, ESLint, Cspell & MarkdownLint
- Tailwind V4 & Shadcn UI
- Total TypeScript TS Reset
- Strict TypeScript Configuration
- Arktype & T3 Env

## Getting Started

1. Use this template to create a new repository
2. Clone the template to your machine
3. Run `pnpm install`
4. Edit the `wrangler.jsonc` file and put your own KV namespace id and D1 Database name & id.
5. To deploy to cloudflare, run `pnpm wrangler login` first then you can just run `pnpm run deploy`

It's that simple!

Reference the OpenNext Cloudflare documentation at [https://opennext.js.org/cloudflare](https://opennext.js.org/cloudflare) to extend upon the basic setup in this template.

## Notes

- You can use [Cloudflare Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/) to auto deploy your application when a new commit is made to the main branch.
- You can use Cloudflare Images as your custom loader for image optimisations [Documentation](https://opennext.js.org/cloudflare/howtos/image)
