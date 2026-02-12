# Production Backend Blueprint (NestJS)

An opinionated, minimal **production-style** NestJS blueprint focused on architecture and security patterns — not business logic.

Includes:
- Modular NestJS structure
- Env validation (Zod)
- JWT auth skeleton (access token + refresh placeholder)
- RBAC (permission decorator + guard)
- Global exception filter
- Request logging (lightweight)
- Rate limiting (Throttler)
- Cron scheduler example
- Dockerfile + docker-compose

> Notes:
> - No database layer included (intentionally).
> - Replace placeholders before using in production.

---

## Quick start

```bash
npm i
npm run start:dev
```

Health:
- `GET /health`

Demo protected route:
- `GET /auth/me` (requires Bearer token)

---

## Env

Copy `.env.example` to `.env`.

---

## Why this repo exists

This is meant to show **production thinking**:
- deterministic module boundaries
- security posture by default
- operational patterns (health, logging, rate limits, scheduler)
- minimal surface area, no framework magic outside Nest conventions
