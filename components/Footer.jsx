
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer id="location" className="bg-secondary border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Brand Info */}
                    <div>
                        <div className="flex flex-col mb-6">
                            <span className="font-bold text-2xl tracking-tighter text-white">ASPIRE</span>
                            <span className="text-xs tracking-widest text-primary uppercase">Fitness Club</span>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Adooparambu, Muvattupuzha, Kerala. <br />
                            The premier destination for fitness enthusiasts.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors">
                                <Facebook className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-widest mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                <span className="ml-3 text-gray-400">
                                    Aspire Fitness Club,<br />
                                    Adooparambu, Muvattupuzha,<br />
                                    Kerala 686661
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                                <span className="ml-3 text-gray-400">+91 98460 12345</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                                <span className="ml-3 text-gray-400">contact@aspirefitness.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Map (Placeholder if address not exact geocodable immediately, but we can put an iframe or link) */}
                    <div className="h-64 rounded-lg overflow-hidden bg-gray-800 relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15719.664421526487!2d76.57!3d9.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTgnNDguMCJOIDc2wrAzNCcyNC4wIkU!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                        {/* Using generic coordinates for Muvattupuzha for now, user can update */}
                    </div>
                </div>

                <div className="border-t border-white/5 mt-16 pt-8 text-center text-sm text-gray-600">
                    <p>&copy; {new Date().getFullYear()} Aspire Fitness Club. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
