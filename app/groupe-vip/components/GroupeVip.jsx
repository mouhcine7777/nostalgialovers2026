"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Crown, Building2, ArrowRight, MapPin } from "lucide-react";

/* ─────────────────────────────────────────────
   Entry / Splash Page — choose Corporate or VIP
   Fits a single screen (100svh), fully responsive.
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
    },
    {
      href: "/vip",
      icon: Crown,
      label: "VIP / VVIP",
      sub: "Tables & expériences privées",
    },
  ];

  return (
    <main className="relative flex h-[100svh] flex-col items-center justify-center overflow-hidden bg-[#050403] px-5 text-[#f8f1e7] font-sans selection:bg-[#c99145]/40">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,145,69,0.26),transparent_34%),radial-gradient(circle_at_88%_18%,rgba(255,119,23,0.16),transparent_28%),linear-gradient(180deg,#090604_0%,#050403_45%,#020202_100%)]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div className="absolute left-1/2 top-[12%] h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-[#c99145]/15 blur-[1px]" />
        <div className="absolute left-1/2 top-[16%] h-[360px] w-[360px] -translate-x-1/2 rounded-full border border-[#f5c46c]/10" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative flex w-full max-w-3xl flex-col items-center text-center"
      >
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#c99145]/25 bg-[#160d07]/70 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.34em] text-[#d69a45] shadow-[0_0_60px_rgba(201,145,69,0.12)] backdrop-blur sm:text-[11px]">
          <Crown size={14} /> 3ème édition
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          className="text-[13vw] font-black uppercase leading-[0.82] tracking-[0.02em] sm:text-[64px] lg:text-[88px]"
        >
          NOSTALGIA
          <span className="block bg-gradient-to-r from-[#f7e0b5] via-[#d69a45] to-[#ff7a1a] bg-clip-text text-transparent">
            LOVERS
          </span>
        </motion.h1>

        {/* Meta line */}
        <motion.div
          variants={fadeUp}
          className="mt-5 flex flex-col items-center gap-1 text-xs text-[#cdbfab] sm:flex-row sm:gap-3 sm:text-sm"
        >
          <span className="font-bold tracking-[0.12em]">18 — 20 JUIN 2026</span>
          <span className="hidden text-[#6f6255] sm:inline">•</span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} className="text-[#d69a45]" /> Vélodrome de Casablanca
          </span>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-[11px] font-bold uppercase tracking-[0.28em] text-[#8d7c68]"
        >
          Choisissez votre expérience
        </motion.p>

        {/* Choice buttons */}
        <motion.div
          variants={fadeUp}
          className="mt-6 grid w-full grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {choices.map(({ href, icon: Icon, label, sub }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-center justify-between gap-4 rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 text-left backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#c99145]/40"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#c99145]/30 text-[#d69a45]">
                  <Icon size={22} />
                </span>
                <div>
                  <div className="text-base font-black uppercase tracking-[-0.01em] text-[#f8f1e7]">
                    {label}
                  </div>
                  <div className="mt-0.5 text-[11px] uppercase tracking-[0.16em] text-[#a89883]">
                    {sub}
                  </div>
                </div>
              </div>
              <ArrowRight
                size={20}
                className="shrink-0 text-[#d69a45] transition group-hover:translate-x-1"
              />
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </main>
  );
}