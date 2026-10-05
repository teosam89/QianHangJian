## Part 07 · Pre-Chorus 2 and Chorus 2 · f3147–f3703

Sixteen shots in one @remotion/three canvas, the city at R 0.45 built from painted cards in 3D so the camera moves have real parallax.
**Pre-Chorus 2** stays on part 06's keycap under the PASS lanterns: B5 with the reforged blade, two bullet-time orbits; the rain freezes on 万 (f3193), and on 定 (f3296, B6) every hanging drop turns cyan and becomes a sword, so the formation is born from the frozen rain (the same birth as Pre-Chorus 1's, a deliberate rhyme on the same music).
**Chorus 2** escalates Chorus 1 threefold: 3,000 swords (Chorus 1: 1,000 plain swords), each trailing a line of real code (千行 made literal), 9,000 in the snow (Chorus 1: 3,000) and a 120 m giant sword (Chorus 1: about 40 m). The 3,000 fly a circuit of the half-cyan city through five stations: the Night Curtain (破, F-thrust at the lens), the Signboard Canyon (斩), the Old Quarter Roofs (落如雪, roof leaks pinned), the Root Altar (江湖 as a river and a lake, `whoami` → `root`, the line of code) and the sky above it.
There the giant sword cleaves the Red Canopy and the city on 劈 (f3670); R 0.45 → 0.35, and part 08 wipes along the 劈 line at x 960.

### Pre-Chorus 2 · f3147–f3324 · Station 0, the test street

**One canvas for the part.** The whole part runs in one @remotion/three canvas (f3147–f3703).
- **World axes.** World units are metres: +X east, +Y up, −Z north.
- **Her plane.** Her sticker plane is 1.5 m tall and yaw-locked to the camera. She faces the lens whatever the orbit does, and the flat plane never shows its edge.
- **Camera height.** The camera sits at her chest (feet + 0.8 m) unless a shot says otherwise.
- **Red text.** Every red string in this part (the boards, the Night Curtain, the banner, the roof leaks, the Red Canopy) is a real error message, a stack-trace row, a plain HTTP request line or a status code, for example `TypeError: Cannot read properties of undefined`, `at recurse (jianghu.js:42:7)`, `GET /admin HTTP/1.1` or `502 Bad Gateway`. There are no attack strings anywhere.

**Station 0, the test street.** This is part 06's test street, seen differently.
- **The street.** It runs north–south, 16 m wide (facades at x ±8, four storeys, about 18 m), from its pagoda gate at z 100 (BG06-teststreet `-far`) to z 300.
- **The keycap.** PR02-enterkey (the film's one giant Enter keycap, as part 06 raised it) stands mid-street at (0, 0, 200), its top 2.4 m up. She stands on its top, feet at (0, 2.4, 200), chest at y 3.2.
- **The lanterns.** The eight PR02-lanterns (part 06's test runner; code fills their six panels) hang from the centre wire at 6.5 m, spaced 20 m: #1 at z 260 down to #8 at z 120. #4 hangs 2 m over her head, #5–#8 recede north toward the gate, and #1–#3 are behind a south-facing camera.
- **Built in 3D.** The street is built for the orbit from facade cards, a paving plane, the keycap as a textured extrusion, and the gate card.

**The reforged blade** is part 06's code treatment (S06-16): engraved code runs up the clear glass as cyan current, the ⏎ edge light is bright, and a 40 px bloom hugs the blade. Part 07 raises it one step, for "the brighter code glow":
- the current runs 1.5× faster and 1.4× brighter;
- a 1 px white core lines both edges;
- the bloom grows to 56 px.

The step applies to her own blade in every drawing and to every formation sword.

#### S07-01 · f3147–f3237 · 91 f · 104.90–107.90 s · bar 69.6–71.6
- **Music:** the vocal pickup 电流穿过 comes over the end of Verse 2's bar 69, where the band builds into the Pre-Chorus (beat 4 f3153). The bar 70 downbeat (f3164) is where the sub drops out (22.7 dB against 34.5 in the verse) and the harmony leans to C♯ minor. Then come beats f3175, f3186 and f3198, the bar 71 downbeat f3209 (静), and beats f3220 and f3231. The vocal is low and soft.
- **Lyric:** 「电流穿过 万籁俱静」 电 f3148 · 流 f3154 · 穿 f3161 · 过 f3164 · 万 f3193 · 籁 f3197 · 俱 f3204 · 静 f3209.
  - Font: 得意黑 64 px in paper #EDE4D3, centred on one row (x 688–1232, baseline y 990).
  - Plate: a thin ink-wash band, ink #0B0B10 at 55 % with feathered ends, x 600–1320, y 918–1006. It fades in over f3147–f3150.
  - Entry: each character fades in over 4 f, starting 1 f before its sung frame (电 f3147–f3150 … 静 f3208–f3211). There is no slam.
  - Idle: until 万 the shown characters drift 1 px; from 万 they freeze with the rain.
  - Accent: 静 lands a shade greyer (paper at 80 %).
  - Exit: at f3236 the line shrinks to 70 %, lifts to y 830–890 and fades out over f3236–f3245.
- **Picture** (back to front, one WebGL scene):
  - **Sky:** BG06-stormsky `-far` as the overcast ceiling plane at 600 m, lit cyan from below over the street, as part 06 left it.
  - **Gate:** BG06-teststreet `-far` as the far card at z 100.
  - **Facades:** BG07-teststreet-west and BG07-teststreet-east as long planes at x ±8. Every signboard on them carries dense cyan text (code), as part 06 left the street. Beyond the roofs, the city's boards are about half red at R 0.45.
  - **Paving:** PR07-paving, wet, mirroring the cyan boards.
  - **Lanterns:** the eight PR02-lanterns, their panels lit cyan with `PASS` (part 06's test runner), swaying ±3°.
  - **Rain:** cyan-white, 60,000 streaks in a 16 × 30 × 160 m box along the street, falling 9 m/s on an 8° slant.
  - **Keycap:** PR02-enterkey under her, extruded in code as the tall ISO Enter L (the wider top part over the narrower lower part), 2.4 m tall. Its top is PR02-enterkey's top view, its sides are taken from PR02-enterkey (dark gunmetal, thin cyan light lines along the top edges), and code draws the ⏎ on its top as a vector path, as in part 02.
  - **Her:** **B5** vow, 619 → 760 px tall, centred at x 960, feet at y 880 → 900. Her face box is x 880–1040, y 300–480 at the start and y 180–410 by the end. The blade is upright on screen-left of her face, with the reforged glow.
- **Action:**
  - f3147: hard cut in on the vocal pickup. The orbit is already moving, carrying on part 06's leftward arc. Part 06's neon bloom carries over at its eased level and settles to 1.0 by f3159. Rain falls, the lanterns sway and the boards scroll their cyan text.
  - f3148 电: a cyan spark at her bare right shoulder (screen-left), with a 6 f crackle of tiny arcs.
  - f3154 流: the current runs down the upper-arm seams to the elbow (seam glow ×2.5, settling at ×1.6).
  - f3161 穿: the forearm seams light to the wrist. Lantern #5's PASS flickers once in answer.
  - f3164 过 (bar 70 downbeat, the sub drops out): the current enters the grip. The blade's code current flares from the ⏎ crossguard to the tip over f3164–f3169. The crossguard's edges light, and twelve cyan glyphs (`{` `}` `;` `=` `(` `)` `<` `>` `/` `*` `#` `$`) start a slow ring round the blade (0.2 rev/s).
  - f3175, f3186, f3198 (beats): the blade breathes +15 % on each beat.
  - f3193 万: **the rain freezes.**
    - Every streak eases from 9 m/s to 0 over f3193–f3196 and contracts into a 1.5 cm bead with a highlight.
    - The boards stop scrolling, and the lanterns stop mid-swing (#5 tilted 3°).
    - The camera does not stop: from here it is bullet time.
  - f3197 籁: **the colour drains**, saturation 100 → 25 % over f3197–f3209.
    - Only her arm seams, the blade, the monocle and the beads' highlights keep their cyan.
    - The lanterns' PASS goes grey-white, and the boards turn ash.
  - f3204 俱: the last moving thing, an ink drop falling from lantern #5's tassel, stops 20 cm below it.
  - f3209 静 (bar 71 downbeat): total stillness except the camera. The beads glint as the lens passes them (specular tied to the camera angle), and a band of glints sweeps across the frame with the orbit.
  - f3220, f3231 (beats): the blade breathes, the only pulse in the frame.
  - f3222–f3237: tiny `0` and `1` glyphs (JetBrains Mono, 4–8 cm, grey-white at 60 %) fade in among the beads, 200 → 1,200, drifting 2 cm/s.
- **Camera:**
  - **Orbit:** round her chest C = (0, 3.2, 200), level at chest height, with a lens shift of +0.12 so her head sits in the upper third.
  - **Path:** the azimuth φ, measured from due south, runs 0° → −40° at a constant 0.44°/f. The camera arcs to screen-left (clockwise seen from above), the same way as part 06's last drift.
  - **Background:** behind her it swings from the gate at the end of the street, with lanterns #5–#8 above her head, to the east facade 12 m away.
  - **Lens:** radius 3.8 → 3.1 m (ease-in-out), FOV 38°.
  - **Parallax:** beads at 0.5–3 m (fast), lanterns and wire at 3–80 m, facades at 8–14 m, gate at 100 m. No shake.
- **Grade / R:** R 0.45: the street fully cyan, the city beyond half red, the sky graded 45 % toward cinnabar beyond the roofs.
  - f3164: a cool shift, −10 % saturation over one bar, for the sub drop.
  - From f3197: desaturation to 25 % and paper grain +20 %, the frozen Pre-Chorus look. The cyan accents stay untouched.
- **Out:** hard cut on 零 f3238; the orbit reverses direction.
- **Art:** B5; PR02-enterkey; PR02-lantern; BG06-teststreet `-far`; BG06-stormsky `-far`.
  - **BG07-teststreet-west (new)** and **BG07-teststreet-east (new):** 2560×1440 each, generated with BG06-teststreet attached so they match. Prompt after the STYLE_BIBLE §5 anchor: "A straight-on elevation, with no perspective, of one side of a city main street at night: four storeys of shopfronts with upturned eaves on every storey fused with server-rack megastructure frames, lattice windows, cables, rows of blank glowing signboards both horizontal and vertical, neon only as thin edge lines on the eaves, wet. About 50 m of facade, 18 m tall, with magenta sky above the roofline. The left and right edges continue the same storeys so the plate tiles." West and east are two different facades. Code fills the boards.
  - **PR07-paving (new):** 2048×2048, a top-down tileable texture of wet stone street paving at night: long granite slabs, shallow puddles, thin cyan seams between the slabs. No text.
  - **PR02-enterkey, top view, an edit of PR02-enterkey (a new image; formerly PR07-keycap-top):** 2048×1024, generated with PR02-enterkey attached: "the top face of that same giant Enter keycap seen straight from above as a flat texture: the tall ISO Enter shape, an inverted L, its slightly concave, blank, paper-white top face framed by the dark gunmetal body's softly rounded rim, thin cyan light lines along the top edges. No legend, no text." Code extrudes the L-shaped key with this top and PR02-enterkey's sides, and draws the ⏎.

#### S07-02 · f3238–f3324 · 87 f · 107.93–110.80 s · bar 71.6–73.6
- **Music:** the Pre-Chorus's second phrase, from bar 71 beat 3 to bar 73 beat 3. The sub is still out and the band is thin. Beats fall on f3243, f3254 (bar 72), f3265, f3276, f3288, f3299 (bar 73), f3310 and f3321. 定 lands on f3296, just before bar 73, and the pickup 千行剑 follows on f3325.
- **Lyric:** 「零与一间 胜负已定」 零 f3238 · 与 f3244 · 一 f3249 · 间 f3254 · 胜 f3262 · 负 f3274 · 已 f3289 · 定 f3296.
  - Font, size, band and entry are as for the first line (x 688–1232, baseline y 990). The band fades in over f3236–f3239.
  - 零 to 已 are paper. **定 fades in cyan #19F0C8** with a soft glow on the frame every drop turns cyan, the line's only accent.
  - Exit: the whole line fades out over f3321–f3324, under the whip, after holding 0.8 s past 定.
- **Picture:** a macro shot.
  - **Foreground:** the frozen beads near the lens as bokeh discs (20–80 px), with the 1,200 `0`/`1` glyphs among them.
  - **Her:** **B5** (→ B6) at 1,600 px tall (the ×4 upscale at about 1:1), framed from the mid-chest up. Her face box is x 760–1160, y 250–700. The reforged blade stands upright on screen-left of her face (x 620–700), sharp.
  - **Behind her:** lanterns #4–#8 frozen as grey bokeh, and the ash-grey facades. Depth of field: focus on her eyes, with a bokeh pass on everything beyond 2 m.
- **Action:**
  - f3238 零: cut in. A single big `0` (120 px, in focus) drifts across the lens from left to right over 20 f.
  - f3243 (beat): the glyphs swirl a quarter-turn round the blade, drawn in by its code.
  - f3244 与: a `1` drifts past her monocle (screen-right), and the monocle's rim glints.
  - f3249 一: the glyphs begin to pair off.
  - f3254 间 (bar 72 downbeat): the glyphs hang as short binary strings, 8 glyphs each (`01101011`), like threads among the beads.
  - f3262 胜: every `1` brightens to paper white: true wins.
  - f3274 负: every `0` darkens to ink and sinks 5 cm: false loses.
  - f3276 (beat 3): the blade breathes.
  - f3289 已: the white strings turn and align radially, 24 of them, in a ring round the blade like a halo of code.
  - f3296 定: **B5 → B6** in place (the identical drawing; her eyes open with a sharp little smile).
    - A cyan reticle ring expands from her monocle (screen-right) to 160 px and fades over 8 f (code HUD, no numbers).
    - **Every frozen bead turns cyan at once.** The change races out from her at 13 m/f and covers the 40 m field in 3 f (f3296–f3298).
    - Saturation floods back 25 → 110 % over 6 f and settles at 100 % by f3310.
    - The lanterns' PASS flare cyan.
    - A cyan bloom pulse of +35 % exposure for 3 f (**large flash 1**).
  - f3299 (bar 73 downbeat): the ring of 1-strings dives into the blade, and the code current steps up again (×1.8).
  - f3305 (8th): the cyan beads stretch along the street axis, north–south, into slivers 1.5 → 12 cm long.
  - f3310 (beat 2): **the formation is born from the frozen rain.**
    - Every sliver within 30 m snaps into a tiny sword (SW instances, 0.4–1.2 m), tip north toward the gate.
    - The nearest 3,000 become the formation, and their code tails unroll behind them over 6 f.
    - The rest stay as cyan glints and fall as rain from f3344.
  - f3316 (8th): the swords tremble (±1°), straining north.
  - f3321 (beat 3): **whip pan**. The camera yaws 50° to screen-right in 4 f (f3321–f3324) with a directional brush blur in cyan-tinted streaks, and the cut to the launch hides in the blur.
- **Camera:**
  - **Counter-orbit:** the opposite way to S07-01, arcing to screen-right (counter-clockwise from above), radius 1.6 m round her vertical axis.
  - **Path:** φ −40° → +20°. Speed 0.75°/f, easing to 0.4°/f round 定 (f3290–f3300, the eyes opening are the still point) and back to 0.8°/f by f3318.
  - **Height and lens:** the camera stays level at her chest (y 3.2) with a lens shift of +0.32, so the frame centre sits on her eyes without tilting up. FOV 35 → 32°, a slow push by lens.
  - **Then:** the whip, f3321–f3324.
- **Grade / R:** 25 % saturation, cold, until 定. Colour floods back over f3296–f3301. By f3310 R 0.45 shows again: the street cyan, the city beyond half red. The swords and her seams are the brightest cyan in frame.
- **Out:** whip pan f3321–f3324, landing on 千 at f3325.
- **Art:** B5 and B6 (shown large, 1,600 px); SW (instanced); PR02-lantern.

### Chorus 2 · f3325–f3703 · the station journey

**The escalation over Chorus 1.** Chorus 1 (part 03) travels the dark data world over the firewall with 1,000 plain swords and no code tails (part 04 bursts its giant sword into the same 1,000), 3,000 in its snow and a giant sword of about 40 m. Chorus 2 triples each count, and the Final Chorus (part 11) is the peak: 10,000 code-trailing swords (this part's 3,000 stitches plus every sword planted on the ridges), 27,000 in the snow and a 300 m giant sword. Chorus 2 makes a circuit of the real, half-cyan city with a larger and brighter formation, and every line's set piece sits at its own station. Part 03 should avoid this part's moves, so the two choruses never share one:
- the orbit;
- the chase into a reverse shot;
- the dive with an FOV kick;
- the profile track;
- the pull-back;
- the crane down with snow;
- the crane-up reveal;
- the dolly zoom;
- the truck;
- the aerial push;
- the vertical climb;
- the dolly-out with a boom;
- the sword-tip insert;
- the punch with a crane back.

The central tower, **BG-tower** (the film's one central tower, as parts 08–12 use it), stands at (90, 0, −700), 118 m to the antenna tip (the scale part 11 stages its climb on), north-north-east of the altar. In this part it appears only in the distance, painted into the city plates BG07-city-aerial and BG07-city-level, which are generated with BG-tower attached; code places each plate so its painted tower sits at that world position.

| # | Station | Where (world m) | Sung | Set piece | Camera |
|---|---|---|---|---|---|
| 0 | Test Street | the keycap mid-street, she at (0, 2.4, 200); gate at z 100 | Pre-Chorus 2 | bullet time in frozen rain; drops → cyan → swords | two opposite orbits, whip |
| 1 | Night Curtain | a hanging scroll of red stack traces that unrolls on 千 at z 40 beyond the gate, x −150…150, from the overcast down to 10 m | 千行剑 破 | wedge formation; F-thrust through the curtain at the lens | chase rush; reverse; 180° whip |
| 2 | Signboard Canyon | a megastructure chasm x −15…15, from z 30 north to z −260, walls 180 m | 长夜 光速 斩尽红字劫 | dive; the formation overtakes; three tiers cut every red board | dive + FOV kick; profile track |
| 3 | Old Quarter Roofs | Verse 2's legacy quarter, x −320…−60, z −60…−260, roofs 8–14 m; she hovers at (−170, 60, −150) and lands at (−169, 14, −190) | 千行剑 落如雪 万般漏洞皆可解 | fork ×3; snow of swords; roof leaks pinned 1·3·9·27·243; cyan chain | pull-back; axial cut-in; crane down with the snow + truck |
| 4 | Root Altar | a three-tier round white-marble altar at the city centre (0, 0, −420), top tier 6 m, plaza r 70 m | 赛博江湖 谁做主 一行代码定生灭 | river (江) and lake (湖) of swords; armillary throne; `whoami` → `root`; one line of code; the west half swept cyan | crane-up reveal; dolly zoom; truck; aerial push + tilt |
| 5 | Above the Altar | 300 m over the altar on a raft of swords; the Red Canopy, a ceiling of red text at 480 m formed on 灭 | 千行剑 千行剑 一剑劈开数据界 | helix climb; giant sword 120 m; 劈 cleaves canopy and city along the line | vertical chase; dolly-out + boom; insert; punch + crane back |

**The formation in Chorus 2 (code).**
- **Sprite:** SW on an axial billboard: each sword turns about its own long axis to face the camera, so only its front face is ever shown and the ⏎ never mirrors.
  - Size: 1.2 m long in the formation (0.8× her height), 0.3–0.5 m in the snow.
  - Depth-sorted against her plane. All of them carry the reforged glow.
- **Code tails (new in Chorus 2):** each formation sword drags one line of real code behind it.
  - Type: JetBrains Mono, 0.12 m glyphs, 24–48 glyphs over 3–6 m, cyan #19F0C8 at 70 % fading to 0.
  - Lines are picked by hash from a pool of 64 lines of ordinary program code (no attack strings), for example `blade.edge = sharpen(kernel.v2);`, `while (red) cut(next(red));`, `assert(jianghu.ok());`, `return fix(err);` and `git commit -m "reforged"`.
  - Beyond 120 m a tail collapses to one tapered streak.
- **Counts:**
  - 3,000 (three ranks of 1,000) born from the frozen rain;
  - forked ×3 to 9,000 for the snow, then joined back to 3,000;
  - 3,000 nose to tail as the line of code (≈3.6 km);
  - fused into the giant sword: 120 m (80× her height), crossguard 18 m wide;
  - after 劈, all 3,000 planted along the scar as stitches, where they stay for the Final Chorus to raise.
- **Budget:** at most 9,000 sword instances, 150,000 glyph quads (tails, the curtain breach, vapour) and 60,000 rain beads.
  - The curtain and the canopy are scrolling text textures, except where they break.
  - The broken parts are rebuilt as instanced glyphs: a 30 m disc round the breach, and the cut edges.

**Chorus lyric slots** (志莽行书, kinetic, on the lyric layer composited after the post pass). All slots keep clear of x > 1560, y < 200, and keep the key words inside x 240–1680.

| Slot | Position | Size | Layout |
|---|---|---|---|
| A | upper left | 220 px | horizontal, cells x 260–480 / 480–700 / 700–920, y 110–330 |
| A′ | left column | 220 px | vertical, x 260–480, y 200–420 / 420–640 / 640–860 |
| B | right column | 220 px (破 260) | vertical, x 1430–1650, y 250–470 / 470–690 / 690–910 |
| C | bottom band | 170 px | seven cells from x 365 to 1555, y 830–1000 |
| D | top band | 260 px | x 440–1480, y 90–350 |

- **Entry:** a wet ink stroke paints in behind each phrase over 4 f, starting 2 f before its first character. Each character slams on its sung frame: it lands at 130 %, overshoots to 92 % at +2 f and settles at 100 % at +4 f, with a small ink fleck.
- **Glow:** cyan, 18 px, pulsing to 30 px on every beat with a 6 f decay. 红字劫 glows cinnabar.
- **Exit:** a finished line bleeds into ink (墨晕) over 8 f once the next line's first character has landed.
- **Line-number gutter.** Beside each chorus line sits a dim line number, `1` to `4` in order, as in a code editor's gutter. It sets up the Final Chorus's `@@ -4 +4 @@` diff (part 11), which then reads as a payoff. Chorus 1 (part 03) carries the same gutter.
  - Type: JetBrains Mono 28 px, paper #EDE4D3 at 35 %. No plate, no glow, no slam.
  - Place: left of the line's first phrase, right-aligned 20 px before the phrase's first cell and centred on that cell's height (a glyph box of about 17 × 28 px).
  - Entry: it fades in over 4 f from the line's first character.
  - Motion: it rides with the phrase when the phrase shrinks and lifts. It stays 28 px, because it is code, not lyric.
  - Exit: it bleeds into ink with its line.
  - It is on the lyric layer, outside the watermark corner, inside the 60 px margin, and clear of her face in every shot.

| Gutter | Line | First phrase | Position (right edge, centre y) | In | Out |
|---|---|---|---|---|---|
| `1` | 千行剑 破长夜 光速斩尽红字劫 | 千行剑, slot A | x 240, y 220 (x 223–240, y 206–234); with the lift on f3344–f3346 it rides to y 136 | f3325–f3328 | f3414–f3421, with line 1 |
| `2` | 千行剑 落如雪 万般漏洞皆可解 | 千行剑, slot A′ | x 240, y 310, beside 千 (x 223–240, y 296–324) | f3418–f3421 | f3510–f3517, with line 2 |
| `3` | 赛博江湖 谁做主 一行代码定生灭 | 赛博江湖, slot D | x 420, y 220 (x 403–420, y 206–234); with the lift on f3531–f3533 it rides to x 654, y 131 | f3512–f3515 | f3600–f3607, with line 3 |
| `4` | 千行剑 千行剑 一剑劈开数据界 | 千行剑, slot A | x 240, y 220 (x 223–240, y 206–234) | f3602–f3605 | held into part 08 with line 4, to at least f3721 |

#### S07-03 · f3325–f3343 · 19 f · 110.83–111.43 s · bar 73.6–74.0
- **Music:** the pickup 千行剑 over bar 73 beats 3–4 (f3321, f3333), into the Chorus 2 downbeat at f3344.
- **Lyric:** 「千行剑」 千 f3325 · 行 f3332 · 剑 f3339, in slot A (220 px). The wet stroke paints in left to right over f3323–f3326. The characters slam, and the glow pulses on f3333.
  - Gutter `1` (JetBrains Mono 28 px, paper at 35 %) fades in over f3325–f3328 left of 千, right-aligned at x 240, centred on y 220.
- **Picture:**
  - **Behind her:** the street dropping away. BG07-teststreet facades and roofs fall below frame, the gate (BG06-teststreet `-far`) passes under her, and the overcast (BG06-stormsky `-far`) forms the ceiling.
  - **The Night Curtain (code):** it unrolls beyond the gate. A hanging scroll 300 m wide of cinnabar stack-trace text drops from the overcast on two ink-lacquer rods (code cylinders). Its text texture scrolls up one row per beat.
  - **The formation:** 3,000 swords locking into a V-wedge (the wild-goose formation) round and behind her, code tails streaming.
  - **Her:** **B7** ride from behind at the centre (x 960 → 900), 380 → 420 px, y 520–900. Her back-of-head box is x 880–1060, y 520–640.
- **Action:**
  - f3325 千: B7 lands with the whip, and she launches north off the keycap (a 0.3 m hop, the sword under her boots tilting nose-up 6°).
    - **Rank 1** (the 1,000 swords nearest her) snaps into the inner rows of the wedge. Each sword turns tip-north in 2 f with a white glint at its tip, a crackle of 1,000 glints running outward from her.
    - The keycap below rebounds with a ⏎ flare. The lanterns spin in her wake, and the leftover beads burst into cyan mist.
    - **The long night falls in answer:** the scroll's bottom rod starts to drop from the overcast at 20 m/f, unrolling the red text behind it across the north of the city.
  - f3327–f3331: she climbs out of the street; the roofs fall below frame.
  - f3332 行: **rank 2** snaps into the middle rows, 8 m outside rank 1. The curtain's rod passes 150 m.
  - f3333 (beat 4): a wave of brightness runs down the wedge's code tails, from her to the wingtips.
  - f3336: the gate's roof passes under her; its eave tips whip past the bottom of frame.
  - f3339 剑: **rank 3** snaps into the outer rows, 16 m out. The full wedge has a half-angle of 28°, 60 m wings and a ±8 m vertical spread: 3,000 swords, their tails streaming like a comet of text. The curtain is fully unrolled, and its bottom rod swings at 10 m as the whole sheet billows once.
  - f3337–f3343: anticipation. She crouches on the sword (B7 squashed 8 %, pulled back 14 px) as the curtain fills the frame 12 m ahead. Its rows read `Traceback (most recent call last):`, `RangeError: Maximum call stack size exceeded` and `Segmentation fault (core dumped)`.
- **Camera:**
  - A chase from behind at her chest height, 3.6 m back.
  - She accelerates north and up, from (0, 2.4, 200) to (0, 108, 52) by f3343, about 230 m/s at the end.
  - The camera lags on a spring: 3.6 → 5.0 m behind at peak acceleration, closing to 3.2 m by f3343.
  - FOV 55 → 62°. Roll ±2° with her drift.
- **Grade / R:** full colour, R 0.45. The curtain's cinnabar lights the front of the wedge, and her glow lights it cyan from behind.
- **Out:** hard cut on the Chorus 2 downbeat, f3344 (the reverse).
- **Art:** B7; SW (instanced); PR02-enterkey; PR02-lantern; BG07-teststreet-west; BG07-teststreet-east; BG06-teststreet `-far`; BG06-stormsky `-far`. The curtain is code.

#### S07-04 · f3344–f3358 · 15 f · 111.47–111.93 s · bar 74.0–74.3
- **Music:** the Chorus 2 downbeat f3344 (the section hit), 破 sung on f3346, beat 2 on f3355.
- **Lyric:**
  - f3344–f3346: 千行剑 shrinks to 60 % and lifts to x 260–656, y 70–202. Gutter `1` rides with it to y 136 (still right-aligned at x 240, still 28 px).
  - 「破」 破 f3346, 260 px, at the top of slot B (x 1430–1650, y 250–470). A wet vertical stroke paints top-down behind the column over f3344–f3347.
  - 破 slams harder (150 % → 90 % → 100 %) with a spray of ink flecks. The glow pulses on f3355.
- **Picture:**
  - **The curtain's far (north) side** fills the frame, 1.5 m in front of the lens. Its cinnabar stack-trace text is drawn to read from this side (each face has its own text, and nothing is mirrored), in 0.25 m glyphs (about 156 px), six rows in frame.
  - **Her, from f3346:** **F-thrust**. Her plane is 1.1 m from the lens and the drawing is 1,100 px tall.
    - The sword is foreshortened at the lens: the tip and the ⏎ crossguard are nearest, at centre-bottom round (960, 760).
    - Her fierce face is above her arm (face box x 840–1100, y 200–460), and the wide sleeve flares on screen-right.
  - **Through the breach:** the wedge of 3,000 swords.
  - **Round the breach:** about 40,000 instanced glyph quads.
- **Action:**
  - f3344: cut in on the downbeat. Red text fills the frame. At the centre the glyphs bulge toward the lens over 2 f, a 4 m dome of stretched letters spilling cinnabar light.
  - f3346 破: F-thrust bursts through.
    - A cyan crack runs out from the tip across the curtain and the whole frame: 5 main branches and 18 side branches growing over f3346–f3347, with a white core 3 px wide and a cyan body 10 px wide. Every glyph a branch crosses splits along it.
    - Sparks fly at the tip: a 4-point star and 12 streaks, cooling from cyan to white over 6 f.
    - A cyan-white flash for 2 f, f3346–f3347 (**large flash 2**).
    - **Hit-stop 3** (f3346–f3348): everything is frozen except the crack drawing itself.
  - f3349: the curtain shatters along the crack. About 40 shards of red text blow outward toward the lens, and each shard's glyphs turn ink-black and burst into 3–8 blots. Three out-of-focus blots splat across the lens and slide off.
  - f3350–f3354: she lunges on past the camera.
    - F-thrust grows to 1,700 px and slides out past the left edge (x 960 → −400) by f3354.
    - The formation pours through the breach after her: 3,000 swords streak past both sides of the lens, their code tails smeared into lines.
    - The rain resumes over the city: the leftover cyan beads fall as cyan rain, fading to the city's grey-cinnabar over the next bar.
  - f3355 (beat 2): a 180° whip pan follows her (f3355–f3358) with a directional brush blur.
- **Camera:**
  - 1.5 m north of the curtain at her chest height (y 108.8), looking south, FOV 60°, with a slow push of 2 %/s throughout.
  - An extra 3 % push over f3344–f3345 into the bulge.
  - Punch M on f3346 (+5 % over 2 f, back over 8 f).
  - Shake S (6 px) over f3349–f3357 from the shards.
  - The whip over f3355–f3358 yaws 180° to look north and lands behind her.
- **Grade / R:** the frame is lit cinnabar by the curtain, with cyan at the crack. R 0.45.
- **Out:** whip pan f3355–f3358, landing on 长 at f3359.
- **Art:** F-thrust (shown large, 1,100 → 1,700 px); SW (instanced). The curtain is code.

#### S07-05 · f3359–f3390 · 32 f · 111.97–113.00 s · bar 74.3–75.0
- **Music:** bar 74 beats 3–4 (f3366, f3378) and the bar 75 downbeat (f3389). 长夜 falls on f3359 and f3364, 光速 on f3373 and f3379.
- **Lyric:**
  - 长 f3359 and 夜 f3364 go into slot B under 破 (y 470–690, 690–910), with slam and cyan glow.
  - 光 f3373 and 速 f3379 go into slot C (光 x 365–535, 速 535–705, y 830–1000). Its wet stroke paints left to right over f3371–f3375 across the whole band (x 330–1590), ready for all seven characters.
  - Glow pulses on f3366, f3378 and f3389.
- **Picture:** **the Signboard Canyon**, a megastructure chasm that runs north from the curtain to the city centre.
  - **Far end:** BG07-canyon-far as the vanishing card: the walls converge, bridges span the gap, and the plaza's glow shows at the end.
  - **Walls:** BG07-canyon-wall-a and BG07-canyon-wall-b, tiled and stacked six high, as two walls 180 m tall at x ±15.
  - **Signboards:** rows every 6 m of height on both walls, filled by code: 45 % red error text, 55 % cyan code.
  - **Lanterns:** PR02-lantern strings slung across the gap on cables.
  - **Weather:** cyan-fading rain, and red glyph debris from the broken curtain falling behind her.
  - **Her:** from behind at the centre (x 960 → 980). **B7** (rotated −15°, nose down, 360 px), then **N07-tuck** (257 px, then 170 px at the FOV peak, then 215 px).
  - **The formation:** behind her at first, then overtaking.
- **Action:**
  - f3359 长: the whip lands behind her, and she dives from the breach toward the chasm. Red debris and ink tumble past the lens.
  - f3364 夜: the chasm's lips rise past the frame edges as she drops between the walls, and eave tips whip past the edges.
  - f3366 (beat 3): the first rows of signboards stream by on both sides.
  - f3368–f3373: she levels off at 40 m, her chest at the 40 m row of boards.
  - f3373 光: **B7 → N07-tuck**; she drops into a speed tuck, 30 px lower.
    - The formation overtakes. 3,000 swords pass the camera and her on both sides in 4 f as tapered streaks of light: a white core, a cyan body and code tails smeared into lines.
    - They pull ahead into a river of light 30–200 m in front of her.
  - f3378 (beat 4): the river ahead pulses.
  - f3379 速: **FOV kick** 50 → 74° over 4 f, with 40 radial ink-brush speed lines. The walls smear into horizontal streaks: a directional brush blur on the walls only, never on her.
  - f3383–f3388: the river ahead fans into three tiers, aimed along the rows of boards at 30, 40 and 50 m. Anticipation: N07-tuck squashes 6 % and slides back 12 px.
  - f3389 (bar 75 downbeat): the three tiers lock, with a glint along all 3,000 tips at once.
- **Camera:**
  - Follows 4.5 m behind her, level with her chest.
  - Dives from (0, 109.6, 36.5) down to y 40.8 by f3373 (z ≈ −30), then runs level along the chasm to z −100 by f3390.
  - Pitch −22° in the dive, flattening to −4° over f3366–f3373. Roll +4° in the dive's bank, back to 0 by f3373.
  - FOV 50°, kicked to 74° over f3379–f3382, easing to 58° by f3390.
- **Grade / R:** R 0.45. The red boards light the swords' undersides cinnabar, and the swords light her cyan. The speed lines are ink-black with paper edges.
- **Out:** hard cut on 斩, f3391.
- **Art:** B7; SW (instanced); PR02-lantern.
  - **N07-tuck (new):** a chibi sticker on the sheet rules: flat magenta, thick white die-cut border, no effects, no text.
    - Facing: three-quarter back, toward the upper right. Sword hand: right.
    - Prompt: "Crouched in a speed tuck on her own flying sword, seen three-quarter from behind heading away toward the upper right of the picture, the same view as the ride pose. The sword lies horizontal under her boots, point forward, away from the viewer. Knees deeply bent, body folded low over her knees. Her pearl-white cybernetic right arm, on the right side of the picture and nearest us, with the bare shoulder visible, reaches down and grips the sword's return-key-shaped crossguard beside her boots. Her left arm is tucked against her side, its wide sleeve streaming back toward the viewer. Ponytail, red ribbon tails and cyan hair tips stream straight back toward the viewer. A sliver of a determined cheek shows. Full body, the whole sword inside the cell, eye level from behind at her chest height."
    - Used in S07-05 (光速) and S07-13 (the climb).
  - **BG07-canyon-far (new):** 2048×1152. Prompt after the STYLE_BIBLE §5 anchor: "Looking straight down the length of a colossal canyon between two cyber megastructures at night, one-point perspective from 40 m above its floor: walls of stacked server-rack storeys rising out of frame, every sixth storey wrapped in an upturned pagoda eave, catwalks and arched bridges spanning the gap at many heights, cables and hanging lanterns, hundreds of blank glowing signboards receding; at the far end the canyon opens onto a round plaza glowing in mist. Keep the bottom third dark and quiet."
  - **BG07-canyon-wall-a (new)** and **BG07-canyon-wall-b (new):** 2560×1440 each. Prompt after the anchor: "A straight-on elevation, with no perspective, of a section of a colossal canyon wall at night: about 60 m wide and 34 m tall of a cyber megastructure made of stacked server-rack storeys, one storey wrapped in an upturned pagoda eave, catwalks, cables, vents, hanging lanterns, and rows of blank glowing signboards about every 6 m of height. All four edges continue the structure so sections tile side by side and stack vertically."
    - The two plates are different sections, used in different orders on the two walls.

#### S07-06 · f3391–f3417 · 27 f · 113.03–113.90 s · bar 75.0–75.6
- **Music:** 斩 f3391, two frames after the bar 75 downbeat. 尽 f3395 and 字 f3406 fall on 8ths; 红 f3400 on beat 2; 劫 f3411 on beat 3; another 8th on f3417.
- **Lyric:**
  - 斩 f3391 · 尽 f3395 · 红 f3400 · 字 f3406 · 劫 f3411 continue slot C: 斩 x 705–875, 尽 875–1045, 红 1045–1215, 字 1215–1385, 劫 1385–1555, all at y 830–1000.
  - 斩 slams harder (150 %).
  - 红字劫 slam with a **cinnabar** glow (the enemy's name) that flares on 劫, then cools to cyan over f3412–f3417 as the red dies on screen.
  - The full line 「千行剑 破长夜 光速斩尽红字劫」 now reads top-left, right column, bottom band.
  - Exit: it bleeds into ink over f3414–f3421 as line 2 lands on 千, f3418, and gutter `1` bleeds out with it.
- **Picture:** profile, tracking.
  - **Behind her:** the west wall (BG07-canyon-wall-a, then -wall-b) 15 m back, with three rows of boards in frame (30, 40 and 50 m). The opposite wall's lip and a strip of overcast run along the top edge.
  - **Near layer:** PR02-lanterns on their cables whip through the foreground, blurred, about every 10 f.
  - **Her:** **B8** (three-quarter screen-right, the cybernetic arm thrust at the right edge in the sword-finger sign) standing on SW, which lies horizontal under her boots with its point to screen-right.
    - Placement: left third, figure x 330–750, y 300–840, 540 → 590 px; face box x 520–720, y 320–500.
  - **The formation:** lancing past her to screen-right.
- **Action:**
  - f3391 斩: **N07-tuck → B8**; she springs upright, 40 px further right.
    - **Hit-stop 3** (f3391–f3393): the formation, the rain, the debris and the camera drift freeze.
    - A cyan glint runs down all 3,000 sword edges at once.
  - f3394: release. The formation lances to screen-right at light speed in three tiers (low at 30 m, mid at 40 m, high at 50 m). 3,000 streaks cross the frame from left to right in 2 f and run on north up the chasm.
    - Each tier draws a white hairline across every red board it passes.
    - A 1 f paper-white flash shows on the hairlines only (local, not the full frame).
    - Punch S.
  - f3395 尽: the mid row's red boards split along the hairline. The halves slide 0.4 m apart over 4 f, the glyph halves flash white for 1 f, then turn ink-black and burst into 3–8 blots per glyph that fall and stain the wall below. Behind them each board relights cyan, with code.
  - f3400 红 (beat 2): the low row splits and bursts the same way.
  - f3406 字: the high row splits and bursts. Ink now rains across the whole frame instead of water.
  - f3411 劫 (beat 3): far up the chasm, off frame right, the wave of cuts reaches its north mouth, where a hanging banner of red stack traces (the calamity's flag) shatters.
    - One big ink plume bursts in from the right edge.
    - A cyan shock ring sweeps across the wall from right to left and flips the red boards still in view to cyan.
  - f3412–f3417: hold. B8 drifts 10 px right and breathes (±1.2 %), ink falls past her and the camera pushes in. On f3417 (8th) the last ink splat hits a catwalk.
- **Camera:**
  - Tracks her north from her right side: 4.2 → 3.8 m east of her, at her chest height (y 40.8), looking west, FOV 42°.
  - Frozen in the hit-stop.
  - After it she glides at 1 m/f (z −100 → −124). The wall scrolls about 70 px/f, with a light directional blur on the far wall only.
  - Punch S on f3394 (+3 % over 2 f, back over 6 f).
- **Grade / R:** R 0.45 → 0.44 (尽) → 0.43 (红) → 0.42 (字, 劫). The wall's light turns from cinnabar-dominant to cyan-dominant, and the ink stains stay.
- **Out:** hard cut on 千, f3418.
- **Art:** B8; SW; PR02-lantern; BG07-canyon-wall-a; BG07-canyon-wall-b.

#### S07-07 · f3418–f3433 · 16 f · 113.93–114.43 s · bar 75.6–76.0
- **Music:** 千 f3418, beat 4 f3423, 行 f3424, 剑 f3429, then the run into the bar 76 downbeat (落, f3434).
- **Lyric:** 「千行剑」 千 f3418 · 行 f3424 · 剑 f3429 in slot A′ (the left column, 220 px). The vertical wet stroke paints top-down over f3416–f3419. The characters slam, with a glow pulse on f3423.
  - Gutter `2` fades in over f3418–f3421 left of 千, right-aligned at x 240, centred on y 310 (x 223–240, y 296–324), well clear of her face box (x 840–1080).
- **Picture:** above the Old Quarter, looking west.
  - **Ground:** the grey roof sea 45 m below (BG07-roofs-mid rows on cards at several depths) and BG07-roofs-far (the horizon, the city's west towers, the overcast).
  - **Above her:** the sword cloud (code).
  - **Her:** **F-sword_finger** (front: the left hand raised before her face in the sword-finger sign, the sword point-down at her right side), centred, 930 → 250 px. Her face box is x 840–1080, y 120–420 at the start and x 930–990, y 330–400 at the end.
- **Action:**
  - f3418 千: cut in on F-sword_finger. Her raised fingers glint. The 3,000 swords arrive from the chasm, sweep in over her head and wheel into a dome 18 m across, 20 m above her.
  - f3423 (beat 4): the dome turns once in a slow swirl.
  - f3424 行: **fork.** Every sword splits into three with a cyan flicker, and the copies pull apart over the dome: 9,000 smaller swords (0.3–0.5 m, tails shortened to 1 m).
  - f3429 剑: the cloud tightens and glitters: a sparkle wave runs from its centre outward as each tiny sword catches the light in turn.
  - f3428–f3433: anticipation for 落. She dips 10 px (squash 6 %), and the cloud contracts 5 %, holding its breath.
- **Camera:** in front of her at her chest height (y 60.8), looking west; pulls back east from 2.4 m to 9 m over the shot (ease-out); FOV 40°.
- **Grade / R:** R 0.42. The roofs are grey-blue under the overcast, and the sword cloud is the key light.
- **Out:** axial cut-in on 落, f3434 (the bar 76 downbeat).
- **Art:** F-sword_finger (shown large, 930 px at the start); SW (instanced).
  - **BG07-roofs-far (new):** 2560×1440. Prompt after the anchor: "The old quarter of the city at night from 45 m up, looking west, about 10° down: a sea of grey-tiled courtyard roofs and small pagodas receding to the city's western towers and megastructures, a low heavy overcast above, mist and rain, blank glowing signboards only on the far towers. Keep the top third quiet."
  - **BG07-roofs-mid (new):** 3072×1024. Prompt after the anchor: "A strip of three rows of grey-tiled courtyard roofs seen from about 20° above: hip-and-gable roofs with ridge ornaments, small skylights, laundry poles strung with cables, wet tiles. The left and right edges tile. Flat magenta above the rooflines. No text."

#### S07-08 · f3434–f3511 · 78 f · 114.47–117.03 s · bar 76.0–77.7
- **Music:** the bar 76 downbeat f3434 (落); beats f3445, f3456 and f3468; the bar 77 downbeat f3479; beats f3490 and f3501 (解, beat 3); then the lead into f3513. The line 万般漏洞皆可解 rides 8ths and quarters.
- **Lyric:**
  - 落 f3434 · 如 f3449 · 雪 f3452 go into slot B (x 1430–1650, y 250–470, 470–690, 690–910).
  - 万 f3461 · 般 f3469 · 漏 f3476 · 洞 f3483 · 皆 f3488 · 可 f3496 · 解 f3501 go into slot C (x 365–1555, y 830–1000), its stroke painting over f3459–f3463.
  - The characters slam with cyan glow. 解 slams with an extra cyan ring.
  - Exit: line 2 bleeds out over f3510–f3517 as 赛 lands on f3512, and gutter `2` bleeds out with it.
- **Picture:**
  - **The snow:** 9,000 tiny swords tumble down past the lens. The near ones (0.3 m swords, 0.5 m from the lens) drift in and out of focus.
  - **Her, first:** **C7** (arms up, face up, joy), centred, 445 px (face box x 890–1030, y 250–400), until she leaves the top of frame. SW floats beside her, bobbing 2 % of its height once per bar.
  - **The roofs rising into view:** BG07-roofs-far, BG07-roofs-mid rows at 20, 35, 55 and 80 m, and BG07-roofs-near (the ridge 8 m ahead where she lands).
  - **The roof leaks (漏洞, code):** holes in the tiles glowing cinnabar, each leaking a thin column of red error text upward like steam. The lines are `Segmentation fault (core dumped)`, `java.lang.NullPointerException`, `panic: runtime error: index out of range` and `ECONNREFUSED`, in 0.2 m glyphs. The holes keep clear of the lyric slots, inside x 520–1400, y 420–800.
  - **Her, again:** from f3482 she floats back down into frame (C7, 240 px) and lands as **F-landing** (185 px) on the ridge at the frame centre (x 960, y 560–745).
- **Action:**
  - f3434 落: **F-sword_finger → C7.** She pops up 20 px with both arms flung high; her sword leaves her hand in a 1 f smear and floats beside her.
    - The sword cloud bursts outward and starts to fall as snow.
    - Each tiny sword tumbles (0.3–1 rev/s about a random axis) and falls 1.5–3 m/s with a sideways sine drift, glinting.
  - f3440: the first flakes pass the lens, big and sharp, and the camera starts to sink with the snow.
  - f3445 (beat 2): the flakes' sparkle lights her from every side.
  - f3449 如: flakes near the lens keep pace with it, falling together and almost still in frame.
  - f3452 雪: every flake glints at once: a soft shimmer of +12 % exposure for 2 f (not a flash).
  - f3448–f3456: she rises out of the top of frame as the camera sinks. The camera stays level and never tilts up at her.
  - f3456–f3460: the roofs rise into frame from below: the roof sea under the snow, dotted with glowing red holes and their columns of rising error text.
  - f3461 万: **1 hole**, the nearest at (960, 640), is pinned.
    - One flake turns tip-down and plunges in with a 2 f streak.
    - The red text column snaps off at the roof and bursts into ink.
    - The hole glows cyan, with the tiny sword's hilt left standing in it like a nail.
  - f3469 般: **3 holes**, at (640, 560), (1180, 600) and (820, 720).
  - f3476 漏: **9 holes** across the mid rows.
  - f3482: she re-enters at the top of frame, floating down like a flake (C7 swaying ±5°).
  - f3483 洞: **27 holes** across the whole visible roof sea. The plunges read as a cyan drizzle, and the error columns are gone.
  - f3488 皆: the 27 patches and the 216 beyond the frame (**243**) pulse cyan together.
  - f3496 可: the patches pulse again, brighter. She is 2 m above the ridge.
  - f3499–f3500: the floating SW streaks into her right hand (2 f).
  - f3501 解 (beat 3): **C7 → F-landing** on the ridge, with an ink ring and a puff of tile dust.
    - **Hit-stop 2** (f3501–f3502), and punch S.
    - From her landing point the **cyan chain** ignites: thin cyan circuit lines run along the ridges and tile seams from patch to patch, racing outward across the whole quarter toward the horizon over f3503–f3513.
  - f3503–f3511: she holds F-landing, drifting 6 px and breathing. The chain spreads and the snow thins out.
- **Camera:**
  - Axial cut-in on 落 to 5 m in front of her at her chest height, (−165, 60.8, −150), looking west, FOV 40°.
  - From f3438 the camera sinks, cranes down at 1.0 m/f slowing to 0.5 m/f, and reaches y 15.5 by f3480.
  - Meanwhile it trucks north (screen-right) 40 m (z −150 → −190 over f3440–f3500) and drifts back 4 m east. Pitch 0 → −5°.
  - It ends at (−161, 15.5, −190), 8 m from her landing point.
- **Grade / R:** R 0.42 until 解, then 0.40 as the chain spreads. The snow lifts the shadows toward cyan, and the roofs are blue-grey. The holes are the only cinnabar in frame until they die.
- **Out:** hard cut on 赛, f3512.
- **Art:** C7; F-landing; SW (floating; instanced); BG07-roofs-far; BG07-roofs-mid.
  - **BG07-roofs-near (new):** 2048×1152 on flat magenta. Prompt after the anchor: "One long grey-tiled roof ridge close up, seen from just above it at night: curved tiles, ridge beasts, a broken tile or two, wet, moss in the joints. Flat magenta everywhere else. No text."

#### S07-09 · f3512–f3532 · 21 f · 117.07–117.73 s · bar 77.7–78.2
- **Music:** 赛 f3512 (with beat 4 on f3513), 博 f3517, the bar 78 downbeat f3524 (江), 湖 f3528 and an 8th on f3530.
- **Lyric:** 「赛博江湖」 赛 f3512 · 博 f3517 · 江 f3524 · 湖 f3528 in slot D (the top band, 260 px): the name of the world across the sky. A wide wet stroke paints over f3510–f3514. The characters slam, with glow pulses on f3513 and f3524.
  - Gutter `3` fades in over f3512–f3515 left of 赛, right-aligned at x 420, centred on y 220 (x 403–420, y 206–234).
- **Picture:**
  - **Layers:** BG07-city-aerial `-near` (the Old Quarter roofs, lower left), `-mid` (the chasm running in from the lower right, the round plaza with PR07-altar at its centre, the blocks), `-far` (the city to the horizon, the central tower BG-tower upper right, the overcast).
  - **Code:** signboards at R 0.40, cyan in the south and west, red in the north and east. The cyan chain is still racing across the quarter.
  - **Her:** **B7** from behind, 300 px → 30 px: by the end she is a point of light at the head of the river.
- **Action:**
  - f3512 赛: **F-landing → B7.** She lifts off the ridge (30 px up). Her sword passes from her hand to under her boots across a 1 f smear, and she heads north-east for the altar.
  - f3513 (beat 4): the cyan chain reaches the quarter's horizon.
  - f3517 博: the 9,000 tiny swords pull out of the 243 patched holes. Each hole stays sealed with a cyan scar. The swords rise in a shimmering sheet, stream after her and join back in threes into 3,000 formation swords, their code tails growing back.
  - f3524 江 (bar 78 downbeat): the swords fall in behind her as **a river** (江): a 400 m ribbon of light winding over the roofs. The code tails make it look like flowing text.
  - f3528 湖: the river pours into the plaza ahead of her and pools into **a lake** (湖), a flat disc of swords 40 m across lying round the three-tier altar and rippling.
  - f3530–f3532: she arrives over the altar. Its top tier glows.
- **Camera:**
  - Crane up and back: from 5 m behind her at her chest height, (−172, 15, −186), to (−260, 150, −40) by f3532.
  - The look-at slides from her to the altar (0, 0, −420). Pitch −3° → −30°. FOV 50 → 46°.
  - Ease-in-out, fastest round f3522, so the reveal of the whole half-cyan city lands on 江.
- **Grade / R:** R 0.40. The cyan districts glow, and the overcast is cinnabar over the north-east. The river and the lake are the brightest things in frame.
- **Out:** hard cut on 谁, f3533 (the Enter press).
- **Art:** B7; SW (instanced).
  - **BG07-city-aerial (new):** 2560×1440 in three layers, `-far`, `-mid` and `-near`; `-mid` and `-near` on flat magenta where they overlap the layer behind. Prompt after the anchor: "The whole city at night from 150 m above its south-west edge, looking north-north-east about 30° down: lower left, a sea of grey-tiled courtyard roofs (the old quarter); from the lower right, a deep canyon between two megastructures running in toward the centre; in the centre, a round stone plaza where four avenues meet, its middle left empty as a round stone base; beyond it to the upper right, the city's tallest tower, the attached central tower: a thirteen-storey pagoda fused with a megastructure spire, upturned eaves, a ring of blank panels at its waist, a needle antenna; the rest of the city to the horizon under a low heavy overcast. Keep the top third quiet."
    - The altar is the separate PR07-altar.
    - The central tower BG-tower, attached: generate the plate with BG-tower attached so the painted tower is that tower, in the `-far` layer.
  - **PR07-altar (new):** 2048×2048 on flat magenta. Prompt: "A round three-tiered open-air altar of white marble, like a circular mound altar: three stacked round terraces, each ringed by a carved white balustrade, a flight of steps on each of the four sides, a round centre stone on the top terrace. Three-quarter view from about 30° above. No text, no figures."

#### S07-10 · f3533–f3552 · 20 f · 117.77–118.40 s · bar 78.2–78.7
- **Music:** 谁 f3533, beat 2 f3535, 做 f3539 (8th on f3541), 主 f3546 on beat 3, an 8th on f3552.
- **Lyric:**
  - 赛博江湖 shrinks to 55 % and lifts over f3531–f3533 (143 px, x 674–1246, y 60–203). Gutter `3` rides with it to a right edge at x 654, centred on y 131, still 28 px.
  - 「谁做主」 谁 f3533 · 做 f3539 · 主 f3546 in slot B (x 1430–1650, y 250–910). The vertical stroke paints over f3531–f3534.
  - The characters slam. 主 lands with a stamped ring.
- **Picture:** on the altar's top tier, looking south.
  - **Floor:** PR07-altar-top, the top terrace's floor, 24 m across, with the round centre stone under her, ringed by PR07-balustrade instances.
  - **Below:** the lake of swords on the plaza floor.
  - **Backdrop:** BG07-plaza-mid (the plaza's ring of pagoda-megastructures, keyed) and BG07-plaza-far (the south avenue leaving the plaza toward the chasm, and the skyline).
  - **Her:** **F-enter** (front: the sword planted in the centre stone, the ⏎ crossguard at her waist, both hands on the pommel, chin up), centred, 500 px constant (face box x 880–1040, y 330–500); then **C8**.
  - **The armillary throne of swords (code).**
  - **A one-line terminal chip (code):** JetBrains Mono 28 px, cyan on a 70 % ink chip, at x 520–800, y 560–640, left of her body.
- **Action:**
  - f3533 谁: **B7 → F-enter.** She drops onto the centre stone and plants her sword.
    - **The Enter press:** the frame dips 6 px and springs back over f3533–f3536. The centre stone sinks 0.3 m and rebounds, and a flat ripple ring runs out over the three tiers, the lake and the plaza floor.
    - **Hit-stop 2** (f3533–f3534).
    - Then every sword in the lake flips up onto its point in sequence along the ripple, a domino of glints.
    - The terminal chip types `$ whoami` over f3533–f3535.
  - f3535 (beat 2): the lake lifts off the floor in a spiral.
  - f3539 做: the **armillary throne** locks round her: three rings of 1,000 swords each, tip to tail.
    - Ring 1 lies level at her waist (r 3 m), ring 2 is tilted +60° (r 4 m) and ring 3 is tilted −60° (r 5 m).
    - They turn at +0.5, −0.4 and +0.3 rev per bar, and their code tails form three continuous rings of text.
    - The near arcs pass in front of her legs and below her chin, never across her face.
  - f3546 主 (beat 3): **F-enter → C8.** Her left thumb points to her chest with a cocky grin; she rises 8 px, chin up.
    - The terminal prints `root` on the next line, with a blinking block cursor: who's root.
    - The rings stop dead for 2 f with a glint on every tip, then turn on at half speed.
    - The plaza's signboards facing her flip cyan in a ring, a crown of cyan round the plaza.
  - f3547–f3552: C8 holds and breathes, the rings turn, and the dolly zoom completes.
- **Camera:**
  - **Dolly zoom:** from 6 m north of her at her chest height, (0, 6.8, −426), FOV 30°, looking south, to 2.8 m at (0, 6.8, −422.8), FOV 60°. Ease-in-out.
  - She stays at 500 px while the plaza and the city stretch away behind her and the rings bend round the widening lens.
- **Grade / R:** R 0.40. Cyan comes from the centre stone and the rings below; cinnabar from the overcast to the north-east above.
- **Out:** hard cut on 一, f3553.
- **Art:** F-enter; C8; SW (instanced); PR07-altar.
  - **PR07-altar-top (new):** 2048×2048, a top-down texture of the altar's top terrace: concentric rings of white marble slabs round a round centre stone, a carved border at the edge, rain-wet, faint cyan seams between the rings. No symbols, no text.
  - **PR07-balustrade (new):** 1536×768 on flat magenta. Prompt: "One straight segment of a carved white marble balustrade in front view: two posts with lotus-bud finials and a pierced panel of cloud scrolls between them, wet, a thin cyan light line along the top rail. No text." Instanced round all three tiers.
  - **BG07-plaza-far (new)** and **BG07-plaza-mid (new):** 2560×1440 each. Prompt after the anchor: "From the top of a round white marble altar, 7 m up, looking south across a round stone plaza at night: the plaza ringed by tall pagoda-megastructures with stacked blank glowing signboards and upturned eaves, a wide avenue leaving it toward a dark canyon between two megastructures, the skyline beyond under a low overcast. Eye level 7 m, wide enough for a 60° lens. Keep the right fifth quiet." Split into `-far` (the skyline and the avenue's end) and `-mid` (the plaza's ring of buildings, 60–90 m away, on flat magenta sky).

#### S07-11 · f3553–f3579 · 27 f · 118.43–119.30 s · bar 78.7–79.3
- **Music:** 一 f3553, beat 4 f3558, 行 f3564, the bar 79 downbeat f3569 (代), 码 f3575.
- **Lyric:** 一 f3553 · 行 f3564 · 代 f3569 · 码 f3575 in slot C (x 365–535, 535–705, 705–875, 875–1045, y 830–1000), the stroke painting over f3551–f3555. The characters slam, with glow pulses on f3558 and f3569.
- **Picture:**
  - **Her:** on the altar's top tier, seen from the north. **B8** (three-quarter screen-right, the sword finger at the right edge) at the left third, 420 px (figure x 250–650, y 360–800; face box x 430–600, y 370–520).
  - **Her sword:** left planted in the centre stone beside her as an SW sprite, upright, point down, sunk to the crossguard where C8's blade stood.
  - **The terminal chip:** `root` fades out over f3553–f3558.
  - **Backdrop:** the plaza receding toward screen-right (BG07-plaza-far, -mid; PR07-balustrade).
  - **The line of code (code):** from her fingertip to the horizon.
- **Action:**
  - f3553 一: **C8 → B8.** She steps 60 cm to screen-right and thrusts her sword finger to screen-right, which is west.
    - The three rings unspool: the swords peel off and shoot to her fingertip.
    - They string nose to tail into **one straight line** running west from her fingertip, 12 m above the plaza and rising 2°, building outward at 300 m/f.
  - f3558 (beat 4): the line passes the far side of the plaza.
  - f3564 行: the line reaches the horizon: 3,000 swords, about 3.6 km.
  - f3569 代 (bar 79 downbeat): **the code types itself.**
    - The swords' tails fuse into one continuous line of code, typed outward from her fingertip by a racing white block cursor at 200 m/f.
    - The code, repeated along the line's length in cyan JetBrains Mono 1.2 m glyphs: `jianghu.lines.filter(l => l.isRed).forEach(l => l.cut());`.
    - Under the line, every building the cursor passes flips its boards cyan: a cyan band about 150 m wide runs west across the city.
  - f3575 码: the cursor reaches the horizon.
  - f3576–f3579: anticipation. The line trembles (±0.2°), and a white glint runs back along it to her fingertip.
- **Camera:** 4.3 m north of her at her chest height, looking south (screen-right is west), FOV 48°. It trucks west (screen-right) 12 m and pans 20° right with the cursor, keeping her at the left third (her x 450 → 400). Ease-in-out.
- **Grade / R:** R 0.40, with the band under the line turning cyan.
- **Out:** hard cut on 定, f3580.
- **Art:** B8; SW; PR07-altar-top; PR07-balustrade; BG07-plaza-far; BG07-plaza-mid.

#### S07-12 · f3580–f3601 · 22 f · 119.33–120.03 s · bar 79.3–79.7
- **Music:** 定 f3580 on beat 2, 生 f3586 on an 8th, 灭 f3591 on beat 3, 16ths on f3594 and f3597, beat 4 just after on f3603.
- **Lyric:**
  - 定 f3580 · 生 f3586 · 灭 f3591 in slot C (x 1045–1215, 1215–1385, 1385–1555).
  - 定 slams with a cyan flash on the glyph. 灭 slams, and its glow snaps off for 2 f, then returns (a blink).
  - Exit: line 3 bleeds out over f3600–f3607 as line 4 takes over on 千, f3602, and gutter `3` bleeds out with it.
- **Picture:** aerial, from high over the south-west.
  - **Layers:** BG07-city-aerial `-far` and `-mid`, pushed to their upper crop, with PR07-altar at the plaza.
  - **The line of code:** lying from the altar west across the city, on screen running from the altar toward the left.
  - **Her:** B8 as a 24 px figure on the altar.
  - **Code:** signboards and the overcast.
- **Action:**
  - f3580 定 (beat 2): the line locks. A cyan flash runs its whole length in 2 f (f3580–f3581) along the line only (**large flash 3**). **Hit-stop 2** (f3580–f3581).
  - f3582–f3591: the line **sweeps like a clock hand**, pivoting on her: it turns clockwise from above, from pointing west, through north-west, to due north. On screen it swings from the left up to straight ahead, toward screen-right.
    - Every board it passes flips cyan: the west and north-west districts.
    - The red in front of it is shoved: red text peels off the walls, piles up in a bow wave against the line and lifts into the sky in cinnabar columns.
  - f3586 生 (8th): the line passes the north-west quarter, and its towers flip cyan floor by floor, bottom to top over 5 f.
  - f3591 灭 (beat 3): the line stops dead pointing due north. It is now the border: cyan to its west (screen-left), red to its east (screen-right), where the central tower BG-tower stands.
    - The red it swept blinks out district by district on the 16ths f3591, f3594 and f3597.
    - Part of the red east of the line tears loose from the boards and pours up into the sky. It spreads into **the Red Canopy**, a flat ceiling of cinnabar stack-trace text 480 m up over the whole north of the city, its underside drawn to read from below.
    - The boards it leaves behind in the east stay red, dimmer.
  - f3592–f3601: the line breaks back into its 3,000 swords, which stream back down to her, and the camera tilts up toward the canopy forming overhead.
- **Camera:** at (−180, 260, −120), looking north-north-east at (0, 0, −470), pitch −32°, FOV 52°. It pushes forward 3 m/f. Over f3592–f3601 it tilts up from −32° to −12°.
- **Grade / R:** the city goes 0.40 → 0.38 on 灭. The red now sits east of the line and in the canopy, and the sky is graded cinnabar over the right half.
- **Out:** hard cut on 千, f3602.
- **Art:** B8 (tiny); SW (instanced); PR07-altar; BG07-city-aerial `-far`, `-mid`.

#### S07-13 · f3602–f3624 · 23 f · 120.07–120.80 s · bar 79.7–80.3
- **Music:** 千 f3602, beat 4 f3603, 行 f3609, the bar 80 downbeat f3614 (剑), an 8th on f3620.
- **Lyric:** line 4, 「千行剑」 千 f3602 · 行 f3609 · 剑 f3614 in slot A (220 px). The stroke paints over f3600–f3603. The characters slam, with glow pulses on f3603 and f3614.
  - Gutter `4` fades in over f3602–f3605 left of 千, right-aligned at x 240, centred on y 220 (x 223–240, y 206–234). It holds to the end of the part and into part 08.
- **Picture:** the climb, straight up from the altar.
  - **Her:** from behind, centre, 270 px. **B7** (rotated −30° so her ride reads as straight up), then **N07-tuck**, then B7.
  - **The swords:** 3,000 in a rising double helix (r 8 → 5 m, pitch 12 m) round her, their code tails forming two spiral ribbons of text.
  - **Below:** the altar, the plaza and the city falling away (BG07-city-aerial `-mid`, `-far`) and the scar of the line of code running north.
  - **Above, ahead:** the Red Canopy's underside, cinnabar text, dripping red glyph vapour.
- **Action:**
  - f3602 千: **B8 → B7.** Her sword tears out of the centre stone and under her boots in a 2 f streak (f3602–f3603), and she launches straight up. The swords streaming back from the line wrap round her in a double helix.
  - f3603 (beat 4): below, the centre stone rebounds with a ⏎ flare.
  - f3609 行: **B7 → N07-tuck** (20 px lower). She tucks and accelerates, and the helix tightens and spins faster. The city shrinks below.
  - f3610–f3613: red glyph vapour falls past the lens from the canopy above.
  - f3614 剑 (bar 80 downbeat): **she stops dead at 300 m**, a sudden halt, with a ring-shaped shock wave in the air.
    - The helix overshoots above her and opens into a **halo** of swords, a flat ring 80 m across turning above her.
    - The canopy's underside ripples where the shock wave reaches it. Punch M.
  - f3615–f3619: the halo settles and turns; the city lies far below.
  - f3620 (8th): **N07-tuck → B7** (she stands up on her sword, 15 px higher). Sixty swords slide under her boots into a hexagonal **raft** 4 m across, interlocked tip to hilt.
  - f3621–f3624: she hangs on the raft, drifting, with the halo turning overhead.
- **Camera:**
  - A chase level with her chest, 4.5 m south of her, climbing with her: from (0, 6.8, −415.5) to (0, 300.8, −415.5).
  - Pitch +4° at most: it rises with her and never looks up at her from below.
  - FOV 64°. It brakes with her on f3614.
- **Grade / R:** the canopy above is cinnabar; the city below sits on the cyan west and red east of the line. City R 0.38.
- **Out:** hard cut on 千, f3625.
- **Art:** B7; N07-tuck; SW (instanced); PR07-altar; BG07-city-aerial `-far`, `-mid`.

#### S07-14 · f3625–f3649 · 25 f · 120.83–121.63 s · bar 80.3–80.8
- **Music:** 千 f3625 on beat 2, 行 f3631 on an 8th, beat 3 f3636, 剑 f3638, beat 4 f3648.
- **Lyric:** 「千行剑」 千 f3625 · 行 f3631 · 剑 f3638 in slot B (220 px). The stroke paints over f3623–f3626. The characters slam, with glow pulses on f3636 and f3648.
- **Picture:** 300 m over the altar, looking north.
  - **Backdrop:** BG07-city-level (the city below and to the horizon, the central tower BG-tower right of centre) and the Red Canopy's underside receding north across the upper frame (code text).
  - **Her:** **F-charge** (front, the sword raised overhead in both hands), landing on the raft. 1,250 px at the start, the raised blade cropped by the frame top, face box x 860–1060, y 360–560; about 90 px by the end, feet near y 740.
  - **The giant sword**, forming above her: PR07-giantsword for the hilt and crossguard, with a code blade.
    - Its axis stands 1.5 m behind her plane, so it never covers her face.
    - Pommel at 304 m, the ⏎ crossguard (18 m wide) at 306–309 m, the blade up to 424 m, 56 m below the canopy.
- **Action:**
  - f3625 千: **B7 → F-charge** on the raft with a 10 % landing squash (f3625–f3628).
    - Her sword flips up into her hands across a 1 f smear.
    - An ink-wash ring ripples out through the air under the raft.
    - She raises the sword, and the halo spirals down onto the line of her blade.
  - f3631 行: the swords pack into the shape of a blade above her: the crossguard and the first 60 m. Each sword's code tail stretches into a lengthwise stream of glyphs inside the giant blade.
  - f3636 (beat 3): a pulse runs up the half-built blade.
  - f3638 剑: **the giant sword completes:** 120 m, 80× her height.
    - The reforged glow is doubled: cyan lines, a white edge along both edges, and glyph streams flowing toward the tip.
    - The ⏎ crossguard is lit at its edges.
    - A glint runs from the crossguard to the tip over f3638–f3641.
  - f3642–f3649: the reveal completes, with the giant sword towering against the red ceiling. The raft dips 0.5 m under its weight and recovers.
  - f3648 (beat 4): the giant sword hums, and its glyph streams speed up.
- **Camera:**
  - Starts 2.2 m in front of her at her chest height, (0, 300.8, −417.8), looking north, FOV 45°.
  - Dollies back south to 26 m and booms up to 305 m. It rises above her and never goes below her.
  - Pitch 0 → +2°, FOV 45 → 60°. Ease-out.
- **Grade / R:** the canopy cinnabar above, the giant sword the key light, the city below split cyan (left) and red (right). City R 0.38.
- **Out:** hard cut on 一, f3650.
- **Art:** F-charge (shown large, 1,250 px); SW (instanced); BG07-city-level (new, below), with the central tower BG-tower.
  - **PR07-giantsword (new):** 1152×2048 on flat magenta, with a thick white die-cut border, generated with SW and F-charge attached.
    - Prompt: "Her sword alone at high resolution, in the same chibi sticker style: upright, point up, seen from the front exactly as she holds it overhead, a translucent glass blade with faint cyan lines, the dark gunmetal crossguard bent like a return-key arrow with cyan edges, the red-cord grip, the jade-disc pommel and its long red tassel hanging down. No glow, no effects, no text."
    - Code adds the glyph streams and the light. Rotate it in code; never mirror it.
  - **BG07-city-level (new):** 2560×1440, prompt after the anchor: "The whole city at night seen from 300 m above its centre, looking north, painted for a camera pitched about 10° down: the horizon about a third of the way down the picture, the city's lights, avenues, pagoda roofs and megastructures spreading below it, the city's tallest tower right of centre, the attached central tower (a thirteen-storey pagoda fused with a megastructure spire, upturned eaves, a ring of blank panels at its waist, its needle antenna below the horizon), mist over the far districts. Keep the sky above the horizon plain dark: it will be covered."
    - The central tower BG-tower, attached: generate the plate with BG-tower attached so the painted tower is that tower. Code places the plate so the painted tower sits at its world position (90, 0, −700); in S07-16's last frame that puts it at about x 1290, its top near y 410.

#### S07-15 · f3650–f3669 · 20 f · 121.67–122.30 s · bar 80.8–81.3
- **Music:** 一 f3650 (just after beat 4 on f3648), an 8th on f3653, 剑 f3658, the bar 81 downbeat f3659, an 8th on f3665: the breath before the slam.
- **Lyric:** 「一剑劈开数据界」 begins with 一 f3650 · 剑 f3658 in slot C (一 x 320–490, 剑 490–660, y 830–1000).
  - The stroke paints over f3648–f3652 across x 290–1630, room for the seven characters with 劈 larger.
  - The characters slam, with a glow pulse on f3659.
- **Picture:** an insert of the sword's tip against the ceiling of red text; she is not in the shot.
  - **Above:** the Red Canopy's underside fills the upper half: cinnabar stack-trace rows (`at recurse (jianghu.js:42:7)` repeated, `RangeError: Maximum call stack size exceeded`) receding east.
  - **The blade:** the giant sword's upper blade, 6 m wide with glyph streams flowing up it, enters from the bottom edge, its tip 56 m short of the ceiling.
  - **Below:** the far eastern haze of the city (BG07-city-aerial `-far`, defocused 8 px).
- **Action:**
  - f3650 一: she rises (out of shot, 300 → 315 m over 8 f, ease-out), and with her the giant sword. The blade slides up through the frame and its tip climbs toward the ceiling, the glyph streams racing.
  - f3653 (8th): red glyph vapour sheds from the canopy toward the rising tip.
  - f3658 剑: **the tip pierces the canopy.**
    - A ring of cracks runs out across the red ceiling from the tip, with white hairlines through the glyphs.
    - A 4-point star glints at the point.
    - Red glyphs rain down past the lens and turn to ink as they fall.
  - f3659 (bar 81 downbeat): the cracked ring of canopy round the tip sags 3 m, its glyphs dimming.
  - f3660–f3669: **wind-up.** The blade tilts back 3° (it slides 40 px left in frame) and the cracks creak wider. Over f3667–f3669 every glyph stream in the blade stops: silence before the hit. This is not a hit-stop; the camera keeps creeping.
- **Camera:** at (−30, 468, −412), 30 m west of the blade, looking east and 12° up at the tip and the ceiling. FOV 45°. A creep-in of 2.5 %/s.
- **Grade / R:** the ceiling cinnabar, the blade cyan, the haze below ink-blue. R 0.38.
- **Out:** hard cut on 劈, f3670, straight into the impact frame.
- **Art:** PR07-giantsword (out of frame; the blade here is code); BG07-city-aerial `-far`.

#### S07-16 · f3670–f3703 · 34 f · 122.33–123.43 s · bar 81.3–82.0
- **Music:** the slam on 劈 at f3670 (bar 81 beat 2). Then 开 f3676 (8th), 数 f3681 (beat 3), an 8th on f3687, 据 f3690, beat 4 on f3693, and 界 f3697 with the 8th on f3698. Hook 2's suona enters on the bar 82 downbeat, f3704 (part 08).
- **Lyric:**
  - 劈 f3670, 260 px, in slot C at x 660–920, y 740–1000, bottom-aligned with the band. It is the biggest slam of the part (170 % → 92 % → 100 %), with a cyan glow burst and an ink splash round it.
  - 开 f3676 · 数 f3681 · 据 f3690 · 界 f3697 at x 920–1090, 1090–1260, 1260–1430 and 1430–1600, y 830–1000. They slam, with glow pulses on f3681 and f3693.
  - The whole line 「千行剑 千行剑 一剑劈开数据界」 stays on screen through f3703. It must hold into part 08 until at least f3721 (0.8 s after 界).
  - **Hand-off to part 08 (these positions stand).** On f3703 the lyric layer holds exactly this, and part 08 keeps it unmoved until at least f3721:
    - 千行剑 in slot A: x 260–920, y 110–330 (cells x 260–480 / 480–700 / 700–920), with gutter `4` beside it at x 223–240, y 206–234.
    - 千行剑 in slot B: x 1430–1650, y 250–910 (cells y 250–470 / 470–690 / 690–910).
    - 一剑劈开数据界 in slot C: x 320–1600, y 740–1000. 一 is at x 320–490, 剑 490–660 and 劈 660–920 (y 740–1000); 开 920–1090, 数 1090–1260, 据 1260–1430 and 界 1430–1600 sit at y 830–1000. Its wet stroke runs x 290–1630. The cut at x 960 crosses 开.
    - Part 08 does not move these boxes and does not lift slots B and C above y 420. Her face (box about x 933–987, y 558–608 by f3703) stays clear of all three. The tower's upper part (y 410–740) is clear of them too; its lower body passes behind 数据 in slot C.
- **Picture:** front, looking north from 300 m over the altar.
  - **Above:** the Red Canopy across the top band, receding north.
  - **Below:** BG07-city-level, the city to the horizon, which sits at about y 250 by f3703. The line's border runs straight north from below her: cyan to its left, red to its right toward the central tower.
  - **The central tower, BG-tower:** painted into BG07-city-level and placed at its world position (90, 0, −700), 118 m tall, in the right third. On f3703 it stands at about x 1290, its top near y 410, its base below the frame's bottom edge. It is left of slot B (x 1430–1650) and well right of her.
  - **Behind the canopy, revealed by the cut:** the clear night sky (BG06-cloudsea `-far`) and PR06-moon.
  - **Her:** **F-chop** (front: crouched, both hands low, the blade pointing straight down between her feet) on the raft.
    - 420 px and centred at the start (x 760–1160, y 400–820; face box x 880–1040, y 410–560).
    - 140 px by the end, at (960, 555–695).
- **Action:**
  - f3670 劈: **F-charge → F-chop.** She drops 15 m with the chop, back onto the raft, already at her new place on the hit frame.
    - **Impact frame** (2 f, f3670–f3671; **large flash 4**, one of the film's twelve) in three tones: an ink ground, a paper-white cut line with radial brush lines, and cinnabar canopy. Her F-chop silhouette is inverted, paper on ink.
    - The giant sword falls with her chop: its blade sweeps down through the frame along the vertical at x 960, a single smeared streak in front of her.
    - A white-core cyan cut line runs from the top of the frame to the bottom through her centre, x 960: up through the canopy and down the city along the line of code.
  - f3672–f3675: **hit-stop** (6 f in all, f3670–f3675; colour back, the frame frozen except for the shake). The cut line burns, sparks crawl along it, and the falling glyphs and ink hang still.
  - f3676 开: the world resumes.
    - **The canopy splits along the cut.** The left half bursts at its edge into ink and drifts west, thinning. The right half slides east and sags, still cinnabar, toward the central tower.
    - The gap between them widens at 2 m/f, accelerating to 4 m/f, and the cut edges burn cyan and shed red glyphs that turn to ink.
    - The giant sword drives on down the cut plane and bursts back into its 3,000 swords.
  - f3681 数 (beat 3): the 3,000 swords rain down along the cut line onto the city and plant themselves along it like stitches: a dotted line of cyan from below her to the horizon.
    - A cyan wave spreads from the stitched scar over the left (west) half, flipping its last red boards cyan.
    - On the right, the red boards flare and lean toward the tower.
  - f3687 (8th): moonlight. PR06-moon appears in the widening gap in the canopy, straight above the cut, and a shaft of moonlight falls down the cut onto the city.
  - f3690 据: the wave reaches the west horizon. The canopy halves are 30 m apart.
  - f3693 (beat 4): the cut line's glow cools to a thin cyan scar, 3 px, running from the top of the frame through her to the bottom. Part 08 cuts along it.
  - f3697 界: **R 0.35**, the city cyan left of the line and red right of it toward the tower.
  - f3698–f3703: the halves keep parting (40 m apart by f3703, still opening at 4 m/f). She holds F-chop on the raft, breathing ±1.2 % and drifting 4 px down. Red glyphs and ink flakes fall through the moonlight past her.
- **Camera:**
  - Starts 4 m in front of her (south) at her chest height, (0, 300.8, −416), looking north, FOV 50°.
  - Punch L on f3670 (+8 % over 2 f, back over 10 f). Shake L (16 px, 1.5° roll) from f3670, decaying over 14 f. The drift is frozen in the hit-stop.
  - From f3676 it cranes back and up to 10 m in front and 3.8 m above her chest, (0, 304.6, −410): pitch 0 → −16°, FOV 50 → 56°, ease-out.
  - It stays centred on the cut plane, so the cut stays at x 960, and it is still moving on f3703 (0.15 m/f).
- **Grade / R:** impact-frame tones on f3670–f3671, then moonlit night. City R 0.38 → 0.35, carried by the wave over f3681–f3697. The canopy's right half and the right of the city keep their cinnabar: the leftover red for Hook 2.
- **Out:** part 08 owns the transition at f3704, a slash-line wipe along this shot's vertical cut at x 960. It opens on the lyric positions above and the tower at about x 1290, top near y 410.
- **Art:** F-chop; PR07-giantsword; SW (instanced); BG07-city-level, with the central tower BG-tower; BG06-cloudsea `-far`; PR06-moon.

**State out (f3704):**
- **Her:** she holds F-chop on a raft of sixty swords, 300 m above the Root Altar at (0, 300, −420), facing the camera. She is about 140 px tall at screen (960, 555–695), her own reforged sword in both hands.
- **Camera:** 10 m south of her and 3.8 m above her chest, pitched −16°, FOV 56°. It is centred on the cut plane and still craning back at 0.15 m/f.
- **The cut:** a thin cyan scar runs vertically at x 960 from the top of the frame through her to the bottom, along the city's border line, stitched with 3,000 planted swords.
- **The city:** R 0.35. Left of the line it is cyan; right of it, red on the boards toward the central tower BG-tower (right third, about x 1290, its top near y 410, its base below the frame). Chorus 2's ink stains stay on the roofs.
- **The sky:** the Red Canopy is cleaved, its halves 40 m apart and parting at 4 m/f. The left half is thinning into ink; the right half sags cinnabar over the right of the city toward the tower, which is where part 08's drain begins. PR06-moon sits in the gap above the cut, with moonlight falling down it.
- **Formation:** none in the air; all of it is planted in the scar or in the raft.
- **Lyric:** 「千行剑 千行剑 一剑劈开数据界」 on screen. 千行剑 in slot A (x 260–920, y 110–330), 千行剑 in slot B (x 1430–1650, y 250–910), and 一剑劈开数据界 in slot C (x 320–1600, y 740–1000, crossing x 960). The dim line number `4` (JetBrains Mono 28 px, paper at 35 %) sits beside slot A at x 223–240, y 206–234. Part 08 holds all of it, unmoved, to at least f3721, keeps her face clear of all three boxes until then, and exits the gutter with the line.
- **Music:** Hook 2's suona downbeat at f3704. No rain above the canopy line; light rain in the city below.

**Art in this part:**
- **Registry drawings:** B5, B6, B7, B8, C7, C8, F-sword_finger, F-landing, F-enter, F-thrust, F-charge, F-chop, SW (instanced as the formation; floating in S07-08; planted in S07-11).
- **New chibi drawing:** N07-tuck (S07-05; also S07-13).
- **Reused from part 02:** PR02-enterkey (the giant Enter keycap) and PR02-lantern (the test-runner lanterns and the canyon lanterns).
- **Reused from part 06:** PR06-moon, BG06-teststreet `-far`, BG06-stormsky `-far`, BG06-cloudsea `-far`. The reforged blade is part 06's code treatment, raised one step here.
- **Shared:** BG-tower, the central tower, attached when generating BG07-city-aerial and BG07-city-level and painted into them.
- **New backgrounds:**
  - BG07-teststreet-west and BG07-teststreet-east (S07-01);
  - BG07-canyon-far, BG07-canyon-wall-a and BG07-canyon-wall-b (S07-05);
  - BG07-roofs-far and BG07-roofs-mid (S07-07); BG07-roofs-near (S07-08);
  - BG07-city-aerial `-far`, `-mid` and `-near` (S07-09);
  - BG07-plaza-far and BG07-plaza-mid (S07-10);
  - BG07-city-level (S07-14).
- **New props:**
  - PR07-paving and PR02-enterkey's top view, an edit of PR02-enterkey (S07-01);
  - PR07-altar (S07-09);
  - PR07-altar-top and PR07-balustrade (S07-10);
  - PR07-giantsword (S07-14).
- **New total:** 1 chibi drawing + 14 background images (counting each layer of BG07-city-aerial) + 6 props = 21 images.
- **Shown large:** B5/B6 at 1,600 px (S07-02), F-thrust at 1,100–1,700 px (S07-04), F-sword_finger at 930 px (S07-07) and F-charge at 1,250 px (S07-14). Add F-thrust, F-sword_finger and F-charge to the cells shown large.
- **Drawn in code, defined here:**
  - the frozen rain and the cyan beads;
  - the 0/1 strings;
  - the formation with its code tails, the fork and join, the wedge, the dome and snow, the river and lake, the armillary rings, the line of code and its cursor, the helix, the halo, the raft and the giant sword's blade;
  - the Night Curtain;
  - the roof leaks and the cyan chain;
  - the `whoami` / `root` terminal chip;
  - the line-number gutter `1`–`4` beside the chorus lines;
  - the Red Canopy;
  - the stitched scar;
  - every slash, crack, smear, spark, ink burst, shock ring, speed line and impact frame;
  - the HUD reticle;
  - the signboard text;
  - the lyrics.
