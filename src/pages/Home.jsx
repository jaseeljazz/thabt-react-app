import React from "react";
import { Link } from "react-router-dom";
import { TickRing } from "../components/UIBits";
import ProductCard from "../components/ProductCard";
import { CATEGORY_TILES, BENEFITS, REVIEWS, FAQS, YEARS } from "../data/content";
import { PRODUCTS } from "../data/products";

export default function Home() {
  const [activeTab, setActiveTab] = React.useState("base");
  const featured = PRODUCTS.slice(0, 4);

  return (
    <>
      {/* ============================= HERO ============================= */}
      <section id="home" className="relative pt-20">
        <div className="relative overflow-hidden bg-[#F7F7F4]">
          <img
            src="https://www.thabt.qa/home-3.png"
            alt="Diagonal showroom backdrop with vehicles on display"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <TickRing />

          <div className="relative z-10 max-w-4xl mx-auto w-full px-5 sm:px-8 pt-16 pb-10 sm:pt-20 sm:pb-14 text-center">
            <p className="hero-rise text-[#C9A812] text-[13px] tracking-wide font-semibold" style={{ animationDelay: ".05s" }}>
              Fitment-verified for 40+ makes
            </p>
            <h1
              className="hero-rise font-display text-[#121212] text-[10.5vw] leading-[0.95] sm:text-5xl md:text-6xl mt-4"
              style={{ animationDelay: ".15s" }}
            >
              Tailored mounting solutions for <span className="text-[#C9A812]">every</span> vehicle.
            </h1>
            <p className="hero-rise text-[#121212]/70 text-lg mt-5 max-w-lg mx-auto leading-relaxed" style={{ animationDelay: ".3s" }}>
              Our mounts keep your devices secure and within reach, without compromising your vehicle's aesthetics or performance.
            </p>

            <div
              className="hero-rise mt-9 w-full max-w-xl mx-auto bg-white/90 backdrop-blur-xl border border-[#121212]/10 shadow-[0_20px_60px_-20px_rgba(18,18,18,0.3)] text-left"
              style={{ animationDelay: ".45s" }}
            >
              <div className="flex border-b border-[#E5E2D8] px-5 sm:px-6">
                <button
                  type="button"
                  onClick={() => setActiveTab("base")}
                  className={`tab-btn ${activeTab === "base" ? "is-active" : ""} text-[14px] font-semibold py-4 mr-6`}
                >
                  Mounting Base
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("holder")}
                  className={`tab-btn ${activeTab === "holder" ? "is-active" : ""} text-[14px] font-semibold py-4`}
                >
                  Device Holder
                </button>
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-[#121212]/60 text-sm mb-4">What car are you using?</p>
                <form className="grid grid-cols-1 sm:grid-cols-3 gap-3" onSubmit={(e) => e.preventDefault()}>
                  <select className="filter-select bg-white border border-[#121212]/15 text-[#121212] text-[14px] px-4 py-3.5 pr-9 focus:border-[#EFCF25] transition-colors">
                    <option>Vehicle</option>
                    <option>Toyota</option>
                    <option>Nissan</option>
                    <option>Lexus</option>
                    <option>Mercedes-Benz</option>
                    <option>BMW</option>
                  </select>
                  <select className="filter-select bg-white border border-[#121212]/15 text-[#121212] text-[14px] px-4 py-3.5 pr-9 focus:border-[#EFCF25] transition-colors">
                    <option>Vehicle Model</option>
                    <option>Land Cruiser</option>
                    <option>Patrol</option>
                    <option>LX 500</option>
                    <option>C-Class</option>
                    <option>3 Series</option>
                  </select>
                  <select className="filter-select bg-white border border-[#121212]/15 text-[#121212] text-[14px] px-4 py-3.5 pr-9 focus:border-[#EFCF25] transition-colors">
                    <option>Vehicle Year</option>
                    {YEARS.map((y) => (
                      <option key={y}>{y}</option>
                    ))}
                  </select>
                </form>
                <Link
                  to="/products"
                  className="glow-btn block text-center w-full mt-4 bg-[#EFCF25] text-[#121212] font-semibold text-[15px] px-8 py-3.5 hover:bg-white transition-colors"
                >
                  Search
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= QUALITY / TRUST ============================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl max-w-md">Quality mounting devices are essential for your vehicle</h2>
            <ul className="mt-8 space-y-4">
              {[
                "Ensure safety while driving with secure mounts.",
                "Enjoy hands-free navigation and calls.",
                "Protect your device from falling or damage.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 shrink-0 rounded-full bg-[#EFCF25] grid place-items-center">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="3">
                      <path d="M4 12l5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[#121212]/75">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-7">
            <div className="flex gap-4">
              <svg className="shrink-0 mt-0.5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="1.6">
                <path d="M6 12a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z" />
                <path d="M12 8v4l3 2" />
              </svg>
              <div>
                <h3 className="font-semibold">Firm Grip and Stability</h3>
                <p className="text-[#6B6B65] text-sm mt-1">Premium materials keep your devices stable during all road conditions.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <svg className="shrink-0 mt-0.5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="1.6">
                <rect x="7" y="2" width="10" height="20" rx="2" />
                <path d="M11 18h2" />
              </svg>
              <div>
                <h3 className="font-semibold">Universal Compatibility</h3>
                <p className="text-[#6B6B65] text-sm mt-1">Fits most smartphones, tablets, GPS units and dashcams effortlessly.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <svg className="shrink-0 mt-0.5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="1.6">
                <path d="M21 12a9 9 0 1 1-3-6.7" />
                <path d="M21 3v5h-5" />
              </svg>
              <div>
                <h3 className="font-semibold">360° Rotation and Adjustability</h3>
                <p className="text-[#6B6B65] text-sm mt-1">Adjust your view with easy tilt angles, in landscape or portrait.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <svg className="shrink-0 mt-0.5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="1.6">
                <path
                  d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.4-3.4a4 4 0 0 1-5.4 5.4L6.1 20.9a2 2 0 0 1-3-3L14.7 6.3a4 4 0 0 1 5.4-5.4l-3.4 3.4Z"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <h3 className="font-semibold">Easy Installation and Removal</h3>
                <p className="text-[#6B6B65] text-sm mt-1">Tool-free setup, so you can switch mounts between vehicles in seconds.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= CATEGORIES ============================= */}
      <section id="categories" className="bg-[#F7F7F4] py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-8">
            <h2 className="font-display text-3xl sm:text-4xl">Product categories</h2>
            <p className="text-[#6B6B65] mt-3 max-w-md">
              Seven ways into the catalog, from the leather trim on your dash to the clip that holds your phone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-2 gap-3">
            {CATEGORY_TILES.map((cat) => (
              <Link
                key={cat.title}
                to={`/products?category=${encodeURIComponent(cat.title)}`}
                className={`bracket img-zoom group relative ${cat.span} block overflow-hidden`}
              >
                <img src={cat.img} alt={cat.title} className="w-full h-full object-cover" />
                <span className="bk-tl" /><span className="bk-tr" /><span className="bk-bl" /><span className="bk-br" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/85 via-[#121212]/5 to-transparent" />
                <div className={`absolute ${cat.small ? "left-4 bottom-4" : "left-5 bottom-5 right-5"}`}>
                  {!cat.small && <span className="block h-[2px] w-9 bg-[#EFCF25] mb-3" />}
                  <h3 className={`text-white font-display ${cat.heading} ${cat.small ? "leading-tight" : ""}`}>{cat.title}</h3>
                  {cat.subtitle && <p className="text-white/70 text-sm mt-1">{cat.subtitle}</p>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= BENEFITS ============================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl">What Thabt mounts bring to you</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map((b) => (
            <div key={b.title} className="border border-[#E5E2D8] p-6">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="1.6">
                <circle cx="12" cy="12" r="9" />
              </svg>
              <h3 className="font-semibold mt-4">{b.title}</h3>
              <p className="text-[#6B6B65] text-sm mt-1.5">{b.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================= COMPATIBILITY STRIP ============================= */}
      <section className="border-y border-[#E5E2D8] bg-[#F7F7F4] py-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <p className="text-center text-[#6B6B65] text-sm mb-6">Engineered to fit vehicles from</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[#121212]/60 font-display text-lg sm:text-xl">
            {["Toyota", "Nissan", "Mercedes-Benz", "BMW", "Lexus", "Land Cruiser"].map((brand, i, arr) => (
              <React.Fragment key={brand}>
                <span>{brand}</span>
                {i < arr.length - 1 && <span className="text-[#E5E2D8]">·</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= PROMO BANNER ============================= */}
      <section className="relative overflow-hidden bg-[#121212] py-16 sm:py-20">
        <img
          src="https://images.unsplash.com/photo-1585225207578-919849288a18?auto=format&fit=crop&w=1600&q=80"
          alt="Engine bay detail, dark tone"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/85 to-[#121212]/40" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="font-display text-white text-4xl sm:text-5xl">Best Mounting Solutions</h2>
          <p className="text-white/70 mt-3 max-w-md mx-auto">Engineered for the road, tested across GCC conditions.</p>
          <Link
            to="/products"
            className="glow-btn inline-block mt-7 bg-[#EFCF25] text-[#121212] font-semibold text-[15px] px-8 py-3.5 hover:bg-white transition-colors"
          >
            Shop the collection
          </Link>
        </div>
      </section>

      {/* ============================= FEATURED PRODUCTS ============================= */}
      <section id="trending" className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-16">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl">Top selling products</h2>
            <p className="text-[#6B6B65] mt-3 max-w-md">The mounts our customers reorder most, ranked by verified sales.</p>
          </div>
          <Link to="/products" className="hidden sm:inline text-sm font-semibold hover:text-[#C9A812] transition-colors whitespace-nowrap">
            View all products →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* ============================= DISCOVER / VIDEO CTA ============================= */}
      <section className="relative overflow-hidden bg-[#121212] py-20 sm:py-24">
        <img
          src="https://images.unsplash.com/photo-1760688964699-756df18ed485?auto=format&fit=crop&w=1600&q=80"
          alt="Dark garage backdrop"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="font-display text-[#EFCF25] text-3xl sm:text-4xl">Discover Thabt Mounting Solutions</h2>
          <p className="text-white/70 mt-3">Explore our innovative and reliable mounting devices for every need.</p>
          <button
            type="button"
            aria-label="Play video"
            className="glow-btn mt-8 w-16 h-16 rounded-full bg-[#EFCF25] text-[#121212] grid place-items-center mx-auto hover:bg-white transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7Z" />
            </svg>
          </button>
        </div>
      </section>

      {/* ============================= REVIEWS ============================= */}
      <section className="bg-[#F7F7F4] py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl sm:text-4xl">Customer reviews</h2>
            <p className="text-[#6B6B65] mt-3">Hear what our clients say about Thabt's mounting solutions.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-white border border-[#E5E2D8] p-6">
                <div className="text-[#EFCF25] text-sm mb-3" aria-hidden="true">★★★★★</div>
                <p className="text-[#121212]/75 text-[15px] leading-relaxed">"{r.text}"</p>
                <p className="text-sm font-semibold mt-4">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= FAQ ============================= */}
      <section id="faqs" className="max-w-4xl mx-auto px-5 sm:px-8 py-14 sm:py-16">
        <h2 className="font-display text-3xl sm:text-4xl mb-8 text-center">FAQs</h2>
        <div className="divide-y divide-[#E5E2D8] border-t border-b border-[#E5E2D8]">
          {FAQS.map((f, i) => (
            <details key={f.q} className="faq group py-5" open={i === 0}>
              <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
                <span className="font-semibold text-[16px]">{f.q}</span>
                <span className="faq-plus shrink-0 text-[#EFCF25] text-2xl leading-none">+</span>
              </summary>
              <p className="text-[#6B6B65] mt-3 leading-relaxed text-[15px]">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ============================= CONTACT / CTA ============================= */}
      <section id="contact" className="max-w-7xl mx-auto px-5 sm:px-8 pb-14 sm:pb-16">
        <div className="bg-[#121212] px-8 py-14 sm:px-16 sm:py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-lg">
            <h2 className="font-display text-2xl sm:text-3xl text-white">Not sure which mount fits your car?</h2>
            <p className="text-white/70 mt-3">Send us your vehicle details and a technician will confirm the right mount within one business day.</p>
          </div>
          <a
            href="mailto:info@thabt.qa"
            className="glow-btn shrink-0 bg-[#EFCF25] text-[#121212] font-semibold text-[15px] px-8 py-3.5 hover:bg-white transition-colors"
          >
            Talk to a technician
          </a>
        </div>
      </section>
    </>
  );
}
