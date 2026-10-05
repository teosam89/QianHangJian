## Part 03 · Pre-Chorus 1 and Chorus 1 · f1077–f1633

Current climbs her arm into the blade, the log rain stops in mid-air, the street drains to grey and its text decays
into 0s and 1s; on 定 her eyes open and every hanging line turns cyan. A thousand lines become a thousand swords, and
on 破 her issen cuts the frozen street open onto the data world: the first WebGL station journey, one set piece per
line (the Long Night, the Scrolls of 红字劫, the Bug Terraces in snow, the Summit of the code city, the Split). On 劈
(f1600) the formation's Giant Sword, about 40 m, cleaves the data world in two; R 0.90 → 0.80. 15 shots.

### The space, the stations and the lyric layout (parts 07 and 11 reuse these)

**One canvas.** The whole part renders in one `@remotion/three` canvas, `SwordSpace`, built like tokentoken's token
space (`../tokentoken/src/mv/space.tsx`): camera keys as pure functions of the frame, instanced elements, and the DOM
(the lyric layer) composited on top. The pre-chorus is in the canvas too: part 02's street plates (BG02-street) are
billboards at three depths, so the bullet-time moves through the frozen rain have real parallax, and on 破 the plates
are what gets cut. Units: y up, the journey runs toward −z, and 1 u is half her height (she is 2 u tall; the sword SW
is 2 u at 1.0×). In metres 1 u = 0.5 m: she is 1 m tall, and BG02-street's 0.6 m eye level is y 1.2 u. FOV values are
vertical. Drum hits in the Music lines come from the onset grid of fight-design §1
(`grid.py`/`stab.py` over the mp3), bars 23–35.

**Her planes.** Every chibi drawing is a textured plane with alpha, locked to face the camera's arrival direction for
the shot; the camera never views it more than 20° off its normal (fight-design §8). Two rim lights are offset coloured
drop-shadows on the sticker: cinnabar from the red side, cyan from her blade. Swords pass in front of and behind her,
depth-sorted. She is never mirrored.

**The formation.** Exactly 1,000 instanced SW sprites, one per "line" of the thousand. They are plain swords with
no code tails. The choruses escalate (rulings G4) and Chorus 1 is the first step: 1,000 plain swords, 3,000
snow-swords and a Giant Sword of about 40 m. Chorus 2 (part 07) has 3,000 swords each trailing a line of real code,
9,000 snow and 120 m; the final chorus (part 11) has 10,000, 27,000 and 300 m. Each sword is an axial billboard: it
turns about its own blade axis to face the lens, so its painted face always shows and it is never mirrored. Size 2 u
at 1.0×, with an additive cyan glow sprite (3× its width, 35 %) and up to 6 trailing ghost copies when it moves
faster than 30 u/s (motion ghosts of the sprite itself, never text). Shapes are closed-form functions of the sword
index and the frame, and changes between shapes ease with a per-sword delay. Named shapes in this part, in order:
**Rain** (frozen log lines turning into swords) → **Rank** (20 rows × 50 deep) → **Goose** (a V of 2 × 500) →
**Thousand Cuts** (25 × 40, every sword copies her cut) → **Canopy** (5 rings) → **Snow** (each sword splits into 3
snow-swords, 3,000) → **Pins** (each snow-sword pins a bug hole) → **Throne** (3 rings around her) → **One Line** (end
to end, 2,000 u) → **Vortex** (a rising helix) → **Giant Sword** (fused, PR03-giantsword, 80 u, about 40 m: a 14 u
grip standing on her own blade tip, a ⏎ crossguard 14 u wide, a 66 u blade).

**Stations.**

| # | Station | Lyric | Where (u) | Set piece | Formation | What 07 / 11 can vary |
|---|---|---|---|---|---|---|
| 0 | 「静」 the Still | 电流穿过 … 胜负已定 | her feet at (0, 0, 0); plates at z −90 / −18 / +2.4 | the frozen street: 6,000 hanging log-rain lines decaying into 0/1 | Rain | location; the eyes open on 定 in every pre-chorus, and in both pre-choruses the frozen drops become the formation (a rhyme on the same music) |
| 1a | 「破」 the Night Wall | 破 | the station-0 plates | the pre-chorus world cut open by the line's first slash | Rank → through the gap | C1 horizontal issen; C2 `thrust` shatters it toward the lens; Final triple issen (fight-design §8) |
| 1b | 「长夜」 the Long Night | 长夜 光速 | tunnel axis (0, 4, −20) → (0, 4, −500), radius 14–40 | 2,400 red error lines (≈60,000 glyphs) streaming at the lens: error messages, stack-trace rows, request lines and status codes only | Goose | red density by R; speed |
| 1c | 「红字劫」 the Scrolls | 斩尽红字劫 | z −505 … −560, x −6 … −30 (beyond her path) | 9 hanging scrolls (PR03-scroll) of red stack traces, 30 far ones | Thousand Cuts | scroll count; the 劫 scroll's text |
| 2 | 「落如雪」 the Bug Terraces | 千行剑 落如雪 万般漏洞皆可解 | her ledge at (140, −20, −760); the terraced slope across the valley at z −900 … −980 | 60 terraces of code with 3,000 red bug holes | Canopy → Snow → Pins | hole count; how far the cyan chain runs; snow 3,000 here, 9,000 in 07, 27,000 in 11 |
| 3 | 「谁做主」 the Summit | 赛博江湖 谁做主 一行代码定生灭 | the master pagoda's top platform at (140, 30, −1300); the code city in a basin, z −1050 … −1700 | 40 pagodas written in code round the master pagoda, the code image of the central tower BG-tower; BG03-summit (an edit of BG-tower's top) at the tip; the one line `$ kill -9 %red_tide` | Throne → One Line | how much of the city the line kills |
| 4 | 「劈开」 the Split | 千行剑 千行剑 一剑劈开数据界 | the Summit again | the Giant Sword (about 40 m); the vertical cut through the whole data world | Vortex → Giant Sword | the sword's size (120 m in 07, 300 m in 11); Final: the cut lands on the red `-` diff line instead (fight-design §9) |

**Red in the data world.** R is the city's red level. Inside the data world it reads as the share of red glyph lines
in the far structures and the strength of the cinnabar glow at the horizon (0.90 here). Set pieces she destroys turn
ink-black or cyan locally, but R itself stays 0.90 until 劈 opens the data world onto the city at 0.80.

**Post pass.** The "code" look: bloom on cyan and white (threshold 0.7, radius 24 px), cinnabar at half strength;
paper-texture multiply and grain on everything; zoom blur only on the tunnel background (capped, never on her, never on
a lyric). The lyric layer is composited after the post pass and does not shake.

**Pre-chorus lyric.** 得意黑 Smiley Sans Oblique, 64 px, paper #EDE4D3, one centred line on y 902, letter-spacing
0.12 em. The plate is a thin ink-wash band, 1040 × 104 px, ink #0B0B10 at 50 %, feathered 40 px with a dry-brush top
edge. Each character fades in over 4 f from its sung frame, with no slam. Characters sung while the rain falls drop
8 px into place with it; characters sung after the freeze just appear and hang still. When the next line starts, the
previous one shrinks to 80 % and lifts 72 px above it.

**Chorus lyric: the couplet layout.** 志莽行书 Zhi Mang Xing, paper #EDE4D3. Every chorus line is set in three slots,
like a couplet with its scroll:
- **Slot R** (the right column, the line's first phrase): vertical, centre x 1500, top edge y 210. A 3-character
  phrase is 190 px with a 196 px step (y 210–792). The 4-character 赛博江湖 is 160 px with a 160 px step (y 210–850).
- **Slot L** (the left column, the second phrase): vertical, centre x 420, top edge y 170, 190 px, step 196
  (y 170–752).
- **Slot B** (the bottom row, the seven-character phrase): horizontal, centre y 935, 160 px, step 168, centred on
  x 960 (x 372–1548, y 855–1015). Its fourth character sits on x 960, so in the last line 开 sits on the 劈 cut.
- **Plate:** a wet ink stroke behind each phrase (ink at 80 %, a paper sheen line at 12 % on one edge, a dry-brush
  tail), painted along the slot in 4 f, starting 2 f before the phrase's first character. Columns are 250 px wide, the
  row 1300 × 210 px.
- **Gutter** (rulings G4): each chorus line carries its line number, `1` to `4`, in a dim line-number gutter, so
  that the final chorus's `@@ -4 +4 @@` diff (part 11) reads as a payoff. JetBrains Mono Regular, 28 px, paper
  #EDE4D3 at 35 %, no glow, no slam. It sits at the head of slot R, the line's first phrase, the way an editor numbers
  a wrapped line once on its first row: centred on x 1500, the digit in y 170–198, 12 px above the column's first
  character. Slot R's plate gets a narrow dry-brush head (x 1465–1535, up to y 158) to carry it, so neither the
  number nor the plate enters the watermark corner. Slots L and B, the continuation rows, carry no number. The number
  fades in over 4 f from the line's first character and leaves with slot R's phrase (4 f fade as the next phrase's
  plate starts), so one number is on screen at a time (with a 2 f crossfade at each change) and it counts 1, 2, 3, 4
  with the lines. It moves with slot R (counter-drift and beat scale). Part 07 uses the same gutter; part 11 keeps
  its own.
- **Entry:** each character slams on its sung frame: scale 140 % → 96 % → 100 % (3 f, then a 2 f overshoot),
  opacity to 100 % in 1 f, 3–6 ink flecks thrown 20–40 px. Glow: a cyan #19F0C8 text-shadow, 18 px, swelling to 30 px
  on every beat and decaying over 6 f. 红字劫 glow cinnabar #E8381F.
- **Exit:** when a slot's next phrase starts its plate, the old plate dries and flakes (6 f, drifting down 30 px) and
  its characters fade (4 f). Each slot refreshes on its own phrase, so one full line is always readable, and every
  bottom row stays at least 1.6 s after its last character.
- **Motion:** slots counter-drift 5 % of the camera's lateral screen motion and scale +2 % on beats 1 and 3.
- **Safe areas:** all slots and the gutter sit inside the 60 px margin and the central 4:3. Slot R and its gutter
  never enter the watermark corner (x > 1560, y < 200). Her face stays out of all three slots in every shot.

---

#### S03-01 · f1077–f1122 · 46 f · 35.90–37.43 s · bar 23.62–24.64
- **Music:** a band hit on f1077 (35.90: kick, snare and mid together) under the pickup 电, inside the snare fill part
  02 starts on f1074. More fill notes on f1085 · f1088 · f1091. On f1094, the bar 24 downbeat on 过, the pre-chorus
  begins: the sub drops out (22.7 dB against 34.5 in the verse) and the harmony leans to C♯ minor. Soft beats on f1105
  and f1116; a mid accent on f1122.
- **Lyric:** 「电流穿过 万籁俱静」, first half: 电f1078 流f1082 穿f1089 过f1094. Pre-chorus style (above), the line
  centred on y 902. The band fades in over f1077–f1080 (part 02 cleared the layer by f1076). Each character drops 8 px
  into place with the rain over its 4 f fade. 过 carries a faint cyan underglow for 6 f (the current).
- **Picture (back to front):**
  - BG02-street (part 02's avenue, shot on its own axis toward the archway): `-far` (the archway and far facades) as a
    billboard at z −90, `-mid` (the near facades and the paving) at z −18. Every signboard is cut in half along its
    middle by part 02's sweep: the upper halves still red at R 0.90, the lower halves gone to ink, with ink stains on
    the flagstones.
  - PR02-enterkey behind her on screen-right (x 1180–1760, its top face at y 640), released and up, its ⏎ glowing soft
    cyan, as part 02 leaves it.
  - Her: B5 vow, eyes closed, 470 px tall, feet at (820, 930), the glass blade upright beside her face on screen-left.
  - Log rain (part 02's spec): about 6,000 drops in the street's volume (x −14…14, y 0…9, z −18…+5 u). Each drop is
    one log line set vertically in JetBrains Mono, grey #9A968C at 35–70 %, one in six an error line in cinnabar,
    falling 1,400–2,200 px/s with a 1.4× streak. The last of part 02's ink rain thins out among them. Drops that land
    split into glyphs on the flagstones, and cyan ripples run through the puddles from the key.
  - BG02-street `-near` (the closest sign posts at both edges), out of focus.
- **Action:**
  - f1077: a hard cut on the band hit, not a continuation of part 02's last frame (rulings G6). Part 02 leaves her in
    B4 with feet at (760, 850), 400 px tall, beside the key. This shot re-establishes her in its own framing: the
    same street on BG02-street, on the same axis, and PR02-enterkey exactly as part 02 left it (x 1180–1760, its top
    face at y 640, released, its ⏎ soft cyan), with the boards halved. Across the cut she has settled out of B4 into
    B5 and taken a step toward the lens: feet at (820, 930), 470 px. The last ink drops fall from the halved boards.
  - f1078 电: a cyan arc (3 px white core, 10 px cyan body, branching sparks) jumps from the keycap's ⏎ to her boot
    soles. The soles flare and the ⏎ dims 30 % as the current leaves it.
  - f1082 流: the current climbs her: a band of cyan rim light rises up her alpha mask from boots to shoulders over 6 f.
  - f1085, f1088, f1091 (the fill): one spark crackles along her cybernetic arm's seams per note (the measured seam
    polylines of B5).
  - f1089 穿: the current runs down the seams from shoulder to wrist (4 f) and into the grip. The ⏎ crossguard flares
    (glow ×2 for 4 f).
  - f1094 过 (bar 24): the current runs up the glass blade from the crossguard to the tip in 6 f, and the blade's inner
    code light lines run upward with it. f1100: a 4-point star glints at the tip.
  - f1094: the sub drops out. The neon boards' flicker slows to half its rate over 12 f.
  - f1094–f1122: a soft cyan field around her. Log lines falling within 70 px of the blade bend aside (a closed-form
    curve) and hiss into cyan mist.
  - f1105, f1116 (beats): the blade's inner light and the arm seams pulse +15 %, decaying over 6 f.
  - f1116–f1122: the rain starts to slow (100 % → 70 % speed) and the streaks shorten until the falling text is almost
    legible: the first sign of the freeze.
  - Throughout: B5 breathes ±1.2 % scale, one cycle per bar.
- **Camera:** medium-full, frontal, at her chest height (BG02-street's eye level, 0.6 m above the paving). Camera
  (−0.5, 1.2, 6.2) looking at (−0.5, 1.1, 0), FOV 42, pushing to (−0.5, 1.25, 5.5) by f1122 (ease in-out), so she grows
  from 470 to 520 px. No shake. Her key light is the blade's cyan from screen-left; the key's ⏎ and the red boards rim
  her from screen-right.
- **Grade / R:** R 0.90: rain and sky graded toward cinnabar; full colour.
- **Out:** hard cut on 万 f1123.
- **Art:** B5; BG02-street (part 02); PR02-enterkey (part 02), in this shot's own framing after the cut.

#### S03-02 · f1123–f1138 · 16 f · 37.43–37.97 s · bar 24.64–25.00
- **Music:** 万 lands on the mid accent (37.40). Beat 4 on f1128. There is no kick or snare in this stretch; the next
  downbeat is 静 on f1139.
- **Lyric:** 万f1123 籁f1127 俱f1136, the second half of the line. These characters fade in without the drop: they hang
  still, like the rain.
- **Picture:** wide and frontal down the avenue toward the archway, BG02-street at full width. Her: B5, 190 px, feet
  at (900, 820). PR02-enterkey just to her right (x 980–1200). All 6,000 log lines in view, the near ones as long
  out-of-focus streaks across the frame. The halved boards up both facades.
- **Action:**
  - f1123 万: hard cut. On the cut frame the rain is still falling at 70 % speed, and over f1123–f1125 it stops
    (70 % → 0, ease-out). Every drop hangs in mid-air. The 1.4× streak drops out and each drop resolves into a crisp
    vertical line of glyphs, now readable: `INFO  heartbeat ok`, `WARN  retry 3/5 upstream slow`,
    `ERROR 502 Bad Gateway`. The glyphs bouncing off the flagstones freeze mid-bounce.
  - f1127 籁: the colour drains. A ring of desaturation spreads from her chest (radius 0 → 1,400 px over f1127–f1136,
    ease-out). Inside it saturation falls to 12 %. The cinnabar error lines in the rain and the red halves of the
    boards turn ash grey (#6E6A64), and the hanging log text goes pale grey. Only her cyan stays (blade, seams,
    monocle, hair tips, soles), plus the key's ⏎.
  - f1128 (beat 4): the neon flicker stops dead. Every board holds its brightness.
  - f1136 俱: the last movement stops. One log line near the lens at (1500, 300), still trembling, goes still, and the
    cyan ripples in the puddles freeze as rings.
- **Camera:** wide at her chest height: camera (−0.5, 1.2, 16) looking at (−0.5, 1.6, 0), FOV 40. It dollies forward
  0.5 u over 16 f (about 3 %/s). The world is still and the camera is not: bullet time.
- **Grade / R:** R 0.90 underneath, invisible: saturation drains to 12 % (her cyan excepted) by f1136, contrast +10 %,
  and the rain's cinnabar tint goes grey with everything else.
- **Out:** hard cut on 静 f1139 (bar 25).
- **Art:** BG02-street; PR02-enterkey; B5.

#### S03-03 · f1139–f1183 · 45 f · 37.97–39.47 s · bar 25.00–26.00
- **Music:** bar 25 downbeat on 静 f1139 (mid only); beats f1150, f1161, f1173; a light snare on f1167 under 零; a sub
  and mid hit on f1178 (39.28).
- **Lyric:** 静f1139 completes line 1 (fades in, still). Line 2 「零与一间 胜负已定」 begins: 零f1168 与f1174 一f1181. On
  f1168 line 1 shrinks to 80 %, lifts 72 px (to y 830) at 45 % opacity, and fades out over f1184–f1189. Line 2 takes
  y 902 on the same band. 零 and 一 carry a 1 px paper outline glow: they are the 0 and the 1.
- **Picture:** medium. Her: B5, 380 px, feet at (960, 940). The drained avenue behind, depth-of-field blurred 6 px.
  The frozen log lines in three depth bands: near the lens (z 3.5–5.5 u; the 16 px lines, out of focus), around her
  (z −2…2 u; the 13 px lines, sharp and legible), and far (z −2…−16 u; the 11 px lines, fine grey hatching).
- **Action:**
  - f1139 静: cut in. Everything is still except the camera.
  - f1139–f1183: as the camera passes, the near lines slide across the lens and every glyph's edge catches a faint
    specular glint that travels with the angle.
  - f1150, f1161, f1173 (beats): 10 % of the mid lines ping, a 2 f glint running down the line: a soft glitter on the
    beat.
  - f1168 零: the text starts to decay into binary. In 8 % of the hanging lines the characters flip one by one into `0`
    and `1` (JetBrains Mono Bold, paper #EDE4D3, one glyph per frame from the top of the line down), and the binary
    glyphs come loose and drift (8–14 px/s in slow random directions, turning at most 12°/s), with a soft white glow.
    Unlike the rain, they move.
  - f1174 与: 16 % of the lines are flipping, some in the near band as large out-of-focus 0s and 1s.
  - f1178 (sub hit): one slow pulse of light through the loose 0s and 1s (glow +40 %, decaying over 10 f).
  - f1181 一: 24 %, about 400 loose glyphs in view. The 1s nearest her blade turn upright, parallel to it.
  - Throughout: B5 breathes ±1.2 %; the blade's inner light pulses once per bar.
- **Camera:** a bullet-time arc. The camera trucks left to right around her through 26° (from −13° to +13° about her
  plane's normal) at radius 8.2 → 7.8 u, at her chest height, over 45 f (ease in-out), FOV 38. The near lines sweep
  right to left across the lens fast; the far ones barely move.
- **Grade / R:** drained, 12 % saturation, her cyan at full; a cold silver key light.
- **Out:** hard cut on 间 f1184 (bar 26).
- **Art:** B5; BG02-street (blurred).

#### S03-04 · f1184–f1228 · 45 f · 39.47–40.97 s · bar 26.00–27.00
- **Music:** bar 26 downbeat on 间 f1184 (snare and mid); beat 2 on f1195. The drums return in the second half of the
  bar: snare f1201, kick f1204, mid f1207, kick f1212, snare and mid f1215, kick f1220, snare and mid f1223. 定 lands on
  f1224, right on the last hit. Bar 27 on f1229.
- **Lyric:** 间f1184 胜f1197 负f1202 已f1217 定f1224, line 2 continuing (fade-in, still). On 定 the whole line's glow turns
  cyan (text-shadow 0 → 14 px over 3 f) and 定 itself is tinted cyan (60 % #19F0C8): the one coloured word.
- **Picture:** close-up. Her: N03-vow_close, eyes closed, face centred at (960, 470), the blade vertical beside her face
  on screen-left (x 700), two fingers of her sleeved left hand resting on its flat. Frozen log lines and loose 0/1
  glyphs in front of and behind her face, the nearest as big out-of-focus text. The drained avenue far behind, blurred
  12 px.
- **Action:**
  - f1184 间: cut in. Still.
  - f1197 胜: the loose 0s and 1s around her start to stream slowly toward the blade (at most 30 px/s).
  - f1201–f1223: on each returning drum hit (f1201, f1204, f1207, f1212, f1215, f1220, f1223) every hanging line
    trembles, a jitter decaying over 3 f that grows from 1 px to 3 px across the run. The stillness strains.
  - f1202 负: the binary splits into two streams around her face: the 1s rise on screen-left along the blade, the 0s
    sink on screen-right.
  - f1207: a hair-thin line of current runs up the blade once (an echo of 过).
  - f1217 已: the tremble peaks. The blade's inner light swells (+60 % over 6 f) and the two streams accelerate into the
    blade, absorbed by f1223.
  - f1223 (snare and mid): a 1 f exposure dip of −15 %, an intake of breath.
  - f1224 定: swap to N03-vowOpen_close in the same place: her eyes open, cyan, with a sharp confident smile. Every
    hanging log line turns cyan at once: its glyphs flip from grey to glowing cyan (#19F0C8 with a white core), with a
    bloom that peaks on f1224–f1225 and decays over 10 f. This is a large flash (one of four in the part). The monocle
    throws a 6 f horizontal cyan streak flare, 600 px long, and her fibre-optic hair tips brighten.
  - f1225–f1228: the cyan lines hold and shimmer (each one's glow modulated by hash noise).
- **Camera:** close-up, level at her chin: camera (0, 1.55, 1.9) → (0, 1.55, 1.7), FOV 34, a +10 % push over the
  shot (ease-in) with a 10 px drift left. On 定 f1224, punch S (+3 % over 2 f, back over 6 f).
- **Grade / R:** drained (12 %) through f1223. From f1224 the rain is full-saturation cyan while the rest of the world
  stays drained. R 0.90, hidden.
- **Out:** hard cut on the bar 27 downbeat, f1229.
- **Art:** **N03-vow_close (new)**: head and shoulders (cut at mid-chest) of B5 vow, front view, camera level at her
  face, 1536×2048 on flat magenta with the white die-cut border, the face about 700 px wide. Eyes closed, calm and
  serene. The sword is upright in her cybernetic right hand (screen-left), in front of her right shoulder, the glass
  blade vertical beside her face without covering it, the ⏎ crossguard at the bottom edge. Her left hand, the wide
  sleeve falling from the wrist, reaches across to rest the sword-finger sign (index and middle fingers) against the
  flat of the blade. The monocle on her left eye (screen-right), its white frame curving round her ear into the mic.
  The chevron hair clips; bangs and ribbon tails hanging still. **N03-vowOpen_close (new)**: identical, made as a masked
  edit of N03-vow_close's eyes and mouth: eyes open, bright cyan, a sharp confident little smile. No text in either.

#### S03-05 · f1229–f1288 · 60 f · 40.97–42.97 s · bar 27.00–28.33
- **Music:** bar 27 on f1229. The build: four hits on the 8ths, f1235 · f1240 · f1246 · f1252 (mid and snare,
  rising), then mid on f1257 and f1260, hat and mid on f1268. **Chorus 1's downbeat, bar 28, on f1274** (kick, snare
  and crash). The vocal 破 on f1276; beat 2 on f1285.
- **Lyric:** the pre-chorus line holds until f1253 and fades out over f1254–f1257 (定 + 30 f). Chorus line 1
  「千行剑 破长夜 光速斩尽红字劫」 starts in the couplet layout. Slot R: plate f1254–f1257, then 千f1256 行f1264 剑f1269 slam
  (190 px). The gutter's `1` fades in at the head of slot R over f1256–f1259 (x 1500, y 170–198). Slot L: plate
  f1274–f1277, then 破f1276 slams with the cut.
- **Picture:** medium-wide and frontal. The drained avenue (BG02-street, sharp again, 12 % saturation). Her: B6, 360 px,
  feet at (960, 905). The 6,000 frozen log lines glowing cyan in the street's volume. PR02-enterkey on the right
  (x 1420–1800). The ash-grey halved boards.
- **Action:**
  - f1229: cut in. B6 (eyes open, sharp smile); the cyan lines hold, glowing.
  - f1235 (build hit 1): the 250 log lines nearest her (within 5 u) become swords. Each line pivots over 3 f from
    vertical to horizontal, pointing screen-right (+x), and its glyphs fuse along it into a blade; then the SW texture
    fades in over the fused line (0.5× scale, 1 u, about 140 px at her depth), with a tiny glint ring. A thousand lines
    are about to be a thousand swords.
  - f1240 (hit 2): 250 more, 5–8 u from her.
  - f1246 (hit 3): 250 more, 8–11 u.
  - f1252 (hit 4): the last 250, 11–14 u: 1,000 swords. The other 5,000 log lines stay hanging, cyan.
  - f1256 千: swap to F-low (deep crouch facing screen-right), 120 px to the left (feet at (840, 910)), with an 8 %
    squash and a 14 px hop down. At the same moment the 1,000 swords snap into the **Rank**: 20 horizontal rows × 50
    swords in depth, a slanted wall behind her and to her left (rows from y 0.3 to 8 u, the front column at
    x −1.5 u, the files receding to z −16), all pointing screen-right. The snap takes 5 f with an 8 % ease-out-back
    overshoot.
  - f1264 行: the rows lock. A light pulse runs along each row from front to back (4 f, staggered 1 f per row from the
    bottom up), and each row clicks 2 px into place.
  - f1269 剑: all 1,000 tips glint at once (a 4-point star on each tip, 3 f). She draws back 16 px with an 8 % squash
    (anticipation, 7 f before the hit), and the whole Rank draws back 0.6 u like a bow.
  - f1270–f1273: held tension: the swords quiver ±0.5°, the hanging lines tremble.
  - f1274 (the chorus downbeat): she vanishes. A straight streak runs from her start (860, 760) to her end point
    (1300, 742): white core 4 px, cyan body 18 px, glow 60 px, tapered, with 16 parallel brush speed lines (the issen
    smear, f1274–f1275). The hanging lines near her path blow back 0.2 u in a ring: the world's first movement since 万.
  - f1276 破: F-issen at the far end, feet at (1300, 905), 330 px wide, facing right, in front of the keycap, the blade
    level at y 742 and pointing at the right edge. 3 cyan multiples of her fade along the path over 4 f. The cut carries
    on past her as sword-qi: one line across the whole frame at y 742, x 0 to 1920 (white core 4 px, cyan body 18 px,
    glow 60 px, dry-brush breaks). The line blooms white along its length for 2 f (f1276–f1277): a large flash (two of
    four). Hit-stop 3 (f1276–f1278): swords, log lines and camera hold while sparks crawl along the line.
  - f1279–f1288: **the Night Wall splits** (station 1a), the slash-line wipe. Every plate of the street (`-far`,
    `-mid`, `-near`) and the keycap is cut along the line. The upper half rises (0 → 360 px by f1288) and tips back
    (rotateX −10°); the lower half sinks (0 → 260 px) and tips forward (+8°). Both edges burn cyan (8 px) and shed ink
    flakes (40 per frame). She, the swords and the hanging lines stay where they are: they live in the 3D space.
  - Through the widening gap, the data world: ink-black depth with fog, and the mouth of **the Long Night** (station
    1b), a tunnel of red error lines streaming toward the lens, its far end a cinnabar glow (R 0.90).
  - f1281–f1288: the Rank fires through the gap, row by row (the rows 0.4 f apart): each sword accelerates to 90 u/s,
    turns from pointing right to pointing into the tunnel (−z) and grows from 0.5× to 1.0×. The red lines it passes
    light up cyan for a moment.
  - f1285 (beat 2): the gap is half open. The tunnel's cinnabar light washes her back (the left side of F-issen).
  - f1276–f1287: she holds F-issen, drifting 14 px further right (follow-through).
  - f1288: a smear frame: her silhouette swept toward the centre of the gap in flat cyan at 70 %. She leaps for her
    sword.
- **Camera:** medium-wide, frontal, at her chest height: camera (0, 1.2, 7.4) looking at (0, 1.6, 0), FOV 44, pushing
  to (0, 1.2, 6.8) by f1273 (ease-in). On f1276, punch M (+5 % in 2 f), held through the hit-stop and eased back over
  f1279–f1286. Over f1279–f1288 a slow push (3 %/s) and a +2° tilt toward the gap's centre.
- **Grade / R:** the street drained (12 %); the hanging lines, the swords and her cyan at full. The data world behind
  the gap in full colour: ink, cinnabar text at R 0.90. R 0.90.
- **Out:** hard cut on 长 f1289, to behind her in the gap.
- **Art:** B6, F-low, F-issen, SW (instanced ×1,000), BG02-street, PR02-enterkey.

#### S03-06 · f1289–f1318 · 30 f · 42.97–43.97 s · bar 28.33–29.00
- **Music:** 长 on f1289, after beat 2; a kick on beat 3 (f1296); kick and snare on beat 4 (f1308). 光 f1303 and 速 f1309
  ride the run into bar 29.
- **Lyric:** slot L goes on: 长f1289 夜f1294 slam. Slot B: plate f1301–f1304, then 光f1303 速f1309 slam (160 px). The
  glow swells on f1296 and f1308.
- **Picture:** behind her, inside the gap. Her: B7 ride (3/4 back, heading away toward the upper right), about 330 px,
  centred at (1010, 600). The halves of the frozen street leave through the top and bottom edges in the first 6 f.
  Then **the Long Night**: a tunnel along −z, radius 14–40 u, built from 2,400 red error lines. Under rulings G1
  they are only real error messages, stack-trace rows, plain request lines and status codes (fight-design §3.1's
  error lines; none of its payload strings): `Uncaught TypeError: Cannot read properties of undefined`,
  `Segmentation fault (core dumped)`, `panic: runtime error: index out of range`,
  `RangeError: Maximum call stack size exceeded`, `    at recurse (jianghu.js:42:7)`,
  `    at handle (wall.js:118:21)`, `GET /admin HTTP/1.1`, `POST /login HTTP/1.1`, `DELETE /wall HTTP/1.1`,
  `429 Too Many Requests`, `502 Bad Gateway`, `503 Service Unavailable`, `ECONNREFUSED`, `NaN`, `undefined`. They are
  set in JetBrains Mono in cinnabar, about 60,000 glyphs, laid along the tunnel axis so they read as streaming text.
  Ink fog: near 30 u, far 220 u. The far end glows cinnabar. The formation flies in the **Goose**: a V of 1,000
  swords at 1.0× (2 u) with her at its point, two arms of 500 (10 abreast × 50 ranks) trailing back past the camera on
  the left and right, so the camera flies inside the V.
- **Action:**
  - f1289 长: cut in. She has landed on her sword (B7), 40 px above the smear path, stretched 8 % and settling in 3 f.
    The street halves are at the frame edges and gone by f1294.
  - f1289–f1302: the rush. The tunnel flows past at 70 u/s and the red lines stream by. The Goose's arms flicker past
    the frame edges, the nearest swords trailing 3 f ghosts.
  - f1294 夜: the last of the street is gone. The tunnel's red lines brighten in a wave from the far end toward the
    lens (8 f): the long night wakes. The nearest lines, 40–70 px as they pass the lens, are legible for a few frames
    each: `GET /admin HTTP/1.1` streams by on the left, `502 Bad Gateway` on the right. She leans into the flight
    (rotate −3°).
  - f1296 (kick): every red line ripples, a 0.5 u radial bulge travelling toward the camera.
  - f1303 光: light speed. The flow goes from 70 to 260 u/s over 4 f. The red lines stretch into streaks (trails ×8)
    and the swords' trails lengthen ×6. The FOV opens 44° → 72° while the camera closes on her (a dolly zoom: she
    holds about 330 px while the tunnel stretches away).
  - f1308 (kick and snare): punch M; 24 radial ink speed lines rush in from the frame edges (6 f).
  - f1309 速: the punch-through. The FOV snaps back 72° → 50° over 3 f and the camera surges 3 u toward her (she grows
    to 400 px), then eases back. A radial brush blur on the tunnel only, never on her.
  - f1310–f1318: far ahead, the scrolls of 红字劫 appear as thin vertical red slivers (hanging scrolls seen edge-on),
    rushing closer.
  - f1313–f1318: anticipation: she crouches on the sword (B7 squashed 8 %, pulled back 10 px). On f1316 the Goose's
    tips turn toward the slivers, rank by rank 1 f apart, a ripple running back through the V.
- **Camera:** behind her at her chest height, 8 u back and 0.3 u to her left, looking 2 u ahead of her. It travels
  with her down the tunnel from z −10 (f1289) to z −500 (f1318): 70 u/s over f1289–f1302 and 260 u/s over
  f1303–f1318. FOV 44 → 72 (f1303–f1306) → 50 (f1309–f1311). A slow bank, roll −2° → +2° across the shot. Shake S on
  f1308.
- **Grade / R:** the data world: ink fog, cinnabar text at R 0.90, the cyan formation. Zoom blur on the tunnel
  background from f1303 (capped).
- **Out:** hard cut on 斩 f1319, to her side.
- **Art:** B7, SW (instanced ×1,000).

#### S03-07 · f1319–f1347 · 29 f · 43.97–44.93 s · bar 29.00–29.64
- **Music:** bar 29 downbeat on 斩 f1319 (mid); kick and snare on beat 2 (f1330, 红); a kick on beat 3 (f1341). The
  whip at the end lands on 千 f1348.
- **Lyric:** slot B: 斩f1319 尽f1325 红f1330 字f1334 劫f1339 slam; 红字劫 glow cinnabar, the rest cyan. Slot R's 千行剑
  dries away over f1346–f1351 as line 2's plate arrives.
- **Picture:** a side view: the camera is on her right, looking across her path, so she travels toward screen-right.
  Her: F-cut_down, facing right, 330 px, feet at (860, 820), mid-air. Behind her, **the Scrolls**: 9 hanging scrolls
  (PR03-scroll, 6 × 18 u each) in three ranks 6, 12 and 20 u beyond her path, and 30 smaller ones fading into the
  fog. Their paper panels are filled in code with red stack traces in JetBrains Mono: `Traceback (most recent call
  last):`, `java.lang.NullPointerException`, `panic: runtime error: index out of range`, `TypeError: Cannot read
  properties of undefined`. The nearest and biggest, the 劫 scroll (8 × 24 u), is headed
  `RangeError: Maximum call stack size exceeded` / `    at recurse (jianghu.js:42:7)`, a glimpse of the boss. The
  tunnel's red lines stream right to left behind everything. The formation is the **Thousand Cuts**: a block of 1,000
  swords at 1.0× around and beyond her, 25 files along her path × 40 rows up the height, spread through the scrolls'
  depths, each one a copy of her cut.
- **Action:**
  - f1319 斩: cut in on the downbeat. F-cut_down at its finish: the slash arc runs from upper-left to lower-right
    across her (white core 5 px, cyan body 26 px, dry-brush breaks), growing over 2 f from the hilt side. All 1,000
    swords swing the same cut in sync, each turning 120° from upper-left to lower-right in 2 f and leaving its own arc:
    a thousand parallel crescents in depth, big near and tiny far. Their white cores bloom together on f1319–f1320: a
    large flash (three of four). Hit-stop 3 (f1319–f1321), with sparks (6–12 streaks, cyan cooling to white) at every
    place a blade meets a scroll.
  - f1322–f1328: the arcs erode from their start, shedding ink flecks.
  - f1325 尽: the cuts go through. A white hairline appears on every scroll along the same diagonal, rippling out to
    the 30 far scrolls 1 f apart. She drifts on 16 px down and right (follow-through).
  - f1330 红 (kick and snare): the far rank and the 30 small scrolls split along their cuts. The halves slide 40 px
    apart (4 f), flash white for 1 f (local), turn ink-black and burst, each scroll throwing 60–120 ink blots. The red
    text dies as black.
  - f1334 字: the middle rank splits and bursts the same way.
  - f1339 劫: swap to F-cut_up, 120 px further right and 80 px up (feet at (980, 740)). A rising arc from lower-left to
    upper-right runs through the 劫 scroll; it splits along it, and the halves slide apart and burst into the line's
    biggest ink plume (300 blots, 6 of them out of focus across the lens). Hit-stop 2 (f1339–f1340).
  - f1341 (kick): the ink falls. The tunnel's red lines nearest the burst turn ink-black in a ring, a local stain.
  - f1341–f1343: she drifts 20 px up and right; the formation pours back into a comet tail behind her.
  - f1344–f1347: whip pan right (4 f, directional brush blur) toward station 2.
- **Camera:** side view at her chest height, 9 u to her right, looking −x across her path, FOV 40, tracking with her
  toward screen-right (she gains 8 px per frame in frame). Shake S on f1319 and f1330 (6 px, decaying over 8 f); punch
  M on f1339. Whip over f1344–f1347: a 90° yaw to the right plus a jump of 130 u to the side and 250 u ahead (ease-in),
  with a brush blur along the pan.
- **Grade / R:** the scrolls at full cinnabar; the bursts ink-black; the tunnel's horizon glow still R 0.90.
- **Out:** the whip pan, landing on 千 f1348 at station 2.
- **Art:** F-cut_down, F-cut_up, SW (instanced ×1,000). **PR03-scroll (new)**: a tall hanging scroll mounting alone,
  front view, flat: dark indigo-black silk brocade borders with a faint cloud pattern, a blank pale rice-paper panel
  in the middle (about 70 % of the height), a hanging cord and a thin rod at the top, a heavier roller at the bottom
  with two jade end-knobs. No writing and no seals. 1152×2048 on flat magenta. Code fills the paper with red text and
  cuts it.

#### S03-08 · f1348–f1389 · 42 f · 44.93–46.33 s · bar 29.64–30.58
- **Music:** the whip lands on 千 f1348; kick and snare on beat 4 (f1353); the bar 30 downbeat kick on f1364, just
  before 落 f1366; beat 2 on f1375; a kick on beat 3 (f1387).
- **Lyric:** line 2 「千行剑 落如雪 万般漏洞皆可解」. Slot R: plate f1346–f1349, then 千f1348 行f1354 剑f1359 slam. Slot L:
  line 1's 破长夜 dries away over f1364–f1369; plate f1364–f1367, then 落f1366 如f1377 雪f1382 slam; 雪's glow is white
  instead of cyan. Slot B: line 1's 光速斩尽红字劫 stays until f1388. Gutter: `1` fades with slot R's old phrase over
  f1346–f1349 and `2` fades in over f1348–f1351.
- **Picture:** medium, frontal, at **the Bug Terraces** (station 2). Her: F-sword_finger (front; left hand raised before
  her face in the sword-finger sign, the sword point-down at her right side), 380 px, feet at (960, 880), on the rocky
  ledge (BG03-terraces-near). Behind her, across a misty valley, the opposite mountainside rises as a wall of terraces
  (BG03-terraces-far). Code lays one line of dim source code (paper at 25 %, scrolling slowly left) along each of the
  60 terrace edges, and opens 3,000 bug holes in them: ragged cracks glowing red, each with a short red error inside
  (`undefined`, `null`, `NaN`, `404`, `500`, `ECONNREFUSED`, `SIGSEGV`, `OOM`). BG03-inksky above, with a cinnabar
  glow along the slope's crest (R 0.90).
- **Action:**
  - f1348 千: landed from the whip, with the brush blur trailing 2 f. F-sword_finger. The comet stream of 1,000 swords
    sweeps in from screen-left along the whip's path (arriving 2 f behind the camera, overshooting 1 u and settling)
    and spreads into the **Canopy**: a shallow dome over her, 5 rings at radii 1 / 2.5 / 4 / 5.5 / 7 u holding
    60 / 140 / 220 / 270 / 310 swords, points down, centred 5 u above her head.
  - f1353 (kick and snare): the Canopy settles with a 2 % bounce.
  - f1354 行: the rings light outward, one ring per frame (f1354–f1358): a cyan ripple across the dome.
  - f1359 剑: every tip glints; the Canopy dips 0.3 u (anticipation); her sword-finger tilts 4° (a rigid turn).
  - f1364 (kick): the rings counter-rotate one notch (6°).
  - f1366 落: swap to C7 snow (arms high and open, face up, open-mouthed joy), hopping 18 px up and settling with a 6 %
    stretch. Her sword leaves her hand and floats beside her on screen-left (SW, bobbing 2 % per bar). The Canopy
    bursts into the **Snow**: each sword splits into 3 snow-swords (0.25×, 0.5 u) that scatter 2–6 u outward, then fall
    slowly (4 u/s) and tumble (40–120°/s), turning paper-white #EDE4D3 with a 1 px cyan core line and glinting as they
    turn. 3,000 snow-swords. A soft 20 % bloom, not a flash.
  - f1375 (beat 2): the snow thickens over the valley.
  - f1377 如: a gust: the whole snowfall drifts 0.8 u to the right along a slow wind curve.
  - f1382 雪: every snow-sword catches the light at once, a twinkle sweeping outward from her over 6 f.
  - f1387 (kick): the first snow-swords sink below the ledge, falling toward the terraces.
  - Background idle throughout: the terrace code scrolls; the red holes pulse +20 % on each beat (4 f), the bugs
    breathing; mist drifts across the valley.
- **Camera:** medium at her chest height, 7.4 u in front of her, FOV 42, pushing to 6.8 u by f1365. Over f1366–f1372
  it tilts up +5° with the burst, then over f1373–f1389 down to −4°, following the snow toward the valley, while
  pushing on to 6.2 u. It stays at her chest height throughout.
- **Grade / R:** the data world as ink-wash night; the terraces' code at paper 25 %, the holes full cinnabar, the snow
  paper-white. R 0.90 at the crest.
- **Out:** hard cut on 万 f1390.
- **Art:** F-sword_finger, C7, SW (floating, and instanced ×1,000 → 3,000). **BG03-terraces (new)**, two layers. After
  the STYLE_BIBLE §5 anchor: `-far`, 2560×1440: "Across a deep misty valley at night, the opposite mountainside rises
  as a wall of rice terraces in ink wash: fifty to sixty terrace steps with clean curved edges stacked from a bank of
  mist (at about 55 % of the height) up to a clean ridge line against the sky (at about 15 %); dark risers, pale wet
  flats catching faint light; no buildings, no figures. Seen level from a ledge on the near side. Keep the top fifth as
  empty night sky." `-near`, 2560×720 on magenta: "A rocky ledge seen from just behind its front edge at the chest
  height of a small figure standing on it: a flat top in the middle, a crumbling front edge, a few tufts of dry grass."
  **BG03-inksky (new)**, 2560×1440: "A vast night sky in monochrome ink wash only: heavy layered clouds with dry-brush
  edges, faintly lit from below, a dark void at the top; no moon, no stars, no ground." It is the far layer at
  stations 2–4, moving only with the camera's rotation; code tints it (the R glow, the formation's light).

#### S03-09 · f1390–f1442 · 53 f · 46.33–48.10 s · bar 30.58–31.76
- **Music:** kick, snare and mid on beat 4 (f1398), just before 般. Bar 31: mid on f1409 (洞), snare f1420, mid f1432
  (just after 解), snare f1434. The next strong hit, f1443, is the cut.
- **Lyric:** slot B: line 1's row dries away over f1388–f1393; plate f1388–f1391, then 万f1390 般f1399 漏f1406 洞f1409
  皆f1418 可f1426 解f1431 slam; 解 lands with a cyan glow ring. Slots R (千行剑) and L (落如雪) hold.
- **Picture:** wide, from the ledge, the camera set back and to her right. Her: C7 in the foreground, left of centre,
  520 px, feet at (760, 1000), facing us, arms up; SW floating beside her on screen-left. Beyond her, the whole
  terraced slope across the valley (BG03-terraces-far, filling y 160–760), the mist bank between, BG03-inksky above,
  the crest glowing cinnabar (R 0.90). The 3,000 snow-swords falling across the valley.
- **Action:**
  - f1390 万: cut in. The snow-swords turn point-down and dive into the **Pins**: the first 40 fly into the 40 nearest
    holes (the lowest terraces), staggered 1 f apart. Each one stands quivering for 3 f; the hole's red text turns
    ink-black (patched), and a small ink ring splashes out (radius 0.4 u).
  - f1398 (kick and snare): the 40 pinned hilts flash cyan (small).
  - f1399 般: 260 more pin the middle terraces, a band sweeping up the slope in 4 f.
  - f1406 漏: 900 more, on the upper terraces (a 4 f sweep).
  - f1409 洞: the last 1,800 rain down onto the far terraces up to the crest. The whole slope is dotted with pinned
    blades and every red hole is black.
  - f1410–f1420: the camera lifts off the ledge and starts to fly; she slides out of the bottom of frame by f1420.
  - f1418 皆: the chain starts. The nearest patch lights cyan and a cyan line jumps from it to the next patch, and on:
    a chain of light hopping patch to patch, one hop per frame, branching in two every 4 hops.
  - f1420 (snare): 64 patches lit. Each lit patch turns its terrace's line of code cyan outward from that point.
  - f1426 可: the chain branches across the whole slope; hundreds of cyan lines zigzag up the terraces, and the
    terraces' code turns cyan in long strokes.
  - f1431 解: the whole slope turns cyan in one sweep from the bottom to the crest (6 f): every line, every pin. The pins
    dissolve into cyan sparks that rise off the slope (they come back together as the formation on 赛). A soft cyan
    bloom (+25 % brightness), not a flash.
  - f1432, f1434 (mid, snare): the crest line glows. The camera climbs toward it.
  - f1436–f1442: nearing the crest; the needle antenna of the master pagoda (BG-tower's shape, in code) peeks over
    the ridge, and the cinnabar glow behind the ridge brightens (the code city beyond).
- **Camera:** wide, at her chest height: 4.5 u from her, off to her right, looking past her at the middle of the
  slope, FOV 50. A slow push of 0.8 u over f1390–f1409. From f1410 it flies forward 45 u over the valley, rising 6 u
  (she is out of frame by then), ease-in, FOV 50 → 46, with a gentle bank (roll 0 → −2°).
- **Grade / R:** the slope goes from dim paper text and red holes to cyan; the crest glow behind it stays R 0.90.
- **Out:** hard cut on the hit f1443.
- **Art:** C7, SW, BG03-terraces (`-far`, `-near`), BG03-inksky; the snow-swords are SW instances.

#### S03-10 · f1443–f1462 · 20 f · 48.10–48.77 s · bar 31.76–32.20
- **Music:** kick, snare and mid on beat 4 (f1443); a snare on f1448; the bar 32 downbeat on f1454 (soft); the next
  backbeat (f1465) falls in the next shot.
- **Lyric:** line 3 「赛博江湖 谁做主 一行代码定生灭」. Slot R: line 2's 千行剑 dries away over f1442–f1447; plate
  f1442–f1445, then 赛f1444 博f1449 江f1454 湖f1460 slam (160 px, step 160). Gutter: `2` fades over f1442–f1445 and
  `3` fades in over f1444–f1447 (the 4-character column has the same top edge, so the number does not move). Slot L
  (落如雪) holds until f1461; slot B (万般漏洞皆可解) holds until f1481.
- **Picture:** just over the crest of the terraced ridge, the cyan crest passing under the camera. Beyond it, in a wide
  basin, **the code city** (station 3): 40 pagodas built in code, 20–80 u tall. Each tier is a ring of code lines with
  its upturned eaves traced as text paths (dim paper), and its windows are red error lines (90 % of them, R 0.90).
  The **master pagoda** stands in the centre, 110 u tall: it is the code image of the city's one central tower,
  BG-tower (rulings G2). Code writes its tiers along BG-tower's silhouette (the cut-out's alpha gives the profile):
  thirteen storeys with upturned eaves traced in code lines, the ring of blank panels at the seventh storey as a ring
  of red error lines, the steel ribs gathering the upper storeys into a spire, the needle antenna. Its top roof is
  painted (BG03-summit as a billboard at the tip). BG03-inksky behind. Her: B7, entering from the bottom-left corner
  and flying away toward the upper right, 300 px shrinking to 150 px as she pulls ahead.
- **Action:**
  - f1443 (hit): cut in. The crest line passes under the camera. She bursts into frame from the bottom-left corner on
    B7 (a 2 f cyan streak entry, then B7), passing close under the camera and pulling ahead: 300 px by f1446, 150 px
    by f1462.
  - f1444 赛: the pagodas around the basin's rim light their code tiers in a ring: dim paper text fades up and the red
    windows glow.
  - f1448 (snare): the rising sparks from the slope catch up with her and condense into swords behind her, the first
    500, as a comet tail.
  - f1449 博: the next ring of pagodas lights; the other 500 swords condense.
  - f1454 江 (bar 32): she banks right toward the master pagoda and the camera follows into a rising spiral round it
    (an 18° orbit about its axis over f1454–f1462, rising 12 u).
  - f1460 湖: she reaches the top tier. The formation sweeps across in front of the camera, the nearest swords
    streaking left to right through the frame.
  - f1461–f1462: she pulls up over the tip.
- **Camera:** behind her at her flight height, 3/4 from behind as B7 is drawn, FOV 48, following at 6 → 14 u as she
  pulls ahead toward the master pagoda. From f1454 a rising spiral: an 18° orbit (within the 20° limit of her plane)
  and a 12 u rise, ending on the tip.
- **Grade / R:** the code city at R 0.90; the cyan formation; the ridge behind cyan; ink fog.
- **Out:** hard cut on 谁 f1463.
- **Art:** B7; SW (instanced ×1,000); BG03-summit (small, at the tip); BG03-inksky; BG-tower (part 08's shared
  cut-out, not shown: its alpha is the master pagoda's profile).

#### S03-11 · f1463–f1482 · 20 f · 48.77–49.43 s · bar 32.20–32.64
- **Music:** 谁 on f1463; kick, snare and mid on beat 2 (f1465); 做 f1471; a kick on beat 3 (f1477), with 主 on f1476.
- **Lyric:** slot L: line 2's 落如雪 dries away over f1461–f1466; plate f1461–f1464, then 谁f1463 做f1471 主f1476 slam.
  Slot R (赛博江湖) holds; slot B (万般漏洞皆可解) holds until f1481.
- **Picture:** medium at **the Summit**. BG03-summit: the painted top roof tier, its upturned eaves sweeping out past
  both frame edges, the small platform at the foot of the needle antenna under her feet, and the antenna rising
  behind her right of centre. Below the painted eaves, the master pagoda's tiers continue in code, threaded with red
  error lines; the code city below and around is out of focus (bokeh of red windows). BG03-inksky. Her: F-enter, 400 px,
  feet at (960, 870).
- **Action:**
  - f1463 谁: cut in. F-enter: she has dropped onto the platform and planted her sword, the ⏎ crossguard at her waist.
    The Enter press: the frame dips 6 px and springs back (f1463–f1466), and a keypress ripple, a flat ring, runs out
    from the blade point over the roof and down the pagoda's code tiers, one tier per frame (f1463–f1475). Each tier's
    red lines flicker once as the ring passes and hold. The ⏎ flares (glow ×2, 4 f), a local flare.
  - f1465 (kick and snare): the ripple reaches the first ring of the city; the red windows under it flicker for 2 f.
  - f1467–f1470: the formation spirals in round the summit.
  - f1471 做: the swords lock into the **Throne**: three rings round her at radii 2.2 / 3.4 / 4.6 u and heights
    0.4 / 1.2 / 2.0 u, holding 300 / 330 / 370 swords, tips outward, turning slowly in alternate directions (8°/s). The
    near halves pass in front of her, the far halves behind.
  - f1476 主: swap to C8 mine (the sword planted, her cybernetic hand on the pommel, her left thumb pointing at her own
    chest, chin up, a cocky grin), 14 px to the right with a 4 % squash-and-settle. All 1,000 tips glint outward at
    once.
  - f1477 (kick): the Throne's rings tick one notch (4°).
  - f1478–f1482: she holds C8 and breathes ±1.2 %.
- **Camera:** medium at her chest height, 7.4 u from her, FOV 40, a slow orbit from +8° to −4° round her over the shot
  with a 3 %/s push. The Enter dip on f1463; punch S on f1476.
- **Grade / R:** R 0.90: the city's red windows below; the ripple's passing light cyan.
- **Out:** hard cut on 一 f1483.
- **Art:** F-enter, C8, SW (instanced ×1,000). **BG03-summit (new)**, 2560×1440, on flat magenta so the sky keys out.
  It is a tip view of the central tower, so it is an edit of BG-tower, generated with BG-tower attached (rulings G2).
  After the STYLE_BIBLE §5 anchor: "The top of the attached tower at night, seen level with its uppermost roof: the
  top roof tier with long sweeping upturned eaves curving up at both corners, the steel ribs and conduits of the spire
  gathering under it, a small flat platform on the roof at the foot of the needle antenna in the lower middle where a
  small figure can stand, and the long thin needle antenna rising behind the platform just right of centre and out of
  the top of the picture. A few holographic lanterns hang from the eave corners. Below the eaves only dark mist. Ink
  wash on rice paper." Code writes the tiers below the roof and the city around it.

#### S03-12 · f1483–f1532 · 50 f · 49.43–51.10 s · bar 32.64–33.76
- **Music:** 一 on f1483; kick and snare on beat 4 (f1488); the bar 33 downbeat on 代 f1499 (kick and mid); 码 f1505; a
  snare on beat 2 under 定 f1510; 生 f1516; a kick on beat 3 (f1522), just after 灭 f1521; a snare on f1524. The cut
  is on the next snare, f1533.
- **Lyric:** slot B: line 2's row dries away over f1481–f1486; plate f1481–f1484, then 一f1483 行f1494 代f1499 码f1505
  定f1510 生f1516 灭f1521 slam. 定 lands with a cyan swell; 灭 slams with its glow dying from cyan to nothing over 6 f, the
  light going out.
- **Picture:** medium-wide from the front-left of the summit (12° to her left). Her: B8 command (3/4 toward screen-
  right, her cybernetic right arm thrust toward the right edge in the sword-finger sign), 360 px, feet at (760, 880).
  SW stands planted in the roof beside her on screen-left (x 600) where she left it, the ⏎ crossguard at her waist
  height. BG03-summit in a wider framing (the eave corners in frame); the code city spreading below and away to the
  right (40 pagodas, red windows at R 0.90); BG03-inksky. The formation goes from the Throne to the One Line.
- **Action:**
  - f1483 一: cut in. B8, her arm out to the right. The lead sword, the brightest, leaves the Throne and shoots out
    along her pointing line toward the right horizon (a streak, 120 u/s).
  - f1488 (kick and snare): the Throne unwinds, a spiral unspooling from its outer ring.
  - f1494 行: the **One Line**. All 1,000 swords snap end to end, hilt to point, into one straight line from her
    fingertip to the right horizon: 2,000 u long, receding to a vanishing point at screen (1700, 420). It locks with a
    click that runs along it in 3 f.
  - f1499 代 (bar 33): a line of code types itself along the top of the sword line, outward from her fingertip:
    `$ kill -9` on 代 (f1499–f1503, two characters a frame). JetBrains Mono, cyan #19F0C8, 46 px near her and shrinking
    with depth.
  - f1505 码: ` %red_tide` (f1505–f1509). A block cursor blinks at the end of the line (8 f on, 8 f off).
  - f1510 定 (snare): Enter. A ⏎ glyph flashes at the end of the line, and the line runs: a white pulse travels down
    the sword line from her fingertip to the horizon (8 f). The planted sword's ⏎ crossguard flares, and the frame
    dips 4 px (a lighter Enter than 谁's).
  - f1516 生: a cyan wave runs out along the line through the city, a vertical curtain of light sweeping right and
    away (10 f). Every pagoda it passes has its red window lines rewritten in cyan, line by line from the top down.
  - f1521 灭: in the strip beyond the line that the wave crossed, the last red error lines blink out: their glyphs turn
    ink-black and fall as ink, leaving dark windows. Under the end of the code line bash prints its reply in paper
    white at 28 px, `[1]+  Killed                  red_tide`, which fades over 12 f.
  - f1522 (kick): ink rain from the dead red falls through the city. The cyan pagodas glow steadily. The near side of
    the city and the master pagoda's lower tiers keep their red (R 0.90 elsewhere).
  - f1524 (snare): her sword-finger flicks 3° (rigid).
  - f1525–f1532: she holds B8; a slow pulse of light runs along the One Line on each beat.
- **Camera:** medium-wide at her chest height, 8.7 u from her, from 12° to her left, FOV 38 (a slightly long lens, so
  the One Line reads as a hard perspective line). A slow push over f1483–f1509; the Enter dip on f1510. A fast pan
  right of 6° over f1516–f1521 (ease-out) following the wave (she slides to x ≈ 580), then a drift back left of 3° by
  f1532 so she ends at x ≈ 670, her face always clear of slot L.
- **Grade / R:** R 0.90; the strip beyond the line cyan and ink after 灭; the red horizon glow unchanged.
- **Out:** hard cut on the snare, f1533.
- **Art:** B8; SW (planted, and instanced ×1,000); BG03-summit; BG03-inksky.

#### S03-13 · f1533–f1581 · 49 f · 51.10–52.73 s · bar 33.76–34.84
- **Music:** kick, snare and mid on beat 4 (f1533); mid on f1538. Bar 34 is a drum fill into the break: f1544 (snare
  and mid), f1550 (snare), f1555 (kick, snare and mid), f1561 (mid), f1567 (kick, snare and mid), f1569 (snare),
  f1572 (the fill's biggest kick), f1575, f1578 (snare and mid), f1581 (snare).
- **Lyric:** line 4 「千行剑 千行剑 一剑劈开数据界」. Slot R: line 3's 赛博江湖 dries away over f1532–f1537; plate
  f1532–f1535, then 千f1534 行f1539 剑f1544 slam. Slot L: line 3's 谁做主 dries away over f1555–f1560; plate f1555–f1558,
  then 千f1557 行f1561 剑f1566 slam. Slot B (一行代码定生灭) holds until f1579. Gutter: `3` fades over f1532–f1535
  and `4` fades in over f1534–f1537; `4` stays to the end of the part.
- **Picture:** frontal at the Summit. Her: F-charge (both hands overhead, the blade straight up), the figure 230 px from
  feet to head (430 px with the sword), feet at (960, 940), shrinking to about 135 px (feet at (960, 920)) as the
  camera widens over f1557–f1572 to take in the sword's scale. BG03-summit; the city below; BG03-inksky. The formation
  goes from the One Line to the Vortex, then fuses into the **Giant Sword** (PR03-giantsword, 80 u, about 40 m, 40
  times her height) standing on her blade tip: its grip runs 14 u up from her blade tip (4.4 u above the roof) to the
  ⏎ crossguard (14 u wide, 18 u above the roof), and its blade runs on 66 u to the tip, 84 u above the roof.
- **Action:**
  - f1533: cut in on the snare. F-charge: she pulled her sword out of the roof on the cut.
  - f1534 千: the One Line rewinds. The swords stream back along it toward her, the far end fastest, and wind up round
    her in a rising helix, the **Vortex** (radius 7 u at the roof narrowing to 2 u at 84 u up; in frame its coils
    narrow and stream up out of the top edge).
  - f1539 行: the helix's second turn rises above her, turning at 160°/s.
  - f1544 剑 (bar 34): the helix closes at its top into a point straight above her blade tip, the swords' tips meeting
    84 u up, far above the top edge, where the Giant Sword's tip will be.
  - f1544, f1550, f1555 (fill hits): the helix tightens on each hit, 0.6 u less radius and 40°/s more spin.
  - f1557 千: the fusion begins. The hilt forms: about 120 swords snap together edge to edge into a giant ⏎ crossguard
    (14 u wide) 18 u above the roof, and 60 more stack into its grip, which stands on her own blade tip, so her sword
    carries it. The crossguard flares cyan for 3 f.
  - f1561 行: the blade builds upward from the crossguard as the other 820 swords stack in 33 ranks of about 25 (2 u a
    rank), five or six ranks a frame (f1561–f1566), the tip rising to 84 u, out of the top edge.
  - f1566 剑: the Giant Sword is whole. PR03-giantsword (80 u, about 40 m, point up) cross-dissolves in over the
    stacked swords (3 f), aligned with her raised blade, and its inner code light lines run up its length
    (f1567–f1572).
  - f1567 (kick, snare and mid): every red window in the city below brightens +30 % toward the Giant Sword. The red
    world has noticed.
  - f1572 (the big kick): a pulse of light runs up the Giant Sword from hilt to tip in 4 f and out of the top edge. The
    clouds of BG03-inksky part in a ring round its tip, far above the frame: the ring's lower rim crosses the top of
    the frame behind the blade and widens into an opening of pale light by f1581.
  - f1575–f1581: the Giant Sword hums (±0.3 u lateral, on 16ths). She rises onto her toes (4 % stretch): ready.
- **Camera:** frontal at her chest height, 10.5 u away, FOV 48. Over f1533–f1556 a slow push (10.5 → 10 u) holding a
  +12° tilt, so she sits low (head at y ≈ 700–790) with the helix rising out of the top edge. Over f1557–f1572 the
  tilt rises to +24°, the camera pulls back to 12 u and the lens widens from FOV 48 to 78 (ease in-out): a reveal of
  scale. The ⏎ crossguard settles at y ≈ 150 in the top of the frame with the blade running out of the top edge; she
  stays in the lower third, about 135 px, her head at y ≈ 785–835, clear of slot B. Punch S on f1572. (She is a flat
  plane, so the tilt only keystones her.)
- **Grade / R:** R 0.90; the Giant Sword cyan-white; the red city light leaning up toward it.
- **Out:** hard cut on 一 f1582.
- **Art:** F-charge; SW (instanced ×1,000); BG03-summit; BG03-inksky. **PR03-giantsword (new)**: the sword alone at
  high resolution, upright, point up, centred, front view, the same design as SW: a straight double-edged translucent
  glass blade with cyan light lines inside (no glyphs), the dark gunmetal crossguard bent like a return-key arrow with
  cyan edges, the red-cord grip, the small jade disc pommel with its long red tassel. Flat cel sticker style with the
  white die-cut border. 1440×2560 on flat magenta, the sword filling 95 % of the height; shown large (on screen it is
  about 40 m long, and its hilt spans about 940 px in S03-15), so code adds the crisp edge lights over it. Code
  rotates it (to point down in the next shots) and never mirrors it.

#### S03-14 · f1582–f1599 · 18 f · 52.73–53.33 s · bar 34.84–35.24
- **Music:** 一 on f1582; kicks on f1583 and f1586 (with a snare); 剑 on f1588; **the bar 35 downbeat on f1589 is a
  crash with no kick: the sub drops out for the whole bar**, the break before the slam. Near silence to f1600.
- **Lyric:** slot B: line 3's row dries away over f1580–f1585; plate f1580–f1583, then 一f1582 剑f1588 slam. Slots R and L
  hold 千行剑 / 千行剑.
- **Picture:** frontal, the camera rising with her. Her: rising off the roof, F-charge then N03-cleave_up, about 180 px.
  The Giant Sword above her: at first its grip rising from her blade tip out of the top edge, the crossguard just
  above the frame; from 剑, tilted back, its crossguard in the top of the frame (y ≈ 120) and its foreshortened blade
  climbing into the ring of parted cloud at the top edge. The summit roof dropping away below her, the code city
  under it, BG03-inksky.
- **Action:**
  - f1582 一: cut in on the take-off. F-charge, already 0.3 u off the roof and stretched 6 %, rising (ease-out) to 3 u
    above the roof by f1588. The Giant Sword rises with her, its grip still standing on her blade tip.
  - f1583, f1586 (kicks): a flat shock ring drops from her feet onto the roof on each.
  - f1588 剑: swap to N03-cleave_up at the apex, 20 px higher: body arched back, the sword swung back over her head,
    a fierce shout. The Giant Sword tilts back with her, 28° about her hands, its tip leaning away from the lens: its
    crossguard drops into the top of the frame, and, foreshortened, its whole 40 m length now reaches into the ring of
    parted cloud at the top edge.
  - f1589 (the crash, the break): the world slows. Particles and the city's ink rain ramp down to 25 % speed (a time
    ramp, not a freeze). Every red glyph in the city and the red horizon light lean toward the Giant Sword's tip, a slow
    pull of 0.2 u per frame. Her hair tips and the sword glow brighten +40 %: the charge.
  - f1590–f1597: a white line creeps up both edges of the Giant Sword from the crossguard to the tip.
  - f1598: the edge lines reach the tip and the slow-down bottoms out at 10 % speed (still moving, not a freeze): the
    breath before.
  - f1599: the smear. She vanishes. A vertical crescent of light (white core 12 px, cyan body 90 px, glow 240 px)
    sweeps from the top of the frame to the bottom through her position, and the Giant Sword is replaced by its swept
    silhouette in flat cyan at 70 % along the arc: the chop in motion. With the slam right after it, this crescent and
    the slam are the only two big flashes in this second (the limit is three).
- **Camera:** frontal. It rises 3 u with her to stay at her chest height, holding 9.6 u from her, FOV 64 (wide, for
  the sword's height), the tilt easing from +20° to +12° over f1582–f1588 (ease-out), so her face rises from
  y ≈ 805 to y ≈ 680, clear of slot B. Over f1589–f1599 a slow push of 1.5 %/s that never stops.
- **Grade / R:** R 0.90; the red light pulled toward the tip; her cyan at its brightest.
- **Out:** hard cut on the slam, f1600.
- **Art:** F-charge; **N03-cleave_up (new)**: front view, full body, airborne at the top of a jump, seen at her chest
  height. Knees tucked up, back arched, both hands on the grip with the sword swung back over and behind her head (the
  blade pointing back and up behind her, the ⏎ crossguard showing above her head), elbows high; a fierce open-mouthed
  shout, fierce eyes. The cybernetic arm on screen-left, the wide sleeve (screen-right) flung up, the monocle on the
  screen-right eye; ponytail and ribbon tails flying upward. Sword in both hands. An upright cell, 384×512 on a sheet
  in the F2 style (or 1152×2048 alone), on flat magenta with the white border, no text. It is the front-facing
  airborne wind-up the registry lacks (the acting design's old D1); parts 07 and 11 can reuse it for 一剑, and part 01
  for its opening if it wants. PR03-giantsword; BG03-summit; BG03-inksky; SW (instanced).

#### S03-15 · f1600–f1633 · 34 f · 53.33–54.47 s · bar 35.24–36.00
- **Music:** **the slam on 劈 at f1600** (53.32, beat 2 of the break bar; a mid-band hit, no sub). The vocal 劈 on
  f1602; a mid accent on f1606 (开); 数 f1613 and 据 f1618; a snare-and-hat pickup on f1620; 界 f1625; a snare on f1628.
  Hook 1's downbeat, the loudest sub of the song, lands on f1634 in part 04.
- **Lyric:** slot B: 劈f1602 slams oversize (230 px, 160 % → 100 %, a ring of ink flecks), then 开f1606 数f1613 据f1618
  界f1625 at 160 px. The whole line 「千行剑 千行剑 一剑劈开数据界」 stays into part 04 (at least to f1649). 开 sits on x 960,
  so part 04's split at x 960 cleaves 开 itself.
- **Picture:** frontal at her chest height. Her: F-chop (knees deep, body pitched forward, both hands low before her
  waist, the blade pointing straight down between her feet), 290 px, feet at (960, 900), so the cut line on x 960
  runs down her blade. BG03-summit's roof under her. Below the roof, the master pagoda's code tiers fall away in three
  dark strata threaded with red error lines (JetBrains Mono, cinnabar, 24–64 px). The nearest line, 64 px just under
  the roof's eave at y 990, is `Segmentation fault (core dumped)` and crosses x 960 so that the cut falls between `fa`
  and `ult`. A red banner (a PR03-scroll whose paper holds a red stack trace) hangs from the eave right behind her, and
  the cut runs down its middle. The code city below, BG03-inksky above. Behind her, the Giant Sword (PR03-giantsword,
  80 u, about 40 m, now point down, translucent cyan-white at 85 %; the chop has driven it point-first down through
  the world, off her blade) lies along the cut about 12 u behind her: its ⏎
  crossguard (about 940 px wide, x 490–1430, y ≈ 470–600) just above her head, its grip running up out of the top
  edge, its 66 u blade running down behind her through the roof and the city and out of the bottom edge. The vertical
  cut runs from the top edge to the bottom edge on x 960.
- **Action:**
  - f1600 劈 (the slam): hard cut. F-chop, 60 px lower than the cleave_up: she has landed on the roof.
  - **f1600–f1601, the impact frame** (one of the film's twelve), three tones only (ink, paper, cinnabar): the
    frame in ink, her silhouette inverted to paper, the cut line pure paper white from the top edge to the bottom,
    radial dry-brush lines from her blade point, the city's red as flat cinnabar shapes. Punch L (+8 % in 2 f).
  - f1600–f1605: hit-stop 6. The world, the particles and the camera hold. Sparks crawl up and down the cut line from
    her blade (40 px a frame).
  - f1602 劈 (sung): the character slams on the lyric layer while the picture is still in hit-stop. From f1602 the
    picture is back in full colour: the Giant Sword along the cut, the cut line burning white (6 px core) with cyan
    edges (24 px), and above her the vertical crescent's trail fading up to the top edge.
  - f1606 开 (mid accent): the hit-stop releases and the data world splits. Everything except her and the Giant Sword
    (the plates, the code tiers, the banner, the city, the sky) divides along x 960. The left half slides left and the
    right half right, opening a gap of 18 px by f1609, each half tipping back 1° in depth. The cut edges burn cyan
    (8 px) and shed ink flakes. Every glyph the cut sliced, the `fa|ult` pair among them, stays as half-glyphs on the
    two edges (part 04 pours them). Through the gap: a white-cyan glare for 3 f, then the real world beyond the
    firewall's breach at night in rain (BG04-breach_out, part 04's plate), graded at R 0.80. Shake L (16 px, 1.5° roll,
    decaying over 14 f); the punch eases back over f1606–f1615.
  - f1613 数: gap 40 px. The code tiers at the cut edges crumble: glyphs at the edges drop into the gap and turn to ink
    (3–8 blots each).
  - f1618 据: gap 70 px; the halves tip back ±2°. The summit roof under her is split too: she stands astride the gap,
    a foot on each half.
  - f1620 (snare and hat): sparks run along both cut edges.
  - f1625 界: gap 106 px, the halves tipped ±3°. The real world's red light (R 0.80) rims her from behind on both sides;
    her blade's cyan lights her front.
  - f1628 (snare): a last ink plume rises from the bottom of the gap.
  - f1629–f1633: the halves keep opening at about 6 px a frame (gap 154 px on f1633, 160 on f1634). She holds F-chop,
    breathing ±1.2 %. The Giant Sword stays whole along the cut behind her (part 04 bursts it back into its 1,000 SW
    sprites on f1634).
- **Camera:** frontal at her chest height, 7 u from her, FOV 46. Punch L on f1600, held through the hit-stop; from
  f1606 shake L while the punch eases back over f1606–f1615; then a slow push of 1.5 %/s to f1633.
- **Grade / R:** the three-tone impact on f1600–f1601, then full colour. **R drops from 0.90 to 0.80 on the slam
  (f1600)**: the world seen through the gap is graded at 0.80. The data-world halves keep the station-4 grade.
- **Out:** part 04 takes over on f1634, the hook downbeat, with a hard cut as the halves drift apart (S04-01).
- **Art:** F-chop; PR03-giantsword (shown large); PR03-scroll (the banner); BG03-summit; BG03-inksky;
  BG04-breach_out (part 04's plate, through the gap).

---

### State out (f1633 → part 04 at f1634)

- **Her:** F-chop, centred in the gap: feet at (960, 900), 290 px tall, her blade pointing down along the cut on x 960,
  astride the split summit roof. Rim-lit cinnabar from the real world behind and cyan from her blade. SW is in her
  hands.
- **The data world:** the Summit (station 4), cleaved along x 960. The gap is 154 px at f1633 and opening about 6 px a
  frame (160 px at f1634); the halves are tipped back ±3°. The cut edges burn cyan (8 px) and
  shed ink, and both edges carry the sliced half-glyphs (cinnabar, 24–64 px), with `Segmentation fault (core dumped)`
  cut between `fa` and `ult` near the bottom and the red banner cut down its middle behind her.
- **The Giant Sword:** whole, 80 u (about 40 m), point down, translucent cyan-white at 85 %, along the cut about 12 u
  behind her: its crossguard (about 940 px wide, y ≈ 470–600) just above her head, its grip out of the top edge, its
  blade out of the bottom edge. It is the whole formation (exactly 1,000 plain swords fused); part 04 bursts it back
  into 1,000 sprites on f1634.
- **Through the gap:** the world beyond the firewall's breach at night in rain (BG04-breach_out), R 0.80.
- **Lyric:** 「千行剑 千行剑 一剑劈开数据界」 in the couplet layout: slot R 千行剑 (x 1500, y 210–792), slot L 千行剑
  (x 420, y 170–752), slot B 一剑劈开数据界 (y 855–1015, x 372–1548, with 开 centred on x 960). The gutter's `4`
  (JetBrains Mono 28 px, paper at 35 %) sits at the head of slot R, centred on x 1500, y 170–198; it belongs to slot R
  and leaves with it (it rides the right half). 界 landed on f1625; the line stays until at least f1649, and part 04
  owns its exit.
- **Camera:** frontal at her chest height, 7 u, FOV 46. The shake from f1606 has decayed and the punch has eased out;
  it is pushing slowly at 1.5 %/s.
- **Music and effects:** the break bar (no sub) ends on f1633. No hit-stop is active. The last large flash is the
  slam's impact frame at f1600.
- **R:** 0.80.

### Art in this part

- **Registry:** B5 · B6 · B7 · B8 · C7 · C8 · F-low · F-issen · F-cut_down · F-cut_up · F-sword_finger · F-enter ·
  F-charge · F-chop · SW (in her hand, floating, planted, and instanced ×1,000 as the formation of plain swords and
  ×3,000 as snow-swords; rotated, never mirrored). No registry drawing is shown over 900 px.
- **Other parts' art:** BG02-street and PR02-enterkey (part 02's avenue and keycap) in S03-01 to S03-05;
  BG04-breach_out (part 04's plate) through the gap in S03-15; BG-tower (part 08's shared central tower), attached to
  generate BG03-summit, and its alpha is the profile of the code-written master pagoda (S03-09 to S03-15).
- **New:**
  - **N03-vow_close**: head-and-shoulders close-up of B5, eyes closed, 1536×2048 (defined in S03-04).
  - **N03-vowOpen_close**: the same with the eyes open, a masked edit of N03-vow_close (S03-04).
  - **N03-cleave_up**: front-view airborne wind-up, sword swung back over her head, a shout (S03-14).
  - **BG03-terraces**: the terraced slope across the valley, `-far` 2560×1440, plus the ledge strip `-near` 2560×720
    (S03-08).
  - **BG03-inksky**: a monochrome ink-wash night sky, the far layer of stations 2–4, 2560×1440 (S03-08).
  - **BG03-summit**: the master pagoda's top roof and the platform at the foot of its needle antenna, 2560×1440 on
    magenta; an edit of BG-tower, generated with it attached (S03-11).
  - **PR03-scroll**: a blank hanging-scroll mounting, 1152×2048 on magenta (S03-07; also the banner in S03-15).
  - **PR03-giantsword**: the sword alone at high resolution, point up, 1440×2560 on magenta; shown large as the
    40 m Giant Sword (S03-13).
- **Code only:** the log rain and its freeze, the 0/1 decay, the current, the desaturation ring, the chorus
  line-number gutter,
  the formation and all its shapes, the snow-swords and pins, the tunnel of red error lines, the stack traces on the
  scrolls, the terrace code and the bug holes, the cyan chain, the code city's 40 pagodas and the master pagoda's code
  tiers, the One Line and its terminal text (`$ kill -9 %red_tide`, then bash's `Killed` reply), every slash arc, smear,
  multiple, spark, ink burst, ripple, shock ring and speed line, the cut and the split, the impact frame, every glow,
  and the lyric layer.
