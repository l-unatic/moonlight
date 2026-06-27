// moonlight gs theme
// made by lunatic :3
// ==UserScript==
// @name         cute gs theme
// @namespace    http://tampermonkey.net/
// @version      67
// @description  cute
// @author       lunatic
// @match        https://gamesense.pub/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    "use strict";

    const CONFIG = {
        favicon: "https://i.imgur.com/IpZEY5O.png",
        fallbackImage: "https://i.imgur.com/C9Zoe7B.jpeg",
        video: "",
        userId: "17428",
        splashOncePerSession: true
    };

    document.title = "gamesense";

    const css = `
:root {
    --moon-bg: #05090e;
    --moon-panel-opacity: .72;
    --moon-blur: 2px;

    --moon-blue: #567ca2;
    --moon-blue-light: #95bee4;
    --moon-text: #d8e3ee;
    --moon-soft: #a9bfd2;
    --moon-muted: #71889c;
    --moon-line: rgba(126,164,202,.22);
}

/* =========================
   Base / Background
========================= */

html,
body {
    margin: 0 !important;
    background: var(--moon-bg) url("${CONFIG.fallbackImage}") center center / cover fixed no-repeat !important;
    color: var(--moon-text) !important;
}

body::before {
    content: "";
    position: fixed;
    inset: 0;
    z-index: -999998;
    pointer-events: none;
    background:
        radial-gradient(circle at 50% 4%, rgba(120,160,200,.075), transparent 42%),
        radial-gradient(circle at 50% 115%, rgba(60,95,130,.045), transparent 55%);
}

* {
    box-sizing: border-box;
}

.pun {
    max-width: 1280px !important;
    min-width: 320px !important;
    margin: 0 auto !important;
    padding: 16px 22px !important;
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    font: 11px Verdana, Helvetica, Arial, sans-serif !important;
    color: var(--moon-text) !important;
    animation: moonlitFadeIn .22s ease-out both;
}

.punwrap,
#brdheader,
#brdmain,
#brdfooter {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
}

/* =========================
   Logo
========================= */

#brdtitle h1 {
    margin: 0 !important;
    padding: 10px 0 14px !important;
}

#brdtitle a {
    text-decoration: none !important;
}

#brdtitle h1 a.moonlit-logo {
    display: inline-block !important;
    font-size: 15px !important;
    letter-spacing: 1px !important;
    animation: moonlitLogoFloat 8s ease-in-out infinite !important;
}

.gs-logo-game {
    color: #6fb7ff !important;
    -webkit-text-fill-color: #6fb7ff !important;
    font-weight: 900 !important;
    text-shadow:
        0 0 10px #6fb7ff,
        0 0 30px rgba(111,183,255,.8) !important;
}

.gs-logo-sense {
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
    font-weight: 900 !important;
    text-shadow:
        0 0 10px #ffffff,
        0 0 30px rgba(255,255,255,.65) !important;
}

/* =========================
   Glass Cards
========================= */

#brdmenu,
#brdwelcome,
#shout,
.pun .box,
.pun .blockpost .box,
#brdfooter .box {
    background: rgba(7,14,22,var(--moon-panel-opacity)) !important;
    border: 1px solid var(--moon-line) !important;
    border-radius: 10px !important;
    box-shadow:
        0 14px 36px rgba(0,0,0,.22),
        inset 0 1px 0 rgba(255,255,255,.025) !important;
    backdrop-filter: blur(var(--moon-blur)) saturate(1.05) !important;
    transition:
        background .18s ease,
        border-color .18s ease,
        box-shadow .18s ease,
        transform .18s ease !important;
}

#brdmenu:hover,
#brdwelcome:hover,
#shout:hover,
.pun .box:hover {
    background: rgba(12,22,33,.82) !important;
    border-color: rgba(170,205,238,.38) !important;
    box-shadow:
        0 14px 36px rgba(0,0,0,.28),
        0 0 18px rgba(86,124,162,.10) !important;
}

#brdmenu {
    padding: 8px 10px !important;
    margin-bottom: 12px !important;
}

#brdmenu ul {
    position: relative !important;
}

#brdmenu li {
    display: inline !important;
    margin-right: 12px !important;
    position: relative !important;
}

#brdwelcome,
#shout,
.pun .block,
.pun .blocktable,
.pun .blockform,
.pun .blockpost {
    margin-bottom: 12px !important;
}

/* sliding nav underline */
#brdmenu li.isactive::after,
#brdmenu li[id^="nav"].isactive::after {
    display: none !important;
}

#moonlit-nav-indicator {
    position: absolute;
    height: 2px;
    border-radius: 999px;
    background: linear-gradient(90deg, transparent, rgba(180,215,245,.98), transparent);
    box-shadow:
        0 0 10px rgba(149,190,228,.85),
        0 0 22px rgba(86,124,162,.55);
    transition:
        left .24s ease,
        width .24s ease,
        opacity .18s ease;
    pointer-events: none;
    opacity: 0;
}

/* =========================
   Headers / Tables
========================= */

.pun h2,
.pun h3,
.blocktable h2,
.blockform h2,
.forumlist h3 {
    background:
        linear-gradient(180deg, rgba(35,55,74,.82), rgba(15,29,42,.78)) !important;
    border: 1px solid rgba(126,164,202,.24) !important;
    border-bottom-color: rgba(160,200,236,.36) !important;
    border-radius: 10px 10px 0 0 !important;
    color: var(--moon-text) !important;
    padding: 8px 10px !important;
    font-size: 11px !important;
    font-weight: 700 !important;
    box-shadow:
        inset 0 1px 0 rgba(255,255,255,.05),
        0 0 16px rgba(86,124,162,.08) !important;
}

.pun table {
    width: 100% !important;
    border-collapse: collapse !important;
    table-layout: fixed !important;
}

.pun td,
.pun th {
    padding: 7px 8px !important;
    border-color: rgba(126,164,202,.095) !important;
    color: var(--moon-text) !important;
}

.pun .rowodd,
.pun .roweven,
.pun tr {
    background: rgba(7,14,22,.48) !important;
    transition: background .18s ease, box-shadow .18s ease, transform .18s ease !important;
}

.pun .rowodd:hover,
.pun .roweven:hover {
    transform: translateX(2px) translateY(-1px) !important;
    background: rgba(48,74,100,.36) !important;
    box-shadow:
        inset 3px 0 0 rgba(180,215,245,.65),
        0 8px 22px rgba(0,0,0,.16),
        0 0 18px rgba(86,124,162,.12) !important;
}

/* remove replies column */
.pun .tc2,
.pun th.tc2,
.pun td.tc2 {
    display: none !important;
    width: 0 !important;
    max-width: 0 !important;
    padding: 0 !important;
    margin: 0 !important;
    border: 0 !important;
    overflow: hidden !important;
}

.pun .tcl {
    width: 72% !important;
}

.pun .tcr {
    width: 28% !important;
    color: var(--moon-soft) !important;
    background: rgba(4,10,16,.18) !important;
}
/* =========================
   Text / Links
========================= */

#punindex .tcl h3,
#punindex .tcl h3 a,
#punindex .tcl h3 span,
#punviewforum .tcl h3,
#punviewforum .tcl h3 a,
#punviewforum .tcl h3 span {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    padding: 0 !important;
    border-radius: 0 !important;
}

#punindex .tcl h3 a,
#punviewforum .tcl h3 a {
    display: inline-block !important;
    font-weight: 700 !important;
    letter-spacing: .12px !important;
    transition: color .16s ease, transform .16s ease, text-shadow .16s ease !important;
}

#punindex .tcl h3 a:hover,
#punviewforum .tcl h3 a:hover {
    color: #edf7ff !important;
    transform: translateX(3px) !important;
    text-shadow:
        0 0 8px rgba(149,190,228,.35),
        0 0 18px rgba(86,124,162,.18) !important;
}

body,
.pun,
.pun div,
.pun p,
.pun li,
.pun td,
.pun th,
.pun label,
.pun dt,
.pun dd {
    color: var(--moon-text) !important;
}

small,
.forumdesc,
.conr,
.crumbs,
.pun .byuser {
    color: var(--moon-soft) !important;
}

a,
.pun a:link,
.pun a:visited,
#brdmenu a,
#brdmenu .fake-link {
    color: var(--moon-blue-light) !important;
    text-decoration: none !important;
    transition:
        color .18s ease,
        text-shadow .18s ease,
        opacity .18s ease,
        transform .18s ease !important;
}

a:hover,
.pun a:hover,
#brdmenu a:hover,
#brdmenu .fake-link:hover {
    color: #eef8ff !important;
    text-shadow:
        0 0 8px rgba(149,190,228,.55),
        0 0 18px rgba(86,124,162,.28) !important;
}

#brdwelcome strong,
#brdwelcome a[href*="profile.php?id=${CONFIG.userId}"] {
    color: #dff2ff !important;
    text-shadow:
        0 0 8px rgba(149,190,228,.65),
        0 0 18px rgba(86,124,162,.42) !important;
}

/* =========================
   Inputs / Buttons
========================= */

input,
textarea,
select,
button {
    background: rgba(4,9,15,.78) !important;
    color: var(--moon-text) !important;
    border: 1px solid var(--moon-line) !important;
    border-radius: 6px !important;
    outline: none !important;
}

input:focus,
textarea:focus,
select:focus {
    border-color: rgba(170,205,238,.45) !important;
    box-shadow:
        0 0 0 1px rgba(149,190,228,.16),
        0 0 12px rgba(86,124,162,.18) !important;
}

input[type="submit"],
input[type="button"],
button {
    background: linear-gradient(180deg, rgba(48,76,102,.95), rgba(24,42,58,.95)) !important;
    cursor: pointer !important;
    transition:
        background .18s ease,
        border-color .18s ease,
        transform .12s ease,
        box-shadow .18s ease !important;
}

input[type="submit"]:hover,
input[type="button"]:hover,
button:hover {
    transform: translateY(-1px);
    background: linear-gradient(180deg, rgba(66,100,132,.95), rgba(32,52,72,.95)) !important;
    box-shadow:
        0 0 16px rgba(86,124,162,.20),
        inset 0 1px 0 rgba(255,255,255,.05) !important;
}

/* =========================
   Posts / Profiles
========================= */

.pun .postleft,
.pun .postfootleft {
    float: left !important;
    width: 18em !important;
    padding: 8px !important;
    background: rgba(24,34,43,.70) !important;
    border-right: 1px solid var(--moon-line) !important;
}

.pun .postright,
.pun .postfootright {
    border-left: 18em solid rgba(24,34,43,.70) !important;
    background: rgba(5,11,18,.70) !important;
    padding: 8px 12px !important;
    min-height: 140px !important;
}

.pun .postfootright {
    text-align: right !important;
    min-height: unset !important;
    border-top: 1px solid var(--moon-line) !important;
}

.pun .postmsg {
    word-wrap: break-word !important;
    overflow: hidden !important;
}

.pun .postavatar img {
    max-width: 140px !important;
    height: auto !important;
    border-radius: 4px !important;
}

.pun .quotebox,
.pun .codebox {
    background: rgba(4,9,15,.72) !important;
    border: 1px solid rgba(120,160,200,.20) !important;
    border-left: 2px solid var(--moon-blue-light) !important;
    border-radius: 7px !important;
    color: var(--moon-soft) !important;
    padding: 6px !important;
    width: auto !important;
}

.pun .quotebox cite {
    background: rgba(20,31,42,.72) !important;
    color: var(--moon-blue-light) !important;
    display: block !important;
    padding: 5px !important;
    margin: -6px -6px 6px -6px !important;
}

.pun fieldset {
    padding: 12px 14px !important;
    border: 1px solid rgba(126,164,202,.18) !important;
    border-radius: 10px !important;
    background: rgba(6,12,19,.32) !important;
}

.pun .infldset {
    padding: 9px 12px 12px 12px !important;
    background: rgba(8,14,21,.35) !important;
    border: none !important;
    box-shadow: none !important;
}

#viewprofile dl {
    float: left !important;
    width: 100% !important;
    overflow: hidden !important;
}

#viewprofile dt {
    float: left !important;
    width: 13em !important;
    margin: 3px 0 !important;
    color: var(--moon-soft) !important;
}

#viewprofile dd {
    margin-left: 14em !important;
    padding: 4px !important;
    background: rgba(8,14,21,.35) !important;
}

/* =========================
   Shoutbox
========================= */

#shout {
    overflow: hidden !important;
}

#shout > div:nth-of-type(1),
#ajaxChatChatList {
    height: 200px !important;
    overflow-y: auto !important;
    overflow-x: hidden !important;
    background: rgba(5,11,18,.50) !important;
    border-bottom: 1px solid var(--moon-line) !important;
}

#shout .rowEven,
#shout .rowOdd {
    background: transparent !important;
    padding: 3px 5px !important;
}

#shout .dateTime {
    color: var(--moon-muted) !important;
}

#shout .user,
#shout .guest {
    color: var(--moon-soft) !important;
}

/* role colors */
#shout .chatBot {
    color: #00AA00 !important;
    font-weight: 700 !important;
}

#shout .premium,
.pun .usergroup-5,
.pun a.usergroup-5 {
    color: #e61515 !important;
    font-weight: 700 !important;
    text-shadow: 0 0 7px rgba(230,21,21,.45) !important;
}

#shout .moderator,
.pun .usergroup-2,
.pun a.usergroup-2 {
    color: #ffcc00 !important;
    font-weight: 700 !important;
    text-shadow: 0 0 7px rgba(255,204,0,.45) !important;
}

#shout .admin,
.pun .usergroup-1,
.pun a.usergroup-1 {
    color: #b4e61e !important;
    font-weight: 700 !important;
    text-shadow: 0 0 7px rgba(180,230,30,.45) !important;
}

.pun .usergroup-7,
.pun a.usergroup-7 {
    color: #58d794 !important;
    font-weight: 700 !important;
    text-shadow: 0 0 7px rgba(88,215,148,.38) !important;
}

.pun .usergroup-6,
.pun a.usergroup-6 {
    color: #ccc !important;
    opacity: .65 !important;
}

/* preserve custom signature colors */
.pun .postsignature span[style*="color"],
.pun .postsignature font[color],
.pun .postmsg span[style*="color"],
.pun .postmsg font[color],
#profile span[style*="color"],
#profile font[color] {
    -webkit-text-fill-color: currentColor !important;
}
/* =========================
   Effects / UI Extras
========================= */

.pun .icon {
    border-radius: 3px !important;
    border-color: rgba(100,130,160,.65) !important;
    filter: drop-shadow(0 0 4px rgba(86,124,162,.25));
}

.pun .inew .icon {
    border-color:
        rgba(149,190,228,.95)
        rgba(119,165,205,.95)
        rgba(86,124,162,.95)
        rgba(132,180,220,.95) !important;
    filter: drop-shadow(0 0 6px rgba(149,190,228,.45));
}

.moonlit-card-glow {
    position: relative !important;
    overflow: hidden !important;
}

.moonlit-card-glow::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    border-radius: inherit;
    opacity: 0;
    transition: opacity .22s ease;
    background:
        radial-gradient(
            260px circle at var(--mx, 50%) var(--my, 50%),
            rgba(149,190,228,.14),
            rgba(86,124,162,.07) 35%,
            transparent 70%
        );
}

.moonlit-card-glow:hover::before {
    opacity: 1;
}

/* Settings panel */
#moonlit-settings {
    position: fixed;
    top: 90px;
    right: 24px;
    z-index: 9999999;
    width: 220px;
    padding: 14px;
    border-radius: 12px;
    background: rgba(7,14,22,.88);
    border: 1px solid rgba(149,190,228,.30);
    box-shadow: 0 18px 50px rgba(0,0,0,.32);
    color: var(--moon-text);
    font: 12px Verdana, Arial, sans-serif;
    display: none;
}

#moonlit-settings.show {
    display: block;
}

#moonlit-settings-title {
    font-weight: 700;
    margin-bottom: 12px;
    color: #eaf6ff;
    text-shadow: 0 0 10px rgba(149,190,228,.55);
}

#moonlit-settings label {
    display: block;
    margin: 10px 0;
    color: var(--moon-soft);
}

#moonlit-settings input {
    width: 100%;
    margin-top: 5px;
}

/* Splash */
#moonlit-splash {
    position: fixed;
    inset: 0;
    z-index: 99999999;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(4,8,13,.88);
    opacity: 1;
    transition: opacity .65s ease;
    pointer-events: none;
}

#moonlit-splash.fade {
    opacity: 0;
}

#moonlit-splash-card {
    border: 1px solid rgba(160,200,236,.22);
    background: rgba(8,15,23,.72);
    padding: 28px 46px;
    border-radius: 14px;
    text-align: center;
    box-shadow: 0 20px 60px rgba(0,0,0,.35);
}

#moonlit-splash-moon {
    font-size: 24px;
    margin-bottom: 10px;
}

#moonlit-splash-title {
    color: #d4dde5;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: .4px;
}

#moonlit-splash-sub {
    color: var(--moon-blue-light);
    font-size: 11px;
    margin-top: 8px;
}

/* Chat asleep replacement */
.moonlit-chat-sleep-card {
    width: 100% !important;
    height: 235px !important;
    min-height: 235px !important;

    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;

    text-align: center !important;
    overflow: hidden !important;
    border-radius: 10px !important;

    background:
        radial-gradient(circle at 50% 35%, rgba(95,145,195,.28), transparent 30%),
        linear-gradient(180deg, rgba(8,16,25,.97), rgba(3,6,10,.99)) !important;

    color: #eaf6ff !important;

    text-shadow:
        0 0 10px rgba(149,190,228,.75),
        0 0 24px rgba(86,124,162,.45) !important;
}

.moonlit-chat-sleep-moon {
    font-size: 42px !important;
    margin-bottom: 12px !important;
    animation: moonlitChatMoon 4s ease-in-out infinite !important;
}

.moonlit-chat-sleep-title {
    font-size: 18px !important;
    font-weight: 800 !important;
    margin-bottom: 8px !important;
}

.moonlit-chat-sleep-sub {
    font-size: 12px !important;
    line-height: 1.6 !important;
    color: #b9cadb !important;
    margin-bottom: 14px !important;
}

.moonlit-chat-sleep-btn {
    padding: 8px 18px !important;
    border-radius: 10px !important;
    border: 1px solid rgba(149,190,228,.34) !important;
    background: linear-gradient(180deg, rgba(42,70,98,.82), rgba(17,31,46,.88)) !important;
    color: #eaf6ff !important;
    font-weight: 800 !important;
    cursor: pointer !important;
}

/* Scrollbar */
::selection {
    background: rgba(149,190,228,.35) !important;
    color: #fff !important;
}

::-webkit-scrollbar {
    width: 8px !important;
    height: 8px !important;
}

::-webkit-scrollbar-track {
    background: rgba(3,7,12,.72) !important;
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, rgba(160,205,245,.85), rgba(86,124,162,.78)) !important;
    border-radius: 999px !important;
    box-shadow: 0 0 10px rgba(149,190,228,.32) !important;
}

::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, rgba(210,235,255,.95), rgba(115,165,210,.90)) !important;
}

/* Footer */
#brdfooter .box {
    background: rgba(7,14,22,.46) !important;
    border-color: rgba(126,164,202,.16) !important;
    box-shadow: none !important;
    opacity: .86 !important;
}

/* Animations */
@keyframes moonlitFadeIn {
    from { opacity: .94; transform: translateY(3px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes moonlitLogoFloat {
    0%, 100% { transform: translateY(0); filter: brightness(1); }
    50% { transform: translateY(-1px); filter: brightness(1.18); }
}

@keyframes moonlitChatMoon {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
}

/* Mobile */
@media only screen and (max-width: 600px) {
    .pun .postright,
    .pun .postfootright {
        border-left: 0 !important;
    }

    .pun .postleft,
    .pun .postfootleft {
        width: 100% !important;
        float: none !important;
        border-right: none !important;
    }
.moonlit-notice-icon {
    width: 34px !important;
    height: 34px !important;

    display: flex !important;
    align-items: center !important;
    justify-content: center !important;

    flex: 0 0 auto !important;

    border-radius: 999px !important;
    color: #eaf6ff !important;
    font-size: 18px !important;

    background: linear-gradient(180deg, rgba(84,135,185,.9), rgba(34,65,95,.92)) !important;
    box-shadow: 0 0 16px rgba(149,190,228,.55) !important;

    animation: moonlitNoticePulse 2.8s ease-in-out infinite !important;
}

@keyframes moonlitNoticePulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.08); }
}
/* Moonlit: third-party/payment buttons */
.button-group {
    margin: 10px 0 !important;
}

.button-group .button,
a.button {
    display: inline-flex !important;
    align-items: center !important;
    gap: 7px !important;

    padding: 8px 14px !important;
    border-radius: 10px !important;

    border: 1px solid rgba(149,190,228,.36) !important;
    background:
        linear-gradient(180deg, rgba(48,76,102,.95), rgba(24,42,58,.95)) !important;

    color: #eaf6ff !important;
    font-weight: 800 !important;
    text-decoration: none !important;

    box-shadow:
        0 0 16px rgba(86,124,162,.20),
        inset 0 1px 0 rgba(255,255,255,.06) !important;

    transition: transform .14s ease, box-shadow .18s ease, border-color .18s ease !important;
}

.button-group .button:hover,
a.button:hover {
    transform: translateY(-1px) !important;
    border-color: rgba(190,225,255,.58) !important;
    box-shadow:
        0 0 24px rgba(149,190,228,.32),
        inset 0 1px 0 rgba(255,255,255,.08) !important;
}

/* Moonlit: Stripe card wrapper only, iframe internals cannot be themed */
#stripe-elements-card,
#card-element,
.StripeElement {
    min-height: 34px !important;
    padding: 9px 10px !important;

    border-radius: 8px !important;
    border: 1px solid rgba(149,190,228,.28) !important;

    background: rgba(4,9,15,.78) !important;
    box-shadow:
        inset 0 1px 0 rgba(255,255,255,.04),
        0 0 12px rgba(86,124,162,.12) !important;
}

.StripeElement--focus {
    border-color: rgba(170,205,238,.48) !important;
    box-shadow:
        0 0 0 1px rgba(149,190,228,.16),
        0 0 14px rgba(86,124,162,.20) !important;
}

/* Moonlit: chat speaker button */
#shoutvol {
    width: 34px !important;
    height: 24px !important;

    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;

    border-radius: 8px !important;
    border: 1px solid rgba(149,190,228,.26) !important;

    background:
        linear-gradient(180deg, rgba(35,55,74,.82), rgba(12,23,34,.86)) !important;

    color: #dff2ff !important;

    box-shadow:
        0 0 12px rgba(86,124,162,.18),
        inset 0 1px 0 rgba(255,255,255,.05) !important;

    transition: transform .14s ease, box-shadow .18s ease, border-color .18s ease !important;
}

#shoutvol:hover {
    transform: translateY(-1px) !important;
    border-color: rgba(190,225,255,.48) !important;
    box-shadow:
        0 0 18px rgba(149,190,228,.28),
        inset 0 1px 0 rgba(255,255,255,.08) !important;
}

/* Moonlit: reseller/payment tables */
.pun table th,
.pun table td {
    background-color: rgba(7,14,22,.48) !important;
}

.pun table thead th,
.pun table tr:first-child th {
    background:
        linear-gradient(180deg, rgba(35,55,74,.82), rgba(15,29,42,.78)) !important;
    color: var(--moon-text) !important;
}
/* Moonlit: reduce empty post footer gap */
.pun .postbody {
    min-height: unset !important;
}

.pun .postright {
    min-height: 0 !important;
}

.pun .postfoot {
    min-height: 0 !important;
}

.pun .postfootleft,
.pun .postfootright {
    min-height: 28px !important;
    padding-top: 6px !important;
    padding-bottom: 6px !important;
}
.postfootright {
    display: flex !important;
    align-items: center !important;
    gap: 12px !important;
}

.postfootright ul:not(.likelist) {
    margin-left: auto !important;
    flex: 0 0 auto !important;
}

.moonlit-inline-likes {
    flex: 1 1 auto !important;
    min-width: 0 !important;

    display: flex !important;
    align-items: center !important;
    gap: 6px !important;

    color: var(--moon-soft) !important;
    font-size: 11px !important;
    line-height: 18px !important;
}

.moonlit-inline-likes .likelist {
    display: block !important;
    margin: 0 !important;
    padding: 0 !important;

    white-space: normal !important;
    overflow: visible !important;
}

.moonlit-inline-likes .likelist li {
    display: inline !important;
    margin: 0 !important;
    padding: 0 !important;
}

.moonlit-inline-likes .likelist li::after {
    content: ", ";
    color: rgba(255,255,255,.38);
}

.moonlit-inline-likes .likelist li:last-child::after {
    content: "";
}

.moonlit-like-heart {
    color: #95bee4 !important;
    text-shadow: 0 0 8px rgba(149,190,228,.55) !important;
}
/* Moonlit: preserve usergroup 8 lime properly */
.pun a.usergroup-8,
.pun a:link.usergroup-8,
.pun a:visited.usergroup-8 {
    color: #b4e61e !important;
    font-weight: 700 !important;
    text-shadow:
        0 0 4px rgba(180,230,30,.35),
        0 0 10px rgba(180,230,30,.18) !important;
}

.pun a:hover.usergroup-8 {
    color: #e4ff5e !important;
    text-shadow:
        0 0 5px rgba(228,255,94,.45),
        0 0 12px rgba(228,255,94,.22) !important;
}
`;

    function addStyle() {
        const style = document.createElement("style");
        style.id = "moonlit-serenity-style";
        style.textContent = css;
        (document.head || document.documentElement).appendChild(style);
    }

    function setFavicon() {
        if (!document.head) return;
        document.querySelectorAll("link[rel*='icon']").forEach(x => x.remove());

        const link = document.createElement("link");
        link.rel = "shortcut icon";
        link.type = "image/x-icon";
        link.href = CONFIG.favicon;
        document.head.appendChild(link);
    }

    function fixLogo() {
        const logo = document.querySelector("#brdtitle h1 a, #brdtitle a");
        if (!logo) return;

        logo.innerHTML = "";
        logo.classList.add("moonlit-logo");

        const game = document.createElement("span");
        game.className = "gs-logo-game";
        game.textContent = "game";

        const sense = document.createElement("span");
        sense.className = "gs-logo-sense";
        sense.textContent = "sense";

        logo.appendChild(game);
        logo.appendChild(sense);
    }

    function removeForumHeaders() {
        document.querySelectorAll("thead").forEach(thead => {
            const text = thead.textContent.replace(/\s+/g, " ").trim().toLowerCase();

            if (
                (text.includes("forum") && text.includes("last post")) ||
                (text.includes("topic") && text.includes("replies") && text.includes("last post")) ||
                (text.includes("topic") && text.includes("last post"))
            ) {
                thead.remove();
            }
        });
    }

    function removeRepliesColumn() {
        document.querySelectorAll("th.tc2, td.tc2").forEach(el => el.remove());
    }
    function mouseLight() {
        const cards = document.querySelectorAll(
            "#brdmenu, #brdwelcome, #shout, .pun .box, .pun .blockpost .box"
        );

        cards.forEach(card => {
            if (card.dataset.moonlitGlow === "1") return;
            card.dataset.moonlitGlow = "1";
            card.classList.add("moonlit-card-glow");

            card.addEventListener("mousemove", event => {
                const rect = card.getBoundingClientRect();
                card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
                card.style.setProperty("--my", `${event.clientY - rect.top}px`);
            });
        });
    }

    function injectVideo() {
        if (!CONFIG.video) return;
        if (document.querySelector("#moonlit-video-bg")) return;

        const video = document.createElement("video");
        video.id = "moonlit-video-bg";
        video.src = CONFIG.video;
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.preload = "auto";

        document.documentElement.prepend(video);
        video.play().catch(() => {});
    }

    function splash() {
        if (CONFIG.splashOncePerSession && sessionStorage.getItem("moonlit-splash-seen")) return;
        sessionStorage.setItem("moonlit-splash-seen", "1");

        const splashEl = document.createElement("div");
        splashEl.id = "moonlit-splash";
        splashEl.innerHTML = `
            <div id="moonlit-splash-card">
                <div id="moonlit-splash-moon">🌙</div>
                <div id="moonlit-splash-title">moonlight gs theme</div>
                <div id="moonlit-splash-sub">made by lunatic :3</div>
            </div>
        `;

        document.documentElement.appendChild(splashEl);

        setTimeout(() => splashEl.classList.add("fade"), 850);
        setTimeout(() => splashEl.remove(), 1600);
    }

    function settingsPanel() {
        if (document.querySelector("#moonlit-settings")) return;
        if (!document.body) return;

        const panel = document.createElement("div");
        panel.id = "moonlit-settings";
        panel.innerHTML = `
            <div id="moonlit-settings-title">🌙 Moonlight</div>

            <label>Glass opacity
                <input id="moonlit-opacity" type="range" min="45" max="95" value="72">
            </label>

            <label>Blur
                <input id="moonlit-blur" type="range" min="0" max="6" value="2">
            </label>
        `;

        document.body.appendChild(panel);

        const opacity = panel.querySelector("#moonlit-opacity");
        const blur = panel.querySelector("#moonlit-blur");

        function apply() {
            document.documentElement.style.setProperty("--moon-panel-opacity", Number(opacity.value) / 100);
            document.documentElement.style.setProperty("--moon-blur", `${Number(blur.value)}px`);
        }

        [opacity, blur].forEach(input => input.addEventListener("input", apply));
        apply();

        document.addEventListener("keydown", e => {
            if (e.altKey && e.key.toLowerCase() === "m") {
                panel.classList.toggle("show");
            }
        });
    }

    function pageTransitions() {
        if (document.documentElement.dataset.moonlitTransitions === "1") return;
        document.documentElement.dataset.moonlitTransitions = "1";

        document.addEventListener("click", event => {
            const link = event.target.closest("a");
            if (!link) return;

            const href = link.getAttribute("href");
            if (!href) return;

            if (
                link.target ||
                href.startsWith("#") ||
                href.startsWith("javascript:") ||
                href.startsWith("mailto:")
            ) return;

            document.documentElement.style.transition = "opacity .12s ease";
            document.documentElement.style.opacity = "0.985";
        });
    }

    function highlightSpecialNav() {
        document.querySelectorAll("#brdmenu li.isactive")
            .forEach(li => li.classList.remove("isactive"));

        const url = new URL(location.href);
        const section = url.searchParams.get("section");

        if (section === "premium") {
            document.querySelector("#navpremium")?.classList.add("isactive");
            return;
        }

        if (section === "admin") {
            document.querySelector("#navsweep")?.classList.add("isactive");
            return;
        }

        if (location.pathname.includes("profile.php")) {
            document.querySelector("#navprofile")?.classList.add("isactive");
            return;
        }

        if (location.pathname.includes("search.php")) {
            document.querySelector("#navsearch")?.classList.add("isactive");
            return;
        }

        if (location.pathname.includes("pmsnew.php")) {
            document.querySelector("#navpmsnew")?.classList.add("isactive");
            return;
        }

        document.querySelector("#navindex")?.classList.add("isactive");
    }

    function slidingNavIndicator() {
        const menu = document.querySelector("#brdmenu ul");
        const active = document.querySelector("#brdmenu li.isactive");

        if (!menu || !active) return;

        let indicator = document.querySelector("#moonlit-nav-indicator");

        if (!indicator) {
            indicator = document.createElement("div");
            indicator.id = "moonlit-nav-indicator";
            menu.appendChild(indicator);
        }

        const menuRect = menu.getBoundingClientRect();
        const activeRect = active.getBoundingClientRect();

        indicator.style.left = `${activeRect.left - menuRect.left}px`;
        indicator.style.width = `${activeRect.width}px`;
        indicator.style.bottom = `-7px`;
        indicator.style.opacity = "1";
    }

    function chatSleepWatcher() {
        if (document.documentElement.dataset.moonlitChatSleepWatcher === "1") return;
        document.documentElement.dataset.moonlitChatSleepWatcher = "1";

        function check() {
            const shoutbox = document.getElementById("shout");
            if (!shoutbox || shoutbox.dataset.moonlitChatAsleep === "1") return;

            const label = shoutbox.querySelector("form label span");
            const text = label ? label.textContent.replace(/\s+/g, " ").trim().toLowerCase() : "";

            if (
                !text.includes("your connection is") ||
                !text.includes("closed") ||
                !text.includes("refresh")
            ) return;

            shoutbox.dataset.moonlitChatAsleep = "1";
            shoutbox.innerHTML = `
                <div class="moonlit-chat-sleep-card">
                    <div class="moonlit-chat-sleep-moon">🌙</div>
                    <div class="moonlit-chat-sleep-title">The chat fell asleep...</div>
                    <div class="moonlit-chat-sleep-sub">
                        The connection drifted away under the moonlight.<br>
                        Refresh the page to wake it back up.
                    </div>
                    <button class="moonlit-chat-sleep-btn" type="button">↻ Refresh</button>
                </div>
            `;

            const button = shoutbox.querySelector(".moonlit-chat-sleep-btn");
            if (button) button.addEventListener("click", () => location.reload());
        }

        check();

        new MutationObserver(check).observe(document.documentElement, {
            childList: true,
            subtree: true,
            characterData: true
        });
    }

function moonlitNoticeBars() {
    document.querySelectorAll(".notice-bar").forEach(bar => {
        if (bar.dataset.moonlitNotice === "1") return;
        bar.dataset.moonlitNotice = "1";

        bar.style.setProperty("position", "relative", "important");
        bar.style.setProperty("overflow", "hidden", "important");
        bar.style.setProperty("display", "flex", "important");
        bar.style.setProperty("align-items", "center", "important");
        bar.style.setProperty("gap", "12px", "important");
        bar.style.setProperty("min-height", "52px", "important");
        bar.style.setProperty("padding", "12px 16px", "important");
        bar.style.setProperty("margin", "12px 0", "important");
        bar.style.setProperty("border-radius", "12px", "important");
        bar.style.setProperty("border", "1px solid rgba(149,190,228,.38)", "important");
        bar.style.setProperty(
            "background",
            "radial-gradient(circle at 7% 50%, rgba(120,170,220,.28), transparent 28%), linear-gradient(180deg, rgba(13,28,43,.96), rgba(5,12,20,.98))",
            "important"
        );
        bar.style.setProperty("box-shadow", "0 0 24px rgba(86,124,162,.28), inset 0 1px 0 rgba(255,255,255,.06)", "important");

        const link = bar.querySelector("a");
        if (link) {
            link.style.setProperty("color", "#eef8ff", "important");
            link.style.setProperty("font-size", "13px", "important");
            link.style.setProperty("font-weight", "800", "important");
            link.style.setProperty("text-shadow", "0 0 12px rgba(149,190,228,.55)", "important");
        }

        if (!bar.querySelector(".moonlit-notice-icon")) {
            const icon = document.createElement("span");
            icon.className = "moonlit-notice-icon";
            icon.textContent = "✉";
            bar.prepend(icon);
        }
    });
}

function attachLikeBlocks() {
    document.querySelectorAll(".blockpost.liker").forEach(liker => {
        if (liker.dataset.moonlitAttached === "1") return;
        liker.dataset.moonlitAttached = "1";

        const post = liker.previousElementSibling;
        if (!post || !post.classList.contains("blockpost")) return;

        liker.style.setProperty("margin-top", "-12px", "important");
        liker.style.setProperty("margin-bottom", "14px", "important");

        const box = liker.querySelector(".box");
        if (box) {
            box.style.setProperty("border-top", "0", "important");
            box.style.setProperty("border-radius", "0 0 10px 10px", "important");
            box.style.setProperty("background", "rgba(7,14,22,.58)", "important");
        }

        const left = liker.querySelector(".postleft");
        const right = liker.querySelector(".postright");

        if (left) {
            left.style.setProperty("padding", "8px 12px", "important");
            left.style.setProperty("background", "rgba(24,34,43,.42)", "important");
        }

        if (right) {
            right.style.setProperty("min-height", "42px", "important");
            right.style.setProperty("padding", "9px 12px", "important");
            right.style.setProperty("background", "rgba(5,11,18,.42)", "important");
        }

        liker.querySelectorAll(".likelist li").forEach(li => {
            li.style.setProperty("display", "inline-block", "important");
            li.style.setProperty("margin-right", "8px", "important");
        });
    });
}

function fixPmTableColumns() {
    document.querySelectorAll(".pms-tbl").forEach(table => {
        if (table.dataset.moonlitPmFixed === "1") return;
        table.dataset.moonlitPmFixed = "1";

        table.querySelectorAll("th, td").forEach(cell => {
            cell.style.setProperty("background", "rgba(7,14,22,.48)", "important");
            cell.style.setProperty("color", "var(--moon-text)", "important");
            cell.style.setProperty("border-color", "rgba(126,164,202,.095)", "important");
        });

        table.querySelectorAll("thead th").forEach(cell => {
            cell.style.setProperty(
                "background",
                "linear-gradient(180deg, rgba(35,55,74,.82), rgba(15,29,42,.78))",
                "important"
            );
        });

        table.querySelectorAll(".tc3").forEach(cell => {
            cell.style.setProperty("width", "15%", "important");
            cell.style.setProperty("text-align", "center", "important");
            cell.style.setProperty("color", "var(--moon-soft)", "important");
        });

        table.querySelectorAll(".tce").forEach(cell => {
            cell.style.setProperty("width", "42px", "important");
            cell.style.setProperty("text-align", "center", "important");
            cell.style.setProperty("background", "rgba(7,14,22,.48)", "important");
        });

        table.querySelectorAll("input[type='checkbox']").forEach(box => {
            box.style.setProperty("accent-color", "#95bee4", "important");
        });
    });
}

function fixPaymentStuff() {
    document.querySelectorAll(".button-group .button, a.button").forEach(btn => {
        btn.style.setProperty("display", "inline-flex", "important");
        btn.style.setProperty("align-items", "center", "important");
        btn.style.setProperty("gap", "7px", "important");
        btn.style.setProperty("padding", "8px 14px", "important");
        btn.style.setProperty("border-radius", "10px", "important");
        btn.style.setProperty("border", "1px solid rgba(149,190,228,.36)", "important");
        btn.style.setProperty("background", "linear-gradient(180deg, rgba(48,76,102,.95), rgba(24,42,58,.95))", "important");
        btn.style.setProperty("color", "#eaf6ff", "important");
        btn.style.setProperty("font-weight", "800", "important");
        btn.style.setProperty("text-decoration", "none", "important");
        btn.style.setProperty("box-shadow", "0 0 16px rgba(86,124,162,.20), inset 0 1px 0 rgba(255,255,255,.06)", "important");
    });

    document.querySelectorAll("#stripe-elements-card, #card-element, .StripeElement").forEach(el => {
        el.style.setProperty("min-height", "34px", "important");
        el.style.setProperty("padding", "9px 10px", "important");
        el.style.setProperty("border-radius", "8px", "important");
        el.style.setProperty("border", "1px solid rgba(149,190,228,.28)", "important");
        el.style.setProperty("background", "rgba(4,9,15,.78)", "important");
        el.style.setProperty("box-shadow", "inset 0 1px 0 rgba(255,255,255,.04), 0 0 12px rgba(86,124,162,.12)", "important");
    });

    document.querySelectorAll("#shoutvol").forEach(btn => {
        btn.style.setProperty("width", "34px", "important");
        btn.style.setProperty("height", "24px", "important");
        btn.style.setProperty("display", "inline-flex", "important");
        btn.style.setProperty("align-items", "center", "important");
        btn.style.setProperty("justify-content", "center", "important");
        btn.style.setProperty("border-radius", "8px", "important");
        btn.style.setProperty("border", "1px solid rgba(149,190,228,.26)", "important");
        btn.style.setProperty("background", "linear-gradient(180deg, rgba(35,55,74,.82), rgba(12,23,34,.86))", "important");
        btn.style.setProperty("color", "#dff2ff", "important");
        btn.style.setProperty("box-shadow", "0 0 12px rgba(86,124,162,.18), inset 0 1px 0 rgba(255,255,255,.05)", "important");
    });

document.querySelectorAll("table").forEach(table => {
    const text = table.textContent.replace(/\s+/g, " ").toLowerCase();

    const isPaymentHistoryTable =
        text.includes("date") &&
        text.includes("type") &&
        text.includes("amount") &&
        text.includes("for") &&
        text.includes("status");

    if (!isPaymentHistoryTable) return;

    table.querySelectorAll("th, td").forEach(cell => {
        cell.style.setProperty("background", "rgba(7,14,22,.48)", "important");
        cell.style.setProperty("color", "var(--moon-text)", "important");
        cell.style.setProperty("border-color", "rgba(126,164,202,.095)", "important");
    });

    table.querySelectorAll("th").forEach(cell => {
        cell.style.setProperty(
            "background",
            "linear-gradient(180deg, rgba(35,55,74,.82), rgba(15,29,42,.78))",
            "important"
        );
    });
});

    document.querySelectorAll("table").forEach(table => {
        const text = table.textContent.replace(/\s+/g, " ").toLowerCase();
        const isResellerTable =
            text.includes("reseller") &&
            text.includes("payment methods") &&
            text.includes("price") &&
            text.includes("action");

        if (!isResellerTable) return;

        table.querySelectorAll("th, td").forEach(cell => {
            cell.style.setProperty("background", "rgba(7,14,22,.48)", "important");
            cell.style.setProperty("color", "var(--moon-text)", "important");
            cell.style.setProperty("border-color", "rgba(126,164,202,.095)", "important");
        });

        table.querySelectorAll("th").forEach(cell => {
            cell.style.setProperty("background", "linear-gradient(180deg, rgba(35,55,74,.82), rgba(15,29,42,.78))", "important");
        });
    });
}

function moonlitEmojiSelector() {
    document.querySelectorAll("#emojiselector").forEach(sel => {

sel.style.setProperty("width", "42px", "important");
sel.style.setProperty("min-width", "42px", "important");
sel.style.setProperty("max-width", "42px", "important");
sel.style.setProperty("height", "24px", "important");
sel.style.setProperty("padding", "0 4px", "important");
sel.style.setProperty("font-size", "14px", "important");
    });
}

function fixChatControls() {
    const vol = document.querySelector("#shoutvol");
    const emoji = document.querySelector("#emojiselector");

    [vol, emoji].forEach(el => {
        if (!el) return;

        el.style.setProperty("height", "24px", "important");
        el.style.setProperty("border", "1px solid rgba(149,190,228,.30)", "important");
        el.style.setProperty("background", "linear-gradient(180deg, rgba(34,53,72,.90), rgba(12,22,33,.92))", "important");
        el.style.setProperty("color", "#eef8ff", "important");
        el.style.setProperty("box-shadow", "0 0 12px rgba(86,124,162,.16), inset 0 1px 0 rgba(255,255,255,.05)", "important");
    });

    if (vol) {
        vol.style.setProperty("width", "34px", "important");
        vol.style.setProperty("display", "inline-flex", "important");
        vol.style.setProperty("align-items", "center", "important");
        vol.style.setProperty("justify-content", "center", "important");
        vol.style.setProperty("border-radius", "8px 0 0 8px", "important");
        vol.style.setProperty("margin-right", "-1px", "important");
    }

    if (emoji) {
        emoji.style.setProperty("width", "42px", "important");
        emoji.style.setProperty("min-width", "42px", "important");
        emoji.style.setProperty("max-width", "42px", "important");
        emoji.style.setProperty("padding", "0 4px", "important");
        emoji.style.setProperty("font-size", "14px", "important");
        emoji.style.setProperty("border-radius", "0 8px 8px 0", "important");
        emoji.style.setProperty("margin", "0", "important");
    }
}

function fixPostFooterGap() {
    document.querySelectorAll(".blockpost:not(.liker)").forEach(post => {
        const postLeft = post.querySelector(".postleft");
        const postRight = post.querySelector(".postright");
        const postBody = post.querySelector(".postbody");
        const postFoot = post.querySelector(".postfoot");
        const footLeft = post.querySelector(".postfootleft");
        const footRight = post.querySelector(".postfootright");
document.querySelectorAll(".blockpost:not(.liker) .postfootleft").forEach(left => {
    left.style.setProperty("display", "none", "important");
    left.style.setProperty("width", "0", "important");
    left.style.setProperty("flex", "0 0 0", "important");
});

        if (!postLeft || !postRight || !postBody || !postFoot) return;

        postBody.style.setProperty("display", "flex", "important");
        postBody.style.setProperty("align-items", "stretch", "important");

        postLeft.style.setProperty("float", "none", "important");
        postRight.style.setProperty("border-left", "0", "important");

        postLeft.style.setProperty("width", "18em", "important");
        postLeft.style.setProperty("flex", "0 0 18em", "important");

        postRight.style.setProperty("flex", "1 1 auto", "important");
        postRight.style.setProperty("min-height", "0", "important");

        if (postFoot) {
            postFoot.style.setProperty("display", "flex", "important");
            postFoot.style.setProperty("align-items", "center", "important");
            postFoot.style.setProperty("min-height", "32px", "important");
        }

        if (footLeft) {
            footLeft.style.setProperty("float", "none", "important");
            footLeft.style.setProperty("width", "18em", "important");
            footLeft.style.setProperty("flex", "0 0 18em", "important");
            footLeft.style.setProperty("min-height", "32px", "important");
        }

        if (footRight) {
            footRight.style.setProperty("border-left", "0", "important");
            footRight.style.setProperty("flex", "1 1 auto", "important");
            footRight.style.setProperty("min-height", "32px", "important");
            footRight.style.setProperty("padding", "6px 12px", "important");
        }
    });
}

function mergeLikeBlocksIntoPosts() {
    document.querySelectorAll(".blockpost.liker").forEach(liker => {
        const likeList = liker.querySelector(".likelist");
        if (!likeList) return;

        const idMatch = likeList.id.match(/likelist(\d+)/);
        if (!idMatch) return;

        const post = document.querySelector(`#p${idMatch[1]}`);
        if (!post) return;

        const footerRight = post.querySelector(".postfootright");
        if (!footerRight) return;

        let merged = post.querySelector(".moonlit-inline-likes");

        if (!merged) {
            merged = document.createElement("div");
            merged.className = "moonlit-inline-likes";
            footerRight.prepend(merged);
        }

        merged.innerHTML = `
            <span class="moonlit-like-heart">♥</span>
            <strong>Liked by</strong>
        `;

        merged.appendChild(likeList);

        liker.style.setProperty("display", "none", "important");
    });
}

function fixUsergroupColors() {
    const colors = {
        "usergroup-1": ["#b4e61e", "rgba(180,230,30,.45)"],
        "usergroup-2": ["#ffcc00", "rgba(255,204,0,.45)"],
        "usergroup-4": ["#95bee4", "rgba(149,190,228,.35)"],
        "usergroup-5": ["#e61515", "rgba(230,21,21,.45)"],
        "usergroup-6": ["#cccccc", "rgba(204,204,204,.18)"],
        "usergroup-7": ["#58d794", "rgba(88,215,148,.38)"],
        "usergroup-8": ["#b4e61e", "rgba(180,230,30,.45)"]
    };

    document.querySelectorAll('a[class*="usergroup-"]').forEach(a => {
        for (const cls in colors) {
            if (!a.classList.contains(cls)) continue;

            const [color, glow] = colors[cls];

            a.style.setProperty("color", color, "important");
            a.style.setProperty("font-weight", "700", "important");
            a.style.setProperty("text-shadow", `0 0 7px ${glow}`, "important");
        }
    });
}

function fixTopicReplyColumns() {
    document.querySelectorAll("td.tc3, th.tc3").forEach(cell => {
        cell.style.setProperty("background", "rgba(7,14,22,.48)", "important");
        cell.style.setProperty("color", "var(--moon-soft)", "important");
        cell.style.setProperty("border-color", "rgba(126,164,202,.095)", "important");
        cell.style.setProperty("text-align", "center", "important");
    });
}

    function init() {
        setFavicon();
        fixLogo();
        removeForumHeaders();
        removeRepliesColumn();
        mouseLight();
        injectVideo();
        splash();
        settingsPanel();
        pageTransitions();
        highlightSpecialNav();
        slidingNavIndicator();
        chatSleepWatcher();
        moonlitNoticeBars();
        attachLikeBlocks();
        fixPmTableColumns();
        fixPaymentStuff();
        fixChatControls();
        fixPostFooterGap();
        mergeLikeBlocksIntoPosts();
        fixUsergroupColors();
        fixTopicReplyColumns();

        [150, 400, 900, 1600].forEach(ms => {
            setTimeout(() => {
                fixLogo();
                removeForumHeaders();
                removeRepliesColumn();
                mouseLight();
                highlightSpecialNav();
                slidingNavIndicator();
            }, ms);
        });
    }

    addStyle();

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

    window.addEventListener("load", init);
})();