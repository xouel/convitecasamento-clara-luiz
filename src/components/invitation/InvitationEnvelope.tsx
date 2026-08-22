"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { weddingConfig } from "@/config/wedding";

interface InvitationEnvelopeProps {
  onOpen: () => void;
}

const EDITORIAL_EASE = [0.22, 1, 0.36, 1] as const;

// Configuração de pétalas e partículas flutuantes suaves
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

export default function InvitationEnvelope({ onOpen }: InvitationEnvelopeProps) {
  const [status, setStatus] = useState<"closed" | "opening" | "opened">("closed");
  const shouldReduceMotion = useReducedMotion();

  const handleOpen = () => {
    if (status !== "closed") return;
    setStatus("opening");

    const duration = shouldReduceMotion ? 50 : 850;

    setTimeout(() => {
      setStatus("opened");
      onOpen();
    }, duration);
  };

  if (status === "opened") {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FAF6F0] p-4 w-full select-none overflow-hidden relative">
      
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

      {/* ENVELOPE FECHADO */}
      <motion.div
        aria-label="Envelope do Convite de Casamento de Clara & Luiz"
        className="relative z-10 w-full max-w-[380px] xs:max-w-[420px] sm:max-w-[460px] aspect-[16/10] sm:aspect-[16/9.6] flex items-center justify-center cursor-pointer"
        initial={{ opacity: 1, scale: 1 }}
        animate={
          status === "opening"
            ? { opacity: shouldReduceMotion ? 0 : 0, scale: shouldReduceMotion ? 1 : 1.05, y: shouldReduceMotion ? 0 : 12 }
            : { opacity: 1, scale: 1, y: 0 }
        }
        transition={{
          duration: shouldReduceMotion ? 0.05 : 0.65,
          delay: shouldReduceMotion ? 0 : 0.45,
          ease: EDITORIAL_EASE,
        }}
      >
        <button
          type="button"
          onClick={handleOpen}
          disabled={status !== "closed"}
          aria-label="Toque no selo de cera para abrir a carta"
          className="relative w-full h-full cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B3F2A] focus-visible:ring-offset-4 rounded-[22px]"
        >
          {/* Fundo e corpo do envelope em papel kraft/areia artesanal */}
          <div className="absolute inset-0 bg-[#EFE6DC] rounded-[22px] shadow-[0_20px_45px_rgba(107,63,42,0.16)] overflow-hidden border border-[#E2D3C3]">
            
            {/* Folhagens aquareladas no canto inferior esquerdo */}
            <div className="absolute -bottom-3 left-1 pointer-events-none opacity-85 z-0">
              <svg width="105" height="105" viewBox="0 0 120 120" fill="none" className="text-[#9E8269]">
                <path d="M15,105 Q50,70 100,35" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M100,35 Q110,22 113,27 Q104,39 100,35 Z" fill="#94785F" />
                <path d="M80,50 Q92,38 97,44 Q87,56 80,50 Z" fill="#B0947B" />
                <path d="M62,68 Q48,52 54,46 Q66,58 62,68 Z" fill="#886E56" />
                <path d="M46,84 Q58,74 61,80 Q50,92 46,84 Z" fill="#A4886F" />
                <path d="M30,98 Q16,84 22,78 Q33,90 30,98 Z" fill="#94785F" />
              </svg>
            </div>

            {/* Folhagens aquareladas no canto inferior direito */}
            <div className="absolute -bottom-3 right-1 pointer-events-none opacity-85 z-0">
              <svg width="105" height="105" viewBox="0 0 120 120" fill="none" className="text-[#9E8269]">
                <path d="M105,105 Q70,70 20,35" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M20,35 Q10,22 7,27 Q16,39 20,35 Z" fill="#94785F" />
                <path d="M40,50 Q28,38 23,44 Q33,56 40,50 Z" fill="#B0947B" />
                <path d="M58,68 Q72,52 66,46 Q54,58 58,68 Z" fill="#886E56" />
                <path d="M74,84 Q62,74 59,80 Q70,92 74,84 Z" fill="#A4886F" />
                <path d="M90,98 Q104,84 98,78 Q87,90 90,98 Z" fill="#94785F" />
              </svg>
            </div>

            {/* Folha interna de papel creme revelada no interior do envelope */}
            <div className="absolute inset-x-3 top-3 bottom-1 bg-[#FAF6F0] rounded-t-xl border border-[#E4D5C3] shadow-[inset_0_2px_4px_rgba(107,63,42,0.04)] flex flex-col items-center justify-center">
              <span className="font-great-vibes text-[#6B3F2A]/30 text-3xl sm:text-4xl font-normal">
                Clara &amp; Luiz
              </span>
            </div>
          </div>

          {/* Abas laterais e inferior com dobras em V */}
          <div className="absolute inset-0 pointer-events-none rounded-[22px] overflow-hidden">
            {/* Aba esquerda */}
            <svg
              className="absolute left-0 top-0 h-full w-1/2 drop-shadow-[1px_0_2px_rgba(107,63,42,0.06)]"
              viewBox="0 0 100 150"
              preserveAspectRatio="none"
            >
              <polygon points="0,0 100,75 0,150" fill="#E8DDD0" />
              <polyline points="0,0 100,75 0,150" fill="none" stroke="#D9CCA" strokeWidth="1" />
            </svg>

            {/* Aba direita */}
            <svg
              className="absolute right-0 top-0 h-full w-1/2 drop-shadow-[-1px_0_2px_rgba(107,63,42,0.06)]"
              viewBox="0 0 100 150"
              preserveAspectRatio="none"
            >
              <polygon points="100,0 0,75 100,150" fill="#E4D8CA" />
              <polyline points="100,0 0,75 100,150" fill="none" stroke="#D9CCA" strokeWidth="1" />
            </svg>

            {/* Aba inferior */}
            <svg
              className="absolute bottom-0 left-0 w-full h-1/2 drop-shadow-[0_-3px_5px_rgba(107,63,42,0.08)]"
              viewBox="0 0 200 100"
              preserveAspectRatio="none"
            >
              <polygon points="0,100 100,20 200,100" fill="#EFE6DC" />
              <polyline points="0,100 100,20 200,100" fill="none" stroke="#DED0C0" strokeWidth="1" />
            </svg>
          </div>

          {/* Aba superior dobrável em 3D (CARTA FECHADA - LIMPA SEM NOMES/DATA) */}
          <div
            className="absolute top-0 left-0 w-full h-[55%] pointer-events-none z-10"
            style={{ perspective: "1000px" }}
          >
            <motion.div
              className="w-full h-full origin-top relative"
              initial={{ rotateX: 0 }}
              animate={{ rotateX: status === "opening" ? (shouldReduceMotion ? 0 : -165) : 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.05 : 0.6,
                ease: EDITORIAL_EASE,
              }}
            >
              {/* Geometria da aba superior com papel creme e dobra suave */}
              <svg
                className="w-full h-full drop-shadow-[0_8px_14px_rgba(107,63,42,0.14)]"
                viewBox="0 0 440 160"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,0 L440,0 L440,25 Q220,160 0,25 Z"
                  fill="#FAF6F0"
                />
                <path
                  d="M0,25 Q220,160 440,25"
                  fill="none"
                  stroke="#E2D3C3"
                  strokeWidth="1.4"
                />
              </svg>

              {/* Selo de cera 3D centralizado na ponta da aba */}
              <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-20 transition-transform duration-300 group-hover:scale-105">
                <EnvelopeWaxSeal />
              </div>
            </motion.div>
          </div>
        </button>
      </motion.div>
    </div>
  );
}

function EnvelopeWaxSeal() {
  const text = weddingConfig.copy.openEnvelope;

  return (
    <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
      {/* Texto rotativo sutil ao redor do selo */}
      <svg className="absolute inset-0 w-full h-full animate-[spin_24s_linear_infinite]" viewBox="0 0 120 120">
        <path
          id="sealTextPath"
          d="M 60,60 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
          fill="none"
        />
        <text className="font-body text-[9.5px] font-semibold tracking-[0.22em] fill-[#6B3F2A] uppercase">
          <textPath href="#sealTextPath" startOffset="50%" textAnchor="middle">
            {text} • {text} •
          </textPath>
        </text>
      </svg>

      {/* Selo de cera 3D com relevo artesanal e monograma C&L */}
      <div className="relative z-10 w-15 h-15 sm:w-16 sm:h-16 rounded-full bg-[#6B3F2A] shadow-[0_8px_22px_rgba(107,63,42,0.42)] border-2 border-[#542F1E] flex items-center justify-center ring-2 ring-[#B88A6A]/40">
        <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-[#B88A6A]/40 flex items-center justify-center bg-gradient-to-br from-[#7E453D] via-[#6B3F2A] to-[#4A2616] shadow-inner">
          <span className="font-great-vibes text-base sm:text-lg font-bold text-[#FAF6F0] tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] select-none">
            C&amp;L
          </span>
        </div>
      </div>
    </div>
  );
}
