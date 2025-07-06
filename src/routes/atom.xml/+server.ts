import { getAllPosts } from "$lib/posts";

export const prerender = true;

export async function GET() {
  const siteUrl = "https://reinhold.is";

  const posts = await getAllPosts()
    .filter((post) => post.metadata.publishedAt)
    .sort((a, b) => {
      return (
        b.metadata.publishedAt!.getTime() - a.metadata.publishedAt!.getTime()
      );
    });

  const atom = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Jeppe Reinhold</title>
  <subtitle>Writings and talks by Jeppe Reinhold</subtitle>
  <icon>
    data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48dGV4dCB5PSIuOWVtIiBmb250LXNpemU9IjkwIj7wn5GLPC90ZXh0Pjwvc3ZnPg==
  </icon>
  <link href="${siteUrl}" rel="alternate" type="text/html"/>
  <link href="${siteUrl}/atom.xml" rel="self" type="application/atom+xml"/>
  <id>${siteUrl}</id>
  <updated>${new Date().toISOString()}</updated>
  <author>
    <name>Jeppe Reinhold</name>
    <email>jeppe@reinhold.is</email>
    <uri>${siteUrl}</uri>
  </author>
  ${posts
    .map(
      (post) => `
  <entry>
    <id>${siteUrl}/writing-about/${post.metadata.slug}</id>
    <title>${escapeXml(post.metadata.title)}</title>
    <summary>${escapeXml(post.metadata.description ?? post.metadata.subtitle)} - ${post.metadata.readingTime.text}</summary>
    <link href="${siteUrl}/writing-about/${post.metadata.slug}" rel="alternate" type="text/html"/>
    ${
      "url" in post
        ? `<link href="${post.url}" rel="via" type="text/html"/>`
        : `<edit>https://github.com/JReinhold/reinhold.is/edit/main/posts/${post.metadata.slug}.svx</edit>`
    }
    <published>${new Date(post.metadata.publishedAt!).toISOString()}</published>
    <updated>${new Date(post.metadata.publishedAt!).toISOString()}</updated>
    <author>
      <name>Jeppe Reinhold</name>
      <email>jeppe@reinhold.is</email>
      <uri>${siteUrl}</uri>
    </author>
  </entry>
    `,
    )
    .join("")}
</feed>`;

  return new Response(atom, {
    headers: {
      "Content-Type": "application/atom+xml",
      "Cache-Control": "max-age=" + 60 * 60 * 12, // 12 hours
    },
  });
}

// Using a more robust escaping approach
function escapeXml(unsafe: string): string {
  return unsafe
    .replaceAll(/&/g, "&amp;")
    .replaceAll(/</g, "&lt;")
    .replaceAll(/>/g, "&gt;")
    .replaceAll(/"/g, "&quot;")
    .replaceAll(/'/g, "&#x27;");
}
