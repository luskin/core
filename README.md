# Core

- [/apps](#apps)
  - [/backend](#backend)
  - [/frontend](#frontend)
- [/packages](#packages)
  - [/configs](#configs)

# Apps

## Backend

`Backend` is a modular monolithic NodeJS application on the NestJS framework. It is comprised of two applications, `api` and `worker`...

> TODO - WRITE EXPLANATION HERE OF WHY WE USE MODULAR MONOLITHIC ARCHITECTURE

#### Setup

After cloning the repository, follow the following few steps to be up and running locally.

1. In one terminal, run `pnpm docker`. Wait for docker to finish booting, and keep it live.
2. Once docker is up, in another terminal, run `pnpm db:migrate`. This will migrate your local Postgres database.
3. Begin developing in any of the applications you wish. The root [package.json](./package.json) will contain all the dev commands you need. For example, if you'd like to develop on the `api`, simply run `pnpm dev:api` in the root of the monorepo and you should be up-and-running.

### Modules

> TODO - Explanation of modules

### Libs

> TODO - Explanation of libs

## Frontend

> TODO - Write docs for Frontend

# Packages

Shared packages

## Configs

Shared configurations for typescript, tailwind, eslint... etc.

## Utils

> TODO - Write explanation of why we _only_ use our own internal utils for any utility-like function.

Shared utilities.
