---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

## Scope

Home page of haydengriffin.github.io (single page). Visitor mode: Experience. Audience: peers, founders, partners and recruiters arriving from GitHub/LinkedIn; they should leave knowing he is CTO at PayMidas, what he has built there and before, and that he builds his own house platform, with email one click away.

## Direction contract

THESIS: Hayden's work surveyed as an Ordnance Survey Explorer sheet. Every product, role and home build is a plotted feature with a grid reference, a typographic class and an entry. Refuses the category default of a dark two-column list, a typed hero and skill badges.

OWN-WORLD: White map paper (#F6F7F2) with a blue 1 km grid and numbered margins, brown contour lines generated at build time from seeded terrain (invented geography, not survey data), blue water, green woodland fills and an Explorer-orange cover panel. Typography follows OS feature classes: Fira Sans Extra Condensed for settlements and the cover, Fira Sans italic in blue for water features, letterspaced caps for areas, and a blackletter used only for "antiquities" (pre-2020 work). Grid references are set in tabular figures. Links are public rights of way, underlined with green dashes.

STORY: The visitor reads the cover (who he is), scans the overview sheet (what he has built and where it sits), reads the PayMidas entries, follows the career route back to 2015, explores the home builds in the woodland, and then uses the legend and gazetteer to look things up and get in touch.

FIRST VIEWPORT: Left 36%: a full-height orange cover panel with "Hayden Griffin" in huge white condensed type, a one-line role, the places on this sheet, the revision line, and an email copy button plus GitHub and LinkedIn links. Right 64%: the opened overview map, filling the height, with grid margins numbered and features plotted (PayMidas on the coast, the route inland, the House in the woodland), and a live grid-ref readout in its corner.

FORM: Ordnance Survey Explorer sheet, candidate 7 of 7 on the grounded list, seed key f6fafc01. Raises: plate-by-plate registration print on load (from woodblock); a front and a back for every feature (from seed packet); colour owns regions (from indoor sun); off-axis terrain composition (from raku). Signature interaction: the overview map prints itself plate by plate on arrival, and hovering it shows a live six-figure grid reference that links features to their entries.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Open decisions

- Below 1100px the cover splits around the map (name, role and intro; then the map; then contact) so the sheet is visible in the first phone screen. On phones the map leads its panel, and the sheet title and nav follow it.

- PayMidas: the user confirmed the CTO role is dated 2026 – now (full-time after Jumptech).
- No current photo of Hayden exists; the site ships without one.
