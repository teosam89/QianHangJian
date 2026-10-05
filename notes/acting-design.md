# 千行剑: the chibi outside the fights, and the stickers to generate

Sources: `song.md`, `song/timeline.json` (bar b starts at 0.465 + 1.5·b s), `STYLE_BIBLE.md` §3, §4, §8, `prompts/character.md`, `prompts/feeding.md`, `PROGRESS.md`, `../tokentoken/DESIGN.md`, `STORYBOARD.md`, `prompts.md`. This covers every non-fight moment. Drop 1 (60.46–84.04) and Drop 2 (130.97–154.54) belong to the fight design, and the hand-overs are marked. The lyrics are a separate layer. Each row below only says what the sticker does.

## 0. Rules this design follows

**Facing convention, so that no non-fight drawing has to be made twice**
- **Action goes toward screen-right**: travelling, commanding the sword formation, the ready stance. This facing shows her cybernetic right arm and her sword hand. The red tide comes from screen-right.
- **Talking and teasing face front, or three-quarter toward screen-left**: smug, tsundere, the HUD scan, the reference heads. This facing shows the monocle and the wide sleeve.
- Under this rule, no non-fight sticker needs a second facing. If a fight beat needs her to travel toward screen-left, the fight sheet draws that pose. Code flips nothing, and that includes the sword: its return-key hook would turn round.

**Asymmetry card.** Use this check on every cell after generation.

| Facing | Monocle (HER LEFT eye) | Cybernetic arm (HER RIGHT, bare shoulder) | Wide sleeve (HER LEFT arm only) |
|---|---|---|---|
| Front | eye on screen-right | screen-left | screen-right |
| 3/4 toward screen-left | near (larger) eye | far side, partly hidden | near side |
| 3/4 toward screen-right | far eye, small; the frame or mic may show | near side, bare shoulder visible | far side, behind her |
| Back | frame over the ear on screen-left | screen-right | screen-left |

**Where the sword is when she isn't holding it.** She is a sword spirit, so the sword floats beside her and bobs slowly. It is its own layer, drawn once as sticker D4. This gives code the sword to work with on its own: the rusty look in Verse 2 (a code treatment), the ink dissolve in the Bridge, the sword leaning on your monitor in the Outro, and a possible sprite for the chorus formation.

**"You" are the cursor.** Before the Bridge, the only sign of the viewer is a white mouse cursor drawn in code. It pats her head in Hook 2, which sets up 「才不是为了你才修的！」. The Bridge then shows who owns that cursor.

**She stays inside the screen until the Outro.** In the Bridge she is still inside your monitor (palms on the glass). She climbs out only in the Outro, which is what "has become a desktop pet" shows.

**Drawn in code, never painted:** every slash arc, trail, smear, glint and glow halo; the cursor; the glass; blush lines, steam, sweat and anger marks; the rain, the frozen drops and the 0/1s; the flower; threads; HUD reticles; the heartbeat line; the PASS lines; the rust; the ink dissolve; the seal; and all text.

**Pace.** Outside the fights, swaps land on beats or syllables, about one drawing change every 1 to 4 beats (0.375–1.5 s), and faster in the double-time lines. Motion comes from squash and stretch, hops, small tilts and sways on the beat. The camera moves in every shot, so 哼 is a push-in, not a freeze.

---

## 1. Line by line

Sticker ids are listed in §2. "R0 head" means an expression head from the reference sheet, used as a tight insert.

### Intro (0.00–12.47)

| Time | Moment | What the chibi does | Stickers |
|---|---|---|---|
| 0.00–0.30 | first frame, black | She hangs in the black, lit only by her own cyan glows, sword raised for a cleave. This is the strongest image, so the film opens on it. | D1 |
| 0.30 | first suona hit | She cleaves. The black splits along her cut (upper right to lower left), and the halves fall away onto the red city. | D2 |
| ~1.5–4.04 | hand-over | She stands on a pagoda ridge facing the red city and glances back at us with a smirk. | B1 |
| 4.04 | accent | She twirls the sword as the title 「千行剑」 slams in with its seal. | B2 |
| 6.29–9.47 | accent | She touches her monocle and HUD reticles lock onto towers of red stack traces across the city. | A9 |
| 9.47–12.04 | bars 6–7 | She sits on the edge of the ridge with her back to us, the sword floating beside her, as rain begins. | C6 + D4 |

### Verse 1

| Time | Line | What the chibi does | Stickers |
|---|---|---|---|
| 12.04–13.90 | 霓虹淋雨 夜城不眠 | Still sitting with her back to us. The rain is falling log lines (`tail -f`), grey with red errors in them. On 不眠 the city's windows blink like server LEDs. | C6 |
| 15.00–16.90 | 全息灯下 剑影翩翩 | Under holographic lanterns that are floating terminal windows, she twirls her sword. Code afterimages (剑影) peel off on 翩 (16.26) and 翩 (16.50). | B2 |
| 17.88–20.22 | 义体之中 心跳未断 | She lays her cybernetic hand on her heart. A heartbeat line (health-check pings) runs through her arm seams on every kick. On 断 (19.74) a red flatline tries to cut in and the pulse beats it back. | A6 |
| 20.88–23.22 | 一念编译 万码翻卷 | Two fingers on her monocle: the HUD runs a compile in two beats on 编译. On 万码翻卷 a handscroll of code unrolls across the sky. | A9 |
| 24.04–25.88 | 黑客如潮 破墙来犯 | The firewall is the city wall. She peeks over its battlement at the red tide of stack traces rushing in; the camera rides with the tide. On 破墙 (24.84) the wall cracks and she ducks out of sight with a squash. | C4 |
| 26.94–29.06 | 数据深处 刀光正寒 | The camera dives through layers of table rows like ink strata. At the bottom she waits in a low stance. On 刀光 (27.90) a cold glint runs down her blade, and on 寒 frost spreads. | D3 |
| 29.82–32.22 | 芯片刻下 侠义二字 | On a giant chip die standing like a jade stele, she kneels and carves with her sword point. 侠 (30.66) and 义 (31.32) cut in on their syllables. | B3 |
| 32.52–35.26 | 一键回车 斩尽万般 | A giant Enter keycap, shaped like her crossguard, rises from the street. She stomps it on 回车 (32.94). On 斩 (33.72) a horizontal cyan wave sweeps the street, cuts the red text in half, and the city's red drops one step. | B4 |

### Pre-Chorus 1 (Pre-Chorus 2 is the same at +69.0 s)

| Time | Line | What the chibi does | Stickers |
|---|---|---|---|
| 35.90–38.40 | 电流穿过 万籁俱静 | She holds her sword upright with her eyes closed, and current climbs her arm seams into the blade. On 万籁 (37.44) the rain freezes mid-air and the colour drains. | B5 |
| 38.88–41.28 | 零与一间 胜负已定 | 0s and 1s drift among the frozen drops. On 定 (40.80) her eyes open and every drop turns cyan at once. | B5 → B6 |

In Pre-Chorus 2 (104.90–110.30) the stickers are the same, swapping on 定 at 109.86. The sword is the reforged one, with a brighter code glow, and the camera orbits instead of pushing in.

### Chorus 1 (Chorus 2 at +69.0 s; Final Chorus at +130.5 s with the changes below)

WebGL station journey, one set piece per line. The stickers are planes in the scene.

| Time | Line | What the chibi does | Stickers |
|---|---|---|---|
| 41.84–43.98 | 千行剑 破长夜 | She rides her own sword at the head of the thousand-sword formation, heading into the dark. | B7 |
| 43.98–45.54 | 光速斩尽红字劫 | On 斩 she thrusts out two fingers in the sword-finger gesture. The formation lances forward at light speed through hanging banners of red stack traces, and the red recedes. | B8 |
| 45.54–47.88 | 千行剑 落如雪 万般漏洞皆可解 | On 落 she throws both arms up and the formation bursts into a snowfall of tiny swords (雪 46.08). Through 万般漏洞皆可解, each flake lands in a bug hole in a cracked wall of code and seals it, one per syllable. | C7 |
| 47.90–49.44 | 赛博江湖 谁做主 | The formation rings her like a throne. On 主 (49.20) she plants her sword and thumbs her own chest. | C8 |
| 49.44–51.04 | 一行代码定生灭 | She points, and the formation snaps into one straight line of code across the sky. It sweeps toward screen-right, and everything it passes turns cyan. | B8 |
| 51.04–53.32 | 千行剑 千行剑 | On the second 千行剑 (51.90) the formation fuses into one giant sword, raised in her hands. | D1 |
| 53.32–54.47 | 一剑劈开数据界 | Slam on 劈: she cleaves the data world in two, the same image as the opening. | D2 |

### Hook 1 and 「哼，就这点报错？」 (54.47–60.46)

| Time | Moment | What the chibi does | Stickers |
|---|---|---|---|
| 54.47 | suona hook | The two halves of the world drift apart and red text pours into the gap. She twirls her sword. | B2 |
| 55.97 | bar 37 | She glances back at us over her shoulder. | B1 |
| 57.47–59.10 | bar 38 | The camera pushes in. She has the sword on her shoulder, half-lidded and smug. | A1 |
| 59.10 | 哼 | A tight insert on the smug head while the push continues. | R0 smug head |
| 59.54–60.46 | 就这点报错？ (stab 59.54) | She flicks the last red error glyph off her blade and it bursts into ink. The fight design takes over at 60.46. | A1 |

### Verse 2 (84.04–104.00; double-time from 96.47)

| Time | Line | What the chibi does | Stickers |
|---|---|---|---|
| 84.04–85.88 | 有人笑我 旧剑已钝 | Faded VHS grade on an old CRT. Red review comments (`deprecated`, `lol`) jeer around her sword, which looks rusty. She pulls an akanbe at them on 钝. | A4 + D4 (rust in code) |
| 86.66–89.24 | 上个世纪 招式无人问 | She sits alone with her back to us on the edge of the CRT. Next to her an old manual page (`man jian`) gathers dust and a cobweb. Nobody comes. | C6 |
| 89.74–92.50 | 我偏要 重写内核 | On 偏要 she springs up and rolls up her wide sleeve. The VHS grade snaps to full colour on 要 (90.24), and the kernel opens in the ground like a forge. | A8 |
| 92.52–94.50 | 一夜之间 | Time-lapse: the moon arcs over in two beats while she kneels and engraves new code into her blade. | B3 |
| 94.50–95.88 | 重构乾坤 | The city blocks refactor into new places, and she raises the reforged sword to the sky. | B9 |
| 95.88–97.58 | 算力如雨 版本如风 | From the hit at 96.47 she rides her sword through a downpour of chip dies and a gale of version-tag talismans. | B7 |
| 97.60–98.98 | 亿万线程 尽在掌中 | Thousands of cyan threads from the thread monitor converge into her open palm on 掌中. | A7 |
| 99.00–100.20 | 你说不可能 | A red review comment pops up, and she flicks it away on 能 (99.72). | A1 |
| 100.20–100.54 | 我说跑一遍 | She stomps the Enter key on 跑. | B4 |
| 100.56–104.00 | 测试全绿 霓虹正浓 | A row of lanterns is the test runner. They light cyan with PASS, one per syllable. On 绿 (101.16) she flashes a V sign and a wink, and holds it as the neon blooms through the held 浓. | A5 |

### Hook 2 and 「才、才不是为了你才修的！」 (123.47–130.97)

| Time | Moment | What the chibi does | Stickers |
|---|---|---|---|
| 123.47–126.84 | suona hook | She is pleased with herself over the half-cyan city: V sign and a wink. | A5 |
| 126.84, 127.22 | beats | A white mouse cursor (you) slides in and pats her head twice. She squeezes her eyes shut and goes scarlet. | A3 |
| 128.30–128.92 | 才、 | She is still flustered through the stutter. | A3 |
| 128.92–130.14 | 才不是为了你才 (stab 128.92) | She whips round with her arms crossed and her chin up, glancing back. An optional insert of the flustered head goes here. | A2 (+ R0 flustered head) |
| 130.14–130.97 | 修的！ | She yells and shoves the cursor off screen. The fight design takes over at 130.97. | A3 |

### Bridge (ink monochrome from the hit at 154.95; she takes over from Drop 2 at 154.54)

| Time | Line | What the chibi does | Stickers |
|---|---|---|---|
| 154.54–156.06 | 剑非剑 | Eyes closed, hand on her heart, her sword floating upright in front of her. On the second 剑 (154.98) the sword dissolves into ink strokes. | A6 + D4 |
| 156.06–157.56 | 码非码 | The ink strokes turn into lines of code and flow into her chest. One cyan heartbeat pulses in her arm seams on 码 (156.48). | A6 |
| 157.56–160.50 | 电子雨中 一念生花 | A raindrop of code lands on her open palm on 念 (159.00) and blooms into an ink plum blossom on 花 (159.48). Its stamen is the scene's one touch of cyan. | A7 |
| 160.50–162.80 | 你若深夜 仍未眠 | Cut to reality, first person at your night desk (no person in frame). The ink city is on your monitor. She walks up to the glass, presses her palms against it and looks at you. | C5 |
| 162.80–165.06 | 我自云端 | Inside the screen she sits on the edge of a cloud with her back to you, looking up at her moon. | C6 |
| 165.06–166.97 | 与你共天涯 | The camera pans from her moon to the same moon in your window. An optional reverse insert shows her gentle face. | C6 (+ R0 gentle head) |
| 166.97–168.02 | tail | The camera drifts back to the monitor. She is still sitting there. | C6 |

### Stop and reboot

| Time | Moment | What the chibi does | Stickers |
|---|---|---|---|
| 168.02–169.97 | error beep | A red error box hits your monitor and everything stops dead: rain, ink, and her. | C6, frozen |
| 169.97 | low hit | The frame falls to terminal text. She crumbles into characters that rain down into the POST lines. | C6 as ASCII |
| 169.97–171.12 | POST | The boot prints her portrait in ASCII from the top down, eyes closed, sword upright. | B5 as ASCII |
| 170.44–171.38 | 「……系统重启。」 | On 启 (171.12) the ASCII eyes open, and the character over the monocle lights cyan. | B6 as ASCII |
| 171.48 | slam | She decodes from ASCII back into colour, top down, and the city decodes around her. | B6 |
| 172.36 | pickup 千行剑 | She hops onto her flying sword. | B7 |

ASCII set for `make_ascii` (as in tokentoken): B5 and B6 at about 72 columns for the portrait, C6 at about 56 for the crumble.

### Final Chorus (172.36–185.14)

Lines 1–3 use the chorus stickers (B7 → B8 on 斩 174.48, C7 on 落 176.04, C8 → B8 on 一 180.06). The city turns from red to cyan line by line. The last line is the payoff:

| Time | Moment | What the chibi does | Stickers |
|---|---|---|---|
| 182.34–183.84 | second 千行剑 | The old line 「一剑劈开数据界」 hangs in the sky as a red `-` diff line, and she raises the giant sword. | D1 |
| 183.84–184.32 | slam on 赛 | She cleaves the red line away, and the `+` line 「此去赛博再无缺」 lands. | D2 |
| 184.32–184.97 | 再无缺 | She raises the sword to the sky, and the whole city is cyan, the brightest frame of the film. | B9 |

### Outro (184.97–210.95)

| Time | Moment | What the chibi does | Stickers |
|---|---|---|---|
| 184.97–187.97 | bars 123–124 | The camera pulls straight back out of the cyan city: it is your monitor, with dawn in the window. The city gives way to a terminal running the test suite, one PASS line per beat. She leaps out through the top of the screen. | B9 (small, exits up) |
| 187.97 | bar 125 | Her head and hands pop up over the top edge of the monitor from behind it. | C4 |
| 190.97 | bar 127 | She hops up and sits on the monitor's top edge with her legs dangling over the screen. The sword leans beside her, and she sways on the beat while the tests run. | C1 + D4 |
| 196.98 | hard hit | The last test passes and the summary line prints. Your cursor drifts up beside her, and she turns to you and waves, one swap per beat for two bars. | C2 / C3 |
| 199.97–205.97 | bars 133–136 | She settles and watches you, swaying, with one more short wave at bar 135 (202.97). | C1, C2 / C3 |
| 205.97 | bar 137 | She hops to her feet on the monitor and gives the wuxia fist-and-palm salute with a wink. She bows on the last hit at 208.61. | C9 |
| 208.98 | gong | The seal 「赛博江湖」 stamps over the frame, then black by 210.95. | C9 |

---

## 2. Sticker needs

All stickers share these rules:
- Full body unless stated otherwise.
- Eye-level view.
- Exactly two arms, two hands, five fingers each.
- Sword-finger gesture: index and middle fingers held together, the other fingers folded.
- Thick white die-cut border.
- Flat pure magenta #FF00FF background.
- No text anywhere; screens and paper stay blank.
- The sword is in her cybernetic RIGHT hand unless stated otherwise.

### R0: chibi reference sheet (approved before anything else)

| Part | Content |
|---|---|
| Four full bodies, same scale, relaxed neutral stand, small confident smile, no sword | (1) front; (2) 3/4 toward screen-left (monocle and sleeve side); (3) 3/4 toward screen-right (cybernetic arm side); (4) back |
| Three heads, head and shoulders, all 3/4 toward screen-left | smug (one eyebrow up, half-lidded, smirk); flustered (blushing, pouting, face turned away, eyes glancing back); gentle (soft smile, eyes half closed) |

There are four views instead of tokentoken's three because the asymmetry is the main risk: the sheet has to prove both sides. The sheet is drawn in sticker style, so it does two more jobs. Its full bodies are spare idle stickers. Its heads are the tight inserts at 59.10 (smug), 128.92 (flustered) and 165.06 (gentle).

### Sheet A: faces and feelings (3×3, row-major)

| Id | Key | Drawing | Facing | Used at |
|---|---|---|---|---|
| A1 | `smug` | Sword resting on her right shoulder, held by the grip, blade angled up behind her head. Head tilted, one eyebrow raised, half-lidded eyes looking down at the viewer, smug smirk. Her left hand is raised at chin height, flicking a finger as if flicking away a speck of dust. | 3/4 screen-left | Hook 1 57.47–60.46; V2 99.00–100.20 |
| A2 | `tsundere` | Arms crossed, with the wide left sleeve draped over the cybernetic right forearm. Body 3/4 toward screen-left, face turned further away with the chin up, blushing, pouting, one eye glancing back at the viewer. No sword. | 3/4 screen-left | 128.92–130.14 |
| A3 | `fluster` | Leaning forward, both fists clenched down at her sides, shoulders hunched up, eyes squeezed shut, cheeks bright red, mouth wide open in an embarrassed shout. No sword. | front | 126.84–128.92; 130.14–130.97 |
| A4 | `akanbe` | The index finger of her cybernetic right hand pulls down the lower eyelid of her RIGHT eye (screen-left, not the monocle eye). Tongue out, left hand on her hip with the sleeve hanging. No sword. | front | V2 84.04–85.88 |
| A5 | `victory` | Sword resting on her right shoulder. Left hand makes a V sign beside her left cheek, below the monocle. She winks her RIGHT eye (screen-left) with a cheeky grin. | front | V2 100.56–104.00; Hook 2 123.47–126.84 |
| A6 | `heartbeat` | Cybernetic right hand pressed flat over her heart, left hand relaxed with the wide sleeve hanging, eyes closed, calm and serene small smile, hair hanging still. No sword. | front | V1 17.88–20.22; Bridge 154.54–157.56 |
| A7 | `palm` | Left hand held out at chest height, palm up and open, the wide sleeve falling from her wrist. She looks down at the palm with a soft small smile; the cybernetic hand is relaxed at her side. No sword. | front | V2 97.60–98.98; Bridge 157.56–160.50 |
| A8 | `sleeves` | Fired up: her cybernetic right hand pushes the wide left sleeve up past her elbow. Left fist clenched, determined grin, sparkling eyes. No sword. | front | V2 89.74–92.52 |
| A9 | `scan` | Left hand at her face in the sword-finger gesture, touching the rim of her monocle. One eye narrowed, sharp focused little smile. Sword held point-down in the right hand behind her. | 3/4 screen-left | Intro 6.29–9.47; V1 20.88–23.22 |

### Sheet B: verses and choruses (3×3)

| Id | Key | Drawing | Facing | Used at |
|---|---|---|---|---|
| B1 | `lookback` | Standing, sword held loosely point-down in the right hand (screen-right). Head turned back over her LEFT shoulder toward the viewer so the monocle side of her face shows, cocky smirk. Ponytail and ribbon tails lifted slightly by the wind. | back | Intro ~1.5–4.04; Hook 1 55.97–57.47 |
| B2 | `flourish` | Light on her toes in a playful twirl, the sword spun above her head in the right hand, the wide left sleeve and ribbon tails swirling round her, playful grin. | front | Intro 4.04–6.29; V1 15.00–16.90; Hook 1 54.47–55.97 |
| B3 | `engrave` | Kneeling on one knee, both hands on the grip, the sword held vertically point-down in front of her as if carving into the ground. Concentrating, the tip of her tongue poking out. | 3/4 front | V1 29.82–32.52; V2 92.52–94.50 |
| B4 | `stomp` | Mid-jump, coming down feet first with both boots together as if stamping on a big button. Sword raised in the right fist, left fist up, gleeful open-mouthed grin, hair and ribbons flying upward. | front | V1 32.52–35.26; V2 100.20–100.54 |
| B5 | `vow` | Standing straight and still. The sword is upright in the right hand in front of her right shoulder, blade vertical beside her face without covering it. The left hand rests in the sword-finger gesture against the flat of the blade. Eyes closed, calm, hair and ribbon tails hanging straight down. | front | PC1 35.90–40.80; PC2 104.90–109.86; ASCII portrait 169.97–171.12 |
| B6 | `vowOpen` | **Identical to B5** (same pose, size, position and sword), but her eyes are open with a sharp, confident little smile. Put it in the cell next to B5. | front | PC1 40.80–41.84; PC2 109.86–110.82; ASCII 171.12; decode 171.48–172.36 |
| B7 | `ride` | Standing on her own flying sword like a surfer: the sword lies horizontal under her boots, point forward, heading away from the viewer toward the upper right. Knees bent, arms out for balance (the cybernetic arm near the viewer), the wide left sleeve, hair and ribbon tails streaming back toward the viewer. | 3/4 back, toward upper right | Chorus line 1 (41.84, 110.82, 172.36) and between stations; V2 95.88–97.58 |
| B8 | `command` | Cybernetic right arm thrust out toward the right edge in the sword-finger gesture, the wide left sleeve swept back, fierce determined shout, hair and ribbons blown back. No sword in hand. | 3/4 screen-right | Chorus 斩 (43.98, 113.04, 174.48); 一行代码 (49.44, 118.44, 180.06) |
| B9 | `skyward` | Sword raised straight up overhead in the right hand, pointing at the sky. Left hand open out to the side, triumphant open-mouthed smile, hair and ribbons lifted upward. | front | V2 94.50–95.88; Final Chorus 184.32 into the Outro pull-back |

### Sheet C: the desk, the Bridge and the chorus extras (3×3; the three sitting cells share row 1)

| Id | Key | Drawing | Facing | Used at |
|---|---|---|---|---|
| C1 | `sit` | Sitting on a ledge that isn't drawn (her seat is a straight horizontal line), legs dangling, knees together, skirt draped over her lap. Hands rest on the ledge beside her hips. Happy closed-mouth smile, looking at the viewer. No sword. | front | Outro 190.97–196.98, 199.97–205.97 |
| C2 | `waveA` | **Same seat, size and position as C1.** Her left hand is raised beside her head, waving with the palm toward the viewer and tilted toward the right edge; the wide sleeve has fallen to her elbow. Big open smile. The cybernetic hand stays on the ledge. | front | Outro 196.98–199.97, 202.97–204.47 |
| C3 | `waveB` | **Identical to C2**, with the waving hand tilted toward the left edge. | front | alternates with C2 on each beat |
| C4 | `peek` | Peeking over a wall top: only her head, both hands gripping the top edge, and the tops of her shoulders show. Everything below her hands is cut off by a perfectly straight horizontal line. Wide curious eyes, mouth a small "o". | front | V1 24.04–25.02 (firewall); Outro 187.97–190.97 (monitor top) |
| C5 | `glass` | Close view: both palms pressed flat toward the viewer at face height, as if against the inside of a window, fingers slightly spread. Her face is just behind her hands, with a soft, slightly worried, gentle smile. Cybernetic palm on screen-left; the bare left palm on screen-right with the sleeve fallen back. | front | Bridge 160.50–162.80 |
| C6 | `sitBack` | Sitting on a ledge that isn't drawn, legs dangling, hands beside her hips (the cybernetic hand on screen-right). Head tilted up toward the upper left, as if looking at the moon. Ponytail and ribbon tails hang down her back. | back | Intro 9.47–12.04; V1 12.04–13.90; V2 86.66–89.74; Bridge 162.80–168.02; Stop 168.02–169.97 (freeze, then ASCII crumble) |
| C7 | `snow` | Both arms raised high and open, face turned up, bright eyes and open-mouthed joy, as if catching falling snow. The wide sleeve falls back along her raised left arm. No sword. | front | Chorus line 2 (45.54, 114.48, 176.04) |
| C8 | `mine` | The sword is planted point-down in the ground in front of her, her cybernetic hand resting on the pommel. Her left thumb points at her own chest; chin up, cocky grin. | front | Chorus line 3 (47.90, 116.82, 178.40) |
| C9 | `farewell` | Standing, a slight bow: the wuxia fist-and-palm salute, her left palm wrapped over her right cybernetic fist in front of her chest, with the wide sleeve draping below. Playful wink with the RIGHT eye (screen-left) and a small smile. No sword. | front | Outro 205.97–210.95 |

### Sheet D: shared with the fight design (cells 1–4 reserved; the fight design fills 5–9)

| Id | Key | Drawing | Facing | Used at (non-fight) |
|---|---|---|---|---|
| D1 | `cleaveUp` | Camera at chest height. Both hands grip the sword raised high above and behind her head; body leaning back, fierce shout, hair and ribbons flying. | front | opening 0.00–0.30; Chorus line 4 (51.90, 120.84, 182.34) |
| D2 | `cleaveDown` | The chop is finished: she is crouched low with the sword brought down in front of her in both hands, the blade ending toward the lower left of the picture. Fierce focused glare, hair and ribbons swinging forward. | front | 0.30 (the black splits, she lands); 劈 53.32 and 122.33; 赛 183.84 |
| D3 | `ready` | Low ready stance, knees bent. The sword is held low in the right hand with the blade angled back behind her; the left hand is forward in the sword-finger gesture. Eyes locked forward. | 3/4 screen-right | V1 26.94–29.82 |
| D4 | `sword` | The sword alone, no hands, upright and point-down, in the same sticker style: a glass blade with cyan light lines inside and no glyphs, the dark crossguard bent like a return-key arrow, a red-cord grip, a jade-disc pommel with a long red tassel. About as long as she is tall at sticker scale. Rotate it in code; never mirror it. | — | floating beside her in every pose without a sword in hand; leaning on the monitor (Outro); rusty in V2 (code); ink dissolve 154.98; possible sprite for the formation |

**Total:** R0, then 27 of my own cells (A, B, C) and 4 shared cells (D1–D4). Every cell has at least one use tied to a lyric line, and most have two to five.

---

## 3. Sheets and generation order

All of it happens in one ChatGPT conversation, as in tokentoken. That is 5 generations, under the PLAYBOOK cap of about 10 a day, with room for one retry and the fight sheets.

| Order | File | Shape | Images to attach | Gate |
|---|---|---|---|---|
| 0 | (text only) | — | `refs/01-turnaround.png`, `refs/02-sword.png`; optionally `public/cover/thrust-char.png` as a face reference | ChatGPT confirms without generating |
| 1 | `images/00_chibi_sheet.png` | 3:2 landscape | (already in the conversation) | **owner approval** against the checklist below |
| 2 | `images/01_stickers_a.png` | 1:1 | approved R0, `refs/02-sword.png` | — |
| 3 | `images/02_stickers_b.png` | 1:1 | approved R0, `refs/02-sword.png` | — |
| 4 | `images/03_stickers_c.png` | 1:1 | approved R0, `refs/02-sword.png` | — |
| 5 | `images/04_stickers_d.png` | 1:1 | approved R0, `refs/02-sword.png` | after the fight design names cells 5–9 |

- **Do not attach `refs/03-style-cover.png`.** It shows full proportions in a painterly scene and came from a low-angle prompt. It would pull the stickers toward full proportions and that camera (`feeding.md` warns about this). Never attach the v1 sheets either.
- **Check `refs/01-turnaround.png` in full against STYLE_BIBLE §3 before message 0.** PROGRESS says it has only been checked at a glance, and the chibi will inherit any left/right error in it.
- **Cutting and keying.** `tools/key_flat.py` keys any flat border colour by connectivity, so it works on magenta, and the closed white border protects the red ribbon and the cyan glows. Then split the 3×3 grid with the grid logic in tokentoken's `cutout.py`. That script keys green, so it needs a magenta mode or a run with `--nokey` on the keyed image. Upscale ×3 with Real-ESRGAN x4plus-anime: a cell is about 400 px.
- **Cells that will be shown large:** A1, A2, B5, B6, C5, C1–C3, C9, D1, D2, plus the R0 heads for the tightest inserts. Only if these look soft in review, add a 2×2 bust sheet for 哼 and 才不是 (one more generation).
- **Fixes.** Repair a left/right error with a masked edit, not a new generation. PLAYBOOK allows at most one retry.

### R0 approval checklist (the asymmetry must survive the chibi simplification)

1. Front view: the monocle is on the eye on screen-right, and its white frame wraps that ear into a headset mic.
2. Front view: the pearl-white cybernetic arm with cyan seams is on screen-left, the shoulder is bare, and the arm has no sleeve.
3. Front view: there is one wide hanfu sleeve, on the arm on screen-right only.
4. 3/4 toward screen-left: the monocle is on the near eye and the sleeve is on the near arm. 3/4 toward screen-right: the cybernetic arm and bare shoulder are near.
5. Back view: cybernetic arm on screen-right, sleeve on screen-left. The red bow has two long ribbon tails, and the ponytail ends in cyan fibre strands.
6. The cross-collar reads as a "y". The two cyan chevron hair clips are there. Black sash with a red cord knot; white pleated skirt with a cyan hem line and white shorts under it; white socks ending below the knee; white boots with cyan soles.
7. About 2.5–3 heads tall, the same in all four views. The face is the cover's (round face, cyan eyes, smirk), not the v1 face, and the silhouette does not read as an existing character.
8. Two arms, five fingers on each hand, no text, flat magenta background, and a closed white border round every figure.

**Simplifications that are fine:** fewer pleats; the circuit embroidery reduced to a cyan line on the hem; plain cyan chevrons for the clips; a shorter tassel. **Simplifications that are not:** dropping the monocle or the mic; a sleeve on the right arm; wide sleeves on both arms; a covered right shoulder; swapped sides; losing the ribbon tails or the cyan hair tips.

### Draft of the character bible (message 0)

```
I'm making an anime music video and need a small set of CHIBI STICKER illustrations of my original character Qianhang, shown in the attached turnaround sheet; the second image is her sword. I'll ask for them one at a time. Keep her design identical to the attached sheet in every image. Don't generate an image for this message; just confirm.

CHARACTER: Qianhang, a sword spirit who is also a virtual idol singer, drawn as a chibi.
- Hair: glossy black hair with a blue sheen in a long high ponytail tied with a big cinnabar-red ribbon bow; two long ribbon tails hang down to the backs of her knees; the last third of the ponytail fades into glowing cyan fibre-optic strands; soft side bangs; two small cyan hair clips shaped like a pair of chevrons.
- Face: soft round face, big bright cyan eyes, a confident little smirk.
- Her own LEFT eye (the eye on the RIGHT side of the picture when she faces the viewer) wears a small translucent cyan monocle; its thin white frame curves around her left ear into a slim headset microphone near her mouth.
- Her own RIGHT arm (on the LEFT side of the picture when she faces the viewer) is a slender, glossy pearl-white cybernetic arm from the shoulder down with glowing cyan seam lines; her right shoulder is bare.
- Outfit: a white cross-collar top with cinnabar-red trim; her LEFT arm wears one wide, flowing hanfu sleeve that hangs past her hand; a black waist sash tied with a red cord knot; a white pleated skirt ending just above the knees with a pale cyan circuit-line hem and white fitted shorts underneath; white socks ending just below the knees; short white boots with cyan soles.
- Sword (only when a prompt gives it to her, always in her cybernetic right hand unless the prompt says otherwise): oversized, about as long as she is tall; a translucent glass blade with glowing cyan light lines inside; a dark gunmetal crossguard bent like a return-key arrow with cyan edges; a grip wrapped in red cord; a small jade disc pommel with a long red tassel. Exactly as in the attached sword sheet.

STYLE for every image: cute chibi sticker art like LINE or WeChat stickers, about 2.5 to 3 heads tall, big head, small body, thick clean dark outlines, flat bright cel colours with minimal soft shading, glossy eyes, expressive and funny. Every figure has a thick white sticker border (die-cut outline) around it.

RULES for every image: a perfectly flat, uniform pure magenta background (#FF00FF) with no shadow, floor, gradient or scenery; eye-level views; exactly two arms and two hands with five fingers each; her design is asymmetric and is never mirrored: the monocle is always on her own left eye, the cybernetic arm is always her own right arm, the wide sleeve is always on her own left arm; glow only inside her hair tips, monocle, arm seams and blade, with no halos, trails or effects around her; no text, letters, numbers, logos, speech bubbles, watermark or signature anywhere.
```

Each sheet message follows tokentoken's pattern:

> `Image N, square 1:1. A 3×3 grid of nine chibi stickers of Qianhang, each full body unless stated, same size and proportions as the approved chibi sheet, evenly spaced with clear magenta space between them, white sticker border around each. The first attached image is the approved chibi sheet: match its design and proportions exactly; the second is her sword. 1 … 9 …`

The bodies are the cell descriptions from §2, and each one should state its facing and screen sides explicitly, for example "three-quarter view facing the left edge of the picture, so her monocle eye and wide sleeve are toward the viewer".

---

## 4. Deliberately left out

- **A singing or lip-sync pose** (STYLE_BIBLE §6 pose 9). She acts the lyrics instead; one set piece per chorus line leaves no slot for it.
- **A walk cycle and a sleeping pose.** Hops, squash and sways in code carry the movement, and the Outro ends on the farewell salute instead of sleep.
- **Mirrored or second-facing versions.** None are needed under the facing convention.
- **A separate drawing for the rusty sword, the formation swords or the ink sword.** All three come from D4 plus code.
- **Full-proportion poses** (character.md ④ 1–11), which the chibi-only decision replaces.
- **Backgrounds this depends on, which are not stickers:** the first-person night desk (monitor with a blank screen area for code to fill, keyboard, mug, lamp, and a rain window with the moon; no person, which differs from STYLE_BIBLE §5's back silhouette because the point of view is "your screen/desk"); its dawn grade (code); the city plates.

## 5. Proposals for the owner to confirm

1. **The cursor as "you"** in Hook 2 (the head pat) and again in the Outro wave. It is the only trace of the viewer before the Bridge.
2. **The fist-and-palm salute (C9) at 205.97–208.61** after the wave. It is the wuxia farewell and the planned Outro pose 10, and it adds one drawing to "sits on the screen edge and waves".
3. **She sits on the monitor's top edge** in the Outro. The desk shot puts the top of the monitor at eye level and C1 is drawn at eye level with her knees together, so STYLE_BIBLE rule 11 holds.
4. **Sheet D cells 1–4 are reserved for these needs.** The fight design should reuse B7, B8, A1 and D1–D4 rather than draw them again.