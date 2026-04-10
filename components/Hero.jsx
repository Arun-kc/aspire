"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10 md:py-0">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 z-10 transition-opacity duration-1000"></div>
                <div className="w-full h-full bg-neutral-900 flex items-center justify-center">
                    <motion.div
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.5 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 bg-[url('/hero-real.jpg')] bg-cover bg-center bg-no-repeat contrast-125"
                    ></motion.div>
                </div>
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <h1 className="font-heading text-5xl sm:text-7xl md:text-9xl font-black text-white tracking-tighter mb-4 md:mb-6 uppercase drop-shadow-2xl">
                        Aspire to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">Greatness</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="mt-4 max-w-2xl mx-auto text-base sm:text-xl text-gray-300 leading-relaxed font-light"
                >
                    Whether you're looking to build <strong>hardcore muscle</strong> or start your <strong>weight loss journey</strong>,
                    Aspire Fitness Club provides the elite equipment and expert guidance you need.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="mt-8 md:mt-10 flex flex-col sm:flex-row justify-center gap-4"
                >
                    <Link href="#join" className="group w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-primary text-black font-black uppercase tracking-widest rounded-sm hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(255,215,0,0.3)] text-sm md:text-base relative overflow-hidden">
                        <span className="relative z-10">Start Your Journey</span>
                    </Link>
                    <Link href="#programs" className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 border border-white/30 text-white font-bold uppercase tracking-widest rounded-sm hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm text-sm md:text-base">
                        View Programs
                    </Link>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mt-12 md:mt-20 grid grid-cols-2 gap-6 md:grid-cols-4 text-center"
                >
                    <div className="flex flex-col">
                        <span className="font-heading text-4xl md:text-6xl font-bold text-white">4.9</span>
                        <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest">Google Rating</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-heading text-4xl md:text-6xl font-bold text-white">100+</span>
                        <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest">Elite Equipment</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-heading text-4xl md:text-6xl font-bold text-white">24/7</span>
                        <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest">Support</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-heading text-4xl md:text-6xl font-bold text-white">Expert</span>
                        <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest">Trainers</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
