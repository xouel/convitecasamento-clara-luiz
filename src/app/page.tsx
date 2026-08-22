"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InvitationEnvelope from "@/components/invitation/InvitationEnvelope";
import InvitationHero from "@/components/invitation/InvitationHero";

const EDITORIAL_EASE = [0.22, 1, 0.36, 1] as const;

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background text-weddingText overflow-x-hidden relative flex flex-col items-center justify-start py-0 sm:py-6">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="envelope"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.45, ease: EDITORIAL_EASE }}
            className="w-full flex items-center justify-center min-h-screen"
          >
            <InvitationEnvelope onOpen={() => setIsOpen(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="hero"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EDITORIAL_EASE }}
            className="w-full flex flex-col items-center justify-start"
          >
            <InvitationHero />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
