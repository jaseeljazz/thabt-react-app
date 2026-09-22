export const CATEGORY_TILES = [
  {
    title: "Leather Mount",
    subtitle: "Tailored dash and console mounts",
    img: "https://images.unsplash.com/photo-1643142314893-28d9797a0d2b?auto=format&fit=crop&w=1200&q=80",
    span: "lg:col-span-3 lg:row-span-2 h-80 lg:h-auto",
    heading: "text-2xl",
  },
  {
    title: "Motorbike Mount",
    img: "https://images.unsplash.com/photo-1747392993570-6f0ad817ebd5?auto=format&fit=crop&w=1200&q=80",
    span: "lg:col-span-3 h-56",
    heading: "text-xl",
  },
  {
    title: "Antenna & Accessories",
    img: "https://images.unsplash.com/photo-1758804024267-682a09c79b07?auto=format&fit=crop&w=900&q=80",
    span: "lg:col-span-2 h-56",
    heading: "text-lg",
  },
  {
    title: "Device Holders",
    img: "https://images.unsplash.com/photo-1539787200876-3c033a7bebcd?auto=format&fit=crop&w=700&q=80",
    span: "lg:col-span-1 h-56",
    heading: "text-base",
    small: true,
  },
  {
    title: "Pro Clips",
    img: "https://images.unsplash.com/photo-1737676122106-39cd380fcc44?auto=format&fit=crop&w=1200&q=80",
    span: "lg:col-span-3 h-56",
    heading: "text-xl",
  },
  {
    title: "Mounting Accessories",
    img: "https://images.unsplash.com/photo-1702863080525-94875b63d1e1?auto=format&fit=crop&w=1200&q=80",
    span: "lg:col-span-3 h-56",
    heading: "text-xl",
  },
];

export const BENEFITS = [
  { title: "Stable on Every Road", copy: "Premium build ensures your device remains secure, even on bumpy rides." },
  { title: "Hands-Free Navigation", copy: "Stay focused while driving with easy access to maps and calls." },
  { title: "Tool-Free Setup", copy: "Quick installation with suction or clip — no tools required." },
  { title: "Flexible Adjustment", copy: "Switch between landscape, portrait, or any tilt angle effortlessly." },
  { title: "Universal Compatibility", copy: "Fits smartphones, dashcams and GPS devices seamlessly." },
  { title: "Elegant & Durable", copy: "Designed to complement your car's interior with long-lasting material." },
];

export const REVIEWS = [
  { name: "عبدالكريم", text: "Excellent! I hope you will add phone holder and charger packages. Thank you very much." },
  {
    name: "محمد",
    text: "Your work is excellent, thank you for your outstanding service. However, I kindly request that you review your prices as they are somewhat expensive.",
  },
  { name: "Hayder Albohaded", text: "A truly wonderful experience, and we thank Thabt for their services." },
];

export const FAQS = [
  {
    q: "What types of mounting solutions do you offer?",
    a: "Leather mounts, motorbike mounts, antenna accessories, pro clips, device holders and MOLLE panel systems — each matched to your vehicle's year and trim.",
  },
  {
    q: "Are your products compatible with all car models?",
    a: "Enter your vehicle's brand, model and year in the fitment finder — every mount shown has already been checked against that exact configuration.",
  },
  {
    q: "Do your phone holders support wireless charging?",
    a: "Select device holders in our Pro Clips and Device Holders ranges include Qi wireless charging — these are flagged on the product page.",
  },
  {
    q: "Can I choose a product based on my phone model?",
    a: "Yes — each device holder lists compatible phone sizes and case thicknesses, and our support team can confirm fit before you order.",
  },
  {
    q: "How much is the shipping fee?",
    a: "Shipping within Doha is a flat 15 QAR, free on orders over 250 QAR. Rates for the rest of Qatar are calculated at checkout.",
  },
  {
    q: "Do you deliver across the GCC?",
    a: "Yes, we ship to Saudi Arabia, UAE, Bahrain, Kuwait and Oman, typically arriving in 4–7 business days.",
  },
];

export const YEARS = Array.from({ length: 2026 - 2015 + 1 }, (_, i) => 2026 - i);
