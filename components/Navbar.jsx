"use client";

import Link from 'next/link';
import { Menu, X, Dumbbell } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2 group">
                            <Dumbbell className="h-8 w-8 text-primary transition-transform group-hover:rotate-45" />
                            <div className="flex flex-col">
                                <span className="font-heading font-bold text-2xl tracking-tighter text-white">ASPIRE</span>
                                <span className="text-[10px] tracking-widest text-primary uppercase">Fitness Club</span>
                            </div>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link href="#programs" className="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Programs</Link>
                            <Link href="#success-stories" className="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Success Stories</Link>
                            <Link href="#location" className="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Location</Link>
                            <Link href="#join" className="bg-primary text-black hover:bg-primary-hover px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105">
                                Join Now
                            </Link>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="#programs" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Programs</Link>
                        <Link href="#success-stories" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Success Stories</Link>
                        <Link href="#location" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Location</Link>
                        <Link href="#join" onClick={() => setIsOpen(false)} className="bg-primary text-black block text-center px-3 py-3 mt-4 rounded-md text-base font-bold">
                            Join Now
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
