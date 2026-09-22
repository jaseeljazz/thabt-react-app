import React from "react";

export default function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400;500;600;700&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap');

      .font-display { font-family: 'Reem Kufi', sans-serif; }
      .font-body { font-family: 'Plus Jakarta Sans', sans-serif; }

      html { scroll-behavior: smooth; scroll-padding-top: 76px; }
      body { background: #ffffff; }

      .bracket { position: relative; }
      .bracket .bk-tl, .bracket .bk-tr, .bracket .bk-bl, .bracket .bk-br {
        content: ''; position: absolute; width: 22px; height: 22px; border-color: #EFCF25;
        opacity: 0; transition: opacity .35s ease, width .35s ease, height .35s ease; z-index: 20; pointer-events: none;
      }
      .bracket .bk-tl { top: 10px; left: 10px; border-top: 2px solid #EFCF25; border-left: 2px solid #EFCF25; }
      .bracket .bk-tr { top: 10px; right: 10px; border-top: 2px solid #EFCF25; border-right: 2px solid #EFCF25; }
      .bracket .bk-bl { bottom: 10px; left: 10px; border-bottom: 2px solid #EFCF25; border-left: 2px solid #EFCF25; }
      .bracket .bk-br { bottom: 10px; right: 10px; border-bottom: 2px solid #EFCF25; border-right: 2px solid #EFCF25; }
      .bracket:hover .bk-tl, .bracket:hover .bk-tr, .bracket:hover .bk-bl, .bracket:hover .bk-br { opacity: 1; width: 28px; height: 28px; }

      .img-zoom { overflow: hidden; }
      .img-zoom img { transition: transform .7s cubic-bezier(.16,1,.3,1); }
      .img-zoom:hover img { transform: scale(1.06); }

      .tick-ring { position: absolute; inset: 0; }

      .hero-rise { opacity: 0; transform: translateY(22px); animation: rise .8s cubic-bezier(.16,1,.3,1) forwards; }
      @keyframes rise { to { opacity: 1; transform: translateY(0); } }

      .glow-btn { box-shadow: 0 0 0 0 rgba(239,207,37,0); transition: box-shadow .35s ease, transform .2s ease; }
      .glow-btn:hover { box-shadow: 0 8px 30px -4px rgba(239,207,37,0.55); transform: translateY(-2px); }

      select.filter-select {
        appearance: none; -webkit-appearance: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='9' viewBox='0 0 14 9' fill='none'%3E%3Cpath d='M1 1L7 7L13 1' stroke='%23EFCF25' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
        background-repeat: no-repeat; background-position: right 14px center;
      }

      details.faq[open] summary .faq-plus { transform: rotate(45deg); }
      .faq-plus { transition: transform .3s ease; }

      input:focus-visible, select:focus-visible, button:focus-visible, a:focus-visible { outline: 2px solid #EFCF25; outline-offset: 3px; }

      .snap-row { scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; }
      .snap-row > * { scroll-snap-align: start; }
      .snap-row::-webkit-scrollbar { display: none; }

      .tab-btn.is-active { color: #121212; border-bottom-color: #EFCF25; }
      .tab-btn { color: #8a8a84; border-bottom: 2px solid transparent; transition: color .25s ease, border-color .25s ease; }

      .qty-btn { transition: background-color .2s ease; }
      .qty-btn:hover { background-color: #F7F7F4; }
    `}</style>
  );
}
