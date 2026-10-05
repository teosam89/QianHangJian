# 千行剑 — storyboard (draft 1, for the owner's review)

Shot by shot, frame by frame, at 30 fps (1920×1080). Song: `music_164638153048065_5xodPGUjhEZAjhMx8uAuYN_jzalsv.mp3`,
210.95 s, 160 BPM, 6329 frames (f0–f6328). Times are song seconds; frames are `round(t × 30)`. The frame grid, every
bar, beat, hit and sung character in frames, is `song/frames.md`. Decisions: `PROGRESS.md` (grilling rounds 1–3).
Fight grammar, moves and the boss: `notes/fight-design.md`. Line-by-line acting and the sticker list:
`notes/acting-design.md`. Look, palette, character and fonts: `STYLE_BIBLE.md`.

The owner asked for the storyboard to be written out in full and frame-accurate, because the song hits hard on the
beat, and accepted that this means a lot of art (「出图要十分的多 我不介意」).

## Idea

A chibi sword spirit, 千行, cuts her way through a cyber-jianghu city flooded with red error text. The city is a
codebase under attack: the hacker tide and the red-text calamity (红字劫) are real error messages and attack payloads;
every slash turns red text into black ink and pushes the city's red back. The props are real programmer artifacts in a
wuxia skin: her crossguard is the Enter key, the firewall is the city wall, the test runner is a row of lanterns, the
kernel is a forge. In Verse 2 she is mocked as an old, deprecated sword, rewrites her own kernel overnight and comes
back reforged. Drop 2 is the boss, a dragon whose body is a runaway stack trace. In the Bridge the world drains to ink
and we cut, once, to reality: your desk at night, where the whole city is on your monitor and she presses her palms to
the glass. An error beep stops everything; the screen falls to terminal text; 「……系统重启。」; she decodes back into
colour, and in the final chorus the city turns from red to cyan, the old last line is deleted like a git diff and
replaced: 「此去赛博再无缺」. At dawn she climbs out of the monitor and sits on its edge as your desktop pet, waves, salutes;
the gong stamps the seal 「赛博江湖」.

## The world (recurring elements, named as in code)

- **江湖城 (the city):** painted plates in ink wash on rice paper with an anime background finish (STYLE_BIBLE §5):
  pagodas, archways, upturned eaves fused with cyber megastructures, holographic lanterns, blank glowing signboards.
  Plates are painted neutral; code applies the red state.
- **R, the red level (0–1, the only story curve, never shown as a number):** code fills the blank signboards with red
  error text (denser as R rises) or cyan text, grades sky and rain toward cinnabar in proportion to R, and each slash
  leaves a clean cut where the red grade is removed; each death leaves an ink stain.
  Values: f0 black · reveal 0.465 s R 1.00 · Verse 1 holds 1.00, 黑客如潮 spikes the tide, 斩尽万般 drops to 0.90 ·
  Pre-Chorus 1 frozen, desaturated · Chorus 1 0.90 → 0.80 on 劈 · Drop 1 bar 40 0.78 → bar 43 0.74 → bar 47 0.68 →
  bar 51 0.62 → bar 55 0.55 · Verse 2 0.55, creeping to 0.62 while she is mocked, 重构乾坤 → 0.50, 测试全绿 → 0.45 ·
  Pre-Chorus 2 frozen · Chorus 2 0.45 → 0.35 on 劈 · Hook 2: the city's red flows into the beast, city 0.35 → 0.15 ·
  Drop 2 city swells back to 0.30 at bar 94 → 0.25 bar 96 → 0.10 bar 102 · Bridge: monochrome ink, R not shown ·
  Stop: dead, terminal · Final Chorus starts 0.30 after the reboot, falls line by line, 0 on 赛 (f5516) · Outro 0.
- **The hacker tide:** typography drawn in code (notes/fight-design.md §3.1): red attack payloads, stack traces and
  error lines, as swarms, waves and walls. **红字劫, the Overflow Dragon:** a Chinese dragon whose body is a runaway stack
  trace; its head comes from one generated monochrome ink painting (BOSS-1…4), code builds the rest (§7).
- **Death is ink:** cut text splits along a white hairline, the pieces turn black, fall, splash and stain. No blood.
- **The Enter key ⏎:** her crossguard; the giant keycap in Verse 1; the move 回车三连 (the Enter combo, 16ths 0·3·6·8)
  at 10.965, 70.965, 82.965 and 153.465, growing each time; the frame dips 6 px like a pressed key.
- **The sword formation:** instanced sword sprites (from SW), used in every chorus (WebGL station journey) and in
  sword rain.
- **The cursor (you):** a white mouse cursor drawn in code; before the Bridge it is the only sign of the viewer.
- **The desk (reality):** first person at your desk; no person ever appears. Shared plates DESK-night (Bridge) and
  DESK-dawn (Outro), with the monitor bezel MON as its own layer so the city plays inside the screen.
- **Monocle HUD:** cyan reticles and lines from her monocle, no numbers.
- **The floating sword:** when she is not holding it, the sword (SW) floats beside her and bobs (2 % of its height,
  one cycle per bar).

## Rules

- **Format:** 1920×1080 master; everything essential (her face, the lyric, the key action) inside the central 4:3,
  x 240–1680. Keep the top-right corner (x > 1560, y < 200) clear for the watermark added at delivery.
- **Open on the strongest moment;** no slow build-up.
- **Every shot moves:** at least a 1.5 %/s push, drift or track on every hold, and every layer has an entrance, an
  idle and a reaction on the beat. Freeze frames are only the deliberate hit-stops and the dead stop at 168.02.
- **Transitions are the film's own:** the slash-line wipe (斩线, the frame splits along a cut and the halves slide),
  the ink bleed (墨晕), the Enter press (frame dips, ripple), the whip pan with a brush blur, hard cuts on hits. Never
  glitch blocks, RGB split or rotation wipes; red glitch texture belongs to the enemy only.
- **Flashes:** large flashes and impact frames at most 3 per second; the impact-frame list is in notes/fight-design.md
  §2.2 (twelve in the film). White flashes count.
- **Chibi only;** never mirror her (she is asymmetric: monocle on HER LEFT eye, cybernetic HER RIGHT arm with a bare
  shoulder, a wide sleeve on HER LEFT arm only). A pose needed in both screen directions is two drawings.
- **Camera at her chest height;** never looking up the skirt (STYLE_BIBLE rule 11). Drama comes from scale and lenses,
  not low angles.
- **No text in any generated image.** Every word, error message, code line, HUD mark and the seal are drawn in code.
- **Code draws** every slash arc, smear, afterimage, spark, speed line, ink burst, shockwave, glow, rain, the cursor,
  blush lines, sweat, anger marks, HUD, the tide, the dragon's body, the formation, the rust in Verse 2, the ink grade
  of the Bridge, the ASCII render, the seal. Code never draws her.
- **Hit-stop** is a time remap of everything except the music (notes/fight-design.md §2.2); rain hangs still in it.

## Lyrics (their own layer, composited after the post pass)

Every sung character appears **on its sung frame** (song/frames.md), never spread evenly. Each line sits on a plate
and never covers her face. 60 px safe margin; inside the central 4:3 for the key words. A line stays at least 0.8 s
after its last character (or until the next line takes its place); the previous line may shrink and lift above the
new one.

| Part | Font (STYLE_BIBLE §7) | Plate | Entry per character |
|---|---|---|---|
| Verses | 得意黑 Smiley Sans Oblique, paper #EDE4D3, 72–110 px | an ink-brush stroke (dry-brush black #0B0B10 at 85 %) that paints itself in from the left over 4 f, starting 2 f before the line's first character | slam: 3 f from 140 % to 100 % with a small ink fleck; enemy words may turn cinnabar, sword and fix words cyan |
| Pre-choruses | 得意黑, smaller, centred | a thin ink wash band | fade in over 4 f with the frozen rain; no slam |
| Choruses | 志莽行书 Zhi Mang Xing, 160–260 px, kinetic | a wet ink stroke behind each phrase | slam per character on its frame (2 f overshoot), with a beat-synced glow (cyan; cinnabar for 红字劫) |
| Spoken lines | 站酷快乐体 ZCOOL KuaiLe | the speech bubble is the plate (paper white, ink outline, tail to her) | pops per character |
| Bridge | 霞鹜文楷 LXGW WenKai, paper colour | a soft ink-wash cloud | fade in over 6 f per character |
| Code, errors, terminal (picture, not lyrics) | JetBrains Mono (PASS / FAIL, `->`); reboot and Verse 2 retro: Fusion Pixel | — | typed |

The final chorus's last line is rewritten git-diff style: the old line 「一剑劈开数据界」 hangs as a red `-` line and is
cleaved away; 「此去赛博再无缺」 lands as the `+` line (on-screen text follows `song.md` exactly).

## Art: ids and the drawing registry

The owner accepts many images. A shot may have its own background plate whenever that makes the beat stronger, and a
new chibi drawing whenever the registry has no good pose for a beat. Every art id used in a shot is either in the
registry below or defined at its first use in the shot's **Art** line (subject, framing, facing, size, layers).

**Chibi drawings** (cut-outs on flat magenta; full body unless stated; descriptions in the two notes files):
- Reference sheet R0: bodies R0-front, R0-3qL (toward screen-left), R0-3qR (toward screen-right), R0-back; heads
  R0-smug, R0-fluster, R0-gentle.
- Acting (notes/acting-design.md §2): A1 smug · A2 tsundere · A3 fluster · A4 akanbe · A5 victory · A6 heartbeat ·
  A7 palm · A8 sleeves · A9 scan · B1 lookback · B2 flourish · B3 engrave · B4 stomp · B5 vow · B6 vowOpen · B7 ride ·
  B8 command · B9 skyward · C1 sit · C2 waveA · C3 waveB · C4 peek · C5 glass · C6 sitBack · C7 snow · C8 mine ·
  C9 farewell · SW the sword alone (was D4).
- Fights (notes/fight-design.md §10.2): F-low · F-dash · F-leap · F-issen · F-cut_down · F-cut_up · F-charge · F-chop ·
  F-enter · F-sword_finger · F-landing · F-thrust · F-back · F-guard · F-blasted · F-spin · F-dash_l · F-cut_down_l ·
  F-face.
- Merged duplicates: the acting design's D1 cleaveUp is F-leap (airborne wind-up) or F-charge (standing raise); D2
  cleaveDown is F-chop; D3 ready is F-low; the fight design's `smug` is A1 and its `tsundere` is A2.
- New drawings: `N<part>-<name>` (e.g. N05-wallrun_R), defined at first use with a prompt-ready pose description,
  facing and sword hand.

**Other art:**
- Backgrounds `BG<part>-<name>` (e.g. BG02-lanternstreet): ink-wash city plates per STYLE_BIBLE §5, no characters,
  blank signboards. Give shot size, camera height and direction, which third stays empty for the lyric, the size
  (2048×1152, or 2560×1440 when the camera pushes far), and the layers when parallax needs them (`-far`, `-mid`,
  `-near`).
- Props and inserts `PR<part>-<name>`: objects without the character (the giant Enter keycap, the CRT, the chip die,
  the forge…), on magenta when they are cut out.
- Shared, defined here: **BG-city-wide** — the red city at night from a high ridge, 2560×1440 in three layers (far
  skyline of pagoda-towers and megastructures, mid roofs, near ridge tiles where she stands); **BG-ridge** — the near
  ridge alone as a strip she sits or stands on; **DESK-night** — first person at your desk at night: monitor centre,
  keyboard and a mug below, a window on the right with rain on the glass and the moon, the only light the screen;
  **DESK-dawn** — the same framing at dawn; **MON** — the monitor bezel alone, its screen area keyed out;
  **BOSS-1…4** — the dragon ink studies (notes/fight-design.md §10.4).

## Parts and hand-offs

Each part covers its frames with no gap and no overlap. The incoming part owns the transition at its first frame.

| Part | Frames | Song | Covers |
|---|---|---|---|
| 01 | f0–f360 | 0.00–12.03 | Intro: the opening slash, the reveal, the title, the HUD scan, the ridge |
| 02 | f361–f1076 | 12.04–35.89 | Verse 1, eight lines |
| 03 | f1077–f1633 | 35.90–54.46 | Pre-Chorus 1 and Chorus 1 (first WebGL station journey, 劈) |
| 04 | f1634–f1813 | 54.47–60.46 | Hook 1 and 「哼，就这点报错？」 |
| 05 | f1814–f2520 | 60.47–84.03 | Drop 1: the hacker tide |
| 06 | f2521–f3146 | 84.04–104.89 | Verse 2 (deprecated, rewrite, reforged; double-time from 96.47) |
| 07 | f3147–f3703 | 104.90–123.46 | Pre-Chorus 2 and Chorus 2 |
| 08 | f3704–f3928 | 123.47–130.96 | Hook 2, the cursor's head pat, 「才、才不是为了你才修的！」 |
| 09 | f3929–f4635 | 130.97–154.53 | Drop 2: the Overflow Dragon |
| 10 | f4636–f5170 | 154.54–172.35 | Bridge (ink, the real desk), the error beep, the reboot |
| 11 | f5171–f5548 | 172.36–184.96 | Final Chorus and the git-diff payoff on 赛 |
| 12 | f5549–f6328 | 184.97–210.95 | Outro: the desktop pet, the wave, the salute, the seal |

States at each hand-off (both neighbours honour these):
- **f361 (01→02):** she sits on BG-ridge with her back to us (C6), SW floating beside her, the red city below (R 1.00),
  rain starting; the camera is slowly pushing in from behind her.
- **f1077 (02→03):** street level beside the giant Enter keycap she has just stomped; the cyan sweep has cut the
  street's red text in half (R 0.90); she lands in B4 → settles. Part 03 opens on B5 vow, eyes closed.
- **f1634 (03→04):** the data world has just been cleaved in two on 劈 (F-chop, f1600, impact frame); R 0.80; the two
  halves start drifting apart.
- **f1814 (04→05):** she has flicked the last glyph off her blade (A1) and swapped to F-low facing screen-right at
  60.18 (f1805); a wall-high wave of red text looms on the right; the drop downbeat f1814 is the tide split (F-cut_up).
- **f2521 (05→06):** the third Enter combo has sealed the breach (impact f2511, 83.715); she holds F-enter under falling
  ink, R 0.55, snare at 84.09 (f2523). Part 06 opens Verse 2 inside an old CRT, faded VHS grade.
- **f3147 (06→07):** she holds A5 victory as the test-runner lanterns glow PASS cyan and the neon blooms (R 0.45).
  Part 07 opens on B5 vow with the reforged, brighter sword; the camera orbits.
- **f3704 (07→08):** 劈 in Chorus 2 at 122.33 (f3670, F-chop, impact frame); R 0.35; part 08 opens with her pleased
  (A5) over the half-cyan city.
- **f3929 (08→09):** she has shoved the cursor off screen (A3) at 130.14–130.96; the beast's first blast hits on the
  drop downbeat f3929 (F-guard).
- **f4636 (09→10):** the fourth Enter combo has killed the dragon (impact 154.215, f4626); ink rains; she holds F-enter.
  Part 10 opens on A6 heartbeat with SW upright before her; the image goes monochrome on the hit at 154.95 (f4648).
- **f5171 (10→11):** she has decoded from ASCII into colour at 171.48 (f5144, B6) and hops onto her flying sword on the
  pickup 千行剑 at 172.36 (f5171, B7); R 0.30.
- **f5549 (11→12):** B9 skyward at 184.32, the whole city cyan, the brightest frame of the film (R 0); part 12 pulls
  back to reveal the monitor at dawn.

## The parts

| Part | File | Frames | Shots |
|---|---|---|---|
| 01 Intro | [storyboard/01-intro.md](storyboard/01-intro.md) | f0–f360 | 16 |
| 02 Verse 1 | [storyboard/02-verse-1.md](storyboard/02-verse-1.md) | f361–f1076 | 41 |
| 03 Pre-Chorus 1 and Chorus 1 | [storyboard/03-chorus-1.md](storyboard/03-chorus-1.md) | f1077–f1633 | 15 |
| 04 Hook 1 and 「哼，就这点报错？」 | [storyboard/04-hook-1.md](storyboard/04-hook-1.md) | f1634–f1813 | 11 |
| 05 Drop 1 | [storyboard/05-drop-1.md](storyboard/05-drop-1.md) | f1814–f2520 | 35 |
| 06 Verse 2 | [storyboard/06-verse-2.md](storyboard/06-verse-2.md) | f2521–f3146 | 34 |
| 07 Pre-Chorus 2 and Chorus 2 | [storyboard/07-chorus-2.md](storyboard/07-chorus-2.md) | f3147–f3703 | 16 |
| 08 Hook 2 and 「才、才不是为了你才修的！」 | [storyboard/08-hook-2.md](storyboard/08-hook-2.md) | f3704–f3928 | 11 |
| 09 Drop 2 | [storyboard/09-drop-2.md](storyboard/09-drop-2.md) | f3929–f4635 | 40 |
| 10 Bridge, Stop and reboot | [storyboard/10-bridge-reboot.md](storyboard/10-bridge-reboot.md) | f4636–f5170 | 11 |
| 11 Final Chorus | [storyboard/11-final-chorus.md](storyboard/11-final-chorus.md) | f5171–f5548 | 11 |
| 12 Outro | [storyboard/12-outro.md](storyboard/12-outro.md) | f5549–f6328 | 20 |
| **Total** | | f0–f6328 | **261** |

## Decisions made while integrating

The twelve parts were written in parallel against this contract, then reconciled. These rulings (G1–G7, cited in the
parts) bind every part:

- **G1 · Enemy text.** Red enemy text is only real error messages, stack-trace rows, plain HTTP request lines and status
  codes (`Uncaught TypeError: Cannot read properties of undefined`, `at recurse (jianghu.js:42:7)`,
  `GET /admin HTTP/1.1`, `429 Too Many Requests`…). No attack payloads anywhere. Firewall rules stay rules
  (`ALLOW 443/tcp`, `DENY 0.0.0.0/0`, `DROP INVALID`). A process kill is fine: the hackers' `kill -9 qianhang`
  (part 01) rhymes with her `$ kill -9 %red_tide` (part 03).
- **G2 · One central tower, BG-tower** (defined in part 08, S08-01): a 13-storey pagoda fused with a megastructure spire,
  upturned eaves, a ring of blank panels at its waist, a needle antenna; an isolated 1440×2560 cut-out on magenta,
  about 118 m to the antenna tip. Every plate that shows it is generated with it attached.
- **G3 · One of each prop:** PR02-enterkey (the giant Enter keycap), PR02-lantern, PR02-chipdie, PR06-moon (the film's one
  moon, always composited by code, never painted into a plate), BG02-wallinside (the firewall from inside, with an
  `-elevation` layer), the cursor of S08-05.
- **G4 · The choruses escalate:** Chorus 1 = 1,000 plain swords, 3,000 snowflakes, a 40 m giant sword
  (`$ kill -9 %red_tide`); Chorus 2 = 3,000 swords each trailing a line of real code, 9,000 snowflakes, 120 m
  (`$ whoami` → `root`); Final = 10,000 (Chorus 2's stitches plus every sword planted on the ridges), 27,000
  snowflakes, 300 m (`while (bug) slash();`). Choruses 1 and 2 carry a dim JetBrains Mono line-number gutter, so the
  final `@@ -4 +4 @@` diff pays off.
- **G5 · One desk:** DESK-night and DESK-dawn share one 2560×1440 geometry (screen x 560–1800, y 420–1118; top edge
  y 396; a plain wall above; a window at x 1900–2520 with a mullion at x 2200 and a far tower in the right pane;
  keyboard, mug, plant), defined in full in part 10's Art section; DESK-dawn is an edit of DESK-night.
- **G6 · Seams:** every hand-off was re-checked from both sides; the earlier part's end state won unless a ruling said
  otherwise.
- **G7 · Shown large:** a drawing used above 900 px on screen is marked "shown large" in its Art line, so it
  is generated and upscaled for that size. New drawings keep their ids; the art list merges near-duplicates.

## Known issues for the build

1. **Music data.** The parts' Music lines come from onsets measured on the full mix (no stem split). Re-check them on
   a stem split before building; most should move by a frame at most.
2. **WebGL scale.** Her sticker plane is 1 m tall in parts 03 and 11 and 1.5 m in part 07. Each chorus is its own
   canvas, so this only matters if the build shares one scene; normalise it then.
3. **The chorus line-number gutter** sits at the head of the right-hand column in Chorus 1 (x 1500, y 170–198) and
   left of each line in Chorus 2 (x 223–240). Pick one placement when building; parts 04 and 08 carry the numbers
   through their seams as written.
4. **The art list is long:** about 90 chibi drawings (the registry, the fight drawings and 43 new ones), about 50
   backgrounds, about 30 props and two sheets of dragon ink studies. Some new drawings are near-duplicates of registry
   drawings; the art list merges them before anything is generated.
5. **Fonts.** The npm JetBrains Mono has no █ or box drawing, and Fusion Pixel's block glyphs are full-width, so ANSI
   banners are drawn as code rectangles.
6. **Deliberate freeze.** f5044–f5098 is the error-beep dead stop; QA should not flag it as a frozen frame.

## Shot format

Shots are numbered `S<part>-<nn>`. Every shot block:

```text
#### S02-03 · f0450–f0508 · 59 f · 15.00–16.93 s · bar 10.0–11.3
- **Music:** what the shot rides (beats, snares, fills, the hit it lands on, the held note).
- **Lyric:** 「全息灯下 剑影翩翩」 全f450 息f455 … — font, plate, position (x, y, size), entry, exit frame, colour accents.
- **Picture:** the layers back to front: background, mid, enemies, her (drawing id, size in px, position), props, FX.
- **Action:** a frame list, e.g. f450 cut in on the snare; f455–f460 the lantern windows flicker; f468 swap B2,
  hop 18 px; f478 afterimage peels off (code, 6 f); …
- **Camera:** move, start and end framing, easing, punches and shakes with their frames.
- **Grade / R:** red level and any grade change.
- **Out:** how it leaves (cut, slash wipe, ink bleed…) and on which frame.
- **Art:** ids used; new ids defined here.
```

Each part ends with **State out** (where she is, R, what is on screen, camera) and **Art in this part** (every id used,
new ones marked new).
