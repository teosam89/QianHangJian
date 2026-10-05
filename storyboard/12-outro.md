## Part 12 · Outro · f5549–f6328

The camera pulls back out of the cyan city into your monitor at dawn. She leaps out through the screen and the city
ink-bleeds into the night's test run, one PASS per beat. She peeks over the top edge and sits there as your desktop pet.
On the hit (f5909) the last suite passes at 06:00 and your cursor comes up to her; she waves, pats it, yawns, waves
again, and you type `sleep 8h`. She salutes, 「千行剑」 lands on the bar-138 stabs, she bows on the last hit, the gong
stamps 「赛博江湖」 and the monitor sleeps; black at f6328. Twenty shots, R 0, two large flashes (f5909, f6269).

**Geometry and conventions (every shot)**
- **Plate coordinates.** All positions in this part are given in DESK-dawn plate px (2560×1440, the one desk geometry of
  rulings G5) unless they say "frame" or are listed under a framing in a shot's Picture (those are frame px). A
  framing is a crop `(x, y, w)` of the plate, with h = 0.5625 w and frame scale s = 1920 / w. DESK-dawn is an edit of
  DESK-night (part 10): identical framing, first person seated, your eye a little above the monitor's top edge.
- **The monitor (MON):**
  - outer edge x 536–1824, y 396–1142: the bezel is 24 px all round;
  - top edge (her seat line) at y 396: one straight, level line. Your eye is just above it, so it reads as a line with
    a 4 px lip of its top face;
  - a pin-size power LED in the bottom bezel at (1180, 1130), which code lights;
  - a low foot under the bottom bezel, standing on the desk at y 1150.
- **Screen** (MON's keyed area): x 560–1800, y 420–1118 (1240×698). Its content is a 1920×1080 comp scaled by 0.646.
- **Terminal (screen content from f5605), in plate px:**
  - JetBrains Mono 21.5 px (12.9 px per character), 30 px rows, text from x 584;
  - 21 rows, row k spanning y 437 + 30(k − 1) to +30 (row 21 is y 1037–1067);
  - a tmux status row at y 1088–1118: ink background with a 1 px cyan rule on top, `[jianghu] 0:test*` in cyan on
    the left, the clock in paper on the right.
- **The wall:** plain above the monitor at x 480–1880, y 40–396 (her seat zone, and where she pops up). A narrow strip
  of wall, x 1824–1900, runs between the monitor and the window.
- **Window:** x 1900–2520, y 100–940, one vertical mullion at x 2200 (left pane x 1900–2200, right pane x 2200–2520).
  - The far city sits low in it: roofs at about y 620–720 in morning haze, mist in the streets below, one old pagoda
    roof among the blocks. The left pane is open sky down to about y 620.
  - The far tower stands in the right pane at x 2255–2325 with its top at y 600, a clean silhouette. It is a plain
    tower of the real city, not BG-tower.
  - The sun (code): a 64 px disc with a 180 px glow, set between the sky and the skyline (code mattes the skyline from
    `-window`). Its centre rises behind the far tower: (2290, 640) at f5549 → (2290, 568) at f5909, when its lower rim
    clears the tower top → (2290, 520) at f6268, linear in between.
  - The moon: PR06-moon, 70 px, paper at 35 % fading to 15 % by f6268, at (2340, 360). It is the Bridge's moon (part
    10 has it at (2350, 290)), sunk a little and pale.
- **Her desk scale** (stickers are scaled to match, never mirrored):
  - standing 323 px tall;
  - she sits right of the monitor's centre, toward the window. Seated drawings sit with the seat line on (1560, 396):
    head top at y 192, boots down to y 504;
  - peeking drawings have their cut line at y 398, hidden 2 px behind the edge, and show 161 px above it (head top at
    y 235).
- **SW:** 323 px long.
  - Leaning: tip on the edge at (1399, 396), rotated 8° with its top toward her, rocking ±1.5° around the tip, one
    cycle per bar.
  - Floating: upright, centre (1399, 224), bobbing ±6 px, one cycle per bar.
- **Cursor:** part 08's cursor (S08-05: white #FFFFFF, 5 px ink outline, soft drop shadow; arrow 112 px, open hand
  124 px, not-allowed 104 px).
  - Here it is on your monitor, not on the frame. It is screen content, so those sizes are native screen px and it
    scales and moves with the monitor: the arrow is 72 plate px tip to tail.
  - It parks with its tip at (1700, 450), right of her boots.
- **Framings:**

  | id | crop (x, y, w) | s | what it holds (frame px) |
  |---|---|---|---|
  | SCR | (560, 420, 1240) | 1.548 | the screen exactly fills the frame |
  | W | (0, 0, 2560) | 0.75 | the whole room |
  | MW | (480, 95, 1960) | 0.980 | the whole monitor (x 55–1317, top edge y 295), her seated on top (306 px, seat (1058, 295), head top y 95), the window on the right (x 1391–1920, mullion x 1685) with the far tower and the sun |
  | M | (850, 41, 1378) | 1.393 | her seated (435 px) or peeking, the upper screen (x 0–1324), the window's left pane on the right (x 1464–1920) |
  | TT | (914, 202, 1249) | 1.537 | her peeking at the top of the frame, screen rows 1–15 below (x 0–1362), the window's left pane on the right (x 1516–1920) |
  | TI | (573, 656, 1227) | 1.565 | terminal rows 8–21 (34 px text), the status row, the bottom bezel, the desk and the keyboard |
  | TI-a / TI-b / TI-c | (573, 764, 1033) / (573, 872, 818) / (573, 937, 603) | 1.859 / 2.347 / 3.184 | ever tighter on the newest rows (40 / 50 / 68 px text) |
  | P | (1172, 116, 775) | 2.477 | her seated full figure, 773 px, centred |
  | CU | (1302, 148, 517) | 3.714 | her seated, waist up |
  | E1 | (1163, 4, 794) | 2.418 | her standing, 780 px, centred, eye line at her chest |
  | E2 | (920, 0, 1536) | 1.25 | the closing picture: her at x 800, the title column at x 1420 over the window's left pane, the sun in the right pane |

  - The her-centred framings (MW's seat, M, TT, P, CU, E1) keep her at the same frame position across cuts. The
    headroom is the plate's: a standing figure's head top is 73 plate px below the plate's top edge.
  - At s > 2 the plate is defocused (Gaussian 6 px at s 2.4–2.5, 10 px at s 3.7).
  - At s > 2 the bezel edge in frame is redrawn in code so it stays crisp: matte ink #16161C, with a 1 px paper
    highlight on the top lip.
  - The watermark zone (frame x > 1560, y < 200) falls on plain wall or window sky in every framing except SCR (part
    11's sky) and the TI framings, where it falls on the terminal's upper right: only the tails of the longest rows
    reach there and nothing flips there.
- **The desk stack, back to front:**
  1. DESK-dawn `-window`: the far city with its sky, painted pre-dawn. Code grades the sky (paper-white at the top to a
     pale cinnabar band along the skyline), slips the sun and its glow between the sky and the skyline, and adds
     PR06-moon;
  2. window glass (code): about 20 leftover raindrops from the Bridge's night, catching the light;
  3. DESK-dawn `-room`: the room, with the window panes and the screen area keyed;
  4. room light (code):
     - the screen's cyan spill on the desk, keyboard, mug, wall and her underside;
     - the window's light patch on the wall;
     - after f5909, the warm sun shaft;
     - her soft wall shadow and the sword's (ink 25 %, blur 8 px, offset −60/−10 px), crisper and longer after f5909;
  5. screen content: Part 11's city comp, then the terminal, with the cursor in it;
  6. screen glass (code): a paper sheen band (6 %) that drifts with the camera, and 1.5 % corner falloff;
  7. MON;
  8. her and SW: behind MON while she peeks, in front of it once she sits;
  9. her light (code): the two-light rim, cyan from the screen below and warm paper from the window on her
     screen-right edge;
  10. the mug's steam (code): 3 wisps over the mug at (1720, 1250), a 2 s loop;
  11. dust motes (code): about 30, drifting up-left in the window light;
  12. the post pass: paper texture (multiply), grain and the grade;
  13. the lyric layer, which here carries part 11's carried-over diff rows, the title and the seal.
- **Her idles while seated:**
  - sway ±3° around the seat point, as a sine with its extremes on the beats (+3° on beats 1 and 3, −3° on 2 and 4);
  - breath: scaleY 1.000 ↔ 1.012, one cycle per bar;
  - a 1.03 pop (2 f) on the riff accent, which lands on the & of 1 (6 f after each downbeat).
- **Landings** squash 1.12 × 0.88 for 2 f, then 0.96 × 1.05 for 2 f, then rest, all pivoted at the contact point.
- **Music lines.** Onset frames were measured from the mp3 for this part (ffmpeg band energy, ±1 f); beat frames come
  from song/frames.md.
  - Bars 130 and 138 both carry the Enter-combo rhythm: stabs on 16ths 0·3·6·8, near-silent gaps between them, then a
    bass dropout before the hit.

#### S12-01 · f5549–f5593 · 45 f · 184.97–186.43 s · bar 123.00–124.00
It is your monitor.
- **Music:** Outro bar 123: the suona hook riff, full band.
  - The downbeat kick lands on f5550, the strongest onset of the bar.
  - The riff accent falls on f5555, beats on f5560 and f5571, and a kick on beat 4 (f5583–f5584).
- **Lyric:** none sung; the Outro is instrumental.
  - Carry-over from part 11 (rulings G6): its final diff layout stays exactly where part 11 left it, in frame px on the
    lyric layer, until f5564, which is 24 f after 缺 (f5540):
    - the header row, y 64–224: its dim gutter text, the hunk header `@@ -4 +4 @@` (JetBrains Mono 36 px, paper at
      60 %, x 100–340, baseline y 155), then the context 「千行剑」 x 370–850 and 「千行剑」 x 900–1380 (160 px, paper with
      a cyan glow), on their ink strokes;
    - the `+` row, y 244–424: its gutter `4` (x 250) and `+` (x 320) in cyan JetBrains Mono 60 px, and
      「此去赛博再无缺」 at x 400–1660 on its cyan-washed plate.
    - Nothing of it is at x > 1560 above y 200, so the watermark zone stays clear.
  - Over f5565–f5576 both rows leave together, gutters and plates with them: they shrink to 60 % about (880, 244),
    lift 40 px and fade out. They are gone from f5577.
- **Picture (back to front):**
  - The screen content: part 11's last image carries on without a cut.
    - On f5549 the frame is SCR, so the screen is the frame and part 11's comp fills it pixel for pixel: B9 skyward on
      the BG-tower tip (her platform caps the tower's needle antenna), at x 760, feet y 849, 242 px tall, the blade tip
      at y 330; the whole city cyan with the seam running from under her feet to the horizon; the 10,000 swords
      dispersed as rising cyan motes; exposure 1.35, bloom 1.6.
    - Part 11's WebGL scene keeps rendering at 1920×1080, mapped into the screen rect (×0.646), until f5615.
    - Its camera finishes part 11's ease-out pull-back: 0.03 m/f on f5549, decaying to rest by f5560 (d 5.4 → about
      5.56 m). She stays at comp x 760 (part 11's offset) and settles at about 235 px, feet at y 846.
    - Its idle continues: lanterns pulse on the beats, the motes drift up, and B9 breathes ±1.2 % with her ribbons
      floating, plus a ±4 px knee-bob on the beats.
  - Around it, the desk stack at dawn, before sunrise:
    - the sun at (2290, 640) is hidden behind the far tower; only a cinnabar halo 180 px wide shows round its top;
    - the screen's cyan spill on the desk, keyboard and mug is 35 % at the bezel and falls off over 420 px;
    - a cool paper skylight patch from the window lies on the wall's right part and the strip beside the window.
  - At W (from f5577), in frame px:
    - the screen is 930×524 at (420, 315) and the monitor's top edge is at y 297 (x 402–1368);
    - the window is at x 1425–1890 with its mullion at x 1650; the far tower stands at x 1691–1744, top y 450, with
      the sun's halo behind it at (1718, 476);
    - the moon is at (1755, 270), 52 px;
    - the keyboard is at x 660–1140, y 908–1020, the mug at (1290, 938), the plant at (315, 922);
    - B9 is part 11's size × 0.484, about 114 px.
- **Action:**
  - f5549: the pull starts on the downbeat. A radial brush blur (8 px) smears the outer frame over f5549–f5554 and
    fades.
  - f5550 (kick): the bezel's inner lip slides in from all four frame edges. From f5551 the room opens around it: wall,
    window, desk, keyboard, mug, plant.
  - f5555 (accent): the city's lanterns flare cyan for 2 f inside the screen.
  - f5560, f5571 (beats): lantern pulses. The cyan spill on the desk pulses with them, 35 → 42 → 35 %.
  - f5565–f5576: the diff rows leave (see Lyric).
  - f5571–f5583: inside the screen, B9's knee-bob deepens from ±4 to ±8 px and the motes begin to drift toward her.
  - f5577: the camera lands on W.
  - f5583 (kick): the mug's steam leans 2 f in the wake of the pull. On the window glass the raindrops glint one after
    another, left to right.
  - f5577–f5593: the room at rest: steam, motes, the moon fading, the halo behind the tower breathing (±10 %, one
    cycle per bar).
- **Camera:**
  - f5549–f5577: pull back, drifting slightly up and right, from SCR (560, 420, 1240) to W (0, 0, 2560),
    easeOutQuart in log scale (40 % of the way by f5555).
  - f5577–f5593: a slow push to (25, 15, 2510), about 3.5 %/s. No shake.
- **Grade / R:** R 0.
  - f5549 is still part 11's brightest frame of the film; inside the screen it keeps that grade.
  - The room around it is ink-dark dawn at about 50 % exposure, with cool paper skylight and the cyan screen spill.
  - Paper texture and grain as everywhere.
- **Out:** hard cut on the bar-124 downbeat, f5594, to MW.
- **Art:**
  - B9, inside the screen as part of part 11's city comp (on PR11-tip, an edit of BG-tower).
  - DESK-dawn `-room` and `-window`, the whole plate sharp at s 0.75–1.548.
  - MON: the inner lip must read at s 1.548 for the first frames.
  - PR06-moon.

#### S12-02 · f5594–f5638 · 45 f · 186.47–187.93 s · bar 124.00–125.00
She leaps out; the city bleeds into the terminal.
- **Music:** bar 124: hats and the riff on the downbeat f5594, kick f5595, riff accent f5600; beats f5605 and f5616;
  beat 4 f5628 with a kick on f5629.
- **Lyric:** none.
- **Picture (back to front):**
  - MW (480, 95, 1960), s 0.980:
    - the wall above the monitor;
    - the window on the right (x 1391–1920, mullion at x 1685): the far skyline low in it, the far tower at
      x 1739–1807 (top y 495) with the sun's halo behind it at (1773, 521), and the pale moon at (1822, 260);
    - the monitor (outer 55–1317 × 295–1026; screen 78–1293 × 318–1002);
    - below the bottom bezel, a strip of the desk (from y 1033).
  - The screen content: the city comp at scale 0.633, with B9 at part 11's position (comp (760, 846), frame (559, 854),
    about 149 px). Over f5605–f5615 it becomes the terminal.
  - Code light: cyan spill, glass sheen, motes.
  - **The terminal script** (screen content from f5605).
    - Badges: ` PASS ` is bold ink on cyan; ` RUNS ` is bold ink on paper.
    - Text: the directory in paper at 70 %, the file name at 100 %, the test name at 90 %, the time at 45 %.
    - Each row first appears as RUNS when the row above it flips. It flips to PASS on its frame below: a 2 f cyan flare
      runs across the row and the time types in.
    - Then the next RUNS row appears and the block scrolls up one row (30 px, 2 f, ease-out, 2 px overshoot).
    - The table below is the script; the right-hand column is an English note on each joke and is not on screen.

    | # | flips | on screen (after the badge) | the joke |
    |---|---|---|---|
    | 1 | before | `city/neon_rain.spec.ts › the rain is tail -f; it never stops (12 ms)` | Verse 1's rain of log lines |
    | 2 | before | `city/lanterns.spec.ts › holo lanterns lit, signboards stay blank (8 ms)` | the blank boards |
    | 3 | before | `body/heartbeat.spec.ts › health check: the pulse is still beating (3 ms)` | the heartbeat line |
    | 4 | before | `hud/compile.spec.ts › one thought compiles with 0 warnings (41 ms)` | the compile in two beats |
    | 5 | before | `firewall/city_wall.spec.ts › the wall holds against the hacker tide (96 ms)` | the firewall |
    | 6 | before | `sword/frost.spec.ts › the blade stays cold under load (5 ms)` | the frost on her blade |
    | 7 | before | `chip/stele.spec.ts › "xia" and "yi" engraved on the die (17 ms)` | the two engraved characters |
    | 8 | before | `sword/enter_key.spec.ts › the crossguard returns on Enter (1 ms)` | the Enter crossguard |
    | 9 | before | `ink/death.spec.ts › cut errors fall as ink, not blood (22 ms)` | death is ink |
    | 10 | before | `formation/snow.spec.ts › each falling sword seals one bug hole (64 ms)` | the sword snow |
    | 11 | before | `sword/legacy.spec.ts › the old sword is not deprecated (2 ms)` | Verse 2's mockery |
    | 12 | before | `neigong/kernel.spec.ts › kernel rewritten overnight, boots clean (480 ms)` | inner-energy kernel |
    | 13 | before | `threads/palm.spec.ts › 100,000,000 threads fit in one palm (33 ms)` | the threads in her palm |
    | 14 | before | `ci/impossible.spec.ts › "impossible" -> ran it once -> green (7 ms)` | "you say impossible, I say run it" |
    | 15 | before | `ui/cursor.spec.ts › a head pat is not a bug report (4 ms)` | Hook 2's head pat |
    | 16 | before | `tsundere/not_for_you.spec.ts › fixed it for you (she denies it) (1 ms)` | "not that I fixed it for you" |
    | 17 | before | `dragon/overflow.spec.ts › the stack trace unwinds to depth 0 (1.2 s)` | the boss |
    | 18 | before | `bridge/zen.spec.ts › sword !== sword, code !== code (0 ms)` | the Bridge's "sword is not sword" |
    | 19 | before | `bridge/plum.spec.ts › one thought blooms in the rain (11 ms)` | the plum blossom |
    | 20 | before | `desk/moon.spec.ts › same moon on both sides of the glass (6 ms)` | the shared moon |
    | 21 | f5616 | `boot/post.spec.ts › reboots clean after the error beep (3 ms)` | the reboot |
    | 22 | f5628 | `final/git_diff.spec.ts › "-" line cleaved, "+" line lands (9 ms)` | the payoff |
    | 23 | f5639 | `qinggong/eaves.spec.ts › hops 9 eaves, 0 layout shifts (14 ms)` | qinggong, the lightness skill |
    | 24 | f5650 | `dianxue/sigstop.spec.ts › one pressure point freezes a runaway thread (2 ms)` | dianxue, the pressure-point strike, as SIGSTOP |
    | 25 | f5661 | `qinna/catch.spec.ts › catch() grapples every thrown error (6 ms)` | qinna, grappling |
    | 26 | f5673 | `neigong/leak.spec.ts › inner qi leaked: 0 bytes (128 ms)` | inner energy as memory |
    | 27 | f5684 | `zouhuo/cpu.spec.ts › no qi deviation at 100% CPU (300 ms)` | zouhuo rumo, qi deviation |
    | 28 | f5695 | `biguan/offline.spec.ts › closed-door training passes offline (77 ms)` | biguan, secluded training |
    | 29 | f5706 | `wuxing/imports.spec.ts › five elements, 0 circular imports (19 ms)` | the five elements' cycle |
    | 30 | f5718 | `shifu/review.spec.ts › master's code review: LGTM (1 ms)` | the master |
    | 31 | f5729 | `jianghu/rules.spec.ts › nobody force-pushes in the jianghu (4 ms)` | the rules of the jianghu |
    | 32 | f5740 | `manual/nine_yin.spec.ts › the secret manual parses, no SyntaxError (52 ms)` | the Nine Yin manual |
    | 33 | f5751 | `dugu/nine_swords.spec.ts › nine forms, one for each edge case (90 ms)` | Dugu's nine swords |
    | 34 | f5763 | `lianzhao/enter_combo.spec.ts › hits land on 16ths 0, 3, 6, 8 (1 ms)` | her Enter combo |
    | 35 | f5774 | `jianqi/range.spec.ts › sword qi reaches 1000 lines away (8 ms)` | sword qi, a thousand lines |
    | 36 | f5785 | `taiji/balance.spec.ts › load balanced: yin 50%, yang 50% (11 ms)` | taiji |
    | 37 | f5796 | `meridians/coverage.spec.ts › qi reaches all 12 meridians, no dead code (23 ms)` | the meridians |
    | 38 | f5808 | `anqi/side_effects.spec.ts › no hidden weapons, no hidden side effects (3 ms)` | anqi, hidden weapons |
    | 39 | f5819 | `sanzhao/retry.spec.ts › "within three moves": retry(3), then strike (40 ms)` | "within three moves" |
    | 40 | f5830 | `heal/hotfix.spec.ts › one hotfix closes the wound in one pass (6 ms)` | healing |
    | 41 | f5841 | `wulin/merge.spec.ts › all sects merged, 0 conflicts (110 ms)` | the martial alliance |
    | 42 | f5853 | `duel/dawn.spec.ts › duel at dawn: no race condition (18 ms)` | a duel at dawn |
    | 43 | f5864 | `combo/cut_down.spec.ts (1 ms)` | the Enter combo, move 1 |
    | 44 | f5873 | `combo/cut_up.spec.ts (1 ms)` | move 2 |
    | 45 | f5881 | `combo/issen.spec.ts (1 ms)` | move 3 |
    | 46 | f5887 | `combo/enter.spec.ts (1 ms)` | move 4 |
    | 47 | f5909 | `e2e/whole_jianghu.spec.ts › the whole jianghu, end to end (21600 s)` | 21600 s = midnight to 06:00 |

    - The longest row is 85 characters (1097 px of the 1192 px text width, so it ends at x 1681).
    - On the reveal the rows hold #1–#20 as PASS and #21 as RUNS. After the flip of row #n the 21 rows show #(n−19)
      to #(n+1).
    - The summary (f5910–f5917) prints below #47, one line per frame. Colours: `passed`, `updated` and `100%` in cyan
      bold, the numbers in paper, the rest in paper at 70 %.
      ```text

      Test Suites: 108 passed, 108 total
      Tests:       1000 passed, 1000 total
      Snapshots:   1 updated, 1 total
      Lines:       100% (1000/1000)
      Time:        21600 s
      Ran all test suites.
      you@desk:~/jianghu$ █
      ```
    - The prompt: `you` in cyan, `@desk:~/jianghu$` in paper. The block cursor blinks on the beats (on for 6 f from
      each beat, then off).
    - The status-row clock reads `05:59` until f5909 and `06:00` after.
    - No live counter is on screen. The only numbers are the per-test times and the final summary, so the story curve
      is never shown as a number.
- **Action:**
  - f5594: cut in. Inside the screen B9 sinks: squash 1.08 × 0.90 over 3 f, pivoted at her feet. The city's motes
    rush toward her.
  - f5600 (riff accent): she launches straight up inside the screen.
    - Stretch 0.82 × 1.30.
    - Three code afterimages trail her at 40 / 25 / 10 %, 1 f apart.
  - f5602: she reaches the screen's top edge at frame (559, 318) and breaks out through the glass.
    - A cyan ring ripples on the glass where she crossed: a 2 px line, radius 0 → 120 frame px over 10 f, fading.
    - Ten cyan light droplets (3 px) spray up and fall back onto the glass.
    - Her layer moves from the screen content to above MON, and she grows ×1.15 as she comes out toward you.
  - f5603–f5605: she leaves through the top of the frame and is gone by f5605. The bezel's top lip glints cyan where
    she passed (code, 6 f).
  - f5605 (beat 2): the ink bleed from her exit point.
    - Five ink blots bloom down the screen over the city, f5605–f5615, with wet paper-grain edges.
    - The ink is the terminal's #0B0B10 background. Rows of text fade up inside each blot as it spreads.
    - The room's cyan spill falls from 35 to 12 % over the same frames.
  - f5616 (beat 3): the screen is all terminal. #21 `boot/post` flips to PASS and #22 appears as RUNS (scroll).
  - f5628 (beat 4): #22 `final/git_diff` flips; #23 appears.
  - f5605–f5638: the top edge stays empty, because she is behind the monitor.
- **Camera:** MW (480, 95, 1960) → (539, 128, 1842), easeInOutSine: 6 % over the bar, about 4 %/s. A 1 % punch on
  f5600 decays over 4 f.
- **Grade / R:** R 0.
  - The room dims as the city leaves (spill 35 → 12 %). The terminal's ink is now the darkest area in frame.
  - Before sunrise the sky is paper at 85 % with a 30 % cinnabar band along the skyline.
- **Out:** hard cut on the bar-125 downbeat, f5639, to M.
- **Art:**
  - B9, inside the screen, then exiting up.
  - DESK-dawn: `-room`, and `-window` for the window.
  - MON, PR06-moon.
  - Code: the terminal, the ink bleed, the ripple.

#### S12-03 · f5639–f5683 · 45 f · 187.97–189.43 s · bar 125.00–126.00
Head and hands pop up over the edge.
- **Music:** bar 125: downbeat f5639, riff accent f5645, beat 2 with a kick on f5650–f5651, beat 3 f5661, beat 4 with
  a kick on f5673–f5674.
- **Lyric:** none.
- **Picture (back to front):**
  - M (850, 41, 1378), s 1.393:
    - the wall above the monitor in ink wash, with the window's light patch on its right part (paper at 10 %);
    - on the right, the strip of wall (x 1358–1464) and the window's left pane (x 1464–1920, its mullion at x 1882):
      pale pre-dawn sky over the far roofs;
    - the top edge across the frame at y 495, from the left frame edge to the monitor's corner at x 1358;
    - the screen's upper part (x 0–1324, y 528–1080) with rows 1–12 at 30 px text (row 13 cut by the frame). The
      rows' first 20 characters are off frame left, so their test names and times run under her.
  - Her: C4, behind MON.
    - Cut line at plate y 398, under the edge; head centre at frame x 990; head top at y 271.
    - Her hands grip the edge at about x 930 and x 1050.
    - Visible height 225 px.
  - Light: cyan from the screen below on her chin and fingers (20 %), and cool paper skylight from the window on the
    right.
  - Her wall shadow (code) follows her.
- **Action:**
  - f5639: cut in on the downbeat. The edge is empty for 6 frames. #23 flips off frame at the bottom, but the scroll
    shows: every row in view rises 42 px in 2 f.
  - f5645 (accent): C4 pops up from behind the monitor.
    - 40 % up on f5645; full height plus a 12 px overshoot on f5646.
    - At rest on f5647, with a squash 1.08 × 0.92 pivoted at her hands.
    - Two small ink-dust puffs leave the edge under her hands (code, 5 f).
  - f5650 (beat 2): scroll (#24). She looks toward screen-left: slides 10 px left and tilts −5° (pivot at her hands),
    over 3 f.
  - f5661 (beat 3): scroll (#25). She looks toward screen-right: 20 px right, +5°.
  - f5673 (beat 4): scroll (#26).
    - She is back at centre, facing you, tilt 0, with an 8 px hop (2 f up, 2 f down).
    - Two cyan four-point sparkles (code, 24 px) blink by her eyes, f5673–f5679.
- **Camera:** M → (882, 57, 1329), easeInOutSine, about 2.4 %/s, centred on her. 1 % punches on the kicks f5651 and
  f5674, decaying over 4 f.
- **Grade / R:** R 0. Dawn before sunrise, as in S12-02.
- **Out:** hard cut on the bar-126 downbeat, f5684, to TT.
- **Art:**
  - C4, behind MON with its cut line hidden under the edge.
  - DESK-dawn `-room`: the wall above the monitor must be plain, with no shelf, poster or object in x 480–1880,
    y 40–396 (G5). `-window`: the left pane.
  - MON: the top edge must be one straight line, so C4's cut hides behind it.

#### S12-04 · f5684–f5728 · 45 f · 189.47–190.93 s · bar 126.00–127.00
Peeking down at the scroll.
- **Music:** bar 126: downbeat f5684 with a kick on f5685, riff accent f5690, beat 2 f5695, beat 3 f5706 with a kick
  on f5708, beat 4 f5718.
- **Lyric:** none.
- **Picture (back to front):**
  - TT (914, 202, 1249), s 1.537:
    - a strip of wall at the top;
    - the top edge at y 298, from the left frame edge to the monitor's corner at x 1399;
    - the screen below it (x 0–1362, y 335–1080): rows 1–15 at 33 px text (#8–#22 on f5684, one row higher on each
      beat). The first 25 characters of each row are off frame left; what runs under her are the test names and
      times, and the rows end between frame x 740 and 1180, around and under her face;
    - on the right, the wall strip (x 1362–1516) and the window's left pane (x 1516–1920), sky over the far roofs.
  - Her: N12-peekDown, behind MON.
    - Cut line at plate y 398; head top at frame y 50; centre x 993.
    - Visible height 248 px.
- **Action:**
  - f5684: cut in. Swap N12-peekDown: she leans over the edge to look down at the rows.
    - #27 flips off frame and every row rises one row (46 px in 2 f).
    - The old row 1, `chip/stele.spec.ts › "xia" and "yi" engraved on the die` (#7), slides up under the bezel and
      vanishes.
  - f5695, f5706, f5718 (beats): the next row rises and slips under the edge just below her face. Each time her head
    dips 4 px and comes back, as if she is reading.
  - f5701: she leans further in: the sticker moves 6 px down and scales to 1.02.
  - f5712: she giggles at the row under her nose, #10 `… each falling sword seals one bug hole (64 ms)`, whose time
    ends right under her chin: her shoulders shake 2 px, three times in 6 f.
  - f5718 (beat 4): swap back to C4 with a 1.04 pop (2 f). She looks up at you.
- **Camera:** TT tilts down with her gaze: crop (914, 202, 1249) → (927, 220, 1216), easeInOutSine, 2.6 % over the
  bar. 1 % punches on the kicks f5685 and f5708.
- **Grade / R:** R 0. As before; the terminal fills most of the frame, so the frame is darker. The cyan underlight on
  her face rises to 25 %.
- **Out:** hard cut on the bar-127 downbeat, f5729, to M.
- **Art:**
  - **N12-peekDown (new):** front view, peeking over a wall top and looking down past its front edge.
    - Only her head, both hands gripping the top edge and the tops of her shoulders show. Everything below her hands is
      cut off by a perfectly straight horizontal line: same crop line, scale and hand positions as C4.
    - Her head tilts forward and down, chin tucked. Big sparkling cyan eyes look down at something just below the
      wall's front edge; her mouth is open in a small delighted smile.
    - The monocle is on her own left eye (screen-right). The cybernetic right hand grips on screen-left; the bare left
      hand grips on screen-right, with the wide sleeve fallen back over the wall top.
    - The cyan ponytail tips and both red ribbon tails fall forward over her left shoulder (screen-right).
    - No sword. Flat magenta, white die-cut border, no text.
  - C4.
  - MON.
  - DESK-dawn `-room`: the wall strip; `-window`: the left pane.

#### S12-05 · f5729–f5773 · 45 f · 190.97–192.43 s · bar 127.00–128.00
She hops up and sits: your desktop pet.
- **Music:** bar 127: downbeat f5729, riff accent f5735, beat 2 f5740 with a kick on f5742, beat 3 f5751, beat 4
  f5763 with a kick on f5764.
- **Lyric:** none.
- **Picture (back to front):**
  - M, starting at (860, 46, 1356), s 1.416:
    - the wall, and on the right the wall strip (x 1364–1472) and the window's left pane (x 1472–1920);
    - the top edge at y 495, from the left frame edge to the monitor's corner at x 1364;
    - the screen's rows 1–12 below (x 0–1330).
  - Her, in turn:
    - C4 behind MON;
    - N12-hop in the air, about 450 px tall;
    - C1 seated in front of MON: 442 px, seat line at frame (991, 495), head top y 206, boots y 648.
  - SW from f5747. At rest it leans with its tip at frame (763, 495); the crossguard is in frame and the pommel at the
    top edge.
- **Action:**
  - f5729: cut in on the downbeat with C4 at rest. She ducks: 40 px down behind the edge over f5729–f5731, with a
    squash of 1.1 × 0.9 (anticipation).
  - f5733: swap N12-hop. She springs up from behind the monitor; the bottom of the drawing starts at the edge and
    rises.
  - f5735 (accent): the apex, her boots 97 plate px (137 frame px) above the edge, stretched 0.94 × 1.08. On this frame
    her layer moves from behind MON to in front of it.
  - f5736–f5739: she drops forward onto the edge.
  - f5740 (beat 2): swap C1, seated, landing on the seat line.
    - Landing squash on f5740–f5741, rebound on f5742–f5743 (the kick lands in the rebound), at rest from f5744.
    - Two ink-dust puffs leave the edge on either side of her (code, 6 f).
  - f5747–f5751: SW falls point-down into frame from above (frame y −450) and lands on its tip at f5751 (beat 3).
    - It bounces 6 px, and a cyan spark flashes at the tip for 4 f.
    - Over f5751–f5763 it tips from 0° to 8° toward her and comes to rest leaning; its rocking idle starts.
  - f5729, f5740, f5751, f5763: rows #31–#34 flip off frame; the rows behind her boots jump up on each beat.
  - f5752–f5773: her seated idle starts (sway, breath, accent pop). She looks at you with C1's closed-mouth smile.
  - f5763 (beat 4): a 4 px bounce on her seat.
- **Camera:** M (860, 46, 1356) → (903, 68, 1270), easeInOutSine: a 6 % push over the bar. A 1.5 % punch on the
  landing f5740 and 1 % on f5764, each decaying over 4 f.
- **Grade / R:** R 0. As before. The cyan from the screen now lights her boots and the backs of her knees (30 %); the
  rim on her screen-right edge is cool paper (15 %).
- **Out:** hard cut on the bar-128 downbeat, f5774, to TI.
- **Art:**
  - **N12-hop (new):** front view, airborne mid-hop, at eye level.
    - Knees pulled up and together, boots tucked under her, the skirt draped over her knees; nothing shows under the
      skirt.
    - Both arms flung out to the sides for balance: the pearl-white cybernetic right arm on screen-left with its fingers
      spread, and the wide left sleeve on screen-right flaring up like a wing.
    - Ponytail and ribbon tails fly straight up; eyes shut in a joyful open-mouthed grin.
    - No sword. Same scale as C9 (same head size). Flat magenta, white die-cut border, no text.
    - Used again in S12-19.
  - C4, C1, SW.
  - MON.
  - DESK-dawn `-room` and `-window`.

#### S12-06 · f5774–f5818 · 45 f · 192.47–193.93 s · bar 128.00–129.00
Insert: the run, four on the floor.
- **Music:** bar 128: four on the floor (kicks f5775, f5787, f5798, f5809), the riff accent on f5780, hats on the 8ths.
- **Lyric:** none.
- **Picture (back to front):**
  - TI (573, 656, 1227), s 1.565, in frame px:
    - terminal rows 8–21 (34 px text) filling y 0–644, row 8 cut by the top of the frame;
    - the status row at y 676–723, with `[jianghu] 0:test*` at the left and `05:59` at the right;
    - the bottom bezel at y 723–761, with the power LED, a cyan dot of 6 px, at (950, 742);
    - below: the monitor's foot, the desk top from y 773, and the keyboard's upper rows at x 481–1482, y 867–1080.
  - The screen's cyan spill on the desk and keycaps (code).
- **Action:**
  - f5774 (beat 1): #35 `jianqi/range.spec.ts › sword qi reaches 1000 lines away` flips on row 21, frame y 597–644.
    - The badge flips and a 2 f cyan flare runs along the row.
    - #36 appears as RUNS and the rows scroll up 47 px (2 f, 2 px overshoot).
  - Then #36 `taiji/balance` flips on f5785, #37 `meridians/coverage` on f5796 and #38 `anqi/side_effects` on f5808,
    each with its scroll.
  - On each kick (f5775, f5787, f5798, f5809), the keyboard's backlight under the visible keycaps pulses cyan
    0 → 25 → 0 % over 6 f (code).
  - The clock's colon blinks on the beats: on for 6 f from each beat.
- **Camera:** TI → (599, 670, 1173), easeInOutSine: a 4.4 % push drifting right with the text. A 2 % punch on each
  kick, decaying over 5 f.
- **Grade / R:** R 0. The screen is the brightest thing in frame. The desk is ink in shadow with 12 % cyan spill.
- **Out:** hard cut on the bar-129 downbeat, f5819, to MW.
- **Art:**
  - DESK-dawn `-room`: the desk top under the monitor's foot, and the keyboard's blank keycaps, which must hold up at
    s 1.6.
  - MON: the bottom bezel, the LED position and the foot.
  - Code: the terminal.

#### S12-07 · f5819–f5863 · 45 f · 193.97–195.43 s · bar 129.00–130.00
The whole monitor: the pet on top, the run below.
- **Music:** bar 129: downbeat f5819, riff accent f5825, kicks f5826 and f5837, a mid accent on f5842 (beat 3), beat 4
  f5853.
- **Lyric:** none.
- **Picture (back to front):**
  - MW (480, 95, 1960), s 0.980:
    - the wall, with her soft shadow on it to the left of her (code);
    - the window on the right (x 1391–1920, mullion at x 1685): the far tower (x 1739–1807, top y 495) and the sun's
      halo behind it at (1773, 477), brighter now; the moon paling at (1822, 260);
    - the whole monitor (outer 55–1317 × 295–1026);
    - all 21 rows (21 px text), with row 21 at y 923–952, and the status row at y 973–1002.
  - Her: C1 seated, 306 px. Seat line (1058, 295), head top y 95.
  - SW leaning at her screen-left: tip (900, 295), top (944, −18). The crossguard sits at about y 38, the pommel just
    out of frame.
- **Action:**
  - f5819, f5830, f5841, f5853 (beats): #39 `sanzhao/retry`, #40 `heal/hotfix`, #41 `wulin/merge` and #42
    `duel/dawn` flip on row 21, each with its scroll.
  - Her seated idle runs, with the accent pop on f5825. The sword rocks.
  - f5842 (mid accent): a 4 px bounce on her seat.
  - f5853 (beat 4): swap N12-sitWatch, with a 1.04 pop (2 f). She leans forward to watch the bottom rows: the run is
    almost done.
  - f5853–f5863: the sun's halo behind the tower brightens from 30 to 50 % (anticipation).
- **Camera:** MW → (519, 117, 1882), easeInOutSine: about 2.7 %/s. 1 % punches on the kicks f5826 and f5837.
- **Grade / R:** R 0. Dawn just before sunrise; the sky band warms toward cinnabar (30 → 40 %).
- **Out:** hard cut on the bar-130 downbeat, f5864, to TI-a.
- **Art:**
  - C1, SW.
  - **N12-sitWatch (new):** front view.
    - Same seat line, scale and position as C1: sitting on a ledge that isn't drawn, legs dangling, knees together,
      skirt draped over her lap.
    - She leans forward from the hips, both hands gripping the ledge beside her hips (cybernetic hand on screen-left).
    - She looks down between her boots at something just below the ledge's front edge: big eager eyes and a small
      open-mouthed "ooh".
    - The cyan ponytail tips swing forward over her left shoulder (screen-right).
    - No sword. Flat magenta, white die-cut border, no text.
    - It is shown large (CU in S12-09), so the cell must reach about 1160 px tall after upscaling.
  - MON, PR06-moon.
  - DESK-dawn `-room` and `-window`.

#### S12-08 · f5864–f5872 · 9 f · 195.47–195.73 s · bar 130.00–130.20
Stab 1: cut_down.
- **Music:** bar 130 opens the Enter-combo rhythm: stab 1 on 16th 0, f5864. The audio falls to near-silence on
  f5870–f5872 before stab 2.
- **Lyric:** none.
- **Picture (back to front):**
  - TI-a (573, 764, 1033), s 1.859, in frame px:
    - rows 12–21 at 40 px (row 11's lower edge at the top), with row 21 at y 507–562;
    - the status row at y 601–657;
    - the bottom bezel at y 657–702, the LED at (1128, 679);
    - the desk below from y 716, with the keyboard at x 571–1760, y 828–1080.
- **Action:**
  - f5864: cut in. #43 ` PASS  combo/cut_down.spec.ts (1 ms)` flips on row 21.
    - A cyan hairline glint slashes diagonally down across the row from upper left to lower right in 3 f: the cut_down
      stroke.
    - It breaks into ink specks that fall 20 px and fade over 4 f.
    - Scroll. #44 appears as RUNS.
    - The keyboard backlight flashes to 20 % and decays over 4 f.
  - f5865–f5872: the row's cyan flare decays. The rows hold still in the near-silence.
- **Camera:** TI-a with a 4 % punch on f5864, decaying over 5 f, then a 3 %/s drift right.
- **Grade / R:** R 0.
- **Out:** hard cut on stab 2, f5873, to CU.
- **Art:**
  - Code: the terminal and the glint.
  - MON: the bottom bezel.
  - DESK-dawn `-room`: the keyboard.

#### S12-09 · f5873–f5880 · 8 f · 195.77–196.00 s · bar 130.20–130.38
Stab 2: cut_up, on her face.
- **Music:** stab 2 on 16th 3, f5873. Near-silence on f5879–f5880.
- **Lyric:** none.
- **Picture (back to front):**
  - CU (1302, 148, 517), s 3.714: the plain wall defocused 10 px behind her.
  - Her: N12-sitWatch, waist up.
    - Her face is about 380 px wide, centred at x 960; head top at y 175, since she leans 15 px lower than C1.
    - The edge of the bezel (code-drawn) runs across the frame at y 920, under her hands.
  - SW's blade at the far left, x 330–390.
  - The screen's glow comes up from below the frame.
- **Action:**
  - f5873: cut in on the stab. The cut_up PASS lands off frame below.
    - Its light throws a cyan up-light over her face: a gradient from the frame bottom to her eyes, 40 % → 0 over 5 f.
    - A cyan glint stroke rises up through the lower frame in 2 f: the cut_up stroke.
    - Her eyes' catchlights flare (code, 2 f).
  - f5874–f5880: she leans 8 px further in (scale 1.02). Her mouth is still in the "ooh".
- **Camera:** CU with a 4 % punch on f5873, decaying over 4 f, then a 2 %/s drift up.
- **Grade / R:** R 0. The cyan up-light is a local light on her face, not a frame flash.
- **Out:** hard cut on stab 3, f5881, to TI-b.
- **Art:**
  - N12-sitWatch, shown large.
  - SW, shown large (1,200 px long at CU scale; only its blade is in frame).
  - Code: the bezel edge.
  - DESK-dawn `-room`: defocused.

#### S12-10 · f5881–f5886 · 6 f · 196.03–196.20 s · bar 130.38–130.51
Stab 3: issen.
- **Music:** stab 3 on 16th 6, f5881.
- **Lyric:** none.
- **Picture (back to front):**
  - TI-b (573, 872, 818), s 2.347, in frame px:
    - rows 16–21 at 50 px (row 15's lower half at the top), with row 21 at y 387–457;
    - the status row at y 507–577;
    - the bottom bezel at y 577–633;
    - the desk from y 652, with the keyboard from y 793 (x 721 to the right edge).
- **Action:**
  - f5881: cut in. #45 ` PASS  combo/issen.spec.ts (1 ms)` flips.
    - A paper-white hairline sweeps right to left along the middle of the row in 2 f: issen, the single flash cut.
    - The row splits along it for 2 f, the film's slash-line wipe in miniature: the upper half slides 3 px right, the
      lower half 3 px left, then they rejoin.
    - Scroll. #46 appears as RUNS.
  - f5883–f5886: the flare decays.
- **Camera:** TI-b with a 4 % punch on f5881, decaying over 4 f, under a 3 %/s drift right.
- **Grade / R:** R 0.
- **Out:** hard cut on stab 4, f5887, to TI-c.
- **Art:** code: the terminal and the hairline. MON: the bottom bezel. DESK-dawn `-room`: the keyboard.

#### S12-11 · f5887–f5893 · 7 f · 196.23–196.43 s · bar 130.51–130.67
Stab 4: enter. The last suite starts.
- **Music:** stab 4 on 16th 8, f5887: the last stab before the bass drops out.
- **Lyric:** none.
- **Picture (back to front):**
  - TI-c (573, 937, 603), s 3.184, in frame px:
    - rows 18–21 at 68 px (the left 46 characters of each row), with row 21 at y 319–415;
    - the status row at y 482–577;
    - the bottom bezel at y 577–654, the desk from y 679 and the keyboard's top edge from y 870.
- **Action:**
  - f5887: cut in. #46 ` PASS  combo/enter.spec.ts (1 ms)` flips.
    - The whole frame dips 6 px like a pressed key: +6 on f5887, +4 on f5888, +2 on f5889, 0 on f5890.
    - A flat cyan ripple ring runs out from the badge (code, 6 f).
  - f5889: scroll. The last RUNS row appears on row 21: ` RUNS  e2e/whole_jianghu.spec.ts`, followed by an ASCII
    spinner (`|` `/` `-` `\`, one step every 3 f).
- **Camera:** TI-c with a 2 % push over 7 f, plus the key dip.
- **Grade / R:** R 0.
- **Out:** hard cut on f5894, into the bass dropout, to MW.
- **Art:** code: the terminal, the ripple and the spinner. MON: the bottom bezel. DESK-dawn `-room`.

#### S12-12 · f5894–f5908 · 15 f · 196.47–196.93 s · bar 130.67–131.00
The held breath.
- **Music:** the break. Bass and kick drop out from f5894 and the audio falls near-silent on f5899–f5902 and
  f5905–f5908. A small hat on beat 4 (f5898) and a pickup on f5903–f5904 lead into the hit.
- **Lyric:** none.
- **Picture (back to front):**
  - MW, tightened, starting at (500, 110, 1900), s 1.011:
    - the window on the right (x 1415–1920, mullion at x 1718): the far tower (x 1773–1844, top y 495) with the sun's
      halo swelling behind it at (1809, 466), and the faint moon at (1859, 253);
    - the RUNS row at the bottom (row 21 at y 937–967, its badge from x 85) with its spinner, and the status row below
      it (y 988–1019).
  - Her: N12-sitWatch, leaning over the edge at the top. Seat line (1071, 289), 315 px.
  - SW leaning at her screen-left.
- **Action:**
  - f5894: cut in. Everything eases down:
    - the motes and the steam slow to 30 % speed;
    - her sway glides to 0° and stops there, though her breath keeps going;
    - the sword's rock settles at 8°.
    - This is not a freeze; every layer still moves.
  - f5894–f5908: she leans in: 6 px down and scale 1.00 → 1.03, easeInSine.
  - f5898 (beat 4): she gulps, a 2 px dip.
  - f5903–f5908: the sun's halo swells from 50 to 90 % behind the tower, and a thin cinnabar line glints along the
    tower's top edge (code).
  - The spinner keeps turning every 3 f.
- **Camera:** (500, 110, 1900) → (550, 135, 1840), easeInCubic: a creep that speeds up into the hit. At its end the
  sun's halo is at (1816, 452), still clear of the frame's right edge.
- **Grade / R:** R 0. The room dims 8 % and the screen spill drops to 8 %: the held breath.
- **Out:** hard cut on the hit, f5909, to TI.
- **Art:** N12-sitWatch, SW, MON, PR06-moon, DESK-dawn `-room` and `-window`. Code: the spinner.

#### S12-13 · f5909–f5953 · 45 f · 196.97–198.43 s · bar 131.00–132.00
06:00, all green; the cursor goes up to her.
- **Music:** the hard hit on f5909: kick and crash, the biggest onset of the Outro, with the kick's body on
  f5910–f5911. Then the riff resumes: beat 2 f5920, an accent on f5929, beat 3 f5931, and beat 4 f5943 with a kick on
  f5944.
- **Lyric:** none.
- **Picture (back to front):**
  - It opens on TI: the RUNS row (row 21 at frame y 597–644), the status row, the bottom bezel, the desk and the
    keyboard.
  - It ends on MW:
    - the whole monitor, with the summary at the bottom of the screen;
    - her waving on top: C2 or C3, 306 px, seat line (1058, 295);
    - SW leaning at her screen-left;
    - the cursor's arrow parked beside her boots: tip at frame (1195, 348), 71 px;
    - the window on the right, with the sun clear of the far tower at (1773, 457) and the moon faint at (1822, 260).
- **Action:**
  - f5909: cut in on the hit. #47 flips from RUNS to PASS.
    - The badge slams: scale 1.4 → 1.0 over 3 f.
    - ` › the whole jianghu, end to end (21600 s)` types in at once.
    - The screen blooms cyan: +35 % exposure over the screen area, with a soft 40 px cyan bloom spilling onto the bezel
      and the desk over f5909–f5911, decaying by f5927. This is large flash 1 of this part.
    - The clock rolls from `05:59` to `06:00` (2 f).
    - The keyboard's backlight flashes to 30 %.
  - f5909, off frame and seen from f5920: the sun's rim clears the tower.
    - A warm paper light shaft (code, 8 % cinnabar tint) cuts in from the window across the wall behind the monitor and
      over her.
    - Her wall shadow sharpens and lengthens.
  - f5910–f5916: the summary prints, one line per frame (see the terminal script in S12-02).
    - f5917: the prompt appears with its block cursor.
    - The text block scrolls up 8 rows in step with the printing, with a 3 px overshoot on f5917.
  - f5912: your cursor appears (fades in over 2 f) as the arrow at plate (915, 905), just right of `1000 passed,`
    where that line settles on row 16 (frame (535, 390) in TI).
  - f5916–f5931: it drifts up and right along a gentle S-curve to its parking spot beside her boots, (1700, 450).
    - easeInOutCubic, arriving on beat 3 with a 4 px overshoot and settle.
    - Then the parked 2–3 px wobble starts.
  - Her waves alternate one drawing per beat, each swap with a 1.04 pop over 2 f:
    - C2 on f5909, off frame;
    - C3 on f5920, as she enters the top of the frame while the camera rises;
    - C2 on f5931, as the cursor arrives;
    - C3 on f5943.
  - f5931 and f5943: the cursor answers each wave with one small circle (radius 6 plate px, over 5 f).
  - Her wall shadow waves with her.
- **Camera:**
  - f5909–f5916: hold on TI, with a 3 % punch on f5909 decaying over 6 f and a 4 px shake (2 f) on the kick body
    f5910.
  - f5917–f5931: pull back and tilt up from TI to MW (480, 95, 1960), easeInOutCubic. The camera follows the cursor
    up.
  - f5931–f5953: MW, drifting in at 2 %/s.
- **Grade / R:** R 0. Sunrise from f5909.
  - Room exposure rises 0.4 EV over 8 f.
  - A warm paper rim (35 %) lights her screen-right edge.
  - The cyan spill settles at 20 % once the bloom decays.
  - The sky lifts toward paper-white.
- **Out:** hard cut on the bar-132 downbeat, f5954, to P.
- **Art:**
  - C2, C3, SW.
  - MON.
  - DESK-dawn: all layers. The far tower's top edge in `-window` must be a clean silhouette, because the sun's rim
    breaks over it.
  - PR06-moon.
  - Code: the cursor (arrow), the terminal, the bloom, the sun shaft.

#### S12-14 · f5954–f5998 · 45 f · 198.47–199.93 s · bar 132.00–133.00
The wave, close.
- **Music:** bar 132: downbeat f5954 with a kick on f5955, riff accent f5960, beats f5965, f5976 and f5988.
- **Lyric:** none.
- **Picture (back to front):**
  - P (1172, 116, 775), s 2.477:
    - the wall, defocused 6 px, with the warm sun shaft and motes drifting through it; at the right edge
      (x 1802–1920) the window's left frame and a sliver of bright pane;
    - the bezel edge (code) across the frame at y 693, ending at the monitor's corner at x 1614;
    - below it, the screen's rows 1–4 at 53 px (row 4 cut by the frame). Row 1 is #35; its tail,
      `1000 lines away (8 ms)`, ends at x 747, just left of her boots.
  - Her: C2 and C3, 773 px. Seat line (960, 693), head top y 188, boots y 961.
  - SW: tip at (561, 693), crossguard at about y 61, the pommel cut off by the top of the frame.
  - The cursor: tip at (1307, 827), 179 px.
- **Action:**
  - C2 on f5954, C3 on f5965, C2 on f5976, C3 on f5988. Each swap gets a 1.04 pop (2 f) and a 2 f code smear along the
    waving hand's arc.
  - After each swap the cursor answers with one circle (6 plate px, 5 f).
  - Her sway (±3°) and breath continue.
  - f5960 (accent): a 4 px bounce.
- **Camera:** P → (1189, 122, 743), easeInOutSine: about 2.8 %/s, drifting slightly toward her face.
- **Grade / R:** R 0. Warm dawn: the warm rim on her screen-right edge at 35 %, the cyan underlight at 20 %.
- **Out:** hard cut on the bar-133 downbeat, f5999, to M.
- **Art:**
  - C2 and C3, shown large.
  - SW.
  - Code: the bezel edge, the cursor.
  - DESK-dawn `-room` and `-window`: defocused.

#### S12-15 · f5999–f6043 · 45 f · 199.97–201.43 s · bar 133.00–134.00
The cursor can't reach her head, so she pats it.
- **Music:** bar 133: downbeat f5999, beat 2 f6010, beat 3 f6021 with a kick on f6023, beat 4 f6033 with a kick on
  f6034, and the 8th on f6039.
- **Lyric:** none.
- **Picture (back to front):**
  - M (850, 41, 1378), s 1.393:
    - the wall with the sun shaft, coming in from the window's left pane on the right (x 1464–1920);
    - the top edge at y 495, to the monitor's corner at x 1358; the screen's top edge (y 528) just under it;
    - rows 1–12 below.
  - Her: C1, then N12-pat, 435 px. Seat line (990, 495).
  - SW: tip at (766, 495).
  - The cursor: the arrow, tip at (1185, 570), 100 px.
- **Action:**
  - f5999: swap C1, settling with a 1.04 × 0.96 squash over 3 f. She sways and looks at you.
  - f6005: the cursor switches to the open hand (part 08's head-pat state, 111 px here) and rises toward her head.
  - f6010 (beat 2): the hand's top edge hits the screen's top edge and stops dead, because it cannot leave the screen.
    - It recoils 4 px.
    - It flips to the not-allowed state for 4 f, then back to the open hand.
    - Three short ink tick lines mark the contact point (code, 4 f).
  - f6011–f6016: the hand backs off 30 px and shakes itself (±3 px, 3 cycles).
  - f6021 (beat 3): the second try, the same bonk, slightly harder (6 px recoil, not-allowed for 4 f).
  - f6022–f6032: she looks down at it and smiles. C1 tilts 6° toward it.
  - f6033 (beat 4): swap N12-pat. She leans over and pats the open hand twice, on f6033 and f6039 (the 8ths).
    - Each pat squashes the hand to 85 % height for 2 f.
    - Two tiny cyan sparkles mark each contact (code).
  - f6040–f6043: she stays in N12-pat; the hand nestles under her palm with a 1 px wiggle.
- **Camera:** M → (914, 62, 1313), easeInOutSine: a 4.7 % push drifting right toward the cursor.
- **Grade / R:** R 0. Warm dawn, as in S12-14.
- **Out:** hard cut on the bar-134 downbeat, f6044, to CU.
- **Art:**
  - C1, SW.
  - **N12-pat (new):** front view.
    - Same seat line, scale and position as C1.
    - She leans toward the right edge of the picture. Her left hand (the wide-sleeve arm, screen-right) reaches down
      beside her hip, palm down, patting something small at the ledge's front edge, with the sleeve hanging off her
      wrist.
    - The cybernetic right hand rests flat on the ledge on screen-left.
    - Eyes closed in happy upturned arcs, a soft smile, a light blush. Legs dangling, knees together.
    - No sword. Flat magenta, white die-cut border, no text.
  - Code: the cursor (arrow, open hand and not-allowed states).

#### S12-16 · f6044–f6088 · 45 f · 201.47–202.93 s · bar 134.00–135.00
Dawn: she yawns (she stayed up all night too).
- **Music:** bar 134: downbeat f6044 with a kick on f6045, riff accent f6050, beats f6055, f6066 and f6078.
- **Lyric:** none.
- **Picture (back to front):**
  - CU (1302, 148, 517), s 3.714: the plain wall defocused 10 px, with the warm shaft and motes.
  - Her: N12-yawn, waist up. Head top at y 160; the seat line (the code-drawn bezel edge) at y 920.
  - SW's blade at the far left (x 330–390).
- **Action:**
  - f6044: cut in. Swap N12-yawn.
    - The yawn grows: scaleY 1.00 → 1.04 over f6044–f6058 (an inhale-stretch, pivoted at the seat).
    - It holds, then releases over f6059–f6070.
  - f6055: a small tear glints at the outer corner of her RIGHT eye (screen-left), drawn in code: a paper-white drop of
    10 px with a cyan catchlight. It holds for 8 f, then slides 6 px and fades.
  - f6066: she sags 6 px over 3 f.
  - f6078 (beat 4): swap C1 with a quick head shake (the sticker moves ±6 px in x, 3 cycles over 6 f): awake again. A
    cyan sparkle by her monocle (code, 6 f).
- **Camera:** CU with a slow push (2 %/s). It drifts up with her stretch (crop y 148 → 140 by f6058) and back to 148
  by f6078.
- **Grade / R:** R 0. The sun shaft is at full warmth now; dust motes glitter in it behind her.
- **Out:** hard cut on the bar-135 downbeat, f6089, to P.
- **Art:**
  - **N12-yawn (new):** front view.
    - Same seat line, scale and position as C1.
    - A huge sleepy yawn: the wide left sleeve (screen-right) raised to cover her open mouth, eyes squeezed shut,
      shoulders lifted, head tipped back a little.
    - The cybernetic right hand rests on the ledge on screen-left. Legs dangling, knees together.
    - No tear drawn; code adds it. No sword. Flat magenta, white die-cut border, no text.
    - Shown large: the cell must reach about 1160 px tall after upscaling.
  - C1, shown large.
  - SW, shown large (1,200 px long at CU scale; only its blade is in frame).
  - Code: the bezel edge.

#### S12-17 · f6089–f6133 · 45 f · 202.97–204.43 s · bar 135.00–136.00
You lean back; one more short wave.
- **Music:** bar 135: downbeat f6089, riff accent f6095, kicks f6102 and f6113, beat 4 f6123 with a kick on f6124.
- **Lyric:** none.
- **Picture (back to front):**
  - It opens on P (her seated, 773 px) and ends on W, the whole room in full dawn, in frame px:
    - the window at x 1425–1890 (mullion x 1650), with the sun clear of the far tower at (1718, 404);
    - the moon faint at (1755, 270);
    - the monitor (x 402–1368, top edge y 297) with her on top (234 px seated, seat (1170, 297));
    - the terminal with the summary;
    - the keyboard along the bottom (x 660–1140, y 908–1020), the mug at (1290, 938) with its steam, and the plant at
      (315, 922).
  - The cursor: the arrow, parked again at (1700, 450). Its frame position slides from (1307, 827) at 179 px to
    (1275, 338) at 54 px.
- **Action:**
  - C2 on f6089, C3 on f6100, C2 on f6111, C3 on f6123: the one more short wave. Each swap gets a 1.04 pop, and the
    cursor answers each with a circle.
  - f6089–f6125: as you lean back, her sway widens to ±4°.
  - f6129: swap C1. She lowers her hand.
  - The mug's steam bends for 2 f as the camera moves; the motes swirl.
- **Camera:**
  - f6089–f6125: pull from P (1172, 116, 775) to W (0, 0, 2560), easeInOutSine: you lean back in your chair.
  - f6126–f6133: W, drifting in at 1.5 %/s.
- **Grade / R:** R 0. The room is in full dawn: exposure +0.6 EV against f5894, the sky paper-white, the skyline band
  cinnabar at 25 %.
- **Out:** hard cut on the bar-136 downbeat, f6134, to TI.
- **Art:**
  - C2, C3, C1, SW.
  - MON, PR06-moon.
  - DESK-dawn: all layers, sharp at s 0.75.
  - Code: the cursor.

#### S12-18 · f6134–f6178 · 45 f · 204.47–205.93 s · bar 136.00–137.00
You type `sleep 8h`; she approves.
- **Music:** bar 136: downbeat f6134 with a kick on f6135, accent f6140, beats f6145 and f6156 (kick f6158), beat 4
  f6168, and the 8th on f6174.
- **Lyric:** none.
- **Picture (back to front):**
  - It opens on TI, in frame px:
    - the last rows #42–#47, then the blank line, the summary and the prompt on row 21 (y 597–644);
    - the status row showing `06:00`;
    - the bottom bezel, the desk, and the keyboard at x 481–1482, y 867–1080.
  - It ends on MW: her seated on top (C1, 306 px), the whole screen, the window with the sun.
  - The cursor: the arrow, parked (71 px in MW).
- **Action:**
  - f6134–f6173: you type `sleep 8h` on the prompt, one character per 8th: s f6134 · l f6140 · e f6145 · e f6151 ·
    p f6156 · space f6162 · 8 f6168 · h f6173.
    - The block cursor jumps ahead with each character.
    - With each character, one key on the visible keyboard row glints cyan for 3 f (code; the keys move left to right).
  - f6145, off frame: swap N12-sitWatch. She leans over to watch the prompt.
  - f6157–f6170: the camera rises to MW and she comes in at the top of the frame, peering down.
  - f6168 (beat 4): swap C1. She looks up at you and nods (6 px down and back over 6 f): go to sleep.
  - f6174: after `8h` the block cursor blinks on the beats, waiting for Enter, until f6269.
- **Camera:**
  - f6134–f6156: TI (573, 656, 1227) → (588, 689, 1163), a slow push toward the prompt (the text grows from 34 to
    36 px).
  - f6157–f6170: pull back and tilt up to MW (480, 95, 1960), easeInOutCubic.
  - f6171–f6178: MW, drifting in at 2 %/s.
- **Grade / R:** R 0. Full dawn.
- **Out:** hard cut on the bar-137 downbeat, f6179, to E1.
- **Art:**
  - N12-sitWatch, C1, SW.
  - MON.
  - DESK-dawn: all layers; the keycaps in `-room` must be separable enough for the per-key glints.
  - Code: the terminal, the cursor.

#### S12-19 · f6179–f6223 · 45 f · 205.97–207.43 s · bar 137.00–138.00
She hops to her feet: the fist-and-palm salute, with a wink.
- **Music:** bar 137: downbeat f6179, riff accent f6185 with a kick on f6186, beat 2 f6190, a kick on f6197, beat 3
  f6201–f6202, beat 4 f6213.
- **Lyric:** none.
- **Picture (back to front):**
  - E1 (1163, 4, 794), s 2.418:
    - the wall defocused 6 px, with the warm sun shaft across it; at the right, past the monitor's corner, the wall
      strip and, from x 1782, the window's left frame and pane;
    - the bezel edge (code) across the frame at y 947, ending at the monitor's corner at x 1598;
    - the top strip of the screen below it (y 1005–1080).
  - Her: standing, 780 px. Feet on the edge at (960, 947), head top at y 166; the crop centre is at her chest.
  - SW, floating upright at her screen-left: centre (571, 531), 780 px.
- **Action:**
  - f6179: cut in on the downbeat with her still seated (C1, head top at y 454). She springs: swap N12-hop on f6181,
    rising from 22 plate px above the edge.
  - f6185 (accent): the apex, her boots 97 plate px above the edge.
    - Over f6179–f6190, SW lifts off the edge and swings upright (8° → 0°), rising to float.
  - f6190 (beat 2): swap C9. She lands on her feet on the edge.
    - Squash 1.10 × 0.90 for 2 f, then rebound 0.97 × 1.04 for 2 f.
    - Then a tightrope wobble: ±2.5° around her feet, decaying over f6194–f6201.
    - A cyan four-point sparkle (code, 40 px) at her winking eye (her RIGHT eye, screen-left), f6190–f6196.
  - f6201, f6213 (beats): small sways of ±1.5°. SW bobs ±6 plate px, one cycle per bar.
- **Camera:** E1 with a 1 % punch on the landing f6190, and a slow push (2.5 %/s) to (1183, 14, 764). The eye line
  is at her chest, never below her.
- **Grade / R:** R 0. Full dawn. The warm rim on her screen-right edge is at 40 %, the cyan underlight at 15 %.
- **Out:** hard cut on the bar-138 downbeat, f6224, to E2.
- **Art:**
  - C1.
  - N12-hop.
  - C9, shown large.
  - SW.
  - Code: the bezel edge.
  - DESK-dawn `-room` and `-window`: defocused.

#### S12-20 · f6224–f6328 · 105 f · 207.47–210.93 s · bar 138.00–140.33
The title on the stabs, the bow on the last hit, the seal on the gong; black.
- **Music:**
  - Bar 138 carries the stabs on 16ths 0·3·6·8: f6224, f6233, f6241 and f6247, with near-silent gaps on f6231–f6232
    and f6239–f6240.
  - The bass drops out on f6254–f6257. The last hit lands on f6258 (beat 4).
  - Bar 139: the single gong on f6269. Its body stays loud to f6281 and the band stops on f6282. The tail rings
    softly (partials 745, 1116 and 1491 Hz) to about f6306, then silence from about f6310 to the end.
- **Lyric:** none. 「千行剑」 and the seal are on-screen titles, not lyrics. Both sit on the lyric layer, after the post
  pass, so the flash, the dip and the fade below do not touch them.
- **Picture (back to front):**
  - E2 (920, 0, 1536), s 1.25, the closing picture:
    - the window on the right (x 1225–1920, its top at y 125, its sill below the frame), the mullion at x 1600:
      - the left pane is open pale sky down to the far roofs, which start at about y 775;
      - in the right pane the far tower (x 1669–1756, top y 750) with the sun just clear above it at (1712, 657),
        rising to (1712, 650) by f6268: a cinnabar disc of 80 px with a paper glow;
      - the moon, almost gone, at (1775, 450);
    - the wall in warm morning light, and the narrow wall strip (x 1130–1225) between the monitor and the window;
    - the monitor's top edge across the frame at y 495, from the left frame edge to its corner at x 1130;
    - the screen below it (x 0–1100, y 525–1080): rows 1–14 at 27 px, dimmer than the wall.
  - Her: C9, 404 px, standing on the edge at (800, 495), head top at y 91.
  - SW, floating upright at her screen-left: centre (599, 280), 404 px.
  - The cursor: the arrow, tip at (975, 562), 90 px, right of her feet.
  - The title column, on the lyric layer, hangs in the window's left pane like a scroll (plate x 1964–2148, over open
    sky):
    - an ink-wash band: a dry brush of ink #0B0B10 at 70 %, 230 px wide, from y 210 to y 740, centred on x 1420;
    - 「千行剑」 set vertically on it in Ma Shan Zheng, as the intro's title is: paper #EDE4D3 with a soft cyan glow and
      no outline (STYLE_BIBLE §7);
    - 150 px characters centred on (1420, 315), (1420, 475) and (1420, 635).
  - The seal 「赛博江湖」: the Seal component (src/Seal.tsx; size 220, id `seal-outro`, default chars), cinnabar,
    centred on (1420, 870), over the far roofs in the same pane.
  - No owner handle anywhere in the picture: the watermark added at delivery carries it, and frame x > 1560, y < 200
    stays clear to the last frame.
- **Action:**
  - f6224 (stab 1): cut in on the downbeat. The ink band paints itself down from y 210 to y 740 over f6224–f6232, one
    dry-brush stroke.
  - f6233 (stab 2): 千 slams in, 140 % → 100 % over 3 f, with a small ink fleck.
  - f6241 (stab 3): 行 slams in.
  - f6247 (stab 4): 剑 slams in.
  - f6248–f6253: she holds the salute with ±1.5° sways; SW bobs.
  - f6254–f6257 (the dropout): every motion eases almost to rest: her sway goes to 0° and the motes slow.
  - f6258 (last hit): swap N12-bow. She bows.
    - A 6 px dip on the swap, settling over 3 f.
    - SW tips forward 25° over 4 f in its own bow.
    - The cursor dips 4 px with them.
  - f6259–f6265: she holds the bow.
  - f6266–f6268: the seal comes down toward the frame, out of focus:
    - f6266: scale 3.2, 30 % opacity, 8 px blur;
    - f6267: scale 2.2, 60 %;
    - f6268: scale 1.5, 90 %.
  - f6269 (the gong): the seal lands at full size (220 px, centre (1420, 870)).
    - The picture, everything but the seal and the title, dips 6 px like the Enter key: +6 on f6269, +4 on f6270, +2
      on f6271, 0 on f6272.
    - A paper-white flash covers the picture: 70 % on f6269, 30 % on f6270, 0 on f6271. The seal stays above it. This
      is large flash 2 of this part.
    - Eight cinnabar ink flecks spray from the seal (code, 10 f).
    - Three thin cinnabar rings (2 px) open from the seal centre at 9, 13.5 and 18 px/f: the gong's partials 745, 1116
      and 1491 Hz, in the ratio 1 : 1.5 : 2. Their opacity follows the gong's loudness: 60 % to f6281, then falling to
      0 by f6305.
  - f6269, on the screen: `sleep 8h` gets its Enter. The prompt moves up one row and the block cursor stops blinking.
  - f6271–f6282: the screen's backlight fades out as the monitor goes to sleep.
    - The text, the cursor and the cyan spill on her and the desk disappear.
    - The power LED in the bottom bezel (off frame below) turns from cyan to a slow-breathing cinnabar standby dot.
  - f6282–f6310: the picture (room, window, sun, her, SW, monitor) fades to black, easeInSine. The title column and
    the seal stay.
  - f6306–f6318: the title column fades out, the ink band with it.
  - f6312–f6327: the seal fades out, last of all.
  - f6328: pure black (#000000). The paper texture and the grain are off on this frame.
- **Camera:**
  - f6224–f6268: E2 (920, 0, 1536) → (950, 10, 1476), easeInOutSine, about 2.7 %/s.
  - 1 % punches on f6233, f6241 and f6247; 1.5 % on f6258.
  - The 6 px key dip on f6269.
  - Then a slow push (1.5 %/s) to (970, 20, 1432) at the end while the frame goes dark. The title column stays over
    the left pane throughout (plate x 1943–2148), and the sun stays in frame.
- **Grade / R:** R 0.
  - Full dawn until the gong, then the flash.
  - From f6271 the cyan leaves the frame as the screen sleeps. The last colours are the paper light, the cinnabar sun
    and the cinnabar seal.
  - Then black.
- **Out:** the end of the film, black on f6328.
- **Art:**
  - C9.
  - **N12-bow (new):** front view, the camera at her chest height.
    - Standing on the same foot line and at the same scale as C9, bowing about 35° from the waist.
    - The wuxia fist-and-palm salute held in front of her chest: her left palm wrapped over her right cybernetic fist,
      the wide sleeve draping below.
    - Her head is lowered toward the viewer, eyes closed, with a gentle smile.
    - The ponytail and both ribbon tails swing forward over her shoulders.
    - No sword. Flat magenta, white die-cut border, no text.
  - SW.
  - MON.
  - DESK-dawn: all layers. The window's left pane (plate x 1900–2200) must be open sky down to about y 620, with the
    far roofs low in it, because the title column hangs over it.
  - PR06-moon.
  - The Seal component.
  - Code: the title, Ma Shan Zheng (FONT.title).

**State out (f6328, the end of the film)**
- **Picture:** pure black (#000000) on f6328. The paper texture, the grain and the lyric layer are all empty.
- **Last image before the fade (f6269–f6281):**
  - she holds N12-bow on the monitor's top edge at about frame (793, 502), 420 px;
  - SW, bowed 25°, floats at her screen-left;
  - the monitor's screen is asleep, with its standby LED cinnabar;
  - the sun is just above the far tower in the window's right pane, at about (1743, 663);
  - the title column 「千行剑」 and the seal 「赛博江湖」 stand at x 1420, over the window's left pane.
- **Camera:** E2, pushing in slowly.
- **R:** 0. **Audio:** silent from about f6310.
- **Flashes:** two large flashes in this part, f5909 and f6269. There are no impact frames in the Outro.

**Art in this part**
- Registry:
  - B9: inside the screen in S12-01 and S12-02, as part of part 11's city comp, standing on PR11-tip (part 11's edit
    of BG-tower).
  - C4, C1, C2, C3, C9.
  - SW: rotated, never mirrored.
- Shared plates, with what this part needs from them:
  - **DESK-dawn**, 2560×1440, in rulings G5's one desk geometry. Generate it as an edit of DESK-night (part 10), so
    that the framing, the room and MON match exactly. It is first person, seated, the eye a little above the monitor's
    top edge, no person in it, in STYLE_BIBLE §5's anchor, and it paints only a cool pre-dawn skylight: no sun, no
    moon, no rain, no screen glow (code adds them). Layers:
    - **`-room`:** the room as DESK-night has it, relit for dawn: the back wall in ink wash with rice-paper texture,
      the window frame, the desk, keyboard, mug and plant; the window panes and the screen area keyed.
      - Keep the wall above the monitor plain: no shelf, poster or object in x 480–1880, y 40–396. That is her seat
        zone and where she pops up.
      - The window, right of the monitor, at x 1900–2520, y 100–940, one vertical mullion at x 2200, a sill at y 940.
      - The desk surface from y 1150 down: the keyboard at x 880–1520, y 1210–1360 (blank keycaps, the keys clearly
        separated for the per-key glints and the backlight), a ceramic mug at (1720, 1250), a small plant (a bonsai
        pine) at (420, 1230).
    - **`-window`, the view through the window with its sky:** an ink-wash city at first light, low in the window:
      residential blocks, one old pagoda roof, mist in the streets, roofs at about y 620–720.
      - The far tower stands in the right pane at x 2255–2325 with its top at y 600, a clean silhouette (code mattes
        the skyline to put the sun behind it). It is a plain tower of the real city, not BG-tower.
      - The left pane is open sky down to about y 620 (the title column hangs over it in S12-20).
      - The sky is painted pale and even, so code can grade it from pre-dawn to full dawn.
  - **MON:** the monitor alone (G5).
    - Matte ink-black bezel 24 px all round, a low foot to the desk. No logo, no text.
    - The top edge is one straight, level line at y 396, seen almost edge-on (a 4 px lip of its top face).
    - Outer edge x 536–1824, y 396–1142; the screen keyed at x 560–1800, y 420–1118.
    - The LED position at (1180, 1130) in the bottom bezel is left unlit; code lights it.
    - At s > 2, code redraws the bezel's top edge.
  - **PR06-moon** (part 06): the Bridge's moon, pale in the dawn window at (2340, 360), 70 px.
- New (one 2×3 sheet in the C-sheet style, on flat magenta, white die-cut border, no text; all front view, no sword):
  - **N12-peekDown:** C4's crop and hands, the head tipped forward looking down (S12-04).
  - **N12-hop:** airborne, knees tucked, arms out, eye level (S12-05, S12-19).
  - **N12-sitWatch:** C1's seat, leaning forward and looking down between her boots (S12-07, S12-09, S12-12, S12-18;
    shown large).
  - **N12-pat:** C1's seat, the sleeve hand patting down at her right side (S12-15).
  - **N12-yawn:** C1's seat, the sleeve over a big yawn (S12-16; shown large).
  - **N12-bow:** C9's feet and scale, a 35° bow holding the salute (S12-20).
- Upstream: part 11's final city comp (cyan city, B9 on the BG-tower tip, the rising motes) has to keep rendering as
  screen content for f5549–f5615, and its diff rows (`@@ -4 +4 @@ 千行剑 千行剑` and `4 + 此去赛博再无缺`) stay on the
  lyric layer to f5564.
- Code only:
  - the pull-back composite, the glass sheen and ripple, and the light droplets;
  - the ink bleed, the terminal and its script, the spinner, the status clock, the PASS flares and the combo glints;
  - the cursor (part 08's three states);
  - the sky grade, the sun, the moon's fade, the sun shaft, screen spill, two-light rim, wall shadows, dust motes, mug
    steam and keyboard backlight;
  - the dust puffs, sparkles, the tear and the bonk ticks;
  - the title column and its ink band, the seal's approach, flecks and rings, the key dip, the flash, the monitor's
    sleep and the fade.
