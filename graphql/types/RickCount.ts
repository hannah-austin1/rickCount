import { builder } from "../builder";

builder.prismaObject("RickCount", {
  fields: (t) => ({
    id: t.exposeID("id"),
    user: t.relation("user"),
    userId: t.exposeInt("userId"),
  }),
});

builder.queryField("rickCount", (t) =>
  // 2.
  t.prismaField({
    // 3.
    type: ["RickCount"],
    // 4.
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.rickCount.findMany({ ...query }),
  })
);
