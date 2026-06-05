"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Crown, Building2, ArrowRight, MapPin } from "lucide-react";

/* ─────────────────────────────────────────────
   Entry / Splash Page — choose Corporate or VIP
   The two choices are the focus. Centers on one screen,
   and scrolls gracefully on very short / small devices.
   ───────────────────────────────────────────── */
export default function NostalgiaEntryLanding() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const choices = [
    {
      href: "/corporate",
      icon: Building2,
      label: "Offre Corporate",
      sub: "Entreprises & Groupes",
      desc: "Tarifs préférentiels et formules sur-mesure pour vos équipes et vos clients.",
    },
    {
      href: "/vip",
      icon: Crown,
      label: "VIP / VVIP",
      sub: "Tables & expériences privées",
      desc: "Placement privilégié, service à table et soirées dans un cadre d'exception.",
    },
  ];

  return (
    <main className="relative min-h-[100dvh] overflow-x-hidden bg-[#050403] text-[#f8f1e7] font-sans selection:bg-[#c99145]/40">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,145,69,0.26),transparent_34%),radial-gradient(circle_at_88%_18%,rgba(255,119,23,0.16),transparent_28%),linear-gradient(180deg,#090604_0%,#050403_45%,#020202_100%)]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div className="absolute left-1/2 top-[10%] h-[60vw] max-h-[520px] w-[60vw] max-w-[520px] -translate-x-1/2 rounded-full border border-[#c99145]/15 blur-[1px]" />
        <div className="absolute left-1/2 top-[14%] h-[42vw] max-h-[360px] w-[42vw] max-w-[360px] -translate-x-1/2 rounded-full border border-[#f5c46c]/10" />
      </div>

      {/* Centered, scroll-safe wrapper */}
      <div className="relative flex min-h-[100dvh] flex-col items-center justify-center px-5 py-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex w-full max-w-4xl flex-col items-center text-center"
        >
          {/* Small brand wordmark */}
          <motion.div
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#c99145]/25 bg-[#160d07]/70 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.28em] text-[#d69a45] shadow-[0_0_60px_rgba(201,145,69,0.12)] backdrop-blur sm:mb-7 sm:gap-3 sm:px-5 sm:text-[11px] sm:tracking-[0.32em]"
          >
            <Crown size={13} className="shrink-0" /> Nostalgia Lovers · 3ème édition
          </motion.div>

          {/* Headline = the choice */}
          <motion.h1
            variants={fadeUp}
            className="text-[12vw] font-black uppercase leading-[0.88] tracking-[0.02em] sm:text-[52px] lg:text-[68px]"
          >
            Choisissez votre
            <span className="block bg-gradient-to-r from-[#f7e0b5] via-[#d69a45] to-[#ff7a1a] bg-clip-text text-transparent">
              expérience
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-md text-sm leading-7 text-[#bdad98] sm:mt-5 sm:text-base"
          >
            Deux façons de vivre l'événement. Sélectionnez l'offre qui vous
            correspond.
          </motion.p>

          {/* Choice buttons — the focus */}
          <motion.div
            variants={fadeUp}
            className="mt-7 grid w-full grid-cols-1 gap-4 sm:mt-9 sm:grid-cols-2"
          >
            {choices.map(({ href, icon: Icon, label, sub, desc }) => (
              <Link
                key={href}
                href={href}
                className="group flex flex-col rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-5 text-left backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#c99145]/45 hover:bg-white/[0.06] sm:rounded-[2rem] sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#c99145]/30 bg-[#0b0705] text-[#d69a45] transition group-hover:bg-[#f5c46c] group-hover:text-[#130b05] sm:h-14 sm:w-14">
                    <Icon size={24} />
                  </span>
                  <ArrowRight
                    size={22}
                    className="text-[#d69a45] transition group-hover:translate-x-1"
                  />
                </div>
                <div className="mt-4 text-lg font-black uppercase tracking-[-0.01em] text-[#f8f1e7] sm:mt-6 sm:text-xl">
                  {label}
                </div>
                <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#a89883]">
                  {sub}
                </div>
                <p className="mt-3 hidden text-sm leading-6 text-[#9a8a76] sm:block">
                  {desc}
                </p>
              </Link>
            ))}
          </motion.div>

          {/* Meta line */}
          <motion.div
            variants={fadeUp}
            className="mt-7 flex flex-col items-center gap-1 text-xs text-[#8d7c68] sm:mt-8 sm:flex-row sm:gap-3"
          >
            <span className="font-bold tracking-[0.12em]">18 — 20 JUIN 2026</span>
            <span className="hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={13} className="text-[#d69a45]" /> Vélodrome de Casablanca
            </span>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}