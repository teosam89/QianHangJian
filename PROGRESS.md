# 千行剑 — progress

Read this first after any context compaction or new session. Visual design: `STYLE_BIBLE.md`. Prompts: `prompts/`.
Workflow: `../PLAYBOOK.md`.

This folder is its own git repo (`github.com/teosam89/QianHangJian`, branch `claude/affectionate-tesla-nn440b`). It
started in a Claude Code cloud session (https://claude.ai/code/session_01YNPA8RVNfoiCJHCbXVnu6T, 2026-10-05) and moved
into `VideoProduce/` the same day. Run `git fetch` before work: a cloud session may have pushed since.

## Phase 1 — Design

- [x] Visual direction locked in the cloud session (2026-10-05): 「墨底霓虹」, an ink-wash and neon world with a bright,
      cel-shaded idol character; palette, character 千行 v2, sword, generation rules, a per-section plan, fonts
      (`STYLE_BIBLE.md`)
- [ ] `DESIGN.md`: the concept decisions (theme, story, song, format, length, platform) are not written down, and the
      owner's notes from the cloud chat are not in the repo
- [ ] Check these parts of the plan against the owner's rules (PLAYBOOK §3) with the owner:
      - the Intro opens on a build-up (black-screen glitch, then the city panorama and a back view); the rule is to
        open on the strongest moment
      - the Intro transition is a glitch with RGB split; the owner judged glitch blocks and RGB split cheap
      - lyrics carry only a glow (STYLE_BIBLE §7); on tokentoken the owner asked for lyrics on an opaque ground
      - 念白「哼」 is a freeze frame; the camera must move in every shot

## Phase 2 — Song

- [ ] The song is not in the repo: no `song.md`, no lyrics, no mp3. STYLE_BIBLE §6 implies it exists: a sweet
      virtual-singer vocal; intro, verse 1, pre-chorus, chorus, spoken 「哼」, drop, verse 2, spoken 「才不是」, bridge,
      stop, a final chorus with a key change, an outro with a gong
- [ ] The owner put `music_164638153048065_5xodPGUjhEZAjhMx8uAuYN_jzalsv.mp3` (3:31, 256 kb/s, no tags) into this
      folder on 2026-10-05; taken to be the song until the owner confirms. Then rename it (PLAYBOOK §4.1) and keep it
      out of git

## Phase 3 — Analysis

- [ ] `beats.json`, transcript, per-character lyric times (`../moren/tools/`)

## Phase 4 — Storyboard

- [ ] `STORYBOARD.md`, one row per lyric line; STYLE_BIBLE §6 is the per-section draft

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
