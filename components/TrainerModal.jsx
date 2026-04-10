
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy, Star, Quote } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function TrainerModal() {
    const [isOpen, setIsOpen] = useState(false);

    // Auto-open effect (optional, or remove if user finds it annoying)
    // For now, we'll keep it manual trigger via a floating button or Hero button

    return (
        <>
            {/* Trigger Button - Floating or Placed */}
            <motion.button
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-8 right-8 z-40 flex items-center gap-3 bg-primary text-black px-6 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:scale-105 transition-transform"
            >
                <Trophy className="w-5 h-5" />
                <span className="uppercase tracking-wider text-sm">Meet the Trainer</span>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="relative w-full max-w-4xl bg-card border border-white/10 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2 max-h-[85vh] md:max-h-none overflow-y-auto md:overflow-visible scrollbar-hide"
                        >
                            {/* Image Side */}
                            <div className="relative h-64 md:h-auto overflow-hidden shrink-0">
                                <div
                                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform hover:scale-105 duration-700"
                                    style={{ backgroundImage: "url('/trainer.jpg')" }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent md:bg-gradient-to-r"></div>
                                <div className="absolute bottom-4 left-4 text-white p-4">
                                    <p className="font-heading text-4xl font-bold text-primary">MASTER</p>
                                    <p className="text-sm tracking-widest uppercase opacity-80">Head Coach & Founder</p>
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="p-6 md:p-12 flex flex-col justify-center relative bg-secondary">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-4 right-4 p-2 bg-black/20 rounded-full md:bg-transparent text-gray-300 hover:text-white transition-colors z-10"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <div className="mb-6 pt-2 md:pt-0">
                                    <div className="flex gap-1 mb-2">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 text-primary fill-primary" />)}
                                    </div>
                                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-2">
                                        TRANSFORM WITH <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">THE BEST</span>
                                    </h2>
                                </div>

                                <div className="space-y-4 text-gray-300 font-light leading-relaxed">
                                    <p>
                                        <Quote className="w-8 h-8 text-white/10 inline mr-2 -mt-2" />
                                        With over a decade of experience in bodybuilding and functional fitness, I don't just train bodies—I forge mindsets.
                                    </p>
                                    <p>
                                        My mission at Aspire is to provide elite-level guidance that was previously accessible only to professional athletes. Whether you are starting day 1 or day 1000, we train with the same intensity.
                                    </p>
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/10">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <span className="block text-2xl font-bold text-white">15+</span>
                                            <span className="text-xs text-gray-500 uppercase tracking-widest">Years Exp</span>
                                        </div>
                                        <div>
                                            <span className="block text-2xl font-bold text-white">500+</span>
                                            <span className="text-xs text-gray-500 uppercase tracking-widest">Clients Transformed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
