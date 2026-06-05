"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Crown,
  Building2,
  Handshake,
  Sparkles,
  BadgeCheck,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Check,
  Users,
} from "lucide-react";

// ← CHANGE THIS to your actual cPanel URL (same endpoint as the VIP page)
const SUBMIT_URL = "https://nostalgialovers.ma/submit-corporate.php";

/* ─────────────────────────────────────────────
   Custom Gold Dropdown Component (shared style)
   ───────────────────────────────────────────── */
function GoldSelect({ value, onChange, options, placeholder }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex h-14 w-full items-center justify-between rounded-2xl border border-[#8f5b22]/40 bg-[#070403] px-5 text-sm text-[#f8f1e7] outline-none transition focus:border-[#f5c46c]/70 hover:border-[#c99145]/60"
      >
        <span className={value ? "text-[#f8f1e7]" : "text-[#6f6255]"}>
          {value || placeholder}
        </span>
        <ChevronDown
          size={18}
          className={`text-[#d69a45] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-2xl border border-[#c99145]/30 bg-[#0b0705] shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl"
          >
            {options.map((opt) => {
              const selected = opt === value;
              return (
                <li
                  key={opt}
                  onClick={() => {
                    onChange(opt);
                    setOpen(false);
                  }}
                  className={`flex cursor-pointer items-center justify-between px-5 py-3 text-sm transition-colors duration-150 ${
                    selected
                      ? "bg-gradient-to-r from-[#d69a45]/20 to-[#f5c46c]/10 text-[#f5c46c]"
                      : "text-[#cdbfab] hover:bg-gradient-to-r hover:from-[#d69a45]/25 hover:to-[#ff7a1a]/10 hover:text-[#f5c46c]"
                  }`}
                >
                  <span>{opt}</span>
                  {selected && <Check size={16} className="text-[#f5c46c]" />}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Corporate Component
   ───────────────────────────────────────────── */
export default function NostalgiaCorporateLanding() {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const [form, setForm] = useState({
    nom: "",
    fonction: "",
    entreprise: "",
    email: "",
    telephone: "",
    nb_invites: "20 – 50 personnes",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const set = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  const setSelect = (field) => (val) => setForm((prev) => ({ ...prev, [field]: val }));

  const handleSubmit = async () => {
    setErrorMsg("");
    if (!form.nom || !form.entreprise || !form.email || !form.telephone) {
      setErrorMsg(
        "Veuillez remplir les champs obligatoires : nom, entreprise, email et téléphone."
      );
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
      } else {
        setErrorMsg(json.message || "Une erreur est survenue.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Impossible de contacter le serveur. Réessayez plus tard.");
      setStatus("error");
    }
  };

  const scrollToForm = () => {
    const el = document.getElementById("corporate-form");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const inputClass =
    "h-14 w-full rounded-2xl border border-[#8f5b22]/40 bg-[#070403] px-5 text-sm text-white outline-none transition placeholder:text-[#6f6255] focus:border-[#f5c46c]/70";
  const labelClass =
    "mb-3 block text-[11px] font-bold uppercase tracking-[0.22em] text-[#d69a45]";

  /* ── Corporate value props ── */
  const benefits = [
    {
      icon: Handshake,
      title: "Relations clients",
      text: "Recevez vos clients et partenaires dans un cadre exclusif qui marque les esprits.",
    },
    {
      icon: Sparkles,
      title: "Team building",
      text: "Offrez à vos équipes une soirée d'exception, fédératrice et mémorable.",
    },
    {
      icon: Building2,
      title: "Visibilité de marque",
      text: "Associez votre entreprise à un événement iconique et premium de Casablanca.",
    },
    {
      icon: BadgeCheck,
      title: "Account manager dédié",
      text: "Un interlocuteur unique gère votre réservation de A à Z, sans friction.",
    },
  ];

  /* ── Lineup (identique à la page VIP) ── */
  const artists = [
    "Gloria Gaynor", "Blackstreet", "Blu Cantrell", "Sandra", "Kaoma",
    "Earth Wind & Fire Experience", "Ice MC", "Willy William", "Paradisio",
    "DJ Cut Killer", "Village People", "Tag Team", "Dante Thomas",
    "CeCe Peniston", "The Weather Girls",
  ];

  /* ── Offres groupes (à partir de 20 personnes) ── */
  const formules = [
    { range: "De 20 à 50 personnes", featured: false },
    { range: "De 51 à 100 personnes", featured: true },
    { range: "À partir de 101 personnes", featured: false },
  ];

  return (
    <main className="min-h-screen bg-[#050403] text-[#f8f1e7] overflow-hidden font-sans selection:bg-[#c99145]/40">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,145,69,0.26),transparent_34%),radial-gradient(circle_at_88%_18%,rgba(255,119,23,0.16),transparent_28%),linear-gradient(180deg,#090604_0%,#050403_45%,#020202_100%)]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-[#c99145]/15 blur-[1px]" />
        <div className="absolute left-1/2 top-32 h-[360px] w-[360px] -translate-x-1/2 rounded-full border border-[#f5c46c]/10" />
      </div>

      {/* Hero */}
      <section className="relative px-6 lg:px-10">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mx-auto max-w-7xl pt-16 pb-28 text-center lg:pt-24 lg:pb-36"
        >
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#c99145]/25 bg-[#160d07]/70 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.34em] text-[#d69a45] shadow-[0_0_60px_rgba(201,145,69,0.12)] backdrop-blur">
            <Crown size={14} /> Offres Entreprises · Groupes & Corporate
          </div>

          <h1 className="mx-auto max-w-6xl text-[13vw] font-black uppercase leading-[0.82] tracking-[0.02em] sm:text-[68px] lg:text-[104px]">
            L'EXPÉRIENCE CORPORATE
            <span className="block bg-gradient-to-r from-[#f7e0b5] via-[#d69a45] to-[#ff7a1a] bg-clip-text text-transparent">
              LA PLUS ICONIQUE
            </span>
          </h1>

          <p className="mx-auto mt-9 max-w-2xl text-base leading-8 text-[#cdbfab] md:text-xl">
            Invitez vos clients, partenaires et collaborateurs à l'un des plus
            grands rendez-vous musicaux de l'année, avec des formules adaptées
            aux entreprises et aux groupes.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={scrollToForm}
              className="group rounded-full bg-[#f5c46c] px-8 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#130b05] shadow-[0_20px_70px_rgba(245,196,108,0.22)] transition hover:-translate-y-0.5 hover:bg-[#ffd98b]"
            >
              Recevoir mon offre{" "}
              <ArrowRight className="ml-2 inline transition group-hover:translate-x-1" size={16} />
            </button>
            <a
              href="tel:+212666821502"
              className="rounded-full border border-[#c99145]/30 px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#d69a45] transition hover:bg-[#d69a45]/10"
            >
              Parler à un conseiller
            </a>
          </div>

          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-3 text-center">
            {["18", "19", "20"].map((day) => (
              <div
                key={day}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur"
              >
                <div className="text-2xl font-black text-white">{day}</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-[#a89883]">Juin 2026</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Lineup ticker (comme la page VIP) */}
      <section className="relative border-y border-white/10 bg-[#080604]/70 px-6 py-8 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-[#bba78e]">
          {artists.map((artist) => (
            <span key={artist}>{artist}</span>
          ))}
        </div>
      </section>

      {/* Why corporate */}
      <section className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <div className="mb-5 inline-flex rounded-full border border-[#c99145]/25 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-[#d69a45]">
            Pourquoi les entreprises choisissent Nostalgia
          </div>
          <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-[-0.04em] md:text-6xl">
            Bien plus qu'un festival.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#bdad98]">
            Une expérience unique pour remercier vos clients, fédérer vos
            équipes et créer des souvenirs durables.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition hover:border-[#c99145]/30"
            >
              <Icon className="mb-8 text-[#d69a45]" size={24} />
              <h3 className="text-lg font-black uppercase tracking-[-0.02em]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#aa9a85]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Offres groupes */}
      <section className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="mb-12 text-center">
          <div className="mb-5 inline-flex rounded-full border border-[#c99145]/25 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-[#d69a45]">
            Offres groupes disponibles
          </div>
          <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-[-0.04em] md:text-6xl">
            Tarifs préférentiels entreprises.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[#8d7c68]">
            Choisissez la formule la plus adaptée à votre entreprise.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {formules.map((f) => (
            <div
              key={f.range}
              className={`relative flex flex-col items-center rounded-[2.5rem] border p-8 text-center backdrop-blur-xl transition ${
                f.featured
                  ? "border-[#c99145]/50 bg-[radial-gradient(circle_at_50%_0%,rgba(201,145,69,0.22),transparent_45%),#0b0705] shadow-[0_30px_120px_rgba(201,145,69,0.15)]"
                  : "border-white/10 bg-white/[0.035]"
              }`}
            >
              <div className="text-lg font-black uppercase tracking-[-0.02em] text-[#f8f1e7]">
                {f.range}
              </div>
              <button
                onClick={scrollToForm}
                className={`mt-7 rounded-full px-6 py-3 text-xs font-black uppercase tracking-[0.16em] transition ${
                  f.featured
                    ? "bg-[#f5c46c] text-[#130b05] hover:bg-[#ffd98b]"
                    : "border border-[#c99145]/30 text-[#d69a45] hover:bg-[#d69a45]/10"
                }`}
              >
                Recevoir l'offre groupes
              </button>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] px-6 py-5 text-center text-sm text-[#cdbfab]">
          <Users size={20} className="shrink-0 text-[#d69a45]" />
          <span>
            Pass 1 soirée ou 3 soirées — notre équipe s'occupe du reste.
          </span>
        </div>
      </section>

      {/* Corporate Form */}
      <section id="corporate-form" className="relative px-6 py-28 scroll-mt-10 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[3rem] border border-white/10 bg-[#0b0705]/80 p-6 shadow-[0_30px_140px_rgba(0,0,0,0.55)] backdrop-blur-xl lg:grid-cols-[0.9fr_1.1fr] lg:p-12">

          {/* Left info panel */}
          <div className="flex flex-col justify-between rounded-[2rem] border border-[#c99145]/20 bg-[radial-gradient(circle_at_30%_0%,rgba(201,145,69,0.24),transparent_35%),#110b07] p-8 min-h-[420px]">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#d69a45]">
                Demande de devis · Entreprises
              </div>
              <h2 className="mt-6 text-4xl font-black uppercase leading-[0.95] tracking-[-0.05em] md:text-6xl">
                Recevez votre proposition.
              </h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-[#bdad98]">
                Parlez-nous de votre projet : nous revenons vers vous avec une
                proposition sur-mesure sous 48h.
              </p>
            </div>
            <div className="grid gap-4 text-sm text-[#c7b49e]">
              <div className="flex items-center gap-3">
                <MapPin size={17} className="text-[#d69a45]" /> Vélodrome de Casablanca
              </div>
              <div className="flex items-center gap-3">
                <Phone size={17} className="text-[#d69a45]" />
                <a href="tel:+212666821502" className="hover:text-[#f5c46c] transition-colors">
                  +212 666-821502
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={17} className="text-[#d69a45]" /> contact@nostalgialovers.ma
              </div>
            </div>
          </div>

          {/* Right form panel */}
          <div className="grid gap-5 rounded-[2rem] border border-white/10 bg-black/30 p-6 md:grid-cols-2 lg:p-8">
            {status === "success" ? (
              /* ── SUCCESS STATE ── */
              <div className="md:col-span-2 flex flex-col items-center justify-center gap-6 py-16 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#d69a45]/40 bg-[#d69a45]/10 text-4xl">
                  ✓
                </div>
                <h3 className="text-2xl font-black uppercase tracking-[-0.03em]">Demande reçue !</h3>
                <p className="max-w-sm text-[#bdad98] leading-7">
                  Notre équipe corporate vous contactera sous 48h avec une
                  proposition personnalisée pour votre entreprise.
                </p>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setForm({
                      nom: "",
                      fonction: "",
                      entreprise: "",
                      email: "",
                      telephone: "",
                      nb_invites: "20 – 50 personnes",
                      message: "",
                    });
                  }}
                  className="rounded-full border border-[#c99145]/30 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[#d69a45] hover:bg-[#d69a45]/10 transition"
                >
                  Nouvelle demande
                </button>
              </div>
            ) : (
              /* ── FORM FIELDS ── */
              <>
                {/* Nom */}
                <div>
                  <label className={labelClass}>Nom du contact *</label>
                  <input value={form.nom} onChange={set("nom")} className={inputClass} placeholder="Prénom Nom" />
                </div>

                {/* Fonction */}
                <div>
                  <label className={labelClass}>Fonction</label>
                  <input
                    value={form.fonction}
                    onChange={set("fonction")}
                    className={inputClass}
                    placeholder="Ex. Responsable événementiel"
                  />
                </div>

                {/* Entreprise */}
                <div>
                  <label className={labelClass}>Entreprise *</label>
                  <input
                    value={form.entreprise}
                    onChange={set("entreprise")}
                    className={inputClass}
                    placeholder="Nom de la société"
                  />
                </div>

                {/* Email pro */}
                <div>
                  <label className={labelClass}>Email professionnel *</label>
                  <input
                    value={form.email}
                    onChange={set("email")}
                    className={inputClass}
                    placeholder="vous@entreprise.com"
                  />
                </div>

                {/* Téléphone */}
                <div>
                  <label className={labelClass}>Téléphone *</label>
                  <input
                    value={form.telephone}
                    onChange={set("telephone")}
                    className={inputClass}
                    placeholder="+212 6 00 00 00 00"
                  />
                </div>

                {/* Nombre d'invités */}
                <div>
                  <label className={labelClass}>Nombre d'invités</label>
                  <GoldSelect
                    value={form.nb_invites}
                    onChange={setSelect("nb_invites")}
                    options={[
                      "20 – 50 personnes",
                      "51 – 100 personnes",
                      "À partir de 101 personnes",
                    ]}
                    placeholder="Choisissez une taille"
                  />
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label className={labelClass}>Votre projet</label>
                  <textarea
                    value={form.message}
                    onChange={set("message")}
                    className="min-h-32 w-full resize-none rounded-2xl border border-[#8f5b22]/40 bg-[#070403] px-5 py-4 text-sm text-white outline-none transition placeholder:text-[#6f6255] focus:border-[#f5c46c]/70"
                    placeholder="Objectif de la soirée, dates privilégiées, budget indicatif, besoins spécifiques..."
                  />
                </div>

                {/* Error message */}
                {status === "error" && errorMsg && (
                  <div className="md:col-span-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                    ⚠ {errorMsg}
                  </div>
                )}

                {/* Submit row */}
                <div className="md:col-span-2 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-lg text-xs leading-6 text-[#8d7c68]">
                    En envoyant votre demande, vous acceptez d'être contacté par
                    l'équipe corporate Nostalgia Lovers pour établir votre devis.
                  </p>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={status === "loading"}
                    className="shrink-0 rounded-full bg-[#f5c46c] px-7 py-4 text-xs font-black uppercase tracking-[0.16em] text-[#120b05] shadow-[0_18px_70px_rgba(245,196,108,0.18)] hover:bg-[#ffd98b] disabled:opacity-50 disabled:cursor-not-allowed transition"
                  >
                    {status === "loading" ? "Envoi en cours…" : "Recevoir mon offre"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}