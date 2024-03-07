# TMS Core

## Getting Started

First, run the development server from project root:

```bash
pnpm dev:web
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔒 Authentication

Authentication is provided by Firbase. In order to utilize both client and server rendering strategies, we use the firebase client package as well as store an http authentication JWT session which we can use for server rendered pages. Please utilize one of the following strategies to retrieve authentication:

### Client side

For client side authentication, you should utilize the `useSession` hook from [`@/(auth)/_hooks`](<./src/app/(auth)/_hooks/use-session.tsx>)

### Server side

For server side authentication, you should utilize the `getSession()` method from [`@/lib/auth/auth.session.ts`](./src/lib/auth/auth.session.ts)
