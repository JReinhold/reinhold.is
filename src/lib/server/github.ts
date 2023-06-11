import { graphql } from "@octokit/graphql";
import * as z from "zod";
import { GITHUB_TOKEN } from "$env/static/private";

if (!GITHUB_TOKEN) {
  throw new Error("GITHUB_TOKEN is a required environment variable");
}

const gql = graphql.defaults({
  headers: {
    authorization: `token ${GITHUB_TOKEN}`,
  },
});

const discussionSchema = z.object({
  body: z.string(),
  title: z.string(),
  number: z.number(),
});
export type Discussion = z.infer<typeof discussionSchema>;

const discussionsDataSchema = z.object({
  repository: z.object({
    discussions: z.object({
      edges: z.array(
        z.object({
          node: discussionSchema,
        }),
      ),
    }),
  }),
});

export const getDiscussions = async (): Promise<Discussion[]> => {
  const data = await gql(
    `query posts($repo: String!, $owner: String!) {
        repository(name: $repo, owner: $owner) {
          discussions(first: 10, categoryId: "DIC_kwDOBeVjN84CWnMH") {
            edges {
              node {
                body
                title
                number
              }
            }
          }
        }
      }`,
    { owner: "jreinhold", repo: "reinhold.is" },
  );
  const discussionsData = discussionsDataSchema.parse(data);
  return discussionsData.repository.discussions.edges.map((edge) => edge.node);
};
