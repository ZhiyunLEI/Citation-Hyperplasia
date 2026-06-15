# Citation Hyperplasia Performance Build A

This build is a lightweight test version based on the Interaction Confirmation Build. It preserves the current composition, typography, lesion placement, and image assets, but reduces background Canvas load so touch / hold / release can respond more promptly.

Main page:

```text
index.html
```

Debug mode:

```text
index.html?debug=1
```

What changed:

- Idle Canvas refresh is about 15fps.
- Interaction Canvas refresh is about 20fps.
- Background particle populations are reduced by roughly 30-40%.
- Dense nucleus/residue text particles are drawn in lighter batches.
- During touch/hold/release, slow image-layer breathing is temporarily paused so interaction feedback gets priority.
- During scroll, non-essential Canvas layers are reduced.
- Interaction bursts are capped so long-press does not accumulate too many live fragments.
- Animation language revised: black particles move much more slowly and behave like attached sediment.
- Breathing emphasis moved toward cavity-edge darkening, membrane wetness, and subtle lesion-boundary swelling.
- Micro twitch and citation drift are slower and more directional, so the lesion reads less like floating dust.
- A unified 26-second metabolic cycle now coordinates slow breathing, digestion, membrane wetness, and References-area waste expulsion.
- Five existing lesion cavities are treated as primary digestive openings, so held citation fragments are absorbed into local holes rather than drifting generically toward the center.
- Debug mode now reports metabolism values: breath, digest, and expel.
- Image-layer optimization pass:
  - Kept the three primary lesion images at full 2048px: `lesion_core_main`, `lesion_membrane_overlay`, and `lesion_tendrils`.
  - Reduced secondary support layers only: `lesion_depth_shadow` and `lesion_edge_debris` to 1536px, `lesion_micro_citation_dust` to 1280px.
  - PNG source files remain unchanged; the live page still loads WebP assets with transparency.
- Canvas responsiveness pass:
  - Canvas rendering is explicitly capped at 1x DPR, so iPad Retina screens do not multiply the live drawing cost.
  - Peripheral live particles were reduced while preserving the lesion core, membrane, tendrils, digestive cavities, and the main composition.
  - Idle drawing now uses lighter batching for dense residue/nucleus layers; interaction drawing still prioritizes touch/hold/release feedback.
  - Interaction burst history is capped more tightly to prevent long-press accumulation from slowing the page.
- Animation-start refinement:
  - Primary lesion image layers now start at staggered negative animation offsets, so the mother body and tendrils appear already alive instead of waiting several seconds to move.
  - The metabolic cycle starts during an inhale phase.
  - Black Canvas particles are slowed during the first few seconds and synchronized more strongly with the mother body's breath before returning to normal local motion.
- Interaction system:
  - Short-touch feedback now uses a separate lightweight `interactionCanvas` layer so the first visible response does not wait for the heavier main lesion Canvas cycle.
  - Short touch produces only a very local darkening; nearby black citation particles lightly recoil outward so the interaction supports the lesion field instead of reading as UI feedback.
  - Long press now triggers after about 520ms and reads as local consumption: subtler cavity darkening, membrane tension, and absorbed citation fragments.
  - Release after a long press triggers bibliographic waste expulsion toward the References area.
  - Debug mode exposes touch stress, consuming, releasing states, and the live `instant` particle count so interaction can be distinguished from autonomous animation.
- Visual refinement pass:
  - Strengthened near-core prose distortion so adjacent article text feels more pulled into the lesion without changing page layout.
  - Added finer References mildew rhythm using small citation-thread fragments, spores, dots, and clots rather than graphic lines.
  - Increased lower/left lesion edge debris and made bibliographic waste drift more directionally downward into References.
  - Local polish: thinned the top of the upper lesion spray, reduced large References clots, and gave the three primary digestive holes clearer slow breathing.
  - Final visual polish: added faint paper-contact scars near the lesion edge, preserved the References heading and first entries as readable anchors, offset digestive-hole breathing rhythms, and replaced some isolated large black characters with smaller citation fragments.
  - Swallowing refinement: added subtle upper-right absorption streams into the digestive holes and varied black particle morphology into dust, spore, clot, and short-thread forms so mildew is less uniformly sharp.
  - Upper-lesion restraint pass: consolidated some upper black particles into larger fungal clots, slowed initial particle motion to follow the mother-body breathing, and removed semi-transparent DOI-style text fragments from the References mildew overlay.
  - Exhibition polish pass:
    - Extended the main metabolic cycle from 26s to 34s so the mother-body breathes with slower pressure and less mechanical repetition.
    - Lengthened the CSS image-layer cycles for core, membrane, tendrils, debris, dust, and depth-shadow so the live organism reads as one slow pathological system.
    - Reduced far-field particle twitch, lowered peripheral residue opacity, and slowed startup motion so black citation particles no longer dominate the first seconds.
    - Preserved directional absorption and bibliographic expulsion, but made the motion more solemn and less random.
    - Kept the current layout, lesion scale, assets, and composition intact.
  - Spray and cavity polish:
    - Reduced the middle/upper black spray density and opacity so it reads less like a black brushstroke and more like pathological migration.
    - Preserved more academic-language fragments inside the spray: DOI, et al., Q1, SSCI, years, brackets, quotation marks, and page-like residue.
    - Added localized wet-shadow and rim breathing to three key digestive cavities without sharpening the whole lesion.
  - Upper citation plume refinement:
    - Reduced extreme density peaks in the upper black citation field without flattening the whole particle ecology.
    - Added a medium-density transition bridge layer between dense black burst areas and lighter outer drift.
    - Added smoothed plume-density interpolation so upper particle activity evolves gradually rather than switching abruptly.
  - Already-alive opening pass:
    - Starts the metabolic cycle in a mid-breath phase so the mother-body appears already alive on first view.
    - Adds staggered negative delays to local membrane wetness pulses.
    - Gives key digestive cavities a very subtle opening-life darkening while keeping black citation particles restrained during the first seconds.
  - Metabolic narrative pass:
    - Added a distinct `ingest` phase before digestion so upper-right citation residue is visibly pulled toward the lesion before the cavities darken.
    - Tied digestive cavity darkening more strongly to the `digest` phase.
    - Tied References-area bibliographic waste movement and opacity more clearly to the `expel` phase.
  - Local pathological interaction pass:
    - Reduced broad touch darkening so short touch reads as a small local lesion response rather than UI feedback.
    - Made cavity darkening respond only near the touch point.
    - Reduced immediate recoil particle count, opacity, size, and distance while preserving subtle local escape.
    - Kept long press as localized absorption with smaller, darker citation fragments.
  - Secondary organ reflex pass:
    - Long press now produces a very subtle delayed mother-body contraction through a low-amplitude `organReflex` variable.
    - Short touch remains local; the mother-body does not visibly bounce or behave like a button.
    - Release after long press leaves a small slow after-pressure before fading back.
  - Upper plume distance-gradient pass:
    - Preserved near-lesion citation density and blackness while making far/top particles 10-20% lighter.
    - Reduced the farthest local black density peaks to avoid abrupt block-like clumps.
    - Slightly increased the medium-density transition bridge while keeping it semi-transparent and subordinate.
  - Code cleanup / smoothness pass:
    - Removed the unused preview automation branch from the live build.
    - Removed a dead Reference mildew-generation branch that never executed.
    - Cached infected DOM span counts after layout preparation instead of scanning the page every animation frame.
  - References particle downgrade:
    - Reduced active Canvas bibliographic waste particles from 96 to 34.
    - Lowered their motion update cadence with stepped timing so References remains visually present but costs less during animation and interaction.
  - View culling and interaction-priority pass:
    - Added buffered viewport culling for Canvas particles, tendrils, webs, mutation sheets, edge debris, absorbed fragments, and bibliographic waste.
    - Off-screen Canvas elements are skipped while a generous viewport buffer preserves visual continuity during scrolling.
    - Added a short interaction-priority window after touch, hold, and release so local feedback draws ahead of non-essential background layers.
  - References residue cleanup:
    - Replaced circular References mildew spores with small citation-character dust.
    - Removed the lower-right residue `o` spot rendering that could read as black circular shadows.
  - Latent lesion imprint interaction:
    - Replaced short-click corrosion feedback with a single WebP lesion imprint fading over 8 seconds.
    - Only one interactive object can appear at a time; additional clicks are ignored until the current object has disappeared.
    - Rebuilt the imprint animation as a dual-system response: the outer object handles the smooth life cycle, while the inner image uses slow sine-based breathing, micro-rotation, and wetness fluctuation.
    - Removed left-right drift and opacity flashing so the response feels like a local biological imprint rather than a UI effect.
    - Added event-driven semantic seepage: tiny citation fragments emerge in irregular windows during the 8-second life cycle instead of appearing as a fixed timeline burst.
    - Added a very soft near-body wetness response when touched close to the lesion.
    - Removed generated References mildew clots so the visible black circular shadow forms no longer appear.

What did not change:

- Page layout
- Typography
- Lesion image assets
- Lesion placement and scale
- Overall composition

Test:

1. Open `index.html?debug=1`.
2. Tap the lesion mother-body.
3. Hold for 1.5-2 seconds.
4. Release.
5. Check whether `pointerdown`, `longPress`, `hold bursts`, and `release waste` update promptly in the debug panel.

If this version feels more responsive, the next optimization step should be freezing most DOM character animations while preserving their visual state.
