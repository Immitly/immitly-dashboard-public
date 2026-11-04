# Security Policy

## Scope

This repository holds the Immitly public dashboard. It contains only
figures that are already public on immitly.com, and no production
credentials, no user data, and no client data.

## Rules

- Never commit secrets: no API keys, tokens, passwords, private keys, or session cookies.
- Never commit personal data: no passport numbers, UCI numbers, application numbers, or dates of birth.
- Data changes go through `src/data/immitly.ts` only, with a source date in the commit message.
- Dependencies stay lean. New dependencies need a stated reason in the pull request.

## Reporting a vulnerability

Report suspected vulnerabilities privately to the repository owner through
the organization owner account. Do not open a public issue for a security
problem, and do not include any secret value in the report.

## Supported version

Only the latest commit on `main` is supported.
