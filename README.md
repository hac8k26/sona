```
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║   ███████╗ ██████╗ ███╗   ██╗ █████╗                                        ║
║   ██╔════╝██╔═══██╗████╗  ██║██╔══██╗                                       ║
║   ███████╗██║   ██║██╔██╗ ██║███████║                                       ║
║   ╚════██║██║   ██║██║╚██╗██║██╔══██║                                       ║
║   ███████║╚██████╔╝██║ ╚████║██║  ██║                                       ║
║   ╚══════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝                                       ║
║                                                                              ║
║   HIGH_DENSITY SONIC_PROTO  //  V6.X                                        ║
║   ─────────────────────────────────────────────────────────────────────     ║
║   STATUS: ACTIVE  //  SIGNAL: 99.9%  //  LATENCY: 0.00ms                   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

> **SONA** — a minimal, monospace music streaming interface built on raw HTML/CSS/JS.  
> No frameworks. No clutter. Just signal.

&nbsp;

[![Live](https://img.shields.io/badge/LIVE-hac8k26.github.io%2Fsona-1a1a1a?style=flat-square&labelColor=ff3c00)](https://hac8k26.github.io/sona)
[![Auth](https://img.shields.io/badge/AUTH-Supabase-1a1a1a?style=flat-square&labelColor=1a1a1a)](https://supabase.com)
[![API](https://img.shields.io/badge/API-JioSaavn-1a1a1a?style=flat-square&labelColor=1a1a1a)](https://github.com/sumitkolhe/jiosaavn-api)
![HTML](https://img.shields.io/badge/HTML-pure-1a1a1a?style=flat-square&labelColor=1a1a1a)
![No frameworks](https://img.shields.io/badge/frameworks-none-ff3c00?style=flat-square&labelColor=1a1a1a)

---

## // SYSTEM_OVERVIEW

```
NODE_MAP:
  SRC: [LOCAL_NODE]
  |___ index.html        →  landing + consent gate + stream guard
  |___ auth.html         →  login / signup (Supabase auth)
  |___ music.html        →  stream player + search + queue
  |___ profile.html      →  edit username, avatar, password
  |___ confirmed.html    →  email activation screen
  |___ terms.html        →  terms of service & privacy policy
  OUT: [GITHUB_PAGES]
```

---

## // FEATURES

```
[✓] Music streaming via JioSaavn API
[✓] English-only song filter (Unicode non-Latin script detection)
[✓] Default load — 8 parallel artist queries on startup
[✓] Search, queue, shuffle, repeat, prev/next
[✓] Web Audio API oscilloscope visualizer
[✓] Segmented seek bar with tick marks
[✓] 160 / 320 kbps bitrate selector
[✓] Supabase authentication (login, signup, email confirmation)
[✓] Profile page — edit username, upload avatar, change password
[✓] Avatar compressed to 400×400 JPEG before upload
[✓] Avatar persists on refresh via Supabase Storage
[✓] Stream guard — login required to access music
[✓] Terms & Privacy consent gate on first visit
[✓] Fully responsive monospace UI — no CSS frameworks
```

---

## // STACK

```
LAYER          TECH
─────────────────────────────────────
Frontend       Pure HTML / CSS / JS
Auth           Supabase (email + password)
Storage        Supabase Storage (avatars bucket)
Music API      JioSaavn unofficial API
Hosting        GitHub Pages
Fonts          ui-monospace / system monospace stack
```

---

## // DESIGN_SYSTEM

```
--bg:      #fcfaf2   cream background
--text:    #1a1a1a   near-black
--accent:  #ff3c00   signal orange
--dim:     #a0a090   muted labels
--border:  #e0ddd5   hairline borders
--panel:   #f7f5ed   right panel fill

Grid:      60px header / 1fr main / 120px footer
Columns:   1fr left zone / 400px right panel
Cursor:    crosshair everywhere
Case:      UPPERCASE labels throughout
```

---

## // QUICK_START

```bash
# clone
git clone https://github.com/hac8k26/sona.git
cd sona

# open locally (no build step needed)
open index.html
# or serve with any static server:
npx serve .
```

> Supabase credentials are embedded in the source for this public demo project.  
> For production use, move them to environment variables.

---

## // PAGES

| Route | Description |
|---|---|
| `index.html` | Landing — heatmap, terminal, stream guard |
| `auth.html` | Login / Signup with Supabase |
| `music.html` | Full streaming player |
| `profile.html` | User profile editor |
| `confirmed.html` | Email activation success screen |
| `terms.html` | Terms of Service & Privacy Policy |

---

## // LICENSE

```
SONA is provided for personal, non-commercial use only.
All music content belongs to its respective rights holders.
This project is not affiliated with JioSaavn or any music label.
```

---

<div align="center">

```
> SONA_V6.X // ALL_SYSTEMS_NOMINAL // SIGNAL_99.9%_
```

</div>
