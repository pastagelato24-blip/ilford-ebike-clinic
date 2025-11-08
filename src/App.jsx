import React from "react";

/** CONFIG RAPIDA **/
const WHATSAPP = "447510935262"; // senza + e spazi
const WA_LINK = `https://wa.me/${WHATSAPP}?text=Ciao!%20Vorrei%20info%20su%20riparazioni%20e-bike/e-scooter.`;

/** LOGO SEMPLICE (tipografico + piccola icona) **/
const Logo = () => (
  <div className="flex items-center gap-2">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="text-sky-500">
      <path d="M3 13a8 8 0 0 1 15.46-2H21a1 1 0 1 1 0 2h-2.05A8 8 0 0 1 3 13Zm1.5 3h14a1.5 1.5 0 0 1 0 3h-14a1.5 1.5 0 0 1 0-3Zm2.5-6h3l2 3h4"/>
      <circle cx="7" cy="19" r="1.75"></circle>
      <circle cx="17" cy="19" r="1.75"></circle>
    </svg>
    <span className="font-extrabold tracking-tight text-xl sm:text-2xl">
      Ilford <span className="text-sky-500">E-Bike</span> Clinic
    </span>
  </div>
);

/** NAV STICKY **/
const Navbar = () => (
  <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
    <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
      <Logo />
      <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
        <a href="#servizi" className="hover:text-sky-600">Servizi</a>
        <a href="#prezzi" className="hover:text-sky-600">Prezzi</a>
        <a href="#dove-siamo" className="hover:text-sky-600">Dove siamo</a>
        <a href="#contatti" className="hover:text-sky-600">Contatti</a>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-lg bg-sky-500 text-white px-4 py-2 hover:bg-sky-600 transition"
        >
          Prenota su WhatsApp
        </a>
      </nav>
      {/* CTA mobile */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noreferrer"
        className="sm:hidden inline-flex items-center rounded-lg bg-sky-500 text-white px-3 py-2 hover:bg-sky-600 transition text-sm"
      >
        WhatsApp
      </a>
    </div>
  </header>
);

/** HERO **/
const Hero = () => (
  <section className="bg-gradient-to-b from-white to-slate-100 border-b border-slate-200">
    <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20 grid gap-10 md:grid-cols-2 items-center">
      <div>
        <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
          Riparazioni rapide per
          <br/><span className="text-sky-600">e-bikes, e-scooters</span> & ciclomotori elettrici
        </h1>
        <p className="mt-5 text-slate-600 text-lg">
          Diagnosi express, ricambi originali, assistenza onesta. Passa in officina o scrivici su WhatsApp.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-xl bg-sky-500 text-white px-6 py-3 font-semibold hover:bg-sky-600 transition"
          >
            Prenota su WhatsApp
          </a>
          <a
            href="#servizi"
            className="inline-flex items-center rounded-xl border border-slate-300 px-6 py-3 font-semibold hover:bg-white transition"
          >
            Scopri i servizi
          </a>
        </div>
        <p className="mt-4 text-sm text-slate-500">WhatsApp: +44&nbsp;7510&nbsp;935262</p>
      </div>

      <div className="relative">
        <div className="aspect-[4/3] w-full rounded-2xl bg-slate-200 shadow-inner"></div>
        <div className="absolute -bottom-4 -right-4 bg-white shadow-lg border border-slate-200 rounded-xl px-4 py-3">
          <p className="text-sm font-semibold">Tempi medi riparazione</p>
          <p className="text-xs text-slate-500">da 30 minuti a 24 ore*</p>
        </div>
      </div>
    </div>
  </section>
);

/** SERVIZI **/
const Services = () => (
  <section id="servizi" className="mx-auto max-w-6xl px-4 py-16">
    <div className="text-center mb-10">
      <h2 className="text-2xl sm:text-3xl font-extrabold">Servizi</h2>
      <p className="mt-3 text-slate-600">Assistenza completa per la tua mobilità elettrica</p>
    </div>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[
        { title: "Tagliando & Diagnosi", desc: "Controlli sicurezza, freni, trasmissione, firmware e batteria." },
        { title: "Sostituzione pneumatici", desc: "Copertoni anti-foratura, camere d’aria, valvole e centratura ruote." },
        { title: "Impianto frenante", desc: "Pastiglie, cavi/guaina, spurgo idraulico, calibrazione dischi." },
        { title: "Batterie & cablaggi", desc: "Test capacità, connettori, BMS, cavi e riparazioni con saldature." },
        { title: "Motore & centralina", desc: "Hub motor, sensori, controller, display, acceleratore e luci." },
        { title: "E-scooter e mopeds", desc: "Riparazioni veloci e ricambi per i principali marchi." },
      ].map((item) => (
        <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
          <h3 className="font-bold text-lg">{item.title}</h3>
          <p className="mt-2 text-slate-600 text-sm">{item.desc}</p>
        </article>
      ))}
    </div>
  </section>
);

/** PREZZI **/
const Prices = () => (
  <section id="prezzi" className="bg-white border-y border-slate-200">
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold">Prezzi chiari</h2>
        <p className="mt-3 text-slate-600">Stime immediate. Ricambi originali o equivalenti di qualità.</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left border border-slate-200 rounded-xl overflow-hidden">
          <thead className="bg-slate-100 text-slate-700">
            <tr>
              <th className="px-4 py-3">Intervento</th>
              <th className="px-4 py-3">Da</th>
              <th className="px-4 py-3">Note</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            <tr>
              <td className="px-4 py-3">Diagnosi & sicurezza</td>
              <td className="px-4 py-3">£25</td>
              <td className="px-4 py-3 text-slate-600">Detraibile se effettui la riparazione</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Sostituzione copertone/camera</td>
              <td className="px-4 py-3">£20</td>
              <td className="px-4 py-3 text-slate-600">+ ricambio</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Spurgo freni idraulici</td>
              <td className="px-4 py-3">£30</td>
              <td className="px-4 py-3 text-slate-600">Per circuito</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Sostituzione pastiglie/disco</td>
              <td className="px-4 py-3">£15</td>
              <td className="px-4 py-3 text-slate-600">+ ricambio</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Diagnosi batteria/cablaggio</td>
              <td className="px-4 py-3">£25</td>
              <td className="px-4 py-3 text-slate-600">Test capacità e BMS</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-sm text-slate-500">
        * Tempi/​costi possono variare in base al modello e alla disponibilità ricambi.
      </div>
    </div>
  </section>
);

/** DOVE SIAMO + MAPPA **/
const Location = () => (
  <section id="dove-siamo" className="mx-auto max-w-6xl px-4 py-16">
    <div className="grid gap-8 md:grid-cols-2 items-start">
      <div>
        <h2 className="text-2xl sm:text-3xl font-extrabold">Dove siamo</h2>
        <p className="mt-3 text-slate-600">
          Siamo a Ilford (East London). Scrivici su WhatsApp per l’indirizzo completo e la disponibilità in giornata.
        </p>
        <div className="mt-6 flex gap-3">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-xl bg-sky-500 text-white px-5 py-3 font-semibold hover:bg-sky-600 transition"
          >
            Chiedi indicazioni su WhatsApp
          </a>
        </div>
        <ul className="mt-6 text-slate-600 text-sm space-y-1">
          <li>🕒 Lun–Sab 10:00–19:00 (su appuntamento)</li>
          <li>🛠️ Riparazioni express disponibili</li>
          <li>💳 Pagamenti: Cash / Card</li>
        </ul>
      </div>

      <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow">
        <iframe
          title="Mappa Ilford"
          width="100%"
          height="360"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Ilford%2C%20London&output=embed"
        ></iframe>
      </div>
    </div>
  </section>
);

/** CONTATTI **/
const Contacts = () => (
  <section id="contatti" className="bg-slate-900 text-slate-100">
    <div className="mx-auto max-w-6xl px-4 py-14 grid gap-8 md:grid-cols-3">
      <div>
        <Logo />
        <p className="mt-3 text-slate-300 text-sm">
          Assistenza e-bike, e-scooter e ciclomotori elettrici a Ilford. Qualità, velocità e trasparenza.
        </p>
      </div>

      <div>
        <h3 className="font-bold">Contatti</h3>
        <ul className="mt-3 space-y-1 text-slate-300 text-sm">
          <li>WhatsApp: <a className="underline hover:text-white" href={WA_LINK} target="_blank" rel="noreferrer">+44 7510 935262</a></li>
          <li>Email: <a className="underline hover:text-white" href="mailto:info@ilford-ebike-clinic.co.uk">info@ilford-ebike-clinic.co.uk</a></li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold">Orari</h3>
        <p className="mt-3 text-slate-300 text-sm">Lun–Sab 10:00–19:00 • Domenica chiuso</p>
        <p className="text-slate-400 text-xs mt-2">* Su appuntamento via WhatsApp</p>
      </div>
    </div>

    <div className="border-t border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-slate-400">
        © {new Date().getFullYear()} Ilford E-Bike Clinic. All rights reserved.
      </div>
    </div>
  </section>
);

/** FLOATING WHATSAPP BUTTON **/
const FloatingWA = () => (
  <a
    href={WA_LINK}
    target="_blank"
    rel="noreferrer"
    aria-label="Chat su WhatsApp"
    className="fixed bottom-5 right-5 z-[60] shadow-lg rounded-full bg-green-500 hover:bg-green-600 text-white w-14 h-14 flex items-center justify-center"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-7 h-7" fill="currentColor">
      <path d="M380.9 97.1C339 55.1 283.2 32 224.8 32 103.5 32 5 130.5 5 251.9c0 43.1 11.3 85.1 32.8 122.3L0 480l109.8-37.9c35 19.1 74.5 29.1 115 29.1h.1c121.3 0 219.9-98.5 219.9-219.9 0-58.4-23.1-113.1-64.9-155.1zM224.9 438.7h-.1c-36.6 0-72.5-9.8-103.8-28.3l-7.4-4.4-65.1 22.5 22.3-63.6-4.8-8c-20.3-33.7-31-72.5-31-112.2C34.9 141.1 120.9 55 224.8 55c51.2 0 99.4 19.9 135.6 56.1 36.2 36.2 56.2 84.4 56.2 135.6 0 105-85.9 191.9-191.7 191.9zm101.7-138.3c-5.6-2.8-33.1-16.3-38.2-18.1-5.1-1.9-8.8-2.8-12.6 2.8-3.7 5.6-14.4 18.1-17.7 21.8-3.3 3.7-6.5 4.2-12.1 1.4-5.6-2.8-23.4-8.6-44.6-27.4-16.5-14.7-27.6-32.9-30.8-38.4-3.2-5.6-.3-8.6 2.4-11.4 2.5-2.5 5.6-6.5 8.4-9.8 2.8-3.3 3.7-5.6 5.6-9.3 1.9-3.7.9-7-0.5-9.8-1.4-2.8-12.6-30.3-17.2-41.5-4.5-10.8-9.1-9.3-12.6-9.5-3.3-.2-7-.2-10.8-.2s-9.8 1.4-15 7c-5.1 5.6-19.6 19.2-19.6 46.6s20.1 54 22.9 57.8c2.8 3.7 39.6 60.4 95.9 84.8 13.4 5.8 23.8 9.3 32 11.9 13.5 4.3 25.8 3.7 35.5 2.2 10.8-1.6 33.1-13.5 37.8-26.6 4.7-13.2 4.7-24.5 3.3-26.9-1.3-2.5-5.1-3.9-10.7-6.7z"/>
    </svg>
  </a>
);

/** APP **/
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Prices />
      <Location />
      <Contacts />
      <FloatingWA />
    </>
  );
}
