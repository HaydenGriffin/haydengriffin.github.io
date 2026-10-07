---
name: Hayden Griffin
description: Hayden's work surveyed as an Ordnance Survey Explorer sheet.
colors:
  paper: "#f6f7f2"
  paper-deep: "#eceee6"
  ink: "#1b1d1a"
  ink-soft: "#464943"
  cover: "#e5601a"
  cover-ink: "#1b1d1a"
  grid: "#2a8fd0"
  grid-ink: "#17679f"
  water: "#cfe6f3"
  water-line: "#2a8fd0"
  water-ink: "#17679f"
  contour: "#d19463"
  contour-index: "#b4692f"
  contour-ink: "#8a4a1c"
  wood: "#d4e8bf"
  wood-line: "#77ab5c"
  wood-ink: "#33601f"
  road-b: "#f2a73b"
  road-minor: "#ffe36b"
  path: "#27803a"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Fira Sans Extra Condensed, Fira Sans, sans-serif"
    fontSize: "clamp(3.5rem, 2rem + 5.2vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.86
    letterSpacing: "-0.01em"
  headline-settlement:
    fontFamily: "Fira Sans Extra Condensed, Fira Sans, sans-serif"
    fontSize: "clamp(2.25rem, 1.6rem + 2.4vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "0.02em"
  headline-area:
    fontFamily: "Fira Sans, Segoe UI, sans-serif"
    fontSize: "clamp(2.25rem, 1.6rem + 2.4vw, 3.5rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "0.24em"
  title-settlement:
    fontFamily: "Fira Sans Extra Condensed, Fira Sans, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1.05
  title-water:
    fontFamily: "Fira Sans, Segoe UI, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 500
    lineHeight: 1.05
  title-antiquity:
    fontFamily: "UnifrakturMaguntia, Fira Sans, serif"
    fontSize: "1.75rem"
    fontWeight: 400
    lineHeight: 1.05
  lede:
    fontFamily: "Fira Sans, Segoe UI, sans-serif"
    fontSize: "1.3125rem"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Fira Sans, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "tnum"
  label-ref:
    fontFamily: "Fira Sans, Segoe UI, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    letterSpacing: "0.04em"
    fontFeature: "tnum"
rounded:
  none: "0px"
  waypoint: "50%"
spacing:
  space-1: "0.375rem"
  space-2: "0.75rem"
  space-3: "1.25rem"
  space-4: "2rem"
  space-5: "3.5rem"
  space-6: "6rem"
  gutter: "clamp(1.25rem, 4vw, 3.5rem)"
  square: "8rem"
components:
  email-address:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: "0.6rem 0.9rem"
  email-copy:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.6rem 0.9rem"
  email-copy-copied:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
  sheet-badge:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.25rem 0.75rem 0.75rem"
  sheet-badge-square:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.title-settlement}"
    padding: "0.1rem 0.45rem"
  grid-reference:
    textColor: "{colors.grid-ink}"
    typography: "{typography.label-ref}"
  route-waypoint:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.waypoint}"
    size: "1.2rem"
---

# Design System: Hayden Griffin

## Overview

**Creative North Star: "The Explorer Sheet"**

The site is a folded Ordnance Survey Explorer map of one person's work. White map paper carries a blue kilometre grid; a generated overview sheet (invented terrain, seeded at build time, not survey data) plots every product, employer and home build as a named feature with a six-figure grid reference. The orange cover panel is the fold-out cover of the sheet. Everything after it is the map's other side: inset enlargements, a career route drawn as a public footpath, the woodland of home builds, a key, and a gazetteer.

The map is the navigation, not decoration. Features on the sheet link to their entries; grid references in entries and the gazetteer point back to squares on the sheet; the key explains the lettering classes used everywhere. Type does the cartographic work: the class a name is lettered in tells you what kind of thing it is before you read it. Colour fills whole regions (the orange cover band, the green woodland band, the orange contact panel) rather than scattering accents. Corners are square, depth is printed rather than lit, and the only motion is the sheet registering its colour plates on arrival.

**Key Characteristics:**
- Map paper with a blue 8rem grid behind all body content.
- Names lettered in four OS feature classes: settlement, water, area, antiquity.
- Grid references in tabular figures, blue, letterspaced.
- Links are rights of way: green dashed underlines.
- Inset maps reuse the overview's artwork at a larger scale.
- Colour owns regions: cover orange, woodland green, water blue.
- Square corners, keylines and double neatlines; no shadows.

## Colors

An OS Explorer printing palette: off-white paper and near-black keyline, with each colour plate (blue grid and water, brown contours, green woodland and paths, orange-yellow roads) keeping its cartographic job, and Explorer orange reserved for the cover and contact regions.

### Primary
- **Explorer Cover Orange** (cover): fills the cover panel, the split cover blocks below 1100px, and the contact panel. Also the focus outline, the caret, a targeted entry's name, and the hover/focus fill of a feature label on the sheet. Never a text colour on paper.

### Secondary
- **Kilometre Grid Blue** (grid): the sheet's grid lines (55% opacity on the map, 16% mixed into the page-background grid). Shares its value with water-line.
- **Grid Figure Blue** (grid-ink): grid margin figures, the "HG" margin square, every printed grid reference, the readout, and the crosshair. Shares its value with water-ink.
- **Right-of-Way Green** (path): link underlines, the dashed career footpath, route waypoints and the route timeline rule.

### Tertiary
- **Woodland Fill** (wood) with **Woodland Edge** (wood-line) and **Woodland Lettering** (wood-ink): woodland polygons and trees on the sheet, and the full-bleed band behind The House section, whose wavy edges are drawn in the same fill. Area names inside the band letter in wood-ink.
- **Sea Tint** (water), **Water Line** (water-line), **Water Lettering** (water-ink): sea, coast and rivers on the sheet; water-class names (payments features) in italic water-ink; text selection background.
- **Contour Brown** (contour), **Index Contour** (contour-index), **Contour Figures** (contour-ink): contour lines, every fifth line heavier, contour height labels; contour-index also draws the short-dash bullet in route highlights, the contour sample in the key and the scrollbar thumb; contour-ink sets the "Built with" stack line in entries.
- **B-Road Orange** (road-b) and **Minor Road Yellow** (road-minor): road fills on the sheet only, always over an ink casing.

### Neutral
- **Map Paper** (paper): page background, sheet land, inset backgrounds, the paper halo stroked behind map lettering.
- **Paper Fold** (paper-deep): scrollbar track and the hover fill of the copy button on paper.
- **Keyline Ink** (ink): text, neatlines, road casings, buildings, rule lines, the email block, the badge square.
- **Soft Ink** (ink-soft): secondary text (entry backs, meta lines, captions, gazetteer kinds, readout name).
- **White** (white): the cover name, cover place names, contact title, email address text and the sheet badge ground.

Inside the woodland band, a few secondary text colours are darkened by hand for legibility on wood (#2d3a26 for entry backs and captions, #3a4733 for meta, #135d91 for grid refs, #6c3a14 for the stack line), and the route title uses a darker path green (#1f6a2c). These are local legibility adjustments, not tokens.

### Named Rules
**The Colour Owns Regions Rule.** A colour that appears as a background fills a whole region edge to edge (cover, woodland band, contact). It is never a small badge, pill or highlight sprinkled through paper content.

**The Plate Duty Rule.** Each map colour keeps its cartographic meaning: blue is grid and water, brown is relief, green is woodland and rights of way, orange-yellow is roads. Don't borrow a plate colour for an unrelated UI role.

**The Large-White-On-Orange Rule.** White on cover orange measures about 3.5:1, so it is allowed only for large text: the cover name and contact title (display, 800) and the cover place names (1.3125rem, 700). All regular-size text on orange is ink (about 4.9:1).

## Typography

**Display Font:** Fira Sans Extra Condensed (with Fira Sans, sans-serif)
**Body Font:** Fira Sans (with Segoe UI, sans-serif)
**Antiquity Font:** UnifrakturMaguntia (with Fira Sans, serif)

**Character:** OS lettering, not a type pairing for its own sake. The condensed bold reads as town names and cover type; the regular Fira carries text, italics and spaced capitals; the blackletter exists only to mark antiquities. Tabular figures are on for the whole body.

### Hierarchy
- **Display** (800, clamp(3.5rem, 2rem + 5.2vw, 6rem), 0.86): the cover name and the contact title, white on orange. Below 1100px the cover name sizes to clamp(3.5rem, 21vw, 6rem).
- **Headline** (step-3, clamp(2.25rem, 1.6rem + 2.4vw, 3.5rem), 1.05): section names, lettered in the class of what they name: PayMidas as a settlement (800, uppercase, 0.02em), The House as an area (500, uppercase, 0.24em), The route in condensed 800.
- **Title** (step-2, 1.75rem, 1.05): entry names in their feature class; the cover role, Key and Gazetteer headings in condensed 700/800.
- **Lede** (400, 1.3125rem, 1.4-1.45, max 34-54ch): section ledes and entry summaries; the "front" of a feature.
- **Body** (400, 1.0625rem, 1.55, max 62ch): entry backs, route highlights, key definitions; the "back" of a feature, in soft ink.
- **Label** (600, 0.875rem, 0.04em, tabular): grid references, nav, key, captions, meta lines.

### The four feature classes
- **Settlement**: Fira Sans Extra Condensed 700 (800 uppercase at section size). Products and employers.
- **Water**: Fira Sans italic 500 in water-ink. Payments features.
- **Area**: Fira Sans 500, uppercase, letterspaced 0.2em (0.24em at section size, 0.28em on the sheet, 0.3em on the sea). Areas of work; the size steps down to 1.3125rem at entry size.
- **Antiquity**: UnifrakturMaguntia 400. Work before 2020, and nothing else.

Each class is lettered the same way on the sheet, in entry names, in the map key, in the Key section and in the gazetteer, and each has a matching 24px SVG symbol.

### Named Rules
**The Lettering Class Rule.** A feature's name is always set in its class, wherever it appears. Choosing a style for a new name means choosing what kind of feature it is.

**The Antiquity Only Rule.** Blackletter is used for pre-2020 work and nowhere else: not for headings, flourishes or emphasis.

**The Tabular Reference Rule.** Grid references are "HG" plus two three-figure groups, in tabular figures, grid-ink, 600, 0.04em tracking.

## Layout

**The sheet.** Body content sits on map paper ruled with an 8rem (square) blue grid at 16% strength, centred on the page. Sections are capped at 82rem with gutter padding (clamp(1.25rem, 4vw, 3.5rem)) and 6rem block padding (4rem below 560px). Section heads use a 5fr / 7fr grid (name, then lede, aligned to baseline end), collapsing to one column at 900px. Nothing is centred: composition is off-axis like terrain.

**The spread (first viewport).** At 1101px and wider the header is a two-column spread, minmax(21rem, 33fr) cover and 67fr map panel, at least 100svh tall. The cover stacks name, role, intro and place names at the top, and email, profile links and the sheet badge at the foot. The map panel stacks a title strip with section nav (2px ink rule beneath), the overview map with its readout, and a one-line map key.

**Below 1100px the cover splits around the map.** The cover dissolves (display: contents) into two orange blocks: name, role and intro first, then the map panel, then the email, links and badge. The sheet shows on the first phone screen.

**Below 760px the map leads its panel.** The map runs full-bleed with no panel padding; the map key follows it, then the title strip and nav (its rule moves to the top). Cover place names are hidden. The overview becomes a sideways scroller: the SVG is fixed at 820px wide inside a horizontally scrolling, keyboard-focusable frame, opened at 72% of its scroll width so PayMidas is in view.

**Section patterns.** PayMidas: a sticky inset map (5fr) beside the entries (7fr), static and stacked below 900px. The House: a 12-column grid with entries alternating left and right halves, even entries dropped 6rem, single column below 900px. The route: years (9rem, right-aligned), a waypoint column (1.2rem) and the body (max 46rem) along a dashed green line; below 760px the years move above the body and the line moves to the left edge. Key: 7fr / 5fr, one column below 1000px. Gazetteer: up to three 18rem columns.

**Spacing rhythm.** A six-step scale (space-1 to space-6) from 0.375rem to 6rem. Large gaps (space-5, space-6) separate features and sections; space-1 to space-3 work inside an entry.

## Elevation & Depth

Flat and printed. There are no box-shadows anywhere. Depth comes from cartographic means: colour plates layered in print order, contour lines, ink casings around road fills, paper-coloured halos stroked behind lettering (paint-order: stroke, 3.5px, switching to wood or sea colour over those fills), and double frames (a 2px neatline with a thin outer line).

### Named Rules
**The Printed Depth Rule.** Nothing floats. Separation is a keyline, a rule, a fill or a halo, never a shadow or blur.

**The Registration Rule.** On load (with JS and no reduced-motion preference) the overview prints itself plate by plate. Each plate fades in from a small offset, as if slightly out of register, and settles over 1100ms on ease-out (cubic-bezier(0.16, 1, 0.3, 1)). Print order: margin (0ms), grid (80ms), water (260ms), contours (440ms), fills (620ms), keyline (800ms), lettering (1000ms). New sheet artwork joins one of these plates; it does not get its own entrance animation.

## Shapes

Square corners throughout (0px): the email block, copy button, sheet badge, inset frames and region panels. The only curves are cartographic: circular waypoints (50%), terrain, coastlines, contours and the wavy top and bottom edges of the woodland band. The focus outline takes a 2px radius. Frames are map frames: a 2px ink border with a 0.6px outline 5px outside it on insets, a 1.6px neatline with an outer line on the overview. Rules are ink: 2px under title strips and the Key and Gazetteer headings, 1-1.5px at 18-30% ink for row dividers and entry backs, a dotted leader in gazetteer rows.

## Components

### Overview Map (signature)
An SVG sheet 20 by 13 grid squares (50 units each) with numbered eastings (40-60) and northings (80-93) in every margin and an "HG" square letter in the corner. Plates: water (sea, land, coast, rivers), fills (woodland, trees), contours (with labels on index lines), keyline (roads in ink casing, bridge, buildings, the dashed career footpath, waypoints, trig point), grid, lettering, margin. Features are links to their entries; hover or focus turns the label cover orange and shows a focus ring on the hit circle. Moving the pointer shows a dotted grid-ink crosshair and a live readout under the map: the feature name and its reference, or "Grid reference" and the computed six-figure reference. At rest the readout shows PayMidas.

### Inset Map
An enlarged window onto the overview: a second SVG that references the sheet artwork by `<use href="#sheet-art">` with a narrower viewBox, so nothing is drawn twice. Framed in a 2px ink border plus an outline 5px outside, on paper, with a small soft-ink caption that begins "Inset:". Used beside the PayMidas entries (sticky) and above the House entries.

### Entry
A feature with a front and a back. Front: a 24px class symbol beside the name in its lettering class, a meta line (grid reference, years, role) indented to the name, and a summary in lede size (max 34ch). Back: details in soft ink (max 62ch) above a hairline, the "Built with" stack line in contour-ink, and links. When targeted from the map, the entry name turns cover orange.

### Rights of Way (links)
- **Default:** inherit colour, 2px dashed underline in path green, offset 0.22em.
- **Hover:** the dashes join into a solid line (160ms ease-out).
- **On orange regions:** cover and contact links switch to a solid ink underline (1.5px, 3px on hover), because green dashes do not read on orange.
- **Focus (all interactive elements):** 3px cover-orange outline, 3px offset.

### Email and Copy
A square ink block with the address in white 600, joined to a 2px ink-bordered Copy button (min 4.75rem). The button stays hidden until script confirms clipboard access. Hover: 30% white over orange on the cover, paper-deep on paper. Once copied, it fills ink with white text reading "Copied" for 2.2s.

### Sheet Badge
On the cover foot: a white rectangle holding an ink "HG" square in condensed 800 type beside the revision date and location in small type, after the panel on a real OS sheet.

### Navigation
The map panel's title strip: "Selected work" in condensed 700 at left, section links at right in 600, 0.875rem, as rights of way. Below 760px the strip follows the map.

### Map Key and Key Section
A one-line key under the map pairs each class symbol with a sample lettered in that class, plus the career route symbol. The Key section repeats this as definition rows (13rem term column), with a "Tools in regular use" list beside it.

### Route
The career as a public footpath: a 2.5px dashed green line joins circular 1.2rem waypoints (2.5px green ring on paper; the current stop is filled green). Each stop carries years, the organisation lettered in its class, title and place, a grid reference, and highlights marked with short contour-index dashes.

### Gazetteer
An alphabetical index in up to three columns: place name as a right of way (water and antiquity names keep their lettering), an italic soft-ink kind, a dotted leader, and the grid reference.

## Do's and Don'ts

### Do:
- **Do** letter every feature name in its class (settlement, water, area, antiquity) everywhere it appears, and pair it with its class symbol.
- **Do** give every plotted feature a grid reference in tabular grid-ink type, and make sheet, entry and gazetteer point at each other.
- **Do** fill whole regions with colour (cover orange, woodland band) edge to edge; keep paper content on map paper with the 8rem grid.
- **Do** underline links with green dashes (2px, 0.22em offset) that go solid on hover; use a solid ink underline on orange.
- **Do** keep white text on cover orange to large sizes only (display or 1.3125rem bold and up); use ink for everything else on orange.
- **Do** reuse the overview artwork for any new inset via `<use href="#sheet-art">` and a viewBox, framed with the 2px border and offset outline.
- **Do** add new sheet artwork to an existing plate so it prints in order; honour prefers-reduced-motion.

### Don't:
- **Don't** use blackletter for anything but pre-2020 work.
- **Don't** add box-shadows, blurs, rounded cards or floating panels; depth is keylines, fills and halos.
- **Don't** use orange as a small accent on paper (badges, pills, highlighted words); it appears on paper only as focus and hover/target state.
- **Don't** give a map plate colour an unrelated UI job.
- **Don't** set regular-size white text on cover orange.
- **Don't** draw a second copy of the map for an inset or a decorative backdrop.
