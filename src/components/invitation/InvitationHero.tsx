"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { weddingConfig } from "@/config/wedding";
import InvitationNavigation from "./InvitationNavigation";

const EDITORIAL_EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: EDITORIAL_EASE,
    },
  },
};

// Configuração de pétalas e partículas flutuantes suaves (volume expandido)
const FALLING_PETALS = [
  { id: 1, left: "6%", size: 11, delay: 0, duration: 11, xDrift: [0, 20, -14, 0], type: "petal" },
  { id: 2, left: "14%", size: 6, delay: 4, duration: 14, xDrift: [0, -12, 10, 0], type: "sparkle" },
  { id: 3, left: "22%", size: 10, delay: 1.5, duration: 13, xDrift: [0, -18, 16, 0], type: "petal" },
  { id: 4, left: "30%", size: 5, delay: 6.2, duration: 16, xDrift: [0, 14, -12, 0], type: "sparkle" },
  { id: 5, left: "38%", size: 12, delay: 2.8, duration: 12.5, xDrift: [0, 16, -20, 0], type: "petal" },
  { id: 6, left: "46%", size: 8, delay: 0.8, duration: 15, xDrift: [0, -14, 15, 0], type: "petal" },
  { id: 7, left: "54%", size: 5, delay: 5.5, duration: 17, xDrift: [0, 12, -14, 0], type: "sparkle" },
  { id: 8, left: "62%", size: 11, delay: 3.2, duration: 13.5, xDrift: [0, -20, 18, 0], type: "petal" },
  { id: 9, left: "70%", size: 7, delay: 7, duration: 14.5, xDrift: [0, 15, -12, 0], type: "petal" },
  { id: 10, left: "78%", size: 5, delay: 1.2, duration: 16, xDrift: [0, -10, 14, 0], type: "sparkle" },
  { id: 11, left: "86%", size: 12, delay: 4.8, duration: 12, xDrift: [0, 18, -16, 0], type: "petal" },
  { id: 12, left: "94%", size: 9, delay: 2.1, duration: 14, xDrift: [0, -15, 12, 0], type: "petal" },
  { id: 13, left: "18%", size: 8, delay: 8.5, duration: 13, xDrift: [0, 14, -16, 0], type: "petal" },
  { id: 14, left: "42%", size: 6, delay: 9.2, duration: 15.5, xDrift: [0, -12, 14, 0], type: "sparkle" },
  { id: 15, left: "66%", size: 10, delay: 8.0, duration: 12.8, xDrift: [0, 18, -14, 0], type: "petal" },
  { id: 16, left: "82%", size: 7, delay: 9.8, duration: 14.2, xDrift: [0, -16, 12, 0], type: "petal" },
];

export default function InvitationHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full min-h-[100dvh] bg-[#FAF6F0] flex flex-col items-center justify-center py-2 sm:py-6 px-2 sm:px-4 select-none overflow-x-hidden relative">
      
      {/* PÉTALAS E PARTÍCULAS FLUTUANTES SUTIS EM SEGUNDO PLANO */}
      {!shouldReduceMotion && (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
          {FALLING_PETALS.map((p) => (
            <motion.div
              key={p.id}
              initial={{ y: -30, opacity: 0, rotate: 0 }}
              animate={{
                y: ["-5vh", "105vh"],
                x: p.xDrift,
                rotate: p.type === "petal" ? [0, 360] : [0, 180],
                opacity: p.type === "petal" ? [0, 0.45, 0.6, 0.35, 0] : [0, 0.65, 0.8, 0.45, 0],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: "linear",
              }}
              style={{
                left: p.left,
                width: p.size,
                height: p.type === "petal" ? p.size * 1.35 : p.size,
              }}
              className={
                p.type === "petal"
                  ? "absolute rounded-[60%_40%_70%_30%/50%_60%_40%_50%] bg-gradient-to-br from-[#C49E7C]/65 via-[#B88A6A]/50 to-[#D4C2AB]/45 filter blur-[0.25px]"
                  : "absolute rounded-full bg-[#C49E7C] shadow-[0_0_6px_rgba(196,158,124,0.6)] opacity-75"
              }
            />
          ))}
        </div>
      )}

      {/* CONTAINER PRINCIPAL DO CONVITE FÍSICO COM ENVELOPE */}
      <div className="relative z-10 w-full max-w-[390px] xs:max-w-[415px] sm:max-w-[460px] flex flex-col items-center shadow-[0_16px_45px_rgba(107,63,42,0.14)] rounded-[20px] sm:rounded-[24px] overflow-hidden bg-[#FAF6F0] my-auto">
        
        {/* ======================================================== */}
        {/* 1. FOLHA PRINCIPAL DO CONVITE                            */}
        {/* ======================================================== */}
        <motion.article
          initial={shouldReduceMotion ? "visible" : "hidden"}
          animate="visible"
          variants={shouldReduceMotion ? undefined : containerVariants}
          className="relative z-10 w-full bg-[#FAF6F0] flex flex-col items-center text-center px-3 sm:px-4 pt-4 xs:pt-5 sm:pt-6 pb-6 xs:pb-7 sm:pb-8 space-y-2.5 xs:space-y-3 sm:space-y-4"
        >
          {/* FOTOGRAFIA COM AQUARELA, FOLHAGENS E PÉTALAS SUTIS ATRÁS */}
          <motion.div
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="relative w-full max-w-[190px] xs:max-w-[210px] sm:max-w-[260px] aspect-[3/4] flex items-center justify-center my-0.5"
          >
            {/* Camada 1: Grande mancha de aquarela ampla */}
            <div
              className="absolute -inset-7 sm:-inset-10 pointer-events-none z-0 flex items-center justify-center"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 460 540"
                className="w-full h-full opacity-75 filter blur-[0.3px]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40,110 C80,35 190,15 290,35 C390,55 445,135 435,240 C425,345 430,440 330,490 C230,540 115,510 55,445 C-5,380 5,280 18,195 C28,130 10,165 40,110 Z"
                  fill="#F1E7DB"
                />
                <path
                  d="M75,80 C155,45 285,55 355,100 C425,145 420,245 395,330 C370,415 375,480 300,500 C225,520 145,480 85,420 C25,360 45,265 58,190 C68,115 35,95 75,80 Z"
                  fill="#E4D5C3"
                  opacity="0.85"
                />
                <path
                  d="M130,55 C220,35 315,70 365,130 C415,190 395,290 360,355 C325,420 300,480 225,485 C150,490 100,425 70,360 C40,295 65,215 95,150 C125,85 80,70 130,55 Z"
                  fill="#D4C2AB"
                  opacity="0.6"
                />
              </svg>
            </div>

            {/* Camada 2: Pétalas e partículas suaves flutuando ao redor da foto */}
            <div
              className="absolute -inset-8 sm:-inset-12 pointer-events-none z-[1] overflow-visible"
              aria-hidden="true"
            >
              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [-2, 3, -2], rotate: [-4, 6, -4], opacity: [0.55, 0.8, 0.55] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-2 left-2 w-3 h-4 rounded-full bg-[#B88A6A]/60 rotate-45 filter blur-[0.2px]"
              />
              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [3, -3, 3], rotate: [8, -6, 8], opacity: [0.5, 0.75, 0.5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute top-8 -left-3 w-2.5 h-3.5 rounded-full bg-[#C49E7C]/65 -rotate-12 filter blur-[0.2px]"
              />
              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [-3, 2, -3], rotate: [-6, 8, -6], opacity: [0.5, 0.75, 0.5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
                className="absolute top-4 right-1 w-3 h-4 rounded-full bg-[#B88A6A]/60 -rotate-30 filter blur-[0.2px]"
              />
              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [2, -3, 2], rotate: [4, -8, 4], opacity: [0.55, 0.8, 0.55] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-12 -right-3 w-2.5 h-3 rounded-full bg-[#C49E7C]/70 rotate-15 filter blur-[0.2px]"
              />

              {/* Partículas sutis de aquarela/dourado */}
              <div className="absolute top-1 left-8 w-1 h-1 rounded-full bg-[#B88A6A] opacity-60" />
              <div className="absolute top-6 right-8 w-1 h-1 rounded-full bg-[#C49E7C] opacity-60" />
              <div className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full bg-[#D4C2AB] opacity-70" />
              <div className="absolute bottom-8 right-3 w-1.5 h-1.5 rounded-full bg-[#D4C2AB] opacity-70" />
            </div>

            {/* Camada 3: Folhagens botânicas em estilo aquarela nos dois lados */}
            <div
              className="absolute -inset-8 sm:-inset-12 pointer-events-none z-[2] overflow-visible"
              aria-hidden="true"
            >
              {/* Ramo botânico esquerdo */}
              <svg
                className="absolute -top-4 -left-6 sm:-left-8 w-28 h-56 sm:w-36 sm:h-72 text-[#9E8269] opacity-85"
                viewBox="0 0 130 260"
                fill="none"
              >
                <path
                  d="M35,240 Q15,140 100,20"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path d="M100,20 Q112,8 114,14 Q106,26 100,20 Z" fill="#94785F" opacity="0.9" />
                <path d="M84,42 Q98,28 103,35 Q93,48 84,42 Z" fill="#B0947B" opacity="0.85" />
                <path d="M68,70 Q54,54 61,48 Q73,60 68,70 Z" fill="#886E56" opacity="0.9" />
                <path d="M54,98 Q70,82 75,90 Q63,105 54,98 Z" fill="#A4886F" opacity="0.85" />
                <path d="M42,128 Q24,110 31,104 Q44,117 42,128 Z" fill="#94785F" opacity="0.9" />
                <path d="M34,158 Q50,142 54,150 Q43,165 34,158 Z" fill="#B0947B" opacity="0.8" />
                <path d="M26,190 Q8,174 15,167 Q28,180 26,190 Z" fill="#886E56" opacity="0.85" />
                <path d="M24,218 Q40,202 44,210 Q34,225 24,218 Z" fill="#A4886F" opacity="0.8" />
              </svg>

              {/* Ramo botânico direito */}
              <svg
                className="absolute -top-4 -right-6 sm:-right-8 w-28 h-56 sm:w-36 sm:h-72 text-[#9E8269] opacity-85"
                viewBox="0 0 130 260"
                fill="none"
              >
                <path
                  d="M95,240 Q115,140 30,20"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path d="M30,20 Q18,8 16,14 Q24,26 30,20 Z" fill="#94785F" opacity="0.9" />
                <path d="M46,42 Q32,28 27,35 Q37,48 46,42 Z" fill="#B0947B" opacity="0.85" />
                <path d="M62,70 Q76,54 69,48 Q57,60 62,70 Z" fill="#886E56" opacity="0.9" />
                <path d="M76,98 Q60,82 55,90 Q67,105 76,98 Z" fill="#A4886F" opacity="0.85" />
                <path d="M88,128 Q106,110 99,104 Q86,117 88,128 Z" fill="#94785F" opacity="0.9" />
                <path d="M96,158 Q80,142 76,150 Q87,165 96,158 Z" fill="#B0947B" opacity="0.8" />
                <path d="M104,190 Q122,174 115,167 Q102,180 104,190 Z" fill="#886E56" opacity="0.85" />
                <path d="M106,218 Q90,202 86,210 Q96,225 106,218 Z" fill="#A4886F" opacity="0.8" />
              </svg>
            </div>

            {/* Camada 4: Card da fotografia com moldura nobre branca e sombra física */}
            <div className="relative z-10 w-full h-full p-1.5 xs:p-2 bg-white rounded-2xl shadow-[0_8px_20px_rgba(107,63,42,0.18)] border border-white transition-transform duration-500 hover:scale-[1.01]">
              <div className="relative w-full h-full rounded-[10px] overflow-hidden">
                <Image
                  src="/images/couple2.jpg"
                  alt="Clara e Luiz sorrindo abraçados"
                  fill
                  sizes="(max-width: 360px) 190px, (max-width: 640px) 210px, 260px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* TÍTULO EM GREAT VIBES COMPLETO ("Clara & Luiz") - CENTRALIZADO E SIMÉTRICO */}
          <motion.h1
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="font-great-vibes text-4xl xs:text-5xl sm:text-6xl md:text-7xl text-[#6B3F2A] font-normal leading-tight my-0.5 tracking-normal select-none flex items-center justify-center flex-wrap"
          >
            <span>Clara</span>
            <span className="text-[#B88A6A] text-[0.85em] font-normal inline-block mx-1.5 sm:mx-2.5 opacity-90">&amp;</span>
            <span>Luiz</span>
          </motion.h1>

          {/* TEXTO DE CONVITE */}
          <motion.div
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="font-body text-[#72655D] text-xs xs:text-[13px] sm:text-sm space-y-0.5 max-w-[320px] mx-auto text-center"
          >
            <p className="tracking-wide">{weddingConfig.copy.invitationLine1}</p>
            <p className="font-medium text-[#3A2A22] tracking-wide">{weddingConfig.copy.invitationLine2}</p>
          </motion.div>

          {/* DATA DO EVENTO EM MONTSERRAT SMALL CAPS COM DIVISÓRIAS SIMÉTRICAS */}
          <motion.div
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="w-full max-w-[300px] flex flex-col items-center my-0.5 mx-auto"
          >
            <StationeryDivider />

            <h2 className="font-montserrat text-primary text-center py-1 leading-snug">
              <span className="block font-medium text-xs xs:text-sm sm:text-base tracking-[0.24em] uppercase">
                {weddingConfig.event.dateDisplay.line1}
              </span>
              <span className="block font-medium text-[10px] xs:text-xs sm:text-sm tracking-[0.3em] uppercase text-primary/90 mt-0.5">
                {weddingConfig.event.dateDisplay.line2}
              </span>
            </h2>

            <StationeryDivider />
          </motion.div>

          {/* Ornamento central em losango */}
          <motion.div
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="flex items-center justify-center opacity-60 -my-1 mx-auto"
            aria-hidden="true"
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-[#6B3F2A]">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
          </motion.div>

          {/* INFORMAÇÕES DETALHADAS DO EVENTO */}
          <motion.p
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="font-body text-[#72655D] text-[10.5px] xs:text-[11.5px] sm:text-xs leading-tight max-w-[320px] mx-auto text-center"
          >
            O evento será às{" "}
            <span className="font-bold text-[#3A2A22]">{weddingConfig.event.time}</span> no{" "}
            <span className="font-bold text-[#3A2A22]">{weddingConfig.event.venue}</span>.
            <br /> Confirme sua presença até o dia{" "}
            <span className="font-bold text-[#3A2A22]">{weddingConfig.rsvp.deadlineDisplay}</span>.
          </motion.p>

          {/* OS 3 BOTÕES DE AÇÃO - PERFEITAMENTE CENTRALIZADOS */}
          <motion.div
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="w-full pt-1 pb-4 relative z-10 flex justify-center"
          >
            <InvitationNavigation />
          </motion.div>
        </motion.article>

        {/* ======================================================== */}
        {/* 2. BASE DO ENVELOPE: CURVA CÔNCAVA, SELO, CORDÃO E FOLHAS */}
        {/* ======================================================== */}
        <div className="relative z-20 w-full -mt-6 pt-0 overflow-visible select-none" aria-hidden="true">
          
          {/* Curva côncava da folha do convite com sombra sobre o envelope */}
          <div className="w-full relative flex justify-center">
            <svg
              viewBox="0 0 440 70"
              preserveAspectRatio="none"
              className="w-full h-12 xs:h-14 sm:h-16 drop-shadow-[0_8px_14px_rgba(107,63,42,0.12)]"
            >
              <path
                d="M0,0 L440,0 L440,15 Q220,70 0,15 Z"
                fill="#FAF6F0"
              />
            </svg>
          </div>

          {/* Bolso do envelope bege/artesanal revelado sob a folha */}
          <div className="relative w-full bg-[#EFE6DC] pt-1 pb-10 xs:pb-12 sm:pb-14 -mt-8 sm:-mt-10 border-t border-[#E2D3C3]">
            
            {/* Linhas de dobra em V do envelope simétricas */}
            <svg
              viewBox="0 0 440 100"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
            >
              <line x1="0" y1="100" x2="220" y2="30" stroke="#C5B5A3" strokeWidth="1.5" />
              <line x1="440" y1="100" x2="220" y2="30" stroke="#C5B5A3" strokeWidth="1.5" />
            </svg>

            {/* Ramos de folhas botânicas no canto inferior esquerdo */}
            <div className="absolute -bottom-1 left-2 pointer-events-none opacity-85">
              <svg width="75" height="75" viewBox="0 0 120 120" fill="none" className="text-[#9E8269]">
                <path d="M15,105 Q50,70 100,35" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M100,35 Q110,22 113,27 Q104,39 100,35 Z" fill="#94785F" />
                <path d="M80,50 Q92,38 97,44 Q87,56 80,50 Z" fill="#B0947B" />
                <path d="M62,68 Q48,52 54,46 Q66,58 62,68 Z" fill="#886E56" />
                <path d="M46,84 Q58,74 61,80 Q50,92 46,84 Z" fill="#A4886F" />
                <path d="M30,98 Q16,84 22,78 Q33,90 30,98 Z" fill="#94785F" />
              </svg>
            </div>

            {/* Ramos de folhas botânicas no canto inferior direito */}
            <div className="absolute -bottom-1 right-2 pointer-events-none opacity-85">
              <svg width="75" height="75" viewBox="0 0 120 120" fill="none" className="text-[#9E8269]">
                <path d="M105,105 Q70,70 20,35" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M20,35 Q10,22 7,27 Q16,39 20,35 Z" fill="#94785F" />
                <path d="M40,50 Q28,38 23,44 Q33,56 40,50 Z" fill="#B0947B" />
                <path d="M58,68 Q72,52 66,46 Q54,58 58,68 Z" fill="#886E56" />
                <path d="M74,84 Q62,74 59,80 Q70,92 74,84 Z" fill="#A4886F" />
                <path d="M90,98 Q104,84 98,78 Q87,90 90,98 Z" fill="#94785F" />
              </svg>
            </div>

            {/* SELO DE CERA 3D COM CORDÃO DE LINHA NATURAL - RIGOROSAMENTE CENTRALIZADO */}
            <div className="relative flex flex-col items-center justify-center pt-1 sm:pt-3">
              
              {/* Laços do cordão de linha natural abaixo do selo */}
              <div className="absolute top-8 sm:top-10 w-28 sm:w-32 h-10 flex items-center justify-center pointer-events-none">
                <svg viewBox="0 0 120 48" className="w-full h-full text-[#B88A6A] opacity-90 drop-shadow-sm">
                  <path
                    d="M60,12 C40,34 14,42 22,22 C29,6 54,10 60,12 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M60,12 C80,34 106,42 98,22 C91,6 66,10 60,12 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <path d="M60,12 Q46,38 34,44" fill="none" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M60,12 Q74,38 86,44" fill="none" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </div>

              {/* Selo de cera 3D com monograma C&L */}
              <div className="relative z-10 w-13 h-13 sm:w-15 sm:h-15 w-[54px] h-[54px] sm:w-[62px] sm:h-[62px] rounded-full bg-[#6B3F2A] shadow-[0_6px_20px_rgba(107,63,42,0.42)] border-2 border-[#542F1E] flex items-center justify-center ring-2 ring-[#B88A6A]/40">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#B88A6A]/40 flex items-center justify-center bg-gradient-to-br from-[#7E453D] via-[#6B3F2A] to-[#4A2616] shadow-inner">
                  <span className="font-great-vibes text-base sm:text-lg font-bold text-[#FAF6F0] tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] select-none">
                    C&amp;L
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function StationeryDivider() {
  return (
    <div className="w-full flex items-center justify-center gap-1.5 opacity-55">
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#6B3F2A]/50 to-[#B88A6A]" />
      <div className="w-1 h-1 rotate-45 bg-[#6B3F2A] rounded-[0.5px]" />
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#6B3F2A]/50 to-[#B88A6A]" />
    </div>
  );
}
