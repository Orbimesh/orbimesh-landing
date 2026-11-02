# OneMynd landing page

One page, Next.js, no database, no JavaScript on the page itself. Rewritten in November 2026
around the OneMynd positioning: your systems keep the record, your people keep the day, and the
department agents take up the day. The palette is the brief deck's; the words are the page's own.

- `app/page.tsx` — the page, section by section: the hero with the card, the inbox, a day, the
  refusals, the three stages of memory, the five desks, the close. The mock card and the example
  lines are illustrations, not a customer's data.
- `app/global.css` — the palette as variables, the layout, the mock card's styles, the ticker
- `app/layout.tsx` — the typefaces (Source Serif 4 for headings, IBM Plex Sans for text, loaded
  from Google Fonts at view time so a build fetches nothing) and the metadata

The contact address and the mail subject are the two constants at the top of `app/page.tsx`.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # the production build
```
