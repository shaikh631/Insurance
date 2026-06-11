import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: "health_and_safety",
    bgIcon: "medical_services",
    title: "Health Insurance",
    desc: "Premium medical coverage including dental, optical, and worldwide emergency assistance.",
    slug: "/health-Insurance",
    iconBg: "bg-[#f0dbff]",
    iconColor: "text-[#7800ce]",
    large: true,
  },
  {
    icon: "family_restroom",
    title: "Life Protection",
    desc: "Secure your family's financial future with flexible term and whole life plans.",
    slug: "/life-Insurance",
    iconBg: "bg-[#eaddff]",
    iconColor: "text-[#712ae2]",
    large: false,
  },
  {
    icon: "directions_car",
    title: "Vehicle",
    desc: "Comprehensive motor insurance with 24/7 roadside assistance.",
    slug: "/vehicle-Insurance",
    iconBg: "bg-[#e3e1ed]",
    iconColor: "text-[#52525b]",
    large: false,
  },
  {
    icon: "home",
    title: "Home & Assets",
    desc: "Protecting your sanctuary and valuables against unforeseen events.",
    slug: "/home-Insurance",
    iconBg: "bg-[#f0dbff]",
    iconColor: "text-[#7800ce]",
    large: false,
  },
  {
    icon: "flight",
    title: "Travel",
    desc: "Global coverage for medical emergencies, delays, and cancellations.",
    slug: "/travel-Insurance",
    iconBg: "bg-[#eaddff]",
    iconColor: "text-[#712ae2]",
    large: false,
  },
];

const features = [
  {
    icon: "tune",
    title: "Customizable Plans",
    desc: "Don't pay for what you don't need. Our modular approach lets you build the perfect coverage for your lifestyle.",
  },
  {
    icon: "timer",
    title: "Instant Quotes",
    desc: "Get transparent pricing in under two minutes with our AI-powered quotation engine.",
  },
  {
    icon: "support_agent",
    title: "Expert Support",
    desc: "Our certified advisors are available 24/7 to guide you through complex claims and policy updates.",
  },
];

const faqs = [
  {
    q: "How do I choose the right coverage?",
    a: "Start by assessing your major financial risks. We recommend using our 'Coverage Calculator' tool which analyzes your family size, health history, and assets to suggest the most cost-effective tiers for your specific situation.",
  },
  {
    q: "Can I manage multiple policies in one place?",
    a: "Yes! The iBayzat dashboard is designed to consolidate all your insurance products, including those from different providers, into a single unified interface for easier management and renewals.",
  },
  {
    q: "What happens if I need to make a claim?",
    a: "Claims can be filed directly through our mobile app or website. You'll be assigned a dedicated claims advocate who will handle the paperwork and communication with the insurer to ensure a speedy resolution.",
  },
];

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {children}
    </div>
  );
}

export default function Services() {
  const [openFaq, setOpenFaq] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-[#f8f9ff] text-[#121c2a] overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-40 bg-[#f8f9ff]">
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          {/* Left */}
          <Reveal delay={100}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0dbff] text-[#2c0051] text-xs font-semibold">
                <span className="material-symbols-outlined text-base leading-none">verified</span>
                Trusted by 500k+ individuals
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#121c2a] leading-tight tracking-tight">
                Comprehensive Protection for{" "}
                <span className="text-[#7800ce]">Every Stage</span> of Life
              </h1>
              <p className="text-lg text-[#4d4354] max-w-lg leading-relaxed">
                iBayzat blends cutting-edge technology with human-centric support to manage your insurance and HR needs effortlessly. Secure your future today.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-[#7800ce] text-white font-semibold px-8 py-4 rounded-xl shadow-sm hover:brightness-110 hover:scale-105 transition-all active:scale-95 flex items-center gap-2 group">
                  Explore All Plans
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                </button>
                <button className="border border-[#cfc2d7] text-[#4d4354] font-semibold px-8 py-4 rounded-xl hover:bg-[#eff4ff] transition-all active:scale-95">
                  Our Coverage Guide
                </button>
              </div>
            </div>
          </Reveal>

          {/* Right */}
          <Reveal delay={300}>
            <div className="relative hidden md:block">
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-20 pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden shadow-md aspect-video border-8 border-[#e6eeff]">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&fit=crop"
                  alt="Modern office team"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Float badge */}
              <div
                className="absolute -bottom-6 -left-6 p-5 rounded-xl shadow-md border border-[#d9e3f6]/50 max-w-[220px]"
                style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(10px)" }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#8a4cfc] flex items-center justify-center text-white animate-pulse">
                    <span className="material-symbols-outlined">bolt</span>
                  </div>
                  <div className="font-semibold text-sm text-[#121c2a]">Fast Claims</div>
                </div>
                <p className="text-xs text-[#4d4354]">Processing time averaged at 24 hours for minor claims in 2023.</p>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* ── Service Grid ── */}
      <section className="py-20 bg-[#eff4ff]">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#121c2a] mb-4">Tailored Insurance Solutions</h2>
              <p className="text-base text-[#4d4354] max-w-2xl mx-auto">
                Whether it's your health, home, or mobility, we provide sophisticated coverage that adapts to your evolving lifestyle.
              </p>
            </div>
          </Reveal>

          {/* Row 1: Health (large) + Life (large) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Health — large with bg icon */}
            <Reveal delay={100}>
              <Link
                to={services[0].slug}
                className="bg-white rounded-2xl p-8 shadow-sm group relative overflow-hidden flex flex-col justify-end min-h-[300px] hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-100 transition-all duration-300"
              >
                <div className="absolute top-4 right-6 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                  <span className="material-symbols-outlined text-[140px] text-[#7800ce]" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-[#f0dbff] rounded-xl flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-[#7800ce]">health_and_safety</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#121c2a] mb-2">Health Insurance</h3>
                  <p className="text-[#4d4354] mb-6 text-sm leading-relaxed">Premium medical coverage including dental, optical, and worldwide emergency assistance.</p>
                  <span className="inline-flex items-center gap-2 text-[#7800ce] font-semibold text-sm group-hover:underline">
                    Learn More <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">open_in_new</span>
                  </span>
                </div>
              </Link>
            </Reveal>

            {/* Life — large */}
            <Reveal delay={200}>
              <Link
                to={services[1].slug}
                className="bg-white rounded-2xl p-8 shadow-sm group flex flex-col justify-between min-h-[300px] hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-100 transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 bg-[#eaddff] rounded-xl flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-[#712ae2]">family_restroom</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#121c2a] mb-2">Life Protection</h3>
                  <p className="text-[#4d4354] text-sm leading-relaxed">Secure your family's financial future with flexible term and whole life plans.</p>
                </div>
                <span className="inline-flex items-center gap-2 text-[#7800ce] font-semibold text-sm group-hover:underline mt-6">
                  Learn More <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">open_in_new</span>
                </span>
              </Link>
            </Reveal>
          </div>

          {/* Row 2: Vehicle, Home, Travel — equal thirds */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "directions_car", title: "Vehicle", desc: "Comprehensive motor insurance with 24/7 roadside assistance.", slug: "/vehicle-Insurance", iconBg: "bg-[#e3e1ed]", iconColor: "text-[#52525b]" },
              { icon: "home", title: "Home & Assets", desc: "Protecting your sanctuary and valuables against unforeseen events.", slug: "/home-Insurance", iconBg: "bg-[#f0dbff]", iconColor: "text-[#7800ce]" },
              { icon: "flight", title: "Travel", desc: "Global coverage for medical emergencies, delays, and cancellations.", slug: "/travel-Insurance", iconBg: "bg-[#eaddff]", iconColor: "text-[#712ae2]" },
            ].map((s, i) => (
              <Reveal key={s.slug} delay={(i + 3) * 100}>
                <Link
                  to={s.slug}
                  className="bg-white rounded-2xl p-8 shadow-sm group flex flex-col justify-between min-h-[280px] hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-100 transition-all duration-300"
                >
                  <div>
                    <div className={`w-12 h-12 ${s.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                      <span className={`material-symbols-outlined ${s.iconColor}`}>{s.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#121c2a] mb-2">{s.title}</h3>
                    <p className="text-[#4d4354] text-sm leading-relaxed">{s.desc}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-[#7800ce] font-semibold text-sm group-hover:underline mt-6">
                    Learn More <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">open_in_new</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why iBayzat ── */}
      <section className="py-20 bg-[#f8f9ff] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Mosaic left */}
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="bg-[#7800ce] rounded-2xl p-6 h-48 flex flex-col justify-end text-white hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
                  <div className="text-4xl font-bold">98%</div>
                  <div className="text-xs opacity-80 mt-1">Customer Retention</div>
                </div>
                <div className="bg-[#e6eeff] rounded-2xl h-64 border border-[#d9e3f6] overflow-hidden hover:-translate-y-2 transition-all duration-300">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&fit=crop" alt="Data" className="w-full h-full object-cover rounded-2xl" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-[#dee9fc] rounded-2xl h-64 border border-[#d9e3f6] overflow-hidden hover:-translate-y-2 transition-all duration-300">
                  <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&fit=crop" alt="Mobile app" className="w-full h-full object-cover rounded-2xl" />
                </div>
                <div className="bg-[#8a4cfc] rounded-2xl p-6 h-48 flex flex-col justify-end text-white hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
                  <div className="text-4xl font-bold">2min</div>
                  <div className="text-xs opacity-80 mt-1">Average Quote Time</div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Text right */}
          <Reveal delay={200}>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-[#121c2a]">Why Choose iBayzat Services?</h2>
              <div className="space-y-6">
                {features.map((f) => (
                  <div key={f.title} className="flex gap-4 group cursor-default">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#f0dbff] text-[#7800ce] flex items-center justify-center transition-all duration-300 group-hover:bg-[#7800ce] group-hover:text-white">
                      <span className="material-symbols-outlined">{f.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#121c2a] mb-1">{f.title}</h4>
                      <p className="text-[#4d4354] text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="bg-[#7800ce] text-white font-semibold px-8 py-4 rounded-xl shadow-sm hover:brightness-110 hover:scale-105 transition-all active:scale-95">
                Start Your Profile
              </button>
            </div>
          </Reveal>

        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-12">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#121c2a] mb-4">Frequently Asked Questions</h2>
              <p className="text-[#4d4354]">Everything you need to know about choosing the right coverage with iBayzat.</p>
            </div>
          </Reveal>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div
                  className={`bg-[#f8f9ff] rounded-xl border overflow-hidden transition-all duration-300 ${
                    openFaq === idx ? "border-[#7800ce] bg-[#eff4ff]" : "border-[#d9e3f6]"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-[#eff4ff] transition-colors"
                  >
                    <span className="font-bold text-[#121c2a] text-lg pr-4">{faq.q}</span>
                    <span
                      className={`material-symbols-outlined text-[#7800ce] shrink-0 transition-transform duration-300 ${
                        openFaq === idx ? "rotate-180" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      openFaq === idx ? "max-h-40 pb-6" : "max-h-0"
                    }`}
                  >
                    <p className="text-[#4d4354] px-6 text-sm leading-relaxed border-t border-[#cfc2d7]/50 pt-4">{faq.a}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
