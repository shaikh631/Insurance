import { useState, useEffect, useRef } from "react";
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT

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

const locations = [
  {
    city: "Dubai, UAE",
    name: "Gate Avenue at DIFC",
    address: "Gate Avenue, Zone D, DIFC - UAE",
    timezone: "GMT +4",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&fit=crop",
    map: "https://www.google.com/maps/place/Gate+Avenue+at+DIFC/@25.2104042,55.2764061,966m/data=!3m1!1e3!4m6!3m5!1s0x3e5f428fba7eb81b:0x8d79bc16133a9cd6!8m2!3d25.2103402!4d55.2783856!16s%2Fg%2F11c2l24l65!5m1!1e2",
  },
  {
    city: "Dubai, UAE",
    name: "Falcon House",
    address: "304, Falcon House, DIP - UAE",
    timezone: "GMT +4",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&fit=crop",
    map : "https://www.google.com/maps/place/Falcon+House/@25.0013744,55.1533734,1211m/data=!3m1!1e3!4m6!3m5!1s0x3e5f6d5ebbf18d5b:0x842cfdfc68cb8dd1!8m2!3d25.0034698!4d55.1546043!16s%2Fg%2F11f3r71f9n!5m1!1e2?entry=tts&g_ep=EgoyMDI1MDUwNS4wIPu8ASoASAFQAw%3D%3D&skid=670a439e-c9e7-490f-9a50-cabaf6cd08f7",
  },
];

export default function UserContact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [focusedField, setFocusedField] = useState(null);
  const [newsletter, setNewsletter] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setSubmitted(true);
  //   setTimeout(() => setSubmitted(false), 3000);
  // };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-lg border outline-none transition-all bg-[#f8f9ff] text-[#121c2a] placeholder-[#7e7386] ${
      focusedField === field
        ? "border-[#7800ce] ring-1 ring-[#7800ce]"
        : "border-[#cfc2d7] hover:border-[#7e7386]"
    }`;


     const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        insuranceType: '',
        message: ''
      })
      const [loading, setLoading] = useState(false)
      const [error, setError] = useState('')
      const [success, setSuccess] = useState('')
    
      const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
          ...prev,
          [name]: value
        }))
        setError('')
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        setSuccess('')
    
        try {
          if (!FORMSPREE_ENDPOINT) {
            throw new Error('Form endpoint is missing')
          }
    
          const response = await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify({
              _subject: `New insurance form submission from ${formData.name}`,
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              insuranceType: formData.insuranceType,
              message: formData.message
            })
          })
    
          const responseText = await response.text()
          let data = {}
    
          if (responseText) {
            try {
              data = JSON.parse(responseText)
            } catch {
              data = { message: responseText }
            }
          }
    
          if (!response.ok) {
            throw new Error(data.error || data.message || 'Failed to submit form')
          }
    
          setSuccess('Thank you! Your form has been submitted successfully. We will contact you soon.')
          setFormData({ name: '', email: '', phone: '', insuranceType: '', message: '' })
          
          // Clear success message after 5 seconds
          setTimeout(() => setSuccess(''), 5000)
        } catch (err) {
          setError(err.message || 'Error submitting form. Please try again.')
          console.error('Error:', err)
        } finally {
          setLoading(false)
        }
      }



  return (
    <div className="bg-[#f8f9ff] text-[#121c2a] overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden py-20">
        {/* Bg image */}
         <Reveal delay={100}>
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&fit=crop"
            alt="Office"
            className="w-full h-full object-cover opacity-10 blur-sm"
          />
        </div>
        </Reveal>
        {/* Blobs */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#7800ce] opacity-5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#712ae2] opacity-5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-12 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold text-[#7800ce] bg-[#f0dbff] rounded-full tracking-widest">
            REACH OUT TO US
          </span>
          <Reveal delay={100}>
          <h1 className="text-4xl md:text-6xl font-bold text-[#121c2a] mb-6 leading-tight tracking-tight">
            Get in Touch with <br className="hidden md:block" />
            <span className="text-[#7800ce]">Our Experts</span>
          </h1>
          </Reveal>
          <p className="text-lg text-[#4d4354] max-w-2xl mx-auto leading-relaxed">
            Whether you're looking for tailored insurance solutions or streamlined HR support, our team
            is ready to guide you toward operational excellence.
          </p>
        </div>
      </section>

      {/* ── Bento: Form + Info ── */}
      <Reveal delay={500}>
      <section className="px-4 md:px-12 pb-20 max-w-7xl mx-auto -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-[#e6eeff]">
            <h2 className="text-2xl font-bold text-[#121c2a] mb-8">Send us a message</h2>

            {submitted && (
              <div className="mb-6 px-4 py-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm font-medium flex items-center gap-2">
                <span className="material-symbols-outlined text-base">check_circle</span>
                Your inquiry has been submitted! We'll be in touch shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className={`text-sm font-semibold transition-colors ${focusedField === "name" ? "text-[#7800ce]" : "text-[#4d4354]"}`}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                     value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={loading}
                    className={inputClass("name")}
                  />
                </div>
                <div className="space-y-2">
                  <label className={`text-sm font-semibold transition-colors ${focusedField === "email" ? "text-[#7800ce]" : "text-[#4d4354]"}`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className={inputClass("email")}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className={`text-sm font-semibold transition-colors ${focusedField === "phone" ? "text-[#7800ce]" : "text-[#4d4354]"}`}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+971 50 000 0000"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className={inputClass("phone")}
                />
              </div>

              <div className="space-y-2">
                <label className={`text-sm font-semibold transition-colors ${focusedField === "message" ? "text-[#7800ce]" : "text-[#4d4354]"}`}>
                  How can we help?
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us more about your requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                   required
                  disabled={loading}
                  onBlur={() => setFocusedField(null)}
                  className={inputClass("message")}
                />
              </div>

              <button
                type="submit"
                 disabled={loading}
                className="px-10 py-4 bg-[#7800ce] text-white font-semibold rounded-lg shadow-md hover:bg-[#6800b4] transition-all active:scale-95"
              >
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Right column */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Support Channels */}
            <div className="bg-[#e6eeff] p-8 rounded-2xl flex-grow shadow-sm">
              <h3 className="text-2xl font-bold text-[#121c2a] mb-6">Support Channels</h3>
              <div className="space-y-4">
                <a
                  href="tel:+97140000000"
                  className="flex items-start gap-4 p-4 rounded-xl bg-white hover:bg-[#7800ce] hover:text-white transition-all group"
                >
                  <div className="bg-[#f0dbff] p-3 rounded-full text-[#7800ce] group-hover:bg-white group-hover:text-[#7800ce] shrink-0">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[#121c2a] group-hover:text-white">Direct Phone</p>
                    <p className="text-[#4d4354] text-sm group-hover:text-white/80">+971 4 000 0000</p>
                  </div>
                </a>

                <a
                  href="mailto:care@ibayzat.com"
                  className="flex items-start gap-4 p-4 rounded-xl bg-white hover:bg-[#7800ce] hover:text-white transition-all group"
                >
                  <div className="bg-[#f0dbff] p-3 rounded-full text-[#7800ce] group-hover:bg-white group-hover:text-[#7800ce] shrink-0">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[#121c2a] group-hover:text-white">Email Support</p>
                    <p className="text-[#4d4354] text-sm group-hover:text-white/80">care@ibayzat.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-[#7800ce] p-8 rounded-2xl text-white shadow-sm">
              <h4 className="text-2xl font-bold mb-4">Why choose iBayzat?</h4>
              <ul className="space-y-3 opacity-90">
                {["24/7 Dedicated Support", "Expert Regulatory Guidance", "Seamless Tech Integration"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="text-sm font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
          
        </div>
      </section>
      </Reveal>

      {/* ── Office Locations ── */}
      <section className="bg-[#eff4ff] py-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-[#121c2a] mb-2">Our Headquarters</h2>
              <p className="text-[#4d4354]">Global presence, localized expertise.</p>
            </div>
            <div className="flex gap-3">
              <button className="p-3 rounded-full border border-[#cfc2d7] hover:bg-[#7800ce] hover:text-white hover:border-[#7800ce] transition-all">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button className="p-3 rounded-full border border-[#cfc2d7] hover:bg-[#7800ce] hover:text-white hover:border-[#7800ce] transition-all">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((loc) => (
              <div key={loc.city} className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row">
                <div className="md:w-1/2 h-56 md:h-auto overflow-hidden">
                  <img src={loc.img} alt={loc.city} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 md:w-1/2 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[#7800ce]">
                      <span className="material-symbols-outlined text-base">location_on</span>
                      <span className="font-semibold text-sm">{loc.city}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#121c2a]">{loc.name}</h3>
                    <p className="text-[#4d4354] text-sm leading-relaxed">{loc.address}</p>
                  </div>
                  <div>
                    <hr className="border-[#d9e3f6] mb-4" />
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-[#4d4354]">{loc.timezone}</span>
                      <a href={loc.map} target="_blank" rel="noopener noreferrer" className="text-[#7800ce] font-semibold text-sm hover:underline flex items-center gap-1">
                        View Map <span className="material-symbols-outlined text-sm">open_in_new</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="py-20 px-4 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6 p-12 rounded-3xl bg-[#e6eeff] border border-[#dee9fc]">
          <h2 className="text-4xl font-bold text-[#121c2a]">Stay Updated</h2>
          <p className="text-[#4d4354]">Subscribe to our newsletter for the latest in insurance and HR trends.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              disabled={loading}
              className={inputClass("email")}
              className="flex-grow px-6 py-4 rounded-full border border-[#cfc2d7] focus:border-[#7800ce] focus:ring-1 focus:ring-[#7800ce] outline-none bg-white text-[#121c2a] placeholder-[#7e7386]"
            />
            <button className="bg-[#7800ce] text-white px-8 py-4 rounded-full font-semibold shadow-md hover:bg-[#6800b4] transition-all active:scale-95 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
