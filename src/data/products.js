export const CATEGORIES = [
  "Leather Mount",
  "Motorbike Mount",
  "Antenna & Accessories",
  "Device Holders",
  "Pro Clips",
  "Mounting Accessories",
];

export const PRODUCTS = [
  {
    id: "p1",
    slug: "universal-windshield-proclip",
    name: "Universal Windshield ProClip",
    category: "Pro Clips",
    sku: "89700",
    price: 210,
    rating: 5,
    reviews: 89,
    compatibility: "Universal fit, all vehicle types",
    image:
      "https://images.unsplash.com/photo-1737676122106-39cd380fcc44?auto=format&fit=crop&w=900&q=80",
    description:
      "A permanent, no-drill windshield mount built for daily driving. The suction base distributes load evenly across the glass so it won't creep loose on rough roads, and the ball-joint head adjusts to any viewing angle in seconds.",
    features: [
      "Reinforced suction base rated for continuous use",
      "360° ball-joint head, tool-free angle adjustment",
      "Compatible with all Thabt device holder heads",
    ],
  },
  {
    id: "p2",
    slug: "dashboard-proclip-mount",
    name: "Dashboard ProClip Mount",
    category: "Pro Clips",
    sku: "89701",
    price: 185,
    rating: 5,
    reviews: 64,
    compatibility: "Fits most factory dashboards",
    image:
      "https://images.unsplash.com/photo-1702863080525-94875b63d1e1?auto=format&fit=crop&w=900&q=80",
    description:
      "A low-profile dashboard clip that keeps your phone or dashcam within reach without covering factory vents or controls. Adhesive-backed for a clean, permanent install.",
    features: [
      "Low-profile base, clears factory dash controls",
      "3M-rated adhesive backing",
      "Rotates 90° between portrait and landscape",
    ],
  },
  {
    id: "p3",
    slug: "antenna-mount-bolt",
    name: "Antenna Mount Bolt",
    category: "Antenna & Accessories",
    sku: "89712",
    price: 30,
    rating: 4,
    reviews: 37,
    compatibility: "Standard antenna thread, M6",
    image:
      "https://images.unsplash.com/photo-1758804024267-682a09c79b07?auto=format&fit=crop&w=900&q=80",
    description:
      "A weatherproof replacement mounting bolt for roof and fender antenna bases, machined from stainless steel to resist corrosion in Gulf coastal conditions.",
    features: [
      "Marine-grade stainless steel",
      "Sealed gasket included",
      "Fits standard M6 antenna threads",
    ],
  },
  {
    id: "p4",
    slug: "lc300-upper-left-mount",
    name: "LC300 Upper-Left Mount",
    category: "Mounting Accessories",
    sku: "90112",
    price: 325,
    rating: 5,
    reviews: 112,
    compatibility: "Toyota Land Cruiser 300-Series, 2021+",
    preorder: true,
    image:
      "https://images.unsplash.com/photo-1539787200876-3c033a7bebcd?auto=format&fit=crop&w=900&q=80",
    description:
      "Purpose-built for the LC300's upper-left dash pillar, this mount is CNC-machined to the exact factory contour for a flush, OEM-style fit. Currently accepting pre-orders.",
    features: [
      "CNC-machined to factory pillar contour",
      "No cutting or drilling required",
      "Ships within 10 business days of order",
    ],
  },
  {
    id: "p5",
    slug: "tailored-leather-console-mount",
    name: "Tailored Leather Console Mount",
    category: "Leather Mount",
    sku: "89550",
    price: 260,
    rating: 5,
    reviews: 51,
    compatibility: "Fits most center console layouts",
    image:
      "https://images.unsplash.com/photo-1643142314893-28d9797a0d2b?auto=format&fit=crop&w=900&q=80",
    description:
      "Hand-stitched leather mount that sits flush against your center console, matched to your interior's stitching color on request.",
    features: [
      "Genuine stitched leather",
      "Custom stitch-color matching available",
      "Compatible with all Thabt device holder heads",
    ],
  },
  {
    id: "p6",
    slug: "handlebar-u-bolt-mount",
    name: "Handlebar U-Bolt Mount",
    category: "Motorbike Mount",
    sku: "89610",
    price: 145,
    rating: 4,
    reviews: 28,
    compatibility: "22–32mm handlebar diameter",
    image:
      "https://images.unsplash.com/photo-1747392993570-6f0ad817ebd5?auto=format&fit=crop&w=900&q=80",
    description:
      "A rubber-damped U-bolt mount for motorcycle and scooter handlebars, tuned to cancel engine vibration before it reaches your phone or GPS unit.",
    features: [
      "Vibration-damping rubber ball joint",
      "Fits 22–32mm handlebar diameters",
      "Weatherproof hardware",
    ],
  },
  {
    id: "p7",
    slug: "magnetic-vent-holder",
    name: "Magnetic Vent Holder",
    category: "Device Holders",
    sku: "89820",
    price: 95,
    rating: 4,
    reviews: 73,
    compatibility: "Fits standard AC vent blades",
    image:
      "https://images.unsplash.com/photo-1539787200876-3c033a7bebcd?auto=format&fit=crop&w=900&q=80",
    description:
      "N52 magnets hold your phone flush against the vent, freeing the dashboard entirely. Metal plate ships with both adhesive and case-insert options.",
    features: [
      "N52-grade magnets",
      "Adhesive plate + case-insert plate included",
      "Fits vent blades up to 8mm thick",
    ],
  },
  {
    id: "p8",
    slug: "molle-panel-kit",
    name: "MOLLE Panel Kit",
    category: "Mounting Accessories",
    sku: "89990",
    price: 210,
    rating: 5,
    reviews: 19,
    compatibility: "Universal, seat-back or headrest mount",
    image:
      "https://images.unsplash.com/photo-1702863080525-94875b63d1e1?auto=format&fit=crop&w=900&q=80",
    description:
      "A modular MOLLE panel for seat backs or headrests, giving you a standard grid to attach pouches, mounts and accessories without permanent modification.",
    features: [
      "Standard 1-inch MOLLE webbing grid",
      "Seat-back and headrest mounting straps included",
      "Compatible with third-party MOLLE accessories",
    ],
  },
];

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}
