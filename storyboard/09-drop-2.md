## Part 09 · Drop 2 · f3929–f4635

The boss fight against 红字劫, a Chinese dragon whose body is a runaway stack trace coiled round the city's central
tower (BG-tower). The roar hits her guard on the drop downbeat and tears part 08's 「才、才不是为了你才修的！」 bubbles
away into ink; the whole beast is revealed; she cuts off a claw that retypes itself (her HUD finds the cause, the
whisker `process.on('uncaughtException', recurse);`), climbs the coils, is bitten at, flung and blasted in the one bar
without 808 (slow motion, the city's red swells back to 0.30). She lands, smirks, calls every sword in the city up,
pins the body, cuts the regrowth handler, bursts through the clouds, meets the head point-first, uppercuts it and, on
the bar-102 stab figure, cuts it three times and presses Enter in its crown: impact frame f4626, the stack starts to
unwind from the head, ink rains. 40 shots; 43 drawing swaps (1.8 per second, peak 5.3 in bar 92); four impact frames
(f3929, f4244, f4480, f4626); no warps between drawings, every in-between is a smear.

### Conventions for this part

- **Coordinates:** 1920×1080 frame, x from the left, y from the top. "feet (x, y)" is the drawing's measured feet
  point; airborne drawings give "centre (x, y)"; "h" is her figure height in px (sword not counted).
- **Hit-stop:** a hit on frame H with stop N holds the world (dragon, particles, rain, camera drift, her drift) on
  H+1…H+N and resumes on H+N+1; the music never stops. An impact frame is H and H+1 (three tones: ink #0B0B10, paper
  #EDE4D3, cinnabar #E8381F; her silhouette inverted to paper; radial dry-brush lines). Every stop below ends before the
  next beat event it precedes (checked in the self-check at the end).
- **Smears:** each swap inside a shot has a 1-frame code smear on H−1 (her alpha swept along the path in flat cyan
  #19F0C8 at 70 %, plus a ×1.3/×0.9 stretched copy of the finish drawing at the midpoint, plus 2–4 cyan multiples
  fading over 4 f). Swaps across a cut need none.
- **Rims on her (all shots unless stated):** cinnabar from the dragon's side, a 6 px offset drop-shadow at 70 %; cyan
  from the blade's side, 4 px at 50 %. Breathing ±1.2 % per bar on every hold.
- **Rain:** the world's rain, falling 10° from the right, grey with a cinnabar cast ∝ R; it hangs on every hit-stop and
  crawls at ×0.2 in the bar-94 slow motion.
- **Watermark corner** (x > 1560, y < 200): whatever dragon glyphs pass through it are dimmed to 30 %; nothing
  essential is placed there.
- **Lyric layer:** no new line in this part (instrumental Drop 2). Carried over: part 08's three speech bubbles
  「才、」「才不是为了你」「才修的！」 hold at part 08's positions (x 272–1016, y 62–544) through the blast, rattle with the
  shake and are torn away into ink f3936–f3946 (S09-01). After f3946 the layer is empty until part 10's
  「剑非剑 码非码」 starts at 剑 f4637.
- **Board text (code, G1):** red boards carry only real error lines and status codes (`TypeError: Cannot read
  properties of undefined`, `502 Bad Gateway`, `ECONNREFUSED`, `Segmentation fault (core dumped)`, as in part 08);
  cyan boards `PASS`, `200 OK`. No attack payloads anywhere in this part.
- **Big flashes:** only the four impact frames. Every other light event (eye flares, glyph white-outs on cut halves,
  sparks, the blade gleam, the ring of light) is local, ≤ 15 % of the frame area, and not counted.

### 红字劫 in this part (one spec for every shot)

**Text.** JetBrains Mono, cinnabar #E8381F. In the head cells, dark ink becomes a large bold bright glyph, pale wash a
small dim one, paper stays empty. The stack trace reads from head to tail exactly like a real Node.js overflow (G1:
the beast is only this error, its stack rows and, on the whiskers, the two lines of code that cause it; no attack
payloads):

```text
jianghu.js:42                                     <- the upper jaw rim
      recurse(city, depth + 1);                   <- the upper jaw rim
      ^                                           <- every fang is this caret (upper fangs: the glyph rotated 180°)

RangeError: Maximum call stack size exceeded      <- the head field, in reading order, repeated; also the roar
    at recurse (jianghu.js:42:7)                  <- one body row per stack frame, ×N
    at recurse (jianghu.js:42:7)
    ...
    at recurse (jianghu.js:42:7)
    at jianghu.js:9:28                            <- the last four rows taper into the tail
    at Array.forEach (<anonymous>)
    at boot (jianghu.js:9:11)
    at main (jianghu.js:1:1)                      <- the tail tip
```

- **Body:** a spline ribbon coiled round the tower (back halves behind the tower plate, front halves in front). Four
  rows of `at recurse (jianghu.js:42:7)` run along it: the top (spine) row dim, the two belly rows bright, the bottom
  row dissolving into ink smoke. A spine ridge of short vertical glyph columns `4` `2` `:` `7`, one every 0.2 of her
  height, leaning back 20°. Rows flow from head to tail at all times (new frames are pushed at the head), so the body
  is an escalator running downhill under her feet.
- **Growth:** new rows type in at the neck, 3 f per row, with a block cursor `█` racing ahead of the typing. A surge of
  16 rows on each phrase downbeat (f3929, f4109, f4289, f4469). Coils: 3 in phrase 1 (head at storey 10, under the
  cloud ceiling), 4 in phrase 2, 5 in phrase 3 (the neck goes up through the cloud ceiling), and in phrase 4 the head
  and an arched neck stand above the cloud sea.
- **Whiskers:** two long text lines on wavy paths, replacing the painted whiskers (masked out at build time; their root
  points are measured once per cell). Upper: `Error.stackTraceLimit = Infinity;` (why the trace never ends). Lower:
  `process.on('uncaughtException', recurse);` (why it regrows: every cut throws, the handler calls `recurse` again).
  On every regrowth step a band of light runs along the lower whisker toward the wound. Both are cut in bar 97; after
  that nothing on the beast regrows (the cursor `█` appears on a wound, blinks and dies).
- **Eyes:** two white-hot points (core 30–40 px) with a cinnabar bloom. The tell, a 2-frame flare before each attack:
  f4017–18 (claw), f4197–98 (bite), f4236–37 (rear and roar), f4467–68 (charge), f4512–13 (lunge), f4610–11 (snap).
- **Pinned rows:** ink-black #0B0B10 with a 1 px paper edge, text frozen, a cyan sword hilt standing out of the body.
- **Death:** a cut is a 1–2 px white hairline; the halves slide 30–60 px apart over 4 f, go white for 1 f (local), turn
  ink-black and burst; each glyph throws 3–8 ink blots that fall, splash and stain (fading over 2–4 s).
- **Glitch (enemy only, never a transition):** rows offset ±12–16 px for 2 f and one row tripled for 1 f, on f4008,
  f4034, f4337, f4348, f4505, f4526 and f4615.
- **Cells:** BOSS-1 closed profile, BOSS-2 roaring profile, BOSS-3 head-on, BOSS-4 claw (registry); new BOSS-5 thrown
  back, BOSS-6 roaring up seen from above, BOSS-7 the eye, BOSS-8 stunned and hanging (defined in S09-05, S09-32,
  S09-36, S09-38). All face the left edge as painted. Mirrored in code only in S09-03 and S09-38…40, with the text laid
  in after the flip.

### Where things are

The central tower is the shared **BG-tower** (part 08's definition: a thirteen-storey pagoda fused with a megastructure
spire, upturned eaves on every storey, a ring of blank glowing panels round its waist, a needle antenna on top;
generated as an isolated 1440×2560 cut-out on magenta). It stands at the city's heart: a low red-lit cloud ceiling at
storey 12, its crown roof (the top storey's roof) and the top of its spire with the needle antenna above the cloud sea
("the spire" below). Its waist ring of blank panels (storey 7) is a signboard: code fills it at R like every board.
Across the cut from part 08, where the whole tower stood clear and the head rose over its top, the head comes down the
tower to blast her (S09-01) and the roar's smoke rolls up into the cloud ceiling (code ink-cloud layer, from S09-03),
hiding the crown until bar 98.

Bars 87–90: the rooftops round its base, tower and dragon on screen-right. Bars 91–93: up the coils on its flank
(storeys 2–10). Bar 94: she falls from storey 10 to the broad storey-5 eave (the lower roof). Bars 95–96: on the lower
roof. Bar 97: up the pinned coils to storey 12. Bar 98: up the free neck through the cloud ceiling. Bars 99–102: above
the clouds, the tower's spire behind her on screen-left, the head on screen-right. The threat stays on screen-right
throughout. She faces left only in the bar-92 zigzag (F-dash_l and F-cut_down_l, twice each) and in the two close-ups
F-face and N09-wipe (three-quarter left, looking into the panel with the beast).

### Choreography table (all frames)

| f | s | Music | 千行 · drawing · feet/centre · h | Hit · stop · impact | Dragon and FX | Camera | Shot |
|---|---|---|---|---|---|---|---|
| 3929 | 130.965 | Drop 2 downbeat, kick | F-guard · feet 560,920 · 320 | blocks the roar · stop 6 (3930–3935) · **IMPACT 3929–3930** | roar cone, shock ring 1, growth surge (3 coils); part 08's three bubbles hold | shake L (runs from 3936) | 01 |
| 3936 | — | — | skid starts | world resumes | stream parts round her guard; bubbles rattle, torn into ink to 3946 | — | 01 |
| 3940 | 131.34 | kick | shoved | ring 2 hits · stop 2 (3941–3942) | shock ring 2 | shake L (from 3943) | 01 |
| 3951 | 131.715 | beat 3 | N09-guard_front · feet 960,1010 · 470 | — | stream from behind the lens | cut, reverse | 02 |
| 3963 | 132.09 | snare | stops, squash 10 % | — | ink dust puff; roar ends 3968 | punch S, shake S | 02 |
| 3974 | 132.465 | kick | F-back · feet 330,990 · 130 | — | coils tighten; windows red 3974–76 | crane up 80 px | 03 |
| 3985 | 132.84 | kick | — | — | tighten; windows red 3985–87 | — | 03 |
| 3996 | 133.215 | kick | — | — | tighten; windows red 3996–98; head lifts | — | 03 |
| 4008 | 133.59 | beat 4 | — | — | head swings round to face her (glitch) | whip 4008–4010 | 04 |
| 4013 | 133.77 | — | — | — | the eye (BOSS-7); flare 4017–4018 | push | 05 |
| 4019 | 133.965 | bar 89 | F-low · feet 600,930 · 340 | — | claw (BOSS-4) launches | — | 06 |
| 4030 | 134.34 | beat 2 | F-cut_up · feet 670,900 · 340 | talons cut · stop 3 (4031–4033) | hairline through 4 talons; glitch 4034 | punch M | 06 |
| 4041 | 134.715 | beat 3 | — | — | talons burst into ink | shake S | 06 |
| 4053 | 135.09 | beat 4 | F-low (hop back) · feet 610,930 · 340 | — | cursor █ on the stump 4060 | — | 06 |
| 4064 | 135.465 | bar 90 | — | — | regrowth row group 1; whisker pulse | push | 07 |
| 4070 | 135.65 | 8th | — | — | regrowth group 2; pulse | — | 07 |
| 4075 | 135.84 | beat 2 | F-face (panel) · face 720 | — | group 3; HUD bracket 1 (4075), 2 (4078), 3 on `recurse` (4081) | panel slam, punch S | 08 |
| 4086 | 136.215 | fill begins | (F-face held) | — | tail tip streaks across the left panel | panels shudder | 08 |
| 4089 | 136.31 | fill 16th | F-leap · centre 800,560 · 300 | — | tail passes under her 4089–4097 | cut on the leap | 09 |
| 4098 | 136.59 | fill | — | — | — | whip right 4098–4101 | 09 |
| 4106 | 136.87 | last fill 16th | lands on the body | — | cyan ring | — | 09 |
| 4109 | 136.965 | bar 91 | F-dash · feet 700,760 · 300 (−8°) | — | growth surge (4 coils); steps 4109/4115/4120/4126 | track | 10 |
| 4131 | 137.715 | riff | N09-climb · feet 820,720 · 340 | — | steps 4131/4137/4143/4148; coil above drops 4143 | track | 11 |
| 4154 | 138.465 | bar 92 | F-dash (airborne) · feet 420,820 · 280 | — | — | cut, left framing | 12 |
| 4160 | 138.653 | 8th | F-cut_down · feet 760,700 · 280 | fin cut · stop 0 | fin bursts 4164 | — | 12 |
| 4165 | 138.84 | beat 2 | F-dash_l · feet 1500,820 · 280 | — | scar A retypes 4166 | cut, right framing | 13 |
| 4171 | 139.028 | 8th | F-cut_down_l · feet 1150,700 · 280 | fin cut · stop 0 | fin bursts 4175 | — | 13 |
| 4176 | 139.215 | beat 3 | F-dash · feet 420,820 · 280 | — | — | cut, left | 14 |
| 4182 | 139.403 | 8th | F-cut_down · feet 780,690 · 280 | fin cut · stop 0 | fin bursts 4187; head's shadow 4184–87 | — | 14 |
| 4188 | 139.59 | beat 4 | F-dash_l · feet 1500,820 · 280 | — | — | cut, right | 15 |
| 4193 | 139.778 | 8th | F-cut_down_l · feet 1140,690 · 280 | fin cut · stop 0 | eyes flare 4197–4198 | — | 15 |
| 4199 | 139.965 | bar 93 | (F-cut_down_l held) · feet 900,820 · 260 | — | the bite launches (BOSS-2) | — | 16 |
| 4205 | 140.153 | hit | F-leap · centre 930,380 · 260 | — | jaws close under her | tilt up | 16 |
| 4216 | 140.528 | hit | (F-leap at apex) · centre 720,260 · 240 | jaws clamp on air · stop 2 (4217–4218) | BOSS-1, shock ring, fang sparks | punch M | 17 |
| 4222 | 140.72 | 16th | F-cut_down · feet 760,600 · 240 | snout cut, heals · stop 0 | cut retypes 4224 (half), 4227 (shut) | tilt down | 17 |
| 4233 | 141.09 | beat 4 | (F-cut_down) · feet 700,900 · 360 | — | eyes flare 4236–4237 | cut | 18 |
| 4238 | 141.28 | hit | F-guard (airborne, −15°) · centre 600,560 · 360 | — | head rears (BOSS-2), throat vortex | shake S, tilt up | 18 |
| 4244 | 141.465 | **bar 94, no 808**, suona | F-blasted · centre 1020,440 · 300 | guard broken · **IMPACT 4244–4245** · slow motion ×0.2 4246–4288 | point-blank roar; R ring 1 | drift, no shake | 19 |
| 4252 | 141.75 | suona | — | — | R ring 2; `RangeError` passes the lens | — | 19 |
| 4264 | 142.12 | suona | — | — | R ring 3 | — | 19 |
| 4267 | 142.22 | suona | — | — | R ring 4 | — | 19 |
| 4278 | 142.59 | suona, last note | N09-fall_open · centre 900,480 · 520 | — | R ring 5 (0.30); cyan returns on her | cut | 20 |
| 4289 | 142.965 | bar 95, soft | F-landing · feet 760,940 · 260 | landing · stop 3 (4290–4292) | crater ring; growth surge (5 coils) | punch M | 21 |
| 4300 | 143.34 | beat 2 | N09-wipe (panel) · face 780 | — | HUD scan 4300/4303/4306/4309, lock 4311 | panel slam, punch S | 22 |
| 4314 | 143.809 | kick returns | F-sword_finger · feet 700,760 · 200 | — | the city's swords lift: tiers 4314/4320/4325/4331 | crane up | 23 |
| 4334 | 144.465 | bar 96 | (F-sword_finger) · feet 520,880 · 90 | volley 1 · stop 2 (4335–4336) | coil 1 pinned; R 0.2875; thrash | shake S | 24 |
| 4345 | 144.84 | beat 2 | — | volley 2 · stop 2 (4346–4347) | coil 2 pinned; R 0.275 | shake S | 24 |
| 4356 | 145.215 | beat 3 | N09-finger_point · feet 820,960 · 400 | volley 3 · stop 2 (4357–4358) | coil 3; R 0.2625 | cut, shake S | 25 |
| 4368 | 145.59 | beat 4 | — | volley 4 · stop 2 (4369–4370) | coil 4; R 0.25 | shake S | 25 |
| 4379 | 145.965 | bar 97 | F-dash · feet 600,820 · 300 (−10°) | — | whisker 1 lashes 4385 | track | 26 |
| 4390 | 146.34 | beat 2 | F-cut_down · feet 740,790 · 300 | whisker 1 cut · stop 2 (4391–4392) | slide 4393–96, white 4397, ink 4398 | punch S | 26 |
| 4401 | 146.715 | beat 3 | F-dash · feet 560,840 · 320 | — | whisker 2 lashes 4407 | track | 27 |
| 4413 | 147.09 | beat 4 | F-cut_up · feet 700,800 · 320 | whisker 2 cut · stop 2 (4414–4415) | handler dies (cursor 4419–4422); white 4420, ink 4421 | punch S | 27 |
| 4424 | 147.465 | bar 98 | N09-climb · feet 760,780 · 320 | — | rings stay cyan; cloud base 4435 | track up | 28 |
| 4446 | 148.215 | fill | F-leap · centre 820,900 → apex 840,360 · 260 | — | cloud puffs on 16ths; head rises 4452 | tilt up | 29 |
| 4460 | 148.68 | fill | apex | — | head turns head-on (BOSS-3); eyes flare 4467–68 | hold apex | 29 |
| 4469 | 148.965 | bar 99 | (her view) | — | head-on charge | — | 30 |
| 4480 | 149.34 | beat 2 | F-thrust · centre 960,600 · 700 | clash · stop 6 (4481–4486) · **IMPACT 4480–4481** | cyan crack across the frame | shake L (from 4487) | 31 |
| 4491 | 149.715 | beat 3 | N09-brace_side · feet 880→560,860 · 260 | — | recoil (BOSS-5) | — | 32 |
| 4503 | 150.09 | beat 4 | — | — | broken fangs burst into ink; regrowth fails; glitch 4505 | shake S | 32 |
| 4514 | 150.465 | bar 100 | F-low · feet 620,900 · 320 | — | head lunges (BOSS-1) | — | 33 |
| 4525 | 150.84 | beat 2 | F-cut_up · feet 700,880 · 320 | uppercut · stop 3 (4526–4528) | thrown back (BOSS-5) from 4529 | punch M | 33 |
| 4536 | 151.215 | beat 3 | F-leap · centre 700,900 → 860,380 · 240 | — | — | tilt up | 34 |
| 4548 | 151.59 | beat 4 | — | — | she passes the head; it falls; the neck arches | — | 34 |
| 4559 | 151.965 | bar 101, fill | F-charge · centre 960,560 · 440 | — | swords stream into the blade on every 16th to 4601 | push | 35 |
| 4581 | 152.715 | fill | (F-charge, wide) · centre 900,360 · 150 | — | ring of light; head roars up (BOSS-6) | push | 36 |
| 4604 | 153.465 | **stab 1 (soft)** | F-cut_down · feet 900,760 · 300 | cut 1 hangs · stop 2 (4605–4606) | — | punch S | 37 |
| 4612 | 153.746 | **stab 2** | F-cut_up · feet 990,700 · 300 | cut 2 hangs · stop 2 (4613–4614) | head knocked down, BOSS-8 4616 (glitch 4615) | punch M; whip 4617–4620 | 38 |
| 4621 | 154.028 | **stab 3** | F-issen · feet 1160,650 · 280 | cut 3 hangs · stop 1 (4622) | — | lands from the whip | 39 |
| 4626 | 154.215 | **stab 4** | F-enter · feet 960,600 · 260 | ENTER · stop 6 (4627–4632) · **IMPACT 4626–4627** | frame dips 6 px; ⏎ flares | punch L | 40 |
| 4633 | 154.43 | — | — | world resumes | all cuts go off; ripple; unwinding starts; ink rain; R 0.10 | spring back; pull back | 40 |

---

### Bar 87 · the roar

#### S09-01 · f3929–f3950 · 22 f · 130.97–131.67 s · bar 87.00–87.49
- **Music:** the Drop 2 downbeat f3929 (kick 1, the hardest hit of the drop; suona and pipa riff in), kick 2 f3940.
- **Lyric:** no new line (instrumental). Carried over from part 08 on the lyric layer, at part 08's final positions and
  sizes and in its style (ZCOOL KuaiLe ink glyphs, paper #EDE4D3 at 96 %, 5 px dry-brush ink outline):
  - bubble A 「才、」, 114×76 centred (330, 100), and B 「才不是为了你」, x 360–858, y 112–227, both at 72 %;
  - bubble C 「才修的！」, the spiky shout burst, x 300–988, y 256–516, spike tips x 272–1016, y 228–544, 修 in cyan
    #19F0C8 with its ink edge;
  - the chain spans x 272–1016, y 62–544. On the cut C's tail re-aims to her crown in this framing, tip at (560, 586).
  - They stay on screen through the blast and legible to at least f3937 (的 f3911 + 0.8 s = f3935; ！ f3913 + 0.8 s =
    f3937), rattle with the shake from f3936 and are torn away into ink f3936–f3946 (frames under Action).
  - The lyric layer is composited after the post pass, so the jolt, the hit-stops and the shake are applied to it
    explicitly. The roar's upper sheet runs just under C (its edge near y 600); C's lower-right spikes graze the upper
    snout tip (900, 470) and the bubbles stay on top, so the snout reads as butting into her shout.
- **Picture (back to front):**
  - BG09-roofs `-far` at scale 1.10 (parallax 0.3): the city in rain mist at R 0.15, its boards mostly cyan.
  - BG09-roofs `-mid` at 1.0: roofs, lanterns, the tower's plinth behind the head.
  - The dragon: BOSS-2 (roaring profile, facing left) as a glyph field, 1450 px from snout to skull. Upper snout tip at
    (900, 470), lower jaw tip at (930, 760), mouth centre (960, 610), eye at (1430, 380). The mane sweeps back past
    the right edge between y 150 and 300 (dimmed in the watermark corner). The neck leaves the right edge between y 250
    and 900; its rows flow away from the head at 240 px/s. Whiskers trail from the jaw hinge off the bottom right.
  - The roar: a cone of glyphs from the mouth to the left edge, half-angle 24°. Rows of
    `RangeError: Maximum call stack size exceeded` at 28 px at the mouth growing to 120 px at the left edge, 1800 px/s,
    cinnabar with white-hot cores along its axis. Three depths: behind her (0.6 opacity), at her depth, and in front of
    her past the lens (blurred 14 px).
  - Shock rings: flat cinnabar ellipses (2 px line, 40 px glow) leaving the mouth, expanding to 2400 px over 12 f.
  - Her: F-guard, h 320, feet (560, 920) on the BG09-roofs `-near` ridge, facing right; the blade lies across the
    cone's axis at her chest (y 760); SW reached her hand on part 08's 2-frame streak (f3927–f3928). Cinnabar rim at
    90 % in this shot (the roar is the light source). Across the cut the head has come down the tower at her: its neck
    runs back off the right edge toward the tower.
  - FX: the stream parts at her blade into two sheets that pass above and below her, like water round a rock. Sparks
    (4-point stars, 6–12 streaks) at the blade's flat (650, 760) every second frame while the stream hits.
  - BG09-roofs `-near` (the ridge) and rain.
- **Action:**
  - f3929–f3930: **IMPACT FRAME** (2 f). Ink ground; the head and the cone as flat cinnabar silhouettes; her F-guard
    silhouette inverted to paper; 24 radial dry-brush lines in paper from the contact point (650, 760).
    - The bubbles stay over it in their own paper and ink; 修 drops its cyan to paper for these 2 f, so the frame
      keeps its three tones.
    - On the blast the chain jolts 14 px left and 6 px down; A tilts −5°, B −3°, C +4°, and C's lower-right spikes
      crumple 10 px against the snout.
  - f3930–f3935: hit-stop 6, in colour from f3931. Glyphs hang mid-air, ring 1 hangs at 300 px, rain hangs, one spark
    stays lit at the blade. The bubbles hang with the world, frozen mid-jolt; 修 is cyan again from f3931.
  - f3936: the world resumes. The stream pours and splits round her; growth surge: 16 new rows type in at the neck
    (off frame right, felt as the neck's rows lurching right by 60 px). She starts to skid left: x 560 → 530 by f3939
    (ease-in), her boots throwing tile chips (PR09-tile, 6 per frame, ink).
  - f3936, the bubbles rattle:
    - From here they take shake L's offset and roll in full, plus their own rattle: each bubble ±4 px at 15 Hz on its
      own phase, A's stammer tremble doubled.
    - C's tail snaps at its root and whips away left as an ink flake.
  - f3937: ring 2 leaves the mouth (130 px per frame).
  - f3937–f3939, C tears away from its right end, the side facing the roar:
    - its paper rips into 6 dry-brush strips, right to left, each turning ink-black over 2 f as it rips and flying
      left with the stream;
    - ！ and 的 burst into ink blots on f3937, 修 on f3938 (its cyan goes out first), 才 on f3939. C is gone by f3940.
  - f3940: on kick 2, ring 2 slams into her guard. Hit-stop 2 (f3941–f3942).
    - Ring 2's front catches the upper chain: B splits along a rip between 为 and 了; A spins to −12°.
    - Through the stop the strips, blots and both halves of B hang.
  - f3943: she is shoved. The skid accelerates: x 530 → 400 by f3950 (160 px so far of the 260 px skid). A 6 %
    horizontal squash on the shove (f3943–f3945). Her heels cut two ink scrape lines into the tiles (code).
  - f3943–f3945: B's halves tear into strips that turn to ink and blow left; 你, the word she could not say steadily,
    is the last of B to go (f3945).
  - f3946: A 「才、」, alone and trembling, pops into four ink blots that blow toward the left edge. The lyric layer
    holds no bubble from f3947.
  - f3944–f3950: a second sheet of rows crosses in front of the lens, out of focus; the sparks thicken. The bubbles'
    last strips and blots leave the left edge or fall and fade by f3950.
- **Camera:** wide-medium side view at her chest height (horizon y 760). Push 1.00 → 1.03 centred on her. Shake L
  (16 px, 1.5° roll, decay over 14 f) for the downbeat, held through the stop and running f3936–f3949; a second shake L
  from f3943 (it is cut off by the cut at f3951). The lyric layer takes both shakes (Action).
- **Grade / R:** city R 0.15. The right of the frame is flooded with the roar's cinnabar; her right side red, her blade
  side cyan.
- **Out:** hard cut on beat 3, f3951, to the reverse angle.
- **Art:** BOSS-2 (shown large, 1450 px); F-guard; part 08's speech-bubble chain (code). **BG09-roofs (new):** 2560×1440,
  three layers, with the central tower BG-tower, attached. Prompt after the STYLE_BIBLE §5 anchor:
  "Rooftops round the base of a giant central pagoda tower at night in rain. In the foreground a long curving tiled
  roof ridge with upturned eave tips runs across the lower fifth of the frame. Behind it, clustered roofs, archways,
  hanging holographic lanterns and blank glowing signboards; beyond, the dense city dissolving into rain mist. The
  lowest storeys and stone plinth of the attached tower rise off the right edge. Side view, eye level at the chest
  height of someone standing on the near ridge. Keep the left third calm and open." Layers: `-far` (city and mist),
  `-mid` (roofs, lanterns, the tower's plinth), `-near` (the ridge strip, repainted alone on flat magenta #FF00FF).
  **PR09-tile (new):** 512×512, "a single traditional curved roof tile, dark grey glazed pantile, three-quarter view,
  in the same ink-wash anime finish, isolated on flat pure magenta #FF00FF, no text"; instanced in code for debris,
  rotated freely.

#### S09-02 · f3951–f3973 · 23 f · 131.70–132.43 s · bar 87.49–88.00
- **Music:** beat 3 (f3951), the snare at 132.09 (f3963), beat 4.
- **Lyric:** none.
- **Picture (back to front):**
  - BG09-roofs_rev `-far` at 1.15 (parallax): the city receding away from the tower in one-point perspective, vanishing
    point (960, 470) behind her; `-near`: the ridge she skids on, across the bottom centre.
  - The roar stream: it now comes from behind the camera. Rows enter from all four edges as a converging tunnel, hit
    her guard, part into two sheets either side of her and stream away into the depth, fraying into ink flakes over the
    far roofs. Near glyphs 90–160 px, blurred, 2200 px/s.
  - Her: N09-guard_front, h 470, feet (960, 1010), facing us, blade across her chest at y 700. Lit from the front by
    the roar: a cinnabar multiply wash at 35 % over her; the blade's cyan on her chin from below.
  - Rain.
- **Action:**
  - f3951: cut in mid-skid. She recedes in depth: scale 1.00 → 0.89 by f3963 (ease-out), the remaining 100 px of the
    skid read as distance.
  - f3955 and f3959: two big chunks of the roar (the words `RangeError` and `exceeded`, 200 px) hit the guard and
    split round it; a burst of sparks at the blade (1010, 700) each time.
  - f3963: on the snare she stops dead. Squash 10 % (vertical) over 3 f, back with a 3 % overshoot by f3968. Ink dust
    puffs from both boots (two ink plumes 260 px wide, rising 80 px, fading over 12 f).
  - f3964–f3968: the stream thins; the last row `…stack size exceeded` passes either side of her and burns out over
    the city as ink flakes. The roar has ended.
  - f3969–f3973: she stays braced. Thin cyan vapour steams off the blade; rain falls again; the cinnabar wash on her
    fades from 35 % to 15 %.
- **Camera:** medium, frontal, at her chest height (y 700). The camera tracks back with her at 70 % of her recession,
  plus a 1.5 %/s push. Punch S on f3963 (+3 % over 2 f, back over 6). Shake S on f3963 (6 px, 8 f).
- **Grade / R:** R 0.15; the far city mostly cyan with scattered red boards.
- **Out:** hard cut on the bar-88 downbeat, f3974.
- **Art:** **N09-guard_front (new):** chibi sticker on the shared fight-sheet text (fight-design §10.3), square 512 cell.
  "Front view, facing the viewer, braced low against a blast coming straight from the viewer: feet planted wide and
  dragging, knees bent, body leaning into the blast. The sword is held horizontally across her chest in her
  pearl-white cybernetic RIGHT hand, its grip and ⏎ crossguard on the left side of the picture, the blade crossing in
  front of her toward the right side of the picture. Her bare LEFT palm presses flat against the blade near the tip,
  on the right side of the picture, the wide left sleeve blown back behind her elbow. Teeth gritted; her right eye
  (left side of the picture) squeezed shut; the monocle eye (right side of the picture) open and glaring at the
  viewer. Ponytail, red bow ribbons and sword tassel blown straight back behind her." Facing: front. Sword hand: right.
  Never mirrored. **BG09-roofs_rev (new):** 2048×1152, two layers. Prompt after the anchor: "The reverse view from
  beside a giant tower, looking out over the city's rooftops at night: a tiled roof ridge across the bottom centre in
  the foreground, roofs, archways and blank glowing signboards receding in deep one-point perspective toward a distant
  skyline of pagoda-towers and megastructures, holographic lanterns, rain mist. Eye level at the chest height of
  someone standing on the near ridge. Keep the centre open." Layers: `-far` (everything beyond the ridge), `-near`
  (the ridge, on magenta).

### Bar 88 · the reveal

#### S09-03 · f3974–f4007 · 34 f · 132.47–133.57 s · bar 88.00–88.76
- **Music:** bar 88, kicks on f3974, f3985 and f3996.
- **Lyric:** none.
- **Picture (back to front):**
  - BG09-skyline `-far` (2560×1440 at 0.80): the city to a low horizon at y 820; the sky graded by R; the heavy low
    cloud ceiling across the top, its underside lit cinnabar by the beast (code ink-cloud layer, y 0–130).
  - BG-tower at 0.62 (893 × 1587 px), centred at x 1150, plinth at y 1240 (below frame), storeys 2–11 in view, its
    top lost in the cloud ceiling. Its windows lit cyan (code light over window masks measured once on BG-tower); its
    waist ring of blank panels carries cyan board text.
  - The dragon: 3 coils from storey 2 up to storey 10, body 120 px thick in this framing, back halves behind the tower,
    front halves in front. Rows streaming tailward at 180 px/s; the spine ridge a serrated line of tiny columns. The
    head: BOSS-1 **mirrored** (facing right), 330 px long, resting on the top coil at (1300, 250), looking out over the
    city to the right, away from her. Whiskers drift in the wind.
  - BG09-skyline `-mid`: roofs and boards between us and the tower (parallax 0.6).
  - BG09-roofs `-near` across the bottom (y 930–1080) with her on it: F-back, h 130, feet (330, 990), looking up at
    the tower. The blade in her hand glints cyan (a 4-point star on every kick).
  - Rain.
- **Action:**
  - f3974: cut in on the kick. The coils tighten (spline radius −4 % over 3 f, then hold). Eave tiles shed off the
    tower under the coils (PR09-tile, 20 per coil, falling and turning). The windows the coils cover flick from cyan to
    red for 3 f (f3974–f3976).
  - f3974, f3980, f3985, f3991, f3996, f4002: on every 8th a new row types in at the neck (cursor █ visible as a bright
    point behind the head).
  - f3985: tighten again (−4 %); windows red f3985–f3987; a hairline of red light runs up the tower's spine (code).
  - f3996: third tighten; windows red f3996–f3998. The head lifts 12 px and its whiskers uncurl; the lower whisker's
    text `process.on('uncaughtException', recurse);` is legible for the first time (14 px, dim).
  - Throughout: she holds F-back, breathing; the hold drifts 6 px left.
- **Camera:** extreme wide at roof height near her, looking at the tower. Slow crane up 80 px (plate pixels) over the
  shot, ease-in-out; push 1.5 %/s. Her feet go from y 990 to y 1070.
- **Grade / R:** R 0.15. A mostly cyan city with one red beast in it; its light reflects in the wet roofs and on the
  cloud ceiling.
- **Out:** hard cut on f4008, on the head's swing (a cut on action).
- **Art:** BOSS-1 (mirrored here, text laid after the flip); F-back; BG09-roofs `-near`. **BG-tower** (shared, not new
  here; it replaces BG09-tower): part 08's central tower (S08-01: a thirteen-storey pagoda fused with a megastructure
  spire, upturned eaves on every storey, a ring of blank glowing panels round its waist, a needle antenna on top),
  generated alone as a 1440×2560 cut-out: front view with a very slight three-quarter turn, the whole tower from plinth
  to antenna tip filling the height, isolated on flat pure magenta #FF00FF with a crisp silhouette, no mist, rain,
  glow, sky or ground around it. Part 09 uses it whole (S09-03, S09-22, S09-24) and as a crop (S09-40); its close
  views (BG09-wall, BG09-lowroof, BG09-crown) are edits generated with it attached. **BG09-skyline (new):** 2560×1440,
  two layers, with the central tower BG-tower, attached (for style and scale; in S09-03 and S09-24 the tower is
  composited in front as its own layer, so the plate leaves it out). Prompt after the anchor: "The city
  at night seen from rooftop height across its centre: a sea of pagoda roofs, archways and megastructures receding to
  a low horizon, hundreds of blank glowing signboards, holographic lanterns, rain mist, a heavy low cloud ceiling
  across the top of the sky. No single dominant tower; the middle of the skyline stays low. Wide, eye level, horizon
  at three quarters down." Layers: `-far` (horizon, sky, far city), `-mid` (the nearer roofs, on magenta).

#### S09-04 · f4008–f4012 · 5 f · 133.60–133.73 s · bar 88.76–88.87
- **Music:** beat 4 of bar 88 (133.59, f4008).
- **Lyric:** none.
- **Picture:** medium on the head against BG09-skyline `-mid` (blurred 10 px) and the cloud ceiling. BOSS-1 (now facing
  left, unmirrored), 1100 px long, whiskers trailing. Rain.
- **Action:**
  - f4008: the head enters mid-swing from the right: rotated +28°, centre (1700, 520).
  - f4008–f4011: it swings round to rotation 0°, centre (1150, 520), eye at (1000, 430) (ease-out). Its glyph field
    gets a directional brush blur along the arc on f4008–f4010 (allowed on fast enemies). Glitch on f4008–f4009: its
    rows offset ±16 px, one row tripled.
  - f4011–f4012: it settles with a 6 px overshoot; the whiskers follow 3 f late.
- **Camera:** a whip following the swing (f4008–f4010, brush blur), landing on f4011; push 2 % over the shot.
- **Grade / R:** R 0.15.
- **Out:** hard cut on f4013.
- **Art:** BOSS-1 (shown large, 1100 px).

#### S09-05 · f4013–f4018 · 6 f · 133.77–133.93 s · bar 88.87–89.00
- **Music:** the last 16ths before bar 89.
- **Lyric:** none.
- **Picture:** an extreme close-up of the eye: BOSS-7 at 2200 px wide, cropped to the frame; its glyph field reads
  `RangeError: Maximum call stack size exceeded` at 22 px round the brow and the lids; the eyeball is bare paper with
  the code eye-point (white-hot, cinnabar bloom) as its pupil slit. Rain streaks across it, out of focus.
- **Action:**
  - f4013–f4016: the pupil slit narrows (width ×1.0 → ×0.5).
  - f4017–f4018: the eye flares, the tell (core 40 px, bloom 220 px; local).
- **Camera:** a fast creep in, +4 % over 6 f.
- **Grade / R:** R 0.15.
- **Out:** hard cut on the bar-89 downbeat, f4019.
- **Art:** **BOSS-7 (new; shown large, 2200 px):** cell 7 of the second boss sheet (its prompt frame is under Art in
  this part): "an extreme close-up of the dragon's left eye in profile: the heavy brow ridge, the lids, scales round it
  in dry-brush strokes, the pupil a narrow vertical slit, the eyeball left as bare paper." Monochrome ink on flat white;
  converted to glyphs.

### Bars 89–90 · the claw, the regrowth, the tail

#### S09-06 · f4019–f4063 · 45 f · 133.97–135.43 s · bar 89.00–90.00
- **Music:** bar 89: beats f4019, f4030, f4041, f4053.
- **Lyric:** none.
- **Picture (back to front):**
  - BG09-roofs `-far`, `-mid`; the tower's plinth on the right.
  - The claw: BOSS-4 (foreclaw reaching left, four talons spread), 900 px across, on a forelimb of code body (220 px
    thick, rows `at recurse (jianghu.js:42:7)` running down the limb toward the claw) that comes out of the lowest
    coil off the right edge.
  - Her: F-low, h 340, feet (600, 930) on the `-near` ridge, facing right.
  - BG09-roofs `-near`, rain.
- **Action:**
  - f4019: cut in; F-low (swap from F-back across the cut: she has turned to face the beast), 8 % squash, pulled back
    16 px.
  - f4019–f4029: the claw sweeps in from off the right edge, low along the roof: centre x 2300 → 980 (ease-in),
    exploding the ridge tiles under it (PR09-tile sprays). Its glyphs brighten as it nears; the limb arcs behind it.
  - f4029: smear (her silhouette swept up along the rising arc).
  - f4030: F-cut_up, 70 px right and 30 px up, on her toes (feet 670, 900). The slash arc runs from (560, 960) to
    (980, 380) straight through the four talons. Sparks where the blade crosses each talon: (840, 720), (880, 640),
    (915, 560), (950, 480). Hit-stop 3 (f4031–f4033): the claw hangs with a white hairline through all four talons.
  - f4034: the world resumes. The talon tips slide 30–60 px apart along the cut and tumble up-left (rotating 10–25°).
    The limb jerks back 140 px to the right; glitch on f4034–f4035. Her cut_up drifts 16 px up-right (ease-out); the
    arc erodes from its start over f4034–f4041, peeling ink flecks.
  - f4040: the severed tips go white for 1 f (local).
  - f4041: on beat 3 the severed talons turn ink-black and burst. Their blots fall to the roof and splat into stains.
  - f4042–f4051: blots land; the stump hangs at the right edge, smoking red; she holds cut_up, breathing.
  - f4052: smear (small, swept back and down).
  - f4053: she hops back into F-low: an arc 24 px high, 60 px back (feet 610, 930); landing squash 12 % on f4057,
    settled by f4060.
  - f4060–f4063: on the stump's cut face a block cursor `█` appears and blinks (4 f on, 4 f off).
- **Camera:** medium, side, at her chest height (y 760). Push 1.00 → 1.04 over the shot. Punch M on f4030 (+5 % over
  2 f, back over 8 f from f4034). Shake S on f4041.
- **Grade / R:** R 0.15; the claw's red on her right, the blade's cyan on her left.
- **Out:** hard cut on the bar-90 downbeat, f4064.
- **Art:** F-low, F-cut_up, BOSS-4, BG09-roofs, PR09-tile.

#### S09-07 · f4064–f4074 · 11 f · 135.47–135.80 s · bar 90.00–90.25
- **Music:** bar 90 downbeat, the 8th at f4070.
- **Lyric:** none.
- **Picture:** close on the stump: BOSS-4 at 1500 px across, the four cut faces glowing cinnabar. BG09-roofs `-far`
  blurred 12 px behind. Across the top of the frame (y 120, x 300–1500), out of focus, the lower whisker:
  `process.on('uncaughtException', recurse);` at 48 px. Rain in focus in the foreground.
- **Action:**
  - f4064: regrowth, row group 1: the knuckle rows type themselves in from the stump outward (3 f, the cursor █ racing
    ahead); as each row lands, the painting's mask reveals behind its glyphs. On the same frame a band of light runs
    along the whisker toward the stump (the handler firing).
  - f4070: group 2 types in; the whisker pulses again.
- **Camera:** slow push +2 % with a 20 px track left.
- **Grade / R:** R 0.15.
- **Out:** the panel border slams in from the left over f4073–f4075 on a short whip and lands on f4075.
- **Art:** BOSS-4 (shown large, 1500 px).

#### S09-08 · f4075–f4088 · 14 f · 135.83–136.27 s · bar 90.25–90.56
- **Music:** beat 2 (135.84, f4075), the 8th at f4081; the fill begins on beat 3 (136.215, f4086).
- **Lyric:** none.
- **Picture:** two diagonal panels split by a dry-brush ink border 24 px wide with 10 px paper gutters, running from
  (1100, 0) to (820, 1080).
  - Right panel: F-face (head and shoulders, three-quarter facing left, monocle eye nearest), face 720 px tall, centred
    (1400, 560); defocused roofs behind; a cinnabar wash from the left.
  - Left panel: the regrowing claw continued from S09-07 (same scale), the whisker across its top.
- **Action:**
  - f4075: the panels land (punch S). The monocle glints (a cyan 4-point star, 3 f). Row group 3 types in. HUD bracket 1
    (cyan, thin, no numbers) snaps onto the stump.
  - f4078: bracket 2 snaps onto the typing cursor █.
  - f4081: bracket 3 snaps onto the word `recurse` in the whisker. Thin cyan lines run from her monocle across the
    panel border to all three brackets. Row group 4 types in; the whisker pulses.
  - f4083–f4085: the bracket on `recurse` pulses twice: she has seen the cause.
  - f4086: the fill begins. Both panels shudder (4 px, 2 f). Along the bottom of the left panel the tail tip
    `at main (jianghu.js:1:1)` streaks across from left to right in a brush blur, gone by f4088: the next attack, seen
    a moment early. Her eyes in the right panel stay on it (the drawing slides 10 px left over f4086–f4088).
- **Camera:** right panel push +3 % on her face; left panel drift left 1.5 %.
- **Grade / R:** R 0.15.
- **Out:** hard cut on the fill's 16th at f4089, straight onto her leap.
- **Art:** F-face (shown large: the face alone is 720 px), BOSS-4 (shown large, 1500 px).

#### S09-09 · f4089–f4108 · 20 f · 136.30–136.93 s · bar 90.56–91.00
- **Music:** the fill 136.22–136.87, its 16ths here on f4089, f4092, f4095, f4098, f4101, f4103, f4106.
- **Lyric:** none.
- **Picture (back to front):** BG09-roofs `-far`, `-mid`; the `-near` ridge she has just left (y 930). Her: F-leap,
  h 300. The tail: in from the left edge at roof level, the tail tip leading. Its last rows taper from 40 px glyphs to
  a point: `at main (jianghu.js:1:1)` (the tip), `at boot (jianghu.js:9:11)`, `at Array.forEach (<anonymous>)`,
  `at jianghu.js:9:28`, then the body's `at recurse` rows thickening to 260 px.
- **Action:**
  - f4089: cut in on the leap. F-leap, centre (800, 560), rotated −8°, already 180 px above the ridge, a cyan smear
    streak below her from the ridge to her boots and 2 afterimages. The tail is mid-pass under her: its tip, racing
    right at 120 px per frame in a brush blur, is at x 600 on this frame (it entered from the left edge). The regrown
    claw is out of shot.
  - f4089, f4092, f4095: each 16th, a roof ridge the tail hits explodes into tiles.
  - f4092–f4100: she rises to the apex (centre y 480) and hangs; 2 cyan afterimages (0.30 → 0.10).
  - f4098–f4101: the camera whips right with the tail (brush blur), landing on f4101. Now it travels with the body: the
    coil under her is nearly still in frame and the city streaks left behind it.
  - f4101–f4106: she descends toward the passing coil (rotation −8° → +6°).
  - f4106: on the last fill 16th her boots touch the body: a cyan ring (flat ellipse 200 × 40 px) stamped into the red
    rows.
  - f4107–f4108: a 6 % landing squash, still in F-leap.
- **Camera:** wide-medium, side, at her chest height; push 1.5 %/s; the whip f4098–f4101, then a track with the body.
- **Grade / R:** R 0.15.
- **Out:** hard cut on the bar-91 downbeat, f4109.
- **Art:** F-leap, BG09-roofs, PR09-tile.

### Bars 91–92 · the climb

#### S09-10 · f4109–f4130 · 22 f · 136.97–137.67 s · bar 91.00–91.49
- **Music:** bar 91 downbeat; the 8th riff from 137.34 (f4120, f4126).
- **Lyric:** none.
- **Picture (back to front):**
  - BG09-skyline `-far` through the gaps on the left: the city far below in mist (parallax 0.25).
  - BG09-wall (the tower's flank, tiled vertically), scrolling down at the track speed.
  - The coil: a body ribbon 240 px thick rising from lower left to upper right at 18°. Its rows
    `at recurse (jianghu.js:42:7)` are 36 px tall and legible, flowing downhill at 400 px/s; the spine ridge columns
    `4 2 : 7` stand along its top edge like a fence of fins.
  - Her: F-dash, h 300, rotated −8° to the slope, feet (700, 760) on the coil's top edge.
  - PR02-lantern sprites (the tower's eave lanterns) passing the lens (two, 300 and 500 px, blurred 16 px, parallax
    1.8); code glows their blank panels cyan.
  - Rain.
- **Action:**
  - f4109: cut in; growth surge (16 rows at the neck; the coil's rows lurch downhill 80 px). F-dash lands on the coil
    with a 6 % squash.
  - Steps on the 8ths, f4109, f4115, f4120, f4126: each step bobs her 8 px up and down over 5 f and stamps a cyan patch
    ring (flat ellipse 160 × 36 px, 3 px line) into the rows under her boot. The glyphs inside each ring turn cyan
    (patched), slide downhill behind her and retype red 8 f later (the handler is alive).
  - f4120 and f4126: on the riff two spine fins ahead snap upright at her; she runs over them and they bend under her
    boot.
- **Camera:** a track rising along the slope, 3 parallax layers (skyline 0.25, wall 1.0, lanterns 1.8); push 1.5 %/s.
- **Grade / R:** R 0.15.
- **Out:** hard cut on beat 3, f4131.
- **Art:** F-dash; BG09-skyline; PR02-lantern (part 02's hexagonal palace lantern with blank glowing panels: the same
  object, so PR09-lantern is dropped). **BG09-wall (new):** 1152×2048, a close view of BG-tower, generated with BG-tower
  attached. Prompt after the anchor: "A close section of the attached pagoda tower's flank at night in rain, one of its
  ordinary storeys (not the ring of panels at its seventh storey), front elevation, two storeys filling the height:
  tiled eaves with upturned corners dripping rain, holographic lanterns hanging from the corners, lattice windows drawn
  as thin glowing cyan lines, carved beams, dark cyber conduits and cable bundles climbing between the storeys. Paint
  the top edge so it continues the bottom edge. No figures." Code tiles it vertically and hides the seam under a coil.

#### S09-11 · f4131–f4153 · 23 f · 137.70–138.43 s · bar 91.49–92.00
- **Music:** the riff 8ths f4131, f4137; beat 4 f4143; the 8th f4148.
- **Lyric:** none.
- **Picture:** closer, as the coil steepens to 35° up the flank. BG09-wall behind, scrolling fast. Her: N09-climb, h 340,
  feet (820, 720). The rows under her feet are 52 px tall: `at recurse (jianghu.js:42:7)` sharp and readable. Across
  the top of the frame, the next coil's back half passes behind the tower: the switchbacks ahead.
- **Action:**
  - f4131: swap to N09-climb, 120 px further up the slope.
  - Steps on the 8ths f4131, f4137, f4143, f4148: a 10 px bob and a cyan ring each (ellipses tilted to the slope).
  - f4143: the coil above contracts and drops 20 px toward her; red glyph dust sifts down.
  - f4150–f4153: she gathers at the top of the coil: an 8 % squash (anticipation for the zigzag).
- **Camera:** a track rising at the slope's angle, holding her at x 820; push 1.5 %/s.
- **Grade / R:** R 0.15.
- **Out:** hard cut on the bar-92 downbeat, f4154.
- **Art:** BG09-wall. **N09-climb (new):** square 512 cell on the shared fight-sheet text. "Right-facing (toward the
  right edge, turned slightly toward us, the pearl-white cybernetic right arm the near arm), running up a steep 35°
  slope toward the upper right: body pitched forward almost parallel to the slope, the front knee driving up high, the
  back leg extended and pushing off on its toes. The sword in the cybernetic RIGHT hand trails low behind her, the
  blade pointing back down the slope toward the lower left. The left arm swings forward and up for balance with the
  wide sleeve streaming back. Ponytail, ribbon tails and tassel stream back down the slope. A determined grin, eyes on
  the top of the slope. Her boots rest on an invisible line rising at 35°." Facing: right. Sword hand: right.

#### S09-12 · f4154–f4164 · 11 f · 138.47–138.80 s · bar 92.00–92.25
- **Music:** bar 92 downbeat f4154, the 8th f4160. Drop 2's density peak: a swap on every 8th for the whole bar.
- **Lyric:** none.
- **Picture:** BG09-wall (storeys 5–6, just below BG-tower's waist ring at storey 7, which the cut to S09-14 skips),
  the switchback coils crossing the front of the tower: coil A from lower left to upper right (15°), coil B above it
  from upper right to upper left. Framed so she is on the left third. Rain.
- **Action:**
  - f4154: F-dash, airborne from the end of the last coil (feet 420, 820), h 280: an arc 60 px high, 260 px right over
    5 f, with 2 afterimages.
  - f4159: smear, diagonally down.
  - f4160: F-cut_down lands on coil A (feet 760, 700, rotated −8°). The arc runs upper left to lower right through a
    spine fin (a 120 px column `4 2 : 7`); spark at the blade point (850, 690). Stop 0.
  - f4161–f4162: the fin's halves slide 30 px apart (the death compressed to fit the 8th); f4163 white (local); f4164
    ink burst. The cut's scar on the coil's rows glows cyan; the arc erodes.
  - f4164: smear (her silhouette swept up-left; the sword changes to her left hand here).
- **Camera:** rising continuously, 40 px over the shot (the same upward drift runs through S09-12…15, 160 px in all);
  her on the left third; push 1.5 %/s.
- **Grade / R:** R 0.15.
- **Out:** hard cut on beat 2, f4165.
- **Art:** F-dash, F-cut_down, BG09-wall.

#### S09-13 · f4165–f4175 · 11 f · 138.83–139.17 s · bar 92.25–92.49
- **Music:** beat 2 f4165, the 8th f4171.
- **Lyric:** none.
- **Picture:** the same wall from the other side of the tower's axis, framed so she is on the right third: coil B
  climbs from lower right to upper left.
- **Action:**
  - f4165: F-dash_l (facing left, the sword in her LEFT hand; the hand change happened across the smear on f4164), h 280,
    airborne from (1500, 820): 260 px left and 60 px up over 5 f.
  - f4166: below her in the lower left, out of focus, the cyan scar she left on coil A retypes red, the cursor █
    crawling along it.
  - f4170: smear.
  - f4171: F-cut_down_l lands on coil B (feet 1150, 700, rotated +8°): the arc from upper right to lower left through a
    fin, the wide sleeve following the cut; spark at (1060, 690). Stop 0.
  - f4172–f4173: the halves slide apart; f4174 white (local); f4175 ink burst.
  - f4175: smear (swept up-right; the sword changes back to her right hand).
- **Camera:** rising 40 px; her on the right third; push 1.5 %/s.
- **Grade / R:** R 0.15.
- **Out:** hard cut on beat 3, f4176.
- **Art:** F-dash_l, F-cut_down_l, BG09-wall.

#### S09-14 · f4176–f4187 · 12 f · 139.20–139.57 s · bar 92.49–92.76
- **Music:** beat 3 f4176, the 8th f4182.
- **Lyric:** none.
- **Picture:** left framing again, storeys 8–9; coil C rising left to right.
- **Action:**
  - f4176: F-dash from coil B's left end (feet 420, 820), arc up-right (the hand change across the smear on f4175).
  - f4181: smear.
  - f4182: F-cut_down on coil C (feet 780, 690): fin cut, spark (870, 680). Stop 0.
  - f4183–f4185: the halves slide apart; f4186 white (local); f4187 ink burst. A dark band sweeps down the wall above
    her (f4184–f4187): the head's shadow passing over the tower.
  - f4187: smear (swept up-left; the sword to her left hand).
- **Camera:** rising 40 px; left third; push.
- **Grade / R:** R 0.15.
- **Out:** hard cut on beat 4, f4188.
- **Art:** F-dash, F-cut_down, BG09-wall.

#### S09-15 · f4188–f4198 · 11 f · 139.60–139.93 s · bar 92.76–93.00
- **Music:** beat 4 f4188, the 8th f4193, the run into bar 93.
- **Lyric:** none.
- **Picture:** right framing, storeys 9–10; coil D, the top switchback where the neck begins. Over the next storey, at
  the top right but outside the watermark corner, the head looms out of the cloud ceiling: BOSS-2, 900 px, dark
  against the red-lit cloud, jaws opening.
- **Action:**
  - f4188: F-dash_l from (1500, 820) up-left (hand change across the smear on f4187).
  - f4192: smear.
  - f4193: F-cut_down_l on coil D (feet 1140, 690): fin cut, spark (1050, 680). Stop 0.
  - f4194–f4196: the halves slide apart; f4197 white (local); f4198 ink burst.
  - f4197–f4198: the eyes flare at (1450, 260): the tell for the bite (local).
- **Camera:** rising 40 px; right third; push.
- **Grade / R:** R 0.15.
- **Out:** hard cut on the bar-93 downbeat, f4199.
- **Art:** F-dash_l, F-cut_down_l, BOSS-2, BG09-wall.

### Bar 93 · the broken bar

#### S09-16 · f4199–f4215 · 17 f · 139.97–140.50 s · bar 93.00–93.38
- **Music:** bar 93 (broken): the downbeat, then the hit at 140.15 (f4205).
- **Lyric:** none.
- **Picture (back to front):** BG09-skyline `-far` through the gap on the left; BG09-wall upper storeys; the cloud
  ceiling across the top, red-lit. Coil D across the bottom of the frame (y 820–1000). Her: F-cut_down_l held from
  S09-15, h 260, feet (900, 820). The head: BOSS-2, jaws wide, 1400 px, lunging from the right, centre (2000, 560) on
  f4199.
- **Action:**
  - f4199: cut in; the head lunges left (ease-in), its lower jaw skimming the coil. A few red glyphs puff from the
    throat.
  - f4199–f4204: the open jaws arrive round her: upper fangs (`^` rotated) at y 380 above her, lower fangs at y 900
    under her boots.
  - f4204: smear, straight up.
  - f4205: F-leap, 260 px higher (centre 930, 380), rotated −10° and facing right (the hand change across the smear).
    Three cyan multiples are left in the mouth where she stood.
  - f4206–f4215: she rises to (950, 300) (ease-out); the head pivots up 8° under her as the jaws begin to close.
- **Camera:** wide-medium, side; tilt up with her from f4205 (120 px by f4215, ease-out); push 1.5 %/s.
- **Grade / R:** R 0.15.
- **Out:** hard cut on the snap, f4216.
- **Art:** BOSS-2 (shown large, 1400 px), F-cut_down_l, F-leap, BG09-wall, BG09-skyline.

#### S09-17 · f4216–f4232 · 17 f · 140.53–141.07 s · bar 93.38–93.76
- **Music:** the hit at 140.53 (f4216); the 16th figure 140.72–140.90 (f4222, f4224, f4227).
- **Lyric:** none.
- **Picture:** medium-wide. BOSS-1 (jaws closed, profile facing left), 1300 px, snout tip at x 520, the bridge of the
  nose (its top contour) at y 600; the cloud ceiling behind. Her above it in F-leap, centre (720, 260), h 240.
- **Action:**
  - f4216: the jaws clamp shut on the empty spot (BOSS-1 cut in with a 20 px jolt up). A shock ring leaves the jaw line
    at (600, 700) and spreads to 1800 px over 10 f. The `^` fangs clash: 14 spark streaks, white cooling to red, 6 f.
    Hit-stop 2 (f4217–f4218).
  - f4219–f4221: she drops 140 px, rotation easing to 0°.
  - f4221: smear.
  - f4222: F-cut_down lands on the bridge of the snout (feet 760, 600): the arc from upper left to lower right across
    the snout; sparks at (850, 610); the cut hangs cyan in the head's glyphs. Stop 0.
  - f4224 and f4227: the cut retypes itself shut in two steps: the cursor █ races along it and the glyphs come back
    cinnabar (half on f4224, all on f4227). The lower whisker pulses on both. The head cannot be cut while the handler
    lives.
  - f4228–f4232: she stands on the snout in cut_down, drifting 12 px; the head is stock-still, holding its breath.
- **Camera:** punch M on f4216 (back over 8 f from f4219); a 60 px tilt down following her drop, f4219–f4222; push.
- **Grade / R:** R 0.15.
- **Out:** hard cut on beat 4, f4233.
- **Art:** BOSS-1 (shown large, 1300 px), F-leap, F-cut_down.

#### S09-18 · f4233–f4243 · 11 f · 141.10–141.43 s · bar 93.76–94.00
- **Music:** beat 4 (f4233) and the hit at 141.28 (f4238); then the 808 drops out.
- **Lyric:** none.
- **Picture:** medium-close: she on the snout in F-cut_down, h 360, feet (700, 900); the head fills the right two
  thirds (BOSS-1, rows at 30 px), its eye at (1150, 520) just behind her.
- **Action:**
  - f4233: cut in; her hold drifts 8 px right.
  - f4236–f4237: the eyes flare (local: 40 px core, 200 px bloom).
  - f4237: smear (her silhouette flung up-left).
  - f4238: the head rears up violently: BOSS-1 rotates −30° (snout up) and swaps to BOSS-2 (jaws open) under a 2-frame
    ink-smoke smear. She is flung: F-guard (airborne, rotated −15°), 120 px up and 100 px left, centre (600, 560),
    the guard raised against the open jaws now aimed at her.
  - f4239–f4243: she drifts up-left 30 px. A vortex of `RangeError` glyphs spins up in the throat, brightening every
    frame. The rain slows (×1.0 → ×0.6), a prelude to the slow motion.
- **Camera:** shake S on f4238; tilt up 80 px with her, f4238–f4243.
- **Grade / R:** R 0.15.
- **Out:** hard cut on the bar-94 downbeat, f4244, straight into the impact frame.
- **Art:** F-cut_down, F-guard, BOSS-1, BOSS-2 (both shown large, filling the right two thirds).

### Bar 94 · the breath

#### S09-19 · f4244–f4277 · 34 f · 141.47–142.57 s · bar 94.00–94.76
- **Music:** **the break: no 808.** The suona and pipa run on f4244 (141.47), f4252 (141.75), f4264 (142.12), f4267
  (142.22); the last note f4278 is the next shot.
- **Lyric:** none.
- **Picture (back to front):**
  - BG09-skyline `-far`: the city far below, seen from storey 10, its boards about to turn.
  - BG09-wall on the right edge, blurred 10 px.
  - The head: BOSS-2 roaring point-blank, 1200 px, in the right third, jaws at (1350, 480).
  - The roar cone filling the right half, in slow motion.
  - Her: F-blasted, h 300, thrown backward to the left.
  - Snow of glyphs at three depths; hanging rain.
- **Action:**
  - f4244–f4245: **IMPACT FRAME** (2 f): ink ground; her F-blasted silhouette inverted to paper; the head and the cone
    flat cinnabar; radial brush lines from her broken guard. The guard breaks: arms flung forward, the sword still
    gripped (the drawing). R ring 1: the signboards nearest the tower's base flip red (R 0.17).
  - f4246: **slow motion** begins: the fight clock runs at ×0.2 to f4288 (everything but the music). The rain becomes
    hanging drops (2 px dots, 6 px streaks) crawling down. The roar's glyphs drift past like snow at 6 px per frame:
    letters of `RangeError: Maximum call stack size exceeded`, 40–400 px, tumbling, the largest out of focus.
  - f4246–f4277: her fall, choreographed on song frames: centre (1020, 440) → (720, 700) (ease-in-out), rotating
    −10° → −32°. No squash, no breath: she is limp.
  - f4246–f4256: the colours drain to ink and red: saturation of everything except cinnabar goes to 0. Her cyan (eyes,
    hair tips, arm seams, blade) turns grey; the city's cyan boards turn grey.
  - f4252: R ring 2 (R 0.20): a wave of boards relights red, rippling out across the city below, one board row per
    frame. A giant out-of-focus word `RangeError` (500 px) drifts across the lens in the foreground.
  - f4264: R ring 3 (R 0.24); the hanging drops near her catch the red, glinting cinnabar ring by ring.
  - f4267: R ring 4 (R 0.27); the glints reach the drops in front of the lens.
- **Camera:** at her height, drifting with the fall at 60 % (she moves a little within the frame); no shake (the
  stillness is the point); slow push 1.00 → 1.06.
- **Grade / R:** R 0.15 → 0.27 in steps on the suona notes; ink and red only.
- **Out:** hard cut on the last suona note, f4278.
- **Art:** F-blasted, BOSS-2 (shown large, 1200 px), BG09-skyline, BG09-wall.

#### S09-20 · f4278–f4288 · 11 f · 142.60–142.93 s · bar 94.76–95.00
- **Music:** the last note of the run, f4278 (142.59); still no 808, into the soft downbeat.
- **Lyric:** none.
- **Picture:** closer: N09-fall_open, h 520, centre (900, 480), rotated −20°. Below her, BG09-lowroof `-near` (the
  storey-5 eave) rising into the bottom of the frame; behind her, the city below in ink and red; hanging rain.
- **Action:**
  - f4278: swap to N09-fall_open (60 px lower): her eyes are open. R ring 5: the farthest boards turn; **R 0.30**.
  - f4278: the only colour that comes back is cyan, and only on her: first her eyes and the monocle (f4278), then a
    glint running down the blade from the ⏎ guard to the tip (f4280–f4284), then the fibre-optic hair tips (f4284).
  - f4280–f4288: the slow motion eases back to real time (×0.2 → ×1.0 by f4288); the rain starts falling again; she
    falls faster (180 px down by f4288).
  - f4284: the eave's ridge enters the frame at y 1080 and rises to y 930 by f4288.
  - f4286–f4288: she turns her feet under her (rotation −20° → −5°).
- **Camera:** following her down (tilt down 140 px, ease-in); push 1.5 %/s.
- **Grade / R:** R 0.30; ink and red, cyan on her alone.
- **Out:** hard cut on the bar-95 downbeat, f4289.
- **Art:** **N09-fall_open (new):** square 512 cell on the shared fight-sheet text. "Airborne, seen from the side facing
  the right edge (the cybernetic right arm near), falling backward and down while turning over: back curved, knees
  drawn up to bring her feet under her. The sword is pulled in close against her chest in the cybernetic RIGHT hand,
  the blade pointing up and back past her shoulder. The left arm is thrown out to the side for balance, the wide
  sleeve billowing. Her eyes are wide open now, sharp, fixed on something below and to the right. Ponytail and ribbon
  tails stream upward above her (she is falling)." Facing: right. Sword hand: right. **BG09-lowroof (new):**
  2048×1152, two layers, a close view of BG-tower, generated with BG-tower attached. Prompt after the anchor: "A broad
  pagoda eave halfway up the attached tower at night in rain: the
  tiled roof slope crosses the lower third as the ground, its upturned corner on the left; the tower's wall with
  lattice windows drawn as thin cyan lines rises behind on the right half; on the left, far below, the city's roofs and
  blank glowing signboards under rain mist. Side view at the chest height of someone standing on the roof. Keep the
  left third open." Layers: `-far` (the city below), `-near` (the eave and the tower wall, on magenta).

### Bar 95 · the landing, the lock-on, the swords

#### S09-21 · f4289–f4299 · 11 f · 142.97–143.30 s · bar 95.00–95.25
- **Music:** the soft downbeat of bar 95 (no kick until f4314).
- **Lyric:** none.
- **Picture:** side medium-wide on the lower roof: BG09-lowroof `-far` and `-near`. Her: F-landing, h 260, feet
  (760, 940). Up the tower, in the upper right (kept out of the watermark corner), the dragon's coils sliding round
  the tower.
- **Action:**
  - f4289: F-landing on the hit: an ink crater ring (flat ellipse 620 × 120 px, ink with a paper rim), 40 tiles jump
    (PR09-tile, arcs 30–120 px high), a dust of ink. Growth surge (phrase 3): 16 rows type in at the neck and the
    coils slide round the tower. Hit-stop 3 (f4290–f4292).
  - f4293–f4299: the tiles fall back and clatter; ink droplets settle; she breathes once (+2 %).
  - f4289–f4299: saturation comes halfway back (0 → 0.5); her cyan at full.
- **Camera:** punch M on f4289 (back over 8 f from f4293); push 1.5 %/s.
- **Grade / R:** R 0.30.
- **Out:** hard cut on beat 2, f4300.
- **Art:** F-landing, BG09-lowroof, PR09-tile.

#### S09-22 · f4300–f4313 · 14 f · 143.33–143.77 s · bar 95.25–95.56
- **Music:** beat 2 (143.34); 16ths on f4303, f4306, f4309, f4311.
- **Lyric:** none.
- **Picture:** two panels split by a dry-brush ink border from (980, 0) to (760, 1080).
  - Right panel: N09-wipe (head and shoulders, three-quarter facing left, monocle eye nearest), face 780 px tall,
    centred (1380, 600), looking left into the other panel.
  - Left panel: the whole beast in miniature: BG-tower at 0.40 (576 × 1024 px, plinth to antenna tip), five coils round
    it, the head near the cloud ceiling (BOSS-1, 140 px); desaturated to 0.5.
- **Action:**
  - f4300: the panels slam in (punch S); the monocle glints.
  - The HUD scan climbs the beast from the bottom of the stack to the top, one bracket per 16th, each joined to her
    monocle by a thin cyan line across the border: f4300 the tail tip (`at main`), f4303 the tail's last rows
    (`at boot`), f4306 the lowest coil, f4309 the neck.
  - f4311: lock: a double bracket on the head; the head's top row `RangeError: Maximum call stack size exceeded` is
    underlined in cyan (the top of the stack). The monocle flares cyan (local).
  - Her wipe: N09-wipe slides 20 px right with the hand's swipe (ease-out) over f4300–f4313; on f4302 three ink flecks
    fly off her knuckle (code). Her smirk is painted.
- **Camera:** right panel slow push +3 %; left panel drift up 20 px with the scan.
- **Grade / R:** R 0.30; saturation 0.5 → 0.7; her cyan and the HUD at full.
- **Out:** hard cut on the kick, f4314.
- **Art:** BG-tower, BOSS-1. **N09-wipe (new):** a half-body sticker, generated on its own at 1536×2048 (STYLE_BIBLE
  §4 rule 7), magenta ground, thin white die-cut border. "Head and shoulders, three-quarter facing left: the monocle
  eye nearest us and larger, the wide left sleeve on the near side. The back of her bare LEFT hand wipes across the
  corner of her mouth, the wide sleeve sliding down her forearm. A short dark grey smear of ink across her near cheek.
  Eyes sharp and half-lidded, looking past the viewer's left; one corner of her mouth lifting into a cocky smirk. The
  pearl-white bare right shoulder just visible on the far side. Hair a little dishevelled, ponytail falling forward
  over the far shoulder." Facing: three-quarter left. Hands: the left hand wipes; the sword is out of frame.

#### S09-23 · f4314–f4333 · 20 f · 143.80–144.43 s · bar 95.56–96.00
- **Music:** the kick returns at 143.81 (f4314); beat 4 f4323.
- **Lyric:** none.
- **Picture (back to front):** BG09-skyline `-far` and `-mid` below and beyond: the city's rooftops from storey 5,
  their boards red at R 0.30. Planted point-down along the ridges of those roofs, hundreds of resting swords (SW, 50–90
  px) glow as rows of cyan points. BG09-lowroof `-near` at the bottom left with her on it: F-sword_finger, h 200, feet
  (700, 760).
- **Action:**
  - f4314: swap to F-sword_finger (she rises from the landing crouch; the drawing stands 70 px taller), the left hand
    raised in the sword-finger sign. Full colour floods back from her outward (saturation 0.7 → 1.0 over f4314–f4318).
  - f4314: every sword in the city pulls free of its roof at once (a tiny cyan spark and a tile chip each).
  - They rise in tiers on the 8ths: f4314 the nearest ring, f4320 the next, f4325 the next, f4331 the farthest. Each
    tier lifts 200 px and turns point-up, then point-toward the dragon, the tips turning one frame apart.
  - f4323: the rising swords' glow lights her from below left (cyan rim 6 px).
- **Camera:** crane up with the swords, 220 px over the shot (ease-in); push 1.5 %/s.
- **Grade / R:** R 0.30, cut through by hundreds of rising cyan stars.
- **Out:** hard cut on the bar-96 downbeat, f4334.
- **Art:** F-sword_finger, SW (instanced), BG09-skyline, BG09-lowroof.

### Bar 96 · the sword chains

#### S09-24 · f4334–f4355 · 22 f · 144.47–145.17 s · bar 96.00–96.49
- **Music:** beats f4334 and f4345.
- **Lyric:** none.
- **Picture (back to front):** BG09-skyline `-far`; BG-tower at 0.75, centred x 1100 (storeys 2–11), the cloud
  ceiling at the top; five coils round it, the head (BOSS-2) at the top right below the cloud ceiling; the formation
  hovering in a wide arc on the left (about 600 SW at 40–70 px); her tiny on the storey-5 eave at the tower's left
  flank, F-sword_finger, h 90, feet (520, 880).
- **Action:**
  - f4334: volley 1: a line of 24 swords streaks from the formation to the lowest coil (white core, cyan body) and
    stitches through it into the tower in a straight line. Each sword stays where it hit, quivering for 3 f. The pinned
    rows turn ink-black and stop flowing. Hit-stop 2 (f4335–f4336). R 0.2875.
  - f4337–f4344: the dragon thrashes: its free coils whip (spline offsets ±40 px on the 8ths); the head roars
    soundlessly; glitch f4337–f4338.
  - f4345: volley 2 stitches the second coil. Hit-stop 2 (f4346–f4347). R 0.275.
  - f4348–f4355: the thrash continues above the black bands; glitch f4348–f4349.
- **Camera:** wide; push 1.5 %/s; shake S after each stop (f4337, f4348).
- **Grade / R:** R 0.2875 → 0.275.
- **Out:** hard cut on beat 3, f4356.
- **Art:** BG-tower, BG09-skyline, SW, BOSS-2, F-sword_finger.

#### S09-25 · f4356–f4378 · 23 f · 145.20–145.93 s · bar 96.49–97.00
- **Music:** beats f4356 and f4368.
- **Lyric:** none.
- **Picture:** medium on her on the lower roof: BG09-lowroof `-near`; the tower wall on the right with the third and
  fourth coils crossing it. Her: N09-finger_point, h 400, feet (820, 960).
- **Action:**
  - f4356: cut in on N09-finger_point, lunging 60 px to the right over the first 4 f (ease-out): she flings her
    sword-finger at the beast. Volley 3: 30 swords streak from behind the camera past her on both sides (the nearest
    300 px long and blurred) and stitch the third coil at the right edge into the wall. Hit-stop 2 (f4357–f4358).
    R 0.2625.
  - f4368: volley 4 fills the frame with streaks like a rain of light; the last pins hit the coil just below the neck.
    Hit-stop 2 (f4369–f4370). R 0.25.
  - f4371–f4378: red glyph dust rains down from the beast's scream above (the head out of frame); the pinned body is
    still.
- **Camera:** medium; a slight track right; push 1.5 %/s; shake S after each stop (f4359, f4371).
- **Grade / R:** R 0.2625 → 0.25.
- **Out:** hard cut on the bar-97 downbeat, f4379.
- **Art:** BG09-lowroof, SW. **N09-finger_point (new):** square 512 cell on the shared fight-sheet text. "Front view,
  facing the viewer. Her LEFT arm is thrust straight out toward the right side of the picture at shoulder height, the
  hand in the sword-finger sign (index and middle fingers straight together) pointing at the right edge, the wide
  sleeve hanging in a long drape below the outstretched arm. The sword is held point-down in her cybernetic RIGHT hand
  at her side (on the left side of the picture), its tip near her boot. Feet apart, chin up, a fierce shout. Ponytail
  and ribbon tails blown toward the left side of the picture." Facing: front. Sword hand: right.

### Bars 97–98 · up the pinned body, through the clouds

#### S09-26 · f4379–f4400 · 22 f · 145.97–146.67 s · bar 97.00–97.49
- **Music:** bar 97 downbeat; beat 2 f4390.
- **Lyric:** none.
- **Picture:** tracking side shot along a pinned coil rising at 12° (storeys 8–10): its rows ink-black and still, sword
  hilts sticking out of it every 90 px like a railing of cyan lights. BG09-wall behind, scrolling; the city far below
  through the gaps (BG09-skyline `-far`). Her: F-dash, h 300, rotated −10°, feet (600, 820).
- **Action:**
  - f4379: cut in running; the hilts flick past her.
  - f4385: whisker 1, `Error.stackTraceLimit = Infinity;` (64 px glyphs, cinnabar, on a wavy path), lashes down from the
    upper right across her path in an S over 3 f.
  - f4389: smear.
  - f4390: F-cut_down, 140 px further up the slope (feet 740, 790): the arc through the whisker at the `I` of
    `Infinity`; spark. Hit-stop 2 (f4391–f4392).
  - f4393–f4396: the halves (`Error.stackTraceLimit = ` and `Infinity;`) slide apart; f4397 white (local); f4398 ink
    burst; blots rain down the black coil.
  - f4399–f4400: she runs on (F-cut_down drifting 20 px up the slope).
- **Camera:** track; punch S on f4390 (back over 6 from f4393); push 1.5 %/s.
- **Grade / R:** R 0.25.
- **Out:** hard cut on beat 3, f4401.
- **Art:** F-dash, F-cut_down, BG09-wall, BG09-skyline, SW.

#### S09-27 · f4401–f4423 · 23 f · 146.70–147.43 s · bar 97.49–98.00
- **Music:** beat 3 f4401; beat 4 f4413.
- **Lyric:** none.
- **Picture:** higher, near the neck: the last pinned coil crossing the bottom, and beyond it the free neck rising red
  and flowing toward the cloud ceiling. Her: F-dash, h 320, feet (560, 840).
- **Action:**
  - f4401: cut in; F-dash.
  - f4407: whisker 2, `process.on('uncaughtException', recurse);`, swings in low from the right like a whip.
  - f4412: smear.
  - f4413: F-cut_up (feet 700, 800): the arc from lower left to upper right through the word `recurse`; spark. Hit-stop 2
    (f4414–f4415).
  - f4416–f4419: the halves slide apart.
  - f4419: on the stump a cursor `█` appears and tries to retype: `r`, `e` … and stops. It blinks twice (f4419–f4422)
    and goes dark: nothing calls the handler any more.
  - f4420: the cut halves go white (local); f4421 ink burst.
- **Camera:** track; punch S on f4413 (back over 6 from f4416); push 1.5 %/s.
- **Grade / R:** R 0.25.
- **Out:** hard cut on the bar-98 downbeat, f4424.
- **Art:** F-dash, F-cut_up, BG09-wall.

#### S09-28 · f4424–f4445 · 22 f · 147.47–148.17 s · bar 98.00–98.49
- **Music:** bar 98 groove: f4424, the 8th f4430, beat 2 f4435, the 8th f4441.
- **Lyric:** none.
- **Picture:** the free neck rising at 35° from the top pinned coil into the cloud ceiling; its rows red and flowing
  toward her. Above, the cloud ceiling's underside, red-lit at R 0.25. Her: N09-climb, h 320, feet (760, 780).
- **Action:**
  - f4424: N09-climb (150 px further up than at the end of S09-27).
  - Steps on the 8ths f4424, f4430, f4435, f4441: each stamps a cyan ring that **stays cyan** (no regrowth); a trail of
    patch rings runs down the neck behind her.
  - f4435: she reaches the cloud base: wisps (code ink-cloud, grey with a red underlight) stream down past her and the
    lens.
  - f4438–f4445: the cloud thickens into a moonlit grey fill (luminance ≤ 60 %, not a flash); she stays visible as a
    silhouette with a cyan rim.
- **Camera:** a steep rising track (the camera climbs 50 px per frame); push 1.5 %/s.
- **Grade / R:** R 0.25.
- **Out:** hard cut on the fill's first hit, f4446: out of the cloud.
- **Art:** N09-climb.

#### S09-29 · f4446–f4468 · 23 f · 148.20–148.93 s · bar 98.49–99.00
- **Music:** the fill 148.22–148.87 on 16ths f4446, f4449, f4452, f4455, f4458, f4461, f4463, f4466.
- **Lyric:** none.
- **Picture (back to front):**
  - BG09-sky `-far`: stars; thin high cloud streaks. Over it, PR06-moon (screen mode) upper left at (520, 260),
    300 px, paper-white with a faint cinnabar edge ∝ R (code).
  - BG09-sky `-mid`: the cloud sea at y 760 to the horizon, lit faintly red from below; the spire (BG-tower's top, its
    megastructure spire and needle antenna) piercing it on the left at x 300.
  - The neck surfacing from the cloud sea at x 1300; the head rising out of it.
  - Her: F-leap, h 260.
  - Code cloud wisps in front.
- **Action:**
  - f4446: F-leap bursts up through the cloud surface at (820, 900), rotated −12°, throwing up cloud spray (code
    ink-cloud puffs).
  - f4446–f4460: she rises to the apex (840, 360), ease-out, 2 afterimages along the path.
  - On every fill 16th a cloud puff bursts open on the cloud sea where the body surfaces (x 1150–1450).
  - f4452: the head rises out of the cloud sea on the right: BOSS-1 (facing left), 900 px, cloud streaming off its
    rows; whisker stumps (ink) at its jaw.
  - f4460 (148.68): the apex. She hangs (drift 4 px). The head turns head-on: BOSS-1 → BOSS-3 under a burst of cloud
    (f4459–f4461); BOSS-3 at (1300, 560), 800 px wide, jaws open.
  - f4461–f4466: the head draws back (scale 1.00 → 0.92) like a spring being wound; its rows climb the neck.
  - f4467–f4468: the eyes flare (local: 30 px cores, 180 px bloom): the tell.
- **Camera:** tilt up with her f4446–f4458 (240 px), then hold the apex framing with a 1.5 %/s push.
- **Grade / R:** R 0.25: the moon's faint red edge and the cloud sea's underglow.
- **Out:** hard cut on the bar-99 downbeat, f4469.
- **Art:** F-leap, BOSS-1, BOSS-3; PR06-moon. **BG09-sky (new):** 2560×1440, two layers, with the central tower
  BG-tower, attached. Prompt after the anchor: "Above the clouds at night: faint stars and thin high cloud streaks
  across the upper sky, no moon; below, a sea of clouds to a far horizon, faintly lit from beneath; the top of the
  attached tower, its megastructure spire and needle antenna, piercing the cloud sea on the left. Wide, eye level just
  above the cloud tops. Keep the centre and the right open." Layers: `-far` (stars, sky), `-mid` (the cloud sea and the
  spire). The moon is PR06-moon, composited per shot (G3), not painted into the plate. Near wisps and the high red
  cloud deck of bar 101 are code (ink-cloud noise layers).

### Bar 99 · the head-on clash

#### S09-30 · f4469–f4479 · 11 f · 148.97–149.30 s · bar 99.00–99.25
- **Music:** bar 99 downbeat (148.97).
- **Lyric:** none.
- **Picture:** her view. BG09-sky `-far` and `-mid` (the cloud sea below, the sky). BOSS-3 head-on charging the lens:
  the throat's glyph vortex, the rows of `^` fangs, the whisker stumps; cinnabar light flooding.
- **Action:**
  - f4469: the head launches. It grows from 600 px wide at the centre (960, 600) to 2600 px wide by f4479 (ease-in,
    overfilling the frame).
  - Radial ink-brush speed lines and cloud wisps streak outward from the centre.
  - f4476–f4479: the fangs fill the frame; the `^` glyphs are 180 px tall.
- **Camera:** steady (the head does the moving); push +2 %.
- **Grade / R:** R 0.25; the red floods the frame as it nears.
- **Out:** hard cut on beat 2, f4480 (the reverse shot and the impact).
- **Art:** BOSS-3 (shown large, up to 2600 px), BG09-sky.

#### S09-31 · f4480–f4490 · 11 f · 149.33–149.67 s · bar 99.25–99.49
- **Music:** beat 2, 149.34 (f4480).
- **Lyric:** none.
- **Picture:** the reverse, the dragon's view: her F-thrust at the lens, h 700, centred (960, 600), the tip and the ⏎
  crossguard nearest and largest, her fierce face above the arm. Behind her: BG09-sky `-far`, PR06-moon over her left
  shoulder at (1180, 300); stars. At the frame's edges, the dragon's fangs (`^`, 300 px, cinnabar).
- **Action:**
  - f4480–f4481: **IMPACT FRAME** (2 f): ink ground; her thrust silhouette inverted to paper; the fangs at the edges
    cinnabar; a paper-white crack running from the tip (960, 560) across the frame.
  - f4481–f4486: hit-stop 6, in colour from f4482. The tip touches a fang glyph `^` at the lens, with a cyan contact
    spark. A jagged cyan crack (white core 3 px, cyan glow 30 px) runs across the whole frame from the tip, as if the
    lens itself had split. Frozen.
  - f4487–f4490: the world resumes. The crack throws three branches; the fang glyphs shatter into fragments that fly
    past the lens; she is pushed back (scale 1.00 → 0.94).
- **Camera:** shake L from f4487 (16 px, 1.5° roll; cut off at f4491).
- **Grade / R:** R 0.25.
- **Out:** hard cut on beat 3, f4491.
- **Art:** F-thrust, BG09-sky, PR06-moon.

#### S09-32 · f4491–f4513 · 23 f · 149.70–150.43 s · bar 99.49–100.00
- **Music:** beat 3 f4491, beat 4 f4503 (150.09).
- **Lyric:** none.
- **Picture (back to front):** BG09-crown `-far` (the moonlit cloud sea and sky) and the crown roof as the ground on the
  left half, its upturned corner and the spire (BG-tower's megastructure spire and needle antenna) rising at x 300.
  The head on the right: BOSS-5 (thrown back, fangs broken), 1100 px, at (1350, 450). Her: N09-brace_side, h 260,
  sliding left along the ridge.
- **Action:**
  - f4491: cut in. The clash has thrown her back and down onto the crown roof. She slides back from feet (880, 860)
    toward (560, 860) (ease-out, stopping on f4502), boots
    scraping: 8 cyan-white spark streaks per frame from her heels, tiles flying (PR09-tile). The head recoils 80 px
    right and −8° up. Shattered fang glyphs `^` (40–90 px) tumble in the air between them.
  - f4502: she stops; squash 8 % for 3 f.
  - f4503: the tumbling fragments turn ink-black and burst; the blots arc down into the cloud sea. On each broken
    stump in the jaws a cursor `█` blinks once and dies: no regrowth.
  - f4504–f4511: she rebalances (the drawing drifts 10 px right); the head shakes itself, glitch on f4505–f4506.
  - f4512–f4513: the eyes flare (local): the tell for the lunge.
- **Camera:** wide, side, at her chest height; push 1.5 %/s; shake S on f4503.
- **Grade / R:** R 0.25.
- **Out:** hard cut on the bar-100 downbeat, f4514.
- **Art:** PR09-tile. **N09-brace_side (new):** square 512 cell on the shared fight-sheet text. "Right-facing (the
  cybernetic right arm near), skidding backward toward the left edge in a deep braced lunge: the front knee bent, the
  back leg straight and dragging, both boots scraping. The sword is thrust forward at shoulder height toward the right
  edge in the cybernetic RIGHT hand, the blade level; her bare left hand grips her right wrist to brace it, the wide
  sleeve flapping forward. Gritted teeth, narrowed eyes. Ponytail and ribbon tails flung forward over her shoulders."
  Facing: right. Sword hand: right (left hand bracing the wrist). **BOSS-5 (new):** cell 5 of the second boss sheet:
  "the head and the start of the neck in profile facing the left edge, thrown back and up by a blow from below: the
  head tipped back about 40°, jaws gaping, several fangs broken off short, the eye rolled up, whiskers and mane flung
  forward over the head, the neck stretched in a long curve." BOSS-5 shown large (1100 px). **BG09-crown (new):**
  2048×1152, two layers, a close view of BG-tower's top, generated with BG-tower attached. Prompt after the anchor:
  "The topmost roof of the attached pagoda tower just above a sea of clouds at night: the tiled ridge of the highest
  eave crosses the lower quarter as the ground; its upturned corner and the foot of the tower's megastructure spire
  with its needle antenna rise on the left; beyond, a moonlit sea of clouds to the horizon under a vast night sky, no
  moon in the picture. Side view at the chest height of
  someone standing on the ridge. Keep the right half open." Layers: `-far` (clouds and sky), `-near` (the ridge, the
  corner and the spire, on magenta).

### Bar 100 · the uppercut

#### S09-33 · f4514–f4535 · 22 f · 150.47–151.17 s · bar 100.00–100.49
- **Music:** bar 100 downbeat f4514; beat 2 f4525 (150.84).
- **Lyric:** none.
- **Picture:** side medium on the crown roof (BG09-crown). Her: F-low, h 320, feet (620, 900). The head (BOSS-1, jaws
  closed, its fang rows gapped) lunging in low from the right at roof height.
- **Action:**
  - f4514: F-low (a 20 px recovery hop out of the brace, landing squash 12 % on f4517), then an 8 % anticipation squash,
    pulled back 16 px.
  - f4514–f4524: the head lunges in low: centre (2000, 820) → (1150, 840); from f4520 the jaws open (BOSS-1 → BOSS-2
    under a 1-frame ink-smoke smear).
  - f4524: smear, rising.
  - f4525: F-cut_up (feet 700, 880; 80 px right and up): the arc from (560, 960) to (1000, 340) catches the head under
    the jaw at (930, 720); spark. Hit-stop 3 (f4526–f4528); glitch on f4526–f4527 (its rows scatter).
  - f4529: the head is thrown up and back: swap to BOSS-5, moving up 400 px and right 120 px over f4529–f4535
    (ease-out), the neck stretching after it.
- **Camera:** punch M on f4525 (back over 8 f from f4529); tilt up from f4530 following the head (80 px); push.
- **Grade / R:** R 0.25.
- **Out:** hard cut on beat 3, f4536.
- **Art:** F-low, F-cut_up, BOSS-1, BOSS-2, BOSS-5, BG09-crown.

#### S09-34 · f4536–f4558 · 23 f · 151.20–151.93 s · bar 100.49–101.00
- **Music:** beat 3 f4536 (151.215); beat 4 f4548 (151.59).
- **Lyric:** none.
- **Picture:** wider, rising: BG09-sky `-far` (PR06-moon upper left), `-mid` (the cloud sea dropping away at the
  bottom). The head BOSS-5 tumbling up on the right at (1180, 330), 850 px; the stretched neck from the bottom right.
  Her: F-leap, h 240.
- **Action:**
  - f4536: F-leap from (700, 900), rising to (860, 380) by f4556 (ease-out), rotation −14° → −4°, 2 afterimages. The
    crown roof drops out of the bottom of the frame.
  - f4536–f4547: the head reaches the top of its throw.
  - f4548: the crossover: she rises past the head's level. Its eye-point slides 20 px toward her, following her.
  - f4548–f4558: the head falls back below her (300 px down), the neck bending into an arch as it falls: from the cloud
    sea near the spire on the left, up to a peak, and down to the head on the right.
- **Camera:** tilt up with her f4536–f4552 (300 px), then level with her; push 1.5 %/s.
- **Grade / R:** R 0.25.
- **Out:** hard cut on the bar-101 downbeat, f4559.
- **Art:** F-leap, BOSS-5, BG09-sky, PR06-moon.

### Bar 101 · the gathering (the fill)

#### S09-35 · f4559–f4580 · 22 f · 151.97–152.67 s · bar 101.00–101.49
- **Music:** the fill, the whole bar: 16ths f4559, f4562, f4565, f4567, f4570, f4573, f4576, f4579.
- **Lyric:** none.
- **Picture:** medium, level with her, against the sky: BG09-sky `-far` (PR06-moon at (620, 300), to the left of her
  blade). Above her, the high red cloud deck (code ink-cloud layer, lit cinnabar from below at R 0.25). Her:
  F-charge, h 440, centre (960, 560), the sword straight overhead.
- **Action:**
  - f4559: F-charge (she rises 30 px more and hangs, drifting up 0.5 px per frame).
  - On every 16th a group of 12–20 swords streaks up from the bottom edge (the swords leaving the coils far below,
    which stay black) and converges into her blade. Each arrival steps the blade's inner code light up (+20 % per four
    groups) and throws a ring of tiny sparks at the ⏎ guard.
  - f4570 (beat 2): the cloud deck above begins to part: a circular hole opening round her (radius 0 → 300 px by
    f4580), its rim a soft line of light (paper core, cyan glow).
- **Camera:** level with her; push 1.00 → 1.05.
- **Grade / R:** R 0.25.
- **Out:** hard cut on beat 3, f4581.
- **Art:** F-charge, SW, BG09-sky, PR06-moon.

#### S09-36 · f4581–f4603 · 23 f · 152.70–153.43 s · bar 101.49–102.00
- **Music:** the fill's second half: 16ths f4581, f4584, f4587, f4590, f4593, f4596, f4598, f4601.
- **Lyric:** none.
- **Picture (back to front):**
  - BG09-sky `-far` and `-mid`: the spire piercing the cloud sea on the left at x 220.
  - The red cloud deck parted in a ring of light round her: radius 380 px, centre (900, 360), the rim glowing.
  - The neck: out of the cloud sea near the spire, rising to a peak at (600, 760) and descending to the head on the
    right.
  - The head: BOSS-6 (seen from above, roaring up at her), 520 px, at (1180, 820), its jaws turned up toward her.
  - Sword streams rising from the cloud sea all along the bottom, converging on her.
  - Her: F-charge, h 150, centre (900, 360), small and centred in the ring.
- **Action:**
  - f4581: cut in; the sword streams continue on every 16th.
  - f4581–f4600: the head roars up at her: a column of `RangeError…` glyphs rises from its jaws toward her and burns
    into ink flakes where it meets the ring's light.
  - f4590: the ring widens (380 → 520 px); soft light rays (paper at 15 %) fall through it onto her.
  - f4596, f4598, f4601: the last three groups arrive. On f4601 the blade is full: a cyan gleam slides along it
    (local).
  - f4602: she tips forward (rotation 0 → +6°): the dive begins.
  - f4603: smear, straight down (the wind-up for stab 1).
- **Camera:** wide, level with her; slow push 1.00 → 1.04 on her; she reads as a silhouette against the ring.
- **Grade / R:** R 0.25; the ring is the cleanest light of the film so far, the cloud sea faintly red beneath.
- **Out:** hard cut on stab 1, f4604.
- **Art:** F-charge, SW, BG09-sky. **BOSS-6 (new):** cell 6 of the second boss sheet: "the head seen from above and in
  front, as if by someone hovering over it: jaws wide open, roaring straight up toward the viewer, the open mouth and
  throat nearest, the horns and mane spreading behind, the neck receding downward and away, strongly foreshortened,
  symmetrical."

### Bar 102 · 回车三连 #4, the kill

#### S09-37 · f4604–f4611 · 8 f · 153.47–153.70 s · bar 102.00–102.18
- **Music:** stab 1 (soft), 153.465 (f4604), 16th 0 of the 3+3+2 figure.
- **Lyric:** none.
- **Picture:** medium-wide, side: the neck's arch peak across the bottom centre (the body ribbon 300 px thick here, the
  spine ridge `4 2 : 7` along its top); BG09-sky `-far` and `-mid` behind; the head (BOSS-6) partly in frame at the
  lower right, jaws up.
- **Action:**
  - f4604: F-cut_down lands on the arch peak (feet 900, 760), h 300. The arc from upper left to lower right cuts
    across the neck: **cut 1** hangs as a glowing cyan line across the rows, sparks crawling along it. The rows on
    either side do not part (a hanging cut). Hit-stop 2 (f4605–f4606).
  - f4607–f4611: the cut hangs; the arc erodes; the head whips round toward her.
  - f4610–f4611: the eyes flare (local): the tell for the snap.
  - f4611: smear, rising.
- **Camera:** punch S on f4604 (soft; back over 6 f from f4607); push.
- **Grade / R:** R 0.25.
- **Out:** hard cut on stab 2, f4612.
- **Art:** F-cut_down, BOSS-6, BG09-sky.

#### S09-38 · f4612–f4620 · 9 f · 153.73–154.00 s · bar 102.18–102.38
- **Music:** stab 2, 153.746 (f4612), 16th 3.
- **Lyric:** none.
- **Picture:** medium: the head snapping up at her from the right (BOSS-2 rotated −35°, jaws toward her), 1000 px; her
  on the arch; PR06-moon behind.
- **Action:**
  - f4612: F-cut_up (feet 990, 700; 90 px right and up), h 300. The arc from lower left to upper right across the lower
    jaw at (1120, 560): **cut 2** hangs across the jaw; spark. Hit-stop 2 (f4613–f4614).
  - f4615–f4617: the head is knocked down and spun round by the blow: rotating −35° → +25°, moving 260 px down and
    right; glitch on f4615 (rows scatter); swap to BOSS-8 **mirrored** (facing right, hanging, snout down-right) on
    f4616.
  - f4617–f4620: the camera whips right along the neck (brush blur, 4 f), landing on f4621.
  - f4620: she vanishes. The issen streak runs from her spot down the arch of the neck to the crown of the hanging head
    (white core 4 px, cyan body 18 px, glow 60 px, tapered, 16 parallel brush lines round it).
- **Camera:** punch M on f4612 (back from f4615, cut short by the whip); the whip f4617–f4620.
- **Grade / R:** R 0.25.
- **Out:** the whip lands on f4621 in S09-39.
- **Art:** F-cut_up, BOSS-2 (shown large, 1000 px); PR06-moon. **BOSS-8 (new):** cell 8 of the second boss sheet:
  "the head and the start of the neck in profile facing the left edge, stunned and hanging: tilted snout-down about
  20°, jaws slightly slack, the eye half closed, mane drooping, the broad flat crown between the horns clearly
  drawn." Mirrored in code here (text laid in
  after the flip).

#### S09-39 · f4621–f4625 · 5 f · 154.03–154.17 s · bar 102.38–102.49
- **Music:** stab 3, 154.028 (f4621), 16th 6.
- **Lyric:** none.
- **Picture:** medium-wide: the hanging head (BOSS-8 mirrored) in the lower right, snout pointing down-right, its crown
  at (1160, 650); the neck running up-left out of the frame toward the arch peak; the streak lying along the neck from
  the top left corner area (outside the watermark corner) to her; BG09-sky behind.
- **Action:**
  - f4621: F-issen at the end of the streak, standing on the crown (feet 1160, 650), h 280, facing right; 3 cyan
    multiples along the path fading over 4 f. Along the whole neck a 1–2 px white hairline: **cut 3**, hanging. Spark
    at her boots. Hit-stop 1 (f4622).
  - f4623–f4624: she holds the issen with a small smirk (painted); all three hanging cuts glow brighter together.
  - f4625: smear: her silhouette sweeping from the lunge up to upright (the plant's wind-up).
- **Camera:** lands from the whip on f4621; push.
- **Grade / R:** R 0.25.
- **Out:** hard cut on stab 4, f4626, onto the impact frame.
- **Art:** F-issen, BOSS-8 (mirrored), BG09-sky.

#### S09-40 · f4626–f4635 · 10 f · 154.20–154.50 s · bar 102.49–102.71
- **Music:** stab 4, 154.215 (f4626), 16th 8: the kill. (154.59 and 154.78, the plumes, fall in part 10.)
- **Lyric:** none.
- **Picture (back to front):**
  - BG09-sky `-far`; PR06-moon upper left at (420, 220); the ring of light still open above her (centre (960, 200),
    radius 520, mostly above the frame).
  - BG09-sky `-mid`: the cloud sea, with a break in it below the head through which the tower's flank and the descending
    coils show (BG-tower crop: black pinned bands and the last red rows spiralling down).
  - The neck arching from the cloud sea at the spire (x 250) up to the peak (520, 420) and down to the head.
  - The head: BOSS-8 mirrored, its crown under her feet, the snout down-right at (1350, 820).
  - Her: F-enter, h 260, feet (960, 600), the sword planted in the crown, both hands on the pommel.
- **Action:**
  - f4626–f4627: **IMPACT FRAME** (2 f): ink ground; her F-enter silhouette inverted to paper; the head, the neck and
    the visible coils as one cinnabar silhouette; a paper-white flat ring (the keypress ripple) at the plant point;
    radial brush lines. On f4626 the whole frame dips 6 px (y +6) like a key pressed down.
  - f4627–f4632: hit-stop 6, in colour from f4628. The ⏎ crossguard flares cyan in the shape of ⏎; the ripple ring
    hangs at 200 px; the three hanging cuts blaze white-cyan; the rain hangs; the frame stays 6 px down.
  - f4633: the world resumes.
    - The frame springs back up (6 px → 0 by f4635, ease-out, 1 px overshoot).
    - All three cuts go off at once: the rows along them split and burst into ink: cut 1 at the arch peak, cut 2 across
      the jaw, cut 3 as a seam of ink bursting along the whole neck.
    - The keypress ripple expands from the crown (200 → 900 px by f4635) and starts rolling down the neck as a cyan
      band.
    - **The stack unwinds** from the head toward the tail: f4633 the top row `RangeError: Maximum call stack size
      exceeded` bursts into ink; f4634 the next 2 rows; f4635 the next 4.
    - **R 0.10:** the cloud sea's red underglow drains toward neutral; the moon's cinnabar edge fades to paper.
  - f4634–f4635: ink rain begins: the first blots from the bursts fall through the frame (closed-form particles,
    gravity).
- **Camera:** punch L on f4626 (+8 % over 2 f), held through the stop and easing back over 10 f from f4633. From f4633
  a slow pull back and down: scale −0.6 % and 4 px down per frame (it runs on into part 10 if part 10 keeps it).
- **Grade / R:** R 0.25 until f4632; **R 0.10** from f4633.
- **Out:** part 10's own cut at f4636 (A6 heartbeat). Nothing is left half-drawn: the unwinding, the ripple and the
  ink rain are continuous processes part 10 can show or leave.
- **Art:** F-enter, BOSS-8 (mirrored), BG09-sky, BG-tower (crop), PR06-moon.

---

### State out (f4636, hand-off to part 10)

- **Her:** F-enter on the crown of the dragon's hanging head, feet (960, 600), h 260, facing us, both hands on the
  pommel, the sword planted in the crown (so part 10's "SW upright before her" can be this same sword). Above the cloud
  sea; PR06-moon upper left; the ring of light open above her.
- **The dragon:** dead. The three cuts burst on f4633; the keypress ripple (900 px) is rolling down the neck toward the
  cloud sea; the stack is unwinding from the head toward the tail at about 4 rows per frame (the head's top 7 rows are
  ink). Still to come in part 10, if it shows them: the big plumes on 154.59 (f4638) and 154.78 (f4643), and the tail
  tip `at main (jianghu.js:1:1)` bursting last on 154.95 (f4648), after which the head is the bare ink painting
  (BOSS-8) that can bleed into the Bridge's ink wash.
- **Ink rain:** started f4634.
- **R:** 0.10 (from f4633).
- **Camera:** punch L easing back (about +5 % left of the 8 %, 7 f of ease to go); the 6 px key dip sprung back to 0
  on f4635; a pull back and down running since f4633 (−0.6 % scale and 4 px down per frame).
- **On screen:** no lyric; no HUD; the cursor (you) has not appeared in this part.

### Art in this part

**Registry drawings (her):** F-guard, F-back, F-low, F-cut_up, F-face, F-leap, F-dash, F-cut_down, F-dash_l,
F-cut_down_l, F-blasted, F-landing, F-sword_finger, F-thrust, F-charge, F-issen, F-enter. **SW** (instanced: the city's
swords and the volleys).

**New drawings (her), never mirrored.** Suggested as one sheet "N09" (3:2, 3 × 2, square 512 cells, the shared fight-sheet
text, the approved 00 sheet attached): N09-guard_front, N09-climb, N09-fall_open / N09-finger_point, N09-brace_side, and a
spare second take of N09-climb. N09-wipe is a separate half-body generation (1536×2048).
- **N09-guard_front (new)** · front · sword horizontal in the right hand, left palm on the flat · S09-02.
- **N09-climb (new)** · right-facing · right hand · running up a 35° slope · S09-11, S09-28.
- **N09-fall_open (new)** · right-facing, airborne · right hand · turning over in the fall, eyes open · S09-20.
- **N09-wipe (new)** · head and shoulders, three-quarter left · left hand wipes her mouth · S09-22.
- **N09-finger_point (new)** · front · sword point-down in the right hand, left arm thrust to screen-right · S09-25.
- **N09-brace_side (new)** · right-facing · right hand, left hand bracing the wrist · sliding back · S09-32.

**Dragon:** BOSS-1 (S09-03 mirrored, S09-04, S09-17, S09-18, S09-22, S09-29, S09-33), BOSS-2 (S09-01, S09-15, S09-16,
S09-18, S09-19, S09-24, S09-33, S09-38), BOSS-3 (S09-29, S09-30), BOSS-4 (S09-06…08). **New, one 2×2 sheet in the
boss conversation (same prompt frame as fight-design §10.4, BOSS-1…4 attached):** "Landscape 3:2, a 2 × 2 grid. Four
more studies of the same Chinese dragon as the attached sheet, painted in monochrome Chinese ink wash with bold wet
brush strokes and dry-brush texture, deep black to pale grey, only black ink on a plain flat white background, each
study centred with white space around it:" then cells 5–8 as defined at first use:
- **BOSS-5 (new)** · thrown back, fangs broken · S09-32, S09-33, S09-34.
- **BOSS-6 (new)** · seen from above, roaring up · S09-36, S09-37.
- **BOSS-7 (new)** · the eye, extreme close-up · S09-05.
- **BOSS-8 (new)** · stunned, hanging, the crown clearly drawn · S09-38…S09-40, mirrored in all three; the bare
  painting part 10 can bleed into ink.
- Close the prompt with "No text, seals, signatures or frames."

**Backgrounds (STYLE_BIBLE §5 anchor + the prompt at first use; all new except BG-tower):**
- **BG-tower** (shared; part 08's definition, replaces BG09-tower) · 1440×2560 cut-out on magenta · S09-03, S09-22,
  S09-24, S09-40 (crop).
- **BG09-roofs** · 2560×1440 · `-far`, `-mid`, `-near` · the central tower BG-tower, attached · S09-01, S09-03
  (`-near`), S09-06, S09-09.
- **BG09-roofs_rev** · 2048×1152 · `-far`, `-near` · S09-02 (the tower is behind the camera).
- **BG09-skyline** · 2560×1440 · `-far`, `-mid` · the central tower BG-tower, attached (composited as its own layer) ·
  S09-03, S09-04, S09-10, S09-16, S09-19, S09-23, S09-24, S09-26.
- **BG09-wall** · 1152×2048, tiles vertically · a close view of BG-tower, generated with it attached · S09-10…S09-16,
  S09-19, S09-26, S09-27.
- **BG09-lowroof** · 2048×1152 · `-far`, `-near` · a close view of BG-tower, generated with it attached · S09-20,
  S09-21, S09-23, S09-25.
- **BG09-crown** · 2048×1152 · `-far`, `-near` · a close view of BG-tower's top, generated with it attached · S09-32,
  S09-33.
- **BG09-sky** · 2560×1440 · `-far`, `-mid` · the central tower BG-tower, attached; no moon painted in · S09-29…S09-31,
  S09-34…S09-40.

**Props:** **PR09-tile (new)** (512×512 on magenta; debris) · S09-01, S09-03, S09-06, S09-09, S09-21, S09-32.
**PR02-lantern** (part 02; replaces PR09-lantern, the same hexagonal palace lantern) · S09-10.
**PR06-moon** (part 06; screen mode) · S09-29, S09-31, S09-34, S09-35, S09-38, S09-40.

**Code only (no art):** part 08's speech-bubble chain, carried over and torn into ink (S09-01); the dragon's body,
whiskers, eyes, growth, roar, shock rings, glyph snow, pinning, deaths and unwinding; slash arcs, smears, multiples,
streaks, sparks, speed lines, ink, crater and keypress rings; HUD brackets and lines; the panel borders; the cloud
ceiling, wisps, cloud sea spray and the red cloud deck with its ring of light; rain; the cyan crack; the ⏎ flare; the R
grade and the signboard text.

### Self-check

- **Tiling:** 40 shots from f3929 to f4635, each starting on the frame after the previous one ends (checked by script):
  707 frames, no gap, no overlap.
- **Rulings:** G6 (08→09): part 08's three bubbles hold at x 272–1016, y 62–544 on the lyric layer through the blast
  (legible to f3937), rattle with the shake from f3936 and are torn into ink f3936–f3946 (S09-01). G1: no attack
  payloads; the dragon is a real RangeError, its stack rows and the two lines of code that cause it, and the boards
  carry only error lines and status codes. G2: the tower is BG-tower; the plates that show it attach it. G3: lanterns
  are PR02-lantern, the moon is PR06-moon. G7: "shown large" marks every registry drawing over 900 px.
- **Impact frames:** f3929, f4244, f4480, f4626 (as in fight-design §2.2: 130.965, 141.465, 149.34, 154.215). Spacings
  315, 236 and 146 frames, all far above 0.34 s (10.2 f); never more than one per second. No other big flash: the six
  eye flares, the white-outs of cut halves, the blade gleam, the ring of light and the cloud fill are local or slow.
  The nearest local light to an impact frame is the f4236–4237 eye flare (7 f before f4244), kept to a 40 px core.
- **Hit-stops keep the beat:** every stop ends before the next event: 3935 < 3940 · 3942 < 3951 · 4033 < 4041 ·
  4218 < 4222 · 4292 < 4300 · 4336 < 4345 · 4347 < 4356 · 4358 < 4368 · 4370 < 4379 · 4392 < 4401 · 4415 < 4424 ·
  4486 < 4491 · 4528 < 4536 · 4606 < 4612 · 4614 < 4621 · 4622 < 4626 (smear on 4625) · 4632 < 4636. The bar-94 slow
  motion remaps the world only; her fall and every swap are placed on song frames.
- **Transitions:** hard cuts on hits; one whip transition (f4617–4620 into S09-39; the whips f4008–4010 and
  f4098–4101 are camera moves inside their shots); panel slams (f4075, f4300). No glitch, RGB split or rotation
  transitions; glitch appears only on the dragon's rows (f4008, f4034, f4337, f4348, f4505, f4526, f4615), never across
  a cut.
- **Every hold moves:** each shot has a push, track, crane, tilt or drift of at least 1.5 %/s, plus breathing and the
  world's motion; the only stills are the listed hit-stops.
- **Her:** never mirrored; left-facing beats use F-dash_l and F-cut_down_l, with the sword changing hands only across
  smear frames (f4164, f4175, f4187, f4204). Standing drawings rotate ≤ 10° (F-dash −8°/−10°, cut_down ±8°); only
  airborne ones rotate further (F-leap, F-guard in the air, F-blasted, N09-fall_open). Camera at her chest height
  throughout; no shot looks up at her.
- **Swap rate:** 43 swaps in 23.6 s (1.8 per second); the peak is bar 92 (8 swaps in 1.5 s, 5.3 per second); no two
  swaps closer than 5 f (the 8th note rounded down: bar 92 and the stab figure's f4621 → f4626). Every drawing is on
  screen at least 5 f.
- **No text in generated art:** every prompt above ends in or follows the anchor's "No text"; all words are code.
- **R:** 0.15 to f4243 · rings 0.17 / 0.20 / 0.24 / 0.27 on f4244 / 4252 / 4264 / 4267 · 0.30 from f4278 · 0.2875 /
  0.275 / 0.2625 / 0.25 on the volleys f4334 / 4345 / 4356 / 4368 · 0.25 to f4632 · 0.10 from f4633.
