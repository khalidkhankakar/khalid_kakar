import {  createTRPCRouter } from '../init';
import { blogRouter } from '@/modules/blog/server/procedure';
export const appRouter = createTRPCRouter({
  blog: blogRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;