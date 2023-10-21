import { inferAsyncReturnType } from '@trpc/server';
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { NextApiRequest, NextApiResponse } from 'next';

export const createContext = async (options?: CreateNextContextOptions) => {
  const req = options?.req as NextApiRequest;
  const res = options?.res as NextApiResponse;

  // if (session?.accessToken) {
  //   return {
  //     session: {
  //       ...session,
  //       uuid: await getUUID(session),
  //     },
  //   };
  // }

  return { session: undefined };
};

export type Context = inferAsyncReturnType<typeof createContext>;
