import React from "react";
import { Link } from "react-router-dom";

const STATS = [
  { value: "40+", label: "Vehicle makes supported" },
  { value: "8,000+", label: "Mounts installed across the GCC" },
  { value: "6", label: "Countries we ship to" },
  { value: "2 yr", label: "Warranty on hard parts" },
];

const VALUES = [
  {
    title: "Fitment first",
    copy: "Every product is checked against the exact vehicle configuration before it reaches the shelf — not after a return lands on our desk.",
  },
  {
    title: "Built for Gulf conditions",
    copy: "Heat, dust and long highway drives are the baseline test for every mount we sell, not the exception.",
  },
  {
    title: "Local support",
    copy: "Our technicians are based in Doha and answer fitment questions directly, before and after you order.",
  },
];

export default function AboutUs() {
  return (
    <div className="pt-32 pb-16 sm:pb-20">
      <section className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <p className="text-[#C9A812] text-[13px] tracking-wide font-semibold">About Thabt</p>
        <h1 className="font-display text-4xl sm:text-5xl mt-4">Stability, engineered for the road.</h1>
        <p className="text-[#121212]/70 text-lg mt-5 leading-relaxed">
          Thabt started in Doha with a simple frustration: aftermarket phone mounts that rattled loose within a month. We now design
          and fit mounting solutions — leather, motorbike, antenna, and device holders — matched to the exact car you drive, and
          tested against Gulf road and heat conditions before anything ships.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 mt-16">
        <div className="bracket img-zoom relative h-72 sm:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1643142314893-28d9797a0d2b?auto=format&fit=crop&w=1600&q=80"
            alt="Workshop detail, leather mount in progress"
            className="w-full h-full object-cover"
          />
          <span className="bk-tl" /><span className="bk-tr" /><span className="bk-bl" /><span className="bk-br" />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 mt-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-y border-[#E5E2D8] py-10">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl sm:text-4xl text-[#C9A812]">{s.value}</p>
              <p className="text-[#6B6B65] text-sm mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 mt-16">
        <h2 className="font-display text-3xl sm:text-4xl text-center mb-10">What we stand for</h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {VALUES.map((v) => (
            <div key={v.title} className="border border-[#E5E2D8] p-6">
              <h3 className="font-semibold">{v.title}</h3>
              <p className="text-[#6B6B65] text-sm mt-2 leading-relaxed">{v.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="faqs" className="max-w-4xl mx-auto px-5 sm:px-8 mt-20">
        <h2 className="font-display text-3xl sm:text-4xl mb-8 text-center">Shipping &amp; returns</h2>
        <div className="divide-y divide-[#E5E2D8] border-t border-b border-[#E5E2D8]">
          <details className="faq group py-5" open>
            <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
              <span className="font-semibold text-[16px]">How long does shipping take?</span>
              <span className="faq-plus shrink-0 text-[#EFCF25] text-2xl leading-none">+</span>
            </summary>
            <p className="text-[#6B6B65] mt-3 leading-relaxed text-[15px]">
              Orders within Doha typically arrive in 1–2 business days. GCC-wide delivery takes 4–7 business days.
            </p>
          </details>
          <details className="faq group py-5">
            <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
              <span className="font-semibold text-[16px]">What's your return policy?</span>
              <span className="faq-plus shrink-0 text-[#EFCF25] text-2xl leading-none">+</span>
            </summary>
            <p className="text-[#6B6B65] mt-3 leading-relaxed text-[15px]">
              Unused parts in original packaging can be returned within 30 days for a full refund. Fitment issues flagged after
              installation are also covered.
            </p>
          </details>
          <details className="faq group py-5">
            <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
              <span className="font-semibold text-[16px]">Do parts come with a warranty?</span>
              <span className="faq-plus shrink-0 text-[#EFCF25] text-2xl leading-none">+</span>
            </summary>
            <p className="text-[#6B6B65] mt-3 leading-relaxed text-[15px]">
              Hard parts carry a two-year defect warranty; electronics carry one year, handled directly by our team.
            </p>
          </details>
        </div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-5 sm:px-8 mt-20">
        <div className="bg-[#121212] px-8 py-14 sm:px-16 sm:py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-lg">
            <h2 className="font-display text-2xl sm:text-3xl text-white">Have a question before you order?</h2>
            <p className="text-white/70 mt-3">Our team in Doha typically replies within one business day.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="mailto:info@thabt.qa"
              className="glow-btn bg-[#EFCF25] text-[#121212] font-semibold text-[15px] px-8 py-3.5 hover:bg-white transition-colors"
            >
              Email us
            </a>
            <Link
              to="/products"
              className="border border-white/25 text-white font-semibold text-[15px] px-8 py-3.5 hover:border-[#EFCF25] hover:text-[#EFCF25] transition-colors"
            >
              Shop now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
