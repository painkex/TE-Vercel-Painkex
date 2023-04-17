import { clerkClient } from "@clerk/nextjs/server";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const postsRouter = createTRPCRouter({

  getAll: protectedProcedure.query( ({ ctx }) => {
    if (!ctx?.userId) throw new TRPCError({code:"UNAUTHORIZED", message:"aaa"})
    return ctx.prisma.post.findMany({
      where:{
        authorId:ctx.userId
      },
       orderBy: [{ createdAt: "desc"}]
    });
    
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),

  create: protectedProcedure
  .input(
    z.object({
      content: z.string().max(100),
  })
)
  .mutation(async ({ ctx, input }) => {
    const authorId = ctx.userId;

    const post = await ctx.prisma.post.create({
      data: {
        authorId,
        content: input.content,
      },
    });

    return post;
  }),
});
