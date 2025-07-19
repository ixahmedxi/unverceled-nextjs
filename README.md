
<div align="right">
  <details>
    <summary >🌐 Language</summary>
    <div>
      <div align="center">
        <a href="https://openaitx.github.io/view.html?user=ixahmedxi&project=unverceled-nextjs&lang=en">English</a>
        | <a href="https://openaitx.github.io/view.html?user=ixahmedxi&project=unverceled-nextjs&lang=zh-CN">简体中文</a>
        | <a href="https://openaitx.github.io/view.html?user=ixahmedxi&project=unverceled-nextjs&lang=zh-TW">繁體中文</a>
        | <a href="https://openaitx.github.io/view.html?user=ixahmedxi&project=unverceled-nextjs&lang=ja">日本語</a>
        | <a href="https://openaitx.github.io/view.html?user=ixahmedxi&project=unverceled-nextjs&lang=ko">한국어</a>
        | <a href="https://openaitx.github.io/view.html?user=ixahmedxi&project=unverceled-nextjs&lang=hi">हिन्दी</a>
        | <a href="https://openaitx.github.io/view.html?user=ixahmedxi&project=unverceled-nextjs&lang=th">ไทย</a>
        | <a href="https://openaitx.github.io/view.html?user=ixahmedxi&project=unverceled-nextjs&lang=fr">Français</a>
        | <a href="https://openaitx.github.io/view.html?user=ixahmedxi&project=unverceled-nextjs&lang=de">Deutsch</a>
        | <a href="https://openaitx.github.io/view.html?user=ixahmedxi&project=unverceled-nextjs&lang=es">Español</a>
        | <a href="https://openaitx.github.io/view.html?user=ixahmedxi&project=unverceled-nextjs&lang=it">Italiano</a>
        | <a href="https://openaitx.github.io/view.html?user=ixahmedxi&project=unverceled-nextjs&lang=ru">Русский</a>
        | <a href="https://openaitx.github.io/view.html?user=ixahmedxi&project=unverceled-nextjs&lang=pt">Português</a>
        | <a href="https://openaitx.github.io/view.html?user=ixahmedxi&project=unverceled-nextjs&lang=nl">Nederlands</a>
        | <a href="https://openaitx.github.io/view.html?user=ixahmedxi&project=unverceled-nextjs&lang=pl">Polski</a>
        | <a href="https://openaitx.github.io/view.html?user=ixahmedxi&project=unverceled-nextjs&lang=ar">العربية</a>
        | <a href="https://openaitx.github.io/view.html?user=ixahmedxi&project=unverceled-nextjs&lang=fa">فارسی</a>
        | <a href="https://openaitx.github.io/view.html?user=ixahmedxi&project=unverceled-nextjs&lang=tr">Türkçe</a>
        | <a href="https://openaitx.github.io/view.html?user=ixahmedxi&project=unverceled-nextjs&lang=vi">Tiếng Việt</a>
        | <a href="https://openaitx.github.io/view.html?user=ixahmedxi&project=unverceled-nextjs&lang=id">Bahasa Indonesia</a>
      </div>
    </div>
  </details>
</div>

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
4. Edit the `wrangler.toml` file and put your own KV namespace id and D1 Database name & id.
5. To deploy to cloudflare, run `pnpm wrangler login` first then you can just run `pnpm run deploy`

It's that simple!

Reference the OpenNext Cloudflare documentation at [https://opennext.js.org/cloudflare](https://opennext.js.org/cloudflare) to extend upon the basic setup in this template.

## Notes

- You can use [Cloudflare Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/) to auto deploy your application when a new commit is made to the main branch.
- You can use Cloudflare Images as your custom loader for image optimisations [Documentation](https://opennext.js.org/cloudflare/howtos/image)
