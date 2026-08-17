import { createFileRoute } from "@tanstack/react-router";

// The deliverable is a standalone static site (HTML/CSS/JS) in public/site/.
// This route embeds it so the Lovable preview shows the real website.
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Noor's Collection — Elegant Fashion for Every Woman" },
      {
        name: "description",
        content:
          "Noor's Collection offers elegant women's clothing — lawn, pret, luxury pret, formal, party, bridal and Eid wear designed with grace and modern style.",
      },
      { property: "og:title", content: "Noor's Collection — Elegant Fashion for Every Woman" },
      {
        property: "og:description",
        content: "Discover elegant outfits designed with style, grace and confidence.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/site/index.html"
      title="Noor's Collection"
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", border: 0 }}
    />
  );
}
