# 千行剑 — progress

Read this first after any context compaction or new session. Visual design: `STYLE_BIBLE.md`. Prompts: `prompts/`.
Workflow: `../PLAYBOOK.md`.

This folder is its own git repo (`github.com/teosam89/QianHangJian`, branch `claude/affectionate-tesla-nn440b`). It
started in a Claude Code cloud session (https://claude.ai/code/session_01YNPA8RVNfoiCJHCbXVnu6T, 2026-10-05) and moved
into `VideoProduce/` the same day. Run `git fetch` before work: a cloud session may have pushed since.

## Paused here (2026-10-05, cloud session) — next steps, to run locally

The owner paused the cloud work for lack of usage (「由于现在usage不太够了 至于剩下的部分先搁置 记录在progress里面 我会在本地跑」).
Done and pushed: the song analysis (`song/timeline.json`, `song/frames.md`), the fight and acting designs (`notes/`),
the storyboard draft 1 (`STORYBOARD.md`, `storyboard/01–12`, 261 shots) and the chibi reference-sheet prompts
(`prompts/chibi.md`). Open, in order:

1. **Owner:** review the storyboard draft 1 (start with `STORYBOARD.md`: idea, rules, part index, rulings G1–G7, known
   issues). Every change goes into the part file; rerun `python tools/check_storyboard.py` (tiling, every sung
   character on its frame, impact frames ≤ 3 per second).
2. **Owner:** generate the chibi reference sheet by hand in ChatGPT (`prompts/chibi.md`: message 0 with
   `refs/01-turnaround.png` and `refs/02-sword.png`, then the sheet), check it against the checklist there, push it as
   `images/00_chibi_sheet.png`.
3. **Art list (not started; a cloud workflow was stopped before it wrote anything):** compile `ART_LIST.md` from the
   storyboard. Method: extract every art id from the twelve parts with its full definition (the first-use definition in
   a shot's Art line plus later requirements; each part's "Art in this part" list is incomplete on its own), merge
   near-duplicates (several new `N…` drawings are close to registry drawings), then group into generation batches:
   - the chibi reference sheet as the gate;
   - chibi sheets: 3×3 square for upright stickers, 3×2 landscape for wide poses and big swords, 2×2 for busts;
     left-facing cells checked together;
   - the boss ink sheets (2×2, white, monochrome);
   - the shared anchors first, because other images attach them: BG-tower, BG-city-wide, BG02-firewall,
     BG02-wallinside, PR02-enterkey, PR02-lantern, PR02-chipdie, PR06-moon, DESK-night, MON;
   - props on magenta, then backgrounds by part, then edits (DESK-dawn, ink edits, close views).
   Rough size: about 90 chibi drawings, 50 backgrounds, 30 props and 2 boss sheets; at about 10 generations a day,
   plan on one to two weeks of generation.
4. **Sheet prompts:** add them to `prompts/chibi.md` (and a prompts file for backgrounds and props), each with the
   images to attach, after steps 1–3.
5. **Build:** align Remotion to 4.0.529 and bring in the moren/tokentoken kit (Phase 6), then a sample section and
   mv-reviewer QA rounds, as on tokentoken. Re-check the Music onsets on a stem split first (known issue 1).

## Phase 1 — Design

- [x] Visual direction locked in the cloud session (2026-10-05): 「墨底霓虹」, an ink-wash and neon world with a bright,
      cel-shaded idol character; palette, character 千行 v2, sword, generation rules, a per-section plan, fonts
      (`STYLE_BIBLE.md`)
- [ ] `DESIGN.md`: the concept decisions (theme, story, song, format, length, platform) are not written down yet;
      the grilling rounds below are the record until it is
- [x] MV grilling, round 1 (cloud, 2026-10-05). Owner: 「是最终版,其实tokentoken可以为效果 因为他是最后一期产出的也是流量工程最精致的
      / b / 我更喜欢看下tokentoken的模板设计思路 / b，如果需要建立伪3d 可以接入blender / 请你先看歌曲 / a」 → the mp3 is
      the final take with the lyrics unchanged; tokentoken is the bar to reach; story b (the fight runs in the code
      jianghu and the bridge cuts once to reality: a programmer still awake at a night desk); engine question replaced
      by a study of tokentoken's template (`../tokentoken/DESIGN.md`, `STORYBOARD.md`); motion b (layered cut-outs,
      Grok first-frame video only for a few action shots; Blender allowed for pseudo-3D); the opening waits for the song
      analysis; lyrics a (an ink-brush underlay; 得意黑 slammed in per character in the verses, calligraphy in the
      choruses, speech bubbles for the spoken lines)
- [x] MV grilling, round 2 (cloud, 2026-10-05), built on tokentoken's template. Owner: 「a, 封面菜单ERROR我要去掉，感觉不美观
      / b这点需要学习skill 有什么打斗skill 2d美观的 pv的那种感觉，也可以参a / c但是需要你接mcp渲染 / a / a / a」 →
      - props a: real programmer artifacts (stack traces, terminal, git, tests, CI, the Enter key, thread monitor, POST),
        with wuxia as their skin; the `ERROR ×999+ -> 0` egg is removed from every cover (code and `prompts/cover.md`)
      - story curve b: only how red the city is, no counter on screen; the owner wants a 2D, PV-style fight look and
        allows borrowing from a (error visuals without a running number)
      - characters c: chibi only, no full-proportion poses in the MV; the owner asks for the generation to be hooked up
        (open: how, see the cloud chat)
      - chorus space a: WebGL only, tokentoken's station journey with a sword formation (no Blender)
      - payoff a: the last chorus line is rewritten git-diff style, 「一剑劈开数据界」 → 「此去赛博再无缺」
      - bridge a: ink monochrome on the guqin, a cut to the real night desk, the error beep stops the city dead, it
        falls to terminal text (POST), and after 「系统重启」 it decodes back into colour for the final chorus
- [x] MV grilling, round 3 (cloud, 2026-10-05), after the song analysis. Owner: 「b, a, a, b(把需要的东西写给我，输出在这里）」,
      then the full lyrics with 「这是歌词，跟着歌词走渲染」 and 「c自己设计，storm是个十分严重的失败品」 →
      - opening b: strictly chibi; on the first suona hit (0.30 s) chibi 千行 slashes the black screen open onto the red
        city. The full-proportion one-shot stays on the cover only
      - drops a: Drop 1 is a crowd fight against the hacker tide, Drop 2 a boss fight against a beast made of red error
        text (红字劫); every slash pushes the city's red back
      - outro a: back at the real desk, every test passes, chibi 千行 sits on the screen edge as a desktop pet and waves;
        the gong stamps the seal 「赛博江湖」, then black
      - art b: Claude writes the prompts, the owner generates by hand in ChatGPT and pushes the PNGs (`prompts/chibi.md`)
      - on-screen lyrics follow the written lyrics in `song.md`, so the payoff reads 「此去赛博再无缺」 (the recognisers
        hear 再不缺)
      - fights c: Claude designs them; storm (`../storm/`) is not to be reused
      - no Grok image-to-video: all motion is code (proposed in the chat, no objection)
- [ ] Check these parts of the plan against the owner's rules (PLAYBOOK §3) with the owner:
      - the Intro opens on a build-up (black-screen glitch, then the city panorama and a back view); the rule is to
        open on the strongest moment
      - the Intro transition is a glitch with RGB split; the owner judged glitch blocks and RGB split cheap
      - lyrics carry only a glow (STYLE_BIBLE §7); on tokentoken the owner asked for lyrics on an opaque ground
      - 念白「哼」 is a freeze frame; the camera must move in every shot

## Phase 2 — Song

- [x] `song.md`: the final take and the lyrics with section tags. Owner: 「是最终版」
- [ ] Rename `music_164638153048065_5xodPGUjhEZAjhMx8uAuYN_jzalsv.mp3` (PLAYBOOK §4.1) and keep it out of git

## Phase 3 — Analysis

- [x] `song/timeline.json` (cloud, 2026-10-05): 160.0 BPM (not 161.5: every 24 s window fits 159.9–160.1), bar b
      starts at 0.465 + 1.5·b s, 140 bars, 210.95 s; 19 sections with bar ranges; 18 hard hits; 39 lines with
      per-character times (CTC forced alignment over SenseVoice, checked against four other recognisers; Chorus 2 and
      the Final Chorus match Chorus 1 + 69.0 s and + 130.5 s on every line). Findings that change the plan:
      - no key change in the final chorus: the sung pitch is identical to Chorus 1, so the lift has to come from the
        picture
      - a hard slam lands on 劈 in 「一剑劈开」 (53.32, 122.33) and on 赛 in 「此去赛博」 (183.85): the payoff hit
      - Verse 2 goes double-time at 96.47: its last four lines are about 1.5 s each
      - the two instrumental drops are 16 bars (24 s) each with no vocals; the outro is 16 bars plus a gong at 208.98
      - the stop: error beep 168.02–169.97, a low hit, near-silence, 「……系统重启。」 170.44–171.38, near-silence,
        a slam at 171.48, the final chorus pickup at 172.36
      The analysis scripts and stems stayed in the cloud scratchpad (not in git)

## Phase 4 — Storyboard

- [x] `song/frames.md`: the 30 fps frame grid (every bar, beat, hit and sung character). `notes/fight-design.md` and
      `notes/acting-design.md`: the fight grammar and moves, the dragon, and the chibi's acting line by line
- [x] Owner (2026-10-05): 「不如来算帧数 我们把分镜做的详细点 … 不如现在把分镜写满（越详细越好） 因为这个音乐节奏卡点很强
      基本上出图要十分的多 我不介意这个部分」 → `STORYBOARD.md` (contract, world, rules, lyric layer, drawing registry,
      hand-offs, integration rulings G1–G7, known issues) and `storyboard/01-…12-*.md`: 261 shots tiling f0–f6328, each
      with its music, every lyric character on its frame, layers, an action frame list, camera, red level, exit and art
      ids. Written by twelve parallel agents, reconciled by one set of rulings and a fix pass; a script checks tiling,
      lyric frames and flash density on every part
- [ ] Owner review of the storyboard (draft 1)
- [ ] Art list compiled from the storyboard (merge near-duplicate drawings, group into sheets, prompts)

## Phase 5 — Art (cover first)

- [x] Prompts: turnaround, sword, expressions, 11 poses (`prompts/character.md`), plus deriving the sheets from an
      approved cover (⓪); reference order `refs/01`–`04` (`prompts/feeding.md`)
- [x] Cover plan, settled by a grilling in the cloud session: three layered 16:9 candidates, 一剑劈开 `CoverSplit`,
      剑指镜头 `CoverThrust` and 千剑齐发 `CoverSwords`; 8 images listed with prompts (`prompts/cover.md`); five other
      concepts kept as alternatives
- [x] Cover grilling, round 1 (2026-10-05). Owner: 「123按照你推荐的，4选b,5不加」 → Bilibili and Douyin: a 16:9
      master with the essentials in the central 4:3, plus a 3:4 for Douyin's grid, no 1:1; fix the one-shot 一剑劈开
      draft instead of rebuilding it in layers; keep 剑指镜头 and 千剑齐发 with a code-drawn crack and sword; Claude
      drives ChatGPT in Chrome, asking before each batch; no 「小政」 mark
- [x] Round 2. Owner: 「确认」 → reuse the turnaround and sword sheets already in ChatGPT; extend to 3:4 as well; under
      the skirt only white shorts; at most one automatic retry, and only for hard flaws
- [x] The auto-mode permission check blocked pressing send in ChatGPT and downloading from it until the owner wrote
      「我给你权限 你去打开 我之前的工作流程是可以的」
- [x] One-shot fixed in ChatGPT (conversation "Edit Image Modestly"): an ellipse drawn with 标注 round the skirt plus an
      edit instruction gave white shorts; 调整大小 then made 16:9 (1672×941) and 3:4 (1086×1448). Files:
      `refs/03-style-cover.png` (the fixed square, 1254×1254), `public/cover/oneshot-16x9.png`,
      `public/cover/oneshot-3x4.png`. The draft came from a one-shot prompt that asked for a "low angle"
- [x] `refs/01-turnaround.png` and `refs/02-sword.png` (1536×1024 each): the sheets derived from the cover (⓪-1, ⓪-2),
      the last two images of the ChatGPT conversation "Character Reference Sheet". Left and right look right at a
      glance; check them in full against STYLE_BIBLE §3 before use. The conversation "Character Turnaround Sheet" is
      the v1 design: never use it
- [x] Owner on the one-shot: 「其实我觉得封面图不要那么绚丽 彩色污染 可以类似moren的cover那样」 → the cover becomes a
      MOREN-style graphic layout (`../moren/src/mv/CoverStill.tsx`: a dark panel cut on a diagonal, big type, the
      character as a cut-out on paper, one accent colour). The fixed one-shot stays as MV material for the final chorus
      and as the style reference
- [x] Round 3. Owner: 「做一张，b，a，不需要人设，千行也不要，原创出道曲也不要」 → one cover (the cloud's three
      layered candidates are dropped); the sword-thrust pose; cinnabar as the only accent colour; no 「人设 No.」
      badge, no 「千行 QIANHANG」 bar, no 「原创出道曲」. Kept: the title 「千行剑」, the hook 「哼，就这点报错？」 and the
      tags #剑灵 #傲娇 (the owner did not name the tags; confirm them)
- [x] Character: one ChatGPT generation (conversation "Create Anime Image", refs 01 and 02 uploaded) →
      `public/cover/thrust-char-raw.png` (1086×1448), keyed with `tools/key_flat.py` → `public/cover/thrust-char.png`.
      The blade leaves the picture's left edge, and the sleeve is cut at its right edge
- [x] `CoverInk` (2560×1440) and `CoverInkTall` (1080×1440) in `src/cover/CoverInk.tsx`: MOREN's layout mirrored, so
      she stands flush left, the blade leaves the canvas edge and the panel covers her picture's cut right edge. A small
      seal 「赛博江湖」 sits beside the title; no ERROR easter egg. Thumbnail and central 4:3 checks:
      `out/thumb-check.png`
- [ ] Owner review of the cover, then export `deliver/cover/` (2560×1440, 1920×1080 and 1080×1440, PNG and JPG)
- [ ] Poses 1–11 and backgrounds, after the storyboard
- [x] `prompts/chibi.md`: message 0 (the bible) and the chibi reference sheet, for the owner to generate by hand now
- [ ] `images/00_chibi_sheet.png` generated, pushed and checked

## Phase 6 — Compose

- [x] Remotion stills `FontSpecimen`, `CoverTypeset`, `CoverSplit`, `CoverThrust`, `CoverSwords`; a missing layer is
      drawn as a labelled placeholder
- [x] `npm install` on this machine (2026-10-05). npm's allowScripts blocked esbuild's install script; rendering works
      anyway (the `CoverSplit` placeholder rendered)
- [ ] Bring in the MV kit and tools from `../moren/` (PLAYBOOK §8). This project pins Remotion 4.0.533 while the kit
      and every other project pin 4.0.529; align to 4.0.529

## Phases 7–10 — Post pass, review, render, deliver

- [ ] Not started. Platform open: the covers target Bilibili 16:9, while the playbook's release recipe is Douyin with
      the owner's 「小政」 mark and @小政zzzzz on the covers (not on these covers yet)

## Housekeeping

- [ ] Docs and code comments are in Chinese; the repo rule is English, with Chinese only for on-screen text and quotes
- [ ] `tools/cover_fix_prep.py` says `python3`; on this machine run it with `../.venv/Scripts/python.exe`

## Owner notes (verbatim)

- None recorded here yet. The notes from the first day are in the cloud session's chat (link above).
