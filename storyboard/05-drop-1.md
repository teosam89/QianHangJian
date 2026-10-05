## Part 05 · Drop 1 · f1814–f2520

Drop 1 is 16 bars of suona lead, aggressive pipa and a massive 808, with no vocals, in four phrases. **A 分潮** (bars 40–43): she splits the tide in the breach, swats four request darts, locks six bugs like a multi-cursor and cuts them all with one issen. **B 踏浪** (44–47): she climbs the next wave, runs its crest, throws a sword-qi, runs its tube and lands Enter combo #2 on the wall top, which relights the firewall cyan. **C 围城** (48–51): the leftover red becomes a traceback vortex around her; she cuts three tendrils and spins the whirlwind, then the firewall arms itself and her formation pins and shreds the vortex. **D 逆流** (52–55): she runs out against the `GET` floods, triple-issens three pillars, rises as a silhouette on the red moon and dives into the source. Enter combo #3, a wildcard asterisk, blows the tide away and seals the breach with `COMMIT`. 35 shots, about 48 pose swaps, 3 impact frames plus 3 other large flashes; R 0.80 → 0.78 → 0.74 → 0.68 → 0.62 → 0.55.

**Conventions for this part**
- Positions are screen pixels in the 1920×1080 frame, given as her feet point unless stated. "Height" is the drawing's height without the blade.
- **smear fN:** the 1-frame code smear before a swap: her silhouette swept along the path in flat cyan at 70 %, a stretched copy of the next drawing (×1.3 along the motion, ×0.9 across) at the midpoint, and 2–3 cyan multiples.
- **dies:** the fight-design §3.2 death. The halves slide 30–60 px apart along the cut over 4 frames, flash white for 1 local frame, then turn to ink: 3–8 blots per glyph fall with gravity and land as stains that fade over 2–4 s. A "compressed" death splits and goes white in 1 frame and bursts on the next.
- **Tide type spec (T),** used for every enemy here: JetBrains Mono in cinnabar #E8381F. The brightest glyphs get a #FFB09A hot core and a 12 px cinnabar bloom. Three depth tiers: back 14–18 px at 40 % (an endless `GET /admin HTTP/1.1` flood), mid 24–32 px at 70 %, front 40–96 px at 100 %. Rows flow along the surface they belong to. Foam is loose glyphs (`{ } ; ' " < > / $ | & * %` and `undefined`, `NaN`, `null`). The enemy-only glitch texture: each row jitters ±2 px sideways on the hats.
- **Firewall bricks (code):** every brick face carries one faint cyan word in 10 px JetBrains Mono at 30 %: `DROP`, `DENY` or `REJECT`. Bricks the tide has infected are graded red and read `ACCEPT`, the bad rule that let it in. Fixed bricks flip back to cyan `DROP`.
- **Beat layer (every shot):**
  - the tide's glow pulses +10 % on every kick;
  - the firewall's cyan seams pulse +15 % on every snare;
  - the signboards' red rows flicker on the hats.
- **Hit-stop:** a fight-clock freeze. Punches and shakes play through it, because they are the hit; pushes, tracks, drifts, rain, particles and enemies freeze. Rain hanging still is the visible sign.
- **Watermark corner:** the corner at x > 1560, y < 200 never holds key action or enemy text brighter than 30 %.
- **Rim lights:** cinnabar from the tide's side and cyan from her blade's side, done as offset coloured drop-shadows on the sticker.

### Phrase A · 分潮 Splitting the tide · bars 40–43 · f1814–f1993

#### S05-01 · f1814–f1835 · 22 f · 60.47–61.17 s · bar 40.00–40.49
- **Music:** the Drop 1 downbeat f1814 brings in the 808, kick, suona lead and aggressive pipa together, the hardest hit since 劈. Snare 1 lands at f1825 (60.84), and the 808 tail rings under the cut.
- **Lyric:** no new line (instrumental Drop 1), but Part 04's speech bubble 「哼，就这点报错？」 (错 f1805) carries over and holds (ruling G6):
  - It stays exactly where Part 04 left it: x 250–890, y 110–440, paper #EDE4D3 at 96 % with its 5 px dry-brush ink outline, ZCOOL KuaiLe characters, 报 and 错 cinnabar. As in Part 04, only its tail re-aims on the cut. It lives on the lyric layer, composited after the post pass, so IF #1's three tones and negative, punch L and shake L neither recolour nor move it.
  - f1814: the tail re-aims to her head in this framing and stops 30 px short of it, at about (920, 665). The bubble takes the drop with its own 3 % jolt over f1814–f1816.
  - f1825 (snare 1): it breathes +1.5 % and settles.
  - It holds whole to f1829 (0.8 s after 错).
  - f1830–f1835: it breaks into ink over 6 frames (see Action). Nothing of it is left at f1836; S05-02 has no lyric.
- **Picture:** layers back to front:
  - **BG05-breach-far:** the storm sky and the plain beyond the wall; the horizon sits at y 828, her chest height.
  - **The tide (code, between -far and -wall):** the 潮 wave Part 04 set up, rising beyond the wall from x 520 to the right edge.
    - Its face is 1000 px tall, crest at y 70 by the cut line (x 1000), sloping down to y 260 at x 1920 so the watermark corner stays clear. It leans 10° toward the wall.
    - Its foot pours through the breach as a sheet of text sliding toward her across the rubble.
    - Front rows, top to bottom, repeating: `TypeError: Cannot read properties of undefined (reading 'gate')` · `GET /admin HTTP/1.1` · `Segmentation fault (core dumped)` · `panic: runtime error: index out of range [7] with length 7` · `java.lang.NullPointerException` · `502 Bad Gateway` · `ECONNREFUSED 127.0.0.1:443` · `429 Too Many Requests` · `FATAL ERROR: JavaScript heap out of memory` · `Traceback (most recent call last):`.
    - The rows flow up the face and curl over the crest as foam glyphs.
  - **BG05-breach-wall:** the firewall crosses from the left foreground to the right background.
    - Its bricks carry the cyan rules; around the breach they are infected, red with `ACCEPT`.
    - The gatehouse's blank boards are filled with red error rows at density R.
  - **Her:** F-cut_up, 210 px tall (blade tip 330 px above her feet), feet at (960, 905) on the rubble in the gap. Cinnabar rim on her right edge, cyan from the arc above.
  - **BG05-breach-near:** wet plaza paving and puddles, which reflect the seams and then the arc.
  - **FX:**
    - The arc: a calligraphy crescent straight up the face of the wave, 4200 px long (20× her height), from the blade tip at (1010, 575) out of the top of the frame. White core 6 px, cyan body 44 px tapering, 60 px glow, dry-brush breaks on its outer edge.
    - Rain falls diagonally from the upper right.
- **Action:**
  - **f1814:** hard cut from Part 04's side view (F-low, 300 px, feet (684, 960) on BG04-breach_side) to this framing, with the swap to F-cut_up. In this framing she stands at her own position: F-cut_up, 210 px, feet (960, 905) on the rubble in the gap, blade tip at (1010, 575). The IF stands in for the smear.
  - **f1814–f1815, IF #1** (60.465, on the film's list):
    - f1814, three tones: wave and sky flat cinnabar; the cut a paper band 30 px wide running the full height; her silhouette ink with a 3 px paper rim; 24 radial ink brush lines converging on the blade tip.
    - f1815, the negative: ink ground, paper silhouette and lines, the cut band still paper, the lines 30 % longer.
  - **f1814–f1819, hit-stop 6.** From f1816 the real image is frozen:
    - a white hairline burns up the wave's full height from her blade;
    - a spark star at the tip (4 points, 10 streaks) cools from cyan to white by f1819;
    - the rain hangs and the wave stands frozen mid-surge.
  - **f1820, release:** the wave splits along the cut.
    - The left half slides 160 px down and 120 px left and rotates −8° by f1835 (ease-in, gravity). The right half slides 160 px down and 140 px right and rotates +8°.
    - The cut edges burn cyan and shed ink flakes, 30 particles per frame per edge. Glyphs within 40 px of the edge turn ink-black first.
  - **f1820–f1829:** the arc erodes from its foot upward, flecks peeling off.
  - **f1820–f1835:**
    - She drifts 14 px up (ease-out) and breathes ±1.2 %.
    - The sheet of text at her feet is cut at the blade root and parts around her boots like water round a rock. Each glyph goes to ink as it passes her and stains the rubble.
  - **f1825, snare 1:** both cut edges spray ink, each edge glyph throwing 3–8 blots out and down. The first blots land on the plaza paving at f1831 as stains.
  - **f1814–f1829, the bubble holds** on the lyric layer at x 250–890, y 110–440 through IF #1 and the hit-stop, untouched by the three tones (f1814), the negative (f1815), the punch and the shake. Behind it the wave's left half starts its slide at f1820; the bubble never covers the arc (which rises from x 1010) or her (everything below y 570); only its tail reaches toward her head.
  - **f1830–f1835, the bubble breaks into ink** (the death grammar, on the lyric layer):
    - f1830: a white hairline cracks across it from its top edge at (760, 110) to its bottom edge at (380, 440), as the shock of the split reaches it.
    - f1831 (the 8th): the two halves slide 18 px apart along the crack; the paper turns ink-black from the crack outward over f1831–f1832, the characters with it, and the tail snaps off.
    - f1833–f1835: the black halves burst into blots, 3–8 per character, which fall 40–160 px with gravity and fade to 0 by f1835. They do not stain the plate.
  - **The clean cut:** along the cut, a vertical band 60 px wide loses the sky's red grade and shows neutral ink-blue. It widens to 220 px as the halves part.
- **Camera:**
  - Wide, level at her chest, framed from inside the gate plaza at three-quarter.
  - Punch L on f1814 (+8 % over f1814–f1815, easing back over f1816–f1825). Shake L on f1814 (16 px and a 1.5° roll, decaying over 14 frames).
  - From f1820: a 1.5 %/s push, plus a 36 px tilt up (ease-in-out) following the cut into the sky.
- **Grade / R:**
  - R eases 0.80 → 0.78 over f1820–f1827: the sky's cinnabar lowers and the gatehouse boards lose their bottom two rows of red.
  - The clean-cut band stays in the sky.
- **Out:** hard cut on the beat-3 kick, f1836. The bubble is already gone.
- **Art:** BG05-breach (new), F-cut_up; Part 04's bubble (code, lyric layer).
  - **BG05-breach** (new): 2560×1440, chest height, three-quarter view toward the upper right. This is the firewall from inside.
    - Why not BG02-wallinside (ruling G3): that plate looks up the inner face from the lane at its foot, with the brick rising out of the top of the frame. This shot needs the wall's top and the open sky above it for the 1000 px wave face, the 4200 px arc and the tilt into the sky.
    - So BG05-breach is the same inner face seen from further back in the gate plaza. Generate it with **BG02-wallinside attached** (the same brick and the lane along the wall's foot), **BG02-firewall attached** (the same two-storey gate tower, here from inside) and **PR02-lantern attached** (the toppled lantern). The breach sits right of the gate tower, where S02-23 opened it.
    - Prompt (after the STYLE_BIBLE §5 anchor): "The inside of a great city gate at night, seen from the gate plaza at the chest height of a small figure, three-quarter view. A massive ancient Chinese city wall crosses the frame from the left foreground toward the right background, built of dark stone bricks with thin glowing cyan seams between them, the same wall as in the attached pictures. On the left part of the wall a gatehouse tower with double upturned eaves and blank glowing signboards. Right of centre the wall is broken open by a ragged breach two storeys high, its torn brick edges glowing cyan where the seams are ripped, rubble heaped in the gap. Through the breach and above the wall on the right, a dark empty plain runs to a low horizon under storm clouds. Wet flagstones in the plaza reflect the cyan seams; the attached hexagonal palace lantern lies toppled on its side, its panels dark; puddles; rain. The sky above the wall on the right half stays plain and open. No text."
    - Layers:
      - `-far`: sky, plain and horizon only;
      - `-wall`: wall, gatehouse, breach and rubble, on magenta with the sky keyed out;
      - `-near`: the paving strip and the lantern along the bottom, on magenta.
    - Code places the tide between -far and -wall. The right half above the wall stays empty for the wave; no lyric third is needed.

#### S05-02 · f1836–f1858 · 23 f · 61.20–61.93 s · bar 40.49–41.00
- **Music:** kick on beat 3 at f1836; snare 2 at f1848 (61.59); beat 4 rolls into bar 41.
- **Lyric:** none (instrumental Drop 1); Part 04's bubble broke into ink over f1830–f1835.
- **Picture:** an axial cut-in from the same side, 2.1× on BG05-breach.
  - The -far and -wall layers are defocused 4 px; -near is not used.
  - The jagged edges of the breach frame her left and right.
  - Beyond, the two wave halves slide down either side of her, with ink pouring from the cut edges in two curtains. The clean-cut band is a pale column of neutral sky straight above her.
  - Her: F-cut_up, 560 px, feet (900, 1040), face near (930, 600).
- **Action:**
  - **f1836–f1858:**
    - She drifts on, 10 px up over the shot, and breathes ±1.2 %.
    - The left half sinks behind the wall layer by f1850; the right half's top rotates past the right edge by f1856.
  - **f1848, snare 2:** a second ink burst from both cut edges drops a curtain of droplets across the background. Three out-of-focus blots (80–140 px, 6 px blur, ink at 70 %) cross the lens at f1849, f1852 and f1855, never over her face.
  - **f1848–f1858:** the text sheet at her feet finishes turning to ink and splashes, leaving a ring of stains round her boots.
  - **f1852:** dart 1 `GET /admin HTTP/1.1` enters at the right edge at her shoulder height (y 700), flying left at 170 px/frame. It is a 箭 Dart: 250 px long, the head glyph `G` white-hot at 1.4× size, the tail smeared into a 120 px streak.
  - **f1857:** a cyan glint star runs down her blade (2 frames, code); the dart is about to arrive.
  - **f1858, smear:** her silhouette swings from high to low, the wind-up into F-cut_down.
- **Camera:** slow push 1.00 → 1.04 and a 12 px drift right; no punch.
- **Grade / R:** 0.78; bloom on the burning cut edges.
- **Out:** hard cut on the hit f1859, matched on action (the dart meets the blade).
- **Art:** BG05-breach (crop), F-cut_up, F-cut_down (smear copy).

#### S05-03 · f1859–f1880 · 22 f · 61.97–62.67 s · bar 41.00–41.49
- **Music:** in bar 41 the kicks fall at f1859 (61.97) and f1870 (62.34) under pipa 16ths. The next kick is at f1881, and the bar's only snare at f1893.
- **Lyric:** none (instrumental Drop 1).
- **Picture:** medium side shot inside the breach on BG05-gap.
  - **-far:** storm sky and the plain, horizon at y 600 (her chest). The wave halves are now an ink mist settling on the far plain.
  - **-mid:** the broken wall end rises out of frame on the left half, a cliff of bricks with torn cyan seams. Its infected bricks are red with `ACCEPT`. Flat rubble ground lies under her, and the foot of the fallen-block ramp shows at the right edge.
  - **-near:** two out-of-focus rubble chunks in the bottom corners.
  - **Her:** 420 px, feet at y 960.
  - **Darts (T, 箭 form):** dart 1 `GET /admin HTTP/1.1` at shoulder height; dart 2 `POST /login HTTP/1.1` at hip height; dart 3 `PUT /gate HTTP/1.1` at head height, thrown down at 25°.
- **Action:**
  - **f1859, dart 1:**
    - F-cut_down, feet at x 760. The blade meets dart 1 at (930, 700): a descending crescent arc 520 px long and a spark star at the blade point.
    - Hit-stop 2 (f1859–f1860).
    - Dart 1 dies f1861–f1866: the halves `GET /admin` and `HTTP/1.1` slide apart, the front half spinning down and the back half skidding on; white f1865, ink f1866, stains on the rubble.
  - **f1861–f1868:** follow-through, a 14 px drift down-right.
  - **f1863:** dart 2 enters at the right edge, hip height (y 850), at 140 px/frame.
  - **Smear f1869.**
  - **f1870, dart 2:**
    - F-cut_up, feet at x 800, 40 px further on. The blade meets dart 2 at (960, 840).
    - Hit-stop 2 (f1870–f1871).
    - Dart 2 dies f1872–f1877: the halves `POST /log` and `in HTTP/1.1` fly up and back; white f1876, ink f1877.
  - **f1872–f1880:** follow-through, 12 px up-right.
  - **f1874:** dart 3 enters from the upper right (1920, 380), descending at 25° at 150 px/frame.
  - **Smear f1880.**
- **Camera:**
  - Medium side, eye-level. A 30 px track right over the shot follows her advance, with a 2 %/s push.
  - Shake S on f1859 and f1870 (6 px, decaying over 8 frames).
- **Grade / R:**
  - R 0.78 → 0.7775 (f1866) → 0.775 (f1877).
  - Each spark lights the nearest bricks cyan for 4 frames.
- **Out:** hard cut on the hit f1881.
- **Art:** BG05-gap (new), F-cut_down, F-cut_up.
  - **BG05-gap** (new): 2560×1440 (S05-06 whips 420 px across it), side view at chest height.
    - Prompt (after the §5 anchor): "Inside a breach in a great stone city wall at night, side view at the chest height of a small figure. On the left, the broken end of the wall rises out of the frame as a cliff of stacked dark stone bricks, the snapped edges glowing cyan where conduit-like seams are torn open, a few bricks hanging loose. From its foot, rubble-strewn flat ground runs right; right of centre a long ramp of fallen wall blocks lies outward on the plain, rising toward the right edge to about mid height. Beyond, a dark flat plain and a low horizon at 55 % of the frame height under storm clouds. Puddles, rain. No text."
    - Layers:
      - `-far`: sky and plain;
      - `-mid`: wall end, ground and ramp, on magenta;
      - `-near`: a strip of loose rubble chunks on magenta, used out of focus in the bottom corners.

#### S05-04 · f1881–f1903 · 23 f · 62.70–63.43 s · bar 41.49–42.00
- **Music:** kick at f1881 (62.72); snare at f1893 (63.09); pickup into bar 42.
- **Lyric:** none (instrumental Drop 1).
- **Picture:**
  - Tighter on the same axis, 1.35× on BG05-gap with -far defocused 3 px. The broken wall end fills the left background.
  - Her: 560 px, feet at y 1010.
  - Dart 4 `DELETE /wall HTTP/1.1` skims the ground.
- **Action:**
  - **f1881, dart 3:**
    - F-cut_down, feet at x 820. The blade meets dart 3 at head height, (1010, 560).
    - Hit-stop 2 (f1881–f1882).
    - Dart 3 dies f1883–f1888: the halves `PUT /ga` and `te HTTP/1.1` drop; white f1887, ink f1888.
  - **f1883–f1891:** follow-through, a 14 px drift.
  - **f1886:** dart 4 enters at the right edge at knee height (y 930), skimming and throwing a wake of glyph spray off the wet rubble, at 150 px/frame.
  - **Smear f1892.**
  - **f1893, snare (dart 4):**
    - F-cut_up, feet at x 870. The blade meets dart 4 at (1040, 920) and flings it high.
    - Hit-stop 2 (f1893–f1894).
    - f1895–f1898: the halves fly 200 px up, spinning; white f1898.
    - f1899: the biggest ink burst of the bar, with 4 blots across the lens over f1899–f1903.
  - **f1895–f1899:** follow-through, 16 px up-right.
  - **f1900–f1903:** the whip (see Camera). She leaves frame left by f1901 and is never blurred.
- **Camera:**
  - 2 %/s push; shake S on f1881 and f1893.
  - f1900–f1903: whip right, a 4-frame pan with a directional brush blur on the plate and the tide, landing on the panel slam at f1904.
- **Grade / R:** R 0.775 → 0.7725 (f1888) → 0.77 (f1899).
- **Out:** the whip lands in the panel slam at f1904.
- **Art:** BG05-gap (crop), F-cut_down, F-cut_up.

#### S05-05 · f1904–f1925 · 22 f · 63.47–64.17 s · bar 42.00–42.49
- **Music:** the bar 42 groove: kick at f1904, snare at f1915, 8ths at f1910 and f1921.
- **Lyric:** none (instrumental Drop 1).
- **Picture:** 锁定 Lock-on panels on a page: paper gutters 16 px wide (#EDE4D3) with dry-brush ink borders 6 px wide and broken edges.
  - **Panel A** (left, behind a slanted gutter from (860, 0) to (700, 1080)): N05-glance.
    - Her head fills the panel. The monocle eye is at (560, 430), the face is about 640 px wide, and her eyes are cut hard toward the targets on the right.
    - Behind her: an abstract field of horizontal ink-brush speed strokes on a cinnabar wash, with no plate.
  - **Panel B** (upper right, slanted gutter at y 560 → 520): the ramp's foot, a 2.4× crop of BG05-gap defocused 3 px.
    - Bugs 1–3 crawl up it: `Segmentation fault`, `NullPointerException`, `ECONNREFUSED`.
    - These are 虫 bugs: 44 px glyphs on wiggling paths, with two 6 px code leg strokes under each glyph that alternate every 2 frames.
  - **Panel C** (lower right): bug 4 `502 Bad Gateway` at 36 px. Bug 5 `undefined is not a function` and bug 6 `index out of range` are small and far up the ramp.
  - The idea is a multi-cursor selection: six occurrences locked one per 8th, then one edit applies to all of them.
- **Action:**
  - **f1904:** panel A slides in from x −320 and panel B from x +320, over 3 frames with an ease-out and a 2 % overshoot on f1907.
  - **f1906:** panel C slams up from y +260.
  - **Reticles on the 8ths:** bug 1 at f1904, bug 2 at f1910, bug 3 at f1915, bug 4 at f1921. Each reticle:
    - four cyan corner brackets snap from 180 % to 100 % over 3 frames, with a 1-frame white tick;
    - a 1.5 px cyan line then runs back across the gutters to her monocle;
    - the locked bug's glyphs glitch and its legs freeze for 1 frame;
    - an 8 px cyan bracket flickers in her monocle glass. There are no numbers.
  - **Throughout:** the bugs keep crawling up the ramp at 4 px/frame, and her drawing breathes ±1 %.
- **Camera:** inside each panel, a 3 %/s push. Panel A also drifts 6 px right. The page frame stays fixed while the panels move.
- **Grade / R:** 0.77. The thin paper gutters do not count as a flash.
- **Out:** hard cut on beat 3, f1926.
- **Art:** N05-glance (new; shown large: her head fills the panel), BG05-gap (crops).
  - **N05-glance** (new): head-and-shoulders bust, 1536×2048 (STYLE_BIBLE half-body size).
    - Body three-quarter toward screen-left, so the monocle on HER LEFT eye is the near, larger eye. The eyes look screen-right. No sword in the picture.
    - Prompt (with the shared sheet text, fight-design §10.3): "Chibi Qianhang, head and shoulders close-up, same design as the approved chibi sheet. Head and body turned three-quarter toward the LEFT edge of the picture, so the monocle on her LEFT eye is the near, larger eye and the shoulder of the wide left sleeve is nearest us; but both eyes are cut hard sideways toward the RIGHT edge in a sharp side-glance. Brows lowered and focused, one corner of the mouth just lifting into a smirk. Bangs and the glowing cyan fibre-optic tips of the ponytail blown toward the left by wind from the right. The monocle is plain glass with no display. Seen at her eye level. Thick white die-cut border, flat magenta #FF00FF background. No text."
    - Used instead of F-face here, because F-face looks screen-left, away from the targets.

#### S05-06 · f1926–f1970 · 45 f · 64.20–65.67 s · bar 42.49–43.49
- **Music:** kick on beat 3 at f1926; snare on beat 4 at f1938, under the issen. The bar 43 downbeat f1949 starts the 16th ripple; snare at f1960 under the dash. The fill starts at f1969 (65.62).
- **Lyric:** none (instrumental Drop 1).
- **Picture:** medium-wide side view on the right half of BG05-gap.
  - The ramp rises from (520, 940) to its top beyond the right edge.
  - The six bugs are strung up the ramp on one straight line: bug 1 (640, 905), 2 (800, 880), 3 (960, 855), 4 (1120, 830), 5 (1280, 805), 6 (1440, 780).
  - Reticles 1–4 carry over from the panels.
  - The broken wall end is at the left edge. Beyond the ramp lies the plain; at the right edge the foot of the next wave is rising (T, mid tier).
  - Her: F-low, 360 px, feet (430, 945).
- **Action:**
  - **f1926, anticipation:** F-low, pulled 16 px back with an 8 % squash. Reticle 5 lands on f1926, reticle 6 on f1932, and HUD lines join all six bugs to her monocle.
  - **f1930–f1933:** a cyan glint runs down the blade while the bugs keep crawling.
  - **f1937, smear:** she vanishes. A straight streak runs from her blade (520, 860) to the end point at the ramp's upper right, through all six bugs: white core 4 px, cyan body 18 px, glow 60 px, tapered, with 16 parallel ink-brush lines around it.
  - **f1938, the issen:**
    - F-issen appears at the far end, screen (1250, 930) once the whip has landed, with 3 cyan multiples fading back along the path over 4 frames.
    - Hit-stop 3 (f1938–f1940): every bug gets a 1–2 px white hairline through its glyphs and freezes; the rain hangs.
  - **f1941–f1959, the hold:**
    - She drifts 16 px right (ease-out), keeping the drawing's smirk, and breathes.
    - The bugs stay stunned in place while two sparks per bug crawl along each hairline at 30 px/frame.
  - **f1949–f1963, the ripple:** the bugs die compressed on the 16ths: bug 1 f1949, 2 f1952, 3 f1955, 4 f1957, 5 f1960, 6 f1963. Each split throws 4–6 blots per glyph, which stain the ramp.
    - Two frames behind each burst, a 120 px column of bricks behind that bug flips from red `ACCEPT` to cyan `DROP`. The relight ripples right with the bursts.
  - **f1960:** F-dash appears 60 px further right, at (1310, 925), then runs out of frame right at 90 px/frame (gone by f1966), toward the rising wave.
  - **f1964–f1970, linger:** stains, the relit cyan bricks and falling ink drops. The reticle lines snap off at f1964.
- **Camera:**
  - f1926–f1936: 2 %/s push.
  - f1937–f1938: a 2-frame whip right of 420 px with brush blur on the plates and enemies. It is shortened from 4 frames because she is only a streak; her drawing is never blurred.
  - Punch S on f1938.
  - f1941–f1970: a 20 px drift right with a 1.5 %/s push.
- **Grade / R:**
  - R eases down 0.005 per burst: 0.77 → 0.74 by f1966. This is the bar 43 value.
  - The streak leaves a 20 px clean cut through the red grade that fades over 20 frames.
- **Out:** hard cut on f1971, her step onto the wave.
- **Art:** BG05-gap, F-low, F-issen, F-dash.

#### S05-07 · f1971–f1993 · 23 f · 65.70–66.43 s · bar 43.49–44.00
- **Music:** the fill (65.62–66.37, f1969–f1991): 16ths rolling up into bar 44.
- **Lyric:** none (instrumental Drop 1).
- **Picture:** the climb, with the camera beside the wave face.
  - The face of the next wave (T, front tier, 48–72 px) fills the right two-thirds. It rises at 65° toward the upper right, and its rows flow up toward the crest: `Traceback (most recent call last):` · `GET /admin HTTP/1.1` · `Segmentation fault (core dumped)` · `ECONNRESET`. Its top-right part is dimmed to 30 % for the watermark corner.
  - The left third is BG05-ascent: the plain and horizon at first, then sky. The moon (PR06-moon, composited on BG05-ascent's sky) shows its lower rim at the top from f1984, foreshadowing bar 54.
  - Her: N05-wallrun_R, 300 px, centred near (900, 640) with her boots on the face.
- **Action:**
  - **Smear f1970:** her silhouette enters from the lower left along the face.
  - **f1971:** N05-wallrun_R on the face, feet (900, 660). A cyan step ring stamps the face under her front boot: an ellipse in the face's plane, 60 → 180 px over 8 frames, fading. The glyphs under the boot flash cyan and go ink, patched.
  - **Steps on the 8ths (f1977, f1983, f1988):** each is a 10 px hop up the slope (ease-out) with a 12 % contact squash for 2 frames and a new ring.
  - **Fill hits between the steps (f1974, f1980, f1986, f1991):** the wave sheds puffs of foam glyphs that fall past her downslope.
  - **f1985–f1993:** crest foam sprays around her as she nears the top.
  - **Smear f1993:** the hop over the crest.
- **Camera:** tilt up with her.
  - The plate scrolls 700 px down over the shot, accelerating on the fill.
  - 12–18 vertical ink-brush speed strokes stream down the frame at 60 px/frame at 50 %.
  - 2 %/s push.
- **Grade / R:** 0.74. PR06-moon is pale; code grades it toward cinnabar in proportion to R; this is "the red moon".
- **Out:** hard cut on the bar 44 downbeat, f1994.
- **Art:** N05-wallrun_R (new), BG05-ascent (new), PR06-moon (Part 06's moon, ruling G3).
  - **N05-wallrun_R** (new): full body, square cell 512 → ×4. Faces right, toward the upper right; the sword is in the cybernetic RIGHT hand, the near arm.
    - Prompt (with the shared sheet text): "Chibi Qianhang running up a steep slope that rises toward the upper right at about 60 degrees; the slope is not drawn, her boots rest on an invisible slanted line. Her body leans far forward along the slope, head toward the upper-right corner, front knee driven high, back leg pushing off below her. The sword is in her pearl-white cybernetic RIGHT hand (the near arm), trailing down behind her toward the lower left, blade pointing back. The wide LEFT sleeve, the ponytail and the ribbon tails stream down toward the lower-left corner. Determined grin, eyes up the slope. Do not mirror the character. No text."
  - **BG05-ascent** (new): 1536×2048 portrait, upscaled to 1920×2560 in use. A camera rising at chest height.
    - Prompt (after the §5 anchor): "A tall night sky over a dark plain. At the bottom, the flat plain and a low misty horizon; on the right, a towering bank of storm clouds rising from the horizon; high in the upper half a wide clear patch of dark sky with no moon, kept empty for a moon added separately; thin ink clouds around it; dry-brush cloud edges; rain. No text."
    - Layers:
      - `-sky`: sky, with the clear patch;
      - `-low`: plain, horizon and cloud bank, on magenta, so the rise can parallax.
    - **The moon is PR06-moon** (ruling G3), composited by code in screen mode into the clear patch, with code ink clouds crossing it. In every framing the moon's disc stays left of x 1500.
    - Code lights the cloud bank red from inside.

### Phrase B · 踏浪 Running the waves · bars 44–47 · f1994–f2173

#### S05-08 · f1994–f2015 · 22 f · 66.47–67.17 s · bar 44.00–44.49
- **Music:** the bar 44 downbeat kick f1994; snare f2005 (66.84). The groove is kick on 1 and 3, snare on 2 and 4.
- **Lyric:** none (instrumental Drop 1).
- **Picture:** a track along the crest.
  - **BG05-crest:**
    - `-sky`: storm clouds, with PR06-moon composited at about (1300, 300), 180 px across;
    - `-horizon`: the horizon at y 600, with the firewall and the city tiny and hazy on the left, the central tower BG-tower standing tallest above it, and the plain open to the right.
  - **The crest (code):** across the lower third, a ridge of front-tier rows streams left under her at twice her speed, with foam spraying off the back.
  - **Her:** F-dash, 260 px, feet on the crest at (820, 860).
- **Action:**
  - **f1994:** F-dash lands on the crest with a 12 % squash, recovering over f1994–f1997, plus a cyan ring and a spray of foam glyphs.
  - **f1999:** foam spike 1 erupts ahead at (1240, 860). It is a twisting column of loose glyphs (`{ } ; < > $ | & * %` and `NaN`, `null`, `undefined`), rising to 2× her height over 6 frames.
  - **f2000:** footstep, a 6 px hop; the glyphs under her boot go ink and a cyan ring spreads.
  - **Smear f2004:** the blade swings over from behind.
  - **f2005, snare:**
    - F-cut_down, feet at (1000, 860), 180 px along the strike. The blade cuts the spike diagonally at (1180, 720).
    - Hit-stop 2 (f2005–f2006).
    - The spike's top dies f2007–f2012: it slides 50 px off along the cut, goes white f2011 and turns to ink f2012. The ink rains onto the crest and stains it.
  - **f2007–f2015:** follow-through, an 18 px skid right. At f2011 she gives a 4 px footstep hop.
- **Camera:**
  - Track right at her speed, keeping her between x 820 and 1000. Parallax: -sky 4 %, -horizon 10 %, crest text 100 % plus its own scroll.
  - 1.5 %/s push; shake S on f2005.
- **Grade / R:**
  - R 0.74 → 0.7375 (f2012).
  - A cool moonlight rim on her left, cinnabar from the wave below.
- **Out:** hard cut on beat 3, f2016.
- **Art:** BG05-crest (new), PR06-moon, F-dash, F-cut_down.
  - **BG05-crest** (new): 2560×1440, level at chest height from high on a wave crest. Generate it with **BG-tower attached** (ruling G2: the central tower BG-tower, attached).
    - Prompt (after the §5 anchor): "High above a dark plain at night, seen from the crest of a giant wave (the wave itself is not painted; the lower third is plain dark mist). Storm clouds lit faintly from below; a low horizon at 55 % of the frame height; far away on the left, small and hazy, a long city wall with a gatehouse and the glowing pagoda skyline of a cyber-wuxia city, with the attached central tower standing far taller than everything around it; on the right the open plain fading into mist; high right of centre a clear gap in the clouds with no moon, kept empty for a moon added separately; rain streaks. No text."
    - Layers:
      - `-sky`: sky, with the clear gap where code composites PR06-moon (screen mode);
      - `-horizon`: the horizon band with the far city and the tower, on magenta.

#### S05-09 · f2016–f2038 · 23 f · 67.20–67.93 s · bar 44.49–45.00
- **Music:** kick f2016; snare f2028 (67.59); the pickup 8th f2033 into bar 45.
- **Lyric:** none (instrumental Drop 1).
- **Picture:**
  - A tighter track (her 400 px), lower on the crest: the crest text is huge under her (72 px) and BG05-crest is defocused 3 px.
  - Foam spike 2 is taller, with an error stacked up its column, one glyph per row: `undefined is not iterable`.
  - The bug `ReferenceError: xia is not defined` (虫 form) crawls on the crest ahead.
- **Action:**
  - **f2016:** F-dash, feet (760, 960), after smear f2015.
  - **f2021:** spike 2 erupts at (1300, 960), rising to 2.4× her height.
  - **f2022:** footstep ring.
  - **f2028, snare:**
    - After smear f2027: F-cut_down, feet (960, 960). The blade cuts spike 2 at (1150, 760).
    - Hit-stop 2 (f2028–f2029).
    - The spike top dies f2030–f2035: white f2034, ink f2035.
  - **f2028–f2033:** the bug crawls toward her from (1500, 950) at 5 px/frame.
  - **f2033:** on the 8th the bug springs, legs flailing, arcing up to her head height and arriving at f2039.
  - **f2030–f2038:** follow-through, a 16 px drift.
- **Camera:** tight track; 2 %/s push; shake S on f2028.
- **Grade / R:** R 0.7375 → 0.735 (f2035).
- **Out:** 斩线 slash-line wipe at f2039, owned by S05-10.
- **Art:** BG05-crest, F-dash, F-cut_down.

#### S05-10 · f2039–f2060 · 22 f · 67.97–68.67 s · bar 45.00–45.49
- **Music:** the bar 45 downbeat kick f2039; snare f2050 (68.34).
- **Lyric:** none (instrumental Drop 1).
- **Picture:** medium-close side view on the crest.
  - Her: 520 px, feet at y 1040.
  - BG05-crest is defocused 5 px, with front-tier crest text under her.
  - The leaping bug hangs in the air before her.
- **Action:**
  - **f2039, the 斩线 slash-line wipe:**
    - Her cut_up arc runs across the outgoing S05-09 frame from lower left to upper right.
    - The old frame splits along the arc. The upper-left half slides up-left and the lower-right half down-right, 260 px each over f2039–f2042 (ease-in), with the edges burning cyan.
    - S05-10 is revealed underneath, already in its hit-stop.
  - **f2039, the bug:**
    - F-cut_up, feet (840, 1040); the wind-up was F-cut_down's low finish. The blade meets the bug mid-air at (1090, 560).
    - Hit-stop 3 (f2039–f2041).
  - **f2042–f2045:** the halves `ReferenceError: xia` and `is not defined` fly apart up-left and up-right, their legs still kicking for 4 frames (a 虫 keeps crawling after the cut). White f2046, ink f2047.
  - **f2042–f2049:** follow-through, 16 px up-right.
  - **f2050:** after smear f2049, F-dash at (940, 1040), 100 px on; the run resumes.
  - **f2056:** footstep ring.
  - **f2054–f2060:** ahead on the right, a row of crawling glyphs forms along the crest: `GET /admin HTTP/1.1 GET /admin HTTP/1.1 …`.
- **Camera:** track; punch M on f2039 (+5 % over 2 frames, back over 8); shake S on f2039; 2 %/s push.
- **Grade / R:** R 0.735 → 0.73 (f2047).
- **Out:** hard cut on beat 3, f2061, to the target's view.
- **Art:** BG05-crest, F-cut_up, F-dash.

#### S05-11 · f2061–f2083 · 23 f · 68.70–69.43 s · bar 45.49–46.00
- **Music:** kick f2061; snare f2073 (69.09); the kick pickup f2078 (69.28) into bar 46.
- **Lyric:** none (instrumental Drop 1).
- **Picture:** the target's view.
  - The camera sits low on the crest ahead of her at her chest height, looking back along it. She comes toward the lens; the right-facing drawings face camera-right.
  - Behind her the crest recedes, and the city is a hazy glow on the left horizon (BG05-crest's left part, defocused 4 px).
  - Between her and the lens, the row of glyphs crawls toward her: `GET /admin HTTP/1.1` repeated, 48–96 px with perspective.
  - Her: 300 px, feet (640, 820).
- **Action:**
  - **f2061, the sword-qi (剑气):**
    - After smear f2060: F-cut_down, feet (700, 830).
    - The arc breaks off the blade and flies at the camera as a crescent: 600 px wide at release, growing with perspective and turning 10° clockwise.
    - Hit-stop 2 (f2061–f2062).
  - **f2063–f2067:** the crescent crosses the row. Every glyph it passes gets a white hairline as the cut runs through the row toward the lens.
  - **f2067–f2068:** the crescent sweeps past the lens across the right 40 % of the frame: a white core and cyan body, fraying into sparks at its tips. This is large flash #2 of the part (not an impact frame).
  - **f2069–f2072:** sparks drift where it frayed.
  - **f2073:** after smear f2072, F-dash at (780, 860), 340 px; she runs at the camera.
  - **f2078, kick:** the row dies on the beat. The halves slide apart over f2078–f2081, go white at f2082 and turn to ink at f2083, spraying at the lens: 3 out-of-focus blots on f2083.
- **Camera:**
  - A slow dolly back along the crest ahead of her; she gains on it (300 → 380 px).
  - Shake S on f2067 as the crescent passes. The crescent carries a 2-frame motion smear; it is an effect, not her.
- **Grade / R:**
  - R 0.73 → 0.725 (f2083).
  - The crescent lights the row cyan as it passes.
- **Out:** hard cut on the bar 46 downbeat, f2084.
- **Art:** BG05-crest, F-cut_down, F-dash.

#### S05-12 · f2084–f2105 · 22 f · 69.47–70.17 s · bar 46.00–46.49
- **Music:** the fill runs all bar (69.47–70.78): f2084, then 16th hits climbing; the cut lands at f2095 (69.84).
- **Lyric:** none (instrumental Drop 1).
- **Picture:** inside the tube, a three.js glyph tunnel (code).
  - **Geometry:** the wave curls over her into a tube whose axis runs left to right. The camera is inside, beside her, in side view.
  - **Walls:** the far wall and the curling ceiling are rings of front-tier text, streaming around the rings and left along the axis: `Out of memory: Killed process 4242 (jianghu)` · `Segmentation fault (core dumped)` · `kernel panic - not syncing` · `GET /admin HTTP/1.1`. The floor is the crest text under her feet.
  - **Light:**
    - red glow from the glyphs, with her blade's cyan on the nearest rows;
    - at the right edge, the tube's mouth, an oval of moonlit sky (BG05-crest-sky) 600 px tall and shrinking;
    - no rain inside the tube.
  - **Her:** F-dash, 300 px, feet (760, 880).
- **Action:**
  - **f2084:** F-dash; she runs into the curl. The ceiling closes over from the left over f2084–f2090 and the frame darkens to a red glow.
  - **f2087, f2090, f2092, fill hits:** small glyph debris rains from the ceiling; two pieces bounce off her shoulder and blade with tiny sparks (6 frames each).
  - **f2090:** a big chunk peels from the ceiling ahead and falls at her, curled into an arc: `Out of memory: Killed process 4242 (jianghu)`.
  - **f2095, the chunk:**
    - After smear f2094: F-cut_up at (860, 880). The blade cuts the chunk at (1020, 640).
    - Hit-stop 2 (f2095–f2096); during it the falling debris hangs, which stands in for the rain.
    - The halves die f2097–f2102, flying up into the ceiling: white f2101, ink f2102.
  - **f2097–f2105:** follow-through, then she runs on at the track speed.
  - **The mouth:** shrinks from 600 px to 420 px tall by f2105.
- **Camera:**
  - Track right at her speed. The tunnel rings stream past (the back wall at 1.0×, the ceiling at 1.4×), with a slow ±2° roll as the tube twists and horizontal ink-brush speed lines along the axis.
  - Shake S on f2095.
- **Grade / R:**
  - R 0.725 → 0.7225 (f2102).
  - The interior is graded darker (60 % ink) with a cinnabar glow and her cyan blade rim.
- **Out:** hard cut on the cut, f2106.
- **Art:** F-dash, F-cut_up, BG05-crest (the `-sky` layer through the mouth); the tube is code.

#### S05-13 · f2106–f2122 · 17 f · 70.20–70.73 s · bar 46.49–46.87
- **Music:** the fill continues: hits at f2106 (70.215) and f2118 (70.59), building to the kick at f2123 (70.78).
- **Lyric:** none (instrumental Drop 1).
- **Picture:** the reverse inside the tube.
  - The camera sits ahead of her near the mouth, looking back down the tube. The tunnel recedes behind her to a red vanishing point, and its far end is collapsing in ink-black foam.
  - Moonlight from the mouth, behind the camera, lays a paper-white rim on her face and blade that narrows as the mouth closes.
  - Her: 460 px, centred at x 900.
- **Action:**
  - **f2106, the chunk:**
    - After smear f2105: F-cut_down, feet (900, 1000). A chunk `Segmentation fault (core dumped)` hurled from the side wall is cut at (1060, 700).
    - Hit-stop 2 (f2106–f2107).
    - The chunk dies f2108–f2113: white f2112, ink f2113.
  - **f2109, f2112, f2115:** pelting debris sparks off her blade.
  - **f2118:** after smear f2117, F-dash at (980, 1000), 500 px; she sprints at the camera. The moonlight on her narrows to a band across her eyes.
  - **f2118–f2122:** the collapse catches up; the tube's far end implodes into ink foam two bodies behind her.
- **Camera:**
  - A dolly back with her, slightly slower than her, so she grows. Roll −2° → +2°.
  - f2120–f2122: a vignette tightens from 100 % to 60 % of the frame as the mouth closes.
- **Grade / R:** R 0.7225 → 0.72 (f2113).
- **Out:** hard cut on the kick f2123, to the outside.
- **Art:** F-cut_down, F-dash; the tube is code.

#### S05-14 · f2123–f2152 · 30 f · 70.77–71.73 s · bar 46.87–47.53
- **Music:** the kick f2123 (70.78) ends the fill. Bar 47's stab figure follows: four unison band hits on 16ths 0·3·6·8, at f2129 (70.965), f2137 (71.246), f2146 (71.528) and f2151 (71.715).
- **Lyric:** none (instrumental Drop 1).
- **Picture:** wide on the wall top in side view, BG05-walltop.
  - **-far:** storm sky; the plain far below beyond the parapet.
  - **-wall:** the walkway runs across the frame with the crenellated outer parapet behind it, the gatehouse at the far left and the watchtower at the far right. The parapet's middle third is infected, red with `ACCEPT`.
  - **-near:** the inner edge of the walkway, out of focus.
  - **The wave (code):** it stands beyond the parapet, its curl arching over the walkway.
    - On the left the tube has closed and crashes onto the walkway in ink-black foam.
    - The tube's mouth, an open spiral dark inside with a red-lit rim, is at (640, 420).
    - Right of the mouth, the wave's standing shoulder towers over the parapet to y 80 (peak at x ≤ 1480). Its lip hangs over the walkway at y 260 between x 760 and 1600.
  - **Her:** 230–260 px.
- **Action:**
  - **f2123, kick:** she bursts out of the mouth in F-leap at (720, 430), rotated −15°, 230 px, with a spray of glyphs and foam. She rises 40 px and arcs right.
  - **f2129, stab 1:**
    - After smear f2128: F-cut_down, airborne and rotated +8°, feet (930, 610).
    - The blade cuts down through the lip and leaves hanging cut 1, a "\" diagonal across the curl from (800, 220) to (1240, 700). It glows (white core 3 px, cyan 10 px) with sparks crawling along it, and nothing breaks yet.
    - Hit-stop 2 (f2129–f2130).
  - **f2131–f2135:** she drops toward the walkway.
  - **f2137, stab 2:**
    - After smear f2136: F-cut_up, feet (1020, 850), on the walkway, with a 12 % landing squash for 2 frames after the stop.
    - Hanging cut 2 runs "/" from (960, 820) to (1460, 230).
    - Hit-stop 2 (f2137–f2138).
  - **f2145, smear:** she vanishes; a streak runs along the walkway under the lip from (1060, 760) to (1300, 760).
  - **f2146, stab 3:**
    - F-issen, feet (1260, 860).
    - Hanging cut 3 runs horizontally through the wave's base along the parapet top, from (1000, 740) to (1560, 740). Two cyan multiples trail.
    - Hit-stop 1 (f2146).
  - **f2146–f2150:** the three hanging lines cross the shoulder, with 6 sparks per line crawling outward at 40 px/frame.
  - **Smear f2150:** a cyan silhouette rising from the lunge to standing as the sword swings point-down.
  - **f2151, stab 4:** F-enter, feet (1230, 862); she plants the sword in the walkway in front of her. IF #2 (71.715, on the film's list) runs f2151–f2152:
    - f2151, three tones: ink ground; the wave a paper mass; the three hanging cuts in cinnabar; her silhouette paper with an ink rim; the ⏎ crossguard a cinnabar shape at her waist; 28 radial paper brush lines from the crossguard. The whole IF is drawn 6 px low: the key pressed down.
    - f2152, the negative: paper ground, ink wave, silhouette and lines, cinnabar kept; drawn 3 px low.
  - **Hit-stop 6 (f2151–f2156)** begins here and runs on through S05-15.
- **Camera:**
  - Wide. A 220 px track right over f2123–f2146 (ease-out) keeps her within x 700–1300. It rises 40 px with her leap, then settles.
  - Punch S on f2129 and f2137, punch M on f2146, punch L on f2151. Shake S on each stab.
- **Grade / R:**
  - R 0.72.
  - The hanging lines light the curl's underside cyan. She has a cinnabar rim from the wave behind and a cyan rim from the blade.
- **Out:** hard cut inside the hit-stop on f2153, to the insert.
- **Art:** BG05-walltop (new; kept instead of BG02-walltop, see below), F-leap, F-cut_down, F-cut_up, F-issen, F-enter.
  - **BG05-walltop** (new): 2560×1440, side view at chest height from the city side, used for bars 47–51.
    - Why not BG02-walltop (ruling G3): BG02-walltop looks the other way, inward and down over the inner parapet into the city. Every wall-top shot in this part (S05-14 to S05-27) is a side view along the walkway looking outward across the outer parapet to the plain, where the wave and the vortex stand. No shot here looks into the city, so BG02-walltop has no place in this part.
    - It is the same wall: generate it with **BG02-firewall attached** (the same bricks, merlons and two-storey gate tower, here seen from the walkway) and **PR02-lantern attached** (the fallen lantern on `-near`).
    - Prompt (after the §5 anchor): "On top of a great city wall at night, side view at the chest height of a small figure standing on the walkway. The stone-paved walkway runs straight across the whole frame from left to right, seen in slight perspective in the lower quarter, puddles reflecting cyan light. Along its far edge the outer parapet's crenellations (merlons and crenels) run across the frame, its dark bricks seamed with thin glowing cyan lines, the same wall and gate tower as in the attached picture. Through the crenels and above the parapet, the dark plain far below and a low horizon. Far left on the wall a gatehouse tower with double upturned eaves and blank glowing signboards; far right a small watchtower. Storm sky; rain. The sky above the parapet stays plain and open. No text."
    - Layers:
      - `-far`: sky and plain;
      - `-wall`: walkway, parapet, gatehouse and watchtower, on magenta;
      - `-near`: the inner edge of the walkway with a low inner parapet and the attached hexagonal palace lantern fallen on its side, panels dark, on magenta, used out of focus.
    - Code places the wave and the vortex between -far and -wall, and in front of -wall where they cross the walkway.

#### S05-15 · f2153–f2157 · 5 f · 71.77–71.90 s · bar 47.53–47.65
- **Music:** the stab's ring-out; the bass 8th at f2157.
- **Lyric:** none (instrumental Drop 1).
- **Picture:** a frontal ECU insert, N05-enterhands, filling the frame.
  - The pommel and her stacked hands sit at top centre; the ⏎ crossguard is large at bottom centre (y 860); the blade disappears into the walkway's stone.
  - Behind, out of focus: her sash, her skirt and the paving's cyan seams along the bottom edge.
- **Action:**
  - **f2153–f2156, frozen (hit-stop):**
    - The ⏎ crossguard flares: its cyan edge glow is at 100 % with a white-hot core and a 140 px bloom. This is the hit's spark, not a flash.
    - Rain streaks hang in the background.
    - The frame springs back from the IF's dip: −1 px at f2153 (overshoot), 0 at f2154.
  - **f2157, release:**
    - The stone round the blade cracks in a flat ring: 12 radial cracks out to 160 px. Cyan light shoots out through the cracks and the paving seams.
    - The keypress ripple starts from the blade point, and the ⏎ glow pulses outward as a ring.
    - The rain falls again.
- **Camera:** frozen through f2156; from f2157 a 3 %/s push.
- **Grade / R:** R 0.72; graded cool (cyan dominant, cinnabar only in the far bokeh).
- **Out:** hard cut on f2158.
- **Art:** N05-enterhands (new; shown large: it fills the frame).
  - **N05-enterhands** (new): insert, 1536×1024 landscape, front view, both hands; the cybernetic right hand is on screen-left.
    - Prompt (with the shared sheet text, minus "each cell holds one figure"): "Close-up insert of chibi Qianhang's hands on her planted sword, front view at chest height, framed from her collarbone down to just below the crossguard; her face is not in the picture. The sword stands point-down and vertical in the centre; the blade runs out of the bottom edge into the ground, which is not drawn. The dark-metal crossguard, bent like a return-key arrow, is large and clear at the bottom of the picture with its cyan glowing edge; above it the red-cord grip; at the top the small jade-disc pommel with the long red tassel hanging. Both hands are stacked on the pommel: her pearl-white cybernetic RIGHT hand with cyan light seams grips the pommel on the left side of the picture, and her bare LEFT hand is laid over it, the wide white sleeve with red trim draping down the right side of the picture. Behind, softly: the white cross-collar top and the black sash with the red cord knot. Thick white die-cut border round the hands and sword, flat magenta background. Do not mirror. No text."

#### S05-16 · f2158–f2173 · 16 f · 71.93–72.43 s · bar 47.65–48.00
- **Music:** beat 4 at f2163; the bar's last 8ths into bar 48.
- **Lyric:** none (instrumental Drop 1).
- **Picture:** wide again, slightly closer than S05-14 (1.15×), on BG05-walltop.
  - Her: F-enter, 300 px, feet (980, 870), frontal. She faces the camera with her back to the wave.
  - Behind her, beyond the parapet: the shoulder and the curl with the three hanging cuts.
- **Action:**
  - **f2158 (release frame 2):** the three cuts detonate along their lengths. The shoulder breaks into four pieces along the lines, which slide 40–80 px apart over f2158–f2161. Only the cut edges burn white, for 2 frames: no white body flash, because IF #2 was 7 frames ago.
  - **f2158–f2163:** the pieces go ink-black from the cut lines outward, an ink bleed through the text at 80 px/frame.
  - **f2162–f2173:** the whole wave — the shoulder, the curl and the closed tube on the left — falls as an ink cascade over the parapet and onto the plain.
    - Giant blots arc over the walkway and splash round her as stains.
    - Out-of-focus blots cross the lens at f2165 and f2170.
  - **f2158–f2166, the relight:**
    - Cyan light runs along the parapet's brick seams left and right from her sword point at 120 px/frame, reaching both frame edges by f2166.
    - Behind it every infected brick flips from red `ACCEPT` to cyan `DROP`, and the merlons light one after another along the crenellations.
    - The gatehouse boards at the far left lose rows of red.
  - **f2158–f2168, the keypress ripple:** a flat ellipse on the walkway spreads from her sword point, 120 → 1700 px wide, fading. Raindrops bend outward as it passes.
  - **f2163, beat 4:** ink rain starts falling across the frame.
  - **f2173, smear:** the sword streaks from the stone into her right hand, a 1-frame cyan streak.
  - **Throughout:** she breathes ±1.2 %, eyes half closed, with a calm smile (the drawing).
- **Camera:** slow push 1.00 → 1.03 in the ink rain.
- **Grade / R:** R eases 0.72 → 0.68 over f2158–f2170 (the bar 47 value). The sky's red lifts noticeably, and the rain shifts from cinnabar-tinted toward neutral ink-blue.
- **Out:** hard cut on the bar 48 downbeat, f2174.
- **Art:** BG05-walltop, F-enter.

### Phrase C · 围城 Surrounded · bars 48–51 · f2174–f2353


#### S05-17 · f2174–f2184 · 11 f · 72.47–72.80 s · bar 48.00–48.25
- **Music:** the bar 48 downbeat f2174, back to the groove; the 8th at f2180.
- **Lyric:** none (instrumental Drop 1).
- **Picture:** medium-wide from behind her.
  - The camera is on the inner side of the walkway at her chest height, on BG05-walltop.
  - Her: F-back, 380 px, feet (960, 1000), facing the parapet and the plain; ink still raining.
  - Beyond the parapet, the surviving red lifts off the plain in long ribbons of T text and bends into a ring round the wall top. This is the 涡 Vortex forming. Its lines read:
    - `Traceback (most recent call last):`
    - `  File "firewall.py", line 42, in hold`
    - `ConnectionResetError: [Errno 104] Connection reset by peer`
    - `TimeoutError: [Errno 110] Connection timed out`
    - `PermissionError: [Errno 13] Permission denied: '/city/gate'`
    - `503 Service Unavailable`
- **Action:**
  - **f2174:** F-back, 30 px nearer the parapet than F-enter, with the sword in her hand (smear f2173).
  - **f2176:** the first vortex line sweeps behind her, right to left.
  - **f2180:** a near-side line sweeps in front of the lens, left to right: big, blurred, across the bottom third.
  - **f2179:** tendril 1 rears from the vortex wall on the right: a braid of `ConnectionResetError` repeated 12 times, 70 px thick, whipping up and over.
  - **Throughout:** her ponytail and ribbons blow left (the drawing) and the drawing breathes.
- **Camera:** 2 %/s push; a roll begins, 0° → +1.5° by f2184, following the spin.
- **Grade / R:** R 0.68. The vortex's wind bends the rain into curves.
- **Out:** hard cut on beat 2, f2185.
- **Art:** F-back, BG05-walltop.

#### S05-18 · f2185–f2218 · 34 f · 72.83–73.93 s · bar 48.25–49.00
- **Music:** snare f2185 (72.84), kick f2196 (73.215), snare f2208 (73.59).
- **Lyric:** none (instrumental Drop 1).
- **Picture:** medium shot (her 440 px, feet at y 1010) inside the vortex on the walkway. BG05-walltop is defocused 4 px.
  - The vortex is a cylinder of text circling her. Behind her, the far side's mid-tier rows (28 px) sweep right to left.
  - In front, the near side's front-tier rows (110–160 px glyphs, 8 px blur, 35 %) sweep left to right across the lower third and the top band, never across her face.
- **Action:**
  - **f2185, tendril 1 (from the right):**
    - After smear f2184: F-cut_down, facing right, feet x 1000. It cuts the braid lashing in from the right at (1180, 640).
    - Hit-stop 2 (f2185–f2186).
    - The severed end flies off right and dies f2187–f2192 (white f2191, ink f2192). The stump retracts into the vortex wall.
  - **f2190:** tendril 2 rears from the left: `TimeoutError` braided 8 times.
  - **f2195, smear:** the cyan silhouette spins to face left, and the sword passes from her right hand to her left hand inside the smear.
  - **f2196, tendril 2 (from the left):**
    - F-cut_down_l, facing left with the sword in her LEFT hand, feet x 860. The wide sleeve follows the cut. It cuts tendril 2 at (700, 640).
    - Hit-stop 2 (f2196–f2197). The tendril dies f2198–f2203.
  - **f2202:** tendril 3 rears from the right: `PermissionError: [Errno 13]` braided 10 times.
  - **f2207, smear:** she turns back to face right, and the sword returns to her right hand.
  - **f2208, tendril 3 (from the right):**
    - F-cut_down, feet x 1010. It cuts tendril 3 at (1200, 600).
    - Hit-stop 2 (f2208–f2209). The tendril dies f2210–f2215.
  - **Near-side sweeps** cross the lens at f2190, f2201 and f2213, 6 frames each.
  - **Follow-through:** 14 px along each strike.
- **Camera:** medium; 2 %/s push; a slow roll from +1.5° to −3° following the vortex's spin; shake S on f2185, f2196 and f2208.
- **Grade / R:**
  - R 0.68 → 0.6775 (f2192) → 0.675 (f2203) → 0.6725 (f2215).
  - A cinnabar rim from the tendril's side and a cyan rim from the blade on the other side.
- **Out:** hard cut on the bar 49 downbeat, f2219.
- **Art:** F-cut_down, F-cut_down_l, BG05-walltop.

#### S05-19 · f2219–f2252 · 34 f · 73.97–75.07 s · bar 49.00–49.76
- **Music:** the bar 49 downbeat f2219; the snare f2230 (74.34) under the whirlwind; beat 3 at f2241.
- **Lyric:** none (instrumental Drop 1).
- **Picture:** medium-wide (her 330 px, feet (960, 960)), the vortex tight round her. BG05-walltop is defocused.
- **Action:**
  - **f2219:** after smear f2218, F-low, 16 px back with an 8 % squash.
  - **f2219–f2229:** the vortex tightens. Its inner wall shrinks from 520 to 380 px half-width, and every line rears inward and brightens, closing in on her.
  - **f2229, smear:** a spinning cyan silhouette.
  - **f2230, the whirlwind:**
    - F-spin. The ring slash, a flat ellipse round her waist (360×70 px, white core 4 px, cyan body 16 px), draws itself over f2230–f2233.
    - Large flash #3 of the part: one frame of paper at 40 % over the whole frame at f2230.
    - No hit-stop: the ring's motion carries the hit.
  - **f2233–f2244:** the ring expands to 3× (1080×210 px) over a beat and cuts the vortex's inner wall in a circle at waist height. Every row it crosses gets a hairline and a 1-frame white.
  - **Bursts on the 16ths** (f2233, f2236, f2239, f2241, f2244, f2247, f2250) ripple clockwise round the ring from the front, one sector per hit. Each sector dies compressed and throws blots outward, which land on the walkway as a ring of stains.
  - **f2244–f2252:** above the cut, the vortex slides up and outward and its lines loosen; below the cut, it sags.
- **Camera:**
  - Punch M on f2230.
  - Roll +8° over f2230–f2236, then back to 0° over f2237–f2252 (ease-in-out).
  - While she holds F-spin, the camera rocks ±3° and pulses scaleX 0.94 ↔ 1.00 on the 16ths (f2233–f2250).
  - A 1.5 %/s push underneath.
- **Grade / R:** R 0.6725 → 0.665 across the ripple.
- **Out:** hard cut on beat 4, f2253.
- **Art:** F-low, F-spin, BG05-walltop.

#### S05-20 · f2253–f2263 · 11 f · 75.10–75.43 s · bar 49.76–50.00
- **Music:** beat 4 at f2253 (75.09); the last 8th at f2258; the pickup into bar 50.
- **Lyric:** none (instrumental Drop 1).
- **Picture:** wide from outside the vortex, on the full BG05-walltop plate (0.85×).
  - The whole vortex is a red tornado of text standing on the wall top, its top lost in the clouds, with the plain beyond and the gatehouse at the left.
  - The cyan ring cut circles its waist, with ink bursting from it all round.
  - Her: tiny (110 px) at its foot.
- **Action:**
  - **f2253:** F-low after the spin, with a 12 % landing squash. The ring cut glows; the upper tornado spins loose, its rows drifting apart, while the lower part sags and pours ink down its sides.
  - **f2258:** the outer layers pull tight again; the vortex is not finished.
- **Camera:** wide; 3 %/s push and a 10 px drift left.
- **Grade / R:** R 0.665.
- **Out:** hard cut on the bar 50 downbeat, f2264.
- **Art:** F-low, BG05-walltop.

#### S05-21 · f2264–f2285 · 22 f · 75.47–76.17 s · bar 50.00–50.49
- **Music:** the bar 50 downbeat f2264; 8ths at f2270, f2275 and f2281, which raise the formation.
- **Lyric:** none (instrumental Drop 1).
- **Picture:** frontal medium on the walkway; the camera is on the city side at her chest height.
  - Her: F-sword_finger, 520 px, feet (960, 1020), face near (960, 560).
  - Behind her: the parapet (defocused) and the vortex's re-formed outer wall circling; the ink rain is thinning.
- **Action:**
  - **f2264:** after smear f2263, F-sword_finger, 20 px up, with a 6 % stretch recovering over 4 frames.
  - **The formation rises** in groups of 8 SW swords (180 px, point-down) pulled out of the firewall's brick seams around her: the firewall arms itself. Each sword rises 300 px over 5 frames (ease-out), trailing a cyan seam glow, with a puff of ink dust where it leaves the stone.
    - Group 1 at f2270: the front arc.
    - Group 2 at f2275: the sides.
    - Group 3 at f2281: the back arc, from the parapet's seams.
  - **The halo:** the swords take their places on a vertical ellipse round her (1240×900 centred at (960, 720), clear of her face). They hover point-down, each bobbing 2 % per bar.
  - **f2264–f2285:** the formation turns 20° clockwise; the camera does not.
- **Camera:** slow push at 2 %/s; no roll.
- **Grade / R:** R 0.665. The swords' cyan lifts her front light; cinnabar comes only from the vortex behind her.
- **Out:** hard cut on beat 3, f2286.
- **Art:** F-sword_finger, SW, BG05-walltop.

#### S05-22 · f2286–f2297 · 12 f · 76.20–76.57 s · bar 50.49–50.76
- **Music:** beat 3 at f2286 (76.215); 16ths at f2289, f2292 and f2295. Beat 4 (f2298) is the volley.
- **Lyric:** none (instrumental Drop 1).
- **Picture:** close-up, N05-command.
  - The bust is 1000 px tall in frame, front view, face about 380 px wide at (960, 470).
  - The halo's ten upper swords (240 px each) frame her head and shoulders; the vortex rows beyond are defocused.
- **Action:**
  - **f2286–f2295:** the tips turn outward one frame apart, clockwise from the top. Each sword rotates in-plane over 3 frames to point straight away from her, with a cyan glint at its tip.
  - **Reticles** land on vortex lines beyond the tips on the 16ths f2289, f2292 and f2295: cyan brackets with lines back to her monocle, and no numbers.
  - **f2296–f2297:** the swords draw back 12 px toward her, the anticipation.
  - **Throughout:** the drawing breathes ±1 %; her eyes are on us.
- **Camera:** 3 %/s push.
- **Grade / R:** R 0.665.
- **Out:** hard cut on the volley, f2298.
- **Art:** N05-command (new; shown large: 1,000 px tall in frame), SW.
  - **N05-command** (new): half body, 1536×2048, front view. Sword in the cybernetic RIGHT hand, lowered; the LEFT hand makes the sign.
    - Prompt (with the shared sheet text): "Chibi Qianhang, half body from head to waist, front view at her chest height. Her LEFT hand is raised beside her left cheek (the right side of the picture) in the sword-finger sign, index and middle fingers straight up and together and the other fingers folded, just below the monocle, so both eyes and the monocle stay clear; the wide left sleeve falls back from the raised forearm. Her pearl-white cybernetic RIGHT arm hangs at her side, the sword's red-cord grip and crossguard showing at the lower-left edge, blade pointing down out of the picture. Sharp eyes looking straight at the viewer, a focused small smile. Hair, ponytail and ribbon tails drifting upward in an updraft. Thick white die-cut border, flat magenta background. Do not mirror. No text."
    - Also used in S05-24 and S05-26. It is the close-up version of F-sword_finger, per STYLE_BIBLE rule 7: close-ups are drawn as half-body images, not cropped from full-body ones.

#### S05-23 · f2298–f2308 · 11 f · 76.60–76.93 s · bar 50.76–51.00
- **Music:** beat 4 at f2298 (76.59), volley 1; 8th at f2303.
- **Lyric:** none (instrumental Drop 1).
- **Picture:** wide on BG05-walltop (0.9×): the vortex is a ring of text round the wall top, and she stands at its centre in F-sword_finger (160 px) inside the halo of 24 swords.
- **Action:**
  - **f2298, volley 1:** all 24 swords fire outward, each a cyan streak 380 px long for 2 frames.
  - **f2300:** they strike the vortex wall all round and stay in it, quivering for 3 frames (f2300–f2302).
  - **f2301–f2304:** each pinned glyph, and its neighbours for 80 px along the line, turn ink-black: patched.
  - **No hit-stop:** the volleys keep the groove.
  - **f2303, 8th:** the next 24 swords pull out of the seams around her, reloading.
- **Camera:** wide; 2 %/s push; punch S on f2298.
- **Grade / R:** R 0.665 → 0.66, eased over f2301–f2305.
- **Out:** hard cut on the bar 51 downbeat, f2309.
- **Art:** F-sword_finger, SW, BG05-walltop.

#### S05-24 · f2309–f2319 · 11 f · 76.97–77.30 s · bar 51.00–51.25
- **Music:** the bar 51 downbeat f2309 (76.965), volley 2; 8th at f2315.
- **Lyric:** none (instrumental Drop 1).
- **Picture:** close-up, N05-command, 930 px tall in frame, face at (960, 480).
- **Action:**
  - **f2309, volley 2:** the halo fires.
    - The near swords streak past the camera on both sides: huge, 1 frame each, motion-smeared (they are effects).
    - The far swords streak away.
    - A 2 px cyan rim flickers on her as the blades pass.
  - **f2311–f2315:** the pinned impacts flicker behind her as tiny cyan stars along the vortex.
  - **f2315:** the halo reloads; swords rise into frame at the edges.
- **Camera:** punch S on f2309; 3 %/s push; a 4 px drift up.
- **Grade / R:** R 0.66 → 0.655 (f2311–f2315).
- **Out:** hard cut on beat 2, f2320.
- **Art:** N05-command (shown large: 930 px tall in frame), SW (shown large: the near swords pass the lens).

#### S05-25 · f2320–f2330 · 11 f · 77.33–77.67 s · bar 51.25–51.49
- **Music:** beat 2 at f2320 (77.34), volley 3; 8th at f2326. The fill starts at 77.72.
- **Lyric:** none (instrumental Drop 1).
- **Picture:** wide from further along the walkway at the same height, a three-quarter angle on BG05-walltop.
  - The vortex is now stitched with two rings of pinned swords; its rows sag and slow.
  - Her: 150 px at the centre.
- **Action:**
  - **f2320, volley 3:** 24 streaks.
  - **f2322:** they pin a third ring.
  - **f2323–f2326:** the pinned lines go black.
  - **The vortex slows** to half speed, its rows visibly caught.
- **Camera:** punch S on f2320; 2 %/s push; a 12 px drift right.
- **Grade / R:** R 0.655 → 0.65.
- **Out:** hard cut on the fill, f2331.
- **Art:** F-sword_finger, SW, BG05-walltop.

#### S05-26 · f2331–f2342 · 12 f · 77.70–78.07 s · bar 51.49–51.76
- **Music:** the fill (77.72–78.28), with 16ths at f2331, f2334, f2337 and f2340.
- **Lyric:** none (instrumental Drop 1).
- **Picture:** extreme close-up, a 2.2× crop of N05-command on her eyes and the raised sword-finger. The eye band fills the frame width, with the monocle near (1240, 520).
- **Action:**
  - **Rapid fire on every 16th**, one sword per hit streaking close past the lens (a 1-frame cyan streak 900 px long, out of focus):
    - f2331 from the left;
    - f2334 from the right;
    - f2337 from the left;
    - f2340 from the right.
  - **Each streak's light** sweeps across her face: a cyan band 120 px wide passing over the drawing in 2 frames.
  - **Her monocle** shows a tiny reticle flick on each hit.
- **Camera:** punch S on the 8ths, f2331 and f2337; 2 %/s push.
- **Grade / R:** R 0.65.
- **Out:** hard cut on f2343.
- **Art:** N05-command (shown large: a 2.2× crop).

#### S05-27 · f2343–f2353 · 11 f · 78.10–78.43 s · bar 51.76–52.00
- **Music:** fill 16ths at f2343, f2346 and f2348 (the fill ends at 78.28); the last 16th at f2351, into the bar 52 downbeat.
- **Lyric:** none (instrumental Drop 1).
- **Picture:** wide on BG05-walltop: the vortex pinned all over, the halo firing, and her small at the centre.
- **Action:**
  - **f2343, f2346, f2348, rapid fire:** groups of 3 swords per 16th, the firing point travelling clockwise round the halo.
  - **f2348, the shred:** every pinned line rips into ink ribbons that tear outward.
  - **f2348–f2352:** the pinned swords dissolve into cyan motes.
  - **f2350–f2353, 墨晕 ink bleed:** the torn ink blooms toward the lens and covers the frame from the edges inward. By f2353 only a cyan glint is left where she stood; she leaps off the wall inside the ink, unseen.
- **Camera:** punch S on the 8ths, f2343 and f2348; 3 %/s push.
- **Grade / R:** R eases 0.65 → 0.62 over f2348–f2353 (the bar 51 value).
- **Out:** the 墨晕 ink bleed into S05-28; the ink clears from her landing point at f2354.
- **Art:** F-sword_finger, SW, BG05-walltop.

### Phrase D · 逆流 Against the current · bars 52–55 · f2354–f2520

#### S05-28 · f2354–f2375 · 22 f · 78.47–79.17 s · bar 52.00–52.49
- **Music:** the bar 52 downbeat f2354 brings the groove back after the fill; snare at f2365 (78.84).
- **Lyric:** none (instrumental Drop 1).
- **Picture:** a track on the plain in side view, on BG05-plain.
  - **-far:** sky and horizon at y 600 with mist. On the right horizon, the storm-cloud bank glows red from inside: the 源 Source.
  - **-mid:** stelae and toppled pillars.
  - **-near:** wet stone ground, tiled.
  - **The streams (源 form, T):** rivers of request lines flowing right to left, from the source toward the breach: `GET / HTTP/1.1` · `GET /admin HTTP/1.1` · `POST /login HTTP/1.1` · `HEAD / HTTP/1.1` · `GET /gate HTTP/1.1`. They run at three depths:
    - far: 14 px, slow;
    - mid: 28 px;
    - near: 64–96 px, fast and blurred, passing low in front of her.
  - **Speed-line background:** horizontal ink-brush bands sliding left over -far at 40 %.
  - **Her:** F-dash, 280 px, feet (800, 900).
- **Action:**
  - **f2354–f2357:** the ink bleed clears outward from her landing point.
  - **f2354:** F-dash lands with a 12 % squash, recovering over 4 frames, plus an ink ring and a splash on the wet stone.
  - **f2360, footstep:** a cyan ring and a splash.
  - **f2361:** a near stream lifts off the ground and comes at her chest head-on.
  - **f2365, the stream:**
    - After smear f2364: F-cut_down at (960, 900). The stream splits at its head, (1120, 740).
    - Hit-stop 2 (f2365–f2366).
    - The stream forks above and below her; the cut glyphs die f2367–f2372.
  - **f2371:** a footstep ring as she skids in cut_down.
- **Camera:**
  - Track right at her speed. Parallax: -far 5 %, -mid 30 %, -near 100 %.
  - 1.5 %/s push; shake S on f2365.
- **Grade / R:**
  - R 0.62 → 0.615 (f2372).
  - Out here the red lives in the sky toward the source (a gradient strongest on the right horizon) and in the streams.
- **Out:** hard cut on beat 3, f2376.
- **Art:** BG05-plain (new), F-dash, F-cut_down.
  - **BG05-plain** (new): 2560×1440, side view at chest height.
    - Prompt (after the §5 anchor): "A vast flat plain outside a city wall at night, side view at the chest height of a small figure. Dark wet stone ground with shallow sheets of water reflecting the sky, faint cyan grid lines buried under the ink wash like old circuit traces, scattered broken stone stelae and toppled pillars with blank faces. A low misty horizon at 55 % of the frame height; on the right the sky darkens into a towering storm-cloud bank on the horizon; storm clouds overhead; rain. No text."
    - Layers:
      - `-far`: sky, horizon and cloud bank;
      - `-mid`: stelae and pillars, on magenta;
      - `-near`: a ground strip with puddles, on magenta, painted to tile left to right; code joins the copies with a 200 px cross-fade.
    - Code lights the cloud bank red.

#### S05-29 · f2376–f2398 · 23 f · 79.20–79.93 s · bar 52.49–53.00
- **Music:** kick at f2376; snare at f2388 (79.59); the 8th at f2393 into bar 53.
- **Lyric:** none (instrumental Drop 1).
- **Picture:** three-quarter-front tracking.
  - The camera sits ahead of her and to the right, dollying back and looking back toward the city.
  - Behind her is BG05-lookback, defocused 3 px: the long wall on the horizon, with the breach where the streams pour in and the skyline beyond, the central tower BG-tower standing over it.
  - Streams fly from behind the camera, past the lens, toward her, and on past her into the distance toward the breach.
  - Her: F-dash, growing 360 → 440 px as she gains on the camera, centred near x 860.
- **Action:**
  - **f2376:** after smear f2375, F-dash, feet (860, 1000); she runs at camera-right.
  - **f2382, footstep:** a cyan ring.
  - **f2383:** a stream `HEAD / HTTP/1.1`, repeated, comes over the camera's shoulder straight at her face.
  - **f2388, snare:**
    - After smear f2387: F-cut_up at (940, 1000). She cuts the stream at (1080, 560).
    - Hit-stop 2 (f2388–f2389).
    - The halves peel over her head and past the lens, huge and blurred; they die f2390–f2395.
  - **f2393, footstep:** a cyan ring.
- **Camera:** a dolly back, slower than her; punch S and shake S on f2388.
- **Grade / R:**
  - R 0.615 → 0.61 (f2395).
  - The city's signboards behind her show visibly fewer red rows.
- **Out:** hard cut on the bar 53 downbeat, f2399.
- **Art:** BG05-lookback (new; BG02-firewall and BG-tower attached), F-dash, F-cut_up.
  - **BG05-lookback** (new): 2560×1440, long lens at chest height, looking back at the city. Also used in S05-35.
    - Why not BG02-firewall itself (ruling G3, reuse where it fits): BG02-firewall sees the outer face close up at parapet height, with no plain in front of it. These two shots need the wall as a thin band across the whole far horizon behind a wide, wet plain, so the plate stays new.
    - It is the same wall and city: generate it with **BG02-firewall attached** (the same outer face, parapet and two-storey gate tower; the breach right of the gate tower, where S02-23 opened it) and **BG-tower attached** (ruling G2: the central tower BG-tower, attached).
    - Prompt (after the §5 anchor): "Looking back across a vast flat plain toward a great walled city at night, long-lens view at the chest height of a small figure. In the distance the long dark city wall crosses the frame on the horizon at 60 % height, compressed and looming, the same wall and gate tower as in the attached picture: a gatehouse on the left and, right of centre, a ragged breach, an open gap with torn edges glowing cyan. Behind the wall, the cyber-wuxia skyline of pagodas, upturned eaves and megastructures with holographic lanterns and blank glowing signboards; rising behind the breach, the attached central tower, far taller than everything around it, its needle tip well below the top edge. The plain in front is dark wet stone with sheets of water reflecting the city's glow, a few broken stelae. Storm sky; rain. No text."
    - Layers:
      - `-far`: skyline, the central tower and sky;
      - `-wall`: the wall with the breach, on magenta, so code can type bricks into the gap;
      - `-ground`: the plain, on magenta.

#### S05-30 · f2399–f2420 · 22 f · 79.97–80.67 s · bar 53.00–53.49
- **Music:** the bar 53 downbeat f2399; 8ths at f2410 (80.34) and f2416 (80.528).
- **Lyric:** none (instrumental Drop 1).
- **Picture:** a wide side view on the plain (BG05-plain, 0.9×).
  - The source cloud bank towers on the right horizon. Its core — the 源 eye, a dome of packed `GET / HTTP/1.1` lines so dense it glows — sits just inside the right edge at (1760, 820).
  - Three streams fall from the cloud bank as red pillars of text and then run left along the ground:
    - pillar A, the nearest: x 640, 220 px wide, from the top edge down to the ground at y 930;
    - pillar B: x 1000, 160 px, ground at y 890;
    - pillar C: x 1340, 120 px, ground at y 860.
  - Her: F-low, 200 px, feet (330, 910).
- **Action:**
  - **f2399, anticipation:** F-low; she skids in from the left (a 60 px skid, ink spray off her boots), 8 % squash, pulled 16 px back. She holds f2399–f2408, a beat of anticipation.
  - **f2409, smear:** she vanishes; streak 1 runs from (380, 800) to (850, 780) through pillar A.
  - **f2410, issen 1:** F-issen at (850, 905). Pillar A gets a hairline; 3 cyan multiples fade over 4 frames.
  - **f2415, smear:** streak 2 runs from (900, 780) to (1180, 820) through pillar B.
  - **f2416, issen 2:**
    - F-issen at (1180, 885). Pillar B gets a hairline.
    - The issen-1 copy stays at (850, 905) as a cyan afterimage, fading over 6 frames (f2416–f2421). This is the only time two of her are on screen, and the tint marks the copy as an effect.
  - **f2420, smear:** streak 3 leaves her toward pillar C.
  - **No hit-stops on the issens.**
- **Camera:** wide; 2 %/s push; shake S on f2410 and f2416.
- **Grade / R:** R 0.61.
- **Out:** hard cut on the hit, f2421.
- **Art:** BG05-plain, F-low, F-issen.

#### S05-31 · f2421–f2443 · 23 f · 80.70–81.43 s · bar 53.49–54.00
- **Music:** beat 3 at f2421 (80.715); the snare at f2433 (81.09); beat 4.
- **Lyric:** none (instrumental Drop 1).
- **Picture:** side medium (her 420 px), BG05-plain defocused 3 px.
  - Her: F-issen at the right, feet (1160, 1000).
  - Behind her on the left: pillar C, nearest, with its hairline glowing; B and A further back and smaller, also cut.
- **Action:**
  - **f2421, issen 3:** F-issen appears at the end of streak 3. Pillar C gets its hairline; 3 cyan multiples trail; no hit-stop.
  - **f2422–f2432, the hold:**
    - She keeps the drawing's smirk and drifts 16 px right.
    - Sparks crawl along the three hairlines at 30 px/frame.
    - The pillars hang stunned mid-fall while the rain keeps falling.
  - **f2433, snare:**
    - Large flash #4 of the part: the three hairlines flare white and the frame takes one frame of paper at 40 %.
    - Hit-stop 3 (f2433–f2435).
  - **f2436–f2439:** the pillars' upper sections slide down along the cuts, 30–60 px.
  - **f2440:** all three collapse into ink waterfalls behind her. Four out-of-focus blots cross the lens over f2440–f2443. She never looks back.
- **Camera:** 2 %/s push; punch M and shake S on f2433.
- **Grade / R:** R eases 0.61 → 0.59 over f2436–f2443.
- **Out:** hard cut on the bar 54 downbeat, f2444.
- **Art:** BG05-plain, F-issen.

#### S05-32 · f2444–f2471 · 28 f · 81.47–82.37 s · bar 54.00–54.62
- **Music:** the bar 54 fill, with hits at f2444 (81.47), f2450 (81.65) and f2461 (82.03).
- **Lyric:** none (instrumental Drop 1).
- **Picture:** the ascent, on BG05-ascent (scaled to 1920×2560 and scrolling).
  - Below: the plain, with the source's cloud bank towering on the right, lit red from inside. Streams pour from its flank toward the lower left, toward the far wall.
  - Above: the huge moon, PR06-moon composited on BG05-ascent's sky, pale and graded by R toward cinnabar — the red moon.
  - Her: F-leap, 260 px.
- **Action:**
  - **f2444, takeoff:** after smear f2443, F-leap at (900, 820), rotated −20°, nose up. An ink ring and a splash burst on the ground below.
  - **f2444–f2461, the rise:**
    - The camera rises with her: she stays near y 560 while the plate scrolls 1100 px down (ease-out).
    - Her rotation eases from −20° to 0°.
  - **f2450:** she bursts through a canopy of thin `GET /` streams crossing the sky. The lines snap round her like a bead curtain and scatter red glyphs; no swap.
  - **f2461, the apex:**
    - She becomes a silhouette: code fills her drawing ink-black with a 3 px cyan rim.
    - She is centred on the moon's disc (PR06-moon), 1100 px across, centred at (960, 470).
    - The source's core flares red below-right.
  - **f2461–f2471, the hang:**
    - She drifts 6 px and her rotation tips 0° → +12° as she starts to tip forward.
    - The rain keeps falling: this is not a hit-stop.
- **Camera:** rises with her (a tilt-track up); at the apex, a 3 %/s push and a +2° roll.
- **Grade / R:**
  - R 0.59; the moon is graded 59 % toward cinnabar.
  - Contrast rises at the apex for the silhouette. The moon is not a flash.
- **Out:** hard cut on f2472 (82.40), the dive.
- **Art:** F-leap (silhouette treatment by code), BG05-ascent, PR06-moon (shown large: the disc 1100 px across, larger than its 1024 px source; generate it at 2048 or upscale for this shot).

#### S05-33 · f2472–f2488 · 17 f · 82.40–82.93 s · bar 54.62–55.00
- **Music:** the fill hit at f2472 (82.40); the roll 82.50–82.87, on 16ths f2475, f2478, f2481, f2483 and f2486.
- **Lyric:** none (instrumental Drop 1).
- **Picture:** the dive.
  - The lower part of BG05-ascent races up past the frame. The source's core rushes toward the lens from the lower right: a dome of packed red request lines with streams pouring out of it.
  - Radial ink speed lines converge on the core.
- **Action:**
  - **f2471, smear:** the silhouette flips nose-down as a cyan swept shape.
  - **f2472:** N05-dive_R at (820, 480), 240 px, back in full colour: cinnabar underlight from the core and a cyan rim. It is rotated +10° so the blade points at the core.
  - **f2472–f2488, the dive:** she dives along the line to the core. Her stretch eases to 1.10 along the dive axis and 0.92 across by f2478, then holds.
  - **On each roll 16th** (f2475, f2478, f2481, f2483, f2486):
    - a cyan afterimage drops off her, fading 0.45 → 0 over 6 frames;
    - the radial lines pulse thicker for 1 frame;
    - her wake tears a ring of glyphs off the core.
- **Camera:**
  - It follows her down.
  - Crash zoom f2479–f2488, 10 frames (0.33 s): from her 240 px up to 600 px, ending tight on her face and blade with the core filling the lower right.
  - Shake S builds over the last 4 frames, 2 → 6 px.
- **Grade / R:** R 0.59; the core's red light floods up into the frame.
- **Out:** hard cut on the stab, f2489.
- **Art:** N05-dive_R (new), BG05-ascent.
  - **N05-dive_R** (new): full body, square cell 512 → ×4. Faces right, diving toward the lower right; both hands, with the cybernetic right hand nearest the crossguard.
    - Prompt (with the shared sheet text): "Chibi Qianhang diving head-first toward the lower right: her body stretched in one straight diagonal line from her boots at the upper left to her hands at the lower right. Both hands grip the sword, the pearl-white cybernetic right hand nearest the crossguard, thrust ahead of her head with the blade pointing to the lower-right corner. Legs together, toes pointed. The ponytail, the ribbon tails, the wide left sleeve and the sword's red tassel stream straight back toward the upper left. Fierce open-mouthed shout, eyes on the target ahead. Do not mirror the character. No text."
    - Replaces the fight design's "F-leap rotated nose-down"; reusable for Drop 2's dives.

#### S05-34 · f2489–f2510 · 22 f · 82.97–83.67 s · bar 55.00–55.49
- **Music:** bar 55's stab figure: f2489 (82.965), f2497 (83.246), f2506 (83.528). The fourth stab, f2511, opens the next shot.
- **Lyric:** none (instrumental Drop 1).
- **Picture:** side medium-wide at the source, on BG05-plain.
  - **-far:** a low horizon, with the cloud bank filling the top half (code: churning, lit red).
  - **-mid:** one broken stela at the left.
  - **-near:** wet ground.
  - **The 源 core (code):** a dome of packed `GET / HTTP/1.1` lines, 760 px wide and 520 px tall, its base on the ground at y 900, centred at x 1000. At its densest the glyphs are pure light. Streams pour from its left flank toward the left edge: toward the breach, far behind the camera.
  - **Her:** 240 px.
- **Action:**
  - **f2489, stab 1:**
    - F-cut_down, feet (700, 640). She arrives from the dive on the dome's upper-left shoulder.
    - The blade leaves hanging cut 1, a "\" across the dome from upper left to lower right, through the core point (1000, 760). It glows white and cyan with sparks crawling along it, and nothing breaks.
    - Hit-stop 2 (f2489–f2490).
  - **f2491–f2495:** follow-through, a 20 px drift down-right, then a 2-frame hop down to the dome's foot.
  - **f2497, stab 2:**
    - After smear f2496: F-cut_up, feet (760, 900), on the ground at the foot.
    - Hanging cut 2 is a "/" through the same core point.
    - Hit-stop 2 (f2497–f2498).
  - **f2505, smear:** she vanishes; the streak runs straight through the core along y 760, from (800, 760) to (1460, 760).
  - **f2506, stab 3:**
    - F-issen, feet (1470, 900), beyond the dome.
    - Hanging cut 3 is a horizontal "—" through the core. Two cyan multiples trail.
    - Hit-stop 1 (f2506).
  - **The asterisk:** the three hanging lines cross at the core and form an asterisk `*`, the wildcard: the Enter will apply to everything. The core churns while the lines stay fixed, and sparks crawl outward along all six arms.
  - **f2507–f2509:** follow-through, 10 px right and 8 px up as she starts to rise from the lunge.
  - **f2510, smear:** a 1-frame cyan silhouette rising to standing as the sword swings point-down.
- **Camera:** a 120 px track right over the shot; punch S on f2489 and f2497, punch M on f2506; shake S on each stab.
- **Grade / R:** R 0.59; the core's cinnabar dominates, with her cyan rim from the blade.
- **Out:** hard cut under IF #3 on f2511, to the reverse.
- **Art:** BG05-plain, F-cut_down, F-cut_up, F-issen.

#### S05-35 · f2511–f2520 · 10 f · 83.70–84.00 s · bar 55.49–55.71
- **Music:** the last stab, f2511 (83.715), and its ring-out. The snare at 84.09 (f2523) falls in Part 06.
- **Lyric:** none (instrumental Drop 1). Part 06's first character, 有, falls at f2522.
- **Picture:** the reverse. The camera is beyond her on the plain, on a long lens at her chest height, looking back toward the city on BG05-lookback.
  - **-far:** the city skyline under the storm, with the central tower BG-tower rising behind the breach, its needle tip near (1350, 240), clear of her and of the watermark corner.
  - **-wall:** the firewall on the horizon, base at y 700 and top at y 560; the breach is a gap at x 1250–1450.
  - **-ground:** the plain's wet stone, reflecting the city.
  - **The core (code):** behind her on the left, a dome spanning x 320–940 (base y 760, top y 300), with the asterisk cut glowing on it. The streams flow from its base away from the camera, across the plain, converging on the breach.
  - **Her:** F-enter, 520 px, feet (1000, 1010). She faces us, the core and the city at her back, the sword planted before her.
- **Action:**
  - **f2511:** F-enter, planted. IF #3 (83.715, on the film's list) runs f2511–f2512:
    - f2511, three tones: ink ground; her silhouette paper with an ink rim; the ⏎ crossguard a cinnabar shape at her waist; the asterisk on the core behind her in cinnabar; the far wall a paper line along the horizon with the breach as a cinnabar notch; 32 radial paper brush lines from the crossguard across the whole frame. Drawn 6 px low: the key down.
    - f2512, the negative: paper ground, ink silhouette and lines, cinnabar kept; drawn 3 px low.
  - **Hit-stop 6 (f2511–f2516).** From f2513 the real image is frozen:
    - the crossguard flares with a white-hot core and a 160 px bloom;
    - the asterisk burns white-hot on the core;
    - rain and ink hang;
    - the frame springs back from the dip: −1 px at f2513, 0 at f2514.
  - **f2517, release:**
    - The asterisk detonates: the core splits into six wedges along the cuts and bursts into a giant ink plume rising behind her, its blots arcing up and over.
    - The keypress ripple runs out from her sword point across the plain, a flat ring 80 → 1500 px wide by f2520.
    - Every stream goes to ink in sequence from the core toward the wall: a black fuse runs away from us down every river of text and reaches the breach on f2519.
  - **f2519–f2520, the seal:**
    - Cyan bricks type themselves into the breach row by row from the bottom, 3 rows per frame, each brick reading `DROP`.
    - The keystone brick at the top types `COMMIT` on f2520.
    - The parapet's cyan crest line now runs unbroken across the former gap, with a small cyan bloom at the breach (not a large flash).
  - **f2518–f2520:** ink starts to fall round her; the first blots pass in front of her on f2519–f2520. She stands with eyes half closed and a calm smile, breathing.
- **Camera:**
  - Punch L on f2511, +8 % over the IF frames, easing back over f2513–f2516.
  - Otherwise frozen through the hit-stop, apart from the dip.
  - From f2517, a pull back from 1.00 to 0.95 by f2520 reveals more of the plain and the wall; it is still moving at f2520 and eases on to 0.92 by f2542 in the render Part 06 nests (State out). No shake: stillness after the stab.
- **Grade / R:** R eases 0.59 → 0.55 over f2517–f2520 (the bar 55 value). The skyline's boards lose their lower red rows and the sky's cinnabar lifts.
- **Out:** the part ends at f2520; Part 06 owns the cut at f2521, into the CRT. This scene keeps rendering to f2542 as the replay on Part 06's CRT glass (ruling G6 05→06; see State out).
- **Art:** BG05-lookback (BG02-firewall and BG-tower attached), F-enter.

**Ledgers** (for the choreography tables, fight-design §2.5)
- **Swaps:**

  | Frame | Drawing |
  |---|---|
  | f1814 | F-cut_up |
  | f1859 | F-cut_down |
  | f1870 | F-cut_up |
  | f1881 | F-cut_down |
  | f1893 | F-cut_up |
  | f1904 | N05-glance (panel) |
  | f1926 | F-low |
  | f1938 | F-issen |
  | f1960 | F-dash |
  | f1971 | N05-wallrun_R |
  | f1994 | F-dash |
  | f2005 | F-cut_down |
  | f2016 | F-dash |
  | f2028 | F-cut_down |
  | f2039 | F-cut_up |
  | f2050 | F-dash |
  | f2061 | F-cut_down |
  | f2073 | F-dash |
  | f2095 | F-cut_up |
  | f2106 | F-cut_down |
  | f2118 | F-dash |
  | f2123 | F-leap |
  | f2129 | F-cut_down |
  | f2137 | F-cut_up |
  | f2146 | F-issen |
  | f2151 | F-enter |
  | f2153 | N05-enterhands (insert) |
  | f2174 | F-back |
  | f2185 | F-cut_down |
  | f2196 | F-cut_down_l |
  | f2208 | F-cut_down |
  | f2219 | F-low |
  | f2230 | F-spin |
  | f2253 | F-low |
  | f2264 | F-sword_finger |
  | f2286, f2309, f2331 | N05-command (close-ups, alternating with F-sword_finger wides) |
  | f2354 | F-dash |
  | f2365 | F-cut_down |
  | f2376 | F-dash |
  | f2388 | F-cut_up |
  | f2399 | F-low |
  | f2410, f2416, f2421 | F-issen |
  | f2444 | F-leap (silhouette f2461–f2471) |
  | f2472 | N05-dive_R |
  | f2489 | F-cut_down |
  | f2497 | F-cut_up |
  | f2506 | F-issen |
  | f2511 | F-enter |

  That is about 48 pose changes in 23.6 s. The fastest spacing is 5 frames (f2146 → f2151 and f2506 → f2511, an 8th), never faster.
- **Hit-stops:**

  | Frame(s) | Hit-stop |
  |---|---|
  | f1814 | 6 |
  | f1859, f1870, f1881, f1893 | 2 each |
  | f1938 | 3 |
  | f2005, f2028 | 2 each |
  | f2039 | 3 |
  | f2061, f2095, f2106 | 2 each |
  | f2129, f2137 | 2 each |
  | f2146 | 1 |
  | f2151 | 6 |
  | f2185, f2196, f2208 | 2 each |
  | f2433 | 3 |
  | f2489, f2497 | 2 each |
  | f2506 | 1 |
  | f2511 | 6 |

  Every stop ends before the next swap, so all swaps land on their own beat frames.
- **Impact frames and large flashes:**

  | # | Frames | What |
  |---|---|---|
  | IF #1 | f1814–f1815 | the tide split |
  | Flash 2 | f2067–f2068 | the sword-qi crescent passing the lens |
  | IF #2 | f2151–f2152 | Enter combo #2 |
  | Flash 3 | f2230 | the whirlwind |
  | Flash 4 | f2433 | the triple-issen split |
  | IF #3 | f2511–f2512 | Enter combo #3 |

  - The closest pair is 78 frames apart (2.6 s), and no second holds more than one.
  - Cut edges, streaks, rings, glints and the breach bloom are lines or small areas and are not counted.
  - The previous impact frame on the film's list is 劈 at f1600; the next is IF 130.965 in Part 09.
- **R:**

  | Frame(s) | R |
  |---|---|
  | f1820–f1827 | 0.80 → 0.78 |
  | through f1899 | darts → 0.77 |
  | f1949–f1966 | → 0.74 (bar 43) |
  | through f2113 | spikes, bug, row, debris → 0.72 |
  | f2158–f2170 | → 0.68 (bar 47) |
  | through f2322 | tendrils, ring, volleys → 0.65 |
  | f2348–f2353 | → 0.62 (bar 51) |
  | f2372, f2395 | → 0.61 |
  | f2436–f2443 | → 0.59 |
  | f2517–f2520 | → 0.55 (bar 55) |

**State out (f2520 → Part 06 at f2521)**
- **Her:**
  - She stands in F-enter at medium-full size (520 px, feet (1000, 1010)), facing us, on the plain beyond the source.
  - Her sword is planted before her and its ⏎ crossguard is still glowing. Her eyes are half closed, with a calm smile.
- **Behind her:**
  - The source core has just burst into a rising ink plume; its biggest blots are mid-air and would land on 84.09 (f2523).
  - Every `GET` stream has turned to ink along its whole length.
  - On the horizon, the firewall is sealed: the breach is filled with cyan `DROP` bricks, keystone `COMMIT`.
  - The city skyline beyond shows fewer red rows.
- **World:**
  - R 0.55. The rain is falling again, and the keypress ripple is still spreading across the plain.
  - No red text is left near her (Part 06 adds its `DeprecationWarning` line on her blade from f2522).
- **Camera:** long lens at her chest height, mid-way through a pull back (scale 0.95 and still moving).
- **Last large flash:** IF #3 at f2511–f2512. The next large flash may come no earlier than f2523.
- **The scene keeps rendering to f2542** (ruling G6 05→06). Part 06's S06-01 shows this composition on its CRT glass from f2521, with time running on, so S05-35 is built to keep playing past the part's end:
  - f2521–f2542: she holds F-enter, eyes half closed, breathing ±1.2 %. Her blade stays clear of effects so Part 06 can add its own: the `DeprecationWarning` line typing along the blade from f2522 and the rust at the crossguard from f2540.
  - f2523 (the snare, 84.09): the plume's biggest blots land round her as ink stains, in step with Part 06's CRT jolt. Ink keeps falling in front of and around her through f2542.
  - The keypress ripple spreads on from 1500 px to past both frame edges and fades out by f2530.
  - The breach's small cyan bloom fades over f2520–f2524. The sealed `DROP` / `COMMIT` bricks and the unbroken crest line hold, and the skyline's boards keep their reduced red.
  - The rain falls; R holds 0.55.
  - The camera eases on from 0.95 to 0.92 by f2542, with no shake and no punch.
  - No flash of any size in the render from f2521 to f2542, so nothing large comes before f2523.
  - Part 05 draws no lyric; Part 06's L1 plate starts at f2521.

**Art in this part**
- **Fight drawings (registry):** F-low, F-dash, F-leap, F-issen, F-cut_down, F-cut_up, F-enter, F-sword_finger, F-back, F-spin, F-cut_down_l.
- **Sword sprite (registry):** SW, used for the formation.
- **Fight-design drawings not used here:**
  - F-face, replaced by N05-glance for the lock-on, because F-face looks away from the targets;
  - F-landing, F-charge, F-chop, F-thrust, F-guard, F-blasted, F-dash_l.
- **New drawings:**
  - **N05-glance** (S05-05): bust, three-quarter left, eyes cut right, no sword.
  - **N05-wallrun_R** (S05-07): full body, right / up-right, cybernetic right hand.
  - **N05-enterhands** (S05-15): front insert of both hands on the pommel and the ⏎ crossguard.
  - **N05-command** (S05-22, S05-24, S05-26): half body, front, left-hand sword-finger.
  - **N05-dive_R** (S05-33): full body, diving to the lower right, both hands.
- **New backgrounds:**
  - **BG05-breach** (S05-01, S05-02): 2560, layers -far, -wall, -near. The firewall from inside; kept instead of BG02-wallinside because it needs the wall top and the sky above it (S05-01's Art says why); generated with BG02-wallinside, BG02-firewall and PR02-lantern attached.
  - **BG05-gap** (S05-03 to S05-06): 2560, layers -far, -mid, -near.
  - **BG05-ascent** (S05-07, S05-32, S05-33): 1536×2048, layers -sky, -low. No painted moon: PR06-moon is composited.
  - **BG05-crest** (S05-08 to S05-12): 2560, layers -sky, -horizon. BG-tower attached; no painted moon: PR06-moon is composited.
  - **BG05-walltop** (S05-14 to S05-27): 2560, layers -far, -wall, -near. Kept instead of BG02-walltop because its view differs: a side view looking outward over the outer parapet, where BG02-walltop looks inward and down into the city (S05-14's Art says why); generated with BG02-firewall and PR02-lantern attached.
  - **BG05-plain** (S05-28, S05-30, S05-31, S05-34): 2560, layers -far, -mid, -near (tiling).
  - **BG05-lookback** (S05-29, S05-35): 2560, layers -far, -wall, -ground. BG02-firewall and BG-tower attached; BG02-firewall itself does not fit (S05-29's Art says why).
- **Shared art from other parts (rulings G2, G3):**
  - **PR06-moon** (Part 06): the moon in S05-07, S05-08 and S05-32, composited in screen mode and graded toward cinnabar by R. Shown large in S05-32 (disc 1100 px).
  - **BG-tower** (Part 08's definition): attached to BG05-crest and BG05-lookback, where the city shows on the horizon.
  - **BG02-firewall, BG02-wallinside** (Part 02): attached as references so the wall, its bricks and its gate tower are the same wall Part 02 built and broke. BG02-walltop is not used (no shot here looks into the city).
  - **PR02-lantern** (Part 02): attached to BG05-breach and BG05-walltop for the toppled lantern.
- **Carried over from Part 04 (code, lyric layer):** the 「哼，就这点报错？」 bubble, held to f1829 and broken into ink over f1830–f1835 (S05-01).
- **Generation:**
  - N05-wallrun_R and N05-dive_R fit one 3:2 sheet with two square cells.
  - N05-glance and N05-command are half-body generations: two upright cells on one 3:2 sheet, or 1536×2048 each.
  - N05-enterhands is its own 1536×1024 generation.
  - About 3 generations for the drawings and 7 for the plates.
- **Code only (no art):**
  - the tide, darts, bugs, foam spikes, the tube (three.js glyph tunnel), the vortex and its tendrils, the streams, pillars and source core;
  - all cuts, arcs, smears, sparks, ink and stains;
  - the HUD, the panels and gutters;
  - the brick words and the breach seal;
  - the rain and the silhouette treatment.
