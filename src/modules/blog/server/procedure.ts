import { baseProcedure, createTRPCRouter } from "@/trpc/init";

export const blogRouter = createTRPCRouter({
    getAllUsers: baseProcedure.query(async ({ ctx }) => {
        return {name: 'khalid'}
    })

})