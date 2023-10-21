import { CreateTRPCReact, createTRPCReact } from '@trpc/react-query';

import type { AppRouter } from './routers';

export const trpc: CreateTRPCReact<AppRouter, unknown, null> =
  createTRPCReact<AppRouter>();
