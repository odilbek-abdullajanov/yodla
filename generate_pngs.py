import os
import json
from playwright.sync_api import sync_playwright

verbs = [
  # 1-USTUN (1..43)
  {"num": 1, "uz": "bo'lmoq", "v1": "be", "v2": "was/were", "v3": "been", "part": 1},
  {"num": 2, "uz": "urmoq, yengmoq", "v1": "beat", "v2": "beat", "v3": "beaten", "part": 1},
  {"num": 3, "uz": "bo'lmoq, aylanmoq", "v1": "become", "v2": "became", "v3": "become", "part": 1},
  {"num": 4, "uz": "boshlamoq", "v1": "begin", "v2": "began", "v3": "begun", "part": 1},
  {"num": 5, "uz": "tishlamoq", "v1": "bite", "v2": "bit", "v3": "bitten", "part": 1},
  {"num": 6, "uz": "esmoq, puflamoq", "v1": "blow", "v2": "blew", "v3": "blown", "part": 1},
  {"num": 7, "uz": "sindirmoq, buzmoq", "v1": "break", "v2": "broke", "v3": "broken", "part": 1},
  {"num": 8, "uz": "olib kelmoq", "v1": "bring", "v2": "brought", "v3": "brought", "part": 1},
  {"num": 9, "uz": "qurmoq", "v1": "build", "v2": "built", "v3": "built", "part": 1},
  {"num": 10, "uz": "sotib olmoq", "v1": "buy", "v2": "bought", "v3": "bought", "part": 1},
  {"num": 11, "uz": "tutmoq, ushlamoq", "v1": "catch", "v2": "caught", "v3": "caught", "part": 1},
  {"num": 12, "uz": "tanlamoq", "v1": "choose", "v2": "chose", "v3": "chosen", "part": 1},
  {"num": 13, "uz": "kelmoq", "v1": "come", "v2": "came", "v3": "come", "part": 1},
  {"num": 14, "uz": "narx turmoq", "v1": "cost", "v2": "cost", "v3": "cost", "part": 1},
  {"num": 15, "uz": "kesmoq", "v1": "cut", "v2": "cut", "v3": "cut", "part": 1},
  {"num": 16, "uz": "bajarmoq, qilmoq", "v1": "do", "v2": "did", "v3": "done", "part": 1},
  {"num": 17, "uz": "chizmoq, tortmoq", "v1": "draw", "v2": "drew", "v3": "drawn", "part": 1},
  {"num": 18, "uz": "ichmoq", "v1": "drink", "v2": "drank", "v3": "drunk", "part": 1},
  {"num": 19, "uz": "haydamoq", "v1": "drive", "v2": "drove", "v3": "driven", "part": 1},
  {"num": 20, "uz": "yemoq", "v1": "eat", "v2": "ate", "v3": "eaten", "part": 1},
  {"num": 21, "uz": "yiqilmoq, tushmoq", "v1": "fall", "v2": "fell", "v3": "fallen", "part": 1},
  {"num": 22, "uz": "his qilmoq", "v1": "feel", "v2": "felt", "v3": "felt", "part": 1},
  {"num": 23, "uz": "urushmoq, kurashmoq", "v1": "fight", "v2": "fought", "v3": "fought", "part": 1},
  {"num": 24, "uz": "topmoq", "v1": "find", "v2": "found", "v3": "found", "part": 1},
  {"num": 25, "uz": "uchmoq", "v1": "fly", "v2": "flew", "v3": "flown", "part": 1},
  {"num": 26, "uz": "unutmoq, esdan chiqarmoq", "v1": "forget", "v2": "forgot", "v3": "forgotten", "part": 1},
  {"num": 27, "uz": "olmoq, erishmoq", "v1": "get", "v2": "got", "v3": "got", "part": 1},
  {"num": 28, "uz": "bermoq", "v1": "give", "v2": "gave", "v3": "given", "part": 1},
  {"num": 29, "uz": "bormoq", "v1": "go", "v2": "went", "v3": "gone", "part": 1},
  {"num": 30, "uz": "o'smoq, o'stirmoq", "v1": "grow", "v2": "grew", "v3": "grown", "part": 1},
  {"num": 31, "uz": "osmoq, ilmoq", "v1": "hang", "v2": "hung", "v3": "hung", "part": 1},
  {"num": 32, "uz": "ega bo'lmoq", "v1": "have", "v2": "had", "v3": "had", "part": 1},
  {"num": 33, "uz": "eshitmoq", "v1": "hear", "v2": "heard", "v3": "heard", "part": 1},
  {"num": 34, "uz": "yashirmoq, yashirinmoq", "v1": "hide", "v2": "hid", "v3": "hidden", "part": 1},
  {"num": 35, "uz": "urmoq, zarba bermoq", "v1": "hit", "v2": "hit", "v3": "hit", "part": 1},
  {"num": 36, "uz": "ushlab turmoq", "v1": "hold", "v2": "held", "v3": "held", "part": 1},
  {"num": 37, "uz": "jarohatlamoq, og'rimoq", "v1": "hurt", "v2": "hurt", "v3": "hurt", "part": 1},
  {"num": 38, "uz": "saqlamoq, davom ettirmoq", "v1": "keep", "v2": "kept", "v3": "kept", "part": 1},
  {"num": 39, "uz": "bilmoq, tanimoq", "v1": "know", "v2": "knew", "v3": "known", "part": 1},
  {"num": 40, "uz": "tark etmoq, qoldirmoq", "v1": "leave", "v2": "left", "v3": "left", "part": 1},
  {"num": 41, "uz": "qarzga bermoq", "v1": "lend", "v2": "lent", "v3": "lent", "part": 1},
  {"num": 42, "uz": "kuymoq, yondirmoq", "v1": "burn", "v2": "burnt", "v3": "burnt", "part": 1},
  {"num": 43, "uz": "tush ko'rmoq, orzu qilmoq", "v1": "dream", "v2": "dreamt", "v3": "dreamt", "part": 1},

  # 2-USTUN (44..86)
  {"num": 44, "uz": "ruxsat bermoq", "v1": "let", "v2": "let", "v3": "let", "part": 2},
  {"num": 45, "uz": "yotmoq", "v1": "lie", "v2": "lay", "v3": "lain", "part": 2},
  {"num": 46, "uz": "yoqmoq, yoritmoq", "v1": "light", "v2": "lit", "v3": "lit", "part": 2},
  {"num": 47, "uz": "yo'qotmoq, yutqazmoq", "v1": "lose", "v2": "lost", "v3": "lost", "part": 2},
  {"num": 48, "uz": "yasamoq, qilmoq", "v1": "make", "v2": "made", "v3": "made", "part": 2},
  {"num": 49, "uz": "anglatmoq, nazarda tutmoq", "v1": "mean", "v2": "meant", "v3": "meant", "part": 2},
  {"num": 50, "uz": "uchrashmoq, kutib olmoq", "v1": "meet", "v2": "met", "v3": "met", "part": 2},
  {"num": 51, "uz": "to'lamoq", "v1": "pay", "v2": "paid", "v3": "paid", "part": 2},
  {"num": 52, "uz": "qo'ymoq", "v1": "put", "v2": "put", "v3": "put", "part": 2},
  {"num": 53, "uz": "o'qimoq", "v1": "read", "v2": "read", "v3": "read", "part": 2},
  {"num": 54, "uz": "minmoq (ot, velosiped)", "v1": "ride", "v2": "rode", "v3": "ridden", "part": 2},
  {"num": 55, "uz": "jiringlamoq, qo'ng'iroq qilmoq", "v1": "ring", "v2": "rang", "v3": "rung", "part": 2},
  {"num": 56, "uz": "ko'tarilmoq, chiqmoq", "v1": "rise", "v2": "rose", "v3": "risen", "part": 2},
  {"num": 57, "uz": "yugurmoq", "v1": "run", "v2": "ran", "v3": "run", "part": 2},
  {"num": 58, "uz": "aytmoq, demoq", "v1": "say", "v2": "said", "v3": "said", "part": 2},
  {"num": 59, "uz": "ko'rmoq", "v1": "see", "v2": "saw", "v3": "seen", "part": 2},
  {"num": 60, "uz": "sotmoq", "v1": "sell", "v2": "sold", "v3": "sold", "part": 2},
  {"num": 61, "uz": "yubormoq, jo'natmoq", "v1": "send", "v2": "sent", "v3": "sent", "part": 2},
  {"num": 62, "uz": "porlamoq, charaqlamoq", "v1": "shine", "v2": "shone", "v3": "shone", "part": 2},
  {"num": 63, "uz": "otmoq (o'q)", "v1": "shoot", "v2": "shot", "v3": "shot", "part": 2},
  {"num": 64, "uz": "ko'rsatmoq", "v1": "show", "v2": "showed", "v3": "shown", "part": 2},
  {"num": 65, "uz": "yopmoq", "v1": "shut", "v2": "shut", "v3": "shut", "part": 2},
  {"num": 66, "uz": "kuylamoq, ashula aytmoq", "v1": "sing", "v2": "sang", "v3": "sung", "part": 2},
  {"num": 67, "uz": "o'tirmoq", "v1": "sit", "v2": "sat", "v3": "sat", "part": 2},
  {"num": 68, "uz": "uxlamoq", "v1": "sleep", "v2": "slept", "v3": "slept", "part": 2},
  {"num": 69, "uz": "gapirmoq", "v1": "speak", "v2": "spoke", "v3": "spoken", "part": 2},
  {"num": 70, "uz": "sarflamoq, o'tkazmoq (vaqt)", "v1": "spend", "v2": "spent", "v3": "spent", "part": 2},
  {"num": 71, "uz": "turmoq, tik turmoq", "v1": "stand", "v2": "stood", "v3": "stood", "part": 2},
  {"num": 72, "uz": "o'g'irlamoq", "v1": "steal", "v2": "stole", "v3": "stolen", "part": 2},
  {"num": 73, "uz": "suzmoq", "v1": "swim", "v2": "swam", "v3": "swum", "part": 2},
  {"num": 74, "uz": "olmoq", "v1": "take", "v2": "took", "v3": "taken", "part": 2},
  {"num": 75, "uz": "o'rgatmoq, saboq bermoq", "v1": "teach", "v2": "taught", "v3": "taught", "part": 2},
  {"num": 76, "uz": "yirtmoq", "v1": "tear", "v2": "tore", "v3": "torn", "part": 2},
  {"num": 77, "uz": "aytib bermoq", "v1": "tell", "v2": "told", "v3": "told", "part": 2},
  {"num": 78, "uz": "o'ylamoq, fikrlamoq", "v1": "think", "v2": "thought", "v3": "thought", "part": 2},
  {"num": 79, "uz": "uloqtirmoq, otmoq", "v1": "throw", "v2": "threw", "v3": "thrown", "part": 2},
  {"num": 80, "uz": "tushunmoq, anglamoq", "v1": "understand", "v2": "understood", "v3": "understood", "part": 2},
  {"num": 81, "uz": "uyg'onmoq, uyg'otmoq", "v1": "wake", "v2": "woke", "v3": "woken", "part": 2},
  {"num": 82, "uz": "kiyib yurmoq", "v1": "wear", "v2": "wore", "v3": "worn", "part": 2},
  {"num": 83, "uz": "g'alaba qozonmoq, yutmoq", "v1": "win", "v2": "won", "v3": "won", "part": 2},
  {"num": 84, "uz": "yozmoq", "v1": "write", "v2": "wrote", "v3": "written", "part": 2},
  {"num": 85, "uz": "o'rganmoq", "v1": "learn", "v2": "learnt", "v3": "learnt", "part": 2},
  {"num": 86, "uz": "hidlamoq, hid taratmoq", "v1": "smell", "v2": "smelt", "v3": "smelt", "part": 2}
]

def generate_table_html(verb_list, title="Noto'g'ri Fe'llar Jadvali (Irregular Verbs)"):
    rows_html = ""
    for v in verb_list:
        rows_html += f"""
        <div class="table-row">
            <div class="col col-uz">
                <span class="num">{v['num']}</span>
                <span class="uz-text">{v['uz']}</span>
            </div>
            <div class="col col-v1">
                <div class="chip chip-v1">{v['v1']}</div>
            </div>
            <div class="col col-v2">
                <div class="chip chip-v2">{v['v2']}</div>
            </div>
            <div class="col col-v3">
                <div class="chip chip-v3">{v['v3']}</div>
            </div>
        </div>
        """
    
    return f"""<!DOCTYPE html>
<html lang="uz">
<head>
<meta charset="UTF-8">
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&display=swap');

* {{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}}

body {{
    background-color: #f8fafc;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 30px;
}}

.table-card {{
    background: #ffffff;
    border-radius: 20px;
    border: 2px solid #e2e8f0;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    width: 950px;
}}

.table-header-title {{
    padding: 20px 28px 16px 28px;
    border-bottom: 2px solid #f1f5f9;
    display: flex;
    justify-content: space-between;
    align-items: center;
}}

.table-header-title h2 {{
    font-size: 22px;
    font-weight: 900;
    color: #0f172a;
    display: flex;
    align-items: center;
    gap: 10px;
}}

.badge {{
    background: #dcfce7;
    color: #15803d;
    font-size: 13px;
    font-weight: 800;
    padding: 4px 12px;
    border-radius: 20px;
    border: 1px solid #bbf7d0;
}}

.table-header {{
    display: grid;
    grid-template-columns: 240px 1fr 1fr 1fr;
    padding: 14px 28px;
    background: #f8fafc;
    border-bottom: 2px solid #e2e8f0;
    font-size: 12px;
    font-weight: 800;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.8px;
}}

.table-row {{
    display: grid;
    grid-template-columns: 240px 1fr 1fr 1fr;
    align-items: center;
    padding: 11px 28px;
    border-bottom: 1px solid #f1f5f9;
}}

.table-row:nth-child(even) {{
    background-color: #fafafa;
}}

.table-row:last-child {{
    border-bottom: none;
}}

.col-uz {{
    display: flex;
    align-items: center;
    gap: 14px;
    padding-right: 15px;
}}

.num {{
    font-size: 12px;
    font-weight: 700;
    color: #94a3b8;
    min-width: 20px;
}}

.uz-text {{
    font-size: 15px;
    font-weight: 800;
    color: #1e293b;
    line-height: 1.3;
}}

.chip {{
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    padding: 8px 16px;
    border-radius: 12px;
    font-size: 15px;
    font-weight: 800;
    width: calc(100% - 14px);
    transition: transform 0.1s ease;
}}

.chip-v1 {{
    background-color: #f0fdf4;
    color: #16a34a;
    border: 1.5px solid #86efac;
    box-shadow: 0 2px 0 #bbf7d0;
}}

.chip-v2 {{
    background-color: #f0f9ff;
    color: #0284c7;
    border: 1.5px solid #7dd3fc;
    box-shadow: 0 2px 0 #bae6fd;
}}

.chip-v3 {{
    background-color: #faf5ff;
    color: #9333ea;
    border: 1.5px solid #d8b4fe;
    box-shadow: 0 2px 0 #e9d5ff;
}}
</style>
</head>
<body>

<div class="table-card" id="capture-card">
    <div class="table-header-title">
        <h2>⚡ {title}</h2>
        <span class="badge">Jami: {len(verb_list)} ta fe'l</span>
    </div>
    <div class="table-header">
        <div>O'zbekcha</div>
        <div>V1 (Infinitive)</div>
        <div>V2 (Past Simple)</div>
        <div>V3 (Past Participle)</div>
    </div>
    <div class="table-body">
        {rows_html}
    </div>
</div>

</body>
</html>
"""

def generate_two_column_poster_html(verb_list):
    part1 = [v for v in verb_list if v['part'] == 1]
    part2 = [v for v in verb_list if v['part'] == 2]

    def render_rows(items):
        html = ""
        for v in items:
            html += f"""
            <div class="table-row">
                <div class="col col-uz">
                    <span class="num">{v['num']}</span>
                    <span class="uz-text">{v['uz']}</span>
                </div>
                <div class="col col-v1"><div class="chip chip-v1">{v['v1']}</div></div>
                <div class="col col-v2"><div class="chip chip-v2">{v['v2']}</div></div>
                <div class="col col-v3"><div class="chip chip-v3">{v['v3']}</div></div>
            </div>
            """
        return html

    return f"""<!DOCTYPE html>
<html lang="uz">
<head>
<meta charset="UTF-8">
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&display=swap');

* {{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}}

body {{
    background-color: #f1f5f9;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}}

.poster-header {{
    width: 1750px;
    background: linear-gradient(135deg, #1e293b, #0f172a);
    color: white;
    padding: 24px 36px;
    border-radius: 20px 20px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
}}

.poster-header h1 {{
    font-size: 28px;
    font-weight: 900;
    letter-spacing: -0.5px;
    display: flex;
    align-items: center;
    gap: 12px;
}}

.poster-header .badge {{
    background: #22c55e;
    color: white;
    font-size: 15px;
    font-weight: 800;
    padding: 6px 16px;
    border-radius: 30px;
}}

.poster-grid {{
    width: 1750px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    background: #ffffff;
    padding: 24px;
    border-radius: 0 0 20px 20px;
    border: 2px solid #e2e8f0;
    border-top: none;
    box-shadow: 0 20px 25px -5px rgba(0,0,0,0.05);
}}

.sub-card {{
    background: #ffffff;
    border-radius: 16px;
    border: 1.5px solid #e2e8f0;
    overflow: hidden;
}}

.sub-header {{
    background: #f8fafc;
    padding: 12px 20px;
    border-bottom: 2px solid #e2e8f0;
    display: grid;
    grid-template-columns: 190px 1fr 1fr 1fr;
    font-size: 11px;
    font-weight: 800;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.6px;
}}

.table-row {{
    display: grid;
    grid-template-columns: 190px 1fr 1fr 1fr;
    align-items: center;
    padding: 9px 18px;
    border-bottom: 1px solid #f1f5f9;
}}

.table-row:nth-child(even) {{
    background-color: #fafafa;
}}

.table-row:last-child {{
    border-bottom: none;
}}

.col-uz {{
    display: flex;
    align-items: center;
    gap: 10px;
    padding-right: 10px;
}}

.num {{
    font-size: 11px;
    font-weight: 700;
    color: #94a3b8;
    min-width: 18px;
}}

.uz-text {{
    font-size: 13.5px;
    font-weight: 800;
    color: #1e293b;
    line-height: 1.25;
}}

.chip {{
    display: inline-flex;
    align-items: center;
    padding: 6px 12px;
    border-radius: 10px;
    font-size: 13.5px;
    font-weight: 800;
    width: calc(100% - 10px);
}}

.chip-v1 {{
    background-color: #f0fdf4;
    color: #16a34a;
    border: 1.5px solid #86efac;
}}

.chip-v2 {{
    background-color: #f0f9ff;
    color: #0284c7;
    border: 1.5px solid #7dd3fc;
}}

.chip-v3 {{
    background-color: #faf5ff;
    color: #9333ea;
    border: 1.5px solid #d8b4fe;
}}
</style>
</head>
<body>

<div id="poster-capture">
    <div class="poster-header">
        <h1>⚡ NOTO'G'RI FE'LLAR JADVALI (IRREGULAR VERBS)</h1>
        <span class="badge">Jami: 86 ta fe'l · 1 va 2-ustunlar</span>
    </div>
    <div class="poster-grid">
        <div class="sub-card">
            <div class="sub-header">
                <div>O'zbekcha</div>
                <div>V1 (Infinitive)</div>
                <div>V2 (Past Simple)</div>
                <div>V3 (Past Participle)</div>
            </div>
            <div class="table-body">
                {render_rows(part1)}
            </div>
        </div>
        <div class="sub-card">
            <div class="sub-header">
                <div>O'zbekcha</div>
                <div>V1 (Infinitive)</div>
                <div>V2 (Past Simple)</div>
                <div>V3 (Past Participle)</div>
            </div>
            <div class="table-body">
                {render_rows(part2)}
            </div>
        </div>
    </div>
</div>

</body>
</html>
"""

def main():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    output_dir = os.path.join(base_dir, "exports")
    os.makedirs(output_dir, exist_ok=True)

    # 1. Part 1 HTML
    p1_verbs = [v for v in verbs if v['part'] == 1]
    html_p1 = generate_table_html(p1_verbs, "Noto'g'ri Fe'llar 1-qism (1 - 43)")
    p1_path = os.path.join(output_dir, "temp_part1.html")
    with open(p1_path, "w", encoding="utf-8") as f:
        f.write(html_p1)

    # 2. Part 2 HTML
    p2_verbs = [v for v in verbs if v['part'] == 2]
    html_p2 = generate_table_html(p2_verbs, "Noto'g'ri Fe'llar 2-qism (44 - 86)")
    p2_path = os.path.join(output_dir, "temp_part2.html")
    with open(p2_path, "w", encoding="utf-8") as f:
        f.write(html_p2)

    # 3. All in 1 HTML
    html_all = generate_table_html(verbs, "Barcha 86 ta Noto'g'ri Fe'llar (1 - 86)")
    all_path = os.path.join(output_dir, "temp_all.html")
    with open(all_path, "w", encoding="utf-8") as f:
        f.write(html_all)

    # 4. Two columns Poster HTML
    html_poster = generate_two_column_poster_html(verbs)
    poster_path = os.path.join(output_dir, "temp_poster.html")
    with open(poster_path, "w", encoding="utf-8") as f:
        f.write(html_poster)

    print("Generating High-Resolution PNG images via Playwright...")

    with sync_playwright() as p:
        browser = p.chromium.launch()
        
        # 1. Part 1 PNG
        page = browser.new_page(device_scale_factor=2)
        page.goto(f"file:///{p1_path.replace(os.sep, '/')}")
        card = page.locator("#capture-card")
        p1_png = os.path.join(output_dir, "notogri_fellar_1_qism.png")
        card.screenshot(path=p1_png)
        print(f"Generated: {p1_png}")

        # 2. Part 2 PNG
        page.goto(f"file:///{p2_path.replace(os.sep, '/')}")
        card = page.locator("#capture-card")
        p2_png = os.path.join(output_dir, "notogri_fellar_2_qism.png")
        card.screenshot(path=p2_png)
        print(f"Generated: {p2_png}")

        # 3. Full Long PNG
        page.goto(f"file:///{all_path.replace(os.sep, '/')}")
        card = page.locator("#capture-card")
        all_png = os.path.join(output_dir, "notogri_fellar_barchasi_86ta.png")
        card.screenshot(path=all_png)
        print(f"Generated: {all_png}")

        # 4. Poster Side-by-Side PNG
        page.set_viewport_size({"width": 1850, "height": 2200})
        page.goto(f"file:///{poster_path.replace(os.sep, '/')}")
        poster = page.locator("#poster-capture")
        poster_png = os.path.join(output_dir, "notogri_fellar_poster_yonma_yon.png")
        poster.screenshot(path=poster_png)
        print(f"Generated: {poster_png}")

        browser.close()

    print("ALL PNG EXPORTS COMPLETED SUCCESSFULLY!")

if __name__ == "__main__":
    main()
