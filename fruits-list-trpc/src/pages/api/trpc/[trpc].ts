import * as trpcNext from '@trpc/server/adapters/next';
import { appRouter } from '@/lib/routers';
// import { createContext } from '@/lib/routers/context';

export default trpcNext.createNextApiHandler({
  router: appRouter,
  // createContext,
});
