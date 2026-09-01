import type { APIRoute } from "astro";

const siteUrl = "https://vinczematyas.github.io";
const publicRoutes = ["/", "/publications/"] as const;

export const prerender = true;

export const GET: APIRoute = () => {
  const urls = publicRoutes
    .map((route) => `  <url><loc>${new URL(route, siteUrl).href}</loc></url>`)
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    },
  );
};
