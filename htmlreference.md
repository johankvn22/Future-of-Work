<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>How AI Drives Happiness &amp; Productivity — MAXY Academy</title>
<meta name="description" content="Program hybrid 2 hari untuk HR Leader, Direktur, dan Owner. Pulang membawa sistem AI + Happiness siap jalan, bukan teori.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
:root{
  --navy:#0B1628;
  --navy-2:#132038;
  --navy-3:#1B2C4A;
  --blue:#1B4FD8;
  --cyan:#00C4E8;
  --amber:#F59E0B;
  --amber-dk:#B45309;
  --ink:#0F172A;
  --slate:#475569;
  --muted:#94A3B8;
  --line:#E2E8F0;
  --paper:#FFFFFF;
  --paper-2:#F8FAFC;
  --ok:#16A34A;
  --bad:#DC2626;
  --wa:#25D366;
  --display:'Plus Jakarta Sans',system-ui,sans-serif;
  --body:'Inter',system-ui,sans-serif;
  --wrap:1140px;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:var(--body);color:var(--ink);background:var(--paper);line-height:1.6;-webkit-font-smoothing:antialiased}
img{max-width:100%;display:block}
a{color:inherit}
.wrap{max-width:var(--wrap);margin:0 auto;padding:0 24px}
.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}

h1,h2,h3,.d{font-family:var(--display);font-weight:800;letter-spacing:-.02em;line-height:1.12}
.eyebrow{font-family:var(--display);font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase}

/* ── TOP BAR ─────────────────────────── */
.topbar{background:linear-gradient(90deg,#B45309,#F59E0B 45%,#B45309);color:#1A1200;padding:9px 0;position:sticky;top:0;z-index:60}
.topbar-in{display:flex;align-items:center;justify-content:center;gap:14px;flex-wrap:wrap;text-align:center}
.topbar-txt{font-family:var(--display);font-weight:700;font-size:13px}
.cd{display:flex;gap:5px}
.cd-unit{background:rgba(0,0,0,.82);color:#F59E0B;border-radius:5px;padding:2px 6px;min-width:36px;text-align:center;font-family:var(--display);font-weight:800;font-size:13px;line-height:1.35}
.cd-unit small{display:block;font-size:8px;font-weight:600;color:#FCD34D;letter-spacing:.06em}

/* ── HERO ────────────────────────────── */
.hero{background:var(--navy);color:#fff;position:relative;overflow:hidden;padding:64px 0 72px}
.hero::before,.hero::after{content:'';position:absolute;border-radius:50%;pointer-events:none}
.hero::before{width:640px;height:640px;background:radial-gradient(circle,rgba(27,79,216,.36),transparent 68%);top:-280px;right:-180px}
.hero::after{width:420px;height:420px;background:radial-gradient(circle,rgba(0,196,232,.16),transparent 70%);bottom:-220px;left:-160px}
.hero-in{position:relative;z-index:2;display:grid;grid-template-columns:1.15fr .85fr;gap:48px;align-items:center}
.hero .eyebrow{color:var(--cyan);margin-bottom:18px}
.hero h1{font-size:clamp(30px,4.1vw,50px);margin-bottom:20px}
.hero h1 .hl{color:var(--amber)}
.hero-sub{color:#C7D3E4;font-size:15.5px;margin-bottom:14px;max-width:56ch}
.hero-sub strong{color:#fff}
.hero-kicker{border-left:3px solid var(--cyan);padding-left:14px;color:#94A3B8;font-size:14px;font-style:italic;margin-bottom:26px;max-width:56ch}
.tags{display:flex;flex-direction:column;gap:9px;margin-bottom:28px}
.tag{display:flex;align-items:center;gap:10px;font-size:14.5px;font-weight:500;color:#E2E8F0}
.tag i{font-size:16px;flex-shrink:0}
.cta{display:inline-flex;align-items:center;justify-content:center;gap:9px;background:var(--amber);color:#1A1200;font-family:var(--display);font-weight:800;font-size:16px;padding:15px 30px;border-radius:9px;text-decoration:none;border:none;cursor:pointer;transition:transform .16s,box-shadow .16s;box-shadow:0 8px 24px rgba(245,158,11,.28)}
.cta:hover{transform:translateY(-2px);box-shadow:0 12px 30px rgba(245,158,11,.4)}
.cta.wide{width:100%;max-width:440px}
.cta-note{font-size:12.5px;color:var(--muted);margin-top:12px}
.hero-vid{background:linear-gradient(160deg,var(--navy-3),var(--navy-2));border:1px solid rgba(255,255,255,.12);border-radius:14px;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,.4)}
.vid-frame{aspect-ratio:16/10;background:#0A1120;display:flex;align-items:center;justify-content:center;position:relative;cursor:pointer;text-decoration:none}
.vid-frame::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 55%,rgba(11,22,40,.9))}
.play{width:62px;height:62px;border-radius:50%;background:var(--amber);display:flex;align-items:center;justify-content:center;position:relative;z-index:2;box-shadow:0 0 0 10px rgba(245,158,11,.16)}
.play::before{content:'';border-left:19px solid #1A1200;border-top:11px solid transparent;border-bottom:11px solid transparent;margin-left:5px}
.vid-cap{position:absolute;bottom:14px;left:16px;right:16px;z-index:2;font-size:12.5px;color:#CBD5E1;font-weight:500}
.hero-meta{padding:14px 16px;background:rgba(0,0,0,.28);font-size:12.5px;color:#94A3B8;display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap}
.hero-meta b{color:#fff}

/* ── TRUST ───────────────────────────── */
.trust{background:var(--paper-2);border-bottom:1px solid var(--line);padding:26px 0}
.trust-lbl{text-align:center;font-size:11px;font-weight:700;letter-spacing:.14em;color:var(--muted);margin-bottom:14px;text-transform:uppercase;font-family:var(--display)}
.logos{display:flex;flex-wrap:wrap;justify-content:center;gap:10px 12px;margin-bottom:14px}
.logo{background:#fff;border:1px solid var(--line);border-radius:7px;padding:7px 14px;font-family:var(--display);font-weight:700;font-size:12px;color:#475569;letter-spacing:.02em}
.badge-row{display:flex;justify-content:center}
.holon{background:var(--navy);color:#fff;border-radius:20px;padding:6px 16px;font-size:11.5px;font-weight:600;display:inline-flex;align-items:center;gap:7px}
.holon i{color:var(--amber)}

/* ── SECTIONS ────────────────────────── */
section{padding:76px 0}
.sec-head{text-align:center;max-width:760px;margin:0 auto 44px}
.sec-lbl{display:inline-block;background:#EFF4FF;color:var(--blue);border-radius:20px;padding:5px 14px;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;margin-bottom:14px;font-family:var(--display)}
.sec-head h2{font-size:clamp(25px,3.3vw,38px);margin-bottom:12px}
.sec-head p{color:var(--slate);font-size:15.5px}

/* problem */
.problem{background:var(--paper-2)}
.pgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(258px,1fr));gap:18px}
.pcard{background:#fff;border:1px solid var(--line);border-radius:13px;padding:24px;transition:transform .18s,box-shadow .18s}
.pcard:hover{transform:translateY(-3px);box-shadow:0 14px 34px rgba(15,23,42,.09)}
.pcard .ic{font-size:26px;margin-bottom:12px;display:block}
.pcard h3{font-size:16.5px;margin-bottom:8px;color:var(--ink)}
.pcard p{font-size:14px;color:var(--slate)}

/* transformation */
.tgrid{display:grid;grid-template-columns:1fr 1fr;gap:20px;max-width:960px;margin:0 auto}
.tcol{border-radius:15px;padding:28px}
.told{background:#FEF2F2;border:1px solid #FECACA}
.tnew{background:var(--navy);border:1px solid var(--navy-3);color:#fff}
.tcol h3{font-size:18px;margin-bottom:18px;display:flex;align-items:center;gap:9px}
.told h3{color:#991B1B}
.tnew h3{color:var(--amber)}
.titem{display:flex;gap:11px;align-items:flex-start;padding:9px 0;font-size:14.5px;line-height:1.55}
.told .titem{color:#7F1D1D;border-bottom:1px solid #FECACA}
.tnew .titem{color:#DBE5F2;border-bottom:1px solid rgba(255,255,255,.09)}
.titem:last-child{border-bottom:none}
.tmark{font-weight:800;flex-shrink:0;font-size:15px}
.told .tmark{color:var(--bad)}
.tnew .tmark{color:#34D399}

/* solution + days */
.solution{background:var(--paper-2)}
.pillars{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:34px}
.pillar{background:#fff;border:1px solid var(--line);border-radius:14px;padding:26px;position:relative;overflow:hidden}
.pillar::before{content:'';position:absolute;top:0;left:0;right:0;height:3px}
.p-happy::before{background:linear-gradient(90deg,var(--amber),#FCD34D)}
.p-ai::before{background:linear-gradient(90deg,var(--blue),var(--cyan))}
.p-day{font-family:var(--display);font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;margin-bottom:9px}
.p-happy .p-day{color:var(--amber-dk)}
.p-ai .p-day{color:var(--blue)}
.pillar h3{font-size:20px;margin-bottom:9px}
.p-hook{font-size:14.5px;color:var(--slate);margin-bottom:16px;font-style:italic;border-left:2px solid var(--line);padding-left:12px}
.p-list{list-style:none;display:flex;flex-direction:column;gap:9px}
.p-list li{display:flex;gap:10px;align-items:flex-start;font-size:14px;color:var(--ink)}
.p-list i{flex-shrink:0;margin-top:3px;font-size:14px}
.p-happy .p-list i{color:var(--amber)}
.p-ai .p-list i{color:var(--blue)}
.tools-bar{background:#fff;border:1px solid var(--line);border-radius:12px;padding:20px 24px;text-align:center}
.tools-bar .lbl{font-size:11px;font-weight:700;letter-spacing:.1em;color:var(--muted);text-transform:uppercase;margin-bottom:12px;font-family:var(--display)}
.tools-list{display:flex;justify-content:center;gap:9px;flex-wrap:wrap}
.tool{background:var(--paper-2);border:1px solid var(--line);border-radius:7px;padding:7px 15px;font-family:var(--display);font-weight:700;font-size:13px;color:var(--ink)}

/* value stack */
.value{background:var(--navy);color:#fff}
.value .sec-lbl{background:rgba(0,196,232,.14);color:var(--cyan)}
.value .sec-head h2{color:#fff}
.value .sec-head p{color:#94A3B8}
.vgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:12px;max-width:940px;margin:0 auto 34px}
.vitem{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:16px 18px;display:flex;gap:12px;align-items:flex-start;transition:background .16s,border-color .16s}
.vitem:hover{background:rgba(0,196,232,.09);border-color:rgba(0,196,232,.35)}
.vitem i{color:#34D399;font-size:17px;flex-shrink:0;margin-top:2px}
.vitem .vt{font-family:var(--display);font-weight:700;font-size:14.5px;margin-bottom:2px}
.vitem .vd{font-size:12.5px;color:#94A3B8;line-height:1.5}
.value-cta{text-align:center}

/* speakers */
.sgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px}
.scard{background:#fff;border:1px solid var(--line);border-radius:14px;padding:26px;text-align:center;transition:transform .18s,box-shadow .18s}
.scard:hover{transform:translateY(-3px);box-shadow:0 14px 34px rgba(15,23,42,.1)}
.savatar{width:88px;height:88px;border-radius:50%;background:linear-gradient(150deg,var(--navy),var(--navy-3));margin:0 auto 16px;display:flex;align-items:center;justify-content:center;font-family:var(--display);font-weight:800;font-size:26px;color:var(--amber);border:3px solid #fff;box-shadow:0 0 0 2px var(--line)}
.scard h3{font-size:17.5px;margin-bottom:5px}
.srole{font-size:12.5px;color:var(--blue);font-weight:600;margin-bottom:5px}
.scert{display:inline-block;background:var(--paper-2);border:1px solid var(--line);border-radius:14px;padding:3px 11px;font-size:11px;color:var(--slate);margin-bottom:12px}
.scard p{font-size:13.5px;color:var(--slate)}

/* testimonials */
.testi{background:var(--paper-2)}
.tstack{display:grid;grid-template-columns:repeat(auto-fit,minmax(288px,1fr));gap:18px}
.tcard{background:#fff;border:1px solid var(--line);border-radius:13px;padding:24px;position:relative}
.tcard::before{content:'"';position:absolute;top:8px;right:20px;font-family:var(--display);font-size:60px;color:var(--line);line-height:1}
.tquote{font-size:14.5px;color:var(--ink);margin-bottom:16px;position:relative;z-index:2;line-height:1.62}
.tauthor{display:flex;align-items:center;gap:11px;border-top:1px solid var(--line);padding-top:14px}
.tav{width:36px;height:36px;border-radius:50%;background:var(--navy);color:var(--amber);display:flex;align-items:center;justify-content:center;font-family:var(--display);font-weight:800;font-size:13px;flex-shrink:0}
.tname{font-family:var(--display);font-weight:700;font-size:13.5px}
.tmeta{font-size:11.5px;color:var(--muted)}

/* video testimoni + portfolio */
.vid-row{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:26px}
.vid-card{background:#fff;border:1px solid var(--line);border-radius:13px;overflow:hidden;text-decoration:none;display:block;transition:transform .18s,box-shadow .18s}
.vid-card:hover{transform:translateY(-3px);box-shadow:0 14px 34px rgba(15,23,42,.1)}
.vid-thumb{aspect-ratio:16/9;background:linear-gradient(150deg,var(--navy),var(--navy-3));display:flex;align-items:center;justify-content:center;position:relative}
.play-sm{width:48px;height:48px;border-radius:50%;background:rgba(245,158,11,.95);display:flex;align-items:center;justify-content:center}
.play-sm::before{content:'';border-left:15px solid #1A1200;border-top:9px solid transparent;border-bottom:9px solid transparent;margin-left:4px}
.vid-body{padding:16px 18px}
.vid-body .vt{font-family:var(--display);font-weight:700;font-size:14.5px;margin-bottom:3px}
.vid-body .vd{font-size:12.5px;color:var(--slate)}

/* pricing */
.price-grid{display:grid;grid-template-columns:1fr 1fr;gap:22px;max-width:940px;margin:0 auto 26px}
.pkg{background:#fff;border:1px solid var(--line);border-radius:16px;padding:30px;position:relative}
.pkg.best{border:2px solid var(--amber);box-shadow:0 18px 46px rgba(245,158,11,.16)}
.pkg-flag{position:absolute;top:-13px;left:50%;transform:translateX(-50%);background:var(--amber);color:#1A1200;font-family:var(--display);font-weight:800;font-size:11px;padding:5px 16px;border-radius:14px;white-space:nowrap;letter-spacing:.04em}
.pkg-name{font-family:var(--display);font-weight:800;font-size:15px;color:var(--slate);margin-bottom:6px}
.pkg-price{font-family:var(--display);font-weight:800;font-size:38px;color:var(--navy);line-height:1;margin-bottom:3px}
.pkg-per{font-size:12.5px;color:var(--muted);margin-bottom:20px}
.pkg-list{list-style:none;display:flex;flex-direction:column;gap:10px;margin-bottom:24px}
.pkg-list li{display:flex;gap:10px;align-items:flex-start;font-size:13.8px;color:var(--ink);line-height:1.5}
.pkg-list i{color:var(--ok);flex-shrink:0;margin-top:3px;font-size:14px}
.pkg-list li.bonus{color:var(--amber-dk);font-weight:600}
.pkg-list li.bonus i{color:var(--amber)}
.btn-out{display:block;text-align:center;border:1.5px solid var(--navy);color:var(--navy);font-family:var(--display);font-weight:700;font-size:14.5px;padding:13px;border-radius:9px;text-decoration:none;transition:background .16s,color .16s}
.btn-out:hover{background:var(--navy);color:#fff}
.inhouse{background:var(--paper-2);border:1px dashed var(--muted);border-radius:13px;padding:22px;text-align:center;max-width:940px;margin:0 auto 26px}
.inhouse h3{font-size:16.5px;margin-bottom:6px}
.inhouse p{font-size:14px;color:var(--slate);margin-bottom:14px}
.wa-btn{display:inline-flex;align-items:center;gap:9px;background:var(--wa);color:#fff;font-family:var(--display);font-weight:800;font-size:15px;padding:14px 28px;border-radius:9px;text-decoration:none;transition:transform .16s}
.wa-btn:hover{transform:translateY(-2px)}

/* form */
.form-box{max-width:620px;margin:0 auto;background:#fff;border:1px solid var(--line);border-radius:16px;padding:32px}
.form-box h3{font-size:20px;margin-bottom:5px;text-align:center}
.form-box .fsub{font-size:13.5px;color:var(--slate);text-align:center;margin-bottom:24px}
.frow{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px}
.fgroup{display:flex;flex-direction:column}
.fgroup.full{grid-column:1/-1}
label{font-family:var(--display);font-size:12px;font-weight:700;color:var(--slate);margin-bottom:5px}
input,select{padding:11px 13px;border:1px solid var(--line);border-radius:8px;font-size:14px;font-family:var(--body);color:var(--ink);background:var(--paper-2);outline:none;transition:border-color .15s,background .15s}
input:focus,select:focus{border-color:var(--blue);background:#fff}
.form-note{font-size:12px;color:var(--muted);text-align:center;margin-top:12px}

/* final */
.final{background:var(--navy);color:#fff;text-align:center;position:relative;overflow:hidden}
.final::before{content:'';position:absolute;width:700px;height:700px;border-radius:50%;background:radial-gradient(circle,rgba(27,79,216,.3),transparent 70%);top:-320px;left:50%;transform:translateX(-50%)}
.final-in{position:relative;z-index:2}
.final .sec-lbl{background:rgba(245,158,11,.14);color:var(--amber)}
.final h2{font-size:clamp(25px,3.3vw,38px);margin-bottom:28px;color:#fff}
.final h2 .hl{color:var(--amber)}
.det{display:flex;justify-content:center;gap:12px;flex-wrap:wrap;margin-bottom:30px}
.det-item{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:9px;padding:13px 20px;display:flex;align-items:center;gap:9px;font-size:14px;color:#DBE5F2}
.det-item i{color:var(--cyan);font-size:16px}

/* faq */
.faq-list{max-width:780px;margin:0 auto}
.faq{border-bottom:1px solid var(--line)}
.faq summary{padding:19px 0;font-family:var(--display);font-weight:700;font-size:15.5px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:16px;list-style:none;color:var(--ink)}
.faq summary::-webkit-details-marker{display:none}
.faq summary::after{content:'+';font-size:22px;color:var(--blue);font-weight:400;flex-shrink:0;transition:transform .2s}
.faq[open] summary::after{transform:rotate(45deg)}
.faq-a{padding:0 0 19px;font-size:14.5px;color:var(--slate);max-width:66ch}

/* footer */
footer{background:var(--navy);border-top:1px solid rgba(255,255,255,.1);padding:34px 0;text-align:center;color:var(--muted);font-size:12.5px}
footer .fbrand{font-family:var(--display);font-weight:800;color:#fff;font-size:16px;margin-bottom:6px}

/* float wa */
.float-wa{position:fixed;bottom:22px;right:22px;width:56px;height:56px;border-radius:50%;background:var(--wa);display:flex;align-items:center;justify-content:center;box-shadow:0 8px 26px rgba(37,211,102,.45);z-index:50;text-decoration:none;transition:transform .16s}
.float-wa:hover{transform:scale(1.08)}
.float-wa svg{width:29px;height:29px;fill:#fff}

@media(max-width:880px){
  .hero-in,.tgrid,.pillars,.price-grid,.vid-row{grid-template-columns:1fr}
  .hero{padding:44px 0 52px}
  section{padding:56px 0}
  .frow{grid-template-columns:1fr}
  .hero-vid{order:-1}
}
@media(prefers-reduced-motion:reduce){
  *{animation:none!important;transition:none!important;scroll-behavior:auto!important}
}
</style>
</head>
<body>

<!-- ═══ TOP BAR ═══ -->
<div class="topbar">
  <div class="wrap topbar-in">
    <span class="topbar-txt">🔥 SPECIAL PRICE &amp; BONUS — 10 PENDAFTAR PERTAMA</span>
    <div class="cd" id="cd" aria-label="Hitung mundur penutupan pendaftaran">
      <div class="cd-unit"><span id="cd-d">00</span><small>HARI</small></div>
      <div class="cd-unit"><span id="cd-h">00</span><small>JAM</small></div>
      <div class="cd-unit"><span id="cd-m">00</span><small>MNT</small></div>
      <div class="cd-unit"><span id="cd-s">00</span><small>DTK</small></div>
    </div>
  </div>
</div>

<!-- ═══ HERO ═══ -->
<header class="hero">
  <div class="wrap hero-in">
    <div>
      <div class="eyebrow">Hybrid Class · 28–29 Juli 2026 · 08.30–17.00 WIB · MAXY AI HUB Jakarta</div>
      <h1>Sistem kerja Anda sedang menguras profit &amp; mencetak <span class="hl">burnout.</span></h1>
      <p class="hero-sub">Tim Anda tidak butuh sesi motivasi tambahan. <strong>Mereka butuh sistem.</strong> Setiap jam yang Anda tunda mengadopsi AI adalah jam terbuang untuk pekerjaan repetitif — sementara talenta terbaik Anda diam-diam membuka lowongan di tab sebelah.</p>
      <p class="hero-kicker">Sementara Anda masih menanti laporan manual, eksekutif di perusahaan kompetitor sudah mengambil keputusan bisnis 60% lebih cepat dengan AI.</p>
      <div class="tags">
        <div class="tag"><i>🚨</i> Selamatkan top performer sebelum mereka resign</div>
        <div class="tag"><i>🤖</i> 100% use case nyata untuk eksekutif — bukan teori teknis</div>
        <div class="tag"><i>📈</i> Pulang membawa 8 deliverable siap jalan besok pagi</div>
      </div>
      <a href="#daftar" class="cta">Amankan Slot Anda Sekarang →</a>
      <p class="cta-note">Untuk HR Manager · Direktur · Entrepreneur · Owner</p>
    </div>
    <div class="hero-vid">
      <a href="#daftar" class="vid-frame" aria-label="Tonton video program lalu daftar">
        <div class="play" aria-hidden="true"></div>
        <span class="vid-cap">▶ Tonton: Apa yang terjadi di 2 hari kelas ini</span>
      </a>
      <div class="hero-meta">
        <span>📅 <b>28–29 Juli 2026</b></span>
        <span>🎓 <b>Online &amp; Onsite</b></span>
        <span>⏱️ <b>2 × 8 jam</b></span>
      </div>
    </div>
  </div>
</header>

<!-- ═══ TRUST ═══ -->
<div class="trust">
  <div class="wrap">
    <div class="trust-lbl">Dipercaya oleh</div>
    <div class="logos">
      <span class="logo">ASSA</span>
      <span class="logo">SINARMAS LAND</span>
      <span class="logo">BANK BRI</span>
      <span class="logo">TRIPUTRA GROUP</span>
      <span class="logo">PLN ICON PLUS</span>
      <span class="logo">ADIRA FINANCE</span>
      <span class="logo">ANTERAJA</span>
      <span class="logo">MITO</span>
      <span class="logo">100+ Organisasi Lainnya</span>
    </div>
    <div class="badge-row">
      <span class="holon"><i>🏆</i> HolonIQ Southeast Asia EdTech Top 50</span>
    </div>
  </div>
</div>

<!-- ═══ PROBLEM ═══ -->
<section class="problem">
  <div class="wrap">
    <div class="sec-head">
      <span class="sec-lbl">Evaluasi Kritis</span>
      <h2>Waktu Anda habis. Model kepemimpinan tradisional resmi kedaluwarsa.</h2>
      <p>Mari lihat realita di lapangan hari ini — dan kenali mana yang sedang terjadi di organisasi Anda.</p>
    </div>
    <div class="pgrid">
      <div class="pcard">
        <span class="ic">😩</span>
        <h3>Target meroket, tapi tim burnout</h3>
        <p>Ekspektasi bisnis naik, tapi Anda masih memaksa tim mengejarnya dengan workflow manual. Ini bukan soal dedikasi — ini soal menunggu sistem hancur karena kelelahan massal.</p>
      </div>
      <div class="pcard">
        <span class="ic">😤</span>
        <h3>Talenta terbaik ada di ambang pintu keluar</h3>
        <p>Yang paling produktif justru beban kerjanya paling tidak masuk akal. Biaya kerugian saat kompetitor membajak high performer Anda jauh lebih fatal dari yang Anda bayangkan.</p>
      </div>
      <div class="pcard">
        <span class="ic">📉</span>
        <h3>AI Anda berakhir sebagai "cost dengan zero impact"</h3>
        <p>Perusahaan membayar langganan tools AI, tapi operasional masih manual. Adopsi trial &amp; error tanpa roadmap hanya membakar anggaran tanpa menyentuh akar masalah.</p>
      </div>
      <div class="pcard">
        <span class="ic">😰</span>
        <h3>Tenggelam birokrasi saat kompetitor berekspansi</h3>
        <p>Masih menunggu berminggu-minggu untuk olah data? Eksekutif lain memetakan pasar dalam hitungan jam dengan AI. Eksekutif yang lambat adalah eksekutif yang tertinggal.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═══ TRANSFORMATION ═══ -->
<section>
  <div class="wrap">
    <div class="sec-head">
      <span class="sec-lbl">Pilihan Ada di Tangan Anda</span>
      <h2>Jawabannya bukan menambah jam kerja. Jawabannya adalah leverage AI dengan benar.</h2>
    </div>
    <div class="tgrid">
      <div class="tcol told">
        <h3>😮‍💨 Manajemen Konvensional</h3>
        <div class="titem"><span class="tmark">✕</span> Mengorbankan banyak waktu untuk bekerja manual dalam analisis &amp; tugas repetitif</div>
        <div class="titem"><span class="tmark">✕</span> Mengorbankan kesejahteraan karyawan demi target jangka pendek</div>
        <div class="titem"><span class="tmark">✕</span> Pengambilan keputusan selalu terhambat birokrasi dan olah data</div>
        <div class="titem"><span class="tmark">✕</span> Membiarkan talenta terbaik burnout karena beban kerja tak terukur</div>
      </div>
      <div class="tcol tnew">
        <h3>⚡ AI &amp; Happiness-Driven</h3>
        <div class="titem"><span class="tmark">✓</span> Hemat banyak waktu dalam mengerjakan tugas repetitif</div>
        <div class="titem"><span class="tmark">✓</span> Ubah wellbeing karyawan menjadi keunggulan bisnis yang terukur</div>
        <div class="titem"><span class="tmark">✓</span> Jadikan AI co-pilot strategis untuk keputusan yang lebih cepat &amp; tajam</div>
        <div class="titem"><span class="tmark">✓</span> Jaga top performer Anda pada performa terbaiknya tanpa perlu takut turnover tinggi</div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ SOLUSI ═══ -->
<section class="solution">
  <div class="wrap">
    <div class="sec-head">
      <span class="sec-lbl">Solusi Anda Ada di Sini</span>
      <h2>How AI Drives Happiness &amp; Productivity</h2>
      <p>Dua hari. Dua dimensi transformasi. Program hybrid eksklusif yang memadukan sains <em>Happiness at Work</em> dengan implementasi AI praktis — dua hal yang sering dipandang terpisah, padahal saling menguatkan.</p>
    </div>

    <div class="pillars">
      <div class="pillar p-happy">
        <div class="p-day">Hari 1 · Fondasi</div>
        <h3>🧠 Happiness at Work</h3>
        <p class="p-hook">"Kenapa 79 dari 100 karyawan sudah 'resign' secara mental — dan Anda belum menyadarinya."</p>
        <ul class="p-list">
          <li><i>◆</i> Bukti kuantitatif kenapa happiness adalah keputusan bisnis, bukan program CSR</li>
          <li><i>◆</i> Garis pemisah antara <em>satisfaction</em> dan <em>happiness</em> — dan Fish Philosophy sebagai model kerja</li>
          <li><i>◆</i> Empat prinsip Fish Philosophy &amp; model ERIC: rancang kebiasaan personal yang menular ke tim</li>
          <li><i>◆</i> Petakan posisi organisasi Anda di salah satu dari 3 tahap <em>Happily Productive Journey</em></li>
        </ul>
      </div>
      <div class="pillar p-ai">
        <div class="p-day">Hari 2 · Implementasi</div>
        <h3>🤖 AI for Happily Productive</h3>
        <p class="p-hook">"Dari beban kerja rutin yang menumpuk, jadi asisten AI personal yang bekerja untuk Anda."</p>
        <ul class="p-list">
          <li><i>◆</i> Diskusi reflektif membangun mindset keterbukaan terhadap disrupsi AI di cara kerja Anda</li>
          <li><i>◆</i> FGD menyelaraskan konsep <em>Happily Productive 3.0</em> dengan fitur-fitur nyata FlowBuddy</li>
          <li><i>◆</i> Kuasai framework RCTF (Role, Context, Task, Format) untuk sintesis &amp; kelola dokumen kerja internal</li>
          <li><i>◆</i> Rancang AI assistant personal (Custom Gem) untuk otomatisasi tugas rutin sesuai peran Anda</li>
        </ul>
      </div>
    </div>

    <div class="tools-bar">
      <div class="lbl">AI Tools yang akan dikuasai</div>
      <div class="tools-list">
        <span class="tool">ChatGPT</span>
        <span class="tool">Gemini</span>
        <span class="tool">NotebookLM</span>
        <span class="tool">FlowBuddy</span>
      </div>
    </div>
  </div>
</section>

<!-- ═══ VALUE STACK ═══ -->
<section class="value">
  <div class="wrap">
    <div class="sec-head">
      <span class="sec-lbl">ROI yang Langsung Terlihat</span>
      <h2>Anda pulang membawa deliverables, bukan teori.</h2>
      <p>Dalam 2 hari, Anda tidak hanya <em>tahu</em> cara membangun tim yang happily productive — Anda pulang membawa sistemnya, siap jalan besok pagi.</p>
    </div>
    <div class="vgrid">
      <div class="vitem"><i>✓</i><div><div class="vt">GAP Analysis Cara Kerja</div><div class="vd">Jarak nyata organisasi Anda menuju future of work — bukan asumsi</div></div></div>
      <div class="vitem"><i>✓</i><div><div class="vt">Matriks Sinergi Talenta</div><div class="vd">Peta jelas: mana tugas milik manusia, mana milik AI automation</div></div></div>
      <div class="vitem"><i>✓</i><div><div class="vt">Simulasi FlowBuddy Teruji</div><div class="vd">Satu kasus kerja nyata Anda, dijalankan lewat meeting/decision partner</div></div></div>
      <div class="vitem"><i>✓</i><div><div class="vt">Personal Happiness Practice</div><div class="vd">Jurnal refleksi harian (gratitude/mood tracking) yang bisa terus jalan</div></div></div>
      <div class="vitem"><i>✓</i><div><div class="vt">Prompt RCTF Terstruktur</div><div class="vd">Untuk satu tugas nyata — laporan, ringkasan rapat, atau lainnya</div></div></div>
      <div class="vitem"><i>✓</i><div><div class="vt">Sumber NotebookLM Aktif</div><div class="vd">Dokumen kerja Anda sendiri, siap tanya-jawab &amp; ringkasan otomatis</div></div></div>
      <div class="vitem"><i>✓</i><div><div class="vt">Custom Gem Dibangun Utuh</div><div class="vd">Instruksi, default tool, dan knowledge file sesuai peran Anda</div></div></div>
      <div class="vitem"><i>✓</i><div><div class="vt">Custom Gem Teruji &amp; Disempurnakan</div><div class="vd">Diuji pada kasus nyata, direvisi langsung dari hasilnya</div></div></div>
    </div>
    <div class="value-cta">
      <a href="#daftar" class="cta">Daftar &amp; Bawa Pulang Sistemnya →</a>
    </div>
  </div>
</section>

<!-- ═══ PEMATERI ═══ -->
<section>
  <div class="wrap">
    <div class="sec-head">
      <span class="sec-lbl">Pemateri</span>
      <h2>Tiga pakar. Tiga perspektif yang saling melengkapi.</h2>
    </div>
    <div class="sgrid">
      <div class="scard">
        <div class="savatar">RS</div>
        <h3>Ruben Saragih, CPC, MM, MBA</h3>
        <div class="srole">Chief Happiness Officer</div>
        <div class="scert">Certified by Woohoo Academy Denmark</div>
        <p>Pakar happiness at work yang mendampingi ratusan perusahaan di Indonesia. Menghubungkan wellbeing science dengan strategi bisnis terukur.</p>
      </div>
      <div class="scard">
        <div class="savatar">AB</div>
        <h3>Andy F. Bintoro, S.Kom., MBA</h3>
        <div class="srole">Co-Founder &amp; CTO MAXY Academy</div>
        <div class="scert">AI Expert</div>
        <p>Memimpin implementasi AI untuk 100+ organisasi di Indonesia — dari enterprise hingga institusi pemerintah.</p>
      </div>
      <div class="scard">
        <div class="savatar">IM</div>
        <h3>Isaac Munandar</h3>
        <div class="srole">Co-Founder &amp; CEO MAXY Academy</div>
        <div class="scert">AI Strategist</div>
        <p>Membangun MAXY Academy menjadi HolonIQ SEA Top 50 EdTech dengan jaringan 350+ universitas dan 100+ perusahaan mitra.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═══ TESTIMONI 1 ═══ -->
<section class="testi">
  <div class="wrap">
    <div class="sec-head">
      <span class="sec-lbl">Dari Sesama Leader</span>
      <h2>Bukan sekadar klaim kami. Ini pengalaman nyata mereka.</h2>
    </div>
    <div class="tstack">
      <div class="tcard">
        <p class="tquote">Jadi paham bahwa AI sangat berdampak pada Human Capital kita tanpa mengesampingkan productivity, dan juga bisa increase happiness mereka di tempat kerja.</p>
        <div class="tauthor"><div class="tav">A</div><div><div class="tname">Anita</div><div class="tmeta">Human Capital Officer · Ciputra Group, Jakarta</div></div></div>
      </div>
      <div class="tcard">
        <p class="tquote">Saya belajar strategi untuk melakukan analisis secara terstruktur dengan AI. Ternyata AI itu mudah dipelajari oleh semua kalangan dan sangat membantu mengkombinasikan produktif dan happily untuk diterapkan di perusahaan.</p>
        <div class="tauthor"><div class="tav">W</div><div><div class="tname">Wisnu</div><div class="tmeta">PT. Dharma Satya Nusantara Tbk</div></div></div>
      </div>
      <div class="tcard">
        <p class="tquote">Pelatihannya seru dan sangat membantu, kami jadi mengenal berbagai AI Tools yang ternyata bisa membantu proses kerja jadi lebih efektif.</p>
        <div class="tauthor"><div class="tav">AR</div><div><div class="tname">Ahmad Rizki S.</div><div class="tmeta">Program Communication · ADIRA Finance</div></div></div>
      </div>
    </div>
    <div class="vid-row">
      <a href="#daftar" class="vid-card">
        <div class="vid-thumb"><div class="play-sm" aria-hidden="true"></div></div>
        <div class="vid-body"><div class="vt">▶ Video Testimoni Peserta</div><div class="vd">Dengar langsung dari HR Leader yang sudah menerapkannya</div></div>
      </a>
      <a href="#daftar" class="vid-card">
        <div class="vid-thumb"><div class="play-sm" aria-hidden="true"></div></div>
        <div class="vid-body"><div class="vt">▶ Video Portfolio Program</div><div class="vd">Lihat suasana kelas &amp; deliverable nyata peserta</div></div>
      </a>
    </div>
  </div>
</section>

<!-- ═══ PRICING ═══ -->
<section id="daftar">
  <div class="wrap">
    <div class="sec-head">
      <span class="sec-lbl">Amankan Kursi Anda Sekarang</span>
      <h2>Investasi strategis untuk organisasi Anda</h2>
    </div>
    <div class="price-grid">
      <div class="pkg">
        <div class="pkg-name">PAKET ONLINE · Fleksibel</div>
        <div class="pkg-price">Rp 1.800.000</div>
        <div class="pkg-per">per peserta</div>
        <ul class="pkg-list">
          <li><i>✓</i> Akses kelas interaktif live via Zoom 2 hari penuh (bukan rekaman)</li>
          <li><i>✓</i> Seluruh 8 deliverable siap pakai</li>
          <li><i>✓</i> Template workflow AI khusus eksekutif</li>
          <li><i>✓</i> Draft AI Adoption Roadmap 30 hari</li>
          <li><i>✓</i> Sesi Q&amp;A langsung dengan para pemateri</li>
          <li><i>✓</i> E-Certificate resmi MAXY Academy</li>
          <li><i>✓</i> Invoice &amp; dokumen pengadaan korporat</li>
        </ul>
        <a href="#form" class="btn-out">Pilih Paket Online</a>
      </div>
      <div class="pkg best">
        <span class="pkg-flag">⭐ RECOMMENDED</span>
        <div class="pkg-name">PAKET ONSITE EKSKLUSIF</div>
        <div class="pkg-price">Rp 2.500.000</div>
        <div class="pkg-per">per peserta · MAXY AI HUB Jakarta</div>
        <ul class="pkg-list">
          <li><i>✓</i> Akses onsite 2 hari penuh di MAXY AI HUB, Jakarta</li>
          <li><i>✓</i> Semua benefit pada paket Online</li>
          <li class="bonus"><i>★</i> Bonus 10 pendaftar pertama: Free 1-on-1 Mentoring Session</li>
          <li class="bonus"><i>★</i> Bonus: Buku fisik "Happiness at Work" (senilai Rp 250.000)</li>
          <li><i>✓</i> Networking tatap muka sesama HR Leader &amp; Owner</li>
          <li><i>✓</i> Akses fasilitas premium MAXY AI HUB</li>
          <li><i>✓</i> Makan siang &amp; coffee break 2 hari</li>
        </ul>
        <a href="#form" class="btn-out" style="border-color:var(--amber);background:var(--amber);color:#1A1200">Pilih Paket Onsite ⭐</a>
      </div>
    </div>

    <div class="inhouse">
      <h3>🏢 Tersedia Paket In-House Corporate</h3>
      <p>Latih seluruh divisi di kantor Anda dengan kurikulum yang dikustomisasi sesuai industri spesifik perusahaan Anda.</p>
      <a href="#" class="wa-btn" id="wa-inhouse">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.2-.5 0-.2 0-.4-.1-.5C10 9.2 9.5 8 9.3 7.5c-.2-.5-.4-.4-.5-.4h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.1.2 2.1 3.2 5 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2z"/></svg>
        Konsultasi Paket In-House
      </a>
    </div>

    <div class="form-box" id="form">
      <h3>Formulir Pendaftaran</h3>
      <p class="fsub">Isi data berikut — tim kami akan menghubungi Anda dalam 1×24 jam kerja.</p>
      <form id="regForm">
        <div class="frow">
          <div class="fgroup"><label for="nm">Nama Lengkap</label><input type="text" id="nm" required placeholder="Nama Anda"></div>
          <div class="fgroup"><label for="wa">Nomor WhatsApp</label><input type="tel" id="wa" required placeholder="08xxxxxxxxxx"></div>
        </div>
        <div class="frow">
          <div class="fgroup"><label for="em">Email</label><input type="email" id="em" required placeholder="nama@perusahaan.com"></div>
          <div class="fgroup"><label for="cm">Perusahaan</label><input type="text" id="cm" placeholder="Nama perusahaan"></div>
        </div>
        <div class="frow">
          <div class="fgroup"><label for="jb">Jabatan</label>
            <select id="jb">
              <option>HR Manager / People &amp; Culture</option>
              <option>Direktur / C-Level</option>
              <option>Founder / Business Owner</option>
              <option>Konsultan HR</option>
              <option>Lainnya</option>
            </select>
          </div>
          <div class="fgroup"><label for="pk">Paket Dipilih</label>
            <select id="pk">
              <option>Onsite Eksklusif — Rp 2.500.000</option>
              <option>Online — Rp 1.800.000</option>
              <option>In-House Corporate (konsultasi)</option>
            </select>
          </div>
        </div>
        <button type="submit" class="cta wide" style="margin-top:8px">Kirim Pendaftaran →</button>
      </form>
      <p class="form-note">Atau daftar langsung via WhatsApp: <b>Felicia · +62 821 4499 5255</b></p>
    </div>
  </div>
</section>

<!-- ═══ TESTIMONI 2 ═══ -->
<section class="testi">
  <div class="wrap">
    <div class="sec-head">
      <span class="sec-lbl">Masih Mempertimbangkan?</span>
      <h2>Mereka juga ragu di awal. Ini yang mereka rasakan setelahnya.</h2>
    </div>
    <div class="tstack" style="max-width:820px;margin:0 auto">
      <div class="tcard">
        <p class="tquote">Training ini membuka perspektif saya tentang pentingnya happiness &amp; productivity. Jadi sadar bahwa perusahaan bukan hanya soal target besar, tetapi karyawan di dalamnya perlu merasa happiness agar dapat memberikan impact yang lebih baik.</p>
        <div class="tauthor"><div class="tav">H</div><div><div class="tname">Haryadi</div><div class="tmeta">TBN Indonesia, Jakarta</div></div></div>
      </div>
      <div class="tcard">
        <p class="tquote">Dari sini saya jadi paham bahwa kita bisa meningkatkan kualitas orang-orang di perusahaan kita dengan mengimplementasikan tools AI dan happiness at work yang tadi diajarkan.</p>
        <div class="tauthor"><div class="tav">L</div><div><div class="tname">Lintang</div><div class="tmeta">Human Resources · PT. Garuda Metalindo, Tbk.</div></div></div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ FINAL OFFER ═══ -->
<section class="final">
  <div class="wrap final-in">
    <span class="sec-lbl">Detail Program</span>
    <h2>Sementara Anda mempertimbangkan,<br>kompetitor sudah <span class="hl">berekspansi hari ini.</span></h2>
    <div class="det">
      <div class="det-item"><i>📅</i> 28–29 Juli 2026 · 08.30–17.00 WIB</div>
      <div class="det-item"><i>📍</i> MAXY AI HUB · Grha Pengharapan Lt. 2, Jakarta Selatan</div>
      <div class="det-item"><i>🎓</i> Online (Zoom) &amp; Onsite tersedia</div>
    </div>
    <a href="#daftar" class="cta">Amankan Slot Anda Sekarang →</a>
  </div>
</section>

<!-- ═══ FAQ ═══ -->
<section>
  <div class="wrap">
    <div class="sec-head">
      <span class="sec-lbl">FAQ</span>
      <h2>Pertanyaan umum</h2>
    </div>
    <div class="faq-list">
      <details class="faq" open>
        <summary>Apakah program ini cocok untuk leader non-teknis?</summary>
        <p class="faq-a">Ya. Program ini didesain khusus untuk HR leader, direktur, dan eksekutif tanpa background IT. Fokusnya pada use case bisnis, bukan sisi teknis coding. Model yang kami pakai adalah "Partner, Bukan Pengganti" — AI mempercepat eksekusi keahlian Anda, bukan menggantikannya.</p>
      </details>
      <details class="faq">
        <summary>Bisakah perusahaan mengirim beberapa peserta sekaligus?</summary>
        <p class="faq-a">Bisa. Tersedia harga grup dan paket in-house untuk pelatihan satu divisi penuh. Invoice resmi dan dokumen pengadaan tersedia. Hubungi Felicia di 0821-4499-5255 untuk penawaran korporat.</p>
      </details>
      <details class="faq">
        <summary>Tools AI apa yang perlu disiapkan?</summary>
        <p class="faq-a">Cukup laptop dan akun Google. Praktik bisa diikuti dengan versi gratis ChatGPT, Gemini, NotebookLM, dan FlowBuddy. Checklist lengkap dikirim sebelum hari-H.</p>
      </details>
      <details class="faq">
        <summary>Spesifikasi perangkat apa yang dibutuhkan?</summary>
        <p class="faq-a">Laptop atau PC desktop (bukan smartphone/tablet, karena multitasking terbatas). Windows 10+ atau macOS Monterey+, prosesor setara Intel Core i3 gen-8 atau AMD Ryzen 3, RAM minimal 8 GB, browser terbaru (Chrome/Edge/Safari), dan koneksi internet stabil minimal 10 Mbps.</p>
      </details>
      <details class="faq">
        <summary>Apa perbedaan paket Online dan Onsite?</summary>
        <p class="faq-a">Materi dan deliverable sama persis. Onsite memberikan networking langsung sesama leader, akses fasilitas premium MAXY AI HUB, bonus buku fisik <em>Happiness at Work</em>, serta sesi 1-on-1 mentoring khusus 10 pendaftar pertama.</p>
      </details>
      <details class="faq">
        <summary>Apa yang benar-benar saya bawa pulang setelah 2 hari?</summary>
        <p class="faq-a">Delapan deliverable siap pakai: GAP Analysis cara kerja organisasi, Matriks Sinergi Talenta (Human vs AI), simulasi FlowBuddy yang teruji pada kasus nyata, personal happiness journal, prompt RCTF terstruktur, sumber NotebookLM aktif dari dokumen kerja Anda, serta Custom Gem yang dibangun dan disempurnakan langsung di kelas. Semuanya dibangun dengan peran dan dokumen kerja Anda sendiri selama kelas berlangsung.</p>
      </details>
    </div>
  </div>
</section>

<footer>
  <div class="wrap">
    <div class="fbrand">MAXY ACADEMY</div>
    <p>Driven by AI. Led by Humanity.</p>
    <p style="margin-top:8px">© 2026 MAXY Academy · HolonIQ SEA EdTech Top 50 · 350+ Universitas &amp; 100+ Perusahaan Mitra</p>
  </div>
</footer>

<a href="#" class="float-wa" id="wa-float" aria-label="Hubungi via WhatsApp">
  <svg viewBox="0 0 24 24"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.2-.5 0-.2 0-.4-.1-.5C10 9.2 9.5 8 9.3 7.5c-.2-.5-.4-.4-.5-.4h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.1.2 2.1 3.2 5 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2z"/></svg>
</a>

<script>
/* ─────────────────────────────────────────
   CONFIG — ubah nilai di sini saja
───────────────────────────────────────── */
const CONFIG = {
  deadline: "2026-07-27T23:59:59+07:00",   // penutupan pendaftaran
  waNumber: "6282144995255",               // WA Felicia
  waText:   "Halo MAXY, saya ingin daftar kelas The Future of Work 28-29 Juli 2026.",
  waInhouse:"Halo MAXY, saya ingin tanya paket In-House Corporate untuk The Future of Work.",
  videoHero:      "#",   // link video utama  → arahkan ke pendaftaran/YouTube
  videoTestimoni: "#",   // link video testimoni
  videoPortfolio: "#"    // link video portfolio
};

/* WhatsApp links */
const waURL = (t) => `https://wa.me/${CONFIG.waNumber}?text=${encodeURIComponent(t)}`;
document.getElementById('wa-float').href    = waURL(CONFIG.waText);
document.getElementById('wa-inhouse').href  = waURL(CONFIG.waInhouse);

/* Countdown */
(function(){
  const end = new Date(CONFIG.deadline).getTime();
  const el  = { d:document.getElementById('cd-d'), h:document.getElementById('cd-h'),
                m:document.getElementById('cd-m'), s:document.getElementById('cd-s') };
  const pad = n => String(Math.max(0,n)).padStart(2,'0');
  function tick(){
    const gap = end - Date.now();
    if(gap <= 0){
      document.querySelector('.topbar-txt').textContent = '⏰ PENDAFTARAN DITUTUP — hubungi kami untuk batch berikutnya';
      document.getElementById('cd').style.display = 'none';
      return;
    }
    el.d.textContent = pad(Math.floor(gap/86400000));
    el.h.textContent = pad(Math.floor(gap%86400000/3600000));
    el.m.textContent = pad(Math.floor(gap%3600000/60000));
    el.s.textContent = pad(Math.floor(gap%60000/1000));
  }
  tick(); setInterval(tick, 1000);
})();

/* Form → kirim ke WhatsApp */
document.getElementById('regForm').addEventListener('submit', function(e){
  e.preventDefault();
  const g = id => document.getElementById(id).value.trim();
  const msg =
`Halo MAXY Academy, saya ingin mendaftar kelas *The Future of Work* (28–29 Juli 2026).

Nama       : ${g('nm')}
WhatsApp   : ${g('wa')}
Email      : ${g('em')}
Perusahaan : ${g('cm') || '-'}
Jabatan    : ${g('jb')}
Paket      : ${g('pk')}

Mohon info langkah selanjutnya. Terima kasih.`;
  window.open(waURL(msg), '_blank');
});
</script>
</body>
</html>