# Unverceled Next.js

> A Tooling Heavy Next.js 15 starter-kit template deployed to AWS using SST.

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

## Requirements

- Install the `aws` cli:
  - Using homebrew `brew install awscli`
  - Or check the [Documentation](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- Run `aws configure` to authenticate the cli to your AWS account, you will need:
  - AWS Access Key ID
  - AWS Secret Access Key
  - [Documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-authentication.html)

## Getting Started

1. Use this template to create a new repository
2. Clone the template to your machine
3. Run `pnpm install`
4. Run `pnpm sst dev` to start dev
5. Run `pnpm sst deploy --stage production` to deploy

It's that simple!

Reference the SST Next.js documentation at [https://sst.dev/docs/start/aws/nextjs/](https://sst.dev/docs/start/aws/nextjs/) to extend upon the basic setup in this template.

## Notes

- You don't need environment variables with SST, everything is accessed through the `Resource` [Documentation](https://sst.dev/docs/environment-variables/)
- To inject the links into your tests for example run the commands with `pnpm sst shell -- <your-command>`, this is already taken care of when it comes to playwright, you can just run `pnpm test:e2e` and it will run `pnpm sst shell -- playwright test`.
- To remove everything from your AWS account just run `pnpm sst remove`
