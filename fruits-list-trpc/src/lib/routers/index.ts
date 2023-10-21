import { procedure, router } from './trpc';
import { z } from 'zod';
type Fruit = { id: number; name: string };
const db: Fruit[] = [];

export const appRouter = router({
  fruits: router({
    get: procedure.query(async () => {
      return db;
    }),
    add: procedure
      .input(
        z.object({
          name: z.string().nonempty(),
          description: z.string().optional(),
        })
      )
      .mutation(async (opts) => {
        db.push({ id: db.length, name: opts.input.name });
        return db;
      }),
  }),
});

export type AppRouter = typeof appRouter;
